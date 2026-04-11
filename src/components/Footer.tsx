import { MessageCircle } from "lucide-react";
import iataLogo from "@/assets/iata-logo.png";
import amadeusLogo from "@/assets/amadeus-logo.png";
import sabreLogo from "@/assets/sabre-logo.png";
import travelportLogo from "@/assets/travelport-logo.png";

const footerBadges = [
  { name: "IATA", logo: iataLogo },
  { name: "Amadeus", logo: amadeusLogo },
  { name: "Sabre", logo: sabreLogo },
  { name: "Galileo by Travelport", logo: travelportLogo },
];

const footerLinks = {
  Products: [
    { label: "Agent Platform", href: "#" },
    { label: "Travx", href: "#" },
    { label: "CoopX", href: "#" },
    { label: "Independents", href: "#" },
    { label: "Odiopay", href: "#" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
  ],
  Resources: [
    { label: "Blog", href: "#" },
    { label: "Help Centre", href: "#" },
    { label: "API Docs", href: "#" },
  ],
  Connect: [
    { label: "WhatsApp", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Twitter", href: "#" },
    { label: "Instagram", href: "#" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        {/* Four columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold text-lg mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[hsl(216,20%,66%)] hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Partner badges */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-wrap items-center justify-center gap-8 mb-8">
            {footerBadges.map((badge) => (
              <img
                key={badge.name}
                src={badge.logo}
                alt={`${badge.name} logo`}
                className="h-6 md:h-8 w-auto object-contain grayscale brightness-200 opacity-60"
                loading="lazy"
              />
            ))}
          </div>
          <p className="text-[hsl(216,20%,66%)] text-sm text-center">
            © 2026 Intraverse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
