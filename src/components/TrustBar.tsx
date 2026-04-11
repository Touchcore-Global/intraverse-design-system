import iataLogo from "@/assets/iata-logo.png";
import amadeusLogo from "@/assets/amadeus-logo.png";
import sabreLogo from "@/assets/sabre-logo.png";
import travelportLogo from "@/assets/travelport-logo.png";

const partners = [
  { name: "IATA", logo: iataLogo },
  { name: "Amadeus", logo: amadeusLogo },
  { name: "Sabre", logo: sabreLogo },
  { name: "Galileo by Travelport", logo: travelportLogo },
];

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
              key={partner.name}
              className="grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="h-10 md:h-12 w-auto object-contain"
                loading="lazy"
                width={120}
                height={48}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
