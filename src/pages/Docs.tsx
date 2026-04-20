import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Copy, Check, ExternalLink, ArrowRight } from "lucide-react";
import { whatsappUrl } from "@/lib/constants";

/* ---------- scroll-reveal helper ---------- */
function RevealBlock({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, revealClass } = useScrollReveal();
  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${revealClass} ${className}`}>
      {children}
    </div>
  );
}

/* ---------- code samples ---------- */
const codeSamples: Record<string, { request: string; response: string }> = {
  cURL: {
    request: `curl -X POST https://api.intraverse.app/v1/flights/search \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "origin": "LOS",
    "destination": "LHR",
    "departure_date": "2026-06-15",
    "adults": 1,
    "cabin_class": "economy"
  }'`,
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
  "Node.js": {
    request: `import Intraverse from '@intraverse/node';

const client = new Intraverse({ apiKey: 'YOUR_API_KEY' });

const results = await client.flights.search({
  origin: 'LOS',
  destination: 'LHR',
  departureDate: '2026-06-15',
  adults: 1,
  cabinClass: 'economy',
});`,
    response: `// results
{
  searchId: 'srch_9f8a7b6c5d4e3f2a',
  resultsCount: 24,
  results: [
    {
      offerId: 'ofr_1a2b3c4d5e6f',
      airline: 'Ethiopian Airlines',
      price: { amount: 485000, currency: 'NGN' },
      departure: '2026-06-15T08:30:00Z',
      arrival: '2026-06-15T16:45:00Z',
      stops: 0,
    },
  ],
}`,
  },
  Python: {
    request: `from intraverse import Intraverse

client = Intraverse(api_key="YOUR_API_KEY")

results = client.flights.search(
    origin="LOS",
    destination="LHR",
    departure_date="2026-06-15",
    adults=1,
    cabin_class="economy",
)`,
    response: `# results
{
    "search_id": "srch_9f8a7b6c5d4e3f2a",
    "results_count": 24,
    "results": [
        {
            "offer_id": "ofr_1a2b3c4d5e6f",
            "airline": "Ethiopian Airlines",
            "price": {"amount": 485000, "currency": "NGN"},
            "departure": "2026-06-15T08:30:00Z",
            "arrival": "2026-06-15T16:45:00Z",
            "stops": 0
        }
    ]
}`,
  },
  PHP: {
    request: `<?php
use Intraverse\\IntraverseClient;

$client = new IntraverseClient('YOUR_API_KEY');

$results = $client->flights->search([
    'origin' => 'LOS',
    'destination' => 'LHR',
    'departure_date' => '2026-06-15',
    'adults' => 1,
    'cabin_class' => 'economy',
]);`,
    response: `// $results
[
    "search_id" => "srch_9f8a7b6c5d4e3f2a",
    "results_count" => 24,
    "results" => [
        [
            "offer_id" => "ofr_1a2b3c4d5e6f",
            "airline" => "Ethiopian Airlines",
            "price" => ["amount" => 485000, "currency" => "NGN"],
            "departure" => "2026-06-15T08:30:00Z",
            "arrival" => "2026-06-15T16:45:00Z",
            "stops" => 0,
        ],
    ],
]`,
  },
};

const languages = Object.keys(codeSamples);

/* ---------- doc categories ---------- */
const docCategories = [
  { emoji: "🚀", title: "Quick Start", desc: "Get up and running in 5 minutes", href: "/docs/quickstart" },
  { emoji: "🔐", title: "Authentication", desc: "OAuth 2.0 setup and API key management", href: "/docs/authentication" },
  { emoji: "✈️", title: "Flight APIs", desc: "Search, book, and ticket flight inventory", href: "/docs/flights" },
  { emoji: "🏨", title: "Hotel APIs", desc: "Search and book hotel accommodation", href: "/docs/hotels" },
  { emoji: "🌍", title: "Tour APIs", desc: "Browse and book tours and experiences", href: "/docs/tours" },
  { emoji: "📡", title: "Webhooks", desc: "Real-time event notifications", href: "/docs/webhooks" },
  { emoji: "💳", title: "Payments", desc: "Wallet, settlements, and transactions", href: "/docs/payments" },
  { emoji: "📖", title: "API Reference", desc: "Complete endpoint reference documentation", href: "/docs/reference" },
];

/* ---------- SDKs ---------- */
const sdks = [
  { emoji: "🟢", name: "Node.js SDK", install: "npm install @intraverse/node", version: "v1.0.0 • MIT", github: "#", docs: "/docs/quickstart" },
  { emoji: "🐍", name: "Python SDK", install: "pip install intraverse", version: "v1.0.0 • MIT", github: "#", docs: "/docs/quickstart" },
  { emoji: "🐘", name: "PHP SDK", install: "composer require intraverse/api", version: "v1.0.0 • MIT", github: "#", docs: "/docs/quickstart" },
  { emoji: "📦", name: "Postman Collection", install: "Download →", version: "Updated weekly", github: "#", docs: "#" },
];

/* ---------- additional resources ---------- */
const resources = [
  { emoji: "📋", title: "OpenAPI Specification", desc: "Download the full OpenAPI 3.0 spec for code generation, client validation, and internal tooling. Always reflects the latest production version.", href: "#" },
  { emoji: "🧪", title: "Sandbox Environment", desc: "A full-featured sandbox that mirrors production — real endpoints, realistic responses, and test booking flows. No real tickets issued, no real money moved.", href: "#" },
  { emoji: "📝", title: "Changelog", desc: "Every API change, deprecation, and new feature — documented in one place. Subscribe via webhook to get notified of changes that affect your integration.", href: "#" },
  { emoji: "🚨", title: "Error Reference", desc: "Complete list of error codes, what they mean, and how to handle them. Includes retry guidance and common troubleshooting steps.", href: "#" },
  { emoji: "📊", title: "Rate Limits", desc: "Current rate limits by endpoint tier, how to check remaining quota via headers, and how to request higher limits for production workloads.", href: "#" },
  { emoji: "🔄", title: "Versioning & Deprecation", desc: "How we version the API, our deprecation policy (minimum 6 months notice), and how to migrate between versions safely.", href: "#" },
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
  const [activeTab, setActiveTab] = useState("cURL");

  useEffect(() => {
    document.title = "API Documentation | Build Travel Into Your Product | Intraverse";
    const meta = (name: string, content: string) => {
      let el = document.querySelector(`meta[property="${name}"], meta[name="${name}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute(name.startsWith("og:") ? "property" : "name", name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    meta("description", "Comprehensive API documentation for developers building on Intraverse. REST API, OAuth 2.0, free sandbox, SDKs for Node, Python, and PHP. Start building in 5 minutes.");
    meta("og:title", "Intraverse API Documentation — Build Travel Into Your Product");
    meta("og:description", "Aggregated travel inventory through one REST API. Free sandbox, modern docs, official SDKs, and dedicated developer support. Get started in minutes.");
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-16">

        {/* ===== HERO ===== */}
        <section className="relative bg-iv-navy-900 overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <div className="container mx-auto px-4 lg:px-8 py-20 md:py-28 relative z-10 text-center">
            <p className="text-sm font-semibold tracking-widest text-[hsl(var(--brand-blue))] mb-4">API DOCUMENTATION</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">Build Travel Into Your Product</h1>
            <p className="mt-6 text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              Comprehensive API documentation for developers building on Intraverse. Search, book, and settle travel through a RESTful API backed by aggregated inventory from GDS, NDC, consolidators, and leading global suppliers.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="xl" className="bg-white text-foreground hover:bg-white/90 cta-responsive min-h-[48px] font-semibold rounded-none" asChild>
                <a href="/contact">Get Sandbox Access</a>
              </Button>
              <Button size="xl" variant="outline" className="border-white/30 text-white hover:bg-white/10 cta-responsive min-h-[48px] rounded-none" asChild>
                <a href="/docs/quickstart">Quick Start Guide</a>
              </Button>
            </div>
            <p className="mt-6 font-mono text-xs text-white/40 tracking-wide">v1.0 &nbsp;•&nbsp; REST + JSON &nbsp;•&nbsp; OAuth 2.0 &nbsp;•&nbsp; Free sandbox</p>
          </div>
        </section>

        {/* ===== SECTION 1 — QUICK START ===== */}
        <section className="py-20 md:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <RevealBlock>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">Start Building in 5 Minutes</h2>
              <p className="mt-4 text-muted-foreground text-center max-w-2xl mx-auto">
                Three steps. No sales calls. No waiting for approval. Create an account, authenticate, and make your first API call — all in a single sitting.
              </p>
            </RevealBlock>
            <RevealBlock>
              <div className="mt-14 grid md:grid-cols-3 gap-8">
                {[
                  { num: 1, title: "Sign Up", desc: "Create a free Intraverse account. No credit card required. You'll get sandbox API credentials immediately.", cta: "Create Account", href: "https://www.intraverse.app/register" },
                  { num: 2, title: "Authenticate", desc: "Use your API key with OAuth 2.0 Bearer tokens. Every request is authenticated and encrypted end-to-end.", cta: "Read Auth Guide", href: "/docs/authentication" },
                  { num: 3, title: "Make Your First Call", desc: "Search flights, hotels, or tours. Get real responses from aggregated inventory. Test in sandbox — go live when you're ready.", cta: "Try It Now", href: "/docs/quickstart" },
                ].map((s) => (
                  <div key={s.num} className="border border-border rounded-xl p-8 hover:border-[hsl(var(--brand-blue))] transition-colors">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[hsl(var(--brand-blue))] text-white font-bold text-lg">{s.num}</span>
                    <h3 className="mt-5 text-xl font-bold text-foreground">{s.title}</h3>
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

        {/* ===== SECTION 2 — DOC CATEGORIES ===== */}
        <section className="py-20 md:py-24 bg-accent">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <RevealBlock>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">Explore the Documentation</h2>
              <p className="mt-4 text-muted-foreground text-center max-w-2xl mx-auto">
                Every endpoint, webhook event, and data model — documented with examples. Choose a section to dive in.
              </p>
            </RevealBlock>
            <RevealBlock>
              <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {docCategories.map((c) => (
                  <a key={c.title} href={c.href} className="group bg-background rounded-xl p-6 border border-border hover:border-[hsl(var(--brand-blue))] hover:-translate-y-0.5 transition-all">
                    <span className="text-3xl">{c.emoji}</span>
                    <h3 className="mt-3 text-lg font-bold text-foreground group-hover:text-[hsl(var(--brand-blue))] transition-colors">{c.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-[hsl(var(--brand-blue))]">Browse <ArrowRight className="w-3 h-3" /></span>
                  </a>
                ))}
              </div>
            </RevealBlock>
          </div>
        </section>

        {/* ===== SECTION 3 — CODE EXAMPLES ===== */}
        <section className="py-20 md:py-24 bg-iv-navy-900">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <RevealBlock>
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center">See It in Action</h2>
              <p className="mt-4 text-white/50 text-center max-w-2xl mx-auto">
                A real flight search request and response. Copy it, paste it, run it. That's it — you're searching aggregated inventory from GDS, NDC, and consolidator sources.
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
                      className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors whitespace-nowrap ${activeTab === lang ? "bg-iv-navy-900 text-white" : "text-white/40 hover:text-white/70"}`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>

                {/* Request */}
                <div className="relative bg-iv-navy-900 rounded-t-lg p-5 overflow-x-auto">
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
                The response returns aggregated results from multiple sources — GDS, NDC, and consolidator inventory — normalised into a clean, consistent JSON structure.
              </p>
              <div className="mt-6 text-center">
                <Button size="xl" variant="outline" className="border-white/30 text-white hover:bg-white/10 cta-responsive min-h-[48px] rounded-none" asChild>
                  <a href="/docs/reference">View Full Documentation <ArrowRight className="w-4 h-4 ml-1" /></a>
                </Button>
              </div>
            </RevealBlock>
          </div>
        </section>

        {/* ===== SECTION 4 — SDKs ===== */}
        <section className="py-20 md:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <RevealBlock>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">Build Faster With Official SDKs</h2>
              <p className="mt-4 text-muted-foreground text-center max-w-2xl mx-auto">
                Official client libraries for the languages you already use. Fully typed, well-documented, and maintained by the Intraverse engineering team.
              </p>
            </RevealBlock>
            <RevealBlock>
              <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {sdks.map((sdk) => (
                  <div key={sdk.name} className="border border-border rounded-xl p-6 hover:border-[hsl(var(--brand-blue))] transition-colors">
                    <span className="text-3xl">{sdk.emoji}</span>
                    <h3 className="mt-3 text-lg font-bold text-foreground">{sdk.name}</h3>
                    <code className="mt-2 block text-xs bg-muted text-muted-foreground px-3 py-2 rounded font-mono">{sdk.install}</code>
                    <p className="mt-3 text-xs text-muted-foreground">{sdk.version}</p>
                    <div className="mt-3 flex gap-3">
                      <a href={sdk.github} className="text-xs font-medium text-[hsl(var(--brand-blue))] hover:underline flex items-center gap-1">GitHub <ExternalLink className="w-3 h-3" /></a>
                      <a href={sdk.docs} className="text-xs font-medium text-[hsl(var(--brand-blue))] hover:underline">Docs</a>
                    </div>
                  </div>
                ))}
              </div>
            </RevealBlock>
          </div>
        </section>

        {/* ===== SECTION 5 — ADDITIONAL RESOURCES ===== */}
        <section className="py-20 md:py-24 bg-accent">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <RevealBlock>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">Everything Else You'll Need</h2>
            </RevealBlock>
            <RevealBlock>
              <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.map((r) => (
                  <a key={r.title} href={r.href} className="group bg-background rounded-xl p-6 border border-border hover:border-[hsl(var(--brand-blue))] hover:-translate-y-0.5 transition-all">
                    <span className="text-2xl">{r.emoji}</span>
                    <h3 className="mt-3 text-base font-bold text-foreground group-hover:text-[hsl(var(--brand-blue))] transition-colors">{r.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-[hsl(var(--brand-blue))]">→</span>
                  </a>
                ))}
              </div>
            </RevealBlock>
          </div>
        </section>

        {/* ===== SECTION 6 — DEVELOPER SUPPORT ===== */}
        <section className="py-20 md:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <RevealBlock>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">Stuck? We're Here to Help.</h2>
              <p className="mt-4 text-muted-foreground text-center max-w-2xl mx-auto">
                We've all been stuck on an integration at 2am. Our developer support team has been there too — and they'll help you get unstuck. Real developers answering real questions, not a chatbot trained on outdated docs.
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
                    <h3 className="mt-4 text-xl font-bold text-foreground">{c.title}</h3>
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

        {/* ===== SECTION 7 — PARTNERSHIP CTA ===== */}
        <section className="py-20 md:py-24 bg-accent">
          <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
            <RevealBlock>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Building Something Big?</h2>
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                If you're building a product that touches travel — a super-app, a fintech, a corporate platform — we want to talk. Our partnerships team works with companies that are embedding Intraverse at scale.
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
              <Button size="xl" variant="outline" className="border-background/30 text-background hover:bg-background/10 cta-responsive min-h-[48px] rounded-none" asChild>
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
