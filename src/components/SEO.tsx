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
 * Nigeria-first defaults:
 * - og:locale = en_NG (primary), en_GB + en_US as alternates
 * - twitter:domain = intraverse.africa, twitter:creator = @intraverseHQ
 * - geo.region = NG, geo.placename = Lagos, Nigeria
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

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Geo targeting: Nigeria */}
      <meta name="geo.region" content="NG" />
      <meta name="geo.placename" content="Lagos, Nigeria" />
      <meta name="geo.position" content="6.5244;3.3792" />
      <meta name="ICBM" content="6.5244, 3.3792" />

      {/* hreflang alternates — primary audience Nigeria */}
      {canonical && <link rel="alternate" hrefLang="en-NG" href={canonical} />}
      {canonical && <link rel="alternate" hrefLang="en" href={canonical} />}
      {canonical && <link rel="alternate" hrefLang="x-default" href={canonical} />}

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
      {canonical && <meta property="og:url" content={canonical} />}

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
