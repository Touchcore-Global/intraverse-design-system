import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";
import { DEMO_URL } from "@/lib/constants";
import tzopalLogo from "@/assets/partners/tzopal.png";
import whogoflyLogo from "@/assets/partners/whogofly.png";
import wrightGatewayLogo from "@/assets/partners/wright-gateway.png";
import lutfuTravelsLogo from "@/assets/partners/lutfu-travels.png";
import coastlineLogo from "@/assets/partners/coastline.png";
import nesoLogo from "@/assets/partners/neso.png";
import leisureAffairsLogo from "@/assets/partners/leisure-affairs.png";
import terminalSevenLogo from "@/assets/partners/terminal-seven.png";
import travioLogo from "@/assets/partners/travio.png";
import blueParadiseLogo from "@/assets/partners/blue-paradise.png";

const partners = [
  { name: "Tzopal", logo: tzopalLogo },
  { name: "Whogofly", logo: whogoflyLogo },
  { name: "Wright Gateway", logo: wrightGatewayLogo },
  { name: "Lutfu Travels", logo: lutfuTravelsLogo },
  { name: "Coastline", logo: coastlineLogo },
  { name: "Neso", logo: nesoLogo },
  { name: "Leisure Affairs", logo: leisureAffairsLogo },
  { name: "Terminal Seven", logo: terminalSevenLogo },
  { name: "Travio", logo: travioLogo },
  { name: "Blue Paradise", logo: blueParadiseLogo },
];

export const HeroSectionV2 = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);
  const blob3Ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
    v.controls = true;
    v.currentTime = 0;
    v.play();
    setIsPlaying(true);
  };

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

      <div className="container relative mx-auto px-4 pt-[100px] text-center">

        <h1
          className="max-w-5xl mx-auto text-black font-ubuntu"
          style={{
            fontSize: "6rem",
            fontWeight: 660,
            letterSpacing: "-0.03em",
            lineHeight: 1.0416666667,
          }}
        >
          Sell travel. Skip the chaos.
        </h1>

        <p
          className="mt-6 lg:mt-8 font-normal max-w-3xl mx-auto"
          style={{
            color: "#74717a",
            fontSize: "2rem",
            fontWeight: 400,
            letterSpacing: "-0.02em",
            lineHeight: 1.125,
          }}
        >
          Sell it all from one AI powered platform. Easily.
        </p>

        <div className="mt-8 lg:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="xl"
            className="cta-responsive min-h-[48px] bg-black hover:bg-black/90 text-white border-0 rounded-none font-semibold shadow-lg hover:shadow-xl transition-shadow"
            asChild
          >
            <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">Book a Demo</a>
          </Button>
        </div>

        {/* Video */}
        <div className="mt-14 lg:mt-16 max-w-4xl mx-auto">
          <div
            className="relative aspect-video rounded-2xl overflow-hidden p-[2px]"
            style={{
              background:
                "linear-gradient(135deg, hsl(280 90% 60%), hsl(220 95% 55%), hsl(190 95% 50%), hsl(330 90% 60%))",
            }}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-foreground/90">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src="https://res.cloudinary.com/demzrmxhz/video/upload/v1762167461/Travx-video_fmbarv.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {!isPlaying && (
                <button
                  type="button"
                  onClick={handlePlay}
                  aria-label="Play video with sound"
                  className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors group"
                >
                  <span className="flex items-center justify-center w-[100px] h-[100px] rounded-full bg-white/95 shadow-2xl group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-black fill-black ml-1" />
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Partner scroller */}
        <div className="mt-16 lg:mt-20 -mx-4 overflow-hidden">
          <p className="text-center text-xs uppercase tracking-[0.2em] font-semibold mb-10 text-primary">
            Trusted by leading travel brands
          </p>
          <div className="relative">
            <div className="flex animate-scroll-left w-max gap-20 lg:gap-28 items-center hover:[animation-play-state:paused]">
              {[...partners, ...partners].map((partner, i) => (
                <div
                  key={`${partner.name}-${i}`}
                  className="flex-shrink-0 flex items-center justify-center h-24 lg:h-28 px-2"
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    loading="lazy"
                    width={512}
                    height={512}
                    className="h-full w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 [filter:brightness(0)_saturate(100%)_invert(9%)_sepia(29%)_saturate(2476%)_hue-rotate(190deg)_brightness(94%)_contrast(94%)]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
