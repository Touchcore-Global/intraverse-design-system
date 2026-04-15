import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Copy, Check, ExternalLink, ArrowRight } from "lucide-react";
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
/* ---------- scroll-reveal helper ---------- */
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
function RevealBlock({ children, className = "" }: { children: React.ReactNode; className?: string }) {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  const { ref, revealClass } = useScrollReveal();
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  return (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    <div ref={ref} className={`transition-all duration-700 ease-out ${revealClass} ${className}`}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      {children}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  );
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
/* ---------- code samples ---------- */
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
const codeSamples: Record<string, { request: string; response: string }> = {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  cURL: {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    request: `curl -X POST https://api.intraverse.app/v1/flights/search \\
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  -H "Authorization: Bearer YOUR_API_KEY" \\
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  -H "Content-Type: application/json" \\
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  -d '{
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    "origin": "LOS",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    "destination": "LHR",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    "departure_date": "2026-06-15",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    "adults": 1,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    "cabin_class": "economy"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  }'`,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    response: `{
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  "status": "success",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  "data": {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    "search_id": "srch_9f8a7b6c5d4e3f2a",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    "results_count": 24,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    "results": [
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        "offer_id": "ofr_1a2b3c4d5e6f",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        "airline": "Ethiopian Airlines",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        "price": { "amount": 485000, "currency": "NGN" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        "departure": "2026-06-15T08:30:00Z",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        "arrival": "2026-06-15T16:45:00Z",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        "stops": 0
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      }
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    ]
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  }
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
}`,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  "Node.js": {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    request: `import Intraverse from '@intraverse/node';
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
const client = new Intraverse({ apiKey: 'YOUR_API_KEY' });
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
const results = await client.flights.search({
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  origin: 'LOS',
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  destination: 'LHR',
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  departureDate: '2026-06-15',
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  adults: 1,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  cabinClass: 'economy',
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
});`,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    response: `// results
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
{
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  searchId: 'srch_9f8a7b6c5d4e3f2a',
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  resultsCount: 24,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  results: [
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      offerId: 'ofr_1a2b3c4d5e6f',
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      airline: 'Ethiopian Airlines',
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      price: { amount: 485000, currency: 'NGN' },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      departure: '2026-06-15T08:30:00Z',
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      arrival: '2026-06-15T16:45:00Z',
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      stops: 0,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  ],
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
}`,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  Python: {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    request: `from intraverse import Intraverse
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
client = Intraverse(api_key="YOUR_API_KEY")
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
results = client.flights.search(
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    origin="LOS",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    destination="LHR",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    departure_date="2026-06-15",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    adults=1,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    cabin_class="economy",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
)`,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    response: `# results
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
{
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    "search_id": "srch_9f8a7b6c5d4e3f2a",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    "results_count": 24,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    "results": [
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            "offer_id": "ofr_1a2b3c4d5e6f",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            "airline": "Ethiopian Airlines",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            "price": {"amount": 485000, "currency": "NGN"},
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            "departure": "2026-06-15T08:30:00Z",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            "arrival": "2026-06-15T16:45:00Z",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            "stops": 0
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        }
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    ]
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
}`,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  PHP: {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    request: `<?php
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
use Intraverse\\IntraverseClient;
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
$client = new IntraverseClient('YOUR_API_KEY');
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
$results = $client->flights->search([
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    'origin' => 'LOS',
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    'destination' => 'LHR',
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    'departure_date' => '2026-06-15',
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    'adults' => 1,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    'cabin_class' => 'economy',
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
]);`,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    response: `// $results
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
[
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    "search_id" => "srch_9f8a7b6c5d4e3f2a",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    "results_count" => 24,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    "results" => [
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        [
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            "offer_id" => "ofr_1a2b3c4d5e6f",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            "airline" => "Ethiopian Airlines",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            "price" => ["amount" => 485000, "currency" => "NGN"],
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            "departure" => "2026-06-15T08:30:00Z",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            "arrival" => "2026-06-15T16:45:00Z",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            "stops" => 0,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        ],
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    ],
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
]`,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
};
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
const languages = Object.keys(codeSamples);
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
/* ---------- doc categories ---------- */
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
const docCategories = [
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { emoji: "🚀", title: "Quick Start", desc: "Get up and running in 5 minutes", href: "/docs/quickstart" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { emoji: "🔐", title: "Authentication", desc: "OAuth 2.0 setup and API key management", href: "/docs/authentication" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { emoji: "✈️", title: "Flight APIs", desc: "Search, book, and ticket flight inventory", href: "/docs/flights" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { emoji: "🏨", title: "Hotel APIs", desc: "Search and book hotel accommodation", href: "/docs/hotels" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { emoji: "🌍", title: "Tour APIs", desc: "Browse and book tours and experiences", href: "/docs/tours" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { emoji: "📡", title: "Webhooks", desc: "Real-time event notifications", href: "/docs/webhooks" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { emoji: "💳", title: "Payments", desc: "Wallet, settlements, and transactions", href: "/docs/payments" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { emoji: "📖", title: "API Reference", desc: "Complete endpoint reference documentation", href: "/docs/reference" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
];
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
/* ---------- SDKs ---------- */
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
const sdks = [
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { emoji: "🟢", name: "Node.js SDK", install: "npm install @intraverse/node", version: "v1.0.0 • MIT", github: "#", docs: "/docs/quickstart" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { emoji: "🐍", name: "Python SDK", install: "pip install intraverse", version: "v1.0.0 • MIT", github: "#", docs: "/docs/quickstart" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { emoji: "🐘", name: "PHP SDK", install: "composer require intraverse/api", version: "v1.0.0 • MIT", github: "#", docs: "/docs/quickstart" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { emoji: "📦", name: "Postman Collection", install: "Download →", version: "Updated weekly", github: "#", docs: "#" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
];
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
/* ---------- additional resources ---------- */
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
const resources = [
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { emoji: "📋", title: "OpenAPI Specification", desc: "Download the full OpenAPI 3.0 spec for code generation, client validation, and internal tooling. Always reflects the latest production version.", href: "#" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { emoji: "🧪", title: "Sandbox Environment", desc: "A full-featured sandbox that mirrors production — real endpoints, realistic responses, and test booking flows. No real tickets issued, no real money moved.", href: "#" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { emoji: "📝", title: "Changelog", desc: "Every API change, deprecation, and new feature — documented in one place. Subscribe via webhook to get notified of changes that affect your integration.", href: "#" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { emoji: "🚨", title: "Error Reference", desc: "Complete list of error codes, what they mean, and how to handle them. Includes retry guidance and common troubleshooting steps.", href: "#" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { emoji: "📊", title: "Rate Limits", desc: "Current rate limits by endpoint tier, how to check remaining quota via headers, and how to request higher limits for production workloads.", href: "#" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { emoji: "🔄", title: "Versioning & Deprecation", desc: "How we version the API, our deprecation policy (minimum 6 months notice), and how to migrate between versions safely.", href: "#" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
];
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
/* ---------- Copy button ---------- */
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
function CopyButton({ text }: { text: string }) {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  const [copied, setCopied] = useState(false);
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  const handleCopy = () => {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    navigator.clipboard.writeText(text);
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    setCopied(true);
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    setTimeout(() => setCopied(false), 2000);
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  };
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  return (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    <button
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      onClick={handleCopy}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      className="absolute top-3 right-3 p-1.5 rounded bg-white/10 hover:bg-white/20 transition-colors text-white/60 hover:text-white"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      aria-label="Copy code"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    >
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    </button>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  );
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
/* ========== MAIN PAGE ========== */
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
export default function Docs() {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  const [activeTab, setActiveTab] = useState("cURL");
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  useEffect(() => {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    document.title = "API Documentation | Build Travel Into Your Product | Intraverse";
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    const meta = (name: string, content: string) => {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      let el = document.querySelector(`meta[property="${name}"], meta[name="${name}"]`);
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      if (!el) { el = document.createElement("meta"); el.setAttribute(name.startsWith("og:") ? "property" : "name", name); document.head.appendChild(el); }
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      el.setAttribute("content", content);
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    };
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    meta("description", "Comprehensive API documentation for developers building on Intraverse. REST API, OAuth 2.0, free sandbox, SDKs for Node, Python, and PHP. Start building in 5 minutes.");
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    meta("og:title", "Intraverse API Documentation — Build Travel Into Your Product");
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    meta("og:description", "Aggregated travel inventory through one REST API. Free sandbox, modern docs, official SDKs, and dedicated developer support. Get started in minutes.");
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  }, []);
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  return (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    <div className="min-h-screen flex flex-col bg-background">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <Navbar />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <main className="flex-1 pt-16">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        {/* ===== HERO ===== */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <section className="relative bg-[#0D1B2A] overflow-hidden">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <div className="container mx-auto px-4 lg:px-8 py-20 md:py-28 relative z-10 text-center">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <p className="text-sm font-semibold tracking-widest text-[hsl(var(--brand-blue))] mb-4">API DOCUMENTATION</p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">Build Travel Into Your Product</h1>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <p className="mt-6 text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              Comprehensive API documentation for developers building on Intraverse. Search, book, and settle travel through a RESTful API backed by aggregated inventory from GDS, NDC, consolidators, and leading global suppliers.
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <Button size="xl" className="bg-white text-foreground hover:bg-white/90 cta-responsive min-h-[48px] font-semibold rounded-none" asChild>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <a href="/contact">Get Sandbox Access</a>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </Button>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <Button size="xl" variant="outline" className="border-white/30 text-white hover:bg-white/10 cta-responsive min-h-[48px] rounded-none" asChild>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <a href="/docs/quickstart">Quick Start Guide</a>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </Button>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <p className="mt-6 font-mono text-xs text-white/40 tracking-wide">v1.0 &nbsp;•&nbsp; REST + JSON &nbsp;•&nbsp; OAuth 2.0 &nbsp;•&nbsp; Free sandbox</p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </section>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        {/* ===== SECTION 1 — QUICK START ===== */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <section className="py-20 md:py-24 bg-background">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">Start Building in 5 Minutes</h2>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <p className="mt-4 text-muted-foreground text-center max-w-2xl mx-auto">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                Three steps. No sales calls. No waiting for approval. Create an account, authenticate, and make your first API call — all in a single sitting.
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <div className="mt-14 grid md:grid-cols-3 gap-8">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                {[
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  { num: 1, title: "Sign Up", desc: "Create a free Intraverse account. No credit card required. You'll get sandbox API credentials immediately.", cta: "Create Account", href: "https://www.intraverse.app/register" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  { num: 2, title: "Authenticate", desc: "Use your API key with OAuth 2.0 Bearer tokens. Every request is authenticated and encrypted end-to-end.", cta: "Read Auth Guide", href: "/docs/authentication" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  { num: 3, title: "Make Your First Call", desc: "Search flights, hotels, or tours. Get real responses from aggregated inventory. Test in sandbox — go live when you're ready.", cta: "Try It Now", href: "/docs/quickstart" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                ].map((s) => (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <div key={s.num} className="border border-border rounded-xl p-8 hover:border-[hsl(var(--brand-blue))] transition-colors">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[hsl(var(--brand-blue))] text-white font-bold text-lg">{s.num}</span>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <h3 className="mt-5 text-xl font-bold text-foreground">{s.title}</h3>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <a href={s.href} className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[hsl(var(--brand-blue))] hover:underline">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      {s.cta} <ArrowRight className="w-3.5 h-3.5" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    </a>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                ))}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </section>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        {/* ===== SECTION 2 — DOC CATEGORIES ===== */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <section className="py-20 md:py-24 bg-[#F0F5FC]">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">Explore the Documentation</h2>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <p className="mt-4 text-muted-foreground text-center max-w-2xl mx-auto">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                Every endpoint, webhook event, and data model — documented with examples. Choose a section to dive in.
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                {docCategories.map((c) => (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <a key={c.title} href={c.href} className="group bg-background rounded-xl p-6 border border-border hover:border-[hsl(var(--brand-blue))] hover:-translate-y-0.5 transition-all">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <span className="text-3xl">{c.emoji}</span>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <h3 className="mt-3 text-lg font-bold text-foreground group-hover:text-[hsl(var(--brand-blue))] transition-colors">{c.title}</h3>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-[hsl(var(--brand-blue))]">Browse <ArrowRight className="w-3 h-3" /></span>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  </a>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                ))}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </section>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        {/* ===== SECTION 3 — CODE EXAMPLES ===== */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <section className="py-20 md:py-24 bg-[#0D1B2A]">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center">See It in Action</h2>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <p className="mt-4 text-white/50 text-center max-w-2xl mx-auto">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                A real flight search request and response. Copy it, paste it, run it. That's it — you're searching aggregated inventory from GDS, NDC, and consolidator sources.
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <div className="mt-12">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                {/* language tabs */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <div className="flex gap-1 mb-4 overflow-x-auto">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  {languages.map((lang) => (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <button
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      key={lang}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      onClick={() => setActiveTab(lang)}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors whitespace-nowrap ${activeTab === lang ? "bg-[#1A1A2E] text-white" : "text-white/40 hover:text-white/70"}`}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    >
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      {lang}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    </button>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  ))}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                {/* Request */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <div className="relative bg-[#1A1A2E] rounded-t-lg p-5 overflow-x-auto">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <p className="text-xs text-white/30 font-mono mb-3 uppercase tracking-wider">Request</p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <CopyButton text={codeSamples[activeTab].request} />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <pre className="text-sm text-green-400 font-mono whitespace-pre leading-relaxed">{codeSamples[activeTab].request}</pre>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                {/* Response */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <div className="relative bg-[#141425] rounded-b-lg p-5 border-t border-white/5 overflow-x-auto">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <p className="text-xs text-white/30 font-mono mb-3 uppercase tracking-wider">Response</p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <CopyButton text={codeSamples[activeTab].response} />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <pre className="text-sm text-blue-300 font-mono whitespace-pre leading-relaxed">{codeSamples[activeTab].response}</pre>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <p className="mt-8 text-white/40 text-sm text-center max-w-2xl mx-auto">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                The response returns aggregated results from multiple sources — GDS, NDC, and consolidator inventory — normalised into a clean, consistent JSON structure.
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <div className="mt-6 text-center">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <Button size="xl" variant="outline" className="border-white/30 text-white hover:bg-white/10 cta-responsive min-h-[48px] rounded-none" asChild>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <a href="/docs/reference">View Full Documentation <ArrowRight className="w-4 h-4 ml-1" /></a>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </Button>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </section>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        {/* ===== SECTION 4 — SDKs ===== */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <section className="py-20 md:py-24 bg-background">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">Build Faster With Official SDKs</h2>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <p className="mt-4 text-muted-foreground text-center max-w-2xl mx-auto">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                Official client libraries for the languages you already use. Fully typed, well-documented, and maintained by the Intraverse engineering team.
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                {sdks.map((sdk) => (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <div key={sdk.name} className="border border-border rounded-xl p-6 hover:border-[hsl(var(--brand-blue))] transition-colors">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <span className="text-3xl">{sdk.emoji}</span>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <h3 className="mt-3 text-lg font-bold text-foreground">{sdk.name}</h3>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <code className="mt-2 block text-xs bg-muted text-muted-foreground px-3 py-2 rounded font-mono">{sdk.install}</code>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <p className="mt-3 text-xs text-muted-foreground">{sdk.version}</p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <div className="mt-3 flex gap-3">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      <a href={sdk.github} className="text-xs font-medium text-[hsl(var(--brand-blue))] hover:underline flex items-center gap-1">GitHub <ExternalLink className="w-3 h-3" /></a>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      <a href={sdk.docs} className="text-xs font-medium text-[hsl(var(--brand-blue))] hover:underline">Docs</a>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                ))}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </section>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        {/* ===== SECTION 5 — ADDITIONAL RESOURCES ===== */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <section className="py-20 md:py-24 bg-[#F0F5FC]">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">Everything Else You'll Need</h2>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                {resources.map((r) => (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <a key={r.title} href={r.href} className="group bg-background rounded-xl p-6 border border-border hover:border-[hsl(var(--brand-blue))] hover:-translate-y-0.5 transition-all">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <span className="text-2xl">{r.emoji}</span>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <h3 className="mt-3 text-base font-bold text-foreground group-hover:text-[hsl(var(--brand-blue))] transition-colors">{r.title}</h3>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-[hsl(var(--brand-blue))]">→</span>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  </a>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                ))}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </section>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        {/* ===== SECTION 6 — DEVELOPER SUPPORT ===== */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <section className="py-20 md:py-24 bg-background">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">Stuck? We're Here to Help.</h2>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <p className="mt-4 text-muted-foreground text-center max-w-2xl mx-auto">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                We've all been stuck on an integration at 2am. Our developer support team has been there too — and they'll help you get unstuck. Real developers answering real questions, not a chatbot trained on outdated docs.
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <div className="mt-14 grid md:grid-cols-3 gap-8">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                {[
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  { emoji: "💬", title: "Developer WhatsApp", desc: "Direct access to our technical team. Ask questions, share code snippets, get answers in real time. Business hours: Mon-Fri 9am-6pm WAT.", cta: "Chat Now", href: "https://wa.me/2349030002629?text=Hi%20Intraverse%2C%20I%20have%20a%20question%20about%20the%20API." },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  { emoji: "📧", title: "Technical Support", desc: "For complex integration questions, architecture guidance, and issues that need deeper investigation. We respond within 4 hours on business days.", cta: "Email Support", href: "mailto:developers@intraverse.africa" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  { emoji: "🐛", title: "Bug Reports", desc: "Found a bug? Report it. We take every bug report seriously and will keep you updated on the fix. Include your request ID for fastest resolution.", cta: "Report a Bug", href: "mailto:developers@intraverse.africa?subject=Bug%20Report" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                ].map((c) => (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <div key={c.title} className="border border-border rounded-xl p-8 text-center">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <span className="text-4xl">{c.emoji}</span>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <h3 className="mt-4 text-xl font-bold text-foreground">{c.title}</h3>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <Button variant="outline" size="default" className="mt-5 rounded-none" asChild>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      <a href={c.href}>{c.cta}</a>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    </Button>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                ))}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </section>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        {/* ===== SECTION 7 — PARTNERSHIP CTA ===== */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <section className="py-20 md:py-24 bg-[#F0F5FC]">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Building Something Big?</h2>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                If you're building a product that touches travel — a super-app, a fintech, a corporate platform — we want to talk. Our partnerships team works with companies that are embedding Intraverse at scale.
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <Button variant="hero" size="xl" className="cta-responsive min-h-[48px]" asChild>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <a href="/partnerships">Explore Partnerships</a>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </Button>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <Button variant="outline" size="xl" className="cta-responsive min-h-[48px] rounded-none" asChild>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <a href="/contact">Talk to Partnerships Team</a>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </Button>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </section>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        {/* ===== FINAL CTA ===== */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <section className="py-20 md:py-24 bg-foreground">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <h2 className="text-3xl md:text-4xl font-bold text-background">Ready to Start Building?</h2>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <p className="mt-4 text-background/60 max-w-xl mx-auto">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              Get free sandbox access, read the quick start guide, and make your first API call in under 10 minutes. No credit card. No sales call. Just an API key and the freedom to build.
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <Button size="xl" className="bg-background text-foreground hover:bg-background/90 cta-responsive min-h-[48px] rounded-none font-semibold" asChild>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <a href="/contact">Get Sandbox Access</a>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </Button>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <Button size="xl" variant="outline" className="border-background/30 text-background hover:bg-background/10 cta-responsive min-h-[48px] rounded-none" asChild>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <a href="/docs/quickstart">Read the Quick Start</a>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </Button>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </section>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      </main>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <Footer />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <WhatsAppFab />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  );
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
}
