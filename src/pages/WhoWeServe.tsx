import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  Plane,
  Building2,
  Landmark,
  Rocket,
  Lightbulb,
  CodeXml,
  Check,
  Star,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";


const audiences = [
  {
    icon: Plane,
    title: "Travel Agents",
    description:
      "If you run a travel agency — large or small — Intraverse is your operating system. Aggregate flight inventory from every major source, sell hotels and tours from global suppliers, and manage your entire business from one dashboard.",
    benefits: [
      "Aggregated flights from GDS + NDC + consolidators + aggregators",
      "Hotels and tours from leading global suppliers",
      "White-label website (Travx) at ₦120,000/month",
    ],
    cta: "Explore for Travel Agents",
    href: "/for/travel-agents",
    featured: false,
  },
  {
    icon: Building2,
    title: "Businesses",
    description:
      "If your team books travel for work, you're a business that needs Intraverse. Stop juggling employee bookings, expense reports, and reimbursements. Start managing it like a process.",
    benefits: [
      "Approval workflows for every booking",
      "Travel policy enforcement",
      "Consolidated billing and reporting",
    ],
    cta: "Explore for Businesses",
    href: "/for/businesses",
    featured: false,
  },
  {
    icon: Landmark,
    title: "Corporates",
    description:
      "For enterprises with complex travel needs, multi-department structures, and serious governance requirements. CoopX Enterprise scales to your organisation.",
    benefits: [
      "Multi-level approval chains",
      "Enterprise reporting and analytics",
      "Dedicated account management",
    ],
    cta: "Explore for Corporates",
    href: "/for/corporates",
    featured: false,
  },
  {
    icon: Rocket,
    title: "Travel Independents",
    description:
      "You don't need to own an agency to earn in travel. The Independents Programme gives you real IATA-backed technology to sell flights, hotels, and tours — and earn commissions on every booking.",
    benefits: [
      "Sell from real GDS, NDC, and consolidator inventory",
      "Earn commissions on every booking",
      "Start with zero capital, zero experience",
    ],
    cta: "Start Earning Today",
    href: "/for/independents",
    featured: true,
  },
  {
    icon: Lightbulb,
    title: "Tech Startups",
    description:
      "Building a travel product? Skip the years of supplier negotiations and infrastructure. Build on Intraverse's aggregated inventory through our API — and explore co-build partnerships with our team.",
    benefits: [
      "API access to aggregated flights, hotels, tours",
      "Co-build partnership opportunities",
      "Skip years of IATA and supplier negotiations",
    ],
    cta: "Explore Partnerships",
    href: "/for/startups",
    featured: false,
  },
  {
    icon: CodeXml,
    title: "Developers",
    description:
      "RESTful API access to real travel inventory. Comprehensive documentation, sandbox environment, and a developer team that actually responds. Build anything travel-related.",
    benefits: [
      "Search, booking, and ticketing endpoints",
      "Sandbox environment for testing",
      "Webhooks and full documentation",
    ],
    cta: "View API Docs",
    href: "/for/developers",
    featured: false,
  },
];

function RevealBlock({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { ref, revealClass } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${revealClass} ${className}`}
    >
      {children}
    </div>
  );
}

const WhoWeServe = () => {
  useEffect(() => {
    document.title =
      "Who We Serve | Travel Agents, Businesses, Corporates, Independents, Startups & Developers | Intraverse";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Intraverse powers travel agents, businesses, corporates, independent travel entrepreneurs, tech startups, and developers. Find the path built for you."
      );
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="h-16" />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden section-gradient-blue">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent blur-3xl translate-y-1/2 -translate-x-1/4" />
          <svg
            className="absolute inset-0 w-full h-full opacity-[0.03]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="wws-grid"
                x="0"
                y="0"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#wws-grid)" />
          </svg>
        </div>

        <div
          className="container relative mx-auto px-4 py-20 lg:py-28 text-center"
          style={{ maxWidth: "1200px" }}
        >
          <RevealBlock>
            <h1
              className="text-3xl sm:text-4xl md:text-[64px] font-[660] leading-[1.1] md:leading-[76px] tracking-[-2px] max-w-5xl mx-auto"
              style={{ color: "rgb(23, 19, 33)" }}
            >
              One Platform. Six Audiences. Built for All of Travel.
            </h1>
            <p
              className="mt-8 text-base sm:text-lg md:text-xl font-normal max-w-3xl mx-auto leading-relaxed"
              style={{ color: "rgb(116, 113, 122)" }}
            >
              Travel is bigger than just travel agencies. It's the businesses
              that send their teams on the road. The corporates managing global
              travel programmes. The individuals turning their networks into
              income streams. The startups building the next generation of travel
              products. The developers connecting it all together. Intraverse
              powers every one of them. Choose your path below.
            </p>
          </RevealBlock>
        </div>
      </section>

      {/* ── AUDIENCE GRID ── */}
      <section className="py-16 md:py-24 bg-[hsl(216,60%,97%)]">
        <div
          className="container mx-auto px-4"
          style={{ maxWidth: "1200px" }}
        >
          <RevealBlock>
            <h2
              className="text-3xl sm:text-4xl md:text-[48px] md:leading-[56px] font-[660] tracking-[-2px] text-center mb-3"
              style={{ color: "rgb(13, 27, 42)" }}
            >
              Choose Your Path
            </h2>
            <p className="text-center text-muted-foreground text-sm md:text-base mb-14 max-w-lg mx-auto">
              Six dedicated paths. One platform. Find yours.
            </p>
          </RevealBlock>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {audiences.map((item) => {
              const Icon = item.icon;
              return (
                <RevealBlock key={item.title}>
                  <div
                    className={`relative bg-card rounded-2xl p-8 md:p-10 h-full transition-all duration-300 hover:-translate-y-1 group ${
                      item.featured
                        ? "border-2 border-primary shadow-md"
                        : "border border-border shadow-sm hover:border-primary hover:shadow-lg"
                    }`}
                  >
                    {item.featured && (
                      <span className="absolute top-5 right-5 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-wide">
                        <Star className="w-3 h-3 fill-current" />
                        Most Popular
                      </span>
                    )}

                    <Icon
                      className="w-14 h-14 md:w-16 md:h-16 text-primary mb-6"
                      strokeWidth={1.5}
                    />

                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                      {item.title}
                    </h3>

                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-5">
                      {item.description}
                    </p>

                    <div className="space-y-3 mb-7">
                      {item.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                            <Check className="w-3 h-3 text-primary" />
                          </div>
                          <p className="text-sm text-foreground/80">
                            {benefit}
                          </p>
                        </div>
                      ))}
                    </div>

                    <Link to={item.href}>
                      <Button
                        variant={item.featured ? "hero" : "default"}
                        className="w-full sm:w-auto"
                      >
                        {item.cta}
                      </Button>
                    </Link>
                  </div>
                </RevealBlock>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-16 md:py-24 bg-background">
        <div
          className="container mx-auto px-4 text-center"
          style={{ maxWidth: "800px" }}
        >
          <RevealBlock>
            <h2
              className="text-3xl sm:text-4xl md:text-[48px] md:leading-[56px] font-[660] tracking-[-2px] mb-4"
              style={{ color: "rgb(13, 27, 42)" }}
            >
              Not Sure Which Path Is Right for You?
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
              Talk to our team. We'll help you figure out which Intraverse
              product or programme fits your situation — in 15 minutes, with no
              commitment.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="hero"
                size="xl"
                className="cta-responsive min-h-[48px]"
              >
                Book a Discovery Call
              </Button>
              <Button
                variant="whatsapp"
                size="xl"
                className="cta-responsive min-h-[48px]"
              >
                <MessageCircle className="h-5 w-5" />
                Chat With Us on WhatsApp
              </Button>
            </div>
          </RevealBlock>
        </div>
      </section>

      <Footer />
      <WhatsAppFab />
    </div>
  );
};

export default WhoWeServe;
