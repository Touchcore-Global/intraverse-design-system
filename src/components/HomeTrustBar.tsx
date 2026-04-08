import { Button } from "@/components/ui/button";

const partners = [
  "IATA",
  "Amadeus",
  "Sabre",
  "Galileo",
  "NDC Partners",
  "Hotel Suppliers",
  "Tour Suppliers",
];

export const HomeTrustBar = () => {
  return (
    <section className="py-16 bg-accent">
      <div className="container mx-auto px-4 pl-[100px]">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[96px] font-[660] leading-[1.1] lg:leading-[100px] tracking-[-2.88px] text-left mb-6"
          style={{ color: 'rgb(23, 19, 33)' }}
        >
          Built for How Travel Is Sold
        </h2>
        <p
          className="text-left text-base sm:text-lg md:text-[32px] md:leading-[36px] md:tracking-[-0.64px] font-normal mb-6 max-w-2xl"
          style={{ color: 'rgb(116, 113, 122)' }}
        >
          Trusted by 200+ travel agents selling flights, hotels, tours &amp; packages across Nigeria
        </p>
        <div className="flex justify-start mb-10">
          <Button variant="hero" size="xl" className="cta-responsive min-h-[48px]">
            Try for Free
          </Button>
        </div>
        <div className="flex flex-wrap items-center justify-start gap-6 md:gap-10">
          {partners.map((partner) => (
            <div
              key={partner}
              className="grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer px-5 py-3 rounded-lg border border-border bg-background"
            >
              <span className="text-sm md:text-base font-semibold text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
