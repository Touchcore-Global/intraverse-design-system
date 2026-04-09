import { Play, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const VideoWalkthrough = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-section mb-8" style={{ fontSize: '80px', lineHeight: '1.1' }}>
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

        <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-sm md:text-base">
          This is a real booking on the Intraverse platform. No scripts. No staging. Just the tool
          your agency will use every day.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="hero" size="xl" className="cta-responsive min-h-[48px]">
            Book a Demo to Try It Yourself
          </Button>
          <Button variant="whatsapp" size="xl" className="cta-responsive min-h-[48px]">
            <MessageCircle className="h-5 w-5" />
            Chat on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};
