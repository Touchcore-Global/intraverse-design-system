#!/usr/bin/env node
/* eslint-disable */
/**
 * Post-build verification: confirms sitemap.xml and robots.txt exist in dist/,
 * are valid, non-empty, and reference the correct site URL.
 * Fails the build (exit 1) if any check fails.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, "..", "dist");
const SITE_URL = process.env.SITE_URL || "https://intraverse.africa";

const errors = [];
const checks = [];

function check(name, fn) {
  try {
    fn();
    checks.push(`✓ ${name}`);
  } catch (e) {
    errors.push(`✗ ${name}: ${e.message}`);
  }
}

const sitemapPath = path.join(DIST, "sitemap.xml");
const robotsPath = path.join(DIST, "robots.txt");

check("dist/sitemap.xml exists", () => {
  if (!fs.existsSync(sitemapPath)) throw new Error("file missing");
});
check("dist/robots.txt exists", () => {
  if (!fs.existsSync(robotsPath)) throw new Error("file missing");
});

if (fs.existsSync(sitemapPath)) {
  const xml = fs.readFileSync(sitemapPath, "utf8");
  check("sitemap.xml is valid XML", () => {
    if (!xml.startsWith("<?xml")) throw new Error("missing XML declaration");
    if (!xml.includes("<urlset")) throw new Error("missing <urlset>");
    if (!xml.includes("</urlset>")) throw new Error("missing closing </urlset>");
  });
  check("sitemap.xml has URLs", () => {
    const count = (xml.match(/<loc>/g) || []).length;
    if (count < 10) throw new Error(`only ${count} URLs (expected ≥10)`);
  });
  check("sitemap.xml uses correct host", () => {
    if (!xml.includes(SITE_URL)) throw new Error(`expected ${SITE_URL}`);
  });
}

if (fs.existsSync(robotsPath)) {
  const txt = fs.readFileSync(robotsPath, "utf8");
  check("robots.txt has User-agent directive", () => {
    if (!/User-agent:/i.test(txt)) throw new Error("missing User-agent");
  });
  check("robots.txt references sitemap", () => {
    if (!txt.includes(`${SITE_URL}/sitemap.xml`))
      throw new Error(`missing Sitemap: ${SITE_URL}/sitemap.xml`);
  });
  check("robots.txt does not block all crawlers", () => {
    // Look for `User-agent: *` block followed by `Disallow: /` (with nothing after the slash).
    const m = txt.match(/User-agent:\s*\*[\s\S]*?(?=\nUser-agent:|\n*$)/i);
    if (m && /\nDisallow:\s*\/\s*(?:\n|$)/.test(m[0]))
      throw new Error("User-agent: * has `Disallow: /` (blocks entire site)");
  });
  check("robots.txt allows global crawling", () => {
    const m = txt.match(/User-agent:\s*\*[\s\S]*?(?=\nUser-agent:|\n*$)/i);
    if (!m || !/\nAllow:\s*\//.test(m[0]))
      throw new Error("User-agent: * is missing `Allow: /`");
  });
}

console.log("\n[verify-seo-files] Build artifacts:");
checks.forEach((c) => console.log("  " + c));
if (errors.length) {
  console.error("\n[verify-seo-files] FAILED:");
  errors.forEach((e) => console.error("  " + e));
  process.exit(1);
}
console.log("[verify-seo-files] All checks passed.\n");
