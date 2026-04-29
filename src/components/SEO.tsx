import { Helmet } from "react-helmet-async";

export interface SEOProps {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  noindex?: boolean;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

/**
 * Standardized per-page SEO. Renders title, description, canonical, robots,
 * Open Graph + Twitter cards, and optional JSON-LD structured data.
 */
export function SEO({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage = "https://intraverse.africa/og-default.png",
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

      <meta property="og:title" content={finalOgTitle} />
      <meta property="og:description" content={finalOgDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Intraverse" />
      <meta property="og:locale" content="en_NG" />
      {canonical && <meta property="og:url" content={canonical} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@intraverseHQ" />
      <meta name="twitter:title" content={finalOgTitle} />
      <meta name="twitter:description" content={finalOgDescription} />
      <meta name="twitter:image" content={ogImage} />

      {jsonLdArray.map((data, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
}
