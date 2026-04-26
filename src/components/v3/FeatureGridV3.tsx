import { Plane, Hotel, Map, Package, Wallet, BarChart3, Globe, Zap } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const features = [
  {
    icon: Plane,
    title: "Flights",
    desc: "Sell NDC and GDS fares from 700+ airlines with real-time availability and instant ticketing.",
  },
  {
    icon: Hotel,
    title: "Hotels",
    desc: "Access 1.5M+ properties worldwide with negotiated rates, instant confirmation, and flexible cancellation.",
  },
  {
    icon: Map,
    title: "Tours & Activities",
    desc: "Curated experiences in 200+ destinations — from city tours to multi-day expeditions.",
  },
  {
    icon: Package,
    title: "Dynamic Packages",
    desc: "Bundle flights, hotels, and tours into custom packages with one click. Margins, your way.",
  },
  {
    icon: Wallet,
    title: "Built-in Wallet",
    desc: "Top up once, book anywhere. No more stranded payments or supplier-by-supplier accounts.",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    desc: "Track sales, margins, top destinations, and agent performance with live dashboards.",
  },
  {
    icon: Globe,
    title: "Branded Storefront",
    desc: "Launch your own booking website under your brand — no developers, no code.",
  },
  {
    icon: Zap,
    title: "Open API",
    desc: "Build your own apps and integrations on top of Intraverse with our developer-first API.",
  },
];

export const FeatureGridV3 = () => {
  const { ref, revealClass } = useScrollReveal();

  return (
    <section className="py-20 md:py-28 bg-background">
      <div
        ref={ref}
        className={`container mx-auto px-4 md:px-8 transition-all duration-700 ease-out ${revealClass}`}
      >
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs uppercase tracking-[0.2em] font-semibold mb-6 text-primary">
            Everything in one platform
          </p>
          <h2
            className="font-ubuntu text-foreground"
            style={{
              fontSize: "clamp(2rem, 6vw, 4rem)",
              fontWeight: 660,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
            }}
          >
            The operating system for modern travel businesses
          </h2>
          <p
            className="mt-6 max-w-2xl mx-auto text-muted-foreground"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              lineHeight: 1.4,
            }}
          >
            Stop stitching together ten different tools. Intraverse gives you one platform to source, sell, and scale every kind of travel product.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="group relative p-6 bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg"
              >
                <div className="mb-5 inline-flex items-center justify-center w-12 h-12 bg-primary/5 group-hover:bg-primary/10 transition-colors">
                  <Icon className="w-6 h-6 text-primary" strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 tracking-tight">
                  {f.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
