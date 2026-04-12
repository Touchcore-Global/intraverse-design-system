import { Play, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const VideoWalkthrough = () => {
  const { ref, revealClass } = useScrollReveal();
  return (
    <section className="py-20 section-gradient-dark shimmer-overlay text-primary-foreground">
      <div ref={ref} className={`container mx-auto px-4 text-center transition-all duration-700 ease-out ${revealClass}`}>
        <h2 className="text-section mb-8 text-[32px] sm:text-[48px] md:text-[60px] leading-tight !text-primary-foreground">
          See How Agents Book Faster
        </h2>

        {/* Video placeholder */}
        <div className="relative max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden bg-secondary mb-6">
          <div className="absolute inset-0 bg-secondary/80 flex items-center justify-center">
            <button
              className="w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-110 transition-transform"
              aria-label="Play video"
            >
              <Play className="w-8 h-8 ml-1" />
            </button>
          </div>
        </div>

        <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-8 text-sm md:text-base">
          This is a real booking on the Intraverse platform. No scripts. No staging. Just the tool
          your agency will use every day.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="outline" size="xl" className="cta-responsive min-h-[48px] bg-primary-foreground text-foreground border-primary-foreground hover:bg-primary-foreground/90 rounded-none font-semibold">
            Book a Demo to Try It Yourself
          </Button>
          <Button variant="outline" size="xl" className="cta-responsive min-h-[48px] bg-primary-foreground text-foreground border-primary-foreground hover:bg-primary-foreground/90 rounded-none font-semibold">
            <MessageCircle className="h-5 w-5" />
            Chat on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};
