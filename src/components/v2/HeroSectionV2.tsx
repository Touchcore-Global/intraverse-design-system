import { Button } from "@/components/ui/button";
import { DEMO_URL } from "@/lib/constants";

const partners = [
  "Tzopal", "Whogofly", "Wright Gateway", "Lutfu Travels", "Coastline",
  "Neso", "Leisure Affairs", "Terminal Seven", "Travio", "Blue Paradise",
];

export const HeroSectionV2 = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle abstract geometric pattern in light blue */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-100"
        style={{
          background:
            "radial-gradient(circle at 15% 20%, #F0F5FC 0%, transparent 45%), radial-gradient(circle at 85% 80%, #F0F5FC 0%, transparent 45%)",
        }}
      />
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="hero-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#F0F5FC" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>

      <div className="container relative mx-auto px-4 py-20 lg:py-32 text-center">
        {/* Tagline */}
        <p
          className="mb-6 font-semibold uppercase"
          style={{
            color: "#1E61DC",
            fontSize: "18px",
            letterSpacing: "0.05em",
          }}
        >
          Finally, real travel infrastructure for Africa.
        </p>

        {/* Headline */}
        <h1
          className="mx-auto font-bold leading-[1.1] text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px]"
          style={{
            color: "#0D1B2A",
            maxWidth: "800px",
          }}
        >
          The Platform Behind Africa's Next Generation of Travel Businesses
        </h1>

        {/* Subheadline */}
        <p
          className="mx-auto mt-6 text-[16px] md:text-[18px]"
          style={{
            color: "#5A6A7A",
            maxWidth: "680px",
            lineHeight: 1.7,
          }}
        >
          Intraverse gives travel agents, independents, corporates, fintechs, and
          developers the tools to sell flights, hotels, tours, and packages from
          global suppliers — all from one IATA-accredited platform. Built in Lagos.
          Powering travel businesses across the continent.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="xl"
            className="min-h-[48px] text-white border-0 font-semibold shadow-md hover:shadow-lg transition-shadow"
            style={{
              background: "#0D1B2A",
              borderRadius: "8px",
              padding: "14px 28px",
            }}
            asChild
          >
            <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">
              Book a Demo
            </a>
          </Button>
          <Button
            size="xl"
            variant="outline"
            className="min-h-[48px] font-semibold bg-white hover:bg-[#F0F5FC]"
            style={{
              color: "#0D1B2A",
              border: "2px solid #0D1B2A",
              borderRadius: "8px",
              padding: "14px 28px",
            }}
            asChild
          >
            <a href="https://intraverse.app/signup" target="_blank" rel="noopener noreferrer">
              Start Free
            </a>
          </Button>
        </div>

        {/* Trust line */}
        <p
          className="mt-6"
          style={{ color: "#94A3B8", fontSize: "14px" }}
        >
          IATA-accredited • 200+ active agents • Free starter plan • No credit card required
        </p>

        {/* Video */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div
            className="relative aspect-video rounded-2xl overflow-hidden p-[2px]"
            style={{
              background:
                "linear-gradient(135deg, hsl(280 90% 60%), hsl(220 95% 55%), hsl(190 95% 50%), hsl(330 90% 60%))",
            }}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-foreground/90">
              <video className="w-full h-full object-cover" controls playsInline preload="metadata">
                <source src="https://res.cloudinary.com/demzrmxhz/video/upload/v1762167461/Travx-video_fmbarv.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* Partner scroller */}
        <div className="mt-12 overflow-hidden">
          <p className="text-center text-xs uppercase tracking-widest mb-6" style={{ color: "#5A6A7A" }}>
            Trusted by leading travel brands
          </p>
          <div className="relative">
            <div className="flex animate-scroll-left w-max gap-8 hover:[animation-play-state:paused]">
              {[...partners, ...partners].map((partner, i) => (
                <div
                  key={`${partner}-${i}`}
                  className="flex-shrink-0 px-6 py-3 rounded-lg bg-white border border-[#F0F5FC] shadow-sm"
                >
                  <span className="text-sm font-semibold whitespace-nowrap" style={{ color: "#0D1B2A" }}>
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
