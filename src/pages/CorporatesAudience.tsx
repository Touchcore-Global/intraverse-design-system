import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  MessageCircle,
  Check,
  Building2,
  BarChart3,
  ShieldCheck,
  Coins,
  UserCog,
  MapPin,
  ArrowRight,
  Send,
} from "lucide-react";
import { useState } from "react";
import { WHATSAPP_URL } from "@/lib/constants";
import { SEO } from "@/components/SEO";

const bulletPoints = [
  "A large corporate with 100+ employees who travel for work?",
  "Operating across multiple departments, business units, or locations?",
  "Subject to procurement policies, audit requirements, and governance frameworks?",
  "Looking to consolidate travel suppliers under one managed programme?",
  "Spending tens or hundreds of millions of Naira annually on travel?",
];

const features = [
  { icon: Building2, title: "Multi-Level Approvals", body: "Configurable approval chains that mirror your organisational hierarchy. Route bookings through line managers, department heads, and finance - with full audit trails at every step." },
  { icon: BarChart3, title: "Enterprise Reporting", body: "Real-time dashboards and exportable reports by department, cost centre, destination, or traveller. Built for the data your CFO and procurement team actually need." },
  { icon: ShieldCheck, title: "Policy & Compliance", body: "Enforce cabin class rules, hotel budgets, advance booking windows, and preferred supplier policies automatically. Every exception is logged and flagged." },
  { icon: Coins, title: "Negotiated Rates", body: "Access preferential rates through Intraverse's aggregated buying power - plus the ability to load your own negotiated corporate rates into the platform." },
  { icon: UserCog, title: "Dedicated Account Management", body: "A named account manager who understands your organisation, your travel patterns, and your compliance requirements. Not a chatbot. Not a ticket queue." },
  { icon: MapPin, title: "Built for Africa", body: "Naira-denominated pricing. Lagos-based support team in your time zone. Designed around the realities of African corporate travel - not retrofitted from a Western TMC." },
];

const stats = [
  { value: "30%", label: "Average Travel Spend Reduction" },
  { value: "25+", label: "Enterprise Clients" },
  { value: "100%", label: "Audit-Ready Reporting" },
];

const timeline = [
  { step: "1", title: "Discovery Call", body: "We learn about your organisation, travel volumes, approval structures, and compliance requirements." },
  { step: "2", title: "Custom Proposal", body: "A tailored implementation plan with pricing, timeline, and integration scope - specific to your business." },
  { step: "3", title: "Pilot Deployment", body: "We deploy CoopX Enterprise to a single department or business unit. Real bookings, real data, real feedback." },
  { step: "4", title: "Full Rollout", body: "Once validated, we roll out across the organisation with training, change management support, and policy configuration." },
  { step: "5", title: "Ongoing Partnership", body: "Quarterly business reviews, continuous optimisation, and a dedicated account team that grows with you." },
];

function RevealBlock({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, revealClass } = useScrollReveal();
  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${revealClass} ${className}`}>
      {children}
    </div>
  );
}

const Corporates = () => {
  const [form, setForm] = useState({ name: "", company: "", title: "", email: "", phone: "", travellers: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="For Corporate Travel Managers — Travel Management Platform | Intraverse"
        description="Manage your company's travel spend, enforce booking policies, and automate expense reporting. CoopX by Intraverse is built for Nigerian and African corporate travel."
        canonical="https://intraverse.africa/for/corporates"
      />
      <Navbar />
      <div className="h-16" />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[hsl(220,30%,8%)]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-primary/5 blur-3xl -translate-y-1/2 translate-x-1/4" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="corp-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#corp-grid)" />
          </svg>
        </div>

        <div className="container relative mx-auto px-4 py-24 lg:py-36 text-center" style={{ maxWidth: "1200px" }}>
          <RevealBlock>
            <h1 className="text-3xl sm:text-4xl md:text-[64px] font-[660] leading-[1.1] md:leading-[76px] tracking-[-2px] max-w-5xl mx-auto text-white">
              Enterprise Travel Management Built for African Corporates
            </h1>
            <p className="mt-8 text-base sm:text-lg md:text-xl font-normal max-w-3xl mx-auto leading-relaxed text-white/70">
              For large corporates with complex travel programmes, multi-department approval requirements, and serious governance and compliance needs. CoopX Enterprise scales to your organisation - with the controls, reporting, and dedicated support you expect from enterprise software, built for the realities of the African market.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="xl" className="bg-white text-foreground hover:bg-white/90 cta-responsive min-h-[48px] font-semibold">
                Talk to Enterprise Sales
              </Button>
              <Button size="xl" variant="whatsapp" className="cta-responsive min-h-[48px]" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4" style={{ maxWidth: "1200px" }}>
          <RevealBlock>
            <h2 className="text-3xl sm:text-4xl md:text-[48px] md:leading-[56px] font-[660] tracking-[-2px] text-center mb-14" style={{ color: "rgb(13, 27, 42)" }}>
              Is Your Organisation...
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {bulletPoints.map((point) => (
                <div key={point} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 md:py-28 bg-[hsl(216,60%,97%)]">
        <div className="container mx-auto px-4" style={{ maxWidth: "1200px" }}>
          <RevealBlock>
            <h2 className="text-3xl sm:text-4xl md:text-[48px] md:leading-[56px] font-[660] tracking-[-2px] text-center mb-10" style={{ color: "rgb(13, 27, 42)" }}>
              Enterprise Travel Is Hard. Most Tools Make It Harder.
            </h2>
            <div className="max-w-3xl mx-auto space-y-5 text-muted-foreground text-sm md:text-base leading-relaxed">
              <p>
                International TMCs offer polished enterprise solutions - but they're expensive, slow to implement, and built for markets that don't match African business realities. Pricing in dollars. Support in another time zone. Workflows designed for corporate structures that don't reflect how African organisations actually operate.
              </p>
              <p>
                Local alternatives often lack the compliance rigour, reporting depth, and approval chain complexity that large corporates require. You end up with a tool that handles bookings but can't handle governance.
              </p>
              <p className="font-semibold text-foreground text-base md:text-lg">
                CoopX Enterprise is the alternative: enterprise-grade travel management, built and supported locally.
              </p>
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4" style={{ maxWidth: "1200px" }}>
          <RevealBlock>
            <h2 className="text-3xl sm:text-4xl md:text-[48px] md:leading-[56px] font-[660] tracking-[-2px] text-center mb-14" style={{ color: "rgb(13, 27, 42)" }}>
              Enterprise-Grade. African-Built.
            </h2>
          </RevealBlock>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feat) => {
              const Icon = feat.icon;
              return (
                <RevealBlock key={feat.title}>
                  <div className="bg-card rounded-2xl border border-border p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow h-full">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="h3-global text-foreground mb-3">{feat.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{feat.body}</p>
                  </div>
                </RevealBlock>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 md:py-28 bg-[hsl(216,60%,97%)]">
        <div className="container mx-auto px-4" style={{ maxWidth: "1200px" }}>
          <RevealBlock>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-4xl md:text-6xl font-[660] text-primary mb-2">{stat.value}</p>
                  <p className="text-sm md:text-base text-muted-foreground font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* Onboarding Timeline */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4" style={{ maxWidth: "800px" }}>
          <RevealBlock>
            <h2 className="text-3xl sm:text-4xl md:text-[48px] md:leading-[56px] font-[660] tracking-[-2px] text-center mb-14" style={{ color: "rgb(13, 27, 42)" }}>
              How Enterprise Onboarding Works
            </h2>
          </RevealBlock>
          <div className="relative">
            <div className="absolute left-[23px] top-0 bottom-0 w-px bg-border hidden md:block" />
            <div className="space-y-10">
              {timeline.map((item) => (
                <RevealBlock key={item.step}>
                  <div className="flex gap-6 md:gap-8">
                    <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold">
                      {item.step}
                    </div>
                    <div className="pt-2">
                      <h3 className="h3-global text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                </RevealBlock>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Final CTA + Form */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-4" style={{ maxWidth: "1200px" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <RevealBlock>
              <h2 className="text-3xl sm:text-4xl md:text-[48px] md:leading-[56px] font-[660] tracking-[-2px] text-primary-foreground mb-4">
                Let's Build Your Travel Programme
              </h2>
              <p className="text-primary-foreground/80 text-sm md:text-base leading-relaxed mb-8 max-w-lg">
                Tell us about your organisation and travel needs. Our enterprise team will respond within one business day with a tailored proposal.
              </p>
              <Button size="xl" className="bg-white text-primary hover:bg-white/90 cta-responsive min-h-[48px] font-semibold mb-4">
                Talk to Enterprise Sales
              </Button>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/60 text-sm flex items-center gap-2 hover:text-primary-foreground transition-colors w-fit"
              >
                <MessageCircle className="w-4 h-4" />
                Or chat with us on WhatsApp
              </a>
            </RevealBlock>

            <RevealBlock>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="bg-white rounded-2xl p-8 md:p-10 shadow-lg space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-foreground mb-1.5">Full Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} required maxLength={100} className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-foreground mb-1.5">Company *</label>
                    <input name="company" value={form.company} onChange={handleChange} required maxLength={100} className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary transition-colors" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-foreground mb-1.5">Job Title *</label>
                    <input name="title" value={form.title} onChange={handleChange} required maxLength={100} className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-foreground mb-1.5">Work Email *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} required maxLength={255} className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary transition-colors" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-foreground mb-1.5">Phone Number</label>
                    <input name="phone" type="tel" value={form.phone} onChange={handleChange} maxLength={20} className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-foreground mb-1.5">Number of Travellers</label>
                    <select name="travellers" value={form.travellers} onChange={handleChange} className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary transition-colors">
                      <option value="">Select range</option>
                      <option value="100-250">100–250</option>
                      <option value="250-500">250–500</option>
                      <option value="500-1000">500–1,000</option>
                      <option value="1000+">1,000+</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-foreground mb-1.5">Tell us about your travel programme</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={3} maxLength={1000} className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary transition-colors resize-none" />
                </div>
                <Button type="submit" variant="hero" className="w-full min-h-[48px]">
                  <Send className="w-4 h-4 mr-2" />
                  Request Enterprise Demo
                </Button>
              </form>
            </RevealBlock>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFab />
    </div>
  );
};

export default Corporates;
