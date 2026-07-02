import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Check,
  X as XIcon,
  Star,
  Gift,
  PiggyBank,
  ArrowUpCircle,
  ArrowDownCircle,
  MessageSquare,
  FileCheck,
  Map,
  CreditCard,
  Plane,
  Globe,
  Plug,
} from "lucide-react";
import { SEO } from "@/components/SEO";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const engagementColumns = [
  {
    title: "Customer Communication",
    items: [
      "SMS campaigns",
      "Email campaigns",
      "WhatsApp message templates",
      "Bulk messaging",
      "Scheduled campaigns",
    ],
  },
  {
    title: "Customer Lifecycle",
    items: [
      "Welcome messages",
      "Birthday notifications",
      "Thank you messages",
      "Post-trip follow-ups",
    ],
  },
  {
    title: "Marketing",
    items: [
      "Promotional campaigns",
      "Holiday & seasonal campaigns",
      "Customer segmentation",
      "Customer tags & notes",
      "Contact lists",
    ],
  },
  {
    title: "Sales Follow-up",
    items: [
      "Quote follow-up reminders",
      "Booking follow-up reminders",
      "Campaign history",
      "Customer journey tracking",
    ],
  },
];

const modules = [
  {
    icon: MessageSquare,
    title: "Customer Engagement",
    items: ["SMS credits", "Branded sender ID", "Additional campaigns"],
  },
  {
    icon: FileCheck,
    title: "Visa Management",
    items: ["Visa processing", "Visa application tracking", "Document management"],
  },
  {
    icon: Map,
    title: "Tours & Packages",
    items: [
      "Advanced package management",
      "Tour management",
      "Itinerary management",
    ],
  },
  {
    icon: CreditCard,
    title: "Payments",
    items: ["Instalment payments"],
  },
  {
    icon: Plane,
    title: "Travel Services",
    items: ["Travel insurance", "eSIM services"],
  },
  {
    icon: Globe,
    title: "Branding",
    items: [
      "Additional customised online travel booking websites (US$1,000 one-time setup fee per website)",
    ],
  },
  {
    icon: Plug,
    title: "Platform & Integrations",
    items: ["Additional API modules", "Custom integrations"],
  },
];

const benefits = [
  {
    icon: Gift,
    title: "14-Day Free Trial",
    body: "Enjoy a one-time 14-day free trial of the Growth plan. Full access to all Growth features. No credit card required.",
  },
  {
    icon: PiggyBank,
    title: "Annual Billing Savings",
    body: "Pay for 10 months and get 12 months on annual Growth and Business subscriptions. That's 2 months free.",
  },
  {
    icon: ArrowUpCircle,
    title: "Upgrade Anytime",
    body: "Upgrade your subscription at any time with prorated billing. New features become available immediately.",
  },
  {
    icon: ArrowDownCircle,
    title: "Downgrade Anytime",
    body: "Downgrades take effect at the end of the current billing cycle. No penalties, no pressure.",
  },
];

const comparisonRows: {
  feature: string;
  values: (boolean | string)[];
}[] = [
  { feature: "Flight & Hotel Booking", values: [true, true, true, true] },
  { feature: "Automated Ticket Operations", values: [true, true, true, true] },
  { feature: "Wallet", values: [true, true, true, true] },
  { feature: "Customer Database", values: [true, true, true, true] },
  { feature: "Quote Sharing", values: ["10/month", "Unlimited", "Unlimited", "Unlimited"] },
  { feature: "Payment Links", values: [false, true, true, true] },
  { feature: "Package Builder", values: [false, true, true, true] },
  { feature: "PNR Import", values: [false, true, true, true] },
  { feature: "GDS Connectivity", values: [false, "✓*", "✓*", "✓*"] },
  { feature: "Customer Engagement Suite", values: [false, true, true, true] },
  { feature: "Business Insights", values: [false, true, "Advanced", "Advanced"] },
  { feature: "Team Access", values: ["1 User", "3 Users", "Unlimited", "Unlimited"] },
  { feature: "Corporate Travel Management", values: [false, false, true, true] },
  { feature: "Payment Gateway Integration", values: [false, false, true, true] },
  { feature: "Customised Booking Website", values: [false, false, "✓†", "✓†"] },
  { feature: "API Access", values: [false, false, false, true] },
  { feature: "Priority Support", values: [false, true, true, true] },
  { feature: "Dedicated Account Manager", values: [false, false, true, true] },
  { feature: "Custom Integrations", values: [false, false, false, true] },
];

const planColumns = [
  { name: "Starter", price: "Free" },
  { name: "Growth", price: "₦30K/mo", popular: true },
  { name: "Business", price: "₦75K/mo" },
  { name: "Enterprise & API", price: "Custom" },
];

const faqs = [
  {
    q: "Is there really a free plan?",
    a: "Yes. The Starter plan is free forever with no credit card required. You get flight and hotel booking, automated ticket operations, wallet, and a customer database. It's limited to one user with Intraverse branding, but it's a real plan — not a 7-day trial that expires.",
  },
  {
    q: "What's included in the 14-day free trial?",
    a: "Full access to the Growth plan with every feature unlocked — unlimited quote sharing, payment links, package builder, PNR import, Customer Engagement Suite, business insights, and up to 3 team members. No credit card required. We only ask for payment if you decide to continue after day 14.",
  },
  {
    q: "How does annual billing work?",
    a: "Pay for 10 months and get 12 months of access. That's ₦300,000/year for Growth (saving ₦60,000) and ₦750,000/year for Business (saving ₦150,000). Annual subscriptions are paid upfront via bank transfer or card.",
  },
  {
    q: "What does GDS connectivity cost?",
    a: "GDS connectivity is included in Growth, Business, and Enterprise plans. There's a one-time setup fee of US$500 to connect your Amadeus, Sabre, or Travelport credentials. This is a setup fee, not a recurring charge.",
  },
  {
    q: "How much does the customised booking website cost?",
    a: "The customised online travel booking website is included in Business and Enterprise plans. There's a one-time setup fee of US$1,000 per website. This covers full design, branding, and deployment. Hosting and maintenance are included in your monthly subscription.",
  },
  {
    q: "Can I upgrade or downgrade at any time?",
    a: "Yes. Upgrades take effect immediately with prorated billing — you only pay the difference for the remainder of your billing cycle. Downgrades take effect at the end of your current billing cycle. No penalties either way.",
  },
  {
    q: "What payment methods do you accept?",
    a: "Card payments (Visa, Mastercard, Verve), bank transfer, and USSD. Annual plans paid via bank transfer qualify for the annual discount automatically.",
  },
  {
    q: "What are the optional business modules?",
    a: "Optional modules let you add specific capabilities to any paid plan — things like visa management, advanced tour and package tools, instalment payments, travel insurance, eSIM services, and additional branded websites. You only activate and pay for what you need. Contact our team for module pricing.",
  },
];

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="mx-auto h-5 w-5 text-primary" />;
  if (value === false) return <span className="text-muted-foreground/50">—</span>;
  return <span>{value}</span>;
}

/* ------------------------------------------------------------------ */
/*  Tier cards                                                         */
/* ------------------------------------------------------------------ */

type Tier = {
  name: string;
  badge?: { label: string; variant: "popular" | "brand" };
  monthly: { price: string; period?: string };
  annual: { price: string; period?: string; save?: string };
  tagline: string;
  includesLabel?: string;
  features: string[];
  limitations?: string[];
  footnote?: string;
  cta: { label: string; href: string; variant: "primary" | "outline"; note?: string };
  emphasize?: boolean;
};

const tiers: Tier[] = [
  {
    name: "Starter",
    monthly: { price: "Free", period: "Forever" },
    annual: { price: "Free", period: "Forever" },
    tagline: "Perfect for individuals and new travel businesses getting started.",
    features: [
      "Flight & hotel booking",
      "Wallet",
      "Automated ticket issuance",
      "Automated refunds, date changes & voids",
      "Customer database & booking history",
      "Create & share up to 10 quotations/month",
      "Community support",
    ],
    limitations: [
      "Single user only",
      "Intraverse branding (not your own)",
      "No payment links",
      "No business insights",
      "No team access",
      "No GDS connectivity",
      "No package builder",
    ],
    cta: { label: "Start Free", href: "/register", variant: "outline" },
  },
  {
    name: "Growth",
    badge: { label: "★ MOST POPULAR", variant: "popular" },
    monthly: { price: "₦30,000", period: "/month" },
    annual: { price: "₦300,000", period: "/year", save: "Save ₦60,000" },
    tagline:
      "For growing travel businesses ready to sell professionally and build lasting customer relationships.",
    includesLabel: "Everything in Starter, plus:",
    features: [
      "Unlimited quote sharing",
      "Payment links",
      "Package builder",
      "PNR import",
      "GDS connectivity (Amadeus, Sabre & Travelport)*",
      "Customer Engagement Suite (full)",
      "Traveller profiles & customer journey",
      "Business, sales, revenue & profit reports",
      "Up to 3 team members",
      "Priority support",
    ],
    footnote: "*One-time GDS setup fee: US$500",
    cta: {
      label: "Start 14-Day Free Trial",
      href: "/register",
      variant: "primary",
      note: "No credit card required",
    },
    emphasize: true,
  },
  {
    name: "Business",
    badge: { label: "Best for Agencies", variant: "brand" },
    monthly: { price: "₦75,000", period: "/month" },
    annual: { price: "₦750,000", period: "/year", save: "Save ₦150,000" },
    tagline:
      "For established travel agencies managing teams, branches and corporate clients.",
    includesLabel: "Everything in Growth, plus:",
    features: [
      "Unlimited team members",
      "Branch management",
      "User roles & permissions",
      "Multi-wallet management",
      "Supplier management",
      "Shared customer database",
      "Activity logs",
      "Booking approval workflow",
      "Commission management",
      "Corporate travel management",
      "Customised online travel booking website†",
      "Agency branding on quotations & invoices",
      "Custom email templates",
      "Payment gateway integration",
      "Advanced business insights",
      "Team performance dashboard",
      "Dedicated account manager",
    ],
    footnote: "†One-time website setup fee: US$1,000",
    cta: { label: "Start Free Trial", href: "/register", variant: "outline" },
  },
  {
    name: "Enterprise & API",
    monthly: { price: "Custom", period: "Contact Sales" },
    annual: { price: "Custom", period: "Contact Sales" },
    tagline:
      "For enterprise travel organizations, consolidators, and travel technology partners.",
    includesLabel: "Everything in Business, plus:",
    features: [
      "API access",
      "Custom integrations",
      "Single sign-on (SSO)",
      "Custom workflows",
      "Dedicated infrastructure (where required)",
      "Service level agreement (SLA)",
      "Additional customised booking websites",
      "Dedicated onboarding",
      "Staff training",
      "Solution design",
      "Custom development",
    ],
    cta: { label: "Talk to Sales", href: "/demo", variant: "outline" },
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SEO
        title="Pricing | Plans from Free to Enterprise | Intraverse"
        description="Start free, upgrade when ready. Starter (Free), Growth (₦30,000/mo), Business (₦75,000/mo), Enterprise (Custom). 14-day free trial. No hidden fees."
        canonical="https://intraverse.africa/pricing"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        }}
      />
      <Navbar />

      {/* ── Hero ── */}
      <section className="pt-32 pb-12 px-4 text-center max-w-4xl mx-auto">
        <h1 className="mb-6">Simple Pricing. No Surprises. No Hidden Fees.</h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
          Pick the plan that fits how you sell travel. Start free, upgrade when
          you're ready. Every plan includes flight and hotel booking, automated
          ticket operations, and wallet management.
        </p>
        <div className="inline-flex items-center gap-3 bg-accent rounded-full px-5 py-2.5">
          <span className={`text-sm font-medium ${!annual ? "text-foreground" : "text-muted-foreground"}`}>
            Monthly
          </span>
          <Switch checked={annual} onCheckedChange={setAnnual} />
          <span className={`text-sm font-medium ${annual ? "text-foreground" : "text-muted-foreground"}`}>
            Annual <span className="text-primary font-semibold">(save 2 months)</span>
          </span>
        </div>
        <p className="text-xs text-muted-foreground mt-4">
          14-day free trial on Growth plan • No credit card required
        </p>
      </section>

      {/* ── Pricing Cards ── */}
      <section className="max-w-7xl mx-auto px-4 pb-24 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier) => {
            const price = annual ? tier.annual : tier.monthly;
            return (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-xl border bg-card p-6 ${
                  tier.emphasize
                    ? "border-primary border-2 shadow-xl lg:scale-[1.03] z-10 order-first lg:order-none"
                    : "border-border shadow-sm"
                }`}
              >
                {tier.badge && (
                  <span
                    className={`absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide whitespace-nowrap ${
                      tier.badge.variant === "popular"
                        ? "bg-primary text-primary-foreground"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    {tier.badge.variant === "popular" && <Star className="h-3 w-3" />}
                    {tier.badge.label}
                  </span>
                )}

                <h3 className="h3-global mb-1">{tier.name}</h3>
                <div className="mb-1 flex items-baseline gap-1 flex-wrap">
                  <span className="text-3xl font-bold tracking-tight">{price.price}</span>
                  {price.period && (
                    <span className="text-sm text-muted-foreground">{price.period}</span>
                  )}
                </div>
                {annual && tier.annual.save && (
                  <span className="inline-block mb-2 rounded-full bg-green-600 text-white text-[11px] font-semibold px-2 py-0.5 w-fit">
                    {tier.annual.save}
                  </span>
                )}
                <p className="text-sm text-muted-foreground mb-6 mt-2">{tier.tagline}</p>

                <div className="flex-1 space-y-3 mb-6">
                  {tier.includesLabel && (
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                      {tier.includesLabel}
                    </p>
                  )}
                  {tier.features.map((f) => (
                    <div key={f} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                  {tier.limitations && (
                    <div className="pt-2 space-y-3">
                      {tier.limitations.map((l) => (
                        <div key={l} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <XIcon className="h-4 w-4 mt-0.5 shrink-0" />
                          <span>{l}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {tier.footnote && (
                    <p className="text-xs text-muted-foreground pt-2">{tier.footnote}</p>
                  )}
                </div>

                <a href={tier.cta.href} className="w-full block">
                  <Button
                    variant={tier.cta.variant === "primary" ? "hero" : "outline"}
                    className="w-full min-h-[48px]"
                  >
                    {tier.cta.label}
                  </Button>
                </a>
                {tier.cta.note && (
                  <p className="text-xs text-muted-foreground text-center mt-2">
                    {tier.cta.note}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Customer Engagement Suite ── */}
      <section className="bg-accent/40 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-3">Customer Engagement Suite</h2>
            <p className="text-muted-foreground text-lg">
              Included with Growth, Business, and Enterprise & API plans.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {engagementColumns.map((col) => (
              <div key={col.title} className="rounded-xl border border-border bg-card p-6">
                <h3 className="h3-global text-base mb-4">{col.title}</h3>
                <ul className="space-y-2">
                  {col.items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Optional Business Modules ── */}
      <section className="bg-background py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-3">Optional Business Modules</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Activate only the modules your business needs. Available as add-ons on any paid plan.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((m) => (
              <div
                key={m.title}
                className="rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <m.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="h3-global text-base mb-3">{m.title}</h3>
                <ul className="space-y-2">
                  {m.items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Subscription Benefits ── */}
      <section className="bg-accent/40 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2>Why Intraverse Pricing Works for You</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-xl border border-border bg-card p-6">
                <b.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="h3-global text-base mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison Table ── */}
      <section className="bg-background py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center mb-10">Compare All Plans</h2>

          <div className="hidden md:block overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-accent">
                  <th className="text-left p-4 font-semibold">Feature</th>
                  {planColumns.map((p) => (
                    <th key={p.name} className="p-4 font-semibold text-center relative">
                      {p.popular && (
                        <span className="absolute top-1 left-1/2 -translate-x-1/2 text-[10px] font-bold text-primary uppercase tracking-wide">
                          ★ Most Popular
                        </span>
                      )}
                      <div className={`${p.popular ? "mt-3 text-primary" : ""}`}>{p.name}</div>
                      <div className="text-xs font-normal text-muted-foreground mt-1">{p.price}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-card" : "bg-accent/40"}>
                    <td className="p-4 font-medium">{row.feature}</td>
                    {row.values.map((v, j) => (
                      <td key={j} className="p-4 text-center">
                        <CellValue value={v} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile stacked cards */}
          <div className="md:hidden space-y-6">
            {planColumns.map((plan, idx) => (
              <div key={plan.name} className="rounded-xl border border-border bg-card p-5">
                <div className="flex items-baseline justify-between mb-4">
                  <h3 className="h3-global">{plan.name}</h3>
                  <span className="text-sm text-muted-foreground">{plan.price}</span>
                </div>
                <div className="space-y-3">
                  {comparisonRows.map((row) => (
                    <div key={row.feature} className="flex justify-between items-center text-sm gap-4">
                      <span className="text-muted-foreground">{row.feature}</span>
                      <span className="font-medium text-right">
                        {row.values[idx] === true ? (
                          <Check className="h-4 w-4 text-primary" />
                        ) : row.values[idx] === false ? (
                          <span className="text-muted-foreground/50">—</span>
                        ) : (
                          String(row.values[idx])
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-xs text-muted-foreground mt-6 space-y-1">
            <p>* GDS Connectivity supports Amadeus, Sabre, and Travelport. One-time setup fee: US$500.</p>
            <p>† One-time setup fee: US$1,000 per customised online travel booking website.</p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-accent/40 py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center mb-10">Pricing Questions, Answered</h2>
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border rounded-xl px-4 bg-card"
              >
                <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-foreground text-background py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-background mb-4">Start Free. Upgrade When You're Ready.</h2>
          <p className="text-background/70 text-lg mb-10 leading-relaxed">
            Every Intraverse plan starts with full access — no credit card required.
            Build your travel business at your own pace, on your own terms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/register">
              <Button className="bg-background text-foreground hover:bg-background/90 min-h-[48px] px-8 text-base font-semibold rounded-lg">
                Start Free
              </Button>
            </a>
            <a href="/demo">
              <Button
                variant="outline"
                className="border-background/40 text-foreground bg-background hover:bg-background/90 min-h-[48px] px-8 text-base font-medium rounded-lg"
              >
                Book a Demo
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFab />
    </div>
  );
}
