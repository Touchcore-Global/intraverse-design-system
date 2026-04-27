import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Link } from "react-router-dom";
import {
  Plane, Globe, Building2, Rocket, Link2, Wallet, Plug, HardHat,
  Check, ArrowRight, Globe2, Shield, Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { DEMO_URL } from "@/lib/constants";

/* ── scroll-reveal helper ── */
function RevealBlock({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, revealClass } = useScrollReveal();
  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${revealClass} ${className}`}>
      {children}
    </div>
  );
}

/* ── product card data ── */
interface ProductCard {
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  href: string;
  cta: string;
  badge?: "new" | "coming-soon";
}

const sellingProducts: ProductCard[] = [
  {
    icon: Plane,
    title: "Agent Selling Platform",
    tagline: "Your command centre for travel bookings",
    description:
      "Search, compare, and book flights, hotels, visas, and packages from 100+ suppliers - all from a single dashboard. Built for speed, accuracy, and margin control.",
    features: [
      "Multi-supplier search with real-time pricing",
      "Integrated PNR management & ticketing",
      "Custom markup and commission controls",
      "Sub-agent and team management",
    ],
    href: "/products/agent-platform",
    cta: "Explore Agent Platform →",
  },
  {
    icon: Globe,
    title: "Travx (White-Label Websites)",
    tagline: "Your brand. Your website. Fully bookable.",
    description:
      "Launch a professional, fully bookable travel website under your own brand - with flights, hotels, and packages built in. No developers needed.",
    features: [
      "Custom domain and branding",
      "Built-in booking engine",
      "Mobile-responsive design",
      "SEO-optimised pages",
    ],
    href: "/products/travx",
    cta: "Explore Travx →",
  },
  {
    icon: Building2,
    title: "CoopX (Corporate Travel)",
    tagline: "Managed travel for modern businesses",
    description:
      "Give your organisation full control over corporate travel - from policy enforcement and approval workflows to consolidated billing and travel analytics.",
    features: [
      "Travel policy enforcement",
      "Multi-level approval workflows",
      "Consolidated invoicing and reporting",
      "Duty of care and traveller tracking",
    ],
    href: "/products/coopx",
    cta: "Explore CoopX →",
  },
  {
    icon: Rocket,
    title: "Independents Programme",
    tagline: "Start earning in travel - no agency required",
    description:
      "Whether you're a side-hustler, freelancer, or aspiring travel entrepreneur, the Independents Programme gives you access to Intraverse's full inventory with zero upfront cost.",
    features: [
      "No license or agency needed",
      "Earn commission on every booking",
      "Access to full flight and hotel inventory",
      "Personal dashboard and tracking",
    ],
    href: "/products/independents",
    cta: "Explore Independents →",
  },
  {
    icon: Link2,
    title: "Travel Links",
    tagline: "Sell travel with a link. No website needed.",
    description:
      "Generate a shareable booking link for any flight, hotel, or package. Send it on WhatsApp, social media, or email. Your customer clicks, books, and pays - and you earn the commission.",
    features: [
      "One-click link generation",
      "Share via WhatsApp, email, or social",
      "Customer books and pays directly",
      "Real-time earnings tracking",
    ],
    href: "/products/travel-links",
    cta: "Learn About Travel Links →",
    badge: "new",
  },
];

const infraProducts: ProductCard[] = [
  {
    icon: Wallet,
    title: "Odiopay (BNPL)",
    tagline: "Buy Now, Pay Later for travel",
    description:
      "Let your customers split travel payments into affordable instalments. Odiopay increases conversion, reduces cart abandonment, and helps you close deals other agents lose.",
    features: [
      "Flexible instalment plans",
      "Instant credit decisions",
      "Integrated with Agent Platform",
      "Fare Lock and Pay Later options",
    ],
    href: "/products/odiopay",
    cta: "Explore Odiopay →",
  },
  {
    icon: Plug,
    title: "Intraverse API",
    tagline: "Embed travel booking into any platform",
    description:
      "Connect your fintech, super-app, or platform directly to Intraverse's inventory. Search, book, and manage travel programmatically with our RESTful API.",
    features: [
      "RESTful API with full documentation",
      "Real-time search and booking",
      "Webhook notifications",
      "Sandbox environment for testing",
    ],
    href: "/products/api",
    cta: "Explore the API →",
  },
  {
    icon: HardHat,
    title: "Supplier Engine",
    tagline: "Multi-OID fare aggregation system",
    description:
      "Aggregate fares from multiple supplier OIDs into a single, optimised feed. The Supplier Engine finds the best available fare across all your consolidator relationships.",
    features: [
      "Multi-OID fare aggregation",
      "Automated best-fare selection",
      "Supplier performance analytics",
      "Priority routing controls",
    ],
    href: "/products/supplier-engine",
    cta: "Join the Waitlist →",
    badge: "coming-soon",
  },
];

const audiences = [
  { icon: Plane, title: "I'm a Travel Agent", href: "/for/travel-agents" },
  { icon: Rocket, title: "I'm an Independent Seller", href: "/for/independents" },
  { icon: Building2, title: "I Run a Business", href: "/for/businesses" },
  { icon: Wallet, title: "I'm Building a Fintech", href: "/for/fintechs" },
];

/* ── Badge component ── */
function Badge({ type }: { type: "new" | "coming-soon" }) {
  if (type === "new") {
    return (
      <span className="absolute top-4 right-4 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide text-white" style={{ backgroundColor: "#16A34A" }}>
        🆕 New
      </span>
    );
  }
  return (
    <span className="absolute top-4 right-4 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide text-white" style={{ backgroundColor: "#D97706" }}>
      🚧 Coming Soon
    </span>
  );
}

/* ── Product Card ── */
function ProductCardComponent({ product }: { product: ProductCard }) {
  const Icon = product.icon;
  return (
    <div className="relative bg-card rounded-xl border border-border p-6 flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary group">
      {product.badge && <Badge type={product.badge} />}
      <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="h3-global text-foreground mb-1">{product.title}</h3>
      <p className="text-sm italic text-primary mb-3">{product.tagline}</p>
      <p className="text-[15px] text-muted-foreground mb-4 flex-grow">{product.description}</p>
      <ul className="space-y-2 mb-6">
        {product.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
            <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <Link to={product.href} className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline mt-auto">
        {product.cta}
      </Link>
    </div>
  );
}

/* ── Value prop cards ── */
const valueProps = [
  { icon: Globe2, title: "Aggregated Inventory", desc: "100+ suppliers, airlines, and hotel chains in one search." },
  { icon: Shield, title: "IATA-Backed", desc: "Fully accredited with IATA, ensuring trust and compliance." },
  { icon: Zap, title: "Built for Africa", desc: "Designed for the realities of African travel markets." },
];

/* ── Main Page ── */
export default function Products() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* HERO */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-gradient-to-br from-accent via-background to-accent overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 leading-tight">
            One Platform. Every Tool You Need to Sell Travel.
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            From the booking platform that powers 200+ Nigerian travel agencies to the BNPL that closes deals other agents lose - Intraverse builds the tools that make selling, managing, and growing a travel business effortless. Explore the full product family below.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <Button variant="hero" size="xl" asChild>
              <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">Book a Demo</a>
            </Button>
            <Button variant="outline" size="xl" className="rounded-none" asChild>
              <a href="https://www.intraverse.app/register" target="_blank" rel="noopener noreferrer">Start Free</a>
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
            <a href="#selling-booking" className="hover:text-primary transition-colors">Selling &amp; Booking</a>
            <span className="hidden sm:inline">|</span>
            <a href="#payments-infrastructure" className="hover:text-primary transition-colors">Payments &amp; Infrastructure</a>
            <span className="hidden sm:inline">|</span>
            <a href="#how-they-work" className="hover:text-primary transition-colors">How They Work Together</a>
          </div>
        </div>
      </section>

      {/* SECTION 1 - Product Family Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <RevealBlock className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">8 Products. One Mission.</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-base md:text-lg">
              Intraverse isn't a single product - it's a connected suite of tools designed to cover every stage of the travel selling journey. Whether you're searching fares, building a website, managing corporate bookings, or offering pay-later options, there's an Intraverse product built for it.
            </p>
          </RevealBlock>
          <RevealBlock>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {valueProps.map((vp) => {
                const Icon = vp.icon;
                return (
                  <div key={vp.title} className="text-center p-6 rounded-xl border border-border bg-card">
                    <div className="w-14 h-14 mx-auto rounded-full bg-accent flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="h3-global text-foreground mb-1">{vp.title}</h3>
                    <p className="text-sm text-muted-foreground">{vp.desc}</p>
                  </div>
                );
              })}
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* SECTION 2 - Selling & Booking */}
      <section id="selling-booking" className="py-16 md:py-24 bg-accent">
        <div className="container mx-auto px-4 max-w-6xl">
          <RevealBlock className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">Selling &amp; Booking</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to search, sell, and close travel deals - whether you're a licensed agent, independent seller, or corporate buyer.
            </p>
          </RevealBlock>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sellingProducts.map((p) => (
              <RevealBlock key={p.title}>
                <ProductCardComponent product={p} />
              </RevealBlock>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 - Payments & Infrastructure */}
      <section id="payments-infrastructure" className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <RevealBlock className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">Payments &amp; Infrastructure</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The financial tools and technical infrastructure that power your travel business behind the scenes.
            </p>
          </RevealBlock>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {infraProducts.map((p) => (
              <RevealBlock key={p.title}>
                <ProductCardComponent product={p} />
              </RevealBlock>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 - How They Work Together */}
      <section id="how-they-work" className="py-16 md:py-24 bg-accent">
        <div className="container mx-auto px-4 max-w-5xl">
          <RevealBlock className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
              Each Product Is Powerful Alone. Together, They're a Complete Travel Business.
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-base md:text-lg">
              Intraverse products are designed to work independently - but when you combine them, they create a seamless end-to-end travel business. Search on the Agent Platform, share via Travel Links, let customers pay with Odiopay, and host everything on your Travx website.
            </p>
          </RevealBlock>
          <RevealBlock>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
              {[
                { icon: Plane, label: "Agent Platform", sub: "Search & Book" },
                { icon: Link2, label: "Travel Links", sub: "Share & Sell" },
                { icon: Wallet, label: "Odiopay", sub: "Finance & Pay" },
                { icon: Globe, label: "Travx", sub: "Host & Brand" },
              ].map((item, i, arr) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <span className="font-bold text-foreground text-sm">{item.label}</span>
                      <span className="text-xs text-muted-foreground">{item.sub}</span>
                    </div>
                    {i < arr.length - 1 && (
                      <ArrowRight className="w-6 h-6 text-primary mx-4 hidden md:block shrink-0" />
                    )}
                    {i < arr.length - 1 && (
                      <ArrowRight className="w-6 h-6 text-primary my-2 rotate-90 md:hidden shrink-0" />
                    )}
                  </div>
                );
              })}
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* SECTION 5 - Choose Your Starting Point */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <RevealBlock className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">Not Sure Where to Begin?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Pick the audience that matches your business and we'll show you the right combination of products.
            </p>
          </RevealBlock>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {audiences.map((a) => {
              const Icon = a.icon;
              return (
                <RevealBlock key={a.title}>
                  <Link
                    to={a.href}
                    className="flex items-center gap-4 p-6 rounded-xl border border-border bg-card hover:shadow-lg hover:-translate-y-1 hover:border-primary transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="font-bold text-foreground text-lg flex-grow">{a.title}</span>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                  </Link>
                </RevealBlock>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 6 - Pricing CTA */}
      <section className="py-16 md:py-24 bg-accent">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <RevealBlock>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
              Every Product. Every Plan. Transparent Pricing.
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              No hidden fees, no surprise charges. See exactly what's included in every Intraverse plan - from our free Starter tier to the full Agency suite.
            </p>
            <Button variant="outline" size="xl" className="rounded-none" asChild>
              <Link to="/pricing">See Pricing →</Link>
            </Button>
          </RevealBlock>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 md:py-24 bg-foreground text-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <RevealBlock>
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Ready to See Intraverse in Action?</h2>
            <p className="text-background/70 mb-8 max-w-2xl mx-auto">
              Book a 15-minute demo and we'll walk you through the full product suite - and help you figure out which tools fit your business best. No commitment, no pressure, no hard sell.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="xl" className="bg-background text-foreground hover:bg-background/90 rounded-none font-semibold" asChild>
                <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">Book a Demo</a>
              </Button>
              <Button variant="outline" size="xl" className="rounded-none bg-background text-foreground border-background hover:bg-foreground hover:text-background font-semibold" asChild>
                <a href="https://www.intraverse.app/register" target="_blank" rel="noopener noreferrer">Start Free</a>
              </Button>
            </div>
          </RevealBlock>
        </div>
      </section>

      <Footer />
      <WhatsAppFab />
    </div>
  );
}
