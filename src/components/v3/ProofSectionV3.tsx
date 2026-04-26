import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const stats = [
  { value: "200+", label: "Travel businesses" },
  { value: "700+", label: "Airlines connected" },
  { value: "1.5M+", label: "Hotels worldwide" },
  { value: "24/7", label: "Ticketing & support" },
];

export const ProofSectionV3 = () => {
  const { ref, revealClass } = useScrollReveal();

  return (
    <section className="py-20 md:py-28 bg-foreground text-white relative overflow-hidden">
      {/* Decorative gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
          style={{ background: "hsl(280 90% 55%)" }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
          style={{ background: "hsl(190 95% 50%)" }}
        />
      </div>

      <div
        ref={ref}
        className={`container relative mx-auto px-4 md:px-8 transition-all duration-700 ease-out ${revealClass}`}
      >
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-xs uppercase tracking-[0.2em] font-semibold mb-6 text-white/60">
            Proof, not promises
          </p>
          <h2
            className="font-ubuntu text-white"
            style={{
              fontSize: "clamp(2rem, 6vw, 4rem)",
              fontWeight: 660,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
            }}
          >
            Trusted by travel businesses across Africa and beyond
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="font-ubuntu text-white mb-2"
                style={{
                  fontSize: "clamp(2.5rem, 7vw, 5rem)",
                  fontWeight: 660,
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>
              <p className="text-sm md:text-base text-white/70 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
