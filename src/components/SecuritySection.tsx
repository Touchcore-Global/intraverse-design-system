import { Lock, Shield, CreditCard, Clock } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const features = [
  {
    icon: Lock,
    title: "BSP Settlement",
    description: "Every ticket settled through proper IATA BSP channels.",
  },
  {
    icon: Shield,
    title: "NDPR Compliant",
    description: "Data protected under Nigeria Data Protection Regulation.",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "PCI-compliant processing for all transactions.",
  },
  {
    icon: Clock,
    title: "99.5% Uptime",
    description: "Your business runs on availability.",
  },
];

export const SecuritySection = () => {
  const { ref, revealClass } = useScrollReveal();
  return (
    <section className="py-20 section-gradient-mint">
      <div ref={ref} className={`container mx-auto px-4 text-center transition-all duration-700 ease-out ${revealClass}`}>
        <h2 className="text-section mb-12">
          Your Money. Your Data. Protected.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className="brand-card flex items-start gap-4 text-left">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
