import independentHeroImg from "@/assets/independent-hero.png";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  MessageCircle,
  Check,
  Plane,
  Hotel,
  Globe,
  Coins,
  ShieldCheck,
  GraduationCap,
  Briefcase,
  Users,
  Handshake,
  Smartphone,
  Rocket,
  UserPlus,
  ChevronDown,
  BookOpen,
  ShoppingBag,
} from "lucide-react";
import { useState } from "react";
import { WHATSAPP_URL } from "@/lib/constants";
import { SEO } from "@/components/SEO";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const audiences = [
  { icon: GraduationCap, text: "Recent graduates looking for legitimate income" },
  { icon: Briefcase, text: "Side hustlers stacking multiple revenue streams" },
  { icon: Users, text: "Stay-at-home parents with strong personal networks" },
  { icon: Handshake, text: "Community leaders, alumni group organisers, church leaders" },
  { icon: Smartphone, text: "Social media creators with travel-interested audiences" },
  { icon: Rocket, text: "Aspiring travel entrepreneurs not ready for a full agency" },
  { icon: UserPlus, text: "Anyone whose friends, family, or contacts travel" },
];

const features = [
  { icon: Plane, title: "Sell Real Flights", body: "Access flight inventory from GDS systems (Amadeus, Sabre, Galileo), NDC connections, consolidators, and aggregators." },
  { icon: Hotel, title: "Sell Real Hotels", body: "Hotels from leading global travel suppliers - the rooms used by professional travel platforms worldwide." },
  { icon: Globe, title: "Sell Real Tours", body: "Tours and travel packages from international suppliers. Bundle for higher commissions." },
  { icon: Coins, title: "Earn Real Commissions", body: "Every booking earns you a commission. Not a referral fee. Not a sign-up bonus." },
  { icon: ShieldCheck, title: "IATA-Backed", body: "You're using the same IATA-accredited platform that powers 200+ professional travel agencies." },
];

const trustPoints = [
  "You earn commissions on real bookings - not on recruiting other people",
  "There is no upline, no downline, no pyramid structure",
  "The technology is IATA-accredited - you can verify this independently",
  "All flight transactions are settled through proper BSP channels",
  "200+ professional travel agencies use the exact same platform",
  "We don't make income guarantees - your earnings depend on what you sell",
  "There are no 'levels' to unlock or memberships to upgrade",
];

const earningsStats = [
  { value: "$500", label: "Average First-Month Earnings" },
  { value: "$2,800", label: "Top Independent Monthly" },
  { value: "120+", label: "Active Independents" },
];

const steps = [
  { number: "1", title: "Join the Programme", body: "Sign up and get access to the platform. Free to join - start at $0 upfront." },
  { number: "2", title: "Complete Training", body: "We walk you through how to search inventory, create bookings, and manage customers. Most Independents are ready to sell within hours." },
  { number: "3", title: "Start Selling", body: "Share deals with your network, book travel for customers, earn commissions on every completed booking." },
];

const faqs = [
  {
    q: "Is this an MLM or pyramid scheme?",
    a: "No. You earn commissions only on bookings you make - not on recruiting other people. There is no upline, no downline, and no multi-level structure. It's a straightforward sales model: you sell travel, you earn a commission.",
  },
  {
    q: "Do I need travel experience?",
    a: "Not at all. The platform handles the complexity - GDS connections, ticketing, supplier management. We provide training to get you selling within hours. If you can use a smartphone, you can use Intraverse.",
  },
  {
    q: "How much does it cost to join?",
    a: "Joining the Independents Programme is free. You only need a device with internet access. There are no hidden fees, no monthly subscriptions to unlock features, and no 'levels' to pay into.",
  },
  {
    q: "How do I get paid?",
    a: "Commissions are tracked in your dashboard in real-time. Payouts are processed to your African bank account on a regular schedule. You can see exactly what you've earned and when it will be paid.",
  },
  {
    q: "Can I do this part-time?",
    a: "Absolutely. Many of our most successful Independents started part-time - selling to friends, family, and their social network alongside their day job or studies. You set your own pace.",
  },
];

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function RevealBlock({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, revealClass } = useScrollReveal();
  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${revealClass} ${className}`}>
      {children}
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-accent/40 transition-colors"
      >
        <span className="text-sm md:text-base font-semibold text-foreground">{q}</span>
        <ChevronDown className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

const IndependentsAudience = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="For Aspiring Travel Agents — Start Your Travel Business | Intraverse"
        description="Become a travel agent without IATA accreditation. Intraverse gives you booking technology, supplier access, and training to launch your travel business in Nigeria."
        canonical="https://intraverse.africa/for/independents"
      />
      <Navbar />
      <div className="h-16" />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden section-gradient-blue">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent blur-3xl translate-y-1/2 -translate-x-1/4" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="ind-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#ind-grid)" />
          </svg>
        </div>

        <div className="container relative mx-auto px-4 py-20 lg:py-32" style={{ maxWidth: "1200px" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <RevealBlock>
              <h1 className="text-3xl sm:text-4xl md:text-[56px] font-[660] leading-[1.1] md:leading-[64px] tracking-[-2px]" style={{ color: "rgb(23, 19, 33)" }}>
                Turn Your Network Into a Travel Business. Starting Today.
              </h1>
              <p className="mt-6 text-base sm:text-lg font-normal leading-relaxed" style={{ color: "rgb(116, 113, 122)" }}>
                Whether you're a graduate looking for income, a side hustler stacking revenue streams, a stay-at-home parent with a strong network, or someone with a community ready to book travel - the Intraverse Independents Programme gives you the tools, the inventory, and the IATA-backed infrastructure to start earning. No agency required. No experience needed. No capital upfront.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-start gap-4">
                <Button variant="hero" size="xl" className="cta-responsive min-h-[48px]" asChild>
                  <a href="/for/independents/interest" target="_blank" rel="noopener noreferrer">
                    Join the Independents Programme
                  </a>
                </Button>
                <Button variant="whatsapp" size="xl" className="cta-responsive min-h-[48px]" asChild>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </RevealBlock>

            <RevealBlock className="flex justify-center">
              <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden border border-border shadow-lg">
                <img
                  src={independentHeroImg}
                  alt="Young African independent entrepreneur working on laptop while on a phone call"
                  className="w-full h-full object-cover"
                />
              </div>
            </RevealBlock>
          </div>
        </div>
      </section>

      {/* ── WHO THIS IS FOR ── */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4" style={{ maxWidth: "1200px" }}>
          <RevealBlock>
            <h2 className="text-3xl sm:text-4xl md:text-[48px] md:leading-[56px] font-[660] tracking-[-2px] text-center mb-12" style={{ color: "rgb(13, 27, 42)" }}>
              This Programme Is Built for...
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {audiences.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.text} className="flex items-start gap-4 bg-card rounded-xl border border-border p-5 shadow-sm">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-sm md:text-base text-foreground leading-snug">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section className="py-16 md:py-24 bg-[hsl(216,60%,97%)]">
        <div className="container mx-auto px-4" style={{ maxWidth: "1200px" }}>
          <RevealBlock>
            <h2 className="text-3xl sm:text-4xl md:text-[48px] md:leading-[56px] font-[660] tracking-[-2px] text-center mb-8" style={{ color: "rgb(13, 27, 42)" }}>
              You Want to Earn in Travel. The Barriers Are Real.
            </h2>
            <div className="max-w-3xl mx-auto space-y-5 text-muted-foreground text-sm md:text-base leading-relaxed">
              <p>
                Starting a travel business the traditional way requires IATA accreditation - which means millions in capital, years of industry experience, and corporate guarantees most people can't provide. Access to GDS systems like Amadeus or Sabre? That requires contracts, training, and ongoing fees.
              </p>
              <p>
                So what are the alternatives? You've probably seen the ads: "Make money from travel!", "Earn while you sleep!", "Join our travel network!" Most of them are referral schemes, MLM structures, or programmes that earn more from recruiting you than from actual travel bookings.
              </p>
              <p className="font-semibold text-foreground text-base md:text-lg">
                The Independents Programme is none of those things.
              </p>
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* ── SOLUTION ── */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4" style={{ maxWidth: "1200px" }}>
          <RevealBlock>
            <h2 className="text-3xl sm:text-4xl md:text-[48px] md:leading-[56px] font-[660] tracking-[-2px] text-center mb-4" style={{ color: "rgb(13, 27, 42)" }}>
              What You Get Access To
            </h2>
            <p className="text-center text-muted-foreground text-sm md:text-base max-w-2xl mx-auto mb-12">
              Real travel inventory. Real commissions. No gimmicks.
            </p>
          </RevealBlock>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat) => {
              const Icon = feat.icon;
              return (
                <RevealBlock key={feat.title}>
                  <div className="bg-card rounded-xl border border-border p-7 shadow-sm h-full hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="h3-global text-foreground mb-2">{feat.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feat.body}</p>
                  </div>
                </RevealBlock>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ANTI-SCAM TRUST BLOCK ── */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4" style={{ maxWidth: "1200px" }}>
          <RevealBlock>
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="w-8 h-8 text-primary-foreground flex-shrink-0" />
                <h2 className="text-2xl sm:text-3xl md:text-[40px] md:leading-[48px] font-[660] tracking-[-1px] text-primary-foreground">
                  Let's Be Direct: This Is Not a Scam.
                </h2>
              </div>
              <p className="text-primary-foreground/80 text-sm md:text-base leading-relaxed mb-8 max-w-3xl">
                We know what you're thinking. You've seen "make money from travel" ads. You've been pitched MLM schemes. You've heard the stories. You're skeptical - and you should be.
              </p>
              <p className="text-primary-foreground font-semibold text-base md:text-lg mb-6">
                Here's how the Independents Programme is different:
              </p>

              <div className="space-y-4 mb-10">
                {trustPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mt-0.5">
                      <Check className="w-3.5 h-3.5 text-primary-foreground" />
                    </div>
                    <p className="text-sm md:text-base text-primary-foreground/90">{point}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/20 pt-6">
                <p className="text-primary-foreground/80 text-sm md:text-base leading-relaxed italic">
                  If any part of this sounds too good to be true, talk to us. We'll answer every question. We'll show you the platform live. We'll connect you with real Independents already earning. Nothing is hidden.
                </p>
              </div>
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* ── EARNINGS ── */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4" style={{ maxWidth: "1200px" }}>
          <RevealBlock>
            <h2 className="text-3xl sm:text-4xl md:text-[48px] md:leading-[56px] font-[660] tracking-[-2px] text-center mb-3" style={{ color: "rgb(13, 27, 42)" }}>
              What Can You Actually Earn?
            </h2>
            <p className="text-center text-muted-foreground text-sm md:text-base max-w-2xl mx-auto mb-12">
              Earnings depend entirely on how much you sell. Here's what's realistic:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
              {earningsStats.map((stat) => (
                <div key={stat.label} className="text-center bg-card rounded-xl border border-border p-8 shadow-sm">
                  <p className="text-4xl md:text-5xl font-[660] text-primary mb-2">{stat.value}</p>
                  <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-xs text-muted-foreground/70 italic max-w-xl mx-auto">
              Earnings vary based on individual effort, network size, and sales volume. We do not guarantee any specific income.
            </p>
          </RevealBlock>
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section className="py-16 md:py-24 bg-[hsl(216,60%,97%)]">
        <div className="container mx-auto px-4" style={{ maxWidth: "1200px" }}>
          <RevealBlock>
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-16 rounded-full overflow-hidden border border-border mx-auto mb-6">
                <img
                  src={independentHeroImg}
                  alt="Independent entrepreneur"
                  className="w-full h-full object-cover"
                />
              </div>
              <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                "I was skeptical at first - I'd seen too many 'travel business' schemes. But within my first week I booked three flights for people in my network and earned real commissions. No tricks, no levels, just a proper platform. I wish I'd started sooner."
              </blockquote>
              <p className="text-sm text-muted-foreground font-medium">
                - Chioma A., Independent, Abuja
              </p>
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4" style={{ maxWidth: "1200px" }}>
          <RevealBlock>
            <h2 className="text-3xl sm:text-4xl md:text-[48px] md:leading-[56px] font-[660] tracking-[-2px] text-center mb-12" style={{ color: "rgb(13, 27, 42)" }}>
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, i) => {
                const icons = [BookOpen, GraduationCap, ShoppingBag];
                const StepIcon = icons[i];
                return (
                  <div key={step.number} className="bg-card rounded-xl border border-border p-8 shadow-sm text-center">
                    <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-5">
                      {step.number}
                    </div>
                    <h3 className="h3-global text-foreground mb-3">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.body}</p>
                  </div>
                );
              })}
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 md:py-24 bg-[hsl(216,60%,97%)]">
        <div className="container mx-auto px-4" style={{ maxWidth: "800px" }}>
          <RevealBlock>
            <h2 className="text-3xl sm:text-4xl md:text-[48px] md:leading-[56px] font-[660] tracking-[-2px] text-center mb-12" style={{ color: "rgb(13, 27, 42)" }}>
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 text-center" style={{ maxWidth: "1200px" }}>
          <RevealBlock>
            <h2 className="text-3xl sm:text-4xl md:text-[48px] md:leading-[56px] font-[660] tracking-[-2px] text-primary-foreground mb-4">
              Ready to Start Earning in Travel?
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-10 text-sm md:text-base leading-relaxed">
              Join the Independents Programme and start selling flights, hotels, and tours from global suppliers. No agency needed. No experience required. Just real technology, real inventory, and real commissions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="xl" className="bg-white text-primary hover:bg-white/90 cta-responsive min-h-[48px]" asChild>
                <a href="/for/independents/interest" target="_blank" rel="noopener noreferrer">
                  Join the Independents Programme
                </a>
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

      <Footer />
      <WhatsAppFab />
    </div>
  );
};

export default IndependentsAudience;
