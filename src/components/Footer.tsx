import { Link } from "react-router-dom";
import { MessageCircle, Linkedin, Twitter, Instagram, Facebook, type LucideIcon } from "lucide-react";
import iataLogo from "@/assets/iata-logo.png";
import amadeusLogo from "@/assets/amadeus-logo.png";
import sabreLogo from "@/assets/sabre-logo.png";
import travelportLogo from "@/assets/travelport-logo.png";

const socialIcons: Record<string, LucideIcon> = {
  WhatsApp: MessageCircle,
  LinkedIn: Linkedin,
  "X (Twitter)": Twitter,
  Instagram: Instagram,
  Facebook: Facebook,
};

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
    { label: "Use Cases", href: "/use-cases" },
    { label: "Proof", href: "/proof" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact Us", href: "/contact" },
  ],
  Connect: [
    { label: "WhatsApp", href: "https://wa.me/2349030002629" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/intraversehq/" },
    { label: "X (Twitter)", href: "https://x.com/IntraverseHQ" },
    { label: "Instagram", href: "https://www.instagram.com/intraverse.africa" },
    { label: "Facebook", href: "https://www.facebook.com/intraverse.africa" },
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
                    {link.href.startsWith("http") ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[hsl(216,20%,66%)] hover:text-white transition-colors text-sm inline-flex items-center gap-2"
                      >
                        {socialIcons[link.label] && (() => {
                          const Icon = socialIcons[link.label];
                          return <Icon className="h-4 w-4" />;
                        })()}
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-[hsl(216,20%,66%)] hover:text-white transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    )}
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
                className="h-4 md:h-5.5 w-auto object-contain grayscale brightness-200 opacity-60"
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
