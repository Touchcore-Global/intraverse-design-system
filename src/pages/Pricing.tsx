import { useState, useEffect } from "react";
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
  Building2,
  Landmark,
  Plug,
  Handshake,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const tiers = [
  {
    name: "Starter",
    monthlyPrice: "$0",
    annualPrice: "$0",
    monthlyPeriod: "/month forever",
    annualPeriod: "/month forever",
    tagline: "For new Independents and small agents testing the waters",
    includes: null,
    features: [
      "Search & book flights from multiple sources",
      "Basic passenger management",
      "Email booking confirmations",
      "1 user account",
      "Community support",
      "Access to knowledge base",
    ],
    cta: "Start Free",
    ctaVariant: "outline" as const,
    note: null,
    popular: false,
  },
  {
    name: "Agency",
    monthlyPrice: "$20",
    annualPrice: "$16",
    monthlyPeriod: "/month",
    annualPeriod: "/month, billed annually",
    tagline: "For travel agencies of all sizes",
    includes: "Everything in Starter, plus:",
    features: [
      "Unlimited bookings",
      "Shareable Travel Links",
      "Custom travel packages",
      "Unlimited team members",
      "Multi-branch reporting",
      "Role-based access control",
      "Dedicated account manager",
      "Phone & WhatsApp support",
      "API access (read-only)",
      "Advanced analytics dashboard",
      "Commission tracking dashboard",
      "Odiopay BNPL integration",
      "Branded invoices & receipts",
    ],
    cta: "Start 14-Day Free Trial",
    ctaVariant: "default" as const,
    note: "No credit card required",
    popular: true,
  },
  {
    name: "Enterprise",
    monthlyPrice: "Custom",
    annualPrice: "Custom",
    monthlyPeriod: "Contact Sales",
    annualPeriod: "Contact Sales",
    tagline:
      "For Corporates, Fintechs, Tech Startups, and large-volume partners",
    includes: null,
    features: null,
    products: [
      { icon: Building2, label: "CoopX Enterprise" },
      { icon: Landmark, label: "Fintech Partnerships" },
      { icon: Plug, label: "Intraverse API" },
      { icon: Handshake, label: "Custom Integrations" },
    ],
    extras: [
      "Custom contract terms & SLAs",
      "Dedicated engineering support",
      "99.9 % uptime guarantee",
      "Co-build & white-label options",
      "Direct product team access",
    ],
    cta: "Talk to Enterprise Sales",
    ctaVariant: "outline" as const,
    note: null,
    popular: false,
  },
] as const;

const comparisonRows = [
  { feature: "Bookings per month", starter: "10", agency: "Unlimited", enterprise: "Custom" },
  { feature: "Travel Links", starter: false, agency: true, enterprise: true },
  { feature: "Custom Packages", starter: false, agency: true, enterprise: true },
  { feature: "Team members", starter: "1", agency: "Unlimited", enterprise: "Custom" },
  { feature: "Multi-branch reporting", starter: false, agency: true, enterprise: true },
  { feature: "Travx website", starter: false, agency: "Add-on", enterprise: "Add-on" },
  { feature: "Odiopay BNPL", starter: false, agency: true, enterprise: true },
  { feature: "API access", starter: false, agency: "Read-only", enterprise: "Full" },
  { feature: "Support level", starter: "Community", agency: "Phone & WhatsApp", enterprise: "Dedicated" },
  { feature: "Account manager", starter: false, agency: true, enterprise: true },
];

const faqs = [
  { q: "Can I start for free?", a: "Yes — the Starter plan is completely free, forever. You can search and book flights, manage passengers, and access the knowledge base without paying anything." },
  { q: "What happens after my 14-day trial?", a: "After your trial ends, you'll be moved to the Starter plan automatically. No charges, no surprises. Upgrade again anytime to unlock premium features." },
  { q: "Do I need a credit card to start a trial?", a: "No. You can start a 14-day free trial on the Independents or Agency plan without entering any payment information." },
  { q: "Can I switch plans later?", a: "Absolutely. You can upgrade, downgrade, or cancel at any time from your account settings. Changes take effect at the start of your next billing cycle." },
  { q: "What is Travx and how much does it cost?", a: "Travx is our branded booking website add-on. It costs $50/month and can be added to any plan. It gives you a fully customisable, booking-enabled website with your own domain." },
  { q: "Do you offer annual billing?", a: "Yes — annual billing is available and saves you money compared to monthly plans. Toggle the billing switch at the top of this page to see annual prices." },
  { q: "What payment methods do you accept?", a: "We accept bank transfers, card payments, and mobile money. Enterprise customers can also pay via invoice with net-30 terms." },
  { q: "Is there a setup fee?", a: "No. There are no setup fees, no hidden charges, and no contracts. You pay only for your plan — nothing more." },
];

/* ------------------------------------------------------------------ */
/*  Components                                                         */
/* ------------------------------------------------------------------ */

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="mx-auto h-5 w-5 text-primary" />;
  if (value === false) return <XIcon className="mx-auto h-5 w-5 text-muted-foreground/40" />;
  return <span>{value}</span>;
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  useEffect(() => {
    document.title = "Pricing | Simple Plans for Every Travel Business | Intraverse";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Start free, upgrade when ready. Transparent pricing for travel agents, independents, agencies, and enterprises. No hidden fees. 14-day free trial.");
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      {/* ── Hero ── */}
      <section className="pt-32 pb-16 px-4 text-center max-w-4xl mx-auto">
        <h1 className="mb-6">Simple Pricing. No Surprises. No Hidden Fees.</h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
          Pick the plan that fits how you sell travel. Start free, upgrade when
          you're ready, and never pay for features you don't use. Every plan
          includes our complete toolkit — no premium add-ons, no upgrade traps.
        </p>
        <div className="inline-flex items-center gap-3 bg-accent rounded-full px-5 py-2.5">
          <span className={`text-sm font-medium ${!annual ? "text-foreground" : "text-muted-foreground"}`}>Monthly</span>
          <Switch checked={annual} onCheckedChange={setAnnual} />
          <span className={`text-sm font-medium ${annual ? "text-foreground" : "text-muted-foreground"}`}>
            Annual <span className="text-primary font-semibold">(save 20%)</span>
          </span>
        </div>
      </section>

      {/* ── Pricing Cards ── */}
      <section className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tiers.map((tier) => {
            const isPopular = tier.popular;
            return (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-xl border bg-card p-6 ${
                  isPopular
                    ? "border-primary border-2 shadow-xl lg:scale-[1.03] z-10"
                    : "border-border shadow-sm"
                }`}
              >
                {isPopular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-[11px] font-bold text-primary-foreground uppercase tracking-wide">
                    <Star className="h-3 w-3" /> Most Popular
                  </span>
                )}

                <h3 className="text-lg font-semibold mb-1">{tier.name}</h3>
                <div className="mb-1">
                  <span className="text-3xl font-bold tracking-tight">{annual ? tier.annualPrice : tier.monthlyPrice}</span>
                  <span className="text-sm text-muted-foreground ml-1">{annual ? tier.annualPeriod : tier.monthlyPeriod}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-6">{tier.tagline}</p>

                {/* Features or enterprise layout */}
                <div className="flex-1 space-y-3 mb-6">
                  {tier.includes && (
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                      {tier.includes}
                    </p>
                  )}

                  {tier.features &&
                    tier.features.map((f) => (
                      <div key={f} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}

                  {/* Enterprise specific */}
                  {"products" in tier && tier.products && (
                    <div className="space-y-2 mb-4">
                      {tier.products.map((p) => (
                        <div key={p.label} className="flex items-center gap-2 text-sm font-medium">
                          <p.icon className="h-4 w-4 text-primary shrink-0" />
                          <span>{p.label}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {"extras" in tier && tier.extras && (
                    <>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground pt-2">
                        What you get:
                      </p>
                      {tier.extras.map((e) => (
                        <div key={e} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                          <span>{e}</span>
                        </div>
                      ))}
                    </>
                  )}
                </div>

                <Button
                  variant={tier.ctaVariant === "default" ? "hero" : "outline"}
                  className="w-full min-h-[48px]"
                >
                  {tier.cta}
                </Button>
                {tier.note && (
                  <p className="text-xs text-muted-foreground text-center mt-2">{tier.note}</p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Travx Add-On ── */}
      <section className="max-w-7xl mx-auto px-4 pb-24">
        <h2 className="text-center mb-10">Need a Branded Website? Add Travx.</h2>
        <div className="rounded-xl border border-border bg-card p-6 md:p-10 flex flex-col md:flex-row items-center gap-8">
          <div className="text-center md:text-left md:w-1/4 shrink-0">
            <div className="flex items-center justify-center md:justify-start gap-1 mb-1">
              <Globe className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold text-primary">Travx</span>
            </div>
            <span className="text-3xl font-bold">+{annual ? "$40" : "$50"}</span>
            <span className="text-muted-foreground text-sm">{annual ? "/month, billed annually" : "/month"}</span>
          </div>

          <div className="flex-1">
            <p className="font-medium mb-3">For agencies that want a branded booking website</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              {[
                "Fully branded, booking-enabled site",
                "Custom domain support",
                "SEO-optimised pages",
                "Real-time availability",
                "Mobile responsive",
                "Integrated with your dashboard",
              ].map((f) => (
                <div key={f} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary shrink-0" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-xs text-destructive mt-4 md:mt-0 text-center md:text-right">A one-time $1000 setup fee applies*</p>
        </div>
      </section>

      {/* ── Comparison Table ── */}
      <section className="max-w-7xl mx-auto px-4 pb-24">
        <h2 className="text-center mb-10">Compare All Plans</h2>

        {/* Desktop table */}
        <div className="hidden md:block overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-accent">
                <th className="text-left p-4 font-semibold">Feature</th>
                <th className="p-4 font-semibold text-center">Starter</th>
                <th className="p-4 font-semibold text-center text-primary">Agency</th>
                <th className="p-4 font-semibold text-center">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, i) => (
                <tr key={row.feature} className={i % 2 === 0 ? "bg-card" : "bg-accent/40"}>
                  <td className="p-4 font-medium">{row.feature}</td>
                  <td className="p-4 text-center"><CellValue value={row.starter} /></td>
                  <td className="p-4 text-center"><CellValue value={row.agency} /></td>
                  <td className="p-4 text-center"><CellValue value={row.enterprise} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile stacked cards */}
        <div className="md:hidden space-y-6">
          {["Starter", "Agency", "Enterprise"].map((plan) => (
            <div key={plan} className="rounded-xl border border-border bg-card p-5">
              <h3 className="text-lg font-semibold mb-4">{plan}</h3>
              <div className="space-y-3">
                {comparisonRows.map((row) => {
                  const val = row[plan.toLowerCase() as keyof typeof row];
                  return (
                    <div key={row.feature} className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">{row.feature}</span>
                      <span className="font-medium">
                        {val === true ? <Check className="h-4 w-4 text-primary" /> : val === false ? <XIcon className="h-4 w-4 text-muted-foreground/40" /> : String(val)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="max-w-3xl mx-auto px-4 pb-24">
        <h2 className="text-center mb-10">Pricing Questions, Answered</h2>
        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border rounded-xl px-4">
              <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-foreground text-background py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-background mb-4">Start Free. Upgrade When You're Ready.</h2>
          <p className="text-background/70 text-lg mb-10 leading-relaxed">
            Every Intraverse plan starts with full access — no credit card
            required. Build your travel business at your own pace, on your own
            terms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.intraverse.app" target="_blank" rel="noopener noreferrer">
              <Button className="bg-background text-foreground hover:bg-background/90 min-h-[48px] px-8 text-base font-semibold rounded-lg">
                Start Free
              </Button>
            </a>
            <a href="https://wa.me/2348000000000" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="border-background/40 text-foreground bg-background hover:bg-background/90 min-h-[48px] px-8 text-base font-medium rounded-lg"
              >
                Talk to Sales
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
