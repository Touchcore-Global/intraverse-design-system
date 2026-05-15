#!/usr/bin/env node
/* eslint-disable */
/**
 * Generates public/sitemap.xml and public/robots.txt at build time.
 *
 * Pulls dynamic slugs (blog, news, jobs) from Lovable Cloud using the public
 * anon key (RLS limits results to published / open content).
 *
 * Usage: `node scripts/generate-sitemap.mjs` (runs automatically before build).
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.resolve(__dirname, "..", "public");
const SITE_URL = process.env.SITE_URL || "https://intraverse.africa";

const SUPABASE_URL =
  process.env.VITE_SUPABASE_URL || "https://lqxawjhlssfuwkkhyvon.supabase.co";
const SUPABASE_KEY =
  process.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxxeGF3amhsc3NmdXdra2h5dm9uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY0NzI0OTUsImV4cCI6MjA5MjA0ODQ5NX0.xxWK9maIsn5fBLMN6DywXWZEDTgKcQl8dy2c7gEyPoc";

const STATIC_ROUTES = [
  { path: "/", changefreq: "weekly", priority: 1.0 },
  { path: "/products", changefreq: "monthly", priority: 0.9 },
  { path: "/products/agent-platform", changefreq: "monthly", priority: 0.8 },
  { path: "/products/travx", changefreq: "monthly", priority: 0.8 },
  { path: "/products/coopx", changefreq: "monthly", priority: 0.8 },
  { path: "/products/independents", changefreq: "monthly", priority: 0.8 },
  { path: "/products/supplier-engine", changefreq: "monthly", priority: 0.8 },
  { path: "/products/travel-links", changefreq: "monthly", priority: 0.8 },
  { path: "/products/api", changefreq: "monthly", priority: 0.8 },
  { path: "/products/odiopay", changefreq: "monthly", priority: 0.8 },
  { path: "/tools", changefreq: "monthly", priority: 0.7 },
  { path: "/for/travel-agents", changefreq: "monthly", priority: 0.8 },
  { path: "/for/independents", changefreq: "monthly", priority: 0.8 },
  { path: "/for/independents/interest", changefreq: "monthly", priority: 0.6 },
  { path: "/who-we-serve", changefreq: "monthly", priority: 0.7 },
  { path: "/for/businesses", changefreq: "monthly", priority: 0.8 },
  { path: "/for/corporates", changefreq: "monthly", priority: 0.7 },
  { path: "/for/startups", changefreq: "monthly", priority: 0.7 },
  { path: "/for/developers", changefreq: "monthly", priority: 0.7 },
  { path: "/for/fintechs", changefreq: "monthly", priority: 0.7 },
  { path: "/about", changefreq: "monthly", priority: 0.8 },
  { path: "/about/built-in-lagos", changefreq: "monthly", priority: 0.6 },
  { path: "/careers", changefreq: "weekly", priority: 0.8 },
  { path: "/partnerships", changefreq: "monthly", priority: 0.7 },
  { path: "/features", changefreq: "monthly", priority: 0.7 },
  { path: "/use-cases", changefreq: "monthly", priority: 0.7 },
  { path: "/proof", changefreq: "monthly", priority: 0.7 },
  { path: "/faq", changefreq: "monthly", priority: 0.6 },
  { path: "/contact", changefreq: "monthly", priority: 0.7 },
  { path: "/pricing", changefreq: "monthly", priority: 0.9 },
  { path: "/help", changefreq: "monthly", priority: 0.6 },
  { path: "/docs", changefreq: "weekly", priority: 0.7 },
  { path: "/docs/quickstart", changefreq: "monthly", priority: 0.6 },
  { path: "/docs/authentication", changefreq: "monthly", priority: 0.6 },
  { path: "/docs/flights", changefreq: "monthly", priority: 0.6 },
  { path: "/docs/hotels", changefreq: "monthly", priority: 0.6 },
  { path: "/docs/tours", changefreq: "monthly", priority: 0.6 },
  { path: "/docs/webhooks", changefreq: "monthly", priority: 0.6 },
  { path: "/docs/payments", changefreq: "monthly", priority: 0.6 },
  { path: "/docs/reference", changefreq: "monthly", priority: 0.6 },
  { path: "/blog", changefreq: "daily", priority: 0.8 },
  { path: "/news", changefreq: "daily", priority: 0.8 },
];

async function fetchTable(table, query) {
  const url = `${SUPABASE_URL}/rest/v1/${table}?${query}`;
  try {
    const res = await fetch(url, {
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
      },
    });
    if (!res.ok) {
      console.warn(`[sitemap] ${table} fetch failed: ${res.status}`);
      return [];
    }
    return await res.json();
  } catch (err) {
    console.warn(`[sitemap] ${table} error:`, err.message);
    return [];
  }
}

function escapeXml(str) {
  return String(str).replace(/[<>&'"]/g, (c) =>
    ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" }[c])
  );
}

function urlEntry({ loc, lastmod, changefreq, priority }) {
  const lines = [`  <url>`, `    <loc>${escapeXml(loc)}</loc>`];
  lines.push(`    <xhtml:link rel="alternate" hreflang="en-NG" href="${escapeXml(loc)}" />`);
  lines.push(`    <xhtml:link rel="alternate" hreflang="en" href="${escapeXml(loc)}" />`);
  lines.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(loc)}" />`);
  if (lastmod) lines.push(`    <lastmod>${new Date(lastmod).toISOString()}</lastmod>`);
  if (changefreq) lines.push(`    <changefreq>${changefreq}</changefreq>`);
  if (priority != null) lines.push(`    <priority>${priority.toFixed(1)}</priority>`);
  lines.push(`  </url>`);
  return lines.join("\n");
}

async function main() {
  console.log("[sitemap] Generating sitemap.xml...");

  const [articles, news, jobs] = await Promise.all([
    fetchTable("blog_articles", "select=slug,updated_at&status=eq.published"),
    fetchTable("news_items", "select=slug,updated_at&status=eq.published"),
    fetchTable("job_postings", "select=slug,updated_at&status=eq.open"),
  ]);

  const entries = [
    ...STATIC_ROUTES.map((r) => ({
      loc: `${SITE_URL}${r.path === "/" ? "" : r.path}`,
      lastmod: new Date().toISOString(),
      changefreq: r.changefreq,
      priority: r.priority,
    })),
    ...articles.map((a) => ({
      loc: `${SITE_URL}/blog/${a.slug}`,
      lastmod: a.updated_at,
      changefreq: "monthly",
      priority: 0.6,
    })),
    ...news.map((n) => ({
      loc: `${SITE_URL}/news/${n.slug}`,
      lastmod: n.updated_at,
      changefreq: "monthly",
      priority: 0.6,
    })),
    ...jobs.map((j) => ({
      loc: `${SITE_URL}/careers/${j.slug}`,
      lastmod: j.updated_at,
      changefreq: "weekly",
      priority: 0.7,
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.map(urlEntry).join("\n")}
</urlset>
`;

  await fs.mkdir(PUBLIC_DIR, { recursive: true });
  await fs.writeFile(path.join(PUBLIC_DIR, "sitemap.xml"), xml, "utf8");

  const aiBots = [
    "GPTBot",
    "ChatGPT-User",
    "OAI-SearchBot",
    "ClaudeBot",
    "Claude-Web",
    "anthropic-ai",
    "PerplexityBot",
    "Perplexity-User",
    "Google-Extended",
    "GoogleOther",
    "Applebot",
    "Applebot-Extended",
    "Bingbot",
    "CCBot",
    "Meta-ExternalAgent",
    "FacebookBot",
    "Bytespider",
    "Amazonbot",
    "DuckAssistBot",
    "cohere-ai",
    "YouBot",
    "MistralAI-User",
  ];
  const aiBotBlock = aiBots.map((b) => `User-agent: ${b}\nAllow: /\n`).join("\n");
  const robots = `# Sitemap discovery (hoisted to top — non-group directive, applies to all UAs)
Sitemap: ${SITE_URL}/sitemap.xml
Host: ${new URL(SITE_URL).host}

User-agent: *
Allow: /
Disallow: /admin
Disallow: /login
Disallow: /verify-email
Disallow: /forgot-password
Disallow: /unsubscribe

# AI crawlers — explicitly allowed
${aiBotBlock}`;
  await fs.writeFile(path.join(PUBLIC_DIR, "robots.txt"), robots, "utf8");

  console.log(
    `[sitemap] Wrote ${entries.length} URLs (${articles.length} blog, ${news.length} news, ${jobs.length} jobs).`
  );
}

main().catch((err) => {
  console.error("[sitemap] Failed:", err);
  // Don't fail the build — fall back to existing files.
  process.exit(0);
});
