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
      <div className="container mx-auto px-4">
        <p className="text-center text-sm md:text-base text-muted-foreground mb-10 max-w-2xl mx-auto">
          Trusted by 200+ travel agents selling flights, hotels, tours &amp; packages across Nigeria
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
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
