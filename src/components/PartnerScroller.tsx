const partners = [
  "IATA",
  "Amadeus",
  "Sabre",
  "Galileo",
  "Travelport",
  "NDC",
  "Hotelbeds",
  "Booking.com",
  "Expedia",
  "Viator",
];

export const PartnerScroller = () => {
  return (
    <section className="py-10 bg-background overflow-hidden">
      <p className="text-center text-xs uppercase tracking-widest text-muted-foreground mb-6">
        Trusted by leading travel brands
      </p>
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex animate-scroll-left w-max gap-8">
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
    </section>
  );
};
