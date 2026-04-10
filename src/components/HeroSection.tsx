import { Button } from "@/components/ui/button";
import { MessageCircle, Play } from "lucide-react";

const partners = [
  "Tzopal", "Whogofly", "Wright Gateway", "Lutfu Travels", "Coastline",
  "Neso", "Leisure Affairs", "Terminal Seven", "Travio", "Blue Paradise",
];

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
        <h1 className="text-3xl sm:text-4xl md:text-[80px] font-[660] leading-[1.1] tracking-[-2px] max-w-5xl mx-auto" style={{ color: 'rgb(23, 19, 33)' }}>
          Flights. Hotels. Tours. Packages.
        </h1>

        <p className="mt-8 text-base sm:text-lg md:text-[32px] md:leading-[36px] md:tracking-[-0.64px] font-normal max-w-3xl mx-auto mb-6" style={{ color: 'rgb(116, 113, 122)' }}>
          Sell It All From One Platform. Easily.
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

        {/* Video placeholder */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-xl overflow-hidden bg-foreground/90">
            <video
              className="w-full h-full object-cover"
              controls
              playsInline
              preload="metadata"
              poster=""
            >
              <source src="https://res.cloudinary.com/demzrmxhz/video/upload/v1762167461/Travx-video_fmbarv.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Partner scroller */}
        <div className="mt-12 overflow-hidden">
          <p className="text-center text-xs uppercase tracking-widest text-muted-foreground mb-6">
            Trusted by leading travel brands
          </p>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            <div className="flex animate-scroll-left w-max gap-8 hover:[animation-play-state:paused]">
              {[...partners, ...partners].map((partner, i) => (
                <div
                  key={`${partner}-${i}`}
                  className="flex-shrink-0 px-6 py-3 rounded-lg border border-border bg-card"
                >
                  <span className="text-sm font-semibold text-muted-foreground whitespace-nowrap">
                    {partner}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
