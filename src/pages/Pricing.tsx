import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  Accordion,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  AccordionContent,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  AccordionItem,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  AccordionTrigger,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
} from "@/components/ui/accordion";
import {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  Check,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  X as XIcon,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  Star,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  Building2,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  Landmark,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  Plug,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  Handshake,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  Globe,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
} from "lucide-react";
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
/* ------------------------------------------------------------------ */
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
/*  Currency helpers                                                    */
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
/* ------------------------------------------------------------------ */
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
const NGN_RATE = 1500; // approximate USD → NGN
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
function toNaira(usd: number): string {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  if (usd === 0) return "₦0";
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  return "₦" + (usd * NGN_RATE).toLocaleString();
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
type Currency = "USD" | "NGN";
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
function formatPrice(usd: number, currency: Currency): string {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  if (currency === "USD") return `$${usd}`;
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  return toNaira(usd);
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
/* ------------------------------------------------------------------ */
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
/*  Data                                                               */
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
/* ------------------------------------------------------------------ */
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
const tiers = [
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    name: "Starter",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    monthlyUsd: 0,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    annualUsd: 0,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    monthlyPeriod: "/month forever",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    annualPeriod: "/month forever",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    tagline: "For new Independents and small agents testing the waters",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    includes: null,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    features: [
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      "Search & book flights from multiple sources",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      "Basic passenger management",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      "Email booking confirmations",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      "1 user account",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      "Community support",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      "Access to knowledge base",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    ],
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    cta: "Start Free",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    ctaVariant: "outline" as const,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    note: null,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    popular: false,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    name: "Agency",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    monthlyUsd: 20,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    annualUsd: 16,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    monthlyPeriod: "/month",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    annualPeriod: "/month, billed annually",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    tagline: "For travel agencies of all sizes",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    includes: "Everything in Starter, plus:",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    features: [
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      "Unlimited bookings",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      "Shareable Travel Links",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      "Custom travel packages",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      "Unlimited team members",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      "Multi-branch reporting",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      "Role-based access control",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      "Dedicated account manager",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      "Phone & WhatsApp support",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      "API access (read-only)",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      "Advanced analytics dashboard",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      "Commission tracking dashboard",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      "Odiopay BNPL integration",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      "Branded invoices & receipts",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    ],
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    cta: "Start 14-Day Free Trial",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    ctaVariant: "default" as const,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    note: "No credit card required",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    popular: true,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    name: "Enterprise",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    monthlyUsd: null,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    annualUsd: null,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    monthlyPeriod: "Contact Sales",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    annualPeriod: "Contact Sales",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    tagline:
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      "For Corporates, Fintechs, Tech Startups, and large-volume partners",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    includes: null,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    features: null,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    products: [
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      { icon: Building2, label: "CoopX Enterprise" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      { icon: Landmark, label: "Fintech Partnerships" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      { icon: Plug, label: "Intraverse API" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      { icon: Handshake, label: "Custom Integrations" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    ],
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    extras: [
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      "Custom contract terms & SLAs",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      "Dedicated engineering support",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      "99.9 % uptime guarantee",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      "Co-build & white-label options",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      "Direct product team access",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    ],
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    cta: "Talk to Enterprise Sales",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    ctaVariant: "outline" as const,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    note: null,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    popular: false,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
] as const;
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
const comparisonRows = [
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { feature: "Bookings per month", starter: "10", agency: "Unlimited", enterprise: "Custom" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { feature: "Travel Links", starter: false, agency: true, enterprise: true },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { feature: "Custom Packages", starter: false, agency: true, enterprise: true },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { feature: "Team members", starter: "1", agency: "Unlimited", enterprise: "Custom" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { feature: "Multi-branch reporting", starter: false, agency: true, enterprise: true },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { feature: "Travx website", starter: false, agency: "Add-on", enterprise: "Add-on" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { feature: "Odiopay BNPL", starter: false, agency: true, enterprise: true },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { feature: "API access", starter: false, agency: "Read-only", enterprise: "Full" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { feature: "Support level", starter: "Community", agency: "Phone & WhatsApp", enterprise: "Dedicated" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { feature: "Account manager", starter: false, agency: true, enterprise: true },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
];
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
const faqs = [
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { q: "Can I start for free?", a: "Yes — the Starter plan is completely free, forever. You can search and book flights, manage passengers, and access the knowledge base without paying anything." },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { q: "What happens after my 14-day trial?", a: "After your trial ends, you'll be moved to the Starter plan automatically. No charges, no surprises. Upgrade again anytime to unlock premium features." },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { q: "Do I need a credit card to start a trial?", a: "No. You can start a 14-day free trial on the Independents or Agency plan without entering any payment information." },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { q: "Can I switch plans later?", a: "Absolutely. You can upgrade, downgrade, or cancel at any time from your account settings. Changes take effect at the start of your next billing cycle." },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { q: "What is Travx and how much does it cost?", a: "Travx is our branded booking website add-on. It costs $50/month and can be added to any plan. It gives you a fully customisable, booking-enabled website with your own domain." },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { q: "Do you offer annual billing?", a: "Yes — annual billing is available and saves you money compared to monthly plans. Toggle the billing switch at the top of this page to see annual prices." },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { q: "What payment methods do you accept?", a: "We accept bank transfers, card payments, and mobile money. Enterprise customers can also pay via invoice with net-30 terms." },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { q: "Is there a setup fee?", a: "No. There are no setup fees, no hidden charges, and no contracts. You pay only for your plan — nothing more." },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
];
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
/* ------------------------------------------------------------------ */
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
/*  Components                                                         */
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
/* ------------------------------------------------------------------ */
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
function CellValue({ value }: { value: boolean | string }) {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  if (value === true) return <Check className="mx-auto h-5 w-5 text-primary" />;
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  if (value === false) return <XIcon className="mx-auto h-5 w-5 text-muted-foreground/40" />;
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  return <span>{value}</span>;
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
/* ------------------------------------------------------------------ */
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
/*  Page                                                               */
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
/* ------------------------------------------------------------------ */
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
export default function Pricing() {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  const [annual, setAnnual] = useState(false);
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  const [currency, setCurrency] = useState<Currency>("USD");
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  useEffect(() => {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    document.title = "Pricing | Simple Plans for Every Travel Business | Intraverse";
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    const meta = document.querySelector('meta[name="description"]');
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    if (meta) meta.setAttribute("content", "Start free, upgrade when ready. Transparent pricing for travel agents, independents, agencies, and enterprises. No hidden fees. 14-day free trial.");
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  }, []);
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  return (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    <div className="min-h-screen flex flex-col bg-background text-foreground">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <Navbar />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      {/* ── Hero ── */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <section className="pt-32 pb-16 px-4 text-center max-w-4xl mx-auto">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <h1 className="mb-6">Simple Pricing. No Surprises. No Hidden Fees.</h1>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          Pick the plan that fits how you sell travel. Start free, upgrade when
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          you're ready, and never pay for features you don't use. Every plan
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          includes our complete toolkit — no premium add-ons, no upgrade traps.
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <div className="inline-flex items-center gap-3 bg-accent rounded-full px-5 py-2.5">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <span className={`text-sm font-medium ${!annual ? "text-foreground" : "text-muted-foreground"}`}>Monthly</span>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <Switch checked={annual} onCheckedChange={setAnnual} />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <span className={`text-sm font-medium ${annual ? "text-foreground" : "text-muted-foreground"}`}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              Annual <span className="text-primary font-semibold">(save 20%)</span>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </span>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <div className="inline-flex items-center gap-1 bg-accent rounded-full p-1">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <button
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              onClick={() => setCurrency("USD")}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${currency === "USD" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            >
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              USD ($)
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </button>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <button
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              onClick={() => setCurrency("NGN")}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${currency === "NGN" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            >
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              NGN (₦)
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </button>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      </section>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      {/* ── Pricing Cards ── */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <section className="max-w-7xl mx-auto px-4 pb-24">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          {tiers.map((tier) => {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            const isPopular = tier.popular;
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            return (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <div
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                key={tier.name}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                className={`relative flex flex-col rounded-xl border bg-card p-6 ${
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  isPopular
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    ? "border-primary border-2 shadow-xl lg:scale-[1.03] z-10"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    : "border-border shadow-sm"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                }`}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              >
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                {isPopular && (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-[11px] font-bold text-primary-foreground uppercase tracking-wide">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <Star className="h-3 w-3" /> Most Popular
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  </span>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                )}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <h3 className="text-lg font-semibold mb-1">{tier.name}</h3>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <div className="mb-1">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <span className="text-3xl font-bold tracking-tight">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    {tier.monthlyUsd === null ? "Custom" : formatPrice(annual ? tier.annualUsd : tier.monthlyUsd, currency)}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  </span>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <span className="text-sm text-muted-foreground ml-1">{annual ? tier.annualPeriod : tier.monthlyPeriod}</span>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <p className="text-sm text-muted-foreground mb-6">{tier.tagline}</p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                {/* Features or enterprise layout */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <div className="flex-1 space-y-3 mb-6">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  {tier.includes && (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      {tier.includes}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  )}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  {tier.features &&
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    tier.features.map((f) => (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      <div key={f} className="flex items-start gap-2 text-sm">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                        <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                        <span>{f}</span>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    ))}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  {/* Enterprise specific */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  {"products" in tier && tier.products && (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <div className="space-y-2 mb-4">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      {tier.products.map((p) => (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                        <div key={p.label} className="flex items-center gap-2 text-sm font-medium">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                          <p.icon className="h-4 w-4 text-primary shrink-0" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                          <span>{p.label}</span>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                        </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      ))}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  )}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  {"extras" in tier && tier.extras && (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground pt-2">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                        What you get:
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      {tier.extras.map((e) => (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                        <div key={e} className="flex items-start gap-2 text-sm">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                          <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                          <span>{e}</span>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                        </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      ))}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    </>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  )}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <Button
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  variant={tier.ctaVariant === "default" ? "hero" : "outline"}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  className="w-full min-h-[48px]"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                >
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  {tier.cta}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </Button>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                {tier.note && (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <p className="text-xs text-muted-foreground text-center mt-2">{tier.note}</p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                )}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            );
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          })}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      </section>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      {/* ── Travx Add-On ── */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <section className="max-w-7xl mx-auto px-4 pb-24">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <h2 className="text-center mb-10">Need a Branded Website? Add Travx.</h2>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <div className="rounded-xl border border-border bg-card p-6 md:p-10 flex flex-col md:flex-row items-center gap-8">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <div className="text-center md:text-left md:w-1/4 shrink-0">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <div className="flex items-center justify-center md:justify-start gap-1 mb-1">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <Globe className="h-5 w-5 text-primary" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <span className="text-sm font-semibold text-primary">Travx</span>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <span className="text-3xl font-bold">+{formatPrice(annual ? 40 : 50, currency)}</span>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <span className="text-muted-foreground text-sm">{annual ? "/month, billed annually" : "/month"}</span>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <div className="flex-1">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <p className="font-medium mb-3">For agencies that want a branded booking website</p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              {[
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                "Fully branded, booking-enabled site",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                "Custom domain support",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                "SEO-optimised pages",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                "Real-time availability",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                "Mobile responsive",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                "Integrated with your dashboard",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              ].map((f) => (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <div key={f} className="flex items-center gap-2">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <Check className="h-4 w-4 text-primary shrink-0" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <span>{f}</span>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              ))}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <p className="text-xs text-destructive mt-4 md:mt-0 text-center md:text-right">A one-time {formatPrice(1000, currency)} setup fee applies*</p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      </section>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      {/* ── Comparison Table ── */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <section className="max-w-7xl mx-auto px-4 pb-24">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <h2 className="text-center mb-10">Compare All Plans</h2>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        {/* Desktop table */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <div className="hidden md:block overflow-x-auto rounded-xl border border-border">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <table className="w-full text-sm">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <thead>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <tr className="bg-accent">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <th className="text-left p-4 font-semibold">Feature</th>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <th className="p-4 font-semibold text-center">Starter</th>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <th className="p-4 font-semibold text-center text-primary">Agency</th>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <th className="p-4 font-semibold text-center">Enterprise</th>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </tr>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </thead>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <tbody>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              {comparisonRows.map((row, i) => (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <tr key={row.feature} className={i % 2 === 0 ? "bg-card" : "bg-accent/40"}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <td className="p-4 font-medium">{row.feature}</td>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <td className="p-4 text-center"><CellValue value={row.starter} /></td>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <td className="p-4 text-center"><CellValue value={row.agency} /></td>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <td className="p-4 text-center"><CellValue value={row.enterprise} /></td>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </tr>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              ))}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </tbody>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </table>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        {/* Mobile stacked cards */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <div className="md:hidden space-y-6">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          {["Starter", "Agency", "Enterprise"].map((plan) => (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <div key={plan} className="rounded-xl border border-border bg-card p-5">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <h3 className="text-lg font-semibold mb-4">{plan}</h3>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <div className="space-y-3">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                {comparisonRows.map((row) => {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  const val = row[plan.toLowerCase() as keyof typeof row];
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  return (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <div key={row.feature} className="flex justify-between items-center text-sm">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      <span className="text-muted-foreground">{row.feature}</span>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      <span className="font-medium">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                        {val === true ? <Check className="h-4 w-4 text-primary" /> : val === false ? <XIcon className="h-4 w-4 text-muted-foreground/40" /> : String(val)}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      </span>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  );
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                })}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          ))}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      </section>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      {/* ── FAQ ── */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <section className="max-w-3xl mx-auto px-4 pb-24">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <h2 className="text-center mb-10">Pricing Questions, Answered</h2>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <Accordion type="single" collapsible className="space-y-2">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          {faqs.map((faq, i) => (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <AccordionItem key={i} value={`faq-${i}`} className="border rounded-xl px-4">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                {faq.q}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </AccordionTrigger>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <AccordionContent className="text-muted-foreground leading-relaxed">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                {faq.a}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </AccordionContent>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </AccordionItem>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          ))}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </Accordion>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      </section>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      {/* ── Final CTA ── */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <section className="bg-foreground text-background py-20 px-4">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <div className="max-w-3xl mx-auto text-center">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <h2 className="text-background mb-4">Start Free. Upgrade When You're Ready.</h2>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <p className="text-background/70 text-lg mb-10 leading-relaxed">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            Every Intraverse plan starts with full access — no credit card
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            required. Build your travel business at your own pace, on your own
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            terms.
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <a href="https://www.intraverse.app" target="_blank" rel="noopener noreferrer">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <Button className="bg-background text-foreground hover:bg-background/90 min-h-[48px] px-8 text-base font-semibold rounded-lg">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                Start Free
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </Button>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </a>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <Button
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                variant="outline"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                className="border-background/40 text-foreground bg-background hover:bg-background/90 min-h-[48px] px-8 text-base font-medium rounded-lg"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              >
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                Talk to Sales
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </Button>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </a>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      </section>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <Footer />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <WhatsAppFab />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  );
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
}
