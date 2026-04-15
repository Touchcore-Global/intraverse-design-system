import {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  Plane, Globe, Building2, Rocket, Wallet, Plug, HardHat, Link2,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  Landmark, Lightbulb, CodeXml, Star, ClipboardList,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  Zap, Wrench, BarChart3,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  HelpCircle, BookOpen, FileText,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  PenLine, Newspaper,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  Building, Target, Globe2,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  Briefcase, Handshake,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  Phone, MessageCircle,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
export interface NavItem {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  label: string;
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  href: string;
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  icon: LucideIcon;
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  description?: string;
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  popular?: boolean;
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  comingSoon?: boolean;
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  isNew?: boolean;
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
export interface NavSection {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  header: string;
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  items: NavItem[];
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
export const productSections: NavSection[] = [
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    header: "SELLING & BOOKING",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    items: [
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      { label: "Agent Selling Platform", href: "/products/agent-platform", icon: Plane, description: "Search, book and manage all travel from one dashboard" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      { label: "Travx (White-Label Websites)", href: "/products/travx", icon: Globe, description: "Your branded, booking-enabled travel website" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      { label: "CoopX (Corporate Travel)", href: "/products/coopx", icon: Building2, description: "Corporate travel management with policy controls" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      { label: "Independents Programme", href: "/products/independents", icon: Rocket, description: "Start earning in travel — no agency required" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      { label: "Travel Links", href: "/products/travel-links", icon: Link2, description: "Sell travel with a shareable link — no website needed", isNew: true },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    ],
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    header: "PAYMENTS & INFRASTRUCTURE",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    items: [
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      { label: "Odiopay (BNPL)", href: "/products/odiopay", icon: Wallet, description: "Buy Now, Pay Later for travel bookings" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      { label: "Intraverse API", href: "/products/api", icon: Plug, description: "Embed travel booking into any platform" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      { label: "Supplier Engine", href: "/products/supplier-engine", icon: HardHat, description: "Multi-OID fare aggregation system", comingSoon: true },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    ],
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
];
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
export const solutionSections: NavSection[] = [
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    header: "BY AUDIENCE",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    items: [
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      { label: "Travel Agents", href: "/for/travel-agents", icon: Plane, description: "Tools built for professional travel agencies" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      { label: "Travel Independents", href: "/for/independents", icon: Rocket, description: "Start earning in travel — no agency required", popular: true },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      { label: "Businesses", href: "/for/businesses", icon: Building2, description: "Manage business travel spend efficiently" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      { label: "Corporates", href: "/for/corporates", icon: Landmark, description: "Enterprise travel with policy & approval controls" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      { label: "Fintechs", href: "/for/fintechs", icon: Landmark, description: "Embed travel as a native revenue stream" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      { label: "Tech Startups", href: "/for/startups", icon: Lightbulb, description: "Travel infrastructure for growing companies" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      { label: "Developers", href: "/for/developers", icon: CodeXml, description: "APIs and integration tools for builders" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    ],
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    header: "BY USE CASE",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    items: [
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      { label: "Sell Flights Online", href: "/for/travel-agents", icon: Plane, description: "Launch an online flight booking business" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      { label: "Embed Travel in Your App", href: "/for/developers", icon: Plug, description: "Add booking to any fintech or super-app" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      { label: "Manage Corporate Travel", href: "/for/corporates", icon: Building2, description: "Policy-controlled business travel" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      { label: "Earn as an Independent", href: "/for/independents", icon: Rocket, description: "Start a travel side-hustle with zero setup" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      { label: "Offer BNPL for Travel", href: "/for/fintechs", icon: Wallet, description: "Let customers pay in instalments" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      { label: "Browse All Use Cases", href: "/use-cases", icon: ClipboardList, description: "Explore how teams use Intraverse" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    ],
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
];
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
export const resourceSections: NavSection[] = [
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    header: "LEARN",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    items: [
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      { label: "Platform Features", href: "/features", icon: Zap, description: "Explore the full feature set" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      { label: "Tools", href: "/tools", icon: Wrench, description: "Interactive tools and calculators" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      { label: "Case Studies & Proof", href: "/proof", icon: BarChart3, description: "Results from real customers" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    ],
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    header: "SUPPORT",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    items: [
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      { label: "FAQ", href: "/faq", icon: HelpCircle, description: "Frequently asked questions" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      { label: "Help Centre", href: "/help", icon: BookOpen, description: "Guides, tutorials and support" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      { label: "API Documentation", href: "/docs", icon: FileText, description: "Developer docs and references" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    ],
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    header: "INSIGHTS",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    items: [
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      { label: "Blog", href: "/blog", icon: PenLine, description: "Insights, guides and industry news" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      { label: "News & Press", href: "/news", icon: Newspaper, description: "Latest announcements and press" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    ],
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
];
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
export const companySections: NavSection[] = [
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    header: "ABOUT",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    items: [
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      { label: "About Intraverse", href: "/about", icon: Building, description: "Our story and team" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      { label: "Our Mission", href: "/about#mission", icon: Target, description: "What drives us" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      { label: "Built in Lagos", href: "/about/built-in-lagos", icon: Globe2, description: "Proudly African-built" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    ],
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    header: "WORK WITH US",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    items: [
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      { label: "Careers", href: "/careers", icon: Briefcase, description: "Join our team" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      { label: "Partnerships", href: "/partnerships", icon: Handshake, description: "Collaborate with us" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    ],
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    header: "CONTACT",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    items: [
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      { label: "Contact Us", href: "/contact", icon: Phone, description: "Get in touch" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      { label: "WhatsApp", href: "https://wa.me/2349030002629", icon: MessageCircle, description: "Chat with us on WhatsApp" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    ],
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
];
