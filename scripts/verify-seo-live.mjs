#!/usr/bin/env node
/* eslint-disable */
/**
 * Live verification: pings the deployed sitemap.xml and robots.txt and
 * confirms HTTP 200, correct content-type, and expected content.
 *
 * Run after Vercel deploy completes:
 *   SITE_URL=https://intraverse.africa node scripts/verify-seo-live.mjs
 *
 * On Vercel, wire it as a Deploy Hook or run in a GitHub Action that triggers
 * on `deployment_status: success`.
 */
const SITE_URL = process.env.SITE_URL || "https://intraverse.africa";

const targets = [
  {
    url: `${SITE_URL}/sitemap.xml`,
    expectType: /xml/i,
    expectBody: /<urlset[\s\S]*<\/urlset>/,
  },
  {
    url: `${SITE_URL}/robots.txt`,
    expectType: /text\/plain/i,
    expectBody: /User-agent:/i,
  },
];

const errors = [];

for (const t of targets) {
  process.stdout.write(`→ ${t.url}  `);
  try {
    const res = await fetch(t.url, { redirect: "follow" });
    const ct = res.headers.get("content-type") || "";
    const body = await res.text();

    if (res.status !== 200) throw new Error(`HTTP ${res.status}`);
    if (!t.expectType.test(ct))
      throw new Error(`unexpected content-type: ${ct}`);
    if (!t.expectBody.test(body))
      throw new Error(
        `body did not match expected pattern (got ${body.length} bytes, starts with: ${body.slice(0, 60).replace(/\s+/g, " ")})`,
      );
    if (/<!doctype html/i.test(body))
      throw new Error("got HTML — SPA fallback is intercepting this route");

    console.log(`✓ 200 ${ct.split(";")[0]} (${body.length} bytes)`);
  } catch (e) {
    console.log(`✗ ${e.message}`);
    errors.push(`${t.url}: ${e.message}`);
  }
}

if (errors.length) {
  console.error("\n[verify-seo-live] FAILED:");
  errors.forEach((e) => console.error("  " + e));
  process.exit(1);
}
console.log("\n[verify-seo-live] All live SEO files reachable.");
