import {
  Plane, Globe, Building2, Rocket, Wallet, Plug, HardHat, Link2,
  Landmark, Lightbulb, CodeXml, Star, ClipboardList,
  Zap, Wrench, BarChart3,
  HelpCircle, BookOpen, FileText,
  PenLine, Newspaper,
  Building, Target, Globe2,
  Briefcase, Handshake,
  Phone, MessageCircle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";
import usecaseFlights from "@/assets/nav/usecase-flights.jpg";
import usecaseEmbed from "@/assets/nav/usecase-embed.jpg";
import usecaseCorporate from "@/assets/nav/usecase-corporate.jpg";
import usecaseIndependent from "@/assets/nav/usecase-independent.jpg";
import usecaseBnpl from "@/assets/nav/usecase-bnpl.jpg";
import usecaseAll from "@/assets/nav/usecase-all.jpg";
import sectionSelling from "@/assets/nav/section-selling.jpg";
import sectionPayments from "@/assets/nav/section-payments.jpg";

export interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
  description?: string;
  popular?: boolean;
  comingSoon?: boolean;
  isNew?: boolean;
  /** Optional thumbnail image (used by image-based mega menu sections like Solutions use cases). */
  image?: string;
  /** Stable analytics id. When set, clicks fire `nav_product_cta_click`. */
  trackingId?: string;
}

export interface NavSection {
  header: string;
  items: NavItem[];
  /** Optional banner image rendered above the section's items in the default mega menu. */
  image?: string;
}

export const productSections: NavSection[] = [
  {
    header: "SELLING & BOOKING",
    image: sectionSelling,
    items: [
      { label: "Agent Selling Platform", href: "/products/agent-platform", icon: Plane, description: "Search, book and manage all travel from one dashboard", trackingId: "agent_platform" },
      { label: "Travx (White-Label Websites)", href: "/products/travx", icon: Globe, description: "Your branded, booking-enabled travel website", trackingId: "travx" },
      { label: "CoopX (Corporate Travel)", href: "/products/coopx", icon: Building2, description: "Corporate travel management with policy controls", trackingId: "coopx" },
      { label: "Independents Programme", href: "/products/independents", icon: Rocket, description: "Start earning in travel — no agency required", trackingId: "independents" },
      { label: "Travel Links", href: "/products/travel-links", icon: Link2, description: "Sell travel with a shareable link — no website needed", isNew: true },
    ],
  },
  {
    header: "PAYMENTS & INFRASTRUCTURE",
    image: sectionPayments,
    items: [
      { label: "Odiopay (BNPL)", href: "/products/odiopay", icon: Wallet, description: "Buy Now, Pay Later for travel bookings" },
      { label: "Intraverse API", href: "/products/api", icon: Plug, description: "Embed travel booking into any platform" },
      { label: "Supplier Engine", href: "/products/supplier-engine", icon: HardHat, description: "Multi-OID fare aggregation system", comingSoon: true },
    ],
  },
];

export const solutionSections: NavSection[] = [
  {
    header: "BY AUDIENCE",
    items: [
      { label: "Travel Agents", href: "/for/travel-agents", icon: Plane, description: "Tools built for professional travel agencies" },
      { label: "Travel Independents", href: "/for/independents", icon: Rocket, description: "Start earning in travel — no agency required", popular: true },
      { label: "Businesses", href: "/for/businesses", icon: Building2, description: "Manage business travel spend efficiently" },
      { label: "Corporates", href: "/for/corporates", icon: Landmark, description: "Enterprise travel with policy & approval controls" },
      { label: "Fintechs", href: "/for/fintechs", icon: Landmark, description: "Embed travel as a native revenue stream" },
      { label: "Tech Startups", href: "/for/startups", icon: Lightbulb, description: "Travel infrastructure for growing companies" },
      { label: "Developers", href: "/for/developers", icon: CodeXml, description: "APIs and integration tools for builders" },
    ],
  },
  {
    header: "BY USE CASE",
    items: [
      { label: "Sell Flights Online", href: "/for/travel-agents", icon: Plane, description: "Launch an online flight booking business", image: usecaseFlights },
      { label: "Embed Travel in Your App", href: "/for/developers", icon: Plug, description: "Add booking to any fintech or super-app", image: usecaseEmbed },
      { label: "Manage Corporate Travel", href: "/for/corporates", icon: Building2, description: "Policy-controlled business travel", image: usecaseCorporate },
      { label: "Earn as an Independent", href: "/for/independents", icon: Rocket, description: "Start a travel side-hustle with zero setup", image: usecaseIndependent },
      { label: "Offer BNPL for Travel", href: "/for/fintechs", icon: Wallet, description: "Let customers pay in instalments", image: usecaseBnpl },
      { label: "Browse All Use Cases", href: "/use-cases", icon: ClipboardList, description: "Explore how teams use Intraverse", image: usecaseAll },
    ],
  },
];

export const resourceSections: NavSection[] = [
  {
    header: "LEARN",
    items: [
      { label: "Platform Features", href: "/features", icon: Zap, description: "Explore the full feature set" },
      { label: "Tools", href: "/tools", icon: Wrench, description: "Interactive tools and calculators" },
      { label: "Case Studies & Proof", href: "/proof", icon: BarChart3, description: "Results from real customers" },
    ],
  },
  {
    header: "SUPPORT",
    items: [
      { label: "FAQ", href: "/faq", icon: HelpCircle, description: "Frequently asked questions" },
      { label: "Help Centre", href: "/help", icon: BookOpen, description: "Guides, tutorials and support" },
      { label: "API Documentation", href: "/docs", icon: FileText, description: "Developer docs and references" },
    ],
  },
  {
    header: "INSIGHTS",
    items: [
      { label: "Blog", href: "/blog", icon: PenLine, description: "Insights, guides and industry news" },
      { label: "News & Press", href: "/news", icon: Newspaper, description: "Latest announcements and press" },
    ],
  },
];

export const companySections: NavSection[] = [
  {
    header: "ABOUT",
    items: [
      { label: "About Intraverse", href: "/about", icon: Building, description: "Our story and team" },
      { label: "Our Mission", href: "/about#mission", icon: Target, description: "What drives us" },
      { label: "Built in Lagos", href: "/about/built-in-lagos", icon: Globe2, description: "Proudly African-built" },
    ],
  },
  {
    header: "WORK WITH US",
    items: [
      { label: "Careers", href: "/careers", icon: Briefcase, description: "Join our team" },
      { label: "Partnerships", href: "/partnerships", icon: Handshake, description: "Collaborate with us" },
    ],
  },
  {
    header: "CONTACT",
    items: [
      { label: "Contact Us", href: "/contact", icon: Phone, description: "Get in touch" },
      { label: "WhatsApp", href: WHATSAPP_URL, icon: MessageCircle, description: "Chat with us on WhatsApp" },
    ],
  },
];
