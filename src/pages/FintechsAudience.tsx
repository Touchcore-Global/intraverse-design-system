import { Navbar } from "@/components/Navbar";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  MessageCircle,
  Landmark,
  Smartphone,
  CreditCard,
  Wallet,
  Gift,
  TrendingUp,
  Plug,
  BadgeDollarSign,
  Building2,
  BarChart3,
  Zap,
  Shield,
  Handshake,
  ArrowRight,
  Send,
  Clock,
  Wrench,
  DollarSign,
  Star,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { WHATSAPP_URL } from "@/lib/constants";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const fintechPartnerSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  company: z.string().trim().min(1, "Company is required").max(100),
  role: z.string().trim().max(100).optional().or(z.literal("")),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(50).optional().or(z.literal("")),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const FINTECH_MIN_TIME_ON_PAGE_MS = 3000;
const FINTECH_MIN_INTERVAL_BETWEEN_SUBMITS_MS = 30_000;
const FINTECH_LAST_SUBMIT_KEY = "intraverse:fintech-partner:last-submit";

/* ── WHO THIS IS FOR ── */
const whoCards = [
  { icon: Landmark, text: "Neobanks and digital banks expanding beyond core banking" },
  { icon: Smartphone, text: "Super-apps consolidating financial and lifestyle services" },
  { icon: CreditCard, text: "BNPL providers adding travel as a high-value vertical" },
  { icon: Wallet, text: "Payment companies embedding travel into wallet experiences" },
  { icon: Gift, text: "Loyalty and rewards platforms enabling travel redemption" },
  { icon: TrendingUp, text: "Any Nigerian fintech with users and a travel revenue gap" },
];

/* ── SOLUTION FEATURES ── */
const features = [
  {
    icon: Plug,
    title: "Embedded Travel API",
    body: "Plug Intraverse's REST API directly into your existing app. Offer flight, hotel, and tour booking inside your fintech experience without sending users to a third-party site. Aggregated inventory from GDS, NDC, consolidators, and aggregators — accessible through one clean API.",
  },
  {
    icon: CreditCard,
    title: "Native BNPL via Odiopay",
    body: "Activate Odiopay's Fare Lock and Pay Later inside your app. Your users can book travel and pay in instalments directly from their wallet or card on file. No external redirects. No abandoned baskets.",
  },
  {
    icon: Building2,
    title: "Wallet & Card Settlement",
    body: "Payments flow through your existing rails. Users pay you. You settle with Intraverse. Customer experience stays inside your app, branding stays yours.",
  },
  {
    icon: BarChart3,
    title: "Revenue Sharing Model",
    body: "You earn on every flight, hotel, and tour booked through your platform. Custom commercial structures available — flat commission, revenue share, or hybrid models depending on volume and integration depth.",
  },
  {
    icon: Zap,
    title: "Skip the 2-Year Build",
    body: "No IATA application. No GDS contracts. No BSP setup. No supplier negotiations. We've built the infrastructure. You build the user experience.",
  },
  {
    icon: Shield,
    title: "Built for Nigerian Realities",
    body: "Naira pricing, NDPR-compliant data handling, local payment rails, and a partnerships team based in Lagos. We understand the regulatory environment because we operate in it.",
  },
];

/* ── WHY FINTECHS CHOOSE ── */
const benefits = [
  { icon: Zap, title: "Speed to Market", body: "Launch travel as a feature in 6–12 weeks instead of 18–24 months." },
  { icon: DollarSign, title: "Capital Efficiency", body: "No upfront capital for IATA, GDS contracts, or supplier deposits. Pay as you scale." },
  { icon: Wrench, title: "Engineering Simplicity", body: "One clean REST API. Sandbox environment for testing. SDKs for Node, Python, and PHP. Webhook support for real-time booking events." },
  { icon: Shield, title: "Compliance Built In", body: "IATA accreditation, BSP settlement, NDPR compliance, and PCI-compliant payment handling — all included. Your compliance team will love it." },
  { icon: Handshake, title: "Co-Build Partnerships", body: "For high-volume integrations, our team works directly with yours on custom integrations, branded checkout flows, and joint go-to-market." },
];

/* ── PARTNERSHIP PROCESS ── */
const processSteps = [
  { step: 1, title: "Discovery Call", body: "We understand your user base, product strategy, and integration timeline" },
  { step: 2, title: "Technical Scoping", body: "Our engineering team reviews your stack and integration requirements" },
  { step: 3, title: "Commercial Structure", body: "We agree on pricing, revenue share, and partnership terms" },
  { step: 4, title: "Sandbox Integration", body: "Your team builds and tests in our sandbox environment" },
  { step: 5, title: "Production Launch", body: "We support your go-live with technical and commercial readiness" },
  { step: 6, title: "Ongoing Partnership", body: "Quarterly business reviews, dedicated technical contact, joint optimisation" },
];

const foundingBenefits = [
  "Preferential commercial terms",
  "Dedicated engineering support",
  "Roadmap influence",
];

function RevealBlock({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, revealClass } = useScrollReveal();
  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${revealClass} ${className}`}>
      {children}
    </div>
  );
}

const FintechsAudience = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", company: "", role: "", email: "", phone: "", message: "" });
  const [website, setWebsite] = useState(""); // honeypot
  const [submitting, setSubmitting] = useState(false);
  const mountedAtRef = useRef<number>(Date.now());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (website.trim() !== "") {
      toast({ title: "Request sent!", description: "We've received your request and will be in touch shortly." });
      setForm({ name: "", company: "", role: "", email: "", phone: "", message: "" });
      return;
    }

    if (Date.now() - mountedAtRef.current < FINTECH_MIN_TIME_ON_PAGE_MS) {
      toast({ title: "Hold on a moment", description: "Please take a moment to review your request before sending.", variant: "destructive" });
      return;
    }

    try {
      const lastRaw = localStorage.getItem(FINTECH_LAST_SUBMIT_KEY);
      const last = lastRaw ? Number(lastRaw) : 0;
      const sinceLast = Date.now() - last;
      if (last && sinceLast < FINTECH_MIN_INTERVAL_BETWEEN_SUBMITS_MS) {
        const wait = Math.ceil((FINTECH_MIN_INTERVAL_BETWEEN_SUBMITS_MS - sinceLast) / 1000);
        toast({ title: "Please wait", description: `You can send another request in ${wait}s.`, variant: "destructive" });
        return;
      }
    } catch {
      // ignore
    }

    const parsed = fintechPartnerSchema.safeParse(form);
    if (!parsed.success) {
      toast({
        title: "Please check your details",
        description: parsed.error.issues[0]?.message ?? "Some fields are invalid.",
        variant: "destructive",
      });
      return;
    }

    const messageWithPhone = parsed.data.phone
      ? `${parsed.data.message}\n\nPhone: ${parsed.data.phone}`
      : parsed.data.message;
    const partnershipTypeLabel = "Fintech / Embedded Travel";

    setSubmitting(true);
    try {
      const id = crypto.randomUUID();
      const submittedAt = new Date().toUTCString();

      const { error: insertError } = await supabase.from("partner_submissions").insert({
        id,
        name: parsed.data.name,
        company: parsed.data.company,
        role: parsed.data.role || null,
        email: parsed.data.email,
        partnership_type: "fintech",
        message: messageWithPhone,
      });

      if (insertError) throw insertError;

      await Promise.all([
        supabase.functions.invoke("send-transactional-email", {
          body: {
            templateName: "partner-notification",
            recipientEmail: "support@intraverse.africa",
            idempotencyKey: `partner-notify-${id}`,
            templateData: {
              name: parsed.data.name,
              email: parsed.data.email,
              company: parsed.data.company,
              role: parsed.data.role || undefined,
              partnershipType: partnershipTypeLabel,
              message: messageWithPhone,
              submittedAt,
            },
          },
        }),
        supabase.functions.invoke("send-transactional-email", {
          body: {
            templateName: "partner-confirmation",
            recipientEmail: parsed.data.email,
            idempotencyKey: `partner-confirm-${id}`,
            templateData: {
              name: parsed.data.name,
              company: parsed.data.company,
              partnershipType: partnershipTypeLabel,
              message: messageWithPhone,
            },
          },
        }),
      ]);

      try {
        localStorage.setItem(FINTECH_LAST_SUBMIT_KEY, String(Date.now()));
      } catch {
        // ignore
      }

      toast({
        title: "Request sent!",
        description: "We've received your request and emailed you a confirmation. Our partnerships team will be in touch shortly.",
      });
      setForm({ name: "", company: "", role: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error("Fintech partnership form submission failed", err);
      toast({
        title: "Something went wrong",
        description: "We couldn't send your request. Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    document.title = "For Fintechs | Embed Travel as a Revenue Stream | Intraverse API";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Nigerian fintechs, neobanks, and super-apps use Intraverse to add flight, hotel & tour booking as a native revenue stream. API + BNPL. Launch in weeks.");
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="h-16" />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0D1B2A 0%, #1B2D45 50%, #0D1B2A 100%)" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" style={{ background: "rgba(30, 97, 220, 0.08)" }} />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" style={{ background: "rgba(30, 97, 220, 0.05)" }} />
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="fintech-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#fintech-grid)" />
          </svg>
        </div>

        <div className="container relative mx-auto px-4 py-20 lg:py-28 text-center" style={{ maxWidth: "1200px" }}>
          <RevealBlock>
            <h1 className="text-3xl sm:text-4xl md:text-[56px] font-[660] leading-[1.1] md:leading-[68px] tracking-[-2px] max-w-4xl mx-auto text-white">
              Your Users Are Already Spending on Travel. Capture That Revenue.
            </h1>
            <p className="mt-8 text-base sm:text-lg md:text-xl font-normal max-w-3xl mx-auto leading-relaxed text-white/70">
              Your users are buying flights, booking hotels, and paying for travel every day — and every Naira goes to your competitors. Intraverse gives Nigerian fintechs, neobanks, super-apps, and digital wallets a turnkey way to add travel booking as a native revenue stream. Aggregated flight, hotel, and tour inventory through one API. Native BNPL via Odiopay. Launch in months, not years.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#partnership-form">
                <Button variant="hero" size="xl" className="cta-responsive min-h-[48px]">
                  Talk to Our Partnerships Team
                </Button>
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp" size="xl" className="cta-responsive min-h-[48px]" asChild>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </a>
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* ── WHO THIS IS FOR ── */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4" style={{ maxWidth: "1200px" }}>
          <RevealBlock>
            <h2 className="text-3xl sm:text-4xl md:text-[48px] md:leading-[56px] font-[660] tracking-[-2px] text-center mb-14" style={{ color: "rgb(13, 27, 42)" }}>
              Who This Is For
            </h2>
          </RevealBlock>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whoCards.map((item) => {
              const Icon = item.icon;
              return (
                <RevealBlock key={item.text}>
                  <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-xl hover:border-primary/40 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-sm md:text-base text-foreground/80 leading-relaxed">{item.text}</p>
                  </div>
                </RevealBlock>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section className="py-16 md:py-24 bg-[hsl(216,60%,97%)]">
        <div className="container mx-auto px-4" style={{ maxWidth: "800px" }}>
          <RevealBlock>
            <h2 className="text-3xl sm:text-4xl md:text-[48px] md:leading-[56px] font-[660] tracking-[-2px] text-center mb-10" style={{ color: "rgb(13, 27, 42)" }}>
              You're Watching Travel Revenue Walk Out the Door
            </h2>
            <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                Your fintech has millions of users. Every month, those users spend billions of Naira on travel — flights to Dubai, hotels in Lagos, tours in Cape Town, school runs to the UK. Every transaction is a revenue opportunity you're losing to legacy travel platforms, banks, and OTAs.
              </p>
              <p>
                Building travel infrastructure in-house is brutal. IATA accreditation alone takes months and capital. GDS contracts require legal teams and minimum volume commitments. Hotel supplier negotiations take a year. BSP settlement setup is its own engineering project. And by the time you've cleared all of that, your competitors have already launched.
              </p>
              <p className="font-semibold text-foreground text-xl md:text-2xl text-center pt-4">
                There's a better way.
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
              What You Get with Intraverse
            </h2>
            <p className="text-center text-muted-foreground text-sm md:text-base mb-14 max-w-lg mx-auto">
              Everything you need to launch travel as a revenue stream.
            </p>
          </RevealBlock>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item) => {
              const Icon = item.icon;
              return (
                <RevealBlock key={item.title}>
                  <div className="bg-card border border-border rounded-xl p-8 h-full hover:border-primary/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <Icon className="w-10 h-10 text-primary mb-5" strokeWidth={1.5} />
                    <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                  </div>
                </RevealBlock>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHY FINTECHS CHOOSE ── */}
      <section className="py-16 md:py-24 bg-[hsl(216,60%,97%)]">
        <div className="container mx-auto px-4" style={{ maxWidth: "800px" }}>
          <RevealBlock>
            <h2 className="text-3xl sm:text-4xl md:text-[48px] md:leading-[56px] font-[660] tracking-[-2px] text-center mb-14" style={{ color: "rgb(13, 27, 42)" }}>
              Why Fintechs Choose Intraverse
            </h2>
          </RevealBlock>
          <div className="space-y-8">
            {benefits.map((item) => {
              const Icon = item.icon;
              return (
                <RevealBlock key={item.title}>
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                </RevealBlock>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PARTNERSHIP PROCESS ── */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4" style={{ maxWidth: "1200px" }}>
          <RevealBlock>
            <h2 className="text-3xl sm:text-4xl md:text-[48px] md:leading-[56px] font-[660] tracking-[-2px] text-center mb-4" style={{ color: "rgb(13, 27, 42)" }}>
              How the Partnership Works
            </h2>
            <p className="text-center text-muted-foreground text-sm md:text-base mb-14 max-w-lg mx-auto">
              From first conversation to live integration in weeks.
            </p>
          </RevealBlock>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((item) => (
              <RevealBlock key={item.step}>
                <div className="relative bg-card border border-border rounded-xl p-8 h-full">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold mb-5">
                    {item.step}
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              </RevealBlock>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDING PARTNER ── */}
      <section className="py-16 md:py-24 bg-[hsl(216,60%,97%)]">
        <div className="container mx-auto px-4 text-center" style={{ maxWidth: "800px" }}>
          <RevealBlock>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wide mb-6">
              <Star className="w-3.5 h-3.5" />
              Early Access
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-[48px] md:leading-[56px] font-[660] tracking-[-2px] mb-5" style={{ color: "rgb(13, 27, 42)" }}>
              Be One of Our Founding Fintech Partners
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
              We're actively building partnerships with Nigeria's leading fintechs, neobanks, and super-apps. Founding partners get preferential commercial terms, dedicated engineering support, and the opportunity to shape our roadmap as we scale travel infrastructure across Africa.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              {foundingBenefits.map((b) => (
                <span key={b} className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                  {b}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#partnership-form">
                <Button variant="default" className="inline-flex items-center gap-1.5">
                  Become a Founding Partner
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
              <Link to="/partnerships">
                <Button variant="outline" className="inline-flex items-center gap-1.5">
                  Explore All Partnership Types
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* ── FINAL CTA + FORM ── */}
      <section id="partnership-form" className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0D1B2A 0%, #1B2D45 50%, #0D1B2A 100%)" }}>
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="fintech-grid-cta" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#fintech-grid-cta)" />
          </svg>
        </div>

        <div className="container relative mx-auto px-4 py-20 lg:py-28" style={{ maxWidth: "1200px" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: CTA copy */}
            <RevealBlock>
              <h2 className="text-3xl sm:text-4xl md:text-[48px] md:leading-[56px] font-[660] tracking-[-2px] text-white mb-6">
                Let's Build Your Travel Layer Together
              </h2>
              <p className="text-white/70 text-base md:text-lg leading-relaxed mb-10">
                Book a discovery call with our partnerships team. We'll walk through your product, your users, and the fastest path to launching travel as a revenue stream inside your fintech.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#partnership-form">
                  <Button variant="hero" size="xl" className="cta-responsive min-h-[48px] bg-white text-foreground hover:bg-white/90">
                    Talk to Our Partnerships Team
                  </Button>
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <Button variant="whatsapp" size="xl" className="cta-responsive min-h-[48px]" asChild>
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-5 w-5" />
                      Chat on WhatsApp
                    </a>
                  </Button>
                </a>
              </div>
            </RevealBlock>

            {/* Right: Form */}
            <RevealBlock>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-6">Request Partnership Discovery Call</h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  {/* Honeypot */}
                  <div aria-hidden="true" className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden">
                    <label htmlFor="fintech-website-url">Website (leave this empty)</label>
                    <input
                      id="fintech-website-url"
                      name="website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input required name="name" placeholder="Name" value={form.name} onChange={handleChange} className="bg-white/10 border-white/20 text-white placeholder:text-white/40" />
                    <Input required name="company" placeholder="Company" value={form.company} onChange={handleChange} className="bg-white/10 border-white/20 text-white placeholder:text-white/40" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input name="role" placeholder="Role" value={form.role} onChange={handleChange} className="bg-white/10 border-white/20 text-white placeholder:text-white/40" />
                    <Input required name="email" placeholder="Email" type="email" value={form.email} onChange={handleChange} className="bg-white/10 border-white/20 text-white placeholder:text-white/40" />
                  </div>
                  <Input name="phone" placeholder="Phone" type="tel" value={form.phone} onChange={handleChange} className="bg-white/10 border-white/20 text-white placeholder:text-white/40" />
                  <Textarea required name="message" placeholder="Tell us about your fintech and your timeline" value={form.message} onChange={handleChange} className="bg-white/10 border-white/20 text-white placeholder:text-white/40 min-h-[100px]" />
                  <Button type="submit" variant="hero" disabled={submitting} className="w-full min-h-[48px]">
                    <Send className="w-4 h-4 mr-2" />
                    {submitting ? "Sending..." : "Request Partnership Discovery Call"}
                  </Button>
                </form>
              </div>
            </RevealBlock>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFab />
    </div>
  );
};

export default FintechsAudience;
