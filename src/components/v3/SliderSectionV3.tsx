import { useState } from "react";
import { ChevronLeft, ChevronRight, Plane, Building2, Users, Code2, Briefcase, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";
import audienceAgents from "@/assets/v3/audience-agents.png";
import audienceFintechs from "@/assets/v3/audience-fintechs.jpg";
import audienceIndependents from "@/assets/v3/audience-independents.jpg";
import audienceDevelopers from "@/assets/v3/audience-developers.jpg";
import audienceCorporates from "@/assets/v3/audience-corporates.jpg";
import audienceStartups from "@/assets/v3/audience-startups.jpg";

type Slide = {
  tag: string;
  title: string;
  description: string;
  icon: React.ElementType;
  accent: string;
  image: string;
};

const slides: Slide[] = [
  {
    tag: "For Travel Agents",
    title: "Sell trips faster with one connected workspace",
    description:
      "Quote, book, and collect payment for flights, hotels, and tours from a single dashboard built for African travel pros.",
    icon: Plane,
    accent: "from-primary/20 to-primary/5",
    image: audienceAgents,
  },
  {
    tag: "For Fintechs",
    title: "Embed travel into your financial product",
    description:
      "Add bookings, BNPL, and rewards to your app with our APIs — no airline contracts or GDS integrations required.",
    icon: Building2,
    accent: "from-accent/20 to-accent/5",
    image: audienceFintechs,
  },
  {
    tag: "For Independents",
    title: "Turn your network into recurring income",
    description:
      "Share Travel Links on WhatsApp and social, earn commission on every booking, and track everything in real time.",
    icon: Users,
    accent: "from-primary/20 to-primary/5",
    image: audienceIndependents,
  },
  {
    tag: "For Developers",
    title: "One API for the entire travel stack",
    description:
      "Modern REST endpoints, sandbox environment, and SDKs that let you ship travel features in days, not quarters.",
    icon: Code2,
    accent: "from-accent/20 to-accent/5",
    image: audienceDevelopers,
  },
  {
    tag: "For Corporates",
    title: "Manage business travel without the chaos",
    description:
      "Policy-aware booking, consolidated invoicing, and approval flows that keep finance and travelers happy.",
    icon: Briefcase,
    accent: "from-primary/20 to-primary/5",
    image: audienceCorporates,
  },
  {
    tag: "For Startups",
    title: "Launch your travel brand in weeks",
    description:
      "White-label storefronts, payments, and supplier inventory so you can focus on growth, not infrastructure.",
    icon: Rocket,
    accent: "from-accent/20 to-accent/5",
    image: audienceStartups,
  },
];

export const SliderSectionV3 = () => {
  const [active, setActive] = useState(0);

  const next = () => setActive((i) => (i + 1) % slides.length);
  const prev = () => setActive((i) => (i - 1 + slides.length) % slides.length);

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <p className="text-sm font-medium text-primary mb-4 uppercase tracking-wider">
            Built for every team
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            One platform.
            <br />
            <span className="text-muted-foreground">Endless use cases.</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-border">
          {slides.map((slide, i) => (
            <button
              key={slide.tag}
              onClick={() => setActive(i)}
              className={cn(
                "px-4 py-3 text-sm font-medium transition-all duration-200 border-b-2 -mb-px",
                active === i
                  ? "border-primary text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              )}
            >
              {slide.tag}
            </button>
          ))}
        </div>

        {/* Slide */}
        <div className="relative">
          <div
            className={cn(
              "relative overflow-hidden bg-gradient-to-br border border-border min-h-[420px] lg:min-h-[480px] transition-all duration-500",
              slides[active].accent
            )}
          >
            <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12 h-full">
              {/* Left: copy */}
              <div className="flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 mb-6 w-fit">
                  <div className="p-2 bg-background/80 backdrop-blur">
                    {(() => {
                      const Icon = slides[active].icon;
                      return <Icon className="w-5 h-5 text-primary" />;
                    })()}
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {slides[active].tag}
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                  {slides[active].title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {slides[active].description}
                </p>
                <div className="flex items-center gap-4">
                  <button
                    onClick={prev}
                    aria-label="Previous slide"
                    className="p-3 border border-border bg-background hover:bg-muted transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Next slide"
                    className="p-3 border border-border bg-background hover:bg-muted transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <span className="text-sm text-muted-foreground ml-2">
                    {String(active + 1).padStart(2, "0")} /{" "}
                    {String(slides.length).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* Right: visual */}
              <div className="relative hidden lg:flex items-center justify-center">
                <div className="relative w-full h-full min-h-[380px] overflow-hidden rounded-lg border border-border/50 shadow-lg">
                  <img
                    src={slides[active].image}
                    alt={slides[active].tag}
                    loading="lazy"
                    width={1280}
                    height={960}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Progress dots (mobile) */}
          <div className="flex justify-center gap-2 mt-6 lg:hidden">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={cn(
                  "h-1.5 transition-all duration-300",
                  active === i ? "w-8 bg-primary" : "w-1.5 bg-muted"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
