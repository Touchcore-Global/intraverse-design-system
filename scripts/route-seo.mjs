/* eslint-disable */
/**
 * Per-route SEO metadata used by scripts/prerender-routes.mjs.
 *
 * Each entry overrides title / description / noindex for that route.
 * All routes inherit shared og:image and twitter handles from index.html.
 * Descriptions MUST be 50–170 chars to satisfy verify-seo-meta.mjs.
 */
export const SITE_URL = "https://intraverse.africa";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.png`;

/** Routes that should ship <meta name="robots" content="noindex, nofollow">. */
export const NOINDEX_ROUTES = new Set([
  "/for/independents/interest",
]);

/**
 * Per-route SEO. Keep titles unique and descriptions specific so each page
 * has its own social card and search snippet.
 */
export const ROUTE_SEO = {
  "/": {
    title: "Intraverse — B2B Travel Technology Platform Nigeria",
    description:
      "Nigeria's B2B travel platform. Access GDS, NDC, and 900+ airlines via one API. White-label booking, agent tools, and corporate travel built in Lagos.",
  },

  // Products
  "/products": {
    title: "Travel Tech Products — Agent, Corporate & API | Intraverse",
    description:
      "Explore the Intraverse product suite: agent platform, white-label booking engine, supplier APIs, payments, and corporate travel tools built in Lagos.",
  },
  "/products/agent-platform": {
    title: "Agent Platform | Intraverse",
    description:
      "All-in-one booking workspace for travel agents. Search 900+ airlines, hotels, and tours, issue tickets, and manage clients from a single dashboard.",
  },
  "/agent-platform": {
    title: "Agent Platform | Intraverse",
    description:
      "All-in-one booking workspace for travel agents. Search 900+ airlines, hotels, and tours, issue tickets, and manage clients from a single dashboard.",
  },
  "/products/travx": {
    title: "TravX Corporate Travel | Intraverse",
    description:
      "TravX corporate travel management for African businesses. Set policies, approve trips, and book flights and hotels with full reporting and control.",
  },
  "/travx": {
    title: "TravX Corporate Travel | Intraverse",
    description:
      "TravX corporate travel management for African businesses. Set policies, approve trips, and book flights and hotels with full reporting and control.",
  },
  "/products/coopx": {
    title: "CoopX Cooperative Travel | Intraverse",
    description:
      "CoopX lets cooperatives and member organisations offer travel benefits to members with managed booking, billing, and reporting in one platform.",
  },
  "/coopx": {
    title: "CoopX Cooperative Travel | Intraverse",
    description:
      "CoopX lets cooperatives and member organisations offer travel benefits to members with managed booking, billing, and reporting in one platform.",
  },
  "/products/independents": {
    title: "Independents Program | Intraverse",
    description:
      "Become an Intraverse Independent: sell flights, hotels, and tours under your own brand with our tools, training, and supplier inventory behind you.",
  },
  "/independents": {
    title: "Independents Program | Intraverse",
    description:
      "Become an Intraverse Independent: sell flights, hotels, and tours under your own brand with our tools, training, and supplier inventory behind you.",
  },
  "/products/supplier-engine": {
    title: "Supplier Engine — GDS, NDC & LCC Aggregator | Intraverse",
    description:
      "Supplier Engine aggregates GDS, NDC, LCC, and direct-connect inventory into one normalized API for African travel sellers and fintechs.",
  },
  "/supplier-engine": {
    title: "Supplier Engine — GDS, NDC & LCC Aggregator | Intraverse",
    description:
      "Supplier Engine aggregates GDS, NDC, LCC, and direct-connect inventory into one normalized API for African travel sellers and fintechs.",
  },
  "/products/travel-links": {
    title: "Travel Links — Sell Travel on WhatsApp & Social | Intraverse",
    description:
      "Travel Links: shareable booking links for agents and influencers. Sell flights and hotels through WhatsApp, Instagram, and any social channel.",
  },
  "/products/api": {
    title: "Intraverse API | B2B Travel API",
    description:
      "Build with the Intraverse API: flights, hotels, tours, and payments under one REST surface. SDKs, sandboxes, and African-market data included.",
  },
  "/products/odiopay": {
    title: "Odiopay Travel BNPL | Intraverse",
    description:
      "Odiopay buy-now-pay-later for travel. Offer travelers flexible installments at checkout while you get paid up front through Intraverse.",
  },
  "/tools": {
    title: "Free Travel Tools — Visa, Fares & Routes | Intraverse",
    description:
      "Free travel tools: visa lookup, fare calendar, route planner, and currency converter built for African travel sellers and corporate buyers.",
  },

  // Audiences
  "/for/travel-agents": {
    title: "For Travel Agents | Intraverse",
    description:
      "Intraverse for travel agents in Nigeria and Africa. Issue tickets, manage clients, and grow revenue with one platform built for your workflow.",
  },
  "/for/independents": {
    title: "For Independent Travel Sellers | Intraverse",
    description:
      "Sell travel as an independent under the Intraverse umbrella. Get supplier access, payment rails, training, and back-office support from day one.",
  },
  "/for/independents/interest": {
    title: "Join the Independents Program — Apply | Intraverse",
    description:
      "Express interest in the Intraverse Independents program. We'll get back to you with onboarding details, requirements, and the next intake date.",
  },
  "/who-we-serve": {
    title: "Who We Serve — Agents, Corporates & Fintechs | Intraverse",
    description:
      "Intraverse serves travel agencies, corporates, cooperatives, fintechs, developers, and startups across Africa with one B2B travel platform.",
  },
  "/for/businesses": {
    title: "For Businesses | Intraverse",
    description:
      "Manage business travel end-to-end with Intraverse. Bookings, policy, approvals, invoices, and reporting in one place for African businesses.",
  },
  "/for/corporates": {
    title: "For Corporates | Intraverse",
    description:
      "Corporate travel management for African enterprises. Control spend, enforce policy, and give travelers a fast booking experience with Intraverse.",
  },
  "/for/startups": {
    title: "For Startups | Intraverse",
    description:
      "Intraverse for startups: ship travel features fast with our API, white-label booking, and embedded payments tuned for African markets.",
  },
  "/for/developers": {
    title: "For Developers | Intraverse",
    description:
      "Build travel into your product with the Intraverse API. REST endpoints, sandboxes, SDKs, and docs for flights, hotels, tours, and payments.",
  },
  "/for/fintechs": {
    title: "For Fintechs | Intraverse",
    description:
      "Embed travel into your fintech app with Intraverse. Add flights, hotels, BNPL, and rewards through one API designed for African fintech rails.",
  },

  // Core
  "/about": {
    title: "About Intraverse — B2B Travel Tech Built in Lagos",
    description:
      "Intraverse is building the B2B travel technology platform for Africa. Learn about our mission, team, and the products we ship from Lagos to the continent.",
  },
  "/about/built-in-lagos": {
    title: "Built in Lagos — Engineering for African Travel | Intraverse",
    description:
      "Intraverse is built in Lagos, Nigeria. Read how our Lagos engineering and travel teams design products for the realities of African travel.",
  },
  "/careers": {
    title: "Careers — Build African Travel Tech | Intraverse",
    description:
      "Join Intraverse and help build the B2B travel platform for Africa. Engineering, product, design, and operations roles based in Lagos and remote.",
  },
  "/partnerships": {
    title: "Partnerships — Airlines, Hotels & Fintechs | Intraverse",
    description:
      "Partner with Intraverse: airlines, hotels, banks, fintechs, and resellers. Reach African travel buyers through our platform and distribution.",
  },
  "/features": {
    title: "Platform Features — Booking, Payments & API | Intraverse",
    description:
      "Every Intraverse feature in one place: search, booking, ticketing, payments, reporting, white-label, API, and corporate travel controls.",
  },
  "/use-cases": {
    title: "Use Cases — How African Businesses Use Intraverse",
    description:
      "See how agencies, corporates, fintechs, and startups use Intraverse to sell travel, manage spend, and ship new travel products faster in Africa.",
  },
  "/proof": {
    title: "Proof & Results — Customer Stories & Uptime | Intraverse",
    description:
      "Proof Intraverse delivers: customer stories, ticketing volumes, uptime metrics, and case studies from African travel businesses on our platform.",
  },
  "/faq": {
    title: "FAQ — Pricing, Onboarding & Support | Intraverse",
    description:
      "Answers to the most common Intraverse questions: pricing, onboarding, supported airlines and hotels, payments, support, and how to get started.",
  },
  "/contact": {
    title: "Contact Intraverse — Sales, Support & Lagos HQ",
    description:
      "Get in touch with Intraverse. Talk to sales, partnerships, or support — or visit our Lagos HQ. We typically respond within one business day.",
  },
  "/pricing": {
    title: "Pricing — Pay-as-you-go & Subscriptions | Intraverse",
    description:
      "Transparent Intraverse pricing for agents, businesses, and developers. Pay-as-you-go and subscription plans with no surprise fees, USD-based.",
  },

  // Help / Docs
  "/help": {
    title: "Help Center — Guides & Troubleshooting | Intraverse",
    description:
      "Intraverse Help Center: guides, troubleshooting, account help, billing, and how-tos for agents, businesses, and developers using the platform.",
  },
  "/docs": {
    title: "Developer Docs — Travel API Reference | Intraverse",
    description:
      "Intraverse developer documentation. Start with quickstart, authentication, flights, hotels, tours, payments, webhooks, and the full API reference.",
  },
  "/docs/quickstart": {
    title: "Quickstart — Docs | Intraverse",
    description:
      "Quickstart for the Intraverse API. Get an API key, make your first flight search, and book your first itinerary in under ten minutes.",
  },
  "/docs/authentication": {
    title: "Authentication — Docs | Intraverse",
    description:
      "Authenticate with the Intraverse API using API keys and JWTs. Learn about scopes, rotation, environments, and securing server-to-server calls.",
  },
  "/docs/flights": {
    title: "Flights API — Docs | Intraverse",
    description:
      "Search, price, and book flights with the Intraverse Flights API. Covers GDS, NDC, LCC, ancillaries, seat maps, ticketing, and refunds.",
  },
  "/docs/hotels": {
    title: "Hotels API — Docs | Intraverse",
    description:
      "Search and book hotels worldwide with the Intraverse Hotels API. Static content, live availability, rate plans, and confirmation flows included.",
  },
  "/docs/tours": {
    title: "Tours API — Docs | Intraverse",
    description:
      "Sell tours and activities with the Intraverse Tours API. Browse catalogs, check availability, and confirm bookings with one consistent contract.",
  },
  "/docs/webhooks": {
    title: "Webhooks — Docs | Intraverse",
    description:
      "Receive real-time Intraverse events via webhooks. Configure endpoints, verify signatures, and handle bookings, payments, and ticketing updates.",
  },
  "/docs/payments": {
    title: "Payments — Docs | Intraverse",
    description:
      "Collect and settle travel payments with the Intraverse Payments API. Cards, bank transfer, mobile money, BNPL, and multi-currency settlement.",
  },
  "/docs/reference": {
    title: "API Reference — Docs | Intraverse",
    description:
      "Full Intraverse API reference: every endpoint, request, response, and error code for flights, hotels, tours, payments, and account management.",
  },

  // Content
  "/blog": {
    title: "Blog — African Travel Industry Insights | Intraverse",
    description:
      "The Intraverse blog: African travel industry insights, product updates, engineering deep-dives, and stories from agents, corporates, and fintechs.",
  },
  "/news": {
    title: "News & Press — Announcements & Media | Intraverse",
    description:
      "Intraverse news and press: company announcements, product launches, partnership reveals, and media coverage from Lagos and across Africa.",
  },
};
