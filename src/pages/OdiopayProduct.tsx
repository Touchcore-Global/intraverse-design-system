import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Link } from "react-router-dom";
import { Check, ArrowRight, MessageCircle } from "lucide-react";
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
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
/* ── scroll-reveal helper ── */
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
/* ── DATA ── */
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
const benefitCards = [
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    emoji: "💰",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    title: "You Earn Full Commission",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    body: "Odiopay bookings are treated exactly like normal bookings. Your commission is calculated on the full fare value, not the instalment amount. Whether your customer pays upfront or over 12 weeks, you earn the same.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    emoji: "⚡",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    title: "Zero Extra Work",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    body: "There's no separate system to learn, no manual paperwork, and no chasing customers for payments. Odiopay handles the credit checks, instalment collection, and customer follow-ups. You focus on selling travel.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    emoji: "🛡️",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    title: "Zero Credit Risk",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    body: "You don't carry any credit risk. Odiopay takes on the repayment risk entirely. If a customer defaults, that's between them and Odiopay — your commission and booking remain unaffected.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    emoji: "🎯",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    title: "Close More Sales",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    body: "The number one reason customers abandon bookings is price. By offering Fare Lock and Pay Later, you remove that objection entirely. Agents using Odiopay report closing up to 30% more deals.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
];
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
const customerSteps = [
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    num: 1,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    title: "They See the Option",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    body: "During checkout, your customer sees Fare Lock and Pay Later as payment options alongside regular payment.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    num: 2,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    title: "They Pick a Plan",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    body: "They choose the instalment plan that suits them — weekly, bi-weekly, or monthly — and see exactly what they'll pay.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    num: 3,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    title: "They Get Approved Instantly",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    body: "Odiopay runs an instant eligibility check. If approved, the booking is confirmed immediately.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    num: 4,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    title: "They Confirm and Travel",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    body: "The ticket is issued, their itinerary is confirmed, and they travel as planned. Repayments are handled by Odiopay.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
];
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
const audienceCards = [
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { emoji: "✈️", title: "Travel Agents", body: "Close more sales by offering BNPL at the point of booking. Turn 'I can't afford it' into 'Let me lock that fare.'", href: "/for/travel-agents" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { emoji: "🚀", title: "Travel Independents", body: "Offer professional payment flexibility to your personal network without needing any financial infrastructure.", href: "/for/independents" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { emoji: "🏢", title: "Businesses", body: "Give employees flexible travel payment options for business trips — especially useful for SMEs managing cash flow.", href: "/for/businesses" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { emoji: "🏦", title: "Fintechs", body: "Embed Odiopay's BNPL alongside the Intraverse API to offer travel financing natively inside your fintech app.", href: "/for/fintechs" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
];
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
const faqs = [
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    q: "Is Odiopay part of Intraverse?",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    a: "Odiopay is an independent company that partners with Intraverse to provide Buy Now, Pay Later financing. It is not owned or operated by Intraverse. The integration is built into the Intraverse dashboard so agents can offer BNPL seamlessly, but Odiopay handles all credit decisions, instalment collection, and repayment management independently.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    q: "How does Fare Lock work?",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    a: "Fare Lock lets your customer hold a fare at today's price by paying a small deposit. They then have a set window (usually 7-14 days) to pay the remaining balance. If they pay in time, the booking is confirmed at the locked price. If not, the deposit may be forfeited depending on the fare rules.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    q: "How does Pay Later work?",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    a: "Pay Later allows your customer to book immediately and spread the remaining cost over weekly, bi-weekly, or monthly instalments. Odiopay runs an instant eligibility check, and if approved, the booking is confirmed right away. The customer repays Odiopay directly over the agreed schedule.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    q: "Do I earn commission on BNPL bookings?",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    a: "Yes — full commission. Odiopay bookings are treated like any other booking on the Intraverse platform. Your commission is calculated on the full fare value, not on the instalment amount. Whether the customer pays upfront or over time, you earn the same.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    q: "Do I carry any credit risk?",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    a: "No. Odiopay assumes all credit and repayment risk. If a customer defaults on their instalments, that's between them and Odiopay. Your commission and booking remain unaffected.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    q: "Is Odiopay available on all Intraverse plans?",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    a: "Yes. Odiopay integration is available on every Intraverse plan — Starter, Agency, and Enterprise. There are no additional fees to activate it.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    q: "Does Odiopay work for all booking types?",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    a: "Odiopay currently supports eligible flight bookings. Hotel and tour support is being rolled out progressively. Eligibility depends on fare rules, booking value, and Odiopay's credit assessment.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    q: "How do I activate Odiopay?",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    a: "You can activate Odiopay directly from your Intraverse dashboard. Go to Settings → Integrations → Odiopay and follow the activation steps. No separate sign-up, no API keys, and no technical setup required.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
];
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
/* ── PAGE ── */
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
export default function OdiopayProduct() {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  useEffect(() => {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    document.title = "Odiopay BNPL | Buy Now, Pay Later for Travel | Intraverse";
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    const meta = document.querySelector('meta[name="description"]');
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    if (meta) meta.setAttribute("content", "Close more travel sales with Odiopay BNPL. Two flexible options — Fare Lock and Pay Later — integrated into your Intraverse dashboard. Earn full commission. Zero credit risk.");
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
      {/* ── HERO ── */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-background overflow-hidden">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <div className="absolute inset-0 bg-gradient-to-br from-accent via-background to-background" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              ⚡ POWERED BY ODIOPAY
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </span>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              Close Every Sale. Even When Your Customer Can't Pay Upfront.
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </h1>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              Odiopay is the Buy Now, Pay Later partner integrated into your Intraverse dashboard. When customers love your fares but can't pay everything upfront, Odiopay lets them book now and pay in instalments. You close the sale, earn your full commission, and get paid just like a normal booking. They get their trip. Everyone wins.
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <Button variant="hero" size="xl" asChild>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <a href="https://intraverse.app" target="_blank" rel="noopener noreferrer">Activate Odiopay</a>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </Button>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <Button variant="outline" size="xl" className="rounded-none" asChild>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <a href="#how-it-works">See How It Works</a>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </Button>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <p className="text-sm text-muted-foreground font-mono">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              Two flexible options • Available on every Intraverse plan • Agent earns full commission
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      </section>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      {/* ── SECTION 1 — THE PROBLEM ── */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <section className="py-20 md:py-28 bg-accent">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <div className="max-w-4xl mx-auto px-6">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Every Travel Agent Knows This Story</h2>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              A customer finds the perfect fare. They're excited. You've done the work — searched suppliers, compared prices, built the itinerary. Then comes the pause: "Can I pay half now and the rest next week?" or "I love it, but I can't afford the full amount today."
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <p className="text-muted-foreground text-lg leading-relaxed">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              You both know the fare might change. But you can't hold it without full payment. And just like that, the sale slips away. Not because the customer didn't want to travel — but because they couldn't pay everything upfront. That's the problem Odiopay solves.
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      </section>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      {/* ── SECTION 2 — HOW IT WORKS ── */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <section id="how-it-works" className="py-20 md:py-28 bg-background scroll-mt-24">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <div className="max-w-6xl mx-auto px-6">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Two Ways Customers Can Pay</h2>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-14">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              Odiopay offers two distinct payment flexibility options, each designed for a different customer need. Both are available directly within your Intraverse booking workflow.
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <div className="grid md:grid-cols-2 gap-8">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            {/* Fare Lock */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <div className="border border-border rounded-2xl p-8 md:p-10 h-full hover:border-primary hover:shadow-lg transition-all duration-300">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <span className="text-5xl mb-4 block">🔒</span>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <h3 className="text-2xl font-bold mb-1">Fare Lock</h3>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <p className="text-primary italic mb-6">Lock today's price. Pay over time.</p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <div className="space-y-4 text-muted-foreground">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <p className="font-semibold text-foreground mb-1">How it works:</p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <p>Your customer pays a small deposit to lock in the current fare. They then have a set window — typically 7-14 days — to complete the full payment. The fare is guaranteed at the locked price, even if the airline changes it.</p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <p className="font-semibold text-foreground mb-1">Best for:</p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <p>Customers who have the money but need a few days to gather it. Group bookings where multiple travellers are contributing. Corporate travellers waiting for approval.</p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <p className="font-semibold text-foreground mb-1">What you do:</p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <p>Nothing extra. The Fare Lock option appears automatically at checkout. You sell travel as normal.</p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            {/* Pay Later */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <div className="border border-border rounded-2xl p-8 md:p-10 h-full hover:border-primary hover:shadow-lg transition-all duration-300">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <span className="text-5xl mb-4 block">💳</span>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <h3 className="text-2xl font-bold mb-1">Pay Later</h3>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <p className="text-primary italic mb-6">Travel now. Pay back after.</p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <div className="space-y-4 text-muted-foreground">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <p className="font-semibold text-foreground mb-1">How it works:</p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <p>Your customer books immediately and spreads the cost over weekly, bi-weekly, or monthly instalments. Odiopay runs an instant eligibility check. If approved, the booking is confirmed and the ticket is issued right away.</p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <p className="font-semibold text-foreground mb-1">Best for:</p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <p>Customers who want to travel now but prefer to spread the cost. Last-minute bookings where fares are high. Budget-conscious travellers who would otherwise delay.</p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <p className="font-semibold text-foreground mb-1">What you do:</p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <p>Nothing extra. The Pay Later option appears alongside Fare Lock at checkout. Odiopay handles the rest.</p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </div>
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
      {/* ── SECTION 3 — WHAT IT MEANS FOR YOU ── */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <section className="py-20 md:py-28 bg-accent">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <div className="max-w-6xl mx-auto px-6">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">You Close the Sale. Odiopay Handles the Rest.</h2>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-14">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              Here's the important part: Odiopay doesn't change how you sell. It changes how many sales you close.
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <div className="grid sm:grid-cols-2 gap-8">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            {benefitCards.map((card) => (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <RevealBlock key={card.title}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <div className="bg-background border border-border rounded-2xl p-8 h-full hover:shadow-lg transition-all duration-300">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <span className="text-4xl mb-4 block">{card.emoji}</span>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <h3 className="text-xl font-bold mb-2">{card.title}</h3>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <p className="text-muted-foreground leading-relaxed">{card.body}</p>
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
      {/* ── SECTION 4 — CUSTOMER EXPERIENCE ── */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <section className="py-20 md:py-28 bg-background">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <div className="max-w-6xl mx-auto px-6">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What Your Customers See</h2>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-14">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              From your customer's perspective, Odiopay is a seamless checkout experience. They don't download a separate app or fill out a loan application. It's all built into the booking flow.
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            {customerSteps.map((step, i) => (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <RevealBlock key={step.num}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <div className="relative text-center">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    {step.num}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.body}</p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  {i < customerSteps.length - 1 && (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <ArrowRight className="hidden lg:block absolute top-7 -right-4 w-5 h-5 text-muted-foreground/50" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  )}
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
      {/* ── SECTION 5 — WHO USES ODIOPAY ── */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <section className="py-20 md:py-28 bg-accent">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <div className="max-w-6xl mx-auto px-6">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Built for Every Way You Sell Travel</h2>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-14">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              Whether you're a professional agency, a solo independent, or a fintech embedding travel, Odiopay works wherever Intraverse works.
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <div className="grid sm:grid-cols-2 gap-8">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            {audienceCards.map((card) => (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <RevealBlock key={card.title}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <Link to={card.href} className="block border border-border bg-background rounded-2xl p-8 hover:border-primary hover:shadow-lg transition-all duration-300 group h-full">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <span className="text-4xl mb-4 block">{card.emoji}</span>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    {card.title}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  </h3>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <p className="text-muted-foreground leading-relaxed">{card.body}</p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </Link>
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
      {/* ── SECTION 6 — PRICING & ACTIVATION ── */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <section className="py-20 md:py-28 bg-background">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <div className="max-w-3xl mx-auto px-6 text-center">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Already Included. Always Available.</h2>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              Odiopay integration is included in every Intraverse plan at no additional cost. There are no setup fees, no monthly subscriptions for the integration, and no premium upgrades required. If you're on Intraverse, you can activate Odiopay.
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <div className="flex flex-wrap justify-center gap-4 mb-10">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              {["No setup fees", "No monthly subscription", "Available on every Intraverse plan"].map((pill) => (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <span key={pill} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-foreground text-sm font-medium">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <Check className="w-4 h-4 text-green-600" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  {pill}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </span>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              ))}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <Button variant="hero" size="xl" asChild>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <a href="https://intraverse.app" target="_blank" rel="noopener noreferrer">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                Activate Odiopay in Your Dashboard →
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </a>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </Button>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      </section>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      {/* ── SECTION 7 — FAQ ── */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <section className="py-20 md:py-28 bg-accent">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <div className="max-w-3xl mx-auto px-6">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Common Questions About Odiopay</h2>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <Accordion type="single" collapsible className="space-y-3">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              {faqs.map((faq, i) => (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl bg-background px-6 overflow-hidden">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <AccordionTrigger className="text-base font-semibold text-left hover:no-underline py-5">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    {faq.q}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  </AccordionTrigger>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
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
          </RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      </section>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      {/* ── FINAL CTA ── */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <section className="py-20 md:py-28 bg-secondary text-secondary-foreground">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <div className="max-w-4xl mx-auto px-6 text-center">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <RevealBlock>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Stop Losing Sales. Start Closing Them.</h2>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <p className="text-secondary-foreground/70 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              Every customer who walks away because they can't pay upfront is a sale you should have closed. Odiopay turns those lost sales into completed bookings. Activate it from your Intraverse dashboard today and start offering BNPL on every eligible booking.
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <Button size="xl" className="bg-background text-foreground hover:bg-background/90 rounded-none font-semibold" asChild>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <a href="https://intraverse.app" target="_blank" rel="noopener noreferrer">Activate Odiopay</a>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </Button>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <Button variant="whatsapp" size="xl" className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary" asChild>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <a href="https://wa.me/2349030002629" target="_blank" rel="noopener noreferrer">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <MessageCircle className="w-5 h-5" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  Talk to Our Team
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </a>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </Button>
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
      <Footer />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <WhatsAppFab />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  );
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
}
