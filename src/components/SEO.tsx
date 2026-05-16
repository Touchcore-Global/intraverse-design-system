import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

export interface SEOProps {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogImageAlt?: string;
  ogType?: string;
  canonical?: string;
  noindex?: boolean;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

/**
 * Standardized per-page SEO. Renders title, description, canonical, robots,
 * Open Graph + Twitter cards (Nigeria-targeted), and optional JSON-LD.
 *
 * Implementation note: we use BOTH react-helmet-async (for runtime updates
 * & nested component composition) AND a direct synchronous document.head
 * mutation in a layout effect. The direct mutation guarantees tags are in
 * the DOM before react-snap's Puppeteer snapshot fires, even on routes
 * where Helmet's async dispatcher hasn't flushed yet (e.g. /about, /blog,
 * /contact). Each tag is tagged with data-seo="1" so snapSaveState in
 * src/main.tsx treats them the same as Helmet's data-rh tags.
 */
export function SEO({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage = "https://intraverse.africa/og-default.png",
  ogImageAlt = "Intraverse — B2B travel technology platform built in Lagos, Nigeria",
  ogType = "website",
  canonical,
  noindex = false,
  jsonLd,
}: SEOProps) {
  const fullTitle = title.includes("Intraverse") ? title : `${title} | Intraverse`;
  const finalOgTitle = ogTitle || fullTitle;
  const finalOgDescription = ogDescription || description;
  const jsonLdArray = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  // Normalize canonical to https://intraverse.africa (apex, https, no www, no trailing slash except root)
  const normalizeCanonical = (raw?: string): string | undefined => {
    if (!raw) return undefined;
    const APEX = "https://intraverse.africa";
    let path = raw;
    try {
      if (/^https?:\/\//i.test(raw)) {
        const u = new URL(raw);
        path = u.pathname + u.search + u.hash;
      } else if (!raw.startsWith("/")) {
        path = "/" + raw;
      }
    } catch {
      path = raw.startsWith("/") ? raw : "/" + raw;
    }
    if (path.length > 1 && path.endsWith("/")) path = path.replace(/\/+$/, "");
    return `${APEX}${path === "" ? "/" : path}`;
  };
  const finalCanonical = normalizeCanonical(canonical);

  // Synchronous head mutation — runs in both browsers AND inside react-snap's
  // Puppeteer page. Guarantees per-route tags exist in document.head before
  // the snapshot is captured, independent of Helmet's async dispatcher.
  useEffect(() => {
    if (typeof document === "undefined") return;
    const head = document.head;

    // Remove any prior SEO-managed tags from a previous route render.
    head.querySelectorAll('[data-seo="1"]').forEach((el) => el.remove());

    const upsertMeta = (
      attr: "name" | "property" | "http-equiv",
      key: string,
      content: string,
    ) => {
      // Remove colliding static tags from index.html so we don't double up.
      head
        .querySelectorAll(`meta[${attr}="${key}"]`)
        .forEach((el) => {
          if (!el.hasAttribute("data-rh")) el.remove();
        });
      const m = document.createElement("meta");
      m.setAttribute(attr, key);
      m.setAttribute("content", content);
      m.setAttribute("data-seo", "1");
      head.appendChild(m);
    };

    const upsertLink = (rel: string, href: string, hreflang?: string) => {
      const sel = hreflang
        ? `link[rel="${rel}"][hreflang="${hreflang}"]`
        : `link[rel="${rel}"]`;
      head.querySelectorAll(sel).forEach((el) => {
        if (!el.hasAttribute("data-rh")) el.remove();
      });
      const l = document.createElement("link");
      l.setAttribute("rel", rel);
      l.setAttribute("href", href);
      if (hreflang) l.setAttribute("hreflang", hreflang);
      l.setAttribute("data-seo", "1");
      head.appendChild(l);
    };

    // Title
    document.title = fullTitle;

    // Core
    upsertMeta("name", "description", description);
    if (noindex) upsertMeta("name", "robots", "noindex, nofollow");
    if (finalCanonical) upsertLink("canonical", finalCanonical);

    // Geo
    upsertMeta("name", "geo.region", "NG");
    upsertMeta("name", "geo.placename", "Lagos, Nigeria");
    upsertMeta("name", "geo.position", "6.5244;3.3792");
    upsertMeta("name", "ICBM", "6.5244, 3.3792");

    // hreflang
    if (finalCanonical) {
      upsertLink("alternate", finalCanonical, "en-NG");
      upsertLink("alternate", finalCanonical, "en");
      upsertLink("alternate", finalCanonical, "x-default");
    }

    // Open Graph
    upsertMeta("property", "og:title", finalOgTitle);
    upsertMeta("property", "og:description", finalOgDescription);
    upsertMeta("property", "og:type", ogType);
    upsertMeta("property", "og:image", ogImage);
    upsertMeta("property", "og:image:alt", ogImageAlt);
    upsertMeta("property", "og:image:width", "1200");
    upsertMeta("property", "og:image:height", "630");
    upsertMeta("property", "og:site_name", "Intraverse");
    upsertMeta("property", "og:locale", "en_NG");
    upsertMeta("property", "og:country-name", "Nigeria");
    upsertMeta("property", "og:region", "Lagos");
    if (finalCanonical) upsertMeta("property", "og:url", finalCanonical);

    // Twitter
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:site", "@intraverseHQ");
    upsertMeta("name", "twitter:creator", "@intraverseHQ");
    upsertMeta("name", "twitter:domain", "intraverse.africa");
    upsertMeta("name", "twitter:title", finalOgTitle);
    upsertMeta("name", "twitter:description", finalOgDescription);
    upsertMeta("name", "twitter:image", ogImage);
    upsertMeta("name", "twitter:image:alt", ogImageAlt);

    // JSON-LD
    jsonLdArray.forEach((data) => {
      const s = document.createElement("script");
      s.setAttribute("type", "application/ld+json");
      s.setAttribute("data-seo", "1");
      s.textContent = JSON.stringify(data);
      head.appendChild(s);
    });
  });

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {finalCanonical && <link rel="canonical" href={finalCanonical} />}

      {/* Geo targeting: Nigeria */}
      <meta name="geo.region" content="NG" />
      <meta name="geo.placename" content="Lagos, Nigeria" />
      <meta name="geo.position" content="6.5244;3.3792" />
      <meta name="ICBM" content="6.5244, 3.3792" />

      {/* hreflang alternates — primary audience Nigeria */}
      {finalCanonical && <link rel="alternate" hrefLang="en-NG" href={finalCanonical} />}
      {finalCanonical && <link rel="alternate" hrefLang="en" href={finalCanonical} />}
      {finalCanonical && <link rel="alternate" hrefLang="x-default" href={finalCanonical} />}

      {/* Open Graph — Nigeria-first locale */}
      <meta property="og:title" content={finalOgTitle} />
      <meta property="og:description" content={finalOgDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={ogImageAlt} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Intraverse" />
      <meta property="og:locale" content="en_NG" />
      <meta property="og:locale:alternate" content="en_GB" />
      <meta property="og:locale:alternate" content="en_US" />
      <meta property="og:country-name" content="Nigeria" />
      <meta property="og:region" content="Lagos" />
      {finalCanonical && <meta property="og:url" content={finalCanonical} />}

      {/* Twitter card — NG-tuned */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@intraverseHQ" />
      <meta name="twitter:creator" content="@intraverseHQ" />
      <meta name="twitter:domain" content="intraverse.africa" />
      <meta name="twitter:title" content={finalOgTitle} />
      <meta name="twitter:description" content={finalOgDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={ogImageAlt} />

      {jsonLdArray.map((data, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
}
