import { useEffect, useMemo, useRef, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Copy, Check, ExternalLink, ArrowRight, Search } from "lucide-react";
import { whatsappUrl } from "@/lib/constants";
import { POSTMAN_COLLECTION_URL } from "@/components/docs/DocsPostmanLink";
import { SEO } from "@/components/SEO";

/* ---------- scroll-reveal helper ---------- */
function RevealBlock({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, revealClass } = useScrollReveal();
  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${revealClass} ${className}`}>
      {children}
    </div>
  );
}

/* ---------- code samples (per product) ---------- */
const codeSamples: Record<string, { request: string; response: string }> = {
  "Flight Search": {
    request: `POST https://dev.intraversewebservices.com/api/product/v1/flight/search
Authorization: Bearer YOUR_ACCESS_TOKEN
Content-Type: application/json

{
  "origin": "LOS",
  "destination": "LHR",
  "departure_date": "2026-06-15",
  "adults": 1,
  "cabin_class": "economy"
}`,
    response: `{
  "status": "success",
  "data": {
    "search_id": "srch_9f8a7b6c5d4e3f2a",
    "results_count": 24,
    "results": [
      {
        "offer_id": "ofr_1a2b3c4d5e6f",
        "airline": "Ethiopian Airlines",
        "price": { "amount": 485000, "currency": "NGN" },
        "departure": "2026-06-15T08:30:00Z",
        "arrival": "2026-06-15T16:45:00Z",
        "stops": 0
      }
    ]
  }
}`,
  },
  "Hotel Search": {
    request: `POST https://dev.intraversewebservices.com/api/product/v1/hotel/search
Authorization: Bearer YOUR_ACCESS_TOKEN
Content-Type: application/json

{
  "latitude": 51.5072178,
  "longitude": -0.1275862,
  "range": 10,
  "limit": 10,
  "start_date": "2026-09-17",
  "end_date": "2026-09-18",
  "rooms": [
    {
      "adults": 1,
      "children": [],
      "infants": 0,
      "units": 1
    }
  ]
}`,
    response: `{
  "status": "success",
  "data": {
    "results_count": 42,
    "hotels": [
      {
        "hotel_id": "htl_a1b2c3d4",
        "name": "The Langham, London",
        "star_rating": 5,
        "price_from": { "amount": 425000, "currency": "NGN" },
        "distance_km": 1.2
      }
    ]
  }
}`,
  },
  "Tour Search": {
    request: `POST https://dev.intraversewebservices.com/api/product/v1/package/search-by-destination
Authorization: Bearer YOUR_ACCESS_TOKEN
Content-Type: application/json

{
  "destinationId": "66f941431e951df6140bc378",
  "destinationName": "Abuja",
  "suppliers": ["TourX1"],
  "populate": false,
  "limit": 10
}`,
    response: `{
  "status": "success",
  "data": {
    "results_count": 18,
    "tours": [
      {
        "tour_id": "tour_9x8y7z6w",
        "title": "Abuja City Highlights Day Tour",
        "duration_hours": 6,
        "price_from": { "amount": 45000, "currency": "NGN" },
        "supplier": "TourX1"
      }
    ]
  }
}`,
  },
  "Insurance Quote": {
    request: `POST https://dev.intraversewebservices.com/api/product/v1/insurance/flight-policies
Authorization: Bearer YOUR_ACCESS_TOKEN
Content-Type: application/json

{
  "personInfo": {
    "birthDate": "1990-10-20",
    "firstName": "Chinedu",
    "lastName": "Doe",
    "email": "customer@example.com",
    "phone": "08012345678",
    "gender": "Male",
    "title": "Mr",
    "city": "Lagos",
    "state": "Lagos",
    "passportNumber": "A12345678"
  },
  "destinationCountry": "South Africa",
  "startDate": "2026-02-20",
  "endDate": "2026-02-25",
  "purposeOfTravel": "Leisure",
  "isRoundTrip": false,
  "numberOfAdults": 1
}`,
    response: `{
  "status": "success",
  "data": {
    "quotes": [
      {
        "policy_id": "pol_a1b2c3d4",
        "provider": "AXA Mansard",
        "coverage": "Comprehensive",
        "premium": { "amount": 18500, "currency": "NGN" },
        "max_benefit": { "amount": 25000000, "currency": "NGN" }
      }
    ]
  }
}`,
  },
};

const languages = Object.keys(codeSamples);

/* ---------- doc categories (12) ---------- */
const docCategories = [
  { emoji: "🚀", title: "Quick Start", desc: "Set up your account, authenticate, and make your first API call in under 10 minutes.", href: "/docs/quickstart" },
  { emoji: "🔐", title: "Authentication", desc: "API key authentication, token management, scopes, and security best practices.", href: "/docs/authentication" },
  { emoji: "✈️", title: "Flight APIs", desc: "Search, book, ticket, modify, and cancel flights across GDS, NDC, consolidators, and aggregators.", href: "/docs/flights" },
  { emoji: "🏨", title: "Hotel APIs", desc: "Search hotels by location or name, check availability, book, modify, and cancel reservations.", href: "/docs/hotels" },
  { emoji: "🌍", title: "Tour & Activity APIs", desc: "Search tours and activities by destination, check availability, hold, confirm, and manage bookings.", href: "/docs/tours" },
  { emoji: "🛡️", title: "Insurance APIs", desc: "Get travel insurance quotes, purchase policies, and manage cancellations for flight travellers.", href: "/docs/insurance", isNew: true },
  { emoji: "📦", title: "PackagePro APIs", desc: "Create, price, and sell your own travel packages and protocol services on the Intraverse marketplace.", href: "/docs/packages", isNew: true },
  { emoji: "📡", title: "Webhooks", desc: "Real-time event notifications for bookings, payments, schedule changes, and cancellations.", href: "/docs/webhooks" },
  { emoji: "💳", title: "Payments", desc: "Wallet management, payment processing, and transaction handling across all product types.", href: "/docs/payments" },
  { emoji: "🏷️", title: "Price Adjustments", desc: "Configure markups, markdowns, and commission rules for flights, hotels, and packages.", href: "/docs/pricing-api", isNew: true },
  { emoji: "📊", title: "Reports", desc: "Revenue trends, flight analytics, wallet activity, and whitelabel performance reports.", href: "/docs/reports", isNew: true },
  { emoji: "📖", title: "API Reference", desc: "Complete endpoint reference with request/response schemas and live examples.", href: "/docs/reference" },
];

/* ---------- SDKs / Postman ---------- */
const FLIGHTS_POSTMAN_URL = "https://documenter.getpostman.com/view/21013764/2sA3XPChtq";

const sdks = [
  { emoji: "🟢", name: "Node.js SDK", install: "npm install @intraverse/node", version: "v1.0.0 • MIT", github: "#", docs: "/docs/quickstart" },
  { emoji: "🐍", name: "Python SDK", install: "pip install intraverse", version: "v1.0.0 • MIT", github: "#", docs: "/docs/quickstart" },
  { emoji: "🐘", name: "PHP SDK", install: "composer require intraverse/api", version: "v1.0.0 • MIT", github: "#", docs: "/docs/quickstart" },
];

const postmanCollections = [
  {
    emoji: "📦",
    name: "Postman Collection",
    desc: "Complete live documentation covering flights, hotels, tours, insurance, and PackagePro. Every endpoint pre-configured with example requests.",
    cta: "Open Postman Collection →",
    href: POSTMAN_COLLECTION_URL,
    badge: "RECOMMENDED",
    meta: "Updated weekly",
  },
  {
    emoji: "📦",
    name: "Flights & Core Services Collection",
    desc: "Flights, bookings, authentication, webhooks, payments, and account management.",
    cta: "Open Collection →",
    href: FLIGHTS_POSTMAN_URL,
    badge: null as string | null,
    meta: "Legacy collection",
  },
];

/* ---------- additional resources ---------- */
const resources = [
  { emoji: "🗺️", title: "API Namespace Guide", desc: "Understand how the API is organised across service namespaces: /main/v1/, /product/v1/, /payment/v1/, and /notification/v1/.", href: "/docs/reference" },
  { emoji: "📋", title: "OpenAPI Specification", desc: "Download the full OpenAPI 3.0 spec (YAML or JSON) for code generation, client validation, and internal tooling. Generated from the live Postman collection.", href: "/openapi.yaml" },
  { emoji: "🧪", title: "Sandbox Environment", desc: "A full-featured sandbox that mirrors production - real endpoints, realistic responses, and test booking flows. No real tickets issued, no real money moved.", href: "#" },
  { emoji: "📝", title: "Changelog", desc: "Every API change, deprecation, and new feature - documented in one place. Subscribe via webhook to get notified of changes that affect your integration.", href: "#" },
  { emoji: "🚨", title: "Error Reference", desc: "Complete list of error codes, what they mean, and how to handle them. Includes retry guidance and common troubleshooting steps.", href: "#" },
  { emoji: "📊", title: "Rate Limits", desc: "Current rate limits by endpoint tier, how to check remaining quota via headers, and how to request higher limits for production workloads.", href: "#" },
  { emoji: "🔄", title: "Versioning & Deprecation", desc: "How we version the API, our deprecation policy (minimum 6 months notice), and how to migrate between versions safely.", href: "#" },
];

type SearchItem = {
  title: string;
  subtitle: string;
  href: string;
  category: string;
};

/* ---------- searchable index (categories, endpoints, resources, SDKs) ---------- */
const searchIndex: SearchItem[] = [
  ...docCategories.map((c) => ({ title: c.title, subtitle: c.desc, href: c.href, category: "Docs" })),
  { title: "Flight Search", subtitle: "POST /api/product/v1/flight/search", href: "/docs/flights", category: "Endpoint" },
  { title: "Flight Book", subtitle: "POST /api/product/v1/flight/book", href: "/docs/flights", category: "Endpoint" },
  { title: "Flight Ticket", subtitle: "POST /api/product/v1/flight/ticket", href: "/docs/flights", category: "Endpoint" },
  { title: "Hotel Search", subtitle: "POST /api/product/v1/hotel/search", href: "/docs/hotels", category: "Endpoint" },
  { title: "Hotel Book", subtitle: "POST /api/product/v1/hotel/book", href: "/docs/hotels", category: "Endpoint" },
  { title: "Tour Search", subtitle: "POST /api/product/v1/package/search-by-destination", href: "/docs/tours", category: "Endpoint" },
  { title: "Tour Hold", subtitle: "POST /api/product/v1/package/hold", href: "/docs/tours", category: "Endpoint" },
  { title: "Tour Confirm", subtitle: "POST /api/product/v1/package/confirm", href: "/docs/tours", category: "Endpoint" },
  { title: "Insurance Quote", subtitle: "POST /api/product/v1/insurance/flight-policies", href: "/docs/insurance", category: "Endpoint" },
  { title: "Insurance Purchase", subtitle: "POST /api/product/v1/insurance/purchase", href: "/docs/insurance", category: "Endpoint" },
  { title: "PackagePro Create", subtitle: "POST /api/product/v1/package/create", href: "/docs/packages", category: "Endpoint" },
  { title: "PackagePro Publish", subtitle: "POST /api/product/v1/package/publish", href: "/docs/packages", category: "Endpoint" },
  { title: "Authentication", subtitle: "POST /api/main/v1/auth/login", href: "/docs/authentication", category: "Endpoint" },
  { title: "Wallet Balance", subtitle: "GET /api/payment/v1/wallet/balance", href: "/docs/payments", category: "Endpoint" },
  { title: "Process Payment", subtitle: "POST /api/payment/v1/payment/process", href: "/docs/payments", category: "Endpoint" },
  { title: "Webhook Events", subtitle: "Real-time booking, payment, and schedule notifications", href: "/docs/webhooks", category: "Endpoint" },
  ...resources.map((r) => ({ title: r.title, subtitle: r.desc, href: r.href, category: "Resource" })),
  ...sdks.map((s) => ({ title: s.name, subtitle: s.install, href: s.docs, category: "SDK" })),
];



/* ---------- Copy button ---------- */
function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handleCopy}
      className="absolute top-3 right-3 p-1.5 rounded bg-white/10 hover:bg-white/20 transition-colors text-white/60 hover:text-white"
      aria-label="Copy code"
    >
      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
    </button>
  );
}

/* ========== MAIN PAGE ========== */
export default function Docs() {
  const [activeTab, setActiveTab] = useState("Flight Search");


  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO
        title="API Documentation | Flights, Hotels, Tours, Insurance & Packages | Intraverse"
        description="Comprehensive API documentation for developers building on Intraverse. Search and book flights, hotels, tours, insurance. Create and sell custom packages. Free sandbox access."
        canonical="https://intraverse.africa/docs"
        ogTitle="Intraverse API Documentation — Build Travel Into Your Product"
        ogDescription="Flights, hotels, tours, insurance, and custom packages through one REST API. Free sandbox, modern docs, official SDKs, and dedicated developer support."
      />
      <Navbar />
      <main className="flex-1 pt-16">

        {/* ===== HERO ===== */}
        <section className="relative bg-[#0D1B2A] overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <div className="container mx-auto px-4 lg:px-8 py-20 md:py-28 relative z-10 text-center">
            <p className="text-sm font-semibold tracking-widest text-[hsl(var(--brand-blue))] mb-4">API DOCUMENTATION</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">Build Travel Into Your Product</h1>
            <p className="mt-6 text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              Comprehensive API documentation for developers building on Intraverse. Search and book flights, hotels, tours, and insurance. Create and sell your own packages. Process payments and manage webhooks. All through a unified RESTful API.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="xl" className="bg-white text-foreground hover:bg-white/90 cta-responsive min-h-[48px] font-semibold rounded-none" asChild>
                <a href="/contact">Get Sandbox Access</a>
              </Button>
              <Button size="xl" className="bg-black text-white hover:bg-black/80 cta-responsive min-h-[48px] font-semibold rounded-none border border-white/20" asChild>
                <a href="/docs/quickstart">Quick Start Guide</a>
              </Button>
            </div>
            <p className="mt-6 font-mono text-xs text-white/40 tracking-wide">v1.0 &nbsp;•&nbsp; REST + JSON &nbsp;•&nbsp; API Key Auth &nbsp;•&nbsp; Flights &nbsp;•&nbsp; Hotels &nbsp;•&nbsp; Tours &nbsp;•&nbsp; Insurance &nbsp;•&nbsp; PackagePro &nbsp;•&nbsp; Free sandbox</p>
          </div>
        </section>

        {/* ===== SECTION 1 - QUICK START ===== */}
        <section className="py-20 md:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <RevealBlock>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">Start Building in 5 Minutes</h2>
              <p className="mt-4 text-muted-foreground text-center max-w-2xl mx-auto">
                Three steps to your first API call. Search flights, hotels, tours, or insurance — all from one sandbox.
              </p>
            </RevealBlock>
            <RevealBlock>
              <div className="mt-14 grid md:grid-cols-3 gap-8">
                {[
                  { num: 1, title: "Sign Up", desc: "Create a free Intraverse account. No credit card required. You'll get sandbox API credentials immediately.", cta: "Start now", href: "https://www.intraverse.app/register" },
                  { num: 2, title: "Authenticate", desc: "Use your API key with OAuth 2.0 Bearer tokens. Every request is authenticated and encrypted end-to-end.", cta: "Read Auth Guide", href: "/docs/authentication" },
                  { num: 3, title: "Make Your First Call", desc: "Search flights, hotels, or tours. Get real responses from aggregated inventory. Test in sandbox - go live when you're ready.", cta: "Try It Now", href: "/docs/quickstart" },
                ].map((s) => (
                  <div key={s.num} className="border border-border rounded-xl p-8 hover:border-[hsl(var(--brand-blue))] transition-colors">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[hsl(var(--brand-blue))] text-white font-bold text-lg">{s.num}</span>
                    <h3 className="h3-global mt-5 text-foreground">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    <a href={s.href} className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[hsl(var(--brand-blue))] hover:underline">
                      {s.cta} <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                ))}
              </div>
            </RevealBlock>
          </div>
        </section>

        {/* ===== SECTION 2 - DOC CATEGORIES ===== */}
        <section className="py-20 md:py-24 bg-[#F0F5FC]">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <RevealBlock>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">Explore the Documentation</h2>
              <p className="mt-4 text-muted-foreground text-center max-w-2xl mx-auto">
                Every endpoint, webhook event, and data model - documented with examples. Choose a section to dive in.
              </p>
            </RevealBlock>
            <RevealBlock>
              <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                {docCategories.map((c) => (
                  <a key={c.title} href={c.href} className="group relative bg-background rounded-xl p-6 border border-border hover:border-[hsl(var(--brand-blue))] hover:-translate-y-0.5 transition-all">
                    {c.isNew && (
                      <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider bg-teal-500 text-white px-2 py-0.5 rounded">
                        New
                      </span>
                    )}
                    <span className="text-3xl">{c.emoji}</span>
                    <h3 className="h3-global mt-3 text-foreground group-hover:text-[hsl(var(--brand-blue))] transition-colors">{c.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-[hsl(var(--brand-blue))]">Browse <ArrowRight className="w-3 h-3" /></span>
                  </a>
                ))}
              </div>
            </RevealBlock>
          </div>
        </section>

        {/* ===== SECTION 3 - CODE EXAMPLES ===== */}
        <section className="py-20 md:py-24 bg-[#0D1B2A]">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <RevealBlock>
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center">See It in Action</h2>
              <p className="mt-4 text-white/50 text-center max-w-2xl mx-auto">
                Real requests across every product type. Copy, paste, run — you're calling the live sandbox.
              </p>
            </RevealBlock>
            <RevealBlock>
              <div className="mt-12">
                {/* language tabs */}
                <div className="flex gap-1 mb-4 overflow-x-auto">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setActiveTab(lang)}
                      className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors whitespace-nowrap ${activeTab === lang ? "bg-[#1A1A2E] text-white" : "text-white/40 hover:text-white/70"}`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>

                {/* Request */}
                <div className="relative bg-[#1A1A2E] rounded-t-lg p-5 overflow-x-auto">
                  <p className="text-xs text-white/30 font-mono mb-3 uppercase tracking-wider">Request</p>
                  <CopyButton text={codeSamples[activeTab].request} />
                  <pre className="text-sm text-green-400 font-mono whitespace-pre leading-relaxed">{codeSamples[activeTab].request}</pre>
                </div>

                {/* Response */}
                <div className="relative bg-[#141425] rounded-b-lg p-5 border-t border-white/5 overflow-x-auto">
                  <p className="text-xs text-white/30 font-mono mb-3 uppercase tracking-wider">Response</p>
                  <CopyButton text={codeSamples[activeTab].response} />
                  <pre className="text-sm text-blue-300 font-mono whitespace-pre leading-relaxed">{codeSamples[activeTab].response}</pre>
                </div>
              </div>

              <p className="mt-8 text-white/40 text-sm text-center max-w-2xl mx-auto">
                Pick a product, hit the endpoint, get structured results. Full documentation for each product type is one click away.
              </p>
              <div className="mt-6 text-center">
                <Button size="xl" variant="outline" className="bg-white border-white text-foreground hover:bg-foreground hover:text-white hover:border-foreground cta-responsive min-h-[48px] rounded-none" asChild>
                  <a href="/docs/reference">View Full Documentation <ArrowRight className="w-4 h-4 ml-1" /></a>
                </Button>
              </div>
            </RevealBlock>
          </div>
        </section>

        {/* ===== SECTION 4 - SDKs ===== */}
        <section className="py-20 md:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <RevealBlock>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">Build Faster With Official SDKs</h2>
              <p className="mt-4 text-muted-foreground text-center max-w-2xl mx-auto">
                Official client libraries for the languages you already use. Fully typed, well-documented, and maintained by the Intraverse engineering team.
              </p>
            </RevealBlock>
            <RevealBlock>
              <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sdks.map((sdk) => (
                  <div key={sdk.name} className="border border-border rounded-xl p-6 hover:border-[hsl(var(--brand-blue))] transition-colors">
                    <span className="text-3xl">{sdk.emoji}</span>
                    <h3 className="h3-global mt-3 text-foreground">{sdk.name}</h3>
                    <code className="mt-2 block text-xs bg-muted text-muted-foreground px-3 py-2 rounded font-mono">{sdk.install}</code>
                    <p className="mt-3 text-xs text-muted-foreground">{sdk.version}</p>
                    <div className="mt-3 flex gap-3">
                      <a
                        href={sdk.github}
                        {...(sdk.github.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="text-xs font-medium text-[hsl(var(--brand-blue))] hover:underline flex items-center gap-1"
                      >
                        GitHub <ExternalLink className="w-3 h-3" />
                      </a>
                      <a
                        href={sdk.docs}
                        {...(sdk.docs.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="text-xs font-medium text-[hsl(var(--brand-blue))] hover:underline"
                      >
                        Docs
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </RevealBlock>

            {/* Postman collections */}
            <RevealBlock>
              <div className="mt-8 grid md:grid-cols-2 gap-6">
                {postmanCollections.map((p) => (
                  <div key={p.name} className="relative border border-border rounded-xl p-6 hover:border-[hsl(var(--brand-blue))] transition-colors bg-background">
                    {p.badge && (
                      <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider bg-teal-500 text-white px-2 py-0.5 rounded">
                        {p.badge}
                      </span>
                    )}
                    <span className="text-3xl">{p.emoji}</span>
                    <h3 className="h3-global mt-3 text-foreground">{p.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                    <p className="mt-3 text-xs text-muted-foreground">{p.meta}</p>
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[hsl(var(--brand-blue))] hover:underline"
                    >
                      {p.cta}
                    </a>
                  </div>
                ))}
              </div>
            </RevealBlock>
          </div>
        </section>

        {/* ===== SECTION 5 - ADDITIONAL RESOURCES ===== */}
        <section className="py-20 md:py-24 bg-[#F0F5FC]">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <RevealBlock>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">Everything Else You'll Need</h2>
            </RevealBlock>
            <RevealBlock>
              <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.map((r) => (
                  <a key={r.title} href={r.href} className="group bg-background rounded-xl p-6 border border-border hover:border-[hsl(var(--brand-blue))] hover:-translate-y-0.5 transition-all">
                    <span className="text-2xl">{r.emoji}</span>
                    <h3 className="h3-global mt-3 text-foreground group-hover:text-[hsl(var(--brand-blue))] transition-colors">{r.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-[hsl(var(--brand-blue))]">→</span>
                  </a>
                ))}
              </div>
            </RevealBlock>
          </div>
        </section>

        {/* ===== SECTION 6 - DEVELOPER SUPPORT ===== */}
        <section className="py-20 md:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <RevealBlock>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">Stuck? We're Here to Help.</h2>
              <p className="mt-4 text-muted-foreground text-center max-w-2xl mx-auto">
                We've all been stuck on an integration at 2am. Our developer support team has been there too - and they'll help you get unstuck. Real developers answering real questions, not a chatbot trained on outdated docs.
              </p>
            </RevealBlock>
            <RevealBlock>
              <div className="mt-14 grid md:grid-cols-3 gap-8">
                {[
                  { emoji: "💬", title: "Developer WhatsApp", desc: "Direct access to our technical team. Ask questions, share code snippets, get answers in real time. Business hours: Mon-Fri 9am-6pm WAT.", cta: "Chat Now", href: whatsappUrl("Hi Intraverse, I have a question about the API.") },
                  { emoji: "📧", title: "Technical Support", desc: "For complex integration questions, architecture guidance, and issues that need deeper investigation. We respond within 4 hours on business days.", cta: "Email Support", href: "mailto:developers@intraverse.africa" },
                  { emoji: "🐛", title: "Bug Reports", desc: "Found a bug? Report it. We take every bug report seriously and will keep you updated on the fix. Include your request ID for fastest resolution.", cta: "Report a Bug", href: "mailto:developers@intraverse.africa?subject=Bug%20Report" },
                ].map((c) => (
                  <div key={c.title} className="border border-border rounded-xl p-8 text-center">
                    <span className="text-4xl">{c.emoji}</span>
                    <h3 className="h3-global mt-4 text-foreground">{c.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                    <Button variant="outline" size="default" className="mt-5 rounded-none" asChild>
                      <a href={c.href}>{c.cta}</a>
                    </Button>
                  </div>
                ))}
              </div>
            </RevealBlock>
          </div>
        </section>

        {/* ===== SECTION 7 - PARTNERSHIP CTA ===== */}
        <section className="py-20 md:py-24 bg-[#F0F5FC]">
          <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
            <RevealBlock>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Building Something Big?</h2>
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                For high-volume integrations — fintechs, super-apps, and consumer travel marketplaces — we offer co-build partnerships with dedicated engineering support, custom commercial terms, and direct access to our product team. Our API now covers flights, hotels, tours, insurance, and custom packages. If you're building something that could change how Africans travel, let's talk.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="xl" className="cta-responsive min-h-[48px]" asChild>
                  <a href="/partnerships">Explore Partnerships</a>
                </Button>
                <Button variant="outline" size="xl" className="cta-responsive min-h-[48px] rounded-none" asChild>
                  <a href="/contact">Talk to Partnerships Team</a>
                </Button>
              </div>
            </RevealBlock>
          </div>
        </section>

        {/* ===== FINAL CTA ===== */}
        <section className="py-20 md:py-24 bg-foreground">
          <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-background">Ready to Start Building?</h2>
            <p className="mt-4 text-background/60 max-w-xl mx-auto">
              Get free sandbox access, read the quick start guide, and make your first API call in under 10 minutes. No credit card. No sales call. Just an API key and the freedom to build.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="xl" className="bg-background text-foreground hover:bg-background/90 cta-responsive min-h-[48px] rounded-none font-semibold" asChild>
                <a href="/contact">Get Sandbox Access</a>
              </Button>
              <Button size="xl" variant="outline" className="bg-background text-foreground border-background hover:bg-foreground hover:text-background cta-responsive min-h-[48px] rounded-none font-semibold" asChild>
                <a href="/docs/quickstart">Read the Quick Start</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
