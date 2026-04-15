import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
type FilterCategory = "All" | "Travel Agents" | "Independents" | "Businesses" | "Fintechs" | "Tech/Developers";
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
const filters: FilterCategory[] = ["All", "Travel Agents", "Independents", "Businesses", "Fintechs", "Tech/Developers"];
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
interface UseCase {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  number: string;
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  title: string;
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  problem: string;
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  solution: string;
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  products: string[];
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  link: string;
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  categories: FilterCategory[];
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
const useCases: UseCase[] = [
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    number: "01",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    title: "Fintechs Adding Travel as a Revenue Stream",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    problem: "You're a Nigerian fintech, neobank, or super-app with millions of users. Your customers spend on flights, hotels, and travel — but every Naira goes to competitors. You want to capture that revenue, but building travel infrastructure means 2+ years of IATA accreditation, GDS contracts, supplier negotiations, and BSP settlement setup. By the time you launch, your customers are already booking elsewhere.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    solution: "Plug Intraverse's API directly into your fintech app. Offer in-app flight, hotel, and tour booking powered by aggregated GDS, NDC, and consolidator inventory. Activate Odiopay BNPL natively so users can book travel and pay in instalments — directly from their existing wallet or card on file. Launch in months, not years.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    products: ["Intraverse API", "Odiopay BNPL", "Partnership Programme"],
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    link: "/for/developers",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    categories: ["All", "Fintechs", "Tech/Developers"],
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    number: "02",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    title: "Faith-Based & Pilgrimage Travel",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    problem: "Organising group travel for Hajj, Umrah, Jerusalem pilgrimages, and church missions means juggling 50+ passengers, group fares, hotel blocks, and visa coordination — usually on spreadsheets.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    solution: "Search group fares across multiple suppliers, manage passenger manifests, share live itineraries with the whole group, and process bulk payments via virtual accounts.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    products: ["Agent Selling Platform", "Travel Links", "Manage Team"],
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    link: "/for/travel-agents",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    categories: ["All", "Travel Agents"],
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    number: "03",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    title: "Student & Education Travel",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    problem: "Selling student flights, study-abroad packages, and university travel requires special fares and parent-friendly payment options.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    solution: "Access student airline fares through aggregated GDS/NDC inventory. Offer Pay Later via Odiopay. Build study-abroad packages with flight, hotel, and tour bundles.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    products: ["Agent Selling Platform", "Odiopay", "Create & Sell Packages"],
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    link: "/for/travel-agents",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    categories: ["All", "Travel Agents"],
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    number: "04",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    title: "Medical Tourism",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    problem: "Coordinating international medical trips means flights, accommodation near hospitals, transfers, and family logistics — all needing to be perfect.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    solution: "Bundle complete medical travel packages with flights, hospital-area hotels, and ground transfers. Share live itineraries with patients and families.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    products: ["Create & Manage Trips", "Share Live Itineraries", "Travx"],
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    link: "/for/travel-agents",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    categories: ["All", "Travel Agents"],
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    number: "05",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    title: "Side Hustlers Starting From Zero",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    problem: "You want to earn from travel but have no agency, no IATA, and no capital.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    solution: "Join the Independents Programme, get IATA-backed inventory access, and start selling flights, hotels, and tours to your network. Earn commissions on every booking.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    products: ["Independents Programme"],
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    link: "/for/independents",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    categories: ["All", "Independents"],
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    number: "06",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    title: "Growing a Multi-Branch Agency",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    problem: "Your agency has multiple locations, multiple staff, and zero visibility into who's selling what.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    solution: "Centralise operations with a single workspace, role-based team management, branch-level reporting, and consolidated wallet management.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    products: ["Setup Workspace", "Manage Team", "Performance Dashboard"],
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    link: "/for/travel-agents",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    categories: ["All", "Travel Agents"],
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    number: "07",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    title: "Corporate Travel Programmes",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    problem: "Your company spends millions on employee travel with zero policy enforcement and no consolidated reporting.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    solution: "Deploy CoopX with approval workflows, policy gates, and consolidated billing. Cut travel spend by 20-30% in the first quarter.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    products: ["CoopX"],
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    link: "/for/corporates",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    categories: ["All", "Businesses"],
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    number: "08",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    title: "Social Media Travel Sellers",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    problem: "You have an Instagram audience interested in travel deals but no way to sell to them at scale.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    solution: "Generate Travel Links for any deal or package, post on Instagram/WhatsApp/TikTok, and let customers click, book, and pay directly. Track every conversion.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    products: ["Travel Links", "Independents Programme"],
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    link: "/products/travel-links",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    categories: ["All", "Independents"],
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    number: "09",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    title: "Building a Travel App or Marketplace",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    problem: "You're building a consumer travel product but don't want to spend 2 years on IATA, GDS contracts, and supplier negotiations.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    solution: "Plug into Intraverse's API. Get aggregated flight, hotel, and tour inventory. Launch in months, not years. Co-build partnerships available.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    products: ["Intraverse API", "Partnership Programme"],
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    link: "/for/startups",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    categories: ["All", "Tech/Developers"],
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    number: "10",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    title: "Adding BNPL to Close More Sales",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    problem: "Customers love your fares but don't have the full amount upfront. You're losing bookings.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    solution: "Activate Odiopay BNPL — Fare Lock holds today's price while customers pay in instalments. Pay Later enables post-ticketing repayment. Close every sale.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    products: ["Odiopay", "Agent Selling Platform"],
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    link: "/products/odiopay",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    categories: ["All", "Travel Agents"],
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    number: "11",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    title: "Going From WhatsApp-Only to Full Online Agency",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    problem: "You run your business on WhatsApp. You're invisible on Google. Custom websites cost thousands and take months.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    solution: "Get a Travx white-label website at $50/month — fully branded, booking-enabled, live in days. Customers find you, book, and pay online.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    products: ["Travx"],
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    link: "/for/travel-agents",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    categories: ["All", "Travel Agents"],
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    number: "12",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    title: "Visa & Document Processing",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    problem: "Visa applications are manual, error-prone, and cost you hours per booking.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    solution: "Use Intraverse's visa processing tools to automate applications, document collection, and status tracking alongside the flight booking workflow.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    products: ["Visa Processing", "Agent Selling Platform"],
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    link: "/for/travel-agents",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    categories: ["All", "Travel Agents"],
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    number: "13",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    title: "Selling Curated Travel Packages",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    problem: "You want to sell signature travel experiences (Dubai shopping trips, Zanzibar getaways, Cape Town tours) but building each one from scratch takes hours.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    solution: "Use Create & Sell Your Own Packages to bundle flights, hotels, and tours into branded packages. Sell them via Travel Links or your Travx website.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    products: ["Create & Sell Packages", "Travel Links", "Travx"],
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    link: "/for/travel-agents",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    categories: ["All", "Travel Agents", "Independents"],
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
];
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
function UseCaseCard({ useCase }: { useCase: UseCase }) {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  return (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    <a
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      href={useCase.link}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      className="group block rounded-2xl bg-card border border-border p-8 transition-all duration-300 hover:border-primary hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(30,97,220,0.10)]"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    >
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      {/* Number badge */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center mb-5">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <span className="text-sm font-bold text-primary-foreground">{useCase.number}</span>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-5 leading-tight">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        {useCase.title}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      </h3>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <div className="space-y-4 mb-6">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <p className="text-sm font-semibold text-foreground mb-1">The Problem:</p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <p className="text-sm text-muted-foreground leading-relaxed">{useCase.problem}</p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <p className="text-sm font-semibold text-foreground mb-1">The Solution:</p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <p className="text-sm text-muted-foreground leading-relaxed">{useCase.solution}</p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <p className="text-sm font-semibold text-foreground mb-1">Products:</p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <div className="flex flex-wrap gap-2 mt-1">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            {useCase.products.map((product) => (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <span
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                key={product}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              >
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                {product}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </span>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            ))}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        Learn more <ArrowRight className="w-4 h-4" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      </span>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    </a>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  );
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
export default function UseCases() {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("All");
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  const { ref: heroRef, revealClass: heroReveal } = useScrollReveal();
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  const { ref: ctaRef, revealClass: ctaReveal } = useScrollReveal();
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  useEffect(() => {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    const onScroll = () => setScrolledPastHero(window.scrollY > 400);
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    window.addEventListener("scroll", onScroll);
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    return () => window.removeEventListener("scroll", onScroll);
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  }, []);
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  const filtered = activeFilter === "All"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    ? useCases
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    : useCases.filter((uc) => uc.categories.includes(activeFilter));
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  return (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    <>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <Navbar />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <main className="pt-16">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        {/* SEO Meta via Helmet-style — handled in head for SSR, here for SPA */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        {/* Hero */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <section className="relative overflow-hidden bg-accent py-20 md:py-28">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          {/* Grid pattern background */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <div className="absolute inset-0 opacity-[0.04]" style={{
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            backgroundSize: "60px 60px",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          }} />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <div ref={heroRef} className={`container mx-auto px-4 relative z-10 text-center transition-all duration-700 ease-out ${heroReveal}`}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <h1 className="font-[660] tracking-[-2px] text-foreground mb-6">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              However You Sell Travel — We've Built It For You
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </h1>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <p className="max-w-3xl mx-auto text-muted-foreground text-base md:text-lg leading-relaxed mb-10">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              From fintech integrations to faith-based pilgrimages, from solo side hustlers to multi-branch agencies — Intraverse powers every kind of travel business in Nigeria. Find the use case that matches yours.
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <Button variant="hero" size="xl" className="cta-responsive min-h-[48px]">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                Book a Demo
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </Button>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <Button
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                variant="whatsapp"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                size="xl"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                className="cta-responsive min-h-[48px]"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                asChild
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              >
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <a href="https://wa.me/2349030002629?text=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20Intraverse">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <MessageCircle className="h-5 w-5" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  Chat on WhatsApp
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </a>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </Button>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </section>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        {/* Filter Tabs - sticky */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <div className={`sticky top-16 z-30 bg-background/95 backdrop-blur-sm border-b border-border transition-shadow ${scrolledPastHero ? "shadow-sm" : ""}`}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <div className="container mx-auto px-4">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-hide">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              {filters.map((filter) => (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <button
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  key={filter}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  onClick={() => setActiveFilter(filter)}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    activeFilter === filter
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      ? "bg-primary text-primary-foreground"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  }`}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                >
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  {filter}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </button>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              ))}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        {/* Use Case Grid */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <section className="py-16 md:py-20">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <div className="container mx-auto px-4">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              {filtered.map((uc) => (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <UseCaseCard key={uc.number} useCase={uc} />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              ))}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            {filtered.length === 0 && (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <p className="text-center text-muted-foreground py-12">No use cases found for this filter.</p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            )}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </section>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        {/* Final CTA */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <section className="py-20 bg-primary text-primary-foreground">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <div ref={ctaRef} className={`container mx-auto px-4 text-center transition-all duration-700 ease-out ${ctaReveal}`}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <h2 className="text-3xl sm:text-4xl md:text-[80px] md:leading-[96px] font-[660] tracking-[-2px] mb-4 text-primary-foreground">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              Don't See Your Use Case? Let's Talk.
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </h2>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <p className="max-w-2xl mx-auto mb-10 text-primary-foreground/80 text-sm md:text-base">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              Every travel business is different. Tell us yours and we'll show you exactly how Intraverse fits.
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <Button
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                variant="outline"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                size="xl"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                className="cta-responsive min-h-[48px] bg-primary-foreground text-primary border-primary-foreground hover:bg-primary-foreground/90 hover:text-foreground rounded-none font-semibold"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              >
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                Book a Discovery Call
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </Button>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <Button
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                variant="whatsapp"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                size="xl"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                className="cta-responsive min-h-[48px]"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                asChild
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              >
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <a href="https://wa.me/2349030002629?text=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20Intraverse">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <MessageCircle className="h-5 w-5" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  Chat on WhatsApp
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </a>
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

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      {/* SEO: Set document title and meta */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <SetPageMeta />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    </>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  );
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
function SetPageMeta() {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  useEffect(() => {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    document.title = "Use Cases | How Travel Businesses Use Intraverse | Nigeria";
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    const setMeta = (name: string, content: string) => {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      let el = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`) as HTMLMetaElement | null;
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      if (!el) {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        el = document.createElement("meta");
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        if (name.startsWith("og:")) el.setAttribute("property", name);
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        else el.setAttribute("name", name);
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        document.head.appendChild(el);
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      }
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      el.setAttribute("content", content);
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    };
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    setMeta("description", "From fintech integrations to faith-based pilgrimages, from corporate travel to side hustlers — see 13 ways travel businesses across Nigeria use Intraverse.");
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    setMeta("og:title", "13 Ways Travel Businesses Use Intraverse");
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    setMeta("og:description", "Fintechs, agents, corporates, independents, and developers — see how each one uses Intraverse to power travel in Nigeria.");
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    return () => { document.title = "Intraverse — B2B Travel Technology"; };
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  }, []);
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  return null;
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
}
