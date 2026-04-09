import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  MessageCircle,
  Quote,
  Wrench,
  Handshake,
  Zap,
  Globe,
  Banknote,
  MapPin,
  Users,
  Plane,
  Hotel,
  Shield,
  Clock,
  Headphones,
  Server,
  ArrowRight,
  Briefcase,
  UserCheck,
  Building2,
  Sparkles,
} from "lucide-react";

const stats = [
  { value: "200+", label: "Active Agents", icon: Users },
  { value: "[X,000]+", label: "Bookings Processed", icon: Plane },
  { value: "[X]+", label: "Global Suppliers", icon: Hotel },
  { value: "3", label: "GDS Systems", icon: Server },
  { value: "[X]+", label: "NDC Sources", icon: Globe },
  { value: "Lagos", label: "Headquarters", icon: MapPin },
  { value: "IATA", label: "Accredited", icon: Shield },
  { value: "48hrs", label: "Average Setup", icon: Clock },
  { value: "24/7", label: "Support", icon: Headphones },
];

const values = [
  {
    icon: Wrench,
    title: "Build What the Market Needs",
    description:
      "We don't build features because they're trendy. We build because an agent in Lagos told us they needed it yesterday. Every product decision starts with a real problem.",
  },
  {
    icon: Handshake,
    title: "Earn Trust, Don't Assume It",
    description:
      "Trust is the scarcest resource in Nigerian business. We earn it by delivering on promises, being transparent about what we can and can't do, and showing up consistently.",
  },
  {
    icon: Zap,
    title: "Speed Is Respect",
    description:
      "When an agent's customer is waiting for a fare, every minute matters. We build fast, respond fast, and ship fast — because slow is disrespectful to the people who depend on us.",
  },
  {
    icon: Globe,
    title: "Level the Playing Field",
    description:
      "A two-person agency in Ikeja deserves access to the same fares, technology, and suppliers as any multinational TMC. We build to close that gap.",
  },
  {
    icon: Banknote,
    title: "Make Money for Our Agents",
    description:
      "Our success is measured by our agents' revenue. If they're not earning more because of our tools, we haven't done our job. Everything else is secondary.",
  },
  {
    icon: MapPin,
    title: "Built in Lagos, Built for Africa",
    description:
      "We understand the realities of doing business in Nigeria — the infrastructure gaps, the payment challenges, the regulatory landscape. We build for this context, not around it.",
  },
];

const products = [
  {
    name: "Agent Selling Platform",
    description: "Multi-source inventory aggregation for professional travel agencies.",
    href: "/agent-platform",
  },
  {
    name: "Travx",
    description: "Branded booking websites that turn agencies into online travel brands.",
    href: "/travx",
  },
  {
    name: "CoopX",
    description: "Corporate travel management with policy enforcement and approval workflows.",
    href: "/coopx",
  },
  {
    name: "Independents Programme",
    description: "IATA-backed infrastructure for independent travel entrepreneurs.",
    href: "/independents",
  },
  {
    name: "Supplier Engine",
    description: "Multi-OID fare aggregation that unlocks negotiated fares for the network.",
    href: "/supplier-engine",
  },
];

const audiences = [
  {
    icon: Briefcase,
    title: "Travel Agencies",
    description: "Professional agencies looking to consolidate inventory, automate bookings, and grow revenue.",
    href: "/agent-platform",
  },
  {
    icon: UserCheck,
    title: "Independent Entrepreneurs",
    description: "Aspiring travel professionals who want to start earning in travel without IATA accreditation or agency affiliation.",
    href: "/independents",
  },
  {
    icon: Building2,
    title: "Corporate Travel Managers",
    description: "CFOs, HR teams, and admin officers managing employee travel spend with policy and approval controls.",
    href: "/coopx",
  },
  {
    icon: Globe,
    title: "Travel Brands & Resellers",
    description: "Agencies and entrepreneurs who want their own branded booking website to sell travel online.",
    href: "/travx",
  },
];

const milestones = [
  { year: "[Year]", title: "Founded in Lagos", description: "Started with a vision to democratise travel technology for Nigerian agencies." },
  { year: "[Year]", title: "Agent Platform Launch", description: "First version of the multi-source booking platform goes live with early agency partners." },
  { year: "[Year]", title: "100 Agents Milestone", description: "Crossed 100 active agents on the platform, validating market demand." },
  { year: "[Year]", title: "Travx & CoopX Launch", description: "Expanded product suite with branded websites and corporate travel management." },
  { year: "[Year]", title: "Independents Programme", description: "Opened the platform to independent entrepreneurs, removing traditional barriers to entry." },
  { year: "2026", title: "200+ Agents & Growing", description: "Serving 200+ agencies across Nigeria with plans to expand across West Africa." },
];

const testimonials = [
  {
    quote: "Intraverse gave us access to inventory we never had before. Our revenue has grown significantly since we started using the platform.",
    name: "Agency Partner",
    role: "Travel Agency Owner, Lagos",
  },
  {
    quote: "I started as a complete beginner. The Independents Programme gave me real tools and real inventory — not empty promises.",
    name: "Independent Member",
    role: "Independent Travel Entrepreneur",
  },
  {
    quote: "We finally have visibility into what our team is spending on travel. The approval workflows alone saved us millions in the first quarter.",
    name: "Corporate Client",
    role: "CFO, Lagos-based Enterprise",
  },
];

const accreditations = ["IATA", "Amadeus", "Sabre", "Galileo", "NDPR", "PCI DSS"];

const faqs = [
  {
    q: "Is Intraverse a travel agency?",
    a: "No. Intraverse is a B2B travel technology company. We don't sell travel directly to consumers. We build the platforms and tools that travel agencies, corporates, and independent entrepreneurs use to sell travel.",
  },
  {
    q: "Who can use Intraverse products?",
    a: "Our products serve three main audiences: professional travel agencies (Agent Platform, Travx, Supplier Engine), corporate organisations managing employee travel (CoopX), and independent entrepreneurs looking to earn in travel (Independents Programme).",
  },
  {
    q: "Where is Intraverse based?",
    a: "We're headquartered in Lagos, Nigeria. Our entire platform is designed for the realities of the Nigerian and African travel market — from payment infrastructure to supplier relationships.",
  },
  {
    q: "Is Intraverse IATA accredited?",
    a: "Yes. Intraverse operates under IATA accreditation, which means all bookings processed through our platform are backed by legitimate, accredited travel infrastructure.",
  },
  {
    q: "How do I get started?",
    a: "It depends on who you are. Agencies can book a demo for the Agent Platform. Corporates can explore CoopX. Independents can join the Independents Programme. Each product page has specific onboarding steps.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-20 md:pt-36 md:pb-28 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-foreground mb-6">
            We Don't Sell Travel. We Build the Technology That Powers the People Who Do.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Intraverse is a B2B travel technology company headquartered in Lagos, Nigeria. We build the tools,
            infrastructure, and platforms that travel agencies, corporate travel managers, and independent travel
            entrepreneurs use to sell flights, hotels, tours, and packages from suppliers around the world.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 section-alt">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-foreground text-center mb-8">
            We Give Travel Professionals the Technology to Compete and Win
          </h2>
          <p className="text-muted-foreground text-lg text-center mb-6 max-w-3xl mx-auto">
            The travel industry in Nigeria is fragmented. Agencies search multiple systems for fares, manage bookings
            across disconnected tools, and compete against larger players with better supplier relationships. Corporates
            have no visibility into travel spend. Aspiring entrepreneurs are locked out entirely.
          </p>
          <p className="text-muted-foreground text-lg text-center mb-12 max-w-3xl mx-auto">
            Intraverse solves this by consolidating inventory from GDS, NDC, and consolidator sources into a single
            platform — then wrapping it with the tools professionals need to sell, manage, and grow.
          </p>

          <div className="space-y-4 max-w-2xl mx-auto">
            {products.map((product) => (
              <a
                key={product.name}
                href={product.href}
                className="flex items-center justify-between brand-card hover:shadow-md transition-shadow group"
              >
                <div>
                  <h4 className="font-semibold text-foreground">{product.name}</h4>
                  <p className="text-sm text-muted-foreground">{product.description}</p>
                </div>
                <ArrowRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-4" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-foreground text-center mb-8">
            We Started With One Question: Why Is It So Hard to Run a Travel Agency in Nigeria?
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              In most developed markets, travel agents have access to unified booking platforms, competitive supplier
              agreements, and modern technology out of the box. In Nigeria, the reality is different. Agents juggle
              multiple GDS terminals, negotiate supplier relationships individually, and rely on manual processes that
              haven't changed in decades.
            </p>
            <p>
              We built Intraverse from Lagos because we understood these challenges firsthand. Every feature we ship is
              designed for local realities — the payment infrastructure, the supplier landscape, the regulatory
              environment, and the way business actually gets done on the ground.
            </p>
            <p className="text-foreground font-medium">
              We believe a two-person agency in Ikeja should have access to the same technology as a multinational TMC.
              That's not a tagline — it's the design principle behind every product we build.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 section-alt">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <Icon className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-foreground text-center mb-4">What We Believe</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            These aren't values on a wall. They're the principles that shape every product decision, every support
            interaction, and every line of code.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="brand-card">
                  <Icon className="h-8 w-8 text-primary mb-4" />
                  <h4 className="text-lg font-semibold text-foreground mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology & Accreditations */}
      <section className="py-20 section-alt">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-foreground text-center mb-8">Technology & Accreditations</h2>
          <div className="space-y-6 text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            <p>
              Our flight supply architecture aggregates inventory from three GDS systems (Amadeus, Sabre, Galileo),
              multiple NDC direct connections, consolidator fares, and third-party aggregators — all searchable from a
              single interface.
            </p>
            <p>
              Hotel and tour inventory is sourced from leading global suppliers, giving agents access to competitive
              rates across hundreds of thousands of properties worldwide.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {accreditations.map((name) => (
              <Badge
                key={name}
                variant="secondary"
                className="px-5 py-2.5 text-sm font-semibold"
              >
                {name}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-foreground text-center mb-12">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-border" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <div key={i} className="relative pl-12 md:pl-16">
                  <div className="absolute left-2 md:left-4 top-1 w-5 h-5 rounded-full bg-primary border-4 border-background" />
                  <div className="text-sm font-bold text-primary mb-1">{m.year}</div>
                  <h4 className="text-lg font-semibold text-foreground mb-1">{m.title}</h4>
                  <p className="text-sm text-muted-foreground">{m.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 section-alt">
        <div className="container mx-auto px-4">
          <h2 className="text-foreground text-center mb-12">Who We Serve</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {audiences.map((a) => {
              const Icon = a.icon;
              return (
                <a key={a.title} href={a.href} className="brand-card hover:shadow-md transition-shadow group">
                  <Icon className="h-8 w-8 text-primary mb-4" />
                  <h4 className="text-lg font-semibold text-foreground mb-2">{a.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{a.description}</p>
                  <span className="text-primary text-sm font-medium flex items-center gap-1">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-foreground text-center mb-12">What Our Partners Say</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <div key={i} className="brand-card">
                <Quote className="h-6 w-6 text-primary mb-4" />
                <p className="text-muted-foreground mb-6 italic">"{t.quote}"</p>
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Teaser */}
      <section className="py-20 section-alt">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <Sparkles className="h-10 w-10 text-primary mx-auto mb-4" />
          <h2 className="text-foreground mb-4">
            Join the Team Building the Future of Travel in Africa
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're a small, fast-moving team solving real problems for travel professionals across Nigeria. If you
            want to build technology that matters — and you're comfortable moving fast in ambiguity — we'd love to
            hear from you.
          </p>
          <Button variant="hero" size="xl">
            View Open Roles
          </Button>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-foreground text-center mb-12">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="brand-card border-none">
                <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-primary-foreground mb-6">
            Now You Know Who We Are. Let Us Show You What We Can Do.
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Whether you're an agency, a corporate, or an aspiring entrepreneur — there's an Intraverse product built
            for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Book a Demo
            </Button>
            <Button variant="outline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFab />
    </div>
  );
}
