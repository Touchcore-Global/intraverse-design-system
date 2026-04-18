import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { WHATSAPP_URL, DEMO_URL } from "@/lib/constants";

export const FinalCTAV2 = () => {
  const { ref, revealClass } = useScrollReveal();
  return (
    <section
      className="py-20 relative overflow-hidden text-white"
      style={{
        background:
          "linear-gradient(135deg, hsl(280 90% 45%) 0%, hsl(220 95% 50%) 30%, hsl(190 95% 45%) 60%, hsl(330 90% 50%) 100%)",
        backgroundSize: "200% 200%",
        animation: "gradient-shift 10s ease infinite",
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-30" style={{ background: "hsl(35 95% 60%)" }} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-30" style={{ background: "hsl(150 80% 50%)" }} />
      </div>

      <div ref={ref} className={`container mx-auto px-4 text-center relative transition-all duration-700 ease-out ${revealClass}`}>
        <h2 className="text-3xl sm:text-4xl md:text-[80px] md:leading-[96px] font-[660] tracking-[-2px] mb-4 text-white">
          Start selling travel faster today
        </h2>
        <p className="max-w-2xl mx-auto mb-10 text-white/85 text-sm md:text-base">
          Book a 15-minute demo and see how Intraverse can help you sell more flights, hotels, tours,
          and packages from one platform. No commitment. No pressure.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            size="xl"
            className="cta-responsive min-h-[48px] bg-white text-foreground hover:bg-white/90 rounded-none font-semibold border-0 shadow-lg"
            asChild
          >
            <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">Book a Free Demo</a>
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
