import { SEO, ORGANIZATION_JSON_LD, WEBSITE_JSON_LD } from "@/components/SEO";
import { useLocation, matchPath } from "react-router-dom";

/**
 * Static SEO metadata per route. Keys may include path patterns (e.g. ":slug").
 * Dynamic content pages (blog/news/jobs) provide their own <SEO> component.
 */
export interface RouteSEOEntry {
  title: string;
  description: string;
  keywords?: string;
  type?: string;
  noindex?: boolean;
  /** Path under /og (e.g. "/og/home.png"). Falls back to /og/default.png. */
  image?: string;
}

export const ROUTE_SEO: Record<string, RouteSEOEntry> = {
  "/": {
    title: "Intraverse — B2B Travel Technology for Africa",
    description:
      "The technology behind Africa's next generation of travel businesses. SaaS tools for travel agencies, cooperatives, and independent operators.",
    keywords: "travel tech Africa, B2B travel platform, travel SaaS, OTA tools",
  },
  "/v1": {
    title: "Intraverse — B2B Travel Technology",
    description:
      "Africa-first travel technology for agencies, cooperatives and independent operators.",
    noindex: true,
  },
  "/v3": {
    title: "Intraverse — B2B Travel Technology",
    description:
      "Africa-first travel technology for agencies, cooperatives and independent operators.",
    noindex: true,
  },
  "/products": {
    title: "Products — Travel Tech Suite",
    description:
      "Explore Intraverse's full product suite: Agent Platform, TravX, CoopX, Independents, Supplier Engine, Travel Links, API, and Odiopay.",
    keywords: "travel software, agent platform, travel API, BNPL travel",
  },
  "/agent-platform": {
    title: "Agent Platform — All-in-One for Travel Agencies",
    description:
      "Run your travel agency with a single platform: bookings, suppliers, payments, and reporting.",
  },
  "/products/agent-platform": {
    title: "Agent Platform — All-in-One for Travel Agencies",
    description:
      "Run your travel agency with a single platform: bookings, suppliers, payments, and reporting.",
  },
  "/travx": {
    title: "TravX — Online Travel Marketplace",
    description: "TravX powers consumer-facing travel discovery and booking for African travelers.",
  },
  "/products/travx": {
    title: "TravX — Online Travel Marketplace",
    description: "TravX powers consumer-facing travel discovery and booking for African travelers.",
  },
  "/coopx": {
    title: "CoopX — Cooperative Booking Engine",
    description: "Shared booking infrastructure for travel cooperatives across Africa.",
  },
  "/products/coopx": {
    title: "CoopX — Cooperative Booking Engine",
    description: "Shared booking infrastructure for travel cooperatives across Africa.",
  },
  "/independents": {
    title: "Independents — Tools for Solo Travel Pros",
    description: "Lightweight booking tools, payments, and a storefront for independent travel sellers.",
  },
  "/products/independents": {
    title: "Independents — Tools for Solo Travel Pros",
    description: "Lightweight booking tools, payments, and a storefront for independent travel sellers.",
  },
  "/supplier-engine": {
    title: "Supplier Engine — Connect Suppliers Faster",
    description:
      "A unified supplier integration layer for flights, hotels, tours, and more across African markets.",
  },
  "/products/supplier-engine": {
    title: "Supplier Engine — Connect Suppliers Faster",
    description:
      "A unified supplier integration layer for flights, hotels, tours, and more across African markets.",
  },
  "/products/travel-links": {
    title: "Travel Links — Sell Travel With a Link",
    description:
      "Turn any social post or message into a mini booking site. Share a link, get paid, fulfill instantly.",
    keywords: "travel link, social selling travel, link in bio booking",
  },
  "/products/api": {
    title: "Intraverse API — Travel Content & Booking",
    description:
      "Production-ready APIs for flights, hotels, tours, payments, and webhooks across African travel inventory.",
  },
  "/products/odiopay": {
    title: "Odiopay — Buy Now, Pay Later for Travel",
    description: "Increase conversion with installments. Odiopay BNPL built for African travelers.",
  },
  "/tools": {
    title: "Tools — Free Utilities for Travel Pros",
    description: "Calculators, currency tools, and resources for travel professionals across Africa.",
  },
  "/for/travel-agents": {
    title: "For Travel Agents — Modernize Your Agency",
    description: "Why thousands of African travel agents choose Intraverse to grow and operate.",
  },
  "/for/independents": {
    title: "For Independents — Sell Travel Solo",
    description: "Tools, payments, and supply built for independent travel professionals.",
  },
  "/for/independents/interest": {
    title: "Independents Early Access",
    description: "Join the waitlist for Intraverse Independents and start selling travel today.",
  },
  "/who-we-serve": {
    title: "Who We Serve",
    description: "From agents to corporates, fintechs and startups — see who builds with Intraverse.",
  },
  "/for/businesses": {
    title: "For Businesses — Travel Tech That Scales",
    description: "Booking, payments, and content APIs to power your travel business in Africa.",
  },
  "/for/corporates": {
    title: "For Corporates — Modern Business Travel",
    description: "Manage corporate travel, policy, and spend with Intraverse.",
  },
  "/for/startups": {
    title: "For Startups — Launch a Travel Brand",
    description: "Skip integrations and ship a travel product faster with Intraverse APIs.",
  },
  "/for/developers": {
    title: "For Developers — Build on African Travel",
    description: "Documentation, sandboxes, and APIs for engineers building travel products.",
  },
  "/for/fintechs": {
    title: "For Fintechs — Embed Travel Commerce",
    description: "Add flights, hotels, and BNPL travel to your fintech with a single API.",
  },
  "/about": {
    title: "About Intraverse",
    description: "Africa-first travel technology, headquartered in Lagos. Our mission, team, and story.",
  },
  "/about/built-in-lagos": {
    title: "Built in Lagos",
    description: "Engineering and product made in Lagos for the world.",
  },
  "/careers": {
    title: "Careers — Join Intraverse",
    description: "Open roles across engineering, product, design, and operations. Build travel tech for Africa.",
  },
  "/partnerships": {
    title: "Partnerships",
    description: "Distribution, supplier, and platform partnerships with Intraverse.",
  },
  "/features": {
    title: "Features",
    description: "Explore the platform features that power African travel businesses.",
  },
  "/use-cases": {
    title: "Use Cases",
    description: "See how agencies, cooperatives, corporates, and fintechs use Intraverse.",
  },
  "/proof": {
    title: "Proof — Customer Stories",
    description: "Real outcomes from travel businesses using Intraverse.",
  },
  "/faq": {
    title: "FAQ",
    description: "Answers to the most common questions about Intraverse products and pricing.",
  },
  "/contact": {
    title: "Contact Us",
    description: "Talk to our team about partnerships, sales, or support.",
  },
  "/pricing": {
    title: "Pricing",
    description: "Simple, transparent pricing for travel agencies, independents, and businesses.",
  },
  "/help": {
    title: "Help Center",
    description: "Guides and answers for using Intraverse products.",
  },
  "/help/:slug": {
    title: "Help Center",
    description: "Guides and answers for using Intraverse products.",
  },
  "/docs": {
    title: "Developer Docs",
    description: "Build with Intraverse APIs — flights, hotels, tours, payments, and webhooks.",
  },
  "/docs/quickstart": {
    title: "Docs — Quickstart",
    description: "Make your first call to the Intraverse API in minutes.",
  },
  "/docs/authentication": {
    title: "Docs — Authentication",
    description: "Authenticate against the Intraverse API with API keys and JWTs.",
  },
  "/docs/flights": {
    title: "Docs — Flights API",
    description: "Search and book flights via the Intraverse Flights API.",
  },
  "/docs/hotels": {
    title: "Docs — Hotels API",
    description: "Search and book hotels via the Intraverse Hotels API.",
  },
  "/docs/tours": {
    title: "Docs — Tours API",
    description: "Search and book tours via the Intraverse Tours API.",
  },
  "/docs/webhooks": {
    title: "Docs — Webhooks",
    description: "Subscribe to events with Intraverse webhooks.",
  },
  "/docs/payments": {
    title: "Docs — Payments",
    description: "Accept payments through the Intraverse platform.",
  },
  "/docs/reference": {
    title: "Docs — API Reference",
    description: "Full Intraverse API reference documentation.",
  },
  "/login": {
    title: "Log In",
    description: "Sign in to your Intraverse account.",
    noindex: true,
  },
  "/verify-email": {
    title: "Verify Email",
    description: "Verify your Intraverse email address.",
    noindex: true,
  },
  "/forgot-password": {
    title: "Forgot Password",
    description: "Reset your Intraverse password.",
    noindex: true,
  },
  "/unsubscribe": {
    title: "Unsubscribe",
    description: "Manage your Intraverse email preferences.",
    noindex: true,
  },
  "/blog": {
    title: "Blog — Insights for African Travel Businesses",
    description:
      "Stories, guides, and analysis from the team building travel tech for Africa.",
  },
  "/news": {
    title: "News & Press",
    description: "Press releases, company updates, and announcements from Intraverse.",
  },
};

/**
 * Maps a route path to its branded OG image in /public/og.
 * Falls back to /og/default.png. All images are 1200x630 PNG.
 */
const IMAGE_MAP: Array<[RegExp, string]> = [
  [/^\/$/, "/og/home.png"],
  [/^\/products$/, "/og/products.png"],
  [/^\/(products\/)?agent-platform$/, "/og/agent-platform.png"],
  [/^\/(products\/)?travx$/, "/og/travx.png"],
  [/^\/(products\/)?coopx$/, "/og/coopx.png"],
  [/^\/(products\/)?independents$/, "/og/independents.png"],
  [/^\/(products\/)?supplier-engine$/, "/og/supplier-engine.png"],
  [/^\/products\/travel-links$/, "/og/travel-links.png"],
  [/^\/products\/api$/, "/og/api.png"],
  [/^\/products\/odiopay$/, "/og/odiopay.png"],
  [/^\/tools$/, "/og/tools.png"],
  [/^\/for\/travel-agents$/, "/og/for-agents.png"],
  [/^\/for\/independents/, "/og/for-independents.png"],
  [/^\/who-we-serve$/, "/og/who-we-serve.png"],
  [/^\/for\/businesses$/, "/og/for-businesses.png"],
  [/^\/for\/corporates$/, "/og/for-corporates.png"],
  [/^\/for\/startups$/, "/og/for-startups.png"],
  [/^\/for\/developers$/, "/og/for-developers.png"],
  [/^\/for\/fintechs$/, "/og/for-fintechs.png"],
  [/^\/about\/built-in-lagos$/, "/og/built-in-lagos.png"],
  [/^\/about$/, "/og/about.png"],
  [/^\/careers/, "/og/careers.png"],
  [/^\/partnerships$/, "/og/partnerships.png"],
  [/^\/contact$/, "/og/contact.png"],
  [/^\/pricing$/, "/og/pricing.png"],
  [/^\/blog/, "/og/blog.png"],
  [/^\/news/, "/og/news.png"],
  [/^\/docs/, "/og/docs.png"],
  [/^\/help/, "/og/help.png"],
  [/^\/features$/, "/og/features.png"],
  [/^\/use-cases$/, "/og/use-cases.png"],
  [/^\/proof$/, "/og/proof.png"],
  [/^\/faq$/, "/og/faq.png"],
];

/**
 * Pick the best OG image for a path. Explicit `entry.image` wins;
 * otherwise we match against IMAGE_MAP; otherwise default.png.
 */
export function pickRouteImage(pathname: string, explicit?: string): string {
  if (explicit) return explicit;
  for (const [pattern, image] of IMAGE_MAP) {
    if (pattern.test(pathname)) return image;
  }
  return "/og/default.png";
}

/** Routes for which this component should NOT render (admin + dynamic content). */
const SKIP_PREFIXES = ["/admin"];
const DYNAMIC_PATTERNS = ["/blog/:slug", "/news/:slug", "/careers/:slug"];

/**
 * Auto-applies SEO metadata based on the current route. Mounted once globally.
 * Skips admin routes and dynamic content routes that manage their own SEO.
 */
export function RouteSEO() {
  const { pathname } = useLocation();

  if (SKIP_PREFIXES.some((p) => pathname.startsWith(p))) return null;
  if (DYNAMIC_PATTERNS.some((p) => matchPath(p, pathname))) return null;

  // Exact match first
  let entry = ROUTE_SEO[pathname];

  // Pattern match (e.g. /help/:slug)
  if (!entry) {
    for (const [pattern, value] of Object.entries(ROUTE_SEO)) {
      if (pattern.includes(":") && matchPath(pattern, pathname)) {
        entry = value;
        break;
      }
    }
  }

  // Default fallback
  if (!entry) {
    entry = {
      title: "Intraverse — B2B Travel Technology",
      description:
        "Africa-first travel technology for agencies, cooperatives and independent operators.",
    };
  }

  const isHome = pathname === "/";
  const image = pickRouteImage(pathname, entry.image);

  return (
    <SEO
      {...entry}
      image={image}
      jsonLd={isHome ? [ORGANIZATION_JSON_LD, WEBSITE_JSON_LD] : ORGANIZATION_JSON_LD}
    />
  );
}

