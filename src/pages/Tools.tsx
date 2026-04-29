import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Check, ArrowRight } from "lucide-react";
import { DEMO_URL } from "@/lib/constants";
import { SEO } from "@/components/SEO";

/* ──────── Reveal wrapper ──────── */
function RevealBlock({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, revealClass } = useScrollReveal();
  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${revealClass} ${className}`}>
      {children}
    </div>
  );
}

/* ──────── DATA ──────── */

const toolCards = [
  {
    emoji: "🗺️",
    title: "Create & Manage Trips",
    tagline: "Build complete trips in minutes, not hours.",
    body: "Bundle flights, hotels, tours, and transfers into a single trip. Manage everything - dates, pricing, passengers, documents - from one clean workspace. No spreadsheets, no sticky notes, no chaos.",
    bullets: [
      "Multi-segment trip builder (flights + hotels + tours)",
      "Real-time pricing from aggregated suppliers",
      "Passenger and document management",
      "Booking status tracking at every stage",
    ],
  },
  {
    emoji: "📱",
    title: "Share Live Itineraries",
    tagline: "Your customers get their trip in real time.",
    body: "Send branded, live-updating itineraries via WhatsApp, email, or link. Flight changes? They see it. Hotel confirmed? They see it. No more PDF chasing or manual updates.",
    bullets: [
      "Branded itineraries with your agency name and logo",
      "Real-time updates pushed to customer automatically",
      "Shareable via WhatsApp, email, or direct link",
      "Mobile-optimised viewing experience",
    ],
  },
  {
    emoji: "💳",
    title: "Get Paid Securely",
    tagline: "Accept card payments and virtual account transfers - instantly.",
    body: "Built-in payment processing via card and virtual account. Your customers pay you directly. Funds hit your wallet in real time. Zero payment headaches, zero reconciliation nightmares.",
    bullets: [
      "Accept cards, bank transfers, and mobile money",
      "Automatic invoicing and payment receipts",
      "Real-time settlement to your wallet",
      "Full payment history and reconciliation tools",
    ],
  },
  {
    emoji: "📊",
    title: "Grow With Real Insights",
    tagline: "Know what's working. Double down on it.",
    body: "Real-time dashboards showing your bookings, revenue, top destinations, customer retention, and conversion rates. Data that actually helps you grow - not vanity metrics that look nice.",
    bullets: [
      "Revenue and booking volume tracking",
      "Top destinations and route analysis",
      "Customer retention and repeat booking rates",
      "Conversion funnel from search to booking",
    ],
  },
  {
    emoji: "📦",
    title: "Create & Sell Your Own Packages",
    tagline: "Turn every customer into a bigger sale.",
    body: "Design custom travel packages - flights + hotels + tours - under your brand. Price them your way. Sell them directly through your Travel Links or website. Higher margins, happier customers.",
    bullets: [
      "Bundle any combination of flights, hotels, and tours",
      "Set your own markup and pricing structure",
      "Publish directly through Travel Links",
      "Track package performance and revenue",
    ],
  },
  {
    emoji: "🔗",
    title: "Travel Links",
    tagline: "One link. Every trip. Instant bookings.",
    body: "Generate shareable booking links for any trip, package, or deal. Post on WhatsApp, Instagram, or your bio. Customers click, book, and pay. You get the commission. No website required.",
    bullets: [
      "Generate links for any trip or package",
      "Share on WhatsApp, Instagram, email, or anywhere",
      "Built-in booking and payment flow",
      "Track clicks, conversions, and revenue per link",
    ],
    link: "/products/travel-links",
  },
  {
    emoji: "🏢",
    title: "Setup Workspace",
    tagline: "Your agency's digital HQ.",
    body: "Customise your workspace with your branding, booking preferences, policies, and supplier settings. One place to run everything - built exactly the way you work.",
    bullets: [
      "Custom branding (logo, colours, agency name)",
      "Booking policies and approval workflows",
      "Supplier and pricing preferences",
      "Workspace-level settings and defaults",
    ],
  },
  {
    emoji: "👥",
    title: "Manage Team",
    tagline: "Scale without chaos.",
    body: "Add team members with role-based permissions. Track individual performance. Control who can book, approve, and access what. Built for agencies that are growing fast.",
    bullets: [
      "Role-based access control (admin, agent, viewer)",
      "Individual performance tracking and leaderboards",
      "Approval workflows for bookings and payments",
      "Activity logs and audit trails",
    ],
  },
];

const audienceCards = [
  {
    emoji: "🚀",
    title: "For Independents",
    body: "Start selling travel with zero agency setup. Use every tool to build your travel side-hustle from your phone.",
    link: "/for/independents",
  },
  {
    emoji: "✈️",
    title: "For Travel Agents",
    body: "Run your entire agency from one platform. Book, manage, invoice, and grow - without switching between tools.",
    link: "/for/travel-agents",
  },
  {
    emoji: "🏢",
    title: "For Businesses",
    body: "Manage company travel with policy controls, approval workflows, and real-time spend visibility.",
    link: "/for/businesses",
  },
  {
    emoji: "🏛️",
    title: "For Corporates",
    body: "Enterprise-grade travel management with multi-department controls, reporting, and dedicated support.",
    link: "/for/corporates",
  },
];

const flowSteps = [
  { emoji: "🗺️", label: "Trip Builder" },
  { emoji: "🔗", label: "Travel Links" },
  { emoji: "💳", label: "Payments" },
  { emoji: "📊", label: "Dashboard" },
  { emoji: "👥", label: "Team Mgmt" },
];

/* ──────── COMPONENT ──────── */

export default function Tools() {

  return (
    <>
      <SEO
        title="Agent Tools — Booking Engine, Itineraries & Payments | Intraverse"
        description="Professional tools for travel agents: booking engine, itinerary builder, payment collection, customer management, and business analytics. All included in your plan."
        canonical="https://intraverse.africa/tools"
      />
      <Navbar />
      <main className="pt-16">
        {/* ═══ HERO ═══ */}
        <section className="relative overflow-hidden bg-background">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="container relative mx-auto px-4 py-24 lg:py-32 text-center" style={{ maxWidth: "960px" }}>
            <RevealBlock>
              <h1 className="text-foreground mb-8">
                Every Tool You Need to Sell Travel Like a Pro - Included
              </h1>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-10">
                Intraverse isn't just a booking platform. It's a complete toolkit for running and growing your travel business. Whether you're an agent, an independent, or a business, every tool below is included in your plan - no premium add-ons, no upgrade traps, no hidden fees.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="xl" className="cta-responsive min-h-[48px]" asChild>
                  <a href="https://intraverse.app" target="_blank" rel="noopener noreferrer">Start Free</a>
                </Button>
                <Button variant="outline" size="xl" className="cta-responsive min-h-[48px] rounded-none border-foreground text-foreground hover:bg-accent" asChild>
                  <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">Book a Demo</a>
                </Button>
              </div>
            </RevealBlock>
          </div>
        </section>

        {/* ═══ SECTION 1 - WHAT YOU GET ═══ */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4" style={{ maxWidth: "900px" }}>
            <RevealBlock>
              <h2 className="text-foreground text-center mb-8">
                Built to Make Travel Selling Effortless
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto mb-10">
                Most travel businesses stitch together 4–6 different tools to handle booking, invoicing, payments, team management, and marketing. That means multiple logins, multiple subscriptions, and hours lost to manual data entry. Intraverse replaces all of it with one integrated platform - and every tool is included from day one.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                {[
                  "All tools included in every plan",
                  "No technical skills required",
                  "Built for the Nigerian market",
                ].map((pill) => (
                  <span
                    key={pill}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium text-foreground"
                    style={{ backgroundColor: "#EBF2FF" }}
                  >
                    <Check className="w-4 h-4 text-green-600 shrink-0" />
                    {pill}
                  </span>
                ))}
              </div>
            </RevealBlock>
          </div>
        </section>

        {/* ═══ SECTION 2 - THE TOOLS ═══ */}
        <section className="py-16 md:py-24" style={{ backgroundColor: "#F0F5FC" }}>
          <div className="container mx-auto px-4" style={{ maxWidth: "1100px" }}>
            <RevealBlock>
              <h2 className="text-foreground text-center mb-16">
                Meet Your New Toolkit
              </h2>
            </RevealBlock>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {toolCards.map((tool) => (
                <RevealBlock key={tool.title}>
                  <div className="bg-background rounded-2xl border border-border p-8 h-full flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-primary">
                    <span className="text-[40px] leading-none block mb-4">{tool.emoji}</span>
                    <h3 className="h3-global mb-2" style={{ color: "#0D1B2A" }}>
                      {tool.title}
                    </h3>
                    <p className="text-base italic mb-3" style={{ color: "#1E61DC" }}>
                      {tool.tagline}
                    </p>
                    <p className="text-[15px] text-muted-foreground leading-relaxed mb-5">
                      {tool.body}
                    </p>
                    <ul className="space-y-2 mt-auto">
                      {tool.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">{b}</span>
                        </li>
                      ))}
                    </ul>
                    {tool.link && (
                      <Link
                        to={tool.link}
                        className="inline-flex items-center gap-1 text-primary font-medium text-sm mt-4 hover:underline"
                      >
                        Learn more <ArrowRight className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </RevealBlock>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ SECTION 3 - HOW THEY WORK TOGETHER ═══ */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4" style={{ maxWidth: "900px" }}>
            <RevealBlock>
              <h2 className="text-foreground text-center mb-6">
                Tools That Talk to Each Other
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto mb-16">
                Every tool in Intraverse is connected. Build a trip, generate a Travel Link, collect payment, track it in your dashboard, and manage your team's performance - all in one continuous workflow. No copy-pasting. No switching tabs. No lost data.
              </p>
            </RevealBlock>
            <RevealBlock>
              <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-0">
                {flowSteps.map((step, i) => (
                  <div key={step.label} className="flex items-center">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-primary flex items-center justify-center shadow-lg">
                        <span className="text-3xl md:text-4xl">{step.emoji}</span>
                      </div>
                      <span className="text-xs md:text-sm font-semibold text-foreground">{step.label}</span>
                    </div>
                    {i < flowSteps.length - 1 && (
                      <ArrowRight className="hidden md:block w-6 h-6 text-muted-foreground/40 mx-4" />
                    )}
                  </div>
                ))}
              </div>
            </RevealBlock>
          </div>
        </section>

        {/* ═══ SECTION 4 - BUILT FOR EVERY AUDIENCE ═══ */}
        <section className="py-16 md:py-24" style={{ backgroundColor: "#F0F5FC" }}>
          <div className="container mx-auto px-4" style={{ maxWidth: "1100px" }}>
            <RevealBlock>
              <h2 className="text-foreground text-center mb-6">
                Different Businesses, Same Toolkit
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed text-center max-w-2xl mx-auto mb-16">
                Whether you're just starting out or managing a large corporate travel programme, every Intraverse user gets the same powerful toolkit. The difference is how you use it.
              </p>
            </RevealBlock>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {audienceCards.map((card) => (
                <RevealBlock key={card.title}>
                  <Link
                    to={card.link}
                    className="block bg-background rounded-2xl border border-border p-8 h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-primary group"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-[36px] leading-none block mb-4">{card.emoji}</span>
                        <h3 className="h3-global text-foreground mb-2">{card.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{card.body}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary shrink-0 mt-1 transition-colors" />
                    </div>
                  </Link>
                </RevealBlock>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ SECTION 5 - PRICING REASSURANCE ═══ */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 text-center" style={{ maxWidth: "700px" }}>
            <RevealBlock>
              <h2 className="text-foreground mb-6">
                Every Tool. Every Plan. No Upgrades Required.
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10">
                We don't believe in gating features behind premium tiers. Every tool on this page is included in every Intraverse plan - from the free sandbox all the way to enterprise. The only thing that changes is volume and support level.
              </p>
              <Button variant="outline" size="xl" className="cta-responsive min-h-[48px] rounded-none border-foreground text-foreground hover:bg-accent" asChild>
                <Link to="/pricing">See Pricing Plans →</Link>
              </Button>
            </RevealBlock>
          </div>
        </section>

        {/* ═══ FINAL CTA ═══ */}
        <section className="py-20 md:py-28 bg-foreground">
          <div className="container mx-auto px-4 text-center" style={{ maxWidth: "900px" }}>
            <RevealBlock>
              <h2 className="text-background mb-6">
                Stop Patching Together Tools. Start Using One Platform.
              </h2>
              <p className="text-background/70 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
                Most travel businesses use 4–6 different tools to do what Intraverse does in one. Stop paying for separate software, stop copying data between systems, stop losing time to manual workflows. Try Intraverse free and see every tool in action.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="outline" size="xl" className="cta-responsive min-h-[48px] bg-background text-foreground border-background hover:bg-background/90 rounded-none font-semibold" asChild>
                  <a href="https://intraverse.app" target="_blank" rel="noopener noreferrer">Start Free</a>
                </Button>
                <Button variant="outline" size="xl" className="cta-responsive min-h-[48px] rounded-none bg-background text-foreground border-background hover:bg-foreground hover:text-background font-semibold" asChild>
                  <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">Book a Demo</a>
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
