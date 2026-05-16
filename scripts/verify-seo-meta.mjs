#!/usr/bin/env node
/* eslint-disable */
/**
 * Post-build SEO meta validator.
 *
 * Walks every pre-rendered HTML file in dist/ (produced by react-snap) and
 * asserts that each indexable page has the SEO essentials:
 *   - <title> present, non-empty, not the default Lovable placeholder
 *   - <meta name="description"> present, 50–170 chars
 *   - <link rel="canonical"> present and on the expected host
 *   - Exactly one canonical, one title, one description
 *   - hreflang alternates present (en-NG, en, x-default)
 *   - Open Graph: og:title, og:description, og:image, og:url
 *   - Twitter card meta
 *   - Pages NOT listed in reactSnap.include are skipped (admin/login etc.)
 *   - No accidental <meta name="robots" content="noindex"> on indexable pages
 *
 * Exits 1 on any failure so the build fails loudly in CI.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { seoCheckConfig, compileRules, matches } from "./seo-check.config.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, "..", "dist");
const SITE_URL = seoCheckConfig.siteUrl;
const HOST = new URL(SITE_URL).host;

const denylist = compileRules(seoCheckConfig.denylist);
const allowlist = compileRules(seoCheckConfig.allowlist);
const noindexRules = compileRules(seoCheckConfig.noindexRoutes);
const hasAllowlist = seoCheckConfig.allowlist.length > 0;

if (!fs.existsSync(DIST)) {
  console.error("[verify-seo-meta] dist/ not found — run `vite build` first.");
  process.exit(1);
}

// Collect all index.html files under dist/ (one per pre-rendered route).
function walk(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, acc);
    else if (entry.isFile() && entry.name === "index.html") acc.push(full);
  }
  return acc;
}

const htmlFiles = walk(DIST);
if (htmlFiles.length === 0) {
  console.error("[verify-seo-meta] No index.html files in dist/.");
  process.exit(1);
}

const failures = [];
const skipped = [];
let passed = 0;
let noindexChecked = 0;

const META = {
  description: /<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i,
  robots: /<meta\s+name=["']robots["']\s+content=["']([^"']*)["']/i,
  ogTitle: /<meta\s+property=["']og:title["']\s+content=["']([^"']*)["']/i,
  ogDescription: /<meta\s+property=["']og:description["']\s+content=["']([^"']*)["']/i,
  ogImage: /<meta\s+property=["']og:image["']\s+content=["']([^"']*)["']/i,
  ogUrl: /<meta\s+property=["']og:url["']\s+content=["']([^"']*)["']/i,
  twitterCard: /<meta\s+name=["']twitter:card["']\s+content=["']([^"']*)["']/i,
};

function countMatches(html, re) {
  const g = new RegExp(re.source, "gi");
  return (html.match(g) || []).length;
}

for (const file of htmlFiles) {
  const route = "/" + path.relative(DIST, path.dirname(file)).replace(/\\/g, "/");
  const normalized = route === "/." ? "/" : route.replace(/\/$/, "") || "/";

  // 1. Denylist: skip entirely.
  if (matches(normalized, denylist)) {
    skipped.push({ route: normalized, reason: "denylist" });
    continue;
  }
  // 2. Allowlist (if non-empty): skip routes not in it.
  if (hasAllowlist && !matches(normalized, allowlist)) {
    skipped.push({ route: normalized, reason: "not in allowlist" });
    continue;
  }

  const html = fs.readFileSync(file, "utf8");
  const errs = [];

  // 3. Noindex routes: REQUIRE the noindex tag and skip positive checks.
  if (matches(normalized, noindexRules)) {
    const robotsMatch = html.match(META.robots);
    if (!robotsMatch || !/noindex/i.test(robotsMatch[1])) {
      failures.push({
        route: normalized,
        errs: [`expected <meta name="robots" content="noindex"> but found: ${robotsMatch?.[1] ?? "(none)"}`],
      });
    } else {
      noindexChecked++;
    }
    continue;
  }

  // Title
  const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/i);
  const titleCount = countMatches(html, /<title>/i);
  if (!titleMatch) errs.push("missing <title>");
  else {
    const t = titleMatch[1].trim();
    if (!t) errs.push("empty <title>");
    if (/lovable|vite|react app/i.test(t)) errs.push(`default placeholder title: "${t}"`);
    if (titleCount > 1) errs.push(`${titleCount} <title> tags (expected 1)`);
  }

  // Description
  const descMatch = html.match(META.description);
  const descCount = countMatches(html, META.description);
  if (!descMatch) errs.push("missing meta description");
  else {
    const d = descMatch[1];
    if (d.length < seoCheckConfig.descriptionMin)
      errs.push(`description too short (${d.length} chars, min ${seoCheckConfig.descriptionMin})`);
    if (d.length > seoCheckConfig.descriptionMax)
      errs.push(`description too long (${d.length} chars, max ${seoCheckConfig.descriptionMax})`);
    if (descCount > 1) errs.push(`${descCount} description tags (expected 1)`);
  }

  // Expected absolute URL for this route: siteUrl + path (no trailing slash
  // except on root). Canonical, og:url, and every hreflang href must match.
  const expectedUrl = normalized === "/" ? SITE_URL : `${SITE_URL}${normalized}`;

  // Canonical — must exactly equal expectedUrl
  const canonicalMatches = [
    ...html.matchAll(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/gi),
  ];
  if (canonicalMatches.length === 0) errs.push("missing canonical");
  else if (canonicalMatches.length > 1)
    errs.push(`${canonicalMatches.length} canonical tags (expected 1)`);
  else {
    const c = canonicalMatches[0][1];
    if (c !== expectedUrl)
      errs.push(`canonical mismatch: got "${c}", expected "${expectedUrl}"`);
  }

  // og:url — must exactly equal expectedUrl
  const ogUrlMatch = html.match(META.ogUrl);
  if (ogUrlMatch && ogUrlMatch[1] !== expectedUrl)
    errs.push(`og:url mismatch: got "${ogUrlMatch[1]}", expected "${expectedUrl}"`);

  // hreflang alternates — present AND pointing at expectedUrl
  for (const lang of seoCheckConfig.hreflangs) {
    const re = new RegExp(
      `<link\\s+rel=["']alternate["']\\s+hre[fF]Lang=["']${lang}["']\\s+href=["']([^"']+)["']`,
      "i",
    );
    const m = html.match(re);
    if (!m) errs.push(`missing hreflang="${lang}"`);
    else if (m[1] !== expectedUrl)
      errs.push(`hreflang="${lang}" href mismatch: got "${m[1]}", expected "${expectedUrl}"`);
  }

  // Robots: should not be noindex on indexable routes
  const robotsMatch = html.match(META.robots);
  if (robotsMatch && /noindex/i.test(robotsMatch[1]))
    errs.push(`noindex on indexable route: "${robotsMatch[1]}"`);

  // Open Graph
  for (const [key, re] of Object.entries({
    "og:title": META.ogTitle,
    "og:description": META.ogDescription,
    "og:image": META.ogImage,
    "og:url": META.ogUrl,
  })) {
    if (!re.test(html)) errs.push(`missing ${key}`);
  }

  // Twitter card
  if (!META.twitterCard.test(html)) errs.push("missing twitter:card");

  if (errs.length) {
    failures.push({ route: normalized, errs });
  } else {
    passed++;
  }
}

console.log(`\n[verify-seo-meta] Scanned ${htmlFiles.length} pages.`);
console.log(`  ✓ ${passed} passed full meta checks`);
console.log(`  ✓ ${noindexChecked} verified as noindex`);
console.log(`  ↷ ${skipped.length} skipped (denylist / not in allowlist)`);
console.log(`  ✗ ${failures.length} failed`);

if (failures.length) {
  console.error("\n[verify-seo-meta] FAILED routes:");
  for (const { route, errs } of failures) {
    console.error(`\n  ${route}`);
    for (const e of errs) console.error(`    - ${e}`);
  }
  process.exit(1);
}

console.log("[verify-seo-meta] All meta checks passed.\n");
