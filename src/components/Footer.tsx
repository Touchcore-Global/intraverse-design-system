import { Link } from "react-router-dom";
import { MessageCircle, Linkedin, Twitter, Instagram, Facebook, type LucideIcon } from "lucide-react";
import iataLogo from "@/assets/iata-logo.png";
import amadeusLogo from "@/assets/amadeus-logo.png";
import sabreLogo from "@/assets/sabre-logo.png";
import travelportLogo from "@/assets/travelport-logo.png";
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
const socialIcons: Record<string, LucideIcon> = {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  WhatsApp: MessageCircle,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  LinkedIn: Linkedin,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  "X (Twitter)": Twitter,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  Instagram: Instagram,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  Facebook: Facebook,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
};
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
const footerBadges = [
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { name: "IATA", logo: iataLogo },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { name: "Amadeus", logo: amadeusLogo },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { name: "Sabre", logo: sabreLogo },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { name: "Galileo by Travelport", logo: travelportLogo },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
];
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
const footerLinks = {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  Products: [
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    { label: "Agent Platform", href: "/agent-platform" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    { label: "Travx", href: "/travx" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    { label: "CoopX", href: "/coopx" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    { label: "Independents", href: "/independents" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    { label: "Supplier Engine", href: "/supplier-engine" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  ],
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  "Who We Serve": [
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    { label: "Travel Agents", href: "/for/travel-agents" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    { label: "Businesses", href: "/for/businesses" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    { label: "Corporates", href: "/for/corporates" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    { label: "Independents", href: "/for/independents" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    { label: "Startups", href: "/for/startups" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    { label: "Developers", href: "/for/developers" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  ],
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  Company: [
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    { label: "About", href: "/about" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    { label: "Features", href: "/features" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    { label: "Use Cases", href: "/use-cases" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    { label: "Proof", href: "/proof" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    { label: "FAQ", href: "/faq" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    { label: "Help Centre", href: "/help" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    { label: "Contact Us", href: "/contact" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  ],
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  Connect: [
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    { label: "WhatsApp", href: WHATSAPP_URL },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    { label: "LinkedIn", href: "https://www.linkedin.com/company/intraversehq/" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    { label: "X (Twitter)", href: "https://x.com/IntraverseHQ" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    { label: "Instagram", href: "https://www.instagram.com/intraverse.africa" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    { label: "Facebook", href: "https://www.facebook.com/intraverse.africa" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  ],
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
};
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
export const Footer = () => {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  return (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    <footer className="bg-secondary text-secondary-foreground">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <div className="container mx-auto px-4 py-16">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        {/* Four columns */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          {Object.entries(footerLinks).map(([category, links]) => (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <div key={category}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <h3 className="text-white font-semibold text-lg mb-4">{category}</h3>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <ul className="space-y-3">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                {links.map((link) => (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <li key={link.label}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    {link.href.startsWith("http") ? (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      <a
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                        href={link.href}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                        target="_blank"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                        rel="noopener noreferrer"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                        className="text-[hsl(216,20%,66%)] hover:text-white transition-colors text-sm inline-flex items-center gap-2"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      >
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                        {socialIcons[link.label] && (() => {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                          const Icon = socialIcons[link.label];
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                          return <Icon className="h-4 w-4" />;
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                        })()}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                        {link.label}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      </a>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    ) : (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      <Link
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                        to={link.href}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                        className="text-[hsl(216,20%,66%)] hover:text-white transition-colors text-sm"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      >
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                        {link.label}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      </Link>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    )}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  </li>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                ))}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </ul>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          ))}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        {/* Partner badges */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <div className="mt-12 pt-8 border-t border-white/10">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <div className="flex flex-wrap items-center justify-center gap-8 mb-8">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            {footerBadges.map((badge) => (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <img
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                key={badge.name}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                src={badge.logo}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                alt={`${badge.name} logo`}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                className="h-[17px] md:h-[22px] w-auto object-contain grayscale brightness-200 opacity-60"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                loading="lazy"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            ))}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <p className="text-[hsl(216,20%,66%)] text-sm text-center">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            © 2026 Intraverse. All rights reserved.
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    </footer>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  );
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
};
