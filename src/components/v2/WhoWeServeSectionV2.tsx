import { Plane, Building2, Landmark, Rocket, Lightbulb, CodeXml, ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const audiences = [
  {
    icon: Plane,
    title: "Travel Agents",
    headline: "Sell more flights, hotels, and tours from one platform.",
    body: "From two-person agencies to multi-branch operations — Intraverse gives you aggregated flight inventory from GDS, NDC, consolidators, and aggregators, plus hotels and tours from leading global suppliers.",
    products: "Agent Selling Platform • Travx • Odiopay",
    cta: "Explore for Travel Agents",
    href: "/for/travel-agents",
    featured: false,
    gradient: "linear-gradient(135deg, hsl(220 95% 60%), hsl(190 90% 55%))",
    tint: "hsl(220 95% 97%)",
  },
  {
    icon: Building2,
    title: "Businesses",
    headline: "Streamline how your team books and manages travel.",
    body: "Whether you're a 10-person SME or a 100-person growing company, Intraverse helps you take control of business travel. Replace ad-hoc booking with a structured platform.",
    products: "CoopX • Agent Selling Platform",
    cta: "Explore for Businesses",
    href: "/for/businesses",
    featured: false,
    gradient: "linear-gradient(135deg, hsl(280 80% 60%), hsl(330 85% 60%))",
    tint: "hsl(290 80% 97%)",
  },
  {
    icon: Landmark,
    title: "Corporates",
    headline: "Enterprise-grade travel management for African companies.",
    body: "For large corporates with complex travel needs — multi-department approvals, policy enforcement, consolidated billing, and full reporting. Built to handle scale, governance, and compliance.",
    products: "CoopX Enterprise",
    cta: "Explore for Corporates",
    href: "/for/corporates",
    featured: false,
    gradient: "linear-gradient(135deg, hsl(160 75% 45%), hsl(190 85% 50%))",
    tint: "hsl(170 70% 96%)",
  },
  {
    icon: Rocket,
    title: "Travel Independents",
    headline: "Earn from travel. No agency required. No experience needed.",
    body: "Graduates, side hustlers, and aspiring entrepreneurs — sell flights, hotels, and tours using IATA-backed technology and earn real commissions on every booking. Start with zero overhead.",
    products: "Independents Programme",
    cta: "Start Earning Today",
    href: "/for/independents",
    featured: true,
    gradient: "linear-gradient(135deg, hsl(35 100% 55%), hsl(15 95% 60%))",
    tint: "hsl(35 100% 96%)",
  },
  {
    icon: Lightbulb,
    title: "Tech Startups",
    headline: "Build your travel product on Intraverse's infrastructure.",
    body: "Launching a travel app, marketplace, or fintech product? Skip the years of supplier negotiations and IATA accreditation. Build on our aggregated inventory through our API.",
    products: "API + Partnership Programme",
    cta: "Explore Partnerships",
    href: "/for/startups",
    featured: false,
    gradient: "linear-gradient(135deg, hsl(50 95% 55%), hsl(30 95% 55%))",
    tint: "hsl(48 95% 96%)",
  },
  {
    icon: Landmark,
    title: "Fintechs",
    headline: "Add travel as a revenue stream — natively, in weeks.",
    body: "Neobanks, super-apps, and digital wallets use our API to embed travel booking inside their apps. Capture the revenue your users are already spending on flights, hotels, and tours.",
    products: "Intraverse API + Odiopay BNPL + Partnership Programme",
    cta: "Explore Fintech Partnerships",
    href: "/for/fintechs",
    featured: false,
    gradient: "linear-gradient(135deg, hsl(330 85% 60%), hsl(280 80% 60%))",
    tint: "hsl(330 85% 97%)",
  },
  {
    icon: CodeXml,
    title: "Developers",
    headline: "The travel API that just works — backed by real inventory.",
    body: "RESTful API access to aggregated flights, hotels, and tours from global suppliers. Comprehensive documentation, sandbox environment, and dedicated technical support.",
    products: "Intraverse API",
    cta: "View API Docs",
    href: "/for/developers",
    featured: false,
    gradient: "linear-gradient(135deg, hsl(200 90% 50%), hsl(260 80% 60%))",
    tint: "hsl(220 90% 97%)",
  },
];

export const WhoWeServeSectionV2 = () => {
  const { ref, revealClass } = useScrollReveal();
  const isMobile = useIsMobile();

  const renderCard = (item: typeof audiences[0]) => {
    const Icon = item.icon;
    return (
      <div
        key={item.title}
        className="relative rounded-2xl p-[2px] h-full transition-all duration-300 hover:-translate-y-1 group"
        style={{ background: item.gradient }}
      >
        <div
          className="relative bg-card rounded-2xl p-7 h-full overflow-hidden"
          style={{
            boxShadow: item.featured
              ? "0 12px 32px -8px hsl(35 100% 55% / 0.35)"
              : "0 6px 20px -8px hsl(220 50% 30% / 0.18)",
          }}
        >
          <div
            aria-hidden
            className="absolute -top-16 -right-16 w-40 h-40 rounded-full opacity-20 blur-2xl group-hover:opacity-40 transition-opacity"
            style={{ background: item.gradient }}
          />
          {item.featured && (
            <span
              className="absolute top-4 right-4 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-primary-foreground text-[11px] font-bold uppercase tracking-wide"
              style={{ background: item.gradient }}
            >
              <Star className="w-3 h-3 fill-current" />
              Most Popular
            </span>
          )}
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
            style={{ background: item.gradient }}
          >
            <Icon className="w-6 h-6 text-primary-foreground" strokeWidth={2} />
          </div>
          <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
          <p className="text-sm font-semibold text-foreground/90 mb-3">{item.headline}</p>
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{item.body}</p>
          <p
            className="text-xs font-bold mb-5 px-2.5 py-1 rounded-md inline-block"
            style={{ background: item.tint, color: "hsl(var(--foreground))" }}
          >
            {item.products}
          </p>
          <Link
            to={item.href}
            className="inline-flex items-center gap-1.5 text-sm font-bold hover:underline"
            style={{
              background: item.gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {item.cta}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-primary" />
          </Link>
        </div>
      </div>
    );
  };

  return (
    <section
      className="py-16 md:py-24 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, hsl(220 95% 96%) 0%, hsl(280 85% 96%) 35%, hsl(330 85% 96%) 65%, hsl(35 95% 95%) 100%)",
        backgroundSize: "200% 200%",
        animation: "gradient-shift 14s ease infinite",
      }}
    >
      <div
        ref={ref}
        className={`container mx-auto px-4 transition-all duration-700 ease-out ${revealClass} relative`}
        style={{ maxWidth: "1200px" }}
      >
        <h2
          className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-center mb-4"
          style={{
            background: "linear-gradient(135deg, hsl(220 95% 35%), hsl(280 80% 45%), hsl(330 85% 50%))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Built for Everyone Who Sells, Buys, or Builds Travel
        </h2>
        <p className="text-center text-base md:text-lg max-w-[700px] mx-auto mb-10 md:mb-14 text-muted-foreground">
          From established travel agencies to corporate finance teams, from individuals starting out to developers building the next big travel product — Intraverse powers them all. Find the path that fits your business.
        </p>

        {isMobile ? (
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-3">
              {audiences.map((item) => (
                <CarouselItem key={item.title} className="pl-3 basis-[85%]">
                  {renderCard(item)}
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {audiences.map((item) => renderCard(item))}
          </div>
        )}

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-1">Not sure which path is right for you?</p>
          <Link
            to="/who-we-serve"
            className="inline-flex items-center gap-1 text-sm font-bold text-primary hover:underline"
          >
            See all audiences and find your fit
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
