const partners = ["IATA", "Amadeus", "Sabre", "Galileo"];

export const TrustBar = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-wider">
          Trusted by industry leaders
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {partners.map((partner) => (
            <div
              key={partner}
              className="grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
            >
              <span className="text-2xl font-bold text-muted-foreground hover:text-foreground transition-colors">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
