import { Lock, Shield, CreditCard, Clock } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const features = [
  {
    icon: Lock,
    title: "BSP Settlement",
    description: "Every ticket settled through proper IATA BSP channels.",
    gradient: "linear-gradient(135deg, hsl(220 95% 60%), hsl(190 90% 55%))",
  },
  {
    icon: Shield,
    title: "Data Protection Compliant",
    description: "Your data is protected under international data protection standards.",
    gradient: "linear-gradient(135deg, hsl(160 75% 45%), hsl(190 85% 50%))",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "PCI-compliant processing for all transactions.",
    gradient: "linear-gradient(135deg, hsl(280 80% 60%), hsl(330 85% 60%))",
  },
  {
    icon: Clock,
    title: "99.5% Uptime",
    description: "Your business runs on availability.",
    gradient: "linear-gradient(135deg, hsl(35 100% 55%), hsl(15 95% 60%))",
  },
];

export const SecuritySectionV2 = () => {
  const { ref, revealClass } = useScrollReveal();
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, hsl(160 70% 95%) 0%, hsl(190 85% 95%) 30%, hsl(220 95% 95%) 70%, hsl(280 80% 96%) 100%)",
        backgroundSize: "200% 200%",
        animation: "gradient-shift 14s ease infinite",
      }}
    >
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(190 90% 60%), transparent 70%)" }}
      />

      <div ref={ref} className={`container mx-auto px-4 text-center transition-all duration-700 ease-out ${revealClass} relative`}>
        <h2
          className="text-3xl sm:text-4xl md:text-[80px] md:leading-[96px] font-[660] tracking-[-2px] mb-12"
          style={{
            background: "linear-gradient(135deg, hsl(160 75% 30%), hsl(190 85% 35%), hsl(220 95% 40%))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Your Money. Your Data. Protected.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="rounded-2xl p-[2px] hover:-translate-y-1 transition-transform"
                style={{ background: f.gradient }}
              >
                <div className="bg-card rounded-2xl p-6 flex items-start gap-4 text-left h-full">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-md"
                    style={{ background: f.gradient }}
                  >
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{f.title}</h3>
                    <p className="text-sm text-muted-foreground">{f.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
