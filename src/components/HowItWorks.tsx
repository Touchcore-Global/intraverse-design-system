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
  },
  {
    number: "2",
    title: "Get Set Up",
    description:
      "Sign up on the platform and follow the guided simple steps to complete your profile. Most businesses are live within 24 hours.",
  },
  {
    number: "3",
    title: "Start Selling",
    description:
      "Search flights, hotels, tours, and packages from suppliers around the world, book for your customers, and manage your entire business from one platform.",
  },
];

export const HowItWorks = () => {
  const { ref, revealClass } = useScrollReveal();
  return (
    <section className="py-20 bg-accent">
      <div ref={ref} className={`container mx-auto px-4 text-center transition-all duration-700 ease-out ${revealClass}`}>
        <h2 className="text-section mb-12 text-[32px] sm:text-[48px] md:text-[60px] leading-tight">Start selling faster today</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
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
