import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { WHATSAPP_URL, DEMO_URL } from "@/lib/constants";

const steps = [
  {
    number: "1",
    title: "Book a Demo",
    description:
      "Tell us about your business. We'll walk you through the platform.",
    gradient: "linear-gradient(135deg, hsl(220 95% 60%), hsl(190 90% 55%))",
  },
  {
    number: "2",
    title: "Get Set Up",
    description:
      "Sign up on the platform and follow the guided simple steps to complete your profile. Most businesses are live within 24 hours.",
    gradient: "linear-gradient(135deg, hsl(280 80% 60%), hsl(330 85% 60%))",
  },
  {
    number: "3",
    title: "Start Selling",
    description:
      "Search flights, hotels, tours, and packages from suppliers around the world, book for your customers, and manage your entire business from one platform.",
    gradient: "linear-gradient(135deg, hsl(35 100% 55%), hsl(15 95% 60%))",
  },
];

export const HowItWorksV2 = () => {
  const { ref, revealClass } = useScrollReveal();
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, hsl(35 95% 95%) 0%, hsl(330 85% 96%) 35%, hsl(280 80% 96%) 70%, hsl(220 95% 96%) 100%)",
        backgroundSize: "200% 200%",
        animation: "gradient-shift 12s ease infinite",
      }}
    >
      <div
        aria-hidden
        className="absolute -top-32 -left-20 w-96 h-96 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(280 80% 70%), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -right-20 w-96 h-96 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(35 100% 65%), transparent 70%)" }}
      />

      <div ref={ref} className={`container mx-auto px-4 text-center transition-all duration-700 ease-out ${revealClass} relative`}>
        <h2 className="mb-12 text-[32px] sm:text-[48px] md:text-[60px] leading-tight font-bold text-black">
          Start selling faster today
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col items-center bg-card/70 backdrop-blur rounded-2xl p-8 border border-border/50 shadow-lg hover:-translate-y-1 transition-transform"
            >
              <div
                className="w-16 h-16 rounded-2xl text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4 shadow-lg"
                style={{ background: step.gradient }}
              >
                {step.number}
              </div>
              <h3 className="h3-global text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="hero" size="xl" className="cta-responsive min-h-[48px]" asChild>
            <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">Book Your Demo Now</a>
          </Button>
          <Button variant="whatsapp" size="xl" className="cta-responsive min-h-[48px]" asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
