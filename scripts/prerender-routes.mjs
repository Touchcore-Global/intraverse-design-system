#!/usr/bin/env node
/* eslint-disable */
/**
 * Build-time prerender using JSDOM.
 *
 * Instead of executing the React app (which would require shimming
 * Supabase, fetch, browser globals, etc. inside Node), this script
 * takes the already-built dist/index.html as a template and writes a
 * per-route copy with the correct <head> for each route in
 * reactSnap.include.
 *
 * For each route it rewrites:
 *   - <title>
 *   - <meta name="description">
 *   - <link rel="canonical">
 *   - <link rel="alternate" hreflang="en-NG"|"en"|"x-default">
 *   - <meta property="og:title">
 *   - <meta property="og:description">
 *   - <meta property="og:url">
 *   - <meta name="twitter:title">
 *   - <meta name="twitter:description">
 *   - <meta name="robots"> on routes flagged noindex
 *
 * Output: dist/<route>/index.html for every non-root route, plus the
 * rewritten dist/index.html for "/". This makes non-JS crawlers see
 * per-route canonical/hreflang/og:* without needing Chromium at build.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { JSDOM } from "jsdom";
import {
  ROUTE_SEO,
  NOINDEX_ROUTES,
  SITE_URL,
  DEFAULT_OG_IMAGE,
} from "./route-seo.mjs";
import { getReactSnapInclude } from "./seo-check.config.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, "..", "dist");
const TEMPLATE = path.join(DIST, "index.html");

if (!fs.existsSync(TEMPLATE)) {
  console.error("[prerender] dist/index.html not found — run `vite build` first.");
  process.exit(1);
}

const templateHtml = fs.readFileSync(TEMPLATE, "utf8");
const routes = getReactSnapInclude();
if (!routes.includes("/")) routes.unshift("/");

function expectedUrl(route) {
  return route === "/" ? SITE_URL : `${SITE_URL}${route}`;
}

/**
 * Upsert a <meta> tag matched by an attribute key, creating it in <head>
 * if missing. Removes duplicates so we ship exactly one per slot.
 */
function upsertMeta(doc, attr, key, content) {
  const selector = `meta[${attr}="${key}"]`;
  const existing = doc.head.querySelectorAll(selector);
  let target = existing[0];
  for (let i = 1; i < existing.length; i++) existing[i].remove();
  if (!target) {
    target = doc.createElement("meta");
    target.setAttribute(attr, key);
    doc.head.appendChild(target);
  }
  target.setAttribute("content", content);
}

function removeMeta(doc, attr, key) {
  doc.head.querySelectorAll(`meta[${attr}="${key}"]`).forEach((el) => el.remove());
}

function upsertCanonical(doc, href) {
  const existing = doc.head.querySelectorAll('link[rel="canonical"]');
  let target = existing[0];
  for (let i = 1; i < existing.length; i++) existing[i].remove();
  if (!target) {
    target = doc.createElement("link");
    target.setAttribute("rel", "canonical");
    doc.head.appendChild(target);
  }
  target.setAttribute("href", href);
}

function upsertHreflang(doc, lang, href) {
  const sel = `link[rel="alternate"][hreflang="${lang}"]`;
  const existing = doc.head.querySelectorAll(sel);
  let target = existing[0];
  for (let i = 1; i < existing.length; i++) existing[i].remove();
  if (!target) {
    target = doc.createElement("link");
    target.setAttribute("rel", "alternate");
    target.setAttribute("hreflang", lang);
    doc.head.appendChild(target);
  }
  target.setAttribute("href", href);
}

function setTitle(doc, title) {
  let el = doc.head.querySelector("title");
  if (!el) {
    el = doc.createElement("title");
    doc.head.insertBefore(el, doc.head.firstChild);
  }
  el.textContent = title;
  // Remove any other <title> tags
  const all = doc.head.querySelectorAll("title");
  for (let i = 1; i < all.length; i++) all[i].remove();
}

function renderRoute(route) {
  const seo = ROUTE_SEO[route];
  if (!seo) {
    console.warn(`[prerender] No SEO metadata for ${route} — falling back to homepage.`);
  }
  const meta = seo ?? ROUTE_SEO["/"];
  const url = expectedUrl(route);
  const noindex = NOINDEX_ROUTES.has(route);

  const dom = new JSDOM(templateHtml);
  const doc = dom.window.document;

  setTitle(doc, meta.title);
  upsertMeta(doc, "name", "description", meta.description);

  upsertCanonical(doc, url);
  upsertHreflang(doc, "en-NG", url);
  upsertHreflang(doc, "en", url);
  upsertHreflang(doc, "x-default", url);

  upsertMeta(doc, "property", "og:title", meta.title);
  upsertMeta(doc, "property", "og:description", meta.description);
  upsertMeta(doc, "property", "og:url", url);
  upsertMeta(doc, "property", "og:image", DEFAULT_OG_IMAGE);

  upsertMeta(doc, "name", "twitter:card", "summary_large_image");
  upsertMeta(doc, "name", "twitter:title", meta.title);
  upsertMeta(doc, "name", "twitter:description", meta.description);
  upsertMeta(doc, "name", "twitter:image", DEFAULT_OG_IMAGE);

  if (noindex) {
    upsertMeta(doc, "name", "robots", "noindex, nofollow");
  } else {
    removeMeta(doc, "name", "robots");
  }

  return dom.serialize();
}

function outputPath(route) {
  if (route === "/") return TEMPLATE;
  const dir = path.join(DIST, route.replace(/^\//, ""));
  fs.mkdirSync(dir, { recursive: true });
  return path.join(dir, "index.html");
}

let written = 0;
for (const route of routes) {
  const html = renderRoute(route);
  const out = outputPath(route);
  fs.writeFileSync(out, html, "utf8");
  written++;
}

console.log(`[prerender] Wrote ${written} per-route HTML files into dist/.`);
