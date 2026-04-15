import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Globe, Wallet, Handshake, Shield, Landmark, Globe2, Wrench, Zap, Search, MapPin, Phone, MessageCircle, Clock } from "lucide-react";
import { useEffect } from "react";
import lagosSkyline from "@/assets/lagos-skyline.png";
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
/* ─── Reusable animated wrapper ─── */
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  const { ref, revealClass } = useScrollReveal({ threshold: 0.1 });
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  return (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    <div
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      ref={ref}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      className={`transition-all duration-700 ease-out ${revealClass} ${className}`}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      style={{ transitionDelay: `${delay}ms` }}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    >
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
/* ─── Africa Map SVG ─── */
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
function AfricaMap() {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  const cities: { name: string; x: number; y: number; isHQ?: boolean }[] = [
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    { name: "Lagos", x: 38, y: 52, isHQ: true },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    { name: "Accra", x: 35, y: 54 },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    { name: "Dakar", x: 22, y: 44 },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    { name: "Cairo", x: 58, y: 24 },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    { name: "Nairobi", x: 65, y: 58 },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    { name: "Johannesburg", x: 56, y: 78 },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    { name: "Cape Town", x: 48, y: 85 },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  ];
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  return (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    <div className="relative w-full max-w-md mx-auto">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <svg viewBox="0 0 100 100" className="w-full" xmlns="http://www.w3.org/2000/svg">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        {/* Simplified Africa outline */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <path
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          d="M45,8 C50,6 55,8 58,12 C62,14 65,18 66,22 C68,26 70,30 68,35 C72,38 74,42 73,46 C72,50 70,54 68,58 C67,62 66,66 65,70 C63,74 60,78 57,80 C55,83 52,86 48,88 C44,90 40,88 38,85 C35,82 33,78 32,74 C30,70 28,66 27,62 C25,58 23,54 22,50 C21,46 20,42 22,38 C24,34 26,30 28,26 C30,22 33,18 36,14 C38,11 42,9 45,8Z"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          fill="hsl(var(--accent))"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          stroke="hsl(var(--border))"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          strokeWidth="0.5"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        {/* City markers */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        {cities.map((city) => (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <g key={city.name}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <circle
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              cx={city.x}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              cy={city.y}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              r={city.isHQ ? 2.5 : 1.5}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              fill={city.isHQ ? "hsl(var(--primary))" : "hsl(220 78% 65%)"}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              className={city.isHQ ? "animate-pulse" : ""}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <text
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              x={city.x + (city.isHQ ? 4 : 3)}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              y={city.y + 1}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              fontSize={city.isHQ ? 3.5 : 2.8}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              fill="hsl(var(--foreground))"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              fontWeight={city.isHQ ? 700 : 500}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            >
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              {city.name}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </text>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            {city.isHQ && (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <text
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                x={city.x + 4}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                y={city.y + 5}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                fontSize={2.2}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                fill="hsl(var(--muted-foreground))"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              >
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                HQ
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </text>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            )}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </g>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        ))}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      </svg>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  );
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
/* ─── Section 2: Value blocks data ─── */
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
const valueBlocks = [
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    icon: Globe,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    title: "Built for African Conditions, Not Western Assumptions",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    description: "Our platform is designed from the ground up for the realities of doing business in African markets — low bandwidth, mobile-first users, multi-currency transactions, and fragmented supplier ecosystems. We don't adapt Western tools. We build African ones.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    icon: Wallet,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    title: "Local Currencies. Local Settlement. Local Payment Rails.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    description: "We support Naira, Cedi, Shilling, Rand, and more — with local settlement options that mean your money doesn't have to travel further than your customers do. Payment rails built for African banking infrastructure, not bolted on as an afterthought.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    icon: Handshake,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    title: "Support That Lives on the Continent",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    description: "Our support team operates from the continent, in the same time zones as our users, speaking the same languages, understanding the same market dynamics. When you call, someone who understands your business answers.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    icon: Shield,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    title: "Compliance for Every Market We Serve",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    description: "From Nigeria's CBN regulations to Kenya's tourism licensing to South Africa's financial services requirements — we build compliance into the platform, not around it. Every market we enter, we enter properly.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    icon: Landmark,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    title: "IATA-Accredited on the Continent",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    description: "We hold our IATA accreditation through an African entity, with African operations, serving African travel businesses. This isn't an offshore play — it's an onshore commitment to the continent's travel industry.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    icon: Globe2,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    title: "Built for the African Travel Business, Not Exported to It",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    description: "Every feature, every workflow, every integration decision is made with African travel businesses in mind first. We don't build for Silicon Valley and localise for Lagos. We build for Lagos and scale across the continent.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
];
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
/* ─── Section 5: Commitment blocks data ─── */
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
const commitmentBlocks = [
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    icon: Wrench,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    title: "We Build for African Markets, Not Just Imagine Them",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    description: "Every product decision starts with a real conversation with a real travel business on the continent. We don't build features based on what we think African markets need — we build them based on what we know they need, because we're here.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    icon: Zap,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    title: "We Move Fast Because Our Markets Move Fast",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    description: "African travel markets don't wait for quarterly roadmap reviews. When a payment rail changes in Nigeria, when a new airline launches in East Africa, when a regulatory shift hits Southern Africa — we respond in days, not quarters.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    icon: Search,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    title: "We're Honest About Who We Are and What We're Building",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    description: "We're a young company building ambitious infrastructure for a continent that deserves better technology. We don't pretend to have solved everything — but we're transparent about what works, what's coming, and what we're still figuring out.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    icon: Globe,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    title: "We're Building for the Long Run, Across the Continent",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    description: "This isn't a market entry. It's a market commitment. We're building infrastructure that African travel businesses can rely on for decades — not a platform that could disappear when a foreign parent company changes strategy.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
];
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
export default function BuiltInLagos() {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  useEffect(() => {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    document.title = "Built in Lagos, Built for Africa | Our Story | Intraverse";
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    const meta = document.querySelector('meta[name="description"]');
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    if (meta) meta.setAttribute("content", "Intraverse is an Africa-first travel technology company headquartered in Lagos. We build infrastructure for travel businesses across the continent — starting where the hardest version of the problem lives.");
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  }, []);
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  const scrollToOrigin = () => {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    document.getElementById("origin")?.scrollIntoView({ behavior: "smooth" });
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  };
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  return (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    <div className="min-h-screen bg-background">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <Navbar />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      {/* ═══ HERO ═══ */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-background">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <div className="container mx-auto px-4 max-w-4xl text-center">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <Reveal>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4 block">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              Our Story
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </span>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </Reveal>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <Reveal delay={100}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              Built in Lagos. Built for Africa.
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </h1>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </Reveal>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <Reveal delay={200}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-10">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              Intraverse is an Africa-first travel technology company headquartered in Lagos. We're building the infrastructure that African travel businesses — agents, independents, corporates, fintechs, and startups — need to compete globally. Lagos is where we started because Lagos is where the hardest version of the problem lives. Africa is where we're going because that's the market we were built to serve.
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </Reveal>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <Reveal delay={300}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <Button variant="hero" size="xl" onClick={scrollToOrigin}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                Read Our Story
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </Button>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <a href="/about">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <Button variant="outline" size="xl" className="rounded-none border-foreground text-foreground">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  Meet the Team
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </Button>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </a>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </Reveal>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        {/* Hero image placeholder */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <Reveal delay={400}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <div className="container mx-auto px-4 mt-12 max-w-5xl">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <div className="aspect-[16/7] rounded-lg overflow-hidden">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <img src={lagosSkyline} alt="Lagos skyline at golden hour — Victoria Island and Eko Atlantic" width={1920} height={840} className="w-full h-full object-cover" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </Reveal>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      </section>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      {/* ═══ SECTION 1 — THE ORIGIN ═══ */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <section id="origin" className="py-16 md:py-24 bg-background">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <div className="container mx-auto px-4 max-w-3xl">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <Reveal>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 leading-tight">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              It Started With a Question That Applied to Every African Market
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </h2>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </Reveal>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <Reveal delay={100}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                Why is it so hard to sell travel in Africa? Not because of a lack of demand — Africans travel. A lot. For business, for family, for faith, for trade, for ambition. The demand was never the problem. The infrastructure was.
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </Reveal>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <Reveal delay={200}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                When we started Intraverse, we weren't trying to build the next big tech company. We were trying to solve a practical problem that every travel business on the continent shares: the tools available to sell, book, and manage travel were either too expensive, too complex, too fragmented, or simply not designed for African markets. GDS access was gatekept. Payment rails were broken. Support was offshore. And the technology that did exist was built for London or New York — then awkwardly adapted for Lagos, Accra, and Nairobi.
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </Reveal>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <Reveal delay={300}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                So we started building. Not a travel agency — a travel technology platform. Infrastructure that any travel business in Africa could plug into and immediately access the tools, content, and payment systems they needed to compete. We built it in Lagos because that's where we're from, and because Lagos is one of the most demanding, complex, and rewarding travel markets on the continent. If it works in Lagos, it can work anywhere in Africa.
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </Reveal>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      </section>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      {/* ═══ SECTION 2 — WHY AFRICA-FIRST MATTERS ═══ */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <section className="py-16 md:py-24 bg-accent">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <div className="container mx-auto px-4 max-w-5xl">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <Reveal>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight text-center">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              What Africa-First Actually Means
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </h2>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </Reveal>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <Reveal delay={100}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto text-center mb-12">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              "Africa-first" isn't a marketing phrase — it's an engineering decision, a business model, and a daily commitment. It means every product, every integration, every support workflow, and every compliance framework is built with African travel businesses as the primary user, not as an afterthought.
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </Reveal>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            {valueBlocks.map((block, i) => (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <Reveal key={block.title} delay={i * 80}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <div className="bg-background border border-border rounded-lg p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <block.icon className="h-10 w-10 text-primary mb-4" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <h3 className="text-xl font-bold text-foreground mb-3">{block.title}</h3>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <p className="text-[15px] text-muted-foreground leading-relaxed">{block.description}</p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </Reveal>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            ))}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      </section>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      {/* ═══ SECTION 3 — THE PEOPLE ═══ */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <section className="py-16 md:py-24 bg-background">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <div className="container mx-auto px-4 max-w-3xl">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <Reveal>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 leading-tight">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              Built by People Who've Lived the Problem
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </h2>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </Reveal>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <Reveal delay={100}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                Intraverse wasn't built in a lab. It was built by people who've worked in African travel — who've dealt with broken GDS connections at midnight, who've manually reconciled payments across three currencies, who've tried to explain to a supplier in London why a Naira transfer takes 72 hours. We know the problem because we've been the ones trying to solve it with duct tape and spreadsheets.
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </Reveal>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <Reveal delay={200}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                Our team spans Lagos, Accra, Nairobi, London, and other global hubs — but our centre of gravity is the continent. Our product decisions are made by people who use African banking apps, who navigate African regulatory frameworks, who understand that a travel agent in Ikeja and a travel agent in Westlands face the same structural challenges even if the specifics differ. That proximity to the problem isn't a nice-to-have — it's the reason our platform works.
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </Reveal>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <Reveal delay={300}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <div className="mt-10">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <a href="/about">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <Button variant="outline" size="lg" className="rounded-none border-foreground text-foreground">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  Meet the Team →
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </Button>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </a>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </Reveal>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      </section>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      {/* ═══ SECTION 4 — OUR AFRICA STORY ═══ */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <section className="py-16 md:py-24 bg-accent">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <div className="container mx-auto px-4 max-w-5xl">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <div className="flex flex-col md:flex-row gap-12 items-center">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <div className="w-full md:w-[60%]">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <Reveal>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 leading-tight">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  Our Africa Story
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </h2>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </Reveal>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <Reveal delay={50}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-8">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  Lagos Today. Africa Today. Africa Tomorrow.
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </Reveal>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <Reveal delay={100}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    We started in Lagos because Lagos demanded it. The city's travel market is enormous, complex, and underserved by technology. It's a city where millions of people book travel every year — and most of the businesses serving them are still using manual processes, fragmented tools, and payment systems that weren't designed for them. If you can build technology that works for Lagos, you've built technology that works for the continent.
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </Reveal>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <Reveal delay={200}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    But Lagos was always the starting point, never the destination. Our roadmap is continental. We're already serving travel businesses in multiple African markets, and our infrastructure is designed to scale across currencies, regulatory environments, and supplier ecosystems. From Accra to Nairobi, from Johannesburg to Dakar, from Cape Town to Cairo — the same structural problems exist, and the same platform can solve them.
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </Reveal>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <div className="w-full md:w-[40%]">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <Reveal delay={150}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <AfricaMap />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </Reveal>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      </section>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      {/* ═══ SECTION 5 — COMMITMENT ═══ */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <section className="py-16 md:py-24 bg-background">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <div className="container mx-auto px-4 max-w-5xl">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <Reveal>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 leading-tight text-center">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              What You Can Expect From an Africa-First Company
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </h2>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </Reveal>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            {commitmentBlocks.map((block, i) => (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <Reveal key={block.title} delay={i * 80}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <div className="bg-background border border-border rounded-lg p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <block.icon className="h-10 w-10 text-primary mb-4" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <h3 className="text-xl font-bold text-foreground mb-3">{block.title}</h3>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <p className="text-[15px] text-muted-foreground leading-relaxed">{block.description}</p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </Reveal>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            ))}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      </section>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      {/* ═══ SECTION 6 — VISIT US ═══ */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <section className="py-16 md:py-24 bg-accent">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <div className="container mx-auto px-4 max-w-3xl">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <Reveal>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight text-center">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              Come See Where We Build
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </h2>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </Reveal>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <Reveal delay={100}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-center mb-10">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              We're proud of where we work, and we believe that seeing our operation firsthand is the best way to understand what Africa-first means in practice. If you're in Lagos — or planning to be — come visit.
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </Reveal>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <Reveal delay={200}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <div className="bg-background border border-border rounded-lg p-8 md:p-10 max-w-lg mx-auto mb-10">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <div className="space-y-4 text-muted-foreground">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <div className="flex items-start gap-3">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <span>Headquarters — Lagos, Nigeria</span>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <div className="flex items-start gap-3">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <Phone className="h-5 w-5 text-primary mt-0.5 shrink-0" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <a href="tel:+2349030002629" className="hover:text-foreground transition-colors">+234 903 000 2629</a>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <div className="flex items-start gap-3">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <MessageCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <a href="https://wa.me/2349030002629" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">WhatsApp: +234 903 000 2629</a>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <div className="flex items-start gap-3">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <Clock className="h-5 w-5 text-primary mt-0.5 shrink-0" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <span>Mon – Fri, 9:00 AM – 4:00 PM (WAT)</span>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </Reveal>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <Reveal delay={300}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <a href="/contact">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <Button variant="hero" size="xl">Schedule a Visit</Button>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </a>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <a href="/contact">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <Button variant="outline" size="xl" className="rounded-none border-foreground text-foreground">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  Get in Touch
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </Button>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </a>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </Reveal>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      </section>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      {/* ═══ FINAL CTA ═══ */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <section className="py-16 md:py-24 bg-secondary">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <div className="container mx-auto px-4 max-w-3xl text-center">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <Reveal>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-6 leading-tight">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              Africa-First. Lagos-Built. Continental in Ambition.
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </h2>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </Reveal>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <Reveal delay={100}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <p className="text-base md:text-lg text-secondary-foreground/80 leading-relaxed mb-10">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              Whether you're a travel agent in Lagos, an independent in Accra, a fintech in Nairobi, a corporate finance lead in Johannesburg, or a startup founder in Dakar — Intraverse is built for you, by people from the continent, for the continent. See it for yourself.
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </Reveal>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <Reveal delay={200}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <a href="/contact">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <Button size="xl" className="bg-background text-foreground hover:bg-background/90 rounded-none font-semibold">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  Book a Demo
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </Button>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </a>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <a href="/products">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <Button size="xl" variant="outline" className="rounded-none border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground/10">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  Explore Products
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </Button>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </a>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </Reveal>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      </section>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

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
