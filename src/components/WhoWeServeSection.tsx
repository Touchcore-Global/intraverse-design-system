import { Plane, Building2, Landmark, Rocket, Lightbulb, CodeXml, ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

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
  },
];

export const WhoWeServeSection = () => {
  const { ref, revealClass } = useScrollReveal();

  return (
    <section className="py-16 md:py-24 bg-[hsl(216,60%,97%)]">
      <div
        ref={ref}
        className={`container mx-auto px-4 transition-all duration-700 ease-out ${revealClass}`}
        style={{ maxWidth: "1200px" }}
      >
        <h2
          className="text-[32px] md:text-[48px] font-[660] leading-tight tracking-[-2px] text-center mb-4"
          style={{ color: "rgb(13, 27, 42)" }}
        >
          Built for Everyone Who Sells, Buys, or Builds Travel
        </h2>
        <p
          className="text-center text-base md:text-lg max-w-[700px] mx-auto mb-10 md:mb-14"
          style={{ color: "rgb(116, 113, 122)" }}
        >
          From established travel agencies to corporate finance teams, from individuals starting out to developers building the next big travel product — Intraverse powers them all. Find the path that fits your business.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`relative bg-card rounded-xl p-8 transition-all duration-300 hover:-translate-y-1 group ${
                  item.featured
                    ? "border-2 border-primary shadow-md"
                    : "border border-border shadow-sm hover:border-primary hover:shadow-lg"
                }`}
                style={{
                  boxShadow: item.featured
                    ? "0 4px 16px rgba(30,97,220,0.12)"
                    : undefined,
                }}
              >
                {item.featured && (
                  <span className="absolute top-4 right-4 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-wide">
                    <Star className="w-3 h-3 fill-current" />
                    Most Popular
                  </span>
                )}

                <Icon className="w-12 h-12 text-primary mb-5" strokeWidth={1.5} />

                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm font-semibold text-foreground/90 mb-3">{item.headline}</p>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{item.body}</p>
                <p className="text-xs font-medium text-primary mb-5">{item.products}</p>

                <Link
                  to={item.href}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:underline"
                >
                  {item.cta}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            );
          })}
        </div>

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
