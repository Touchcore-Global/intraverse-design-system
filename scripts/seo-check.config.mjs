/* eslint-disable */
/**
 * Configuration for scripts/verify-seo-meta.mjs.
 *
 * The validator walks every pre-rendered HTML file in dist/ and decides what
 * to check on a per-route basis using the rules below. Edit this file to
 * match your indexing strategy — it does not change runtime behavior.
 *
 * Resolution order for each route discovered in dist/:
 *   1. If `denylist` matches → SKIP (not validated, must be noindex/blocked).
 *   2. If `allowlist` is non-empty and route is NOT in it → SKIP.
 *   3. If `noindexRoutes` matches → assert page has `<meta robots noindex>`,
 *      skip all positive meta checks.
 *   4. Otherwise → run full meta + canonical + hreflang + OG/Twitter checks.
 *
 * Patterns: each entry is either an exact route string ("/about") or a
 * RegExp (use leading "/" and trailing "/" in the source string and flags
 * separately, e.g. { pattern: "^/admin", flags: "i" }). Wildcards use "*"
 * which compiles to ".*" in the underlying regex.
 *
 * Keep this in sync with reactSnap.include in package.json — the helper
 * `getReactSnapInclude()` reads it for you so you don't duplicate the list.
 */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

export function getReactSnapInclude() {
  const pkg = JSON.parse(
    readFileSync(resolve(__dirname, "..", "package.json"), "utf8"),
  );
  return pkg.reactSnap?.include ?? [];
}

export const seoCheckConfig = {
  // Hard-block routes from validation. They should be noindex anyway.
  // Matches BEFORE allowlist, so these never run meta checks even if
  // accidentally pre-rendered. Keep aligned with routes in src/App.tsx
  // that are NOT in reactSnap.include (auth, admin, dynamic, legacy).
  denylist: [
    // Auth / account flow (intentionally noindex, not pre-rendered)
    "/login",
    "/verify-email",
    "/forgot-password",
    "/unsubscribe",

    // Admin (entire subtree)
    "/admin",
    { pattern: "^/admin(/|$)" },

    // Legacy / experimental homepage variants — not in reactSnap.include
    "/v1",
    "/v3",

    // Dynamic detail routes — pre-rendering the parent listing is enough
    { pattern: "^/blog/[^/]+$" },
    { pattern: "^/news/[^/]+$" },
    { pattern: "^/careers/[^/]+$" },
    { pattern: "^/help/[^/]+$" },

    // 404 + lovable internals
    "/not-found",
    { pattern: "^/lovable(/|$)" },
  ],

  // If non-empty, ONLY these routes are validated. Sourced directly from
  // package.json -> reactSnap.include so the validator's coverage tracks
  // the pre-render manifest 1:1 — add a route there and it's checked here,
  // remove it and it's skipped here. Set to [] to validate every HTML file.
  allowlist: getReactSnapInclude(),

  // Routes that intentionally serve <meta name="robots" content="noindex">.
  // The validator will REQUIRE that tag and skip positive meta checks.
  noindexRoutes: [
    "/for/independents/interest",
  ],

  // Hostname canonical and og:url must match.
  siteUrl: process.env.SITE_URL || "https://intraverse.africa",

  // Description length bounds (chars).
  descriptionMin: 50,
  descriptionMax: 170,

  // Required hreflang alternates per page.
  hreflangs: ["en-NG", "en", "x-default"],
};

/**
 * Compile a list of strings/regex-spec objects into RegExp[].
 * Strings are matched exactly OR with "*" → ".*" wildcards.
 */
export function compileRules(rules) {
  return rules.map((r) => {
    if (typeof r === "string") {
      if (r.includes("*")) {
        const src = "^" + r.replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*") + "$";
        return new RegExp(src);
      }
      return new RegExp("^" + r.replace(/[.+?^${}()|[\]\\]/g, "\\$&") + "$");
    }
    return new RegExp(r.pattern, r.flags ?? "");
  });
}

export function matches(route, compiledRules) {
  return compiledRules.some((re) => re.test(route));
}
