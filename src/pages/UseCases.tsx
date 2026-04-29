import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { whatsappUrl, DEMO_URL } from "@/lib/constants";
import { SEO } from "@/components/SEO";

type FilterCategory = "All" | "Travel Agents" | "Independents" | "Businesses" | "Fintechs" | "Tech/Developers";

const filters: FilterCategory[] = ["All", "Travel Agents", "Independents", "Businesses", "Fintechs", "Tech/Developers"];

interface UseCase {
  number: string;
  title: string;
  problem: string;
  solution: string;
  products: string[];
  link: string;
  categories: FilterCategory[];
}

const useCases: UseCase[] = [
  {
    number: "01",
    title: "Fintechs Adding Travel as a Revenue Stream",
    problem: "You're a Nigerian fintech, neobank, or super-app with millions of users. Your customers spend on flights, hotels, and travel - but every Naira goes to competitors. You want to capture that revenue, but building travel infrastructure means 2+ years of IATA accreditation, GDS contracts, supplier negotiations, and BSP settlement setup. By the time you launch, your customers are already booking elsewhere.",
    solution: "Plug Intraverse's API directly into your fintech app. Offer in-app flight, hotel, and tour booking powered by aggregated GDS, NDC, and consolidator inventory. Activate Odiopay BNPL natively so users can book travel and pay in instalments - directly from their existing wallet or card on file. Launch in months, not years.",
    products: ["Intraverse API", "Odiopay BNPL", "Partnership Programme"],
    link: "/for/developers",
    categories: ["All", "Fintechs", "Tech/Developers"],
  },
  {
    number: "02",
    title: "Faith-Based & Pilgrimage Travel",
    problem: "Organising group travel for Hajj, Umrah, Jerusalem pilgrimages, and church missions means juggling 50+ passengers, group fares, hotel blocks, and visa coordination - usually on spreadsheets.",
    solution: "Search group fares across multiple suppliers, manage passenger manifests, share live itineraries with the whole group, and process bulk payments via virtual accounts.",
    products: ["Agent Selling Platform", "Travel Links", "Manage Team"],
    link: "/for/travel-agents",
    categories: ["All", "Travel Agents"],
  },
  {
    number: "03",
    title: "Student & Education Travel",
    problem: "Selling student flights, study-abroad packages, and university travel requires special fares and parent-friendly payment options.",
    solution: "Access student airline fares through aggregated GDS/NDC inventory. Offer Pay Later via Odiopay. Build study-abroad packages with flight, hotel, and tour bundles.",
    products: ["Agent Selling Platform", "Odiopay", "Create & Sell Packages"],
    link: "/for/travel-agents",
    categories: ["All", "Travel Agents"],
  },
  {
    number: "04",
    title: "Medical Tourism",
    problem: "Coordinating international medical trips means flights, accommodation near hospitals, transfers, and family logistics - all needing to be perfect.",
    solution: "Bundle complete medical travel packages with flights, hospital-area hotels, and ground transfers. Share live itineraries with patients and families.",
    products: ["Create & Manage Trips", "Share Live Itineraries", "Travx"],
    link: "/for/travel-agents",
    categories: ["All", "Travel Agents"],
  },
  {
    number: "05",
    title: "Side Hustlers Starting From Zero",
    problem: "You want to earn from travel but have no agency, no IATA, and no capital.",
    solution: "Join the Independents Programme, get IATA-backed inventory access, and start selling flights, hotels, and tours to your network. Earn commissions on every booking.",
    products: ["Independents Programme"],
    link: "/for/independents",
    categories: ["All", "Independents"],
  },
  {
    number: "06",
    title: "Growing a Multi-Branch Agency",
    problem: "Your agency has multiple locations, multiple staff, and zero visibility into who's selling what.",
    solution: "Centralise operations with a single workspace, role-based team management, branch-level reporting, and consolidated wallet management.",
    products: ["Setup Workspace", "Manage Team", "Performance Dashboard"],
    link: "/for/travel-agents",
    categories: ["All", "Travel Agents"],
  },
  {
    number: "07",
    title: "Corporate Travel Programmes",
    problem: "Your company spends millions on employee travel with zero policy enforcement and no consolidated reporting.",
    solution: "Deploy CoopX with approval workflows, policy gates, and consolidated billing. Cut travel spend by 20-30% in the first quarter.",
    products: ["CoopX"],
    link: "/for/corporates",
    categories: ["All", "Businesses"],
  },
  {
    number: "08",
    title: "Social Media Travel Sellers",
    problem: "You have an Instagram audience interested in travel deals but no way to sell to them at scale.",
    solution: "Generate Travel Links for any deal or package, post on Instagram/WhatsApp/TikTok, and let customers click, book, and pay directly. Track every conversion.",
    products: ["Travel Links", "Independents Programme"],
    link: "/products/travel-links",
    categories: ["All", "Independents"],
  },
  {
    number: "09",
    title: "Building a Travel App or Marketplace",
    problem: "You're building a consumer travel product but don't want to spend 2 years on IATA, GDS contracts, and supplier negotiations.",
    solution: "Plug into Intraverse's API. Get aggregated flight, hotel, and tour inventory. Launch in months, not years. Co-build partnerships available.",
    products: ["Intraverse API", "Partnership Programme"],
    link: "/for/startups",
    categories: ["All", "Tech/Developers"],
  },
  {
    number: "10",
    title: "Adding BNPL to Close More Sales",
    problem: "Customers love your fares but don't have the full amount upfront. You're losing bookings.",
    solution: "Activate Odiopay BNPL - Fare Lock holds today's price while customers pay in instalments. Pay Later enables post-ticketing repayment. Close every sale.",
    products: ["Odiopay", "Agent Selling Platform"],
    link: "/products/odiopay",
    categories: ["All", "Travel Agents"],
  },
  {
    number: "11",
    title: "Going From WhatsApp-Only to Full Online Agency",
    problem: "You run your business on WhatsApp. You're invisible on Google. Custom websites cost thousands and take months.",
    solution: "Get a Travx white-label website at $50/month - fully branded, booking-enabled, live in days. Customers find you, book, and pay online.",
    products: ["Travx"],
    link: "/for/travel-agents",
    categories: ["All", "Travel Agents"],
  },
  {
    number: "12",
    title: "Visa & Document Processing",
    problem: "Visa applications are manual, error-prone, and cost you hours per booking.",
    solution: "Use Intraverse's visa processing tools to automate applications, document collection, and status tracking alongside the flight booking workflow.",
    products: ["Visa Processing", "Agent Selling Platform"],
    link: "/for/travel-agents",
    categories: ["All", "Travel Agents"],
  },
  {
    number: "13",
    title: "Selling Curated Travel Packages",
    problem: "You want to sell signature travel experiences (Dubai shopping trips, Zanzibar getaways, Cape Town tours) but building each one from scratch takes hours.",
    solution: "Use Create & Sell Your Own Packages to bundle flights, hotels, and tours into branded packages. Sell them via Travel Links or your Travx website.",
    products: ["Create & Sell Packages", "Travel Links", "Travx"],
    link: "/for/travel-agents",
    categories: ["All", "Travel Agents", "Independents"],
  },
];

function UseCaseCard({ useCase }: { useCase: UseCase }) {
  return (
    <a
      href={useCase.link}
      className="group block rounded-2xl bg-card border border-border p-8 transition-all duration-300 hover:border-primary hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(30,97,220,0.10)]"
    >
      {/* Number badge */}
      <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center mb-5">
        <span className="text-sm font-bold text-primary-foreground">{useCase.number}</span>
      </div>

      <h3 className="h3-global text-foreground mb-5">
        {useCase.title}
      </h3>

      <div className="space-y-4 mb-6">
        <div>
          <p className="text-sm font-semibold text-foreground mb-1">The Problem:</p>
          <p className="text-sm text-muted-foreground leading-relaxed">{useCase.problem}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground mb-1">The Solution:</p>
          <p className="text-sm text-muted-foreground leading-relaxed">{useCase.solution}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground mb-1">Products:</p>
          <div className="flex flex-wrap gap-2 mt-1">
            {useCase.products.map((product) => (
              <span
                key={product}
                className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
              >
                {product}
              </span>
            ))}
          </div>
        </div>
      </div>

      <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
        Learn more <ArrowRight className="w-4 h-4" />
      </span>
    </a>
  );
}

export default function UseCases() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("All");
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const { ref: heroRef, revealClass: heroReveal } = useScrollReveal();
  const { ref: ctaRef, revealClass: ctaReveal } = useScrollReveal();

  useEffect(() => {
    const onScroll = () => setScrolledPastHero(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const filtered = activeFilter === "All"
    ? useCases
    : useCases.filter((uc) => uc.categories.includes(activeFilter));

  return (
    <>
      <SEO
        title="Use Cases — How Travel Businesses Use Intraverse"
        description="See how travel agencies, independent agents, corporate travel managers, fintechs, and startups use Intraverse to sell travel, manage bookings, and grow revenue."
        canonical="https://intraverse.africa/use-cases"
      />
      <Navbar />
      <main className="pt-16">
        {/* SEO Meta via Helmet-style - handled in head for SSR, here for SPA */}
        {/* Hero */}
        <section className="relative overflow-hidden bg-accent py-20 md:py-28">
          {/* Grid pattern background */}
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

          <div ref={heroRef} className={`container mx-auto px-4 relative z-10 text-center transition-all duration-700 ease-out ${heroReveal}`}>
            <h1 className="font-[660] tracking-[-2px] text-foreground mb-6">
              However You Sell Travel - We've Built It For You
            </h1>
            <p className="max-w-3xl mx-auto text-muted-foreground text-base md:text-lg leading-relaxed mb-10">
              From fintech integrations to faith-based pilgrimages, from solo side hustlers to multi-branch agencies - Intraverse powers every kind of travel business in Nigeria. Find the use case that matches yours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" className="cta-responsive min-h-[48px]" asChild>
                <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">Book a Demo</a>
              </Button>
              <Button
                variant="whatsapp"
                size="xl"
                className="cta-responsive min-h-[48px]"
                asChild
              >
                <a href={whatsappUrl("Hi, I'd like to learn more about Intraverse")}>
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Filter Tabs - sticky */}
        <div className={`sticky top-16 z-30 bg-background/95 backdrop-blur-sm border-b border-border transition-shadow ${scrolledPastHero ? "shadow-sm" : ""}`}>
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-hide">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === filter
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Use Case Grid */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {filtered.map((uc) => (
                <UseCaseCard key={uc.number} useCase={uc} />
              ))}
            </div>
            {filtered.length === 0 && (
              <p className="text-center text-muted-foreground py-12">No use cases found for this filter.</p>
            )}
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div ref={ctaRef} className={`container mx-auto px-4 text-center transition-all duration-700 ease-out ${ctaReveal}`}>
            <h2 className="text-3xl sm:text-4xl md:text-[80px] md:leading-[96px] font-[660] tracking-[-2px] mb-4 text-primary-foreground">
              Don't See Your Use Case? Let's Talk.
            </h2>
            <p className="max-w-2xl mx-auto mb-10 text-primary-foreground/80 text-sm md:text-base">
              Every travel business is different. Tell us yours and we'll show you exactly how Intraverse fits.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="outline"
                size="xl"
                className="cta-responsive min-h-[48px] bg-primary-foreground text-primary border-primary-foreground hover:bg-primary-foreground/90 hover:text-foreground rounded-none font-semibold"
              >
                Book a Discovery Call
              </Button>
              <Button
                variant="whatsapp"
                size="xl"
                className="cta-responsive min-h-[48px]"
                asChild
              >
                <a href={whatsappUrl("Hi, I'd like to learn more about Intraverse")}>
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* SEO: Set document title and meta */}
      <SetPageMeta />
    </>
  );
}

function SetPageMeta() {
  return null;
}
