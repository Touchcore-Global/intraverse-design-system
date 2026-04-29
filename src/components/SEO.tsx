import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

export const SITE_URL = "https://intraverse.africa";
export const SITE_NAME = "Intraverse";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/favicon.png`;

export interface SEOProps {
  title: string;
  description: string;
  /** Path-only canonical (e.g. "/about"). Defaults to current location pathname. */
  canonicalPath?: string;
  image?: string;
  /** "website" | "article" | "profile" etc. */
  type?: string;
  noindex?: boolean;
  keywords?: string;
  /** JSON-LD structured data object(s). */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  /** Article-specific metadata. */
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
}

/**
 * Centralized SEO component: renders <title>, meta description, canonical,
 * Open Graph, Twitter cards, robots, and optional JSON-LD structured data.
 *
 * Pre-rendered at build time via react-snap so crawlers see fully populated
 * tags without executing JS.
 */
export function SEO({
  title,
  description,
  canonicalPath,
  image = DEFAULT_OG_IMAGE,
  type = "website",
  noindex = false,
  keywords,
  jsonLd,
  article,
}: SEOProps) {
  const location = useLocation();
  const path = canonicalPath ?? location.pathname;
  const canonical = `${SITE_URL}${path === "/" ? "" : path}`;
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const truncatedDescription =
    description.length > 160 ? `${description.slice(0, 157)}...` : description;
  const ogImage = image.startsWith("http") ? image : `${SITE_URL}${image}`;
  const jsonLdArray = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={truncatedDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical} />
      <meta
        name="robots"
        content={noindex ? "noindex, nofollow" : "index, follow"}
      />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={truncatedDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@intraverse" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={truncatedDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* Article metadata */}
      {article?.publishedTime && (
        <meta property="article:published_time" content={article.publishedTime} />
      )}
      {article?.modifiedTime && (
        <meta property="article:modified_time" content={article.modifiedTime} />
      )}
      {article?.author && (
        <meta property="article:author" content={article.author} />
      )}
      {article?.section && (
        <meta property="article:section" content={article.section} />
      )}
      {article?.tags?.map((tag) => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}

      {/* JSON-LD structured data */}
      {jsonLdArray.map((data, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
}

/** Build an Organization JSON-LD block (site-wide). */
export const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: DEFAULT_OG_IMAGE,
  sameAs: [
    "https://twitter.com/intraverse",
    "https://www.linkedin.com/company/intraverse",
  ],
} as const;

/** Build a WebSite JSON-LD block with SearchAction. */
export const WEBSITE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
} as const;
