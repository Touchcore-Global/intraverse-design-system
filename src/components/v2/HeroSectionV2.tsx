import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { DEMO_URL } from "@/lib/constants";

const partners = [
  "Tzopal", "Whogofly", "Wright Gateway", "Lutfu Travels", "Coastline",
  "Neso", "Leisure Affairs", "Terminal Seven", "Travio", "Blue Paradise",
];

export const HeroSectionV2 = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);
  const blob3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const scrollY = -rect.top;
      if (blob1Ref.current) blob1Ref.current.style.transform = `translate(25%, -50%) translateY(${scrollY * 0.15}px)`;
      if (blob2Ref.current) blob2Ref.current.style.transform = `translate(-25%, 50%) translateY(${scrollY * -0.1}px)`;
      if (blob3Ref.current) blob3Ref.current.style.transform = `translate(-50%, -50%) translateY(${scrollY * 0.08}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white"
    >

      <div className="container relative mx-auto px-4 pt-[45px] pb-14 lg:pt-[77px] lg:pb-24 text-center">
        <span className="inline-block mb-6 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white" style={{ background: "linear-gradient(90deg, hsl(280 90% 55%), hsl(330 90% 55%))" }}>
          ✨ One platform · Global inventory
        </span>

        <h1 className="text-[100px] font-[825] leading-[112px] tracking-[-3px] max-w-5xl mx-auto text-black font-ubuntu">
          Flights. Hotels. Tours. Packages.
        </h1>

        <p
          className="mt-8 text-base sm:text-lg md:text-[32px] md:leading-[36px] md:tracking-[-0.64px] font-normal max-w-3xl mx-auto mb-6"
          style={{ color: "rgb(60, 50, 90)" }}
        >
          Sell it all from one AI powered platform. Easily.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="xl"
            className="cta-responsive min-h-[48px] bg-black hover:bg-black/90 text-white border-0 rounded-none font-semibold shadow-lg hover:shadow-xl transition-shadow"
            asChild
          >
            <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">Book a Demo</a>
          </Button>
        </div>


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
          <p className="text-center text-xs uppercase tracking-widest mb-6" style={{ color: "rgb(90, 80, 120)" }}>
            Trusted by leading travel brands
          </p>
          <div className="relative">
            <div className="flex animate-scroll-left w-max gap-8 hover:[animation-play-state:paused]">
              {[...partners, ...partners].map((partner, i) => (
                <div
                  key={`${partner}-${i}`}
                  className="flex-shrink-0 px-6 py-3 rounded-lg bg-white/70 backdrop-blur border border-white/80 shadow-sm"
                >
                  <span className="text-sm font-semibold whitespace-nowrap" style={{ color: "rgb(60, 50, 90)" }}>
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
