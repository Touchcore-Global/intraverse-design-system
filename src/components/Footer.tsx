import { Link } from "react-router-dom";
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
    { label: "Agent Platform", href: "/agent-platform" },
    { label: "Travx", href: "/travx" },
    { label: "CoopX", href: "/coopx" },
    { label: "Independents", href: "/independents" },
    { label: "Supplier Engine", href: "/supplier-engine" },
  ],
  "Who We Serve": [
    { label: "Travel Agents", href: "/for/travel-agents" },
    { label: "Businesses", href: "/for/businesses" },
    { label: "Corporates", href: "/for/corporates" },
    { label: "Independents", href: "/for/independents" },
    { label: "Startups", href: "/for/startups" },
    { label: "Developers", href: "/for/developers" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Features", href: "/features" },
    { label: "Proof", href: "/proof" },
    { label: "FAQ", href: "/faq" },
  ],
  Connect: [
    { label: "WhatsApp", href: "https://wa.me/message" },
    { label: "LinkedIn", href: "https://linkedin.com/company/intraverse" },
    { label: "Twitter", href: "https://twitter.com/intraverse" },
    { label: "Instagram", href: "https://instagram.com/intraverse" },
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
