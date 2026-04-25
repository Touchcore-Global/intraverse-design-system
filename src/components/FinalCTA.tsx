import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { WHATSAPP_URL, DEMO_URL } from "@/lib/constants";
import { trackEvent, CTA_EVENTS } from "@/lib/analytics";

export const FinalCTA = () => {
  const { ref, revealClass } = useScrollReveal();
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div ref={ref} className={`container mx-auto px-4 text-center transition-all duration-700 ease-out ${revealClass}`}>
        <h2 className="text-3xl sm:text-4xl md:text-[80px] md:leading-[96px] font-[660] tracking-[-2px] mb-4 text-primary-foreground">
          Start selling travel faster today
        </h2>
        <p className="max-w-2xl mx-auto mb-10 text-primary-foreground/80 text-sm md:text-base">
          Book a 15-minute demo and see how Intraverse can help you sell more flights, hotels, tours,
          and packages from one platform. No commitment. No pressure.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            variant="outline"
            size="xl"
            className="cta-responsive min-h-[48px] bg-primary-foreground text-primary border-primary-foreground hover:bg-primary-foreground/90 hover:text-foreground rounded-none font-semibold" asChild
          >
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="book_demo"
              data-page="index"
              onClick={() => trackEvent(CTA_EVENTS.demoClick, { location: "final_cta", page: "index" })}
            >
              Book a Free Demo
            </a>
          </Button>
          <Button
            variant="whatsapp"
            size="xl"
            className="cta-responsive min-h-[48px]"
           asChild>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="whatsapp"
              data-page="index"
              onClick={() => trackEvent(CTA_EVENTS.whatsappClick, { location: "final_cta", page: "index" })}
            >
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
            </a>
          </Button>
        </div>

      </div>
    </section>
  );
};
