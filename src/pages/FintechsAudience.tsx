import { Navbar } from "@/components/Navbar";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  MessageCircle,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  Landmark,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  Smartphone,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  CreditCard,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  Wallet,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  Gift,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  TrendingUp,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  Plug,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  BadgeDollarSign,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  Building2,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  BarChart3,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  Zap,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  Shield,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  Handshake,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  ArrowRight,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  Send,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  Clock,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  Wrench,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  DollarSign,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  Star,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
} from "lucide-react";
import { useState, useEffect } from "react";
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
/* ── WHO THIS IS FOR ── */
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
const whoCards = [
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { icon: Landmark, text: "Neobanks and digital banks expanding beyond core banking" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { icon: Smartphone, text: "Super-apps consolidating financial and lifestyle services" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { icon: CreditCard, text: "BNPL providers adding travel as a high-value vertical" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { icon: Wallet, text: "Payment companies embedding travel into wallet experiences" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { icon: Gift, text: "Loyalty and rewards platforms enabling travel redemption" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { icon: TrendingUp, text: "Any Nigerian fintech with users and a travel revenue gap" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
];
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
/* ── SOLUTION FEATURES ── */
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
const features = [
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    icon: Plug,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    title: "Embedded Travel API",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    body: "Plug Intraverse's REST API directly into your existing app. Offer flight, hotel, and tour booking inside your fintech experience without sending users to a third-party site. Aggregated inventory from GDS, NDC, consolidators, and aggregators — accessible through one clean API.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    icon: CreditCard,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    title: "Native BNPL via Odiopay",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    body: "Activate Odiopay's Fare Lock and Pay Later inside your app. Your users can book travel and pay in instalments directly from their wallet or card on file. No external redirects. No abandoned baskets.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    icon: Building2,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    title: "Wallet & Card Settlement",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    body: "Payments flow through your existing rails. Users pay you. You settle with Intraverse. Customer experience stays inside your app, branding stays yours.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    icon: BarChart3,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    title: "Revenue Sharing Model",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    body: "You earn on every flight, hotel, and tour booked through your platform. Custom commercial structures available — flat commission, revenue share, or hybrid models depending on volume and integration depth.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    icon: Zap,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    title: "Skip the 2-Year Build",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    body: "No IATA application. No GDS contracts. No BSP setup. No supplier negotiations. We've built the infrastructure. You build the user experience.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    icon: Shield,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    title: "Built for Nigerian Realities",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    body: "Naira pricing, NDPR-compliant data handling, local payment rails, and a partnerships team based in Lagos. We understand the regulatory environment because we operate in it.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
];
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
/* ── WHY FINTECHS CHOOSE ── */
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
const benefits = [
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { icon: Zap, title: "Speed to Market", body: "Launch travel as a feature in 6–12 weeks instead of 18–24 months." },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { icon: DollarSign, title: "Capital Efficiency", body: "No upfront capital for IATA, GDS contracts, or supplier deposits. Pay as you scale." },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { icon: Wrench, title: "Engineering Simplicity", body: "One clean REST API. Sandbox environment for testing. SDKs for Node, Python, and PHP. Webhook support for real-time booking events." },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { icon: Shield, title: "Compliance Built In", body: "IATA accreditation, BSP settlement, NDPR compliance, and PCI-compliant payment handling — all included. Your compliance team will love it." },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { icon: Handshake, title: "Co-Build Partnerships", body: "For high-volume integrations, our team works directly with yours on custom integrations, branded checkout flows, and joint go-to-market." },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
];
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
/* ── PARTNERSHIP PROCESS ── */
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
const processSteps = [
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { step: 1, title: "Discovery Call", body: "We understand your user base, product strategy, and integration timeline" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { step: 2, title: "Technical Scoping", body: "Our engineering team reviews your stack and integration requirements" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { step: 3, title: "Commercial Structure", body: "We agree on pricing, revenue share, and partnership terms" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { step: 4, title: "Sandbox Integration", body: "Your team builds and tests in our sandbox environment" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { step: 5, title: "Production Launch", body: "We support your go-live with technical and commercial readiness" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { step: 6, title: "Ongoing Partnership", body: "Quarterly business reviews, dedicated technical contact, joint optimisation" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
];
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
const foundingBenefits = [
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  "Preferential commercial terms",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  "Dedicated engineering support",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  "Roadmap influence",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
];
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
function RevealBlock({ children, className = "" }: { children: React.ReactNode; className?: string }) {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  const { ref, revealClass } = useScrollReveal();
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  return (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    <div ref={ref} className={`transition-all duration-700 ease-out ${revealClass} ${className}`}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      {children}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  );
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
const FintechsAudience = () => {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  const [form, setForm] = useState({ name: "", company: "", role: "", email: "", phone: "", message: "" });
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  };
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  useEffect(() => {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    document.title = "For Fintechs | Embed Travel as a Revenue Stream | Intraverse API";
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    const meta = document.querySelector('meta[name="description"]');
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    if (meta) {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      meta.setAttribute("content", "Nigerian fintechs, neobanks, and super-apps use Intraverse to add flight, hotel & tour booking as a native revenue stream. API + BNPL. Launch in weeks.");
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    }
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  }, []);
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  return (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    <div className="min-h-screen">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <Navbar />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <div className="h-16" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      {/* ── HERO ── */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0D1B2A 0%, #1B2D45 50%, #0D1B2A 100%)" }}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <div className="absolute inset-0 pointer-events-none">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" style={{ background: "rgba(30, 97, 220, 0.08)" }} />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" style={{ background: "rgba(30, 97, 220, 0.05)" }} />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <defs>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <pattern id="fintech-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </pattern>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </defs>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <rect width="100%" height="100%" fill="url(#fintech-grid)" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </svg>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <div className="container relative mx-auto px-4 py-20 lg:py-28 text-center" style={{ maxWidth: "1200px" }}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <h1 className="text-3xl sm:text-4xl md:text-[56px] font-[660] leading-[1.1] md:leading-[68px] tracking-[-2px] max-w-4xl mx-auto text-white">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              Your Users Are Already Spending on Travel. Capture That Revenue.
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </h1>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <p className="mt-8 text-base sm:text-lg md:text-xl font-normal max-w-3xl mx-auto leading-relaxed text-white/70">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              Your users are buying flights, booking hotels, and paying for travel every day — and every Naira goes to your competitors. Intraverse gives Nigerian fintechs, neobanks, super-apps, and digital wallets a turnkey way to add travel booking as a native revenue stream. Aggregated flight, hotel, and tour inventory through one API. Native BNPL via Odiopay. Launch in months, not years.
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <a href="#partnership-form">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <Button variant="hero" size="xl" className="cta-responsive min-h-[48px]">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  Talk to Our Partnerships Team
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </Button>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </a>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <Button variant="whatsapp" size="xl" className="cta-responsive min-h-[48px]">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <MessageCircle className="h-5 w-5" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  Chat on WhatsApp
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </Button>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </a>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      </section>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      {/* ── WHO THIS IS FOR ── */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <section className="py-16 md:py-24 bg-background">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <div className="container mx-auto px-4" style={{ maxWidth: "1200px" }}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <h2 className="text-3xl sm:text-4xl md:text-[48px] md:leading-[56px] font-[660] tracking-[-2px] text-center mb-14" style={{ color: "rgb(13, 27, 42)" }}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              Who This Is For
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </h2>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            {whoCards.map((item) => {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              const Icon = item.icon;
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              return (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <RevealBlock key={item.text}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-xl hover:border-primary/40 transition-colors">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      <Icon className="w-6 h-6 text-primary" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <p className="text-sm md:text-base text-foreground/80 leading-relaxed">{item.text}</p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              );
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            })}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      </section>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      {/* ── PROBLEM ── */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <section className="py-16 md:py-24 bg-[hsl(216,60%,97%)]">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <div className="container mx-auto px-4" style={{ maxWidth: "800px" }}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <h2 className="text-3xl sm:text-4xl md:text-[48px] md:leading-[56px] font-[660] tracking-[-2px] text-center mb-10" style={{ color: "rgb(13, 27, 42)" }}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              You're Watching Travel Revenue Walk Out the Door
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </h2>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                Your fintech has millions of users. Every month, those users spend billions of Naira on travel — flights to Dubai, hotels in Lagos, tours in Cape Town, school runs to the UK. Every transaction is a revenue opportunity you're losing to legacy travel platforms, banks, and OTAs.
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                Building travel infrastructure in-house is brutal. IATA accreditation alone takes months and capital. GDS contracts require legal teams and minimum volume commitments. Hotel supplier negotiations take a year. BSP settlement setup is its own engineering project. And by the time you've cleared all of that, your competitors have already launched.
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <p className="font-semibold text-foreground text-xl md:text-2xl text-center pt-4">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                There's a better way.
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      </section>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      {/* ── SOLUTION ── */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <section className="py-16 md:py-24 bg-background">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <div className="container mx-auto px-4" style={{ maxWidth: "1200px" }}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <h2 className="text-3xl sm:text-4xl md:text-[48px] md:leading-[56px] font-[660] tracking-[-2px] text-center mb-4" style={{ color: "rgb(13, 27, 42)" }}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              What You Get with Intraverse
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </h2>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <p className="text-center text-muted-foreground text-sm md:text-base mb-14 max-w-lg mx-auto">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              Everything you need to launch travel as a revenue stream.
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            {features.map((item) => {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              const Icon = item.icon;
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              return (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <RevealBlock key={item.title}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <div className="bg-card border border-border rounded-xl p-8 h-full hover:border-primary/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <Icon className="w-10 h-10 text-primary mb-5" strokeWidth={1.5} />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              );
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            })}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      </section>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      {/* ── WHY FINTECHS CHOOSE ── */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <section className="py-16 md:py-24 bg-[hsl(216,60%,97%)]">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <div className="container mx-auto px-4" style={{ maxWidth: "800px" }}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <h2 className="text-3xl sm:text-4xl md:text-[48px] md:leading-[56px] font-[660] tracking-[-2px] text-center mb-14" style={{ color: "rgb(13, 27, 42)" }}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              Why Fintechs Choose Intraverse
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </h2>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <div className="space-y-8">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            {benefits.map((item) => {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              const Icon = item.icon;
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              return (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <RevealBlock key={item.title}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <div className="flex items-start gap-5">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      <Icon className="w-6 h-6 text-primary" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      <h3 className="text-lg font-bold text-foreground mb-1">{item.title}</h3>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{item.body}</p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              );
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            })}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      </section>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      {/* ── PARTNERSHIP PROCESS ── */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <section className="py-16 md:py-24 bg-background">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <div className="container mx-auto px-4" style={{ maxWidth: "1200px" }}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <h2 className="text-3xl sm:text-4xl md:text-[48px] md:leading-[56px] font-[660] tracking-[-2px] text-center mb-4" style={{ color: "rgb(13, 27, 42)" }}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              How the Partnership Works
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </h2>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <p className="text-center text-muted-foreground text-sm md:text-base mb-14 max-w-lg mx-auto">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              From first conversation to live integration in weeks.
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            {processSteps.map((item) => (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <RevealBlock key={item.step}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <div className="relative bg-card border border-border rounded-xl p-8 h-full">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold mb-5">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    {item.step}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <h3 className="text-base font-bold text-foreground mb-2">{item.title}</h3>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            ))}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      </section>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      {/* ── FOUNDING PARTNER ── */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <section className="py-16 md:py-24 bg-[hsl(216,60%,97%)]">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <div className="container mx-auto px-4 text-center" style={{ maxWidth: "800px" }}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wide mb-6">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <Star className="w-3.5 h-3.5" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              Early Access
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <h2 className="text-3xl sm:text-4xl md:text-[48px] md:leading-[56px] font-[660] tracking-[-2px] mb-5" style={{ color: "rgb(13, 27, 42)" }}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              Be One of Our Founding Fintech Partners
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </h2>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              We're actively building partnerships with Nigeria's leading fintechs, neobanks, and super-apps. Founding partners get preferential commercial terms, dedicated engineering support, and the opportunity to shape our roadmap as we scale travel infrastructure across Africa.
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              {foundingBenefits.map((b) => (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <span key={b} className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  {b}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </span>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              ))}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <a href="#partnership-form">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <Button variant="default" className="inline-flex items-center gap-1.5">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  Become a Founding Partner
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <ArrowRight className="w-4 h-4" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </Button>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </a>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <Link to="/partnerships">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <Button variant="outline" className="inline-flex items-center gap-1.5">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  Explore All Partnership Types
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <ArrowRight className="w-4 h-4" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </Button>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </Link>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      </section>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      {/* ── FINAL CTA + FORM ── */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <section id="partnership-form" className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0D1B2A 0%, #1B2D45 50%, #0D1B2A 100%)" }}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <div className="absolute inset-0 pointer-events-none">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <defs>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <pattern id="fintech-grid-cta" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </pattern>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </defs>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <rect width="100%" height="100%" fill="url(#fintech-grid-cta)" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </svg>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <div className="container relative mx-auto px-4 py-20 lg:py-28" style={{ maxWidth: "1200px" }}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            {/* Left: CTA copy */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <h2 className="text-3xl sm:text-4xl md:text-[48px] md:leading-[56px] font-[660] tracking-[-2px] text-white mb-6">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                Let's Build Your Travel Layer Together
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </h2>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <p className="text-white/70 text-base md:text-lg leading-relaxed mb-10">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                Book a discovery call with our partnerships team. We'll walk through your product, your users, and the fastest path to launching travel as a revenue stream inside your fintech.
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <div className="flex flex-col sm:flex-row gap-4">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <a href="#partnership-form">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <Button variant="hero" size="xl" className="cta-responsive min-h-[48px] bg-white text-foreground hover:bg-white/90">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    Talk to Our Partnerships Team
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  </Button>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </a>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <Button variant="whatsapp" size="xl" className="cta-responsive min-h-[48px]">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <MessageCircle className="h-5 w-5" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    Chat on WhatsApp
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  </Button>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </a>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            {/* Right: Form */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <h3 className="text-xl font-bold text-white mb-6">Request Partnership Discovery Call</h3>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <Input name="name" placeholder="Name" value={form.name} onChange={handleChange} className="bg-white/10 border-white/20 text-white placeholder:text-white/40" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <Input name="company" placeholder="Company" value={form.company} onChange={handleChange} className="bg-white/10 border-white/20 text-white placeholder:text-white/40" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <Input name="role" placeholder="Role" value={form.role} onChange={handleChange} className="bg-white/10 border-white/20 text-white placeholder:text-white/40" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <Input name="email" placeholder="Email" type="email" value={form.email} onChange={handleChange} className="bg-white/10 border-white/20 text-white placeholder:text-white/40" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <Input name="phone" placeholder="Phone" type="tel" value={form.phone} onChange={handleChange} className="bg-white/10 border-white/20 text-white placeholder:text-white/40" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <Textarea name="message" placeholder="Tell us about your fintech and your timeline" value={form.message} onChange={handleChange} className="bg-white/10 border-white/20 text-white placeholder:text-white/40 min-h-[100px]" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <Button type="submit" variant="hero" className="w-full min-h-[48px]">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <Send className="w-4 h-4 mr-2" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    Request Partnership Discovery Call
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  </Button>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </form>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </RevealBlock>
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
};
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
export default FintechsAudience;
