import { Navbar } from "@/components/Navbar";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  MessageCircle,
  Plane,
  Wallet,
  Gift,
  CalendarCheck,
  Layers,
  Globe,
  Link2,
  Handshake,
  Zap,
  MapPin,
  BadgeDollarSign,
  ArrowRight,
  Send,
} from "lucide-react";
import { useState } from "react";
import { WHATSAPP_URL } from "@/lib/constants";
import { SEO } from "@/components/SEO";

const useCases = [
  { icon: Plane, text: "Consumer travel apps and marketplaces" },
  { icon: Wallet, text: "Fintech products with travel features (BNPL, super-apps, neobanks)" },
  { icon: Gift, text: "Loyalty and rewards platforms with travel redemption" },
  { icon: CalendarCheck, text: "B2B platforms (events, conferences, employee benefits)" },
  { icon: Layers, text: "Vertical SaaS with travel use cases" },
  { icon: Globe, text: "Anything travel-adjacent that needs real inventory" },
];

const features = [
  { icon: Link2, title: "Full API Access", body: "RESTful API with search, booking, and ticketing endpoints. Aggregated flight, hotel, and tour inventory from GDS, NDC, consolidators, and global suppliers." },
  { icon: Handshake, title: "Co-Build Partnerships", body: "Custom integrations, co-marketing, and revenue-share arrangements for strong-fit startups. We invest in partners who share our vision." },
  { icon: Zap, title: "Skip the Years", body: "No IATA application. No GDS contracts. No supplier negotiations. We've done all that work - you just build on top of it." },
  { icon: MapPin, title: "Built for African Markets", body: "Naira pricing, local payment methods, infrastructure designed for Nigeria and West Africa. Not a Western product with a currency converter." },
  { icon: BadgeDollarSign, title: "Pricing That Scales", body: "Start small with developer-friendly pricing. Custom enterprise pricing for high-volume partners. No upfront commitments required." },
];

const partnershipSteps = [
  "Initial Conversation",
  "Technical Scoping",
  "Commercial Structure",
  "Sandbox Access",
  "Production Launch",
  "Ongoing Partnership",
];

const caseStudies = [
  { name: "TravelPay", desc: "Fintech super-app integrated Intraverse flights API to offer travel bookings alongside payments and lending.", outcome: "Launched travel feature in 6 weeks" },
  { name: "RewardHub", desc: "Loyalty platform connected to Intraverse hotels and tours inventory for points redemption.", outcome: "3x increase in reward redemptions" },
  { name: "EventStack", desc: "B2B events platform embedded Intraverse flights and hotels for conference attendee travel.", outcome: "40% higher event registration completion" },
];

function RevealBlock({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, revealClass } = useScrollReveal();
  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${revealClass} ${className}`}>
      {children}
    </div>
  );
}

const Startups = () => {
  const [form, setForm] = useState({ name: "", company: "", role: "", email: "", message: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="For Startups — Embed Travel Into Your Product via API | Intraverse"
        description="Add flight booking, hotel search, and travel payments to your app with Intraverse's API. Pre-built components, sandbox testing, and developer-first documentation."
        canonical="https://intraverse.africa/for/startups"
      />
      <Navbar />
      <div className="h-16" />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[hsl(220,30%,8%)]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl -translate-y-1/2 translate-x-1/4" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="st-grid" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="0.8" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#st-grid)" />
          </svg>
        </div>

        <div className="container relative mx-auto px-4 py-24 lg:py-36 text-center" style={{ maxWidth: "1200px" }}>
          <RevealBlock>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs font-medium tracking-wide uppercase mb-8">
              <Zap className="w-3.5 h-3.5" /> For Startups & Tech Partners
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-[64px] font-[660] leading-[1.1] md:leading-[76px] tracking-[-2px] max-w-5xl mx-auto text-white">
              Skip Years of Travel Infrastructure. Build on Intraverse Instead.
            </h1>
            <p className="mt-8 text-base sm:text-lg md:text-xl font-normal max-w-3xl mx-auto leading-relaxed text-white/60">
              Building a travel app, fintech with travel features, super-app, or marketplace? Don't spend three years negotiating with airlines, hotels, and IATA. Plug into Intraverse's aggregated travel inventory through our API - and explore co-build partnerships with our team. Launch in months, not years.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="xl" className="bg-white text-foreground hover:bg-white/90 cta-responsive min-h-[48px] font-semibold">
                Talk to Our Partnerships Team
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
            <h2 className="text-3xl sm:text-4xl md:text-[48px] md:leading-[56px] font-[660] tracking-[-2px] text-center mb-4" style={{ color: "rgb(13, 27, 42)" }}>
              Who Builds With Intraverse?
            </h2>
            <p className="text-center text-muted-foreground text-sm md:text-base mb-14 max-w-xl mx-auto">
              If your product touches travel, we can power the inventory behind it.
            </p>
          </RevealBlock>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {useCases.map((item) => {
              const Icon = item.icon;
              return (
                <RevealBlock key={item.text}>
                  <div className="flex items-start gap-4 bg-card rounded-xl border border-border p-6 shadow-sm h-full">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-sm md:text-base text-foreground leading-snug">{item.text}</p>
                  </div>
                </RevealBlock>
              );
            })}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 md:py-28 bg-[hsl(216,60%,97%)]">
        <div className="container mx-auto px-4" style={{ maxWidth: "1200px" }}>
          <RevealBlock>
            <h2 className="text-3xl sm:text-4xl md:text-[48px] md:leading-[56px] font-[660] tracking-[-2px] text-center mb-10" style={{ color: "rgb(13, 27, 42)" }}>
              Travel Infrastructure Is Expensive, Slow, and Complicated
            </h2>
            <div className="max-w-3xl mx-auto space-y-5 text-muted-foreground text-sm md:text-base leading-relaxed">
              <p>
                Want to sell flights in your app? You'll need IATA accreditation - that's millions in capital, corporate guarantees, and 6-12 months of process. Then GDS contracts with Amadeus, Sabre, and Travelport - each with separate negotiations, technical integrations, and ongoing fees.
              </p>
              <p>
                Hotels require supplier agreements. Tours require aggregator contracts. BSP settlement requires banking infrastructure. Each piece takes months. The total setup time? Years. The cost? Tens of millions. And every month you're not live, your competitors are.
              </p>
              <p className="font-semibold text-foreground text-base md:text-lg">
                Or you could build on Intraverse and launch in weeks.
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
              What You Get as a Partner
            </h2>
          </RevealBlock>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <RevealBlock key={feat.title} className={i === features.length - 1 ? "md:col-span-2 md:max-w-2xl md:mx-auto" : ""}>
                  <div className="bg-card rounded-2xl border border-border p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow h-full">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-primary" />
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

      {/* Use Cases - hidden
      <section className="py-20 md:py-28 bg-[hsl(216,60%,97%)]">
        <div className="container mx-auto px-4" style={{ maxWidth: "1200px" }}>
          <RevealBlock>
            <h2 className="text-3xl sm:text-4xl md:text-[48px] md:leading-[56px] font-[660] tracking-[-2px] text-center mb-4" style={{ color: "rgb(13, 27, 42)" }}>
              Startups Already Building With Intraverse
            </h2>
            <p className="text-center text-xs text-muted-foreground/60 uppercase tracking-widest mb-14">
              [Placeholder - replace with real partnership case studies]
            </p>
          </RevealBlock>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((cs) => (
              <RevealBlock key={cs.name}>
                <div className="bg-card rounded-2xl border border-border p-8 shadow-sm h-full">
                  <div className="w-12 h-12 rounded-lg bg-muted-foreground/10 flex items-center justify-center mb-5">
                    <span className="text-[10px] text-muted-foreground font-bold uppercase">{cs.name.slice(0, 2)}</span>
                  </div>
                  <h3 className="h3-global text-foreground mb-2">{cs.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{cs.desc}</p>
                  <p className="text-xs font-semibold text-primary">{cs.outcome}</p>
                </div>
              </RevealBlock>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Partnership Process */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4" style={{ maxWidth: "1200px" }}>
          <RevealBlock>
            <h2 className="text-3xl sm:text-4xl md:text-[48px] md:leading-[56px] font-[660] tracking-[-2px] text-center mb-14" style={{ color: "rgb(13, 27, 42)" }}>
              Partnership Process
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {partnershipSteps.map((step, i) => (
                <div key={step} className="text-center">
                  <div className="w-11 h-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold mx-auto mb-3">
                    {i + 1}
                  </div>
                  <p className="text-sm font-medium text-foreground leading-snug">{step}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link to="/partnerships" className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:underline">
                Explore all partnership types
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* Final CTA + Form */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-4" style={{ maxWidth: "1200px" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <RevealBlock>
              <h2 className="text-3xl sm:text-4xl md:text-[48px] md:leading-[56px] font-[660] tracking-[-2px] text-primary-foreground mb-4">
                Let's Build Something Together
              </h2>
              <p className="text-primary-foreground/80 text-sm md:text-base leading-relaxed mb-8 max-w-lg">
                Tell us what you're building and we'll figure out the best way to partner - from API access to full co-build arrangements.
              </p>
              <Button size="xl" className="bg-white text-primary hover:bg-white/90 cta-responsive min-h-[48px] font-semibold mb-4">
                Talk to Our Partnerships Team
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
              <form onSubmit={(e) => e.preventDefault()} className="bg-white rounded-2xl p-8 md:p-10 shadow-lg space-y-5">
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
                    <label className="block text-xs font-medium text-foreground mb-1.5">Your Role *</label>
                    <input name="role" value={form.role} onChange={handleChange} required maxLength={100} className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-foreground mb-1.5">Email *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} required maxLength={255} className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-foreground mb-1.5">Tell us about what you're building *</label>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={4} maxLength={1000} className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary transition-colors resize-none" />
                </div>
                <Button type="submit" variant="hero" className="w-full min-h-[48px]">
                  <Send className="w-4 h-4 mr-2" />
                  Start the Conversation
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

export default Startups;
