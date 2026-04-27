import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  Check,
  Plane,
  Hotel,
  Globe,
  Radio,
  FlaskConical,
  BookOpen,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

const bullets = [
  "Real travel inventory through a clean, well-documented API?",
  "Endpoints for search, booking, ticketing, and management?",
  "A sandbox environment to test before going live?",
  "Webhook support for booking status updates?",
  "A technical team that actually responds when you have questions?",
  "Pricing that doesn't require a 12-month enterprise contract just to try?",
];

const capabilities = [
  { icon: Plane, title: "Flight Search & Booking", body: "Search aggregated inventory from GDS, NDC, consolidators, and aggregators. Book, hold, and ticket - all through a single endpoint." },
  { icon: Hotel, title: "Hotel Search & Booking", body: "Search and book hotels from leading global suppliers. Filter by location, star rating, price, and availability." },
  { icon: Globe, title: "Tours & Packages", body: "Access tours and travel packages from international suppliers. Bundle with flights and hotels for higher-value bookings." },
  { icon: Radio, title: "Webhooks", body: "Real-time booking status updates via signed webhooks. No polling required. Configure per-event or catch-all." },
  { icon: FlaskConical, title: "Sandbox Environment", body: "Full-featured sandbox that mirrors production. Test search, booking, and ticketing flows without touching real inventory." },
  { icon: BookOpen, title: "Documentation", body: "Comprehensive, up-to-date API reference with code examples in multiple languages. Not 500 pages of XML." },
];

const techSpecs = [
  "REST API with JSON request/response",
  "OAuth 2.0 authentication",
  "Rate limits clearly documented",
  "~200ms average response time",
  "99.9% API uptime SLA",
  "SDK support for Node.js, Python, PHP, and Go",
  "Webhook signing for security",
  "Comprehensive error codes and handling",
];

const pricingTiers = [
  { name: "Sandbox", price: "Free", desc: "Build and test as much as you want. No credit card required.", highlight: false },
  { name: "Production", price: "Pay-as-you-go", desc: "Per-transaction pricing that scales with your volume. No minimums.", highlight: true },
  { name: "Enterprise", price: "Custom", desc: "High-volume? Dedicated infrastructure, custom SLAs, and priority support. Let's talk.", highlight: false },
];

const steps = [
  { n: "1", title: "Read the docs", body: "Explore endpoints, authentication, and data models in our API reference." },
  { n: "2", title: "Get sandbox access", body: "Sign up for free sandbox credentials. No sales call required." },
  { n: "3", title: "Build your integration", body: "Use our SDKs or call the API directly. Test everything in sandbox." },
  { n: "4", title: "Go live", body: "Apply for production access when you're ready. We review within 48 hours." },
];

const codeExample = `// Flight search request
const response = await fetch('https://api.intraverse.co/v1/flights/search', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    origin: 'LOS',
    destination: 'LHR',
    departure_date: '2026-06-15',
    adults: 1,
    cabin_class: 'economy'
  })
});

const data = await response.json();
// → { results: [{ airline: "BA", price: { amount: 485000, currency: "NGN" }, ... }] }`;

function RevealBlock({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, revealClass } = useScrollReveal();
  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${revealClass} ${className}`}>
      {children}
    </div>
  );
}

const Developers = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="h-16" />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[hsl(220,20%,7%)]">
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dev-grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="0.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dev-grid)" />
          </svg>
        </div>

        <div className="container relative mx-auto px-4 py-24 lg:py-32" style={{ maxWidth: "1200px" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <RevealBlock>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/50 text-xs font-mono tracking-wide mb-6">
                v1.0 • REST • JSON
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-[56px] font-[660] leading-[1.1] md:leading-[64px] tracking-[-2px] text-white">
                The Travel API That Just Works
              </h1>
              <p className="mt-6 text-base sm:text-lg font-normal leading-relaxed text-white/55">
                RESTful API access to Intraverse's aggregated travel inventory - flights from GDS, NDC, consolidators, and aggregators, plus hotels and tours from leading global suppliers. Comprehensive documentation, sandbox environment, webhook support, and dedicated technical assistance. Built by developers, for developers.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-start gap-4">
                <Button size="xl" className="bg-white text-foreground hover:bg-white/90 cta-responsive min-h-[48px] font-semibold" asChild>
                  <a href="/docs">View API Docs</a>
                </Button>
                <Button size="xl" variant="outline" className="bg-white border-white text-foreground hover:bg-foreground hover:text-white hover:border-foreground cta-responsive min-h-[48px] rounded-none" asChild>
                  <a href="/contact">Get Sandbox Access</a>
                </Button>
              </div>
            </RevealBlock>

            {/* Code snippet */}
            <RevealBlock>
              <div className="rounded-xl overflow-hidden border border-white/10 bg-[hsl(220,20%,10%)] shadow-2xl">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                  <div className="w-3 h-3 rounded-full bg-red-400/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                  <div className="w-3 h-3 rounded-full bg-green-400/60" />
                  <span className="ml-2 text-[11px] text-white/30 font-mono">flight-search.js</span>
                </div>
                <pre className="p-5 text-[12px] md:text-[13px] leading-relaxed text-white/70 font-mono overflow-x-auto">
                  <code>{codeExample}</code>
                </pre>
              </div>
            </RevealBlock>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4" style={{ maxWidth: "1200px" }}>
          <RevealBlock>
            <h2 className="text-3xl sm:text-4xl md:text-[48px] md:leading-[56px] font-[660] tracking-[-2px] text-center mb-14" style={{ color: "rgb(13, 27, 42)" }}>
              Are You a Developer Who Needs...
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
              {bullets.map((b) => (
                <div key={b} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground">{b}</p>
                </div>
              ))}
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 md:py-28 bg-[hsl(216,60%,97%)]">
        <div className="container mx-auto px-4" style={{ maxWidth: "1200px" }}>
          <RevealBlock>
            <h2 className="text-3xl sm:text-4xl md:text-[48px] md:leading-[56px] font-[660] tracking-[-2px] text-center mb-10" style={{ color: "rgb(13, 27, 42)" }}>
              Travel APIs Are Famously Painful
            </h2>
            <div className="max-w-3xl mx-auto space-y-5 text-muted-foreground text-sm md:text-base leading-relaxed">
              <p>
                If you've worked with travel APIs before, you know the drill. Documentation that's either non-existent or 500 pages of XML. Sandbox environments that don't match production. Support tickets that take weeks. Pricing models that require sales calls before you can see a number. Authentication systems that haven't been updated since 2010.
              </p>
              <p>
                We built Intraverse's API because we got tired of dealing with that. Our API is what we wished we had when we started.
              </p>
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* API Capabilities */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4" style={{ maxWidth: "1200px" }}>
          <RevealBlock>
            <h2 className="text-3xl sm:text-4xl md:text-[48px] md:leading-[56px] font-[660] tracking-[-2px] text-center mb-14" style={{ color: "rgb(13, 27, 42)" }}>
              API Capabilities
            </h2>
          </RevealBlock>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <RevealBlock key={cap.title}>
                  <div className="bg-card rounded-xl border border-border p-7 shadow-sm h-full hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                    <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="h3-global text-foreground mb-2">{cap.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{cap.body}</p>
                  </div>
                </RevealBlock>
              );
            })}
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-20 md:py-28 bg-[hsl(220,20%,7%)]">
        <div className="container mx-auto px-4" style={{ maxWidth: "900px" }}>
          <RevealBlock>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-[660] tracking-[-1px] text-white text-center mb-10">
              Simple to Integrate
            </h2>
            <div className="rounded-xl overflow-hidden border border-white/10 bg-[hsl(220,20%,10%)] shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-red-400/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                <div className="w-3 h-3 rounded-full bg-green-400/60" />
                <span className="ml-2 text-[11px] text-white/30 font-mono">example.js</span>
              </div>
              <pre className="p-6 text-[12px] md:text-[13px] leading-relaxed text-white/70 font-mono overflow-x-auto">
                <code>{codeExample}</code>
              </pre>
            </div>
            <p className="text-center mt-6">
              <a href="#" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
                Try it yourself in our sandbox
                <ArrowRight className="w-4 h-4" />
              </a>
            </p>
          </RevealBlock>
        </div>
      </section>

      {/* Tech Specs */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4" style={{ maxWidth: "800px" }}>
          <RevealBlock>
            <h2 className="text-3xl sm:text-4xl md:text-[48px] md:leading-[56px] font-[660] tracking-[-2px] text-center mb-14" style={{ color: "rgb(13, 27, 42)" }}>
              Tech at a Glance
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {techSpecs.map((spec) => (
                <div key={spec} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded bg-primary/10 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <p className="text-sm md:text-base text-foreground font-medium">{spec}</p>
                </div>
              ))}
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 md:py-28 bg-[hsl(216,60%,97%)]">
        <div className="container mx-auto px-4" style={{ maxWidth: "1200px" }}>
          <RevealBlock>
            <h2 className="text-3xl sm:text-4xl md:text-[48px] md:leading-[56px] font-[660] tracking-[-2px] text-center mb-14" style={{ color: "rgb(13, 27, 42)" }}>
              Pricing
            </h2>
          </RevealBlock>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier) => (
              <RevealBlock key={tier.name}>
                <div className={`bg-card rounded-2xl p-8 md:p-10 h-full text-center transition-all duration-300 hover:-translate-y-1 ${tier.highlight ? "border-2 border-primary shadow-md" : "border border-border shadow-sm"}`}>
                  <h3 className="h3-global text-foreground mb-2">{tier.name}</h3>
                  <p className="text-3xl md:text-4xl font-[660] text-primary mb-3">{tier.price}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{tier.desc}</p>
                </div>
              </RevealBlock>
            ))}
          </div>
        </div>
      </section>

      {/* Get Started */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4" style={{ maxWidth: "1200px" }}>
          <RevealBlock>
            <h2 className="text-3xl sm:text-4xl md:text-[48px] md:leading-[56px] font-[660] tracking-[-2px] text-center mb-14" style={{ color: "rgb(13, 27, 42)" }}>
              Start Building Today
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step) => (
                <div key={step.n} className="bg-card rounded-xl border border-border p-7 shadow-sm text-center">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold mx-auto mb-4 font-mono">
                    {step.n}
                  </div>
                  <h3 className="h3-global text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.body}</p>
                </div>
              ))}
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-[hsl(220,20%,7%)]">
        <div className="container mx-auto px-4 text-center" style={{ maxWidth: "800px" }}>
          <RevealBlock>
            <h2 className="text-3xl sm:text-4xl md:text-[48px] md:leading-[56px] font-[660] tracking-[-2px] text-white mb-4">
              Ready to Build?
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <Button size="xl" className="bg-white text-foreground hover:bg-white/90 cta-responsive min-h-[48px] font-semibold" asChild>
                <a href="/products/api">View API Docs</a>
              </Button>
              <Button size="xl" variant="outline" className="bg-white border-white text-foreground hover:bg-foreground hover:text-white hover:border-foreground cta-responsive min-h-[48px] rounded-none" asChild>
                <a href="/contact">Get Sandbox Access</a>
              </Button>
            </div>
            <p className="mt-8 text-sm text-white/40">
              Have questions?{" "}
              <a href="mailto:hello@intraverse.africa" className="text-primary hover:underline">hello@intraverse.africa</a>
              {" "}or{" "}
              <a href="#" className="text-primary hover:underline inline-flex items-center gap-1">
                <MessageCircle className="w-3.5 h-3.5" />
                chat on WhatsApp
              </a>
            </p>
          </RevealBlock>
        </div>
      </section>

      <Footer />
      <WhatsAppFab />
    </div>
  );
};

export default Developers;
