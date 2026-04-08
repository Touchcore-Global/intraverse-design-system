import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Abstract background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent blur-3xl translate-y-1/2 -translate-x-1/4" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      <div className="container relative mx-auto px-4 py-20 lg:py-32 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] xl:text-[80px] font-[660] leading-[1.1] tracking-tight max-w-5xl mx-auto text-foreground">
          200+ Travel Agents Use Intraverse to Sell Flights, Hotels, Tours &amp; Packages From One Dashboard
        </h1>

        <p className="mt-8 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-muted-foreground">
          Intraverse aggregates flight inventory from GDS systems (Amadeus, Sabre, Galileo), NDC connections,
          consolidators, and other aggregators — plus hotels and tours from leading global suppliers — all from
          a single dashboard. Search inventory, compare prices across suppliers, book, and issue — without
          switching between systems. IATA-accredited. Built for Nigerian agents.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="hero" size="xl" className="cta-responsive min-h-[48px]">
            Book a Demo
          </Button>
          <Button variant="whatsapp" size="xl" className="cta-responsive min-h-[48px]">
            <MessageCircle className="h-5 w-5" />
            Chat on WhatsApp
          </Button>
        </div>

        <p className="mt-4 text-sm text-muted-foreground">
          15-minute demo • No commitment • Free
        </p>
      </div>
    </section>
  );
};
