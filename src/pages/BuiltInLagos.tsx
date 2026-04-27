import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Globe, Wallet, Handshake, Shield, Landmark, Globe2, Wrench, Zap, Search, MapPin, Phone, MessageCircle, Clock } from "lucide-react";
import { useEffect } from "react";
import lagosSkyline from "@/assets/lagos-skyline.png";
import { WHATSAPP_URL, DEMO_URL } from "@/lib/constants";

/* ─── Reusable animated wrapper ─── */
function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, revealClass } = useScrollReveal({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${revealClass} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ─── Africa Map SVG ─── */
function AfricaMap() {
  const cities: { name: string; x: number; y: number; isHQ?: boolean }[] = [
    { name: "Lagos", x: 38, y: 52, isHQ: true },
    { name: "Accra", x: 35, y: 54 },
    { name: "Dakar", x: 22, y: 44 },
    { name: "Cairo", x: 58, y: 24 },
    { name: "Nairobi", x: 65, y: 58 },
    { name: "Johannesburg", x: 56, y: 78 },
    { name: "Cape Town", x: 48, y: 85 },
  ];

  return (
    <div className="relative w-full max-w-md mx-auto">
      <svg viewBox="0 0 100 100" className="w-full" xmlns="http://www.w3.org/2000/svg">
        {/* Simplified Africa outline */}
        <path
          d="M45,8 C50,6 55,8 58,12 C62,14 65,18 66,22 C68,26 70,30 68,35 C72,38 74,42 73,46 C72,50 70,54 68,58 C67,62 66,66 65,70 C63,74 60,78 57,80 C55,83 52,86 48,88 C44,90 40,88 38,85 C35,82 33,78 32,74 C30,70 28,66 27,62 C25,58 23,54 22,50 C21,46 20,42 22,38 C24,34 26,30 28,26 C30,22 33,18 36,14 C38,11 42,9 45,8Z"
          fill="hsl(var(--accent))"
          stroke="hsl(var(--border))"
          strokeWidth="0.5"
        />
        {/* City markers */}
        {cities.map((city) => (
          <g key={city.name}>
            <circle
              cx={city.x}
              cy={city.y}
              r={city.isHQ ? 2.5 : 1.5}
              fill={city.isHQ ? "hsl(var(--primary))" : "hsl(220 78% 65%)"}
              className={city.isHQ ? "animate-pulse" : ""}
            />
            <text
              x={city.x + (city.isHQ ? 4 : 3)}
              y={city.y + 1}
              fontSize={city.isHQ ? 3.5 : 2.8}
              fill="hsl(var(--foreground))"
              fontWeight={city.isHQ ? 700 : 500}
            >
              {city.name}
            </text>
            {city.isHQ && (
              <text
                x={city.x + 4}
                y={city.y + 5}
                fontSize={2.2}
                fill="hsl(var(--muted-foreground))"
              >
                HQ
              </text>
            )}
          </g>
        ))}
      </svg>
    </div>
  );
}

/* ─── Section 2: Value blocks data ─── */
const valueBlocks = [
  {
    icon: Globe,
    title: "Built for African Conditions, Not Western Assumptions",
    description: "Our platform is designed from the ground up for the realities of doing business in African markets - low bandwidth, mobile-first users, multi-currency transactions, and fragmented supplier ecosystems. We don't adapt Western tools. We build African ones.",
  },
  {
    icon: Wallet,
    title: "Local Currencies. Local Settlement. Local Payment Rails.",
    description: "We support Naira, Cedi, Shilling, Rand, and more - with local settlement options that mean your money doesn't have to travel further than your customers do. Payment rails built for African banking infrastructure, not bolted on as an afterthought.",
  },
  {
    icon: Handshake,
    title: "Support That Lives on the Continent",
    description: "Our support team operates from the continent, in the same time zones as our users, speaking the same languages, understanding the same market dynamics. When you call, someone who understands your business answers.",
  },
  {
    icon: Shield,
    title: "Compliance for Every Market We Serve",
    description: "From Nigeria's CBN regulations to Kenya's tourism licensing to South Africa's financial services requirements - we build compliance into the platform, not around it. Every market we enter, we enter properly.",
  },
  {
    icon: Landmark,
    title: "IATA-Accredited on the Continent",
    description: "We hold our IATA accreditation through an African entity, with African operations, serving African travel businesses. This isn't an offshore play - it's an onshore commitment to the continent's travel industry.",
  },
  {
    icon: Globe2,
    title: "Built for the African Travel Business, Not Exported to It",
    description: "Every feature, every workflow, every integration decision is made with African travel businesses in mind first. We don't build for Silicon Valley and localise for Lagos. We build for Lagos and scale across the continent.",
  },
];

/* ─── Section 5: Commitment blocks data ─── */
const commitmentBlocks = [
  {
    icon: Wrench,
    title: "We Build for African Markets, Not Just Imagine Them",
    description: "Every product decision starts with a real conversation with a real travel business on the continent. We don't build features based on what we think African markets need - we build them based on what we know they need, because we're here.",
  },
  {
    icon: Zap,
    title: "We Move Fast Because Our Markets Move Fast",
    description: "African travel markets don't wait for quarterly roadmap reviews. When a payment rail changes in Nigeria, when a new airline launches in East Africa, when a regulatory shift hits Southern Africa - we respond in days, not quarters.",
  },
  {
    icon: Search,
    title: "We're Honest About Who We Are and What We're Building",
    description: "We're a young company building ambitious infrastructure for a continent that deserves better technology. We don't pretend to have solved everything - but we're transparent about what works, what's coming, and what we're still figuring out.",
  },
  {
    icon: Globe,
    title: "We're Building for the Long Run, Across the Continent",
    description: "This isn't a market entry. It's a market commitment. We're building infrastructure that African travel businesses can rely on for decades - not a platform that could disappear when a foreign parent company changes strategy.",
  },
];

export default function BuiltInLagos() {
  useEffect(() => {
    document.title = "Built in Lagos, Built for Africa | Our Story | Intraverse";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Intraverse is an Africa-first travel technology company headquartered in Lagos. We build infrastructure for travel businesses across the continent - starting where the hardest version of the problem lives.");
  }, []);

  const scrollToOrigin = () => {
    document.getElementById("origin")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ═══ HERO ═══ */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4 block">
              Our Story
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Built in Lagos. Built for Africa.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-10">
              Intraverse is an Africa-first travel technology company headquartered in Lagos. We're building the infrastructure that African travel businesses - agents, independents, corporates, fintechs, and startups - need to compete globally. Lagos is where we started because Lagos is where the hardest version of the problem lives. Africa is where we're going because that's the market we were built to serve.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" onClick={scrollToOrigin}>
                Read Our Story
              </Button>
              <a href="/about">
                <Button variant="outline" size="xl" className="rounded-none border-foreground text-foreground">
                  Meet the Team
                </Button>
              </a>
            </div>
          </Reveal>
        </div>
        {/* Hero image placeholder */}
        <Reveal delay={400}>
          <div className="container mx-auto px-4 mt-12 max-w-5xl">
            <div className="aspect-[16/7] rounded-lg overflow-hidden">
              <img src={lagosSkyline} alt="Lagos skyline at golden hour - Victoria Island and Eko Atlantic" width={1920} height={840} className="w-full h-full object-cover" />
            </div>
          </div>
        </Reveal>
      </section>

      {/* ═══ SECTION 1 - THE ORIGIN ═══ */}
      <section id="origin" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 leading-tight">
              It Started With a Question That Applied to Every African Market
            </h2>
          </Reveal>
          <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
            <Reveal delay={100}>
              <p>
                Why is it so hard to sell travel in Africa? Not because of a lack of demand - Africans travel. A lot. For business, for family, for faith, for trade, for ambition. The demand was never the problem. The infrastructure was.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p>
                When we started Intraverse, we weren't trying to build the next big tech company. We were trying to solve a practical problem that every travel business on the continent shares: the tools available to sell, book, and manage travel were either too expensive, too complex, too fragmented, or simply not designed for African markets. GDS access was gatekept. Payment rails were broken. Support was offshore. And the technology that did exist was built for London or New York - then awkwardly adapted for Lagos, Accra, and Nairobi.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <p>
                So we started building. Not a travel agency - a travel technology platform. Infrastructure that any travel business in Africa could plug into and immediately access the tools, content, and payment systems they needed to compete. We built it in Lagos because that's where we're from, and because Lagos is one of the most demanding, complex, and rewarding travel markets on the continent. If it works in Lagos, it can work anywhere in Africa.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 2 - WHY AFRICA-FIRST MATTERS ═══ */}
      <section className="py-16 md:py-24 bg-accent">
        <div className="container mx-auto px-4 max-w-5xl">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight text-center">
              What Africa-First Actually Means
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto text-center mb-12">
              "Africa-first" isn't a marketing phrase - it's an engineering decision, a business model, and a daily commitment. It means every product, every integration, every support workflow, and every compliance framework is built with African travel businesses as the primary user, not as an afterthought.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {valueBlocks.map((block, i) => (
              <Reveal key={block.title} delay={i * 80}>
                <div className="bg-background border border-border rounded-lg p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <block.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="h3-global text-foreground mb-3">{block.title}</h3>
                  <p className="text-[15px] text-muted-foreground leading-relaxed">{block.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 3 - THE PEOPLE ═══ */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 leading-tight">
              Built by People Who've Lived the Problem
            </h2>
          </Reveal>
          <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
            <Reveal delay={100}>
              <p>
                Intraverse wasn't built in a lab. It was built by people who've worked in African travel - who've dealt with broken GDS connections at midnight, who've manually reconciled payments across three currencies, who've tried to explain to a supplier in London why a Naira transfer takes 72 hours. We know the problem because we've been the ones trying to solve it with duct tape and spreadsheets.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p>
                Our team spans Lagos, Accra, Nairobi, London, and other global hubs - but our centre of gravity is the continent. Our product decisions are made by people who use African banking apps, who navigate African regulatory frameworks, who understand that a travel agent in Ikeja and a travel agent in Westlands face the same structural challenges even if the specifics differ. That proximity to the problem isn't a nice-to-have - it's the reason our platform works.
              </p>
            </Reveal>
          </div>
          <Reveal delay={300}>
            <div className="mt-10">
              <a href="/about">
                <Button variant="outline" size="lg" className="rounded-none border-foreground text-foreground">
                  Meet the Team →
                </Button>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ SECTION 4 - OUR AFRICA STORY ═══ */}
      <section className="py-16 md:py-24 bg-accent">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-[60%]">
              <Reveal>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 leading-tight">
                  Our Africa Story
                </h2>
              </Reveal>
              <Reveal delay={50}>
                <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-8">
                  Lagos Today. Africa Today. Africa Tomorrow.
                </p>
              </Reveal>
              <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                <Reveal delay={100}>
                  <p>
                    We started in Lagos because Lagos demanded it. The city's travel market is enormous, complex, and underserved by technology. It's a city where millions of people book travel every year - and most of the businesses serving them are still using manual processes, fragmented tools, and payment systems that weren't designed for them. If you can build technology that works for Lagos, you've built technology that works for the continent.
                  </p>
                </Reveal>
                <Reveal delay={200}>
                  <p>
                    But Lagos was always the starting point, never the destination. Our roadmap is continental. We're already serving travel businesses in multiple African markets, and our infrastructure is designed to scale across currencies, regulatory environments, and supplier ecosystems. From Accra to Nairobi, from Johannesburg to Dakar, from Cape Town to Cairo - the same structural problems exist, and the same platform can solve them.
                  </p>
                </Reveal>
              </div>
            </div>
            <div className="w-full md:w-[40%]">
              <Reveal delay={150}>
                <AfricaMap />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 5 - COMMITMENT ═══ */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 leading-tight text-center">
              What You Can Expect From an Africa-First Company
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commitmentBlocks.map((block, i) => (
              <Reveal key={block.title} delay={i * 80}>
                <div className="bg-background border border-border rounded-lg p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <block.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="h3-global text-foreground mb-3">{block.title}</h3>
                  <p className="text-[15px] text-muted-foreground leading-relaxed">{block.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 6 - VISIT US ═══ */}
      <section className="py-16 md:py-24 bg-accent">
        <div className="container mx-auto px-4 max-w-3xl">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight text-center">
              Come See Where We Build
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-center mb-10">
              We're proud of where we work, and we believe that seeing our operation firsthand is the best way to understand what Africa-first means in practice. If you're in Lagos - or planning to be - come visit.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="bg-background border border-border rounded-lg p-8 md:p-10 max-w-lg mx-auto mb-10">
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span>Headquarters - Lagos, Nigeria</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <a href="tel:+2349030002629" className="hover:text-foreground transition-colors">+234 903 000 2629</a>
                </div>
                <div className="flex items-start gap-3">
                  <MessageCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">WhatsApp: +234 903 000 2629</a>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span>Mon – Fri, 9:00 AM – 4:00 PM (WAT)</span>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/contact">
                <Button variant="hero" size="xl">Schedule a Visit</Button>
              </a>
              <a href="/contact">
                <Button variant="outline" size="xl" className="rounded-none border-foreground text-foreground">
                  Get in Touch
                </Button>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-6 leading-tight">
              Africa-First. Lagos-Built. Continental in Ambition.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-base md:text-lg text-secondary-foreground/80 leading-relaxed mb-10">
              Whether you're a travel agent in Lagos, an independent in Accra, a fintech in Nairobi, a corporate finance lead in Johannesburg, or a startup founder in Dakar - Intraverse is built for you, by people from the continent, for the continent. See it for yourself.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="xl" className="bg-background text-foreground hover:bg-background/90 rounded-none font-semibold" asChild>
                <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">Book a Demo</a>
              </Button>
              <a href="/products">
                <Button size="xl" variant="outline" className="rounded-none border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground/10">
                  Explore Products
                </Button>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
      <WhatsAppFab />
    </div>
  );
}
