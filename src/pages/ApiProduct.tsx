import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

/* ──────── Reusable reveal wrapper ──────── */
function RevealBlock({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, revealClass } = useScrollReveal();
  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${revealClass} ${className}`}>
      {children}
    </div>
  );
}

/* ──────── DATA ──────── */

const capabilityCards = [
  {
    emoji: "✈️",
    title: "Flight Search & Booking",
    body: "Search aggregated flight inventory from GDS (Amadeus, Sabre, Travelport), NDC channels, consolidators, and fare aggregators — all through a single endpoint. Book, hold, and ticket programmatically. Manage PNRs, cancellations, and modifications without touching a legacy system.",
  },
  {
    emoji: "🏨",
    title: "Hotel Inventory & Booking",
    body: "Access hotel inventory from leading global suppliers. Search by location, date, star rating, price range, and room type. Book and manage reservations through the same API. Real-time availability and instant confirmation.",
  },
  {
    emoji: "🌍",
    title: "Tours & Activities",
    body: "Access tours, activities, and travel packages from international suppliers. Bundle with flights and hotels to create complete travel products. Full lifecycle management from search to booking to voucher delivery.",
  },
  {
    emoji: "📡",
    title: "Webhooks & Real-Time Events",
    body: "Subscribe to booking status changes, payment confirmations, schedule changes, and cancellation events. Build reactive workflows without polling. Configure webhook endpoints, retry policies, and event filters through the dashboard or API.",
  },
  {
    emoji: "💳",
    title: "Native Payment Integration",
    body: "Accept payments through multiple channels: cards, bank transfers, mobile money, and Odiopay BNPL — all through the API. Handle multi-currency transactions, split payments, and automated settlement. No separate payment integration required.",
  },
  {
    emoji: "🛡️",
    title: "Compliance Built In",
    body: "IATA-accredited infrastructure handles BSP settlement, ticket validation, and regulatory compliance. You build the product. We handle the accreditation. Your customers get valid tickets backed by proper industry credentials.",
  },
];

const differentiators = [
  {
    emoji: "📖",
    title: "Modern Documentation",
    body: "Interactive API reference with try-it-now functionality. Every endpoint documented with request/response examples. Copy-paste code snippets in Python, Node.js, PHP, and cURL.",
  },
  {
    emoji: "🧪",
    title: "Production-Mirroring Sandbox",
    body: "Test with real inventory structures, realistic pricing, and production-like response times. The sandbox mirrors production — what works in testing works in production.",
  },
  {
    emoji: "⚡",
    title: "Built for Speed",
    body: "Average response times under 2 seconds for search, under 500ms for booking management. Built on infrastructure that handles thousands of concurrent requests.",
  },
  {
    emoji: "👨‍💻",
    title: "Developer Support That Responds",
    body: "Dedicated Slack channel for API developers. Technical support from engineers who built the API, not outsourced agents reading scripts. Average response time under 2 hours during business hours.",
  },
];

const codeExample = `// Search for flights from Lagos to London
const response = await fetch('https://api.intraverse.africa/v1/flights/search', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    origin: 'LOS',
    destination: 'LHR',
    departure_date: '2025-03-15',
    return_date: '2025-03-22',
    passengers: { adults: 1 },
    cabin_class: 'economy',
    sources: ['gds', 'ndc', 'consolidator']
  })
});

const { data } = await response.json();
// Returns aggregated results from all connected suppliers`;

const techSpecs = [
  "RESTful API with JSON request/response format",
  "OAuth 2.0 authentication with API key fallback",
  "Comprehensive error codes with human-readable messages",
  "Rate limiting: 100 requests/second (production), 10/second (sandbox)",
  "Webhook support with configurable retry policies",
  "Pagination on all list endpoints",
  "Idempotent POST requests for safe retries",
  "Versioned API with 12-month deprecation notices",
  "99.9% uptime SLA on production tier",
  "SDKs available for Node.js, Python, and PHP",
  "Postman collection and OpenAPI 3.0 spec available",
  "GDPR and NDPR compliant data handling",
];

const useCases = [
  {
    emoji: "🏦",
    title: "Fintechs & Neobanks",
    body: "Add travel booking as a native feature in your banking or fintech app. Offer flights, hotels, and BNPL — directly from your customer's wallet or account.",
    link: "/for/fintechs",
    linkLabel: "Learn more →",
  },
  {
    emoji: "📱",
    title: "Consumer Travel Apps",
    body: "Build a travel booking app without building travel infrastructure. Access real inventory, process real bookings, and earn real margins — through one API.",
    link: "/for/startups",
    linkLabel: "Learn more →",
  },
  {
    emoji: "🎁",
    title: "Loyalty & Rewards Platforms",
    body: "Let your customers redeem points for real travel. Connect your rewards programme to live flight and hotel inventory through the API.",
    link: "/contact",
    linkLabel: "Talk to us →",
  },
  {
    emoji: "🛒",
    title: "Marketplaces & Super-Apps",
    body: "Add travel as a vertical in your marketplace or super-app. Embed search, booking, and payment — all white-labelled under your brand.",
    link: "/contact",
    linkLabel: "Talk to us →",
  },
];

const steps = [
  {
    num: 1,
    title: "Read the Docs",
    body: "Explore the API reference, understand the data model, and plan your integration. Everything you need is documented.",
    cta: "View Documentation →",
    href: "/docs",
  },
  {
    num: 2,
    title: "Get Sandbox Access",
    body: "Sign up for a free sandbox account. Get your API key in under two minutes. No credit card required.",
    cta: "Get Sandbox Key →",
    href: "/contact",
  },
  {
    num: 3,
    title: "Build Your Integration",
    body: "Use the sandbox to build and test your integration. Our support team is available if you get stuck.",
    cta: "Join Developer Slack →",
    href: "#",
  },
  {
    num: 4,
    title: "Apply for Production",
    body: "When you're ready, apply for production access. We'll review your integration and get you live.",
    cta: "Apply Now →",
    href: "/contact",
  },
];

/* ──────── COMPONENT ──────── */

export default function ApiProduct() {
  useEffect(() => {
    document.title = "Intraverse API | Travel Inventory API for Africa | Flights, Hotels, Tours";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Build travel into your product. Aggregated flight, hotel, and tour inventory through one REST API. OAuth 2.0, free sandbox, comprehensive docs. Built by developers, for developers.");
    }
  }, []);

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* ═══ HERO ═══ */}
        <section className="relative overflow-hidden" style={{ backgroundColor: "#0D1B2A" }}>
          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="container relative mx-auto px-4 py-24 lg:py-36 text-center" style={{ maxWidth: "1000px" }}>
            <RevealBlock>
              <h1 className="text-3xl sm:text-4xl md:text-[64px] md:leading-[72px] font-[660] tracking-[-2px] text-white mb-8">
                The Travel API Built for Africa's Next Generation of Products
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed">
                The Intraverse API gives developers, fintechs, and tech startups programmatic access to aggregated travel inventory — flights from GDS, NDC, consolidators, and aggregators, plus hotels and tours from leading global suppliers. Skip years of supplier negotiations and IATA accreditation. Build travel into your product in weeks, not years.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <Button variant="hero" size="xl" className="cta-responsive min-h-[48px] bg-white text-foreground hover:bg-white/90 shadow-lg" asChild>
                  <a href="/docs">Read the Docs</a>
                </Button>
                <Button variant="outline" size="xl" className="cta-responsive min-h-[48px] rounded-none border-white/30 text-black hover:bg-white/10 hover:text-black" asChild>
                  <a href="/contact">Get Sandbox Access</a>
                </Button>
              </div>
              <p className="font-mono text-xs sm:text-sm text-white/50 tracking-wide">
                Free sandbox • OAuth 2.0 • REST + JSON • Production-ready
              </p>
            </RevealBlock>
          </div>
        </section>

        {/* ═══ SECTION 1 — WHAT THE API DOES ═══ */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4" style={{ maxWidth: "900px" }}>
            <RevealBlock>
              <h2 className="text-foreground text-center mb-8">
                One Endpoint. Every Travel Product.
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto">
                The Intraverse API is a single integration point for flights, hotels, tours, and payments. Instead of negotiating with dozens of suppliers, building separate integrations for each GDS, and waiting months for IATA accreditation — you connect once. We handle the supplier relationships, the accreditation, and the settlement. You focus on building your product.
              </p>
            </RevealBlock>
          </div>
        </section>

        {/* ═══ SECTION 2 — CORE CAPABILITIES ═══ */}
        <section className="py-16 md:py-24" style={{ backgroundColor: "#F0F5FC" }}>
          <div className="container mx-auto px-4" style={{ maxWidth: "1100px" }}>
            <RevealBlock>
              <h2 className="text-foreground text-center mb-16">
                What You Can Build
              </h2>
            </RevealBlock>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {capabilityCards.map((card) => (
                <RevealBlock key={card.title}>
                  <div className="bg-background rounded-lg border border-border p-8 h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <span className="text-[40px] leading-none block mb-4">{card.emoji}</span>
                    <h3 className="h3-global text-[22px] mb-3" style={{ color: "#0D1B2A" }}>
                      {card.title}
                    </h3>
                    <p className="text-[15px] text-muted-foreground leading-relaxed">
                      {card.body}
                    </p>
                  </div>
                </RevealBlock>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ SECTION 3 — WHY DEVELOPERS CHOOSE US ═══ */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4" style={{ maxWidth: "1100px" }}>
            <RevealBlock>
              <h2 className="text-foreground text-center mb-6">
                API Documentation That Doesn't Make You Cry
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto mb-16">
                We've all been there — staring at a PDF from 2011 that claims to be "developer documentation," trying to decode XML responses that look like they were written by a committee of people who've never used an API. The Intraverse API is different. Modern REST endpoints. JSON everywhere. Documentation that actually has examples. A sandbox that actually works.
              </p>
            </RevealBlock>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {differentiators.map((d) => (
                <RevealBlock key={d.title}>
                  <div className="p-8 rounded-lg border border-border bg-background h-full">
                    <span className="text-[36px] leading-none block mb-4">{d.emoji}</span>
                    <h3 className="h3-global text-foreground mb-2">{d.title}</h3>
                    <p className="text-[15px] text-muted-foreground leading-relaxed">{d.body}</p>
                  </div>
                </RevealBlock>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ SECTION 4 — CODE EXAMPLE ═══ */}
        <section className="py-16 md:py-24" style={{ backgroundColor: "#0D1B2A" }}>
          <div className="container mx-auto px-4" style={{ maxWidth: "900px" }}>
            <RevealBlock>
              <h2 className="text-white text-center mb-6">
                See It in Action
              </h2>
              <p className="text-white/60 text-base md:text-lg text-center max-w-2xl mx-auto mb-10 leading-relaxed">
                Here's what a real API call looks like. Search for flights from Lagos to London with a single POST request. Get aggregated results from every connected supplier.
              </p>
            </RevealBlock>
            <RevealBlock>
              <div
                className="rounded-lg p-6 md:p-8 overflow-x-auto"
                style={{ backgroundColor: "#1A1A2E" }}
              >
                <pre className="font-mono text-sm md:text-base leading-relaxed whitespace-pre text-white/90">
                  <code dangerouslySetInnerHTML={{ __html: formatCode(codeExample) }} />
                </pre>
              </div>
              <p className="text-white/50 text-sm mt-6 text-center">
                This returns aggregated results from Amadeus, Sabre, Travelport, NDC channels, and connected consolidators — all normalised into a single, consistent response format. No XML. No legacy protocols. Just clean JSON.
              </p>
              <div className="text-center mt-8">
                <Button variant="outline" size="xl" className="cta-responsive min-h-[48px] rounded-none bg-white border-white text-foreground hover:bg-foreground hover:text-white hover:border-foreground">
                  View Full Documentation →
                </Button>
              </div>
            </RevealBlock>
          </div>
        </section>

        {/* ═══ SECTION 5 — TECH SPECS ═══ */}
        <section className="py-16 md:py-24" style={{ backgroundColor: "#F0F5FC" }}>
          <div className="container mx-auto px-4" style={{ maxWidth: "900px" }}>
            <RevealBlock>
              <h2 className="text-foreground text-center mb-12">
                Technical Specs at a Glance
              </h2>
            </RevealBlock>
            <RevealBlock>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {techSpecs.map((spec) => (
                  <div key={spec} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-[15px] text-foreground">{spec}</span>
                  </div>
                ))}
              </div>
            </RevealBlock>
          </div>
        </section>

        {/* ═══ SECTION 6 — USE CASES ═══ */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4" style={{ maxWidth: "1100px" }}>
            <RevealBlock>
              <h2 className="text-foreground text-center mb-16">
                What Teams Are Building With the Intraverse API
              </h2>
            </RevealBlock>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {useCases.map((uc) => (
                <RevealBlock key={uc.title}>
                  <div className="bg-background rounded-lg border border-border p-8 h-full flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <span className="text-[40px] leading-none block mb-4">{uc.emoji}</span>
                    <h3 className="h3-global text-foreground mb-3">{uc.title}</h3>
                    <p className="text-[15px] text-muted-foreground leading-relaxed mb-4 flex-1">{uc.body}</p>
                    <Link to={uc.link} className="text-primary font-medium text-sm hover:underline">
                      {uc.linkLabel}
                    </Link>
                  </div>
                </RevealBlock>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ SECTION 7 — PRICING MODEL ═══ */}
        <section className="py-16 md:py-24" style={{ backgroundColor: "#F0F5FC" }}>
          <div className="container mx-auto px-4" style={{ maxWidth: "1100px" }}>
            <RevealBlock>
              <h2 className="text-foreground text-center mb-6">
                Simple, Volume-Based Pricing
              </h2>
              <p className="text-muted-foreground text-base md:text-lg text-center max-w-2xl mx-auto mb-16 leading-relaxed">
                Start free. Pay only when you go to production. Scale pricing based on transaction volume, not seat count.
              </p>
            </RevealBlock>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Developer */}
              <RevealBlock>
                <div className="bg-background rounded-lg border border-border p-8 h-full flex flex-col">
                  <p className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-2">Developer</p>
                  <p className="text-3xl font-bold text-foreground mb-1">Free Sandbox</p>
                  <p className="text-sm text-muted-foreground mb-6">Full API access in sandbox mode. Test with real inventory structures and realistic data. No time limit.</p>
                  <div className="mt-auto">
                    <Button variant="hero" size="xl" className="w-full min-h-[48px]" asChild>
                      <a href="/contact">Get Sandbox Access</a>
                    </Button>
                  </div>
                </div>
              </RevealBlock>
              {/* Production */}
              <RevealBlock>
                <div className="bg-background rounded-lg border-2 border-primary p-8 h-full flex flex-col relative">
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-wide px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                  <p className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-2">Production</p>
                  <p className="text-3xl font-bold text-foreground mb-1">Pay-as-you-go</p>
                  <p className="text-sm text-muted-foreground mb-6">Live API access with production inventory. Pay per transaction. Volume discounts at scale.</p>
                  <div className="mt-auto">
                    <Button variant="hero" size="xl" className="w-full min-h-[48px]" asChild>
                      <Link to="/pricing">View Pricing</Link>
                    </Button>
                  </div>
                </div>
              </RevealBlock>
              {/* Enterprise */}
              <RevealBlock>
                <div className="bg-background rounded-lg border border-border p-8 h-full flex flex-col">
                  <p className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-2">Enterprise</p>
                  <p className="text-3xl font-bold text-foreground mb-1">Custom</p>
                  <p className="text-sm text-muted-foreground mb-6">Dedicated infrastructure, custom SLAs, priority support, and negotiated pricing for high-volume integrations.</p>
                  <div className="mt-auto">
                    <Button variant="hero" size="xl" className="w-full min-h-[48px]" asChild>
                      <Link to="/contact">Talk to Sales</Link>
                    </Button>
                  </div>
                </div>
              </RevealBlock>
            </div>
          </div>
        </section>

        {/* ═══ SECTION 8 — GET STARTED ═══ */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4" style={{ maxWidth: "1100px" }}>
            <RevealBlock>
              <h2 className="text-foreground text-center mb-16">
                Start Building in 4 Steps
              </h2>
            </RevealBlock>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step) => (
                <RevealBlock key={step.num}>
                  <div className="text-center">
                    <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-5">
                      {step.num}
                    </div>
                    <h3 className="h3-global text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{step.body}</p>
                    <Link to={step.href} className="text-primary text-sm font-medium hover:underline">
                      {step.cta}
                    </Link>
                  </div>
                </RevealBlock>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ SECTION 9 — CO-BUILD PARTNERSHIPS ═══ */}
        <section className="py-16 md:py-24" style={{ backgroundColor: "#0D1B2A" }}>
          <div className="container mx-auto px-4 text-center" style={{ maxWidth: "800px" }}>
            <RevealBlock>
              <h2 className="text-white mb-6">
                Building Something Big? Let's Build It Together.
              </h2>
              <p className="text-white/70 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
                If you're building a product that could reshape how Africans book, pay for, or experience travel — we want to hear from you. Our partnerships team works with selected startups and enterprises on co-build integrations, custom API extensions, and go-to-market support.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="xl" className="cta-responsive min-h-[48px] bg-white text-foreground hover:bg-white/90">
                  Talk to Our Partnerships Team
                </Button>
                <Button variant="outline" size="xl" className="cta-responsive min-h-[48px] rounded-none bg-white border-white text-foreground hover:bg-foreground hover:text-white hover:border-foreground">
                  Read the Partnership Guide
                </Button>
              </div>
            </RevealBlock>
          </div>
        </section>

        {/* ═══ FINAL CTA ═══ */}
        <section className="py-20 md:py-28 bg-foreground">
          <div className="container mx-auto px-4 text-center" style={{ maxWidth: "900px" }}>
            <RevealBlock>
              <h2 className="text-background mb-6">
                The Best Time to Start Building Was Yesterday. The Second-Best Time Is Now.
              </h2>
              <p className="text-background/70 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
                Get free sandbox access in two minutes. Start building your travel product today. No credit card. No sales call. Just an API key and the freedom to build.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="outline" size="xl" className="cta-responsive min-h-[48px] bg-background text-foreground border-background hover:bg-background/90 hover:text-foreground rounded-none font-semibold" asChild>
                  <a href="/contact">Get Sandbox Access</a>
                </Button>
                <Button variant="outline" size="xl" className="cta-responsive min-h-[48px] rounded-none border-background/30 text-background hover:bg-background/10 hover:text-background font-semibold" asChild>
                  <a href="/docs">Read the Docs</a>
                </Button>
              </div>
            </RevealBlock>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}

/* ──────── Simple syntax highlighting ──────── */
function formatCode(code: string): string {
  return code
    // Comments
    .replace(/(\/\/.*)/g, '<span style="color:#6A9955">$1</span>')
    // Strings (single and double quotes)
    .replace(/('(?:[^'\\]|\\.)*')/g, '<span style="color:#CE9178">$1</span>')
    // Keys before colons
    .replace(/(\b\w+)(?=\s*:)/g, '<span style="color:#9CDCFE">$1</span>')
    // Keywords
    .replace(/\b(const|await|fetch|method|headers|body)\b/g, '<span style="color:#569CD6">$1</span>');
}
