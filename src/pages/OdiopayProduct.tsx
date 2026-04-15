import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Link } from "react-router-dom";
import { Check, ArrowRight, MessageCircle } from "lucide-react";
import {
import { WHATSAPP_URL } from "@/lib/constants";
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/* ── scroll-reveal helper ── */
function RevealBlock({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, revealClass } = useScrollReveal();
  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${revealClass} ${className}`}>
      {children}
    </div>
  );
}

/* ── DATA ── */

const benefitCards = [
  {
    emoji: "💰",
    title: "You Earn Full Commission",
    body: "Odiopay bookings are treated exactly like normal bookings. Your commission is calculated on the full fare value, not the instalment amount. Whether your customer pays upfront or over 12 weeks, you earn the same.",
  },
  {
    emoji: "⚡",
    title: "Zero Extra Work",
    body: "There's no separate system to learn, no manual paperwork, and no chasing customers for payments. Odiopay handles the credit checks, instalment collection, and customer follow-ups. You focus on selling travel.",
  },
  {
    emoji: "🛡️",
    title: "Zero Credit Risk",
    body: "You don't carry any credit risk. Odiopay takes on the repayment risk entirely. If a customer defaults, that's between them and Odiopay — your commission and booking remain unaffected.",
  },
  {
    emoji: "🎯",
    title: "Close More Sales",
    body: "The number one reason customers abandon bookings is price. By offering Fare Lock and Pay Later, you remove that objection entirely. Agents using Odiopay report closing up to 30% more deals.",
  },
];

const customerSteps = [
  {
    num: 1,
    title: "They See the Option",
    body: "During checkout, your customer sees Fare Lock and Pay Later as payment options alongside regular payment.",
  },
  {
    num: 2,
    title: "They Pick a Plan",
    body: "They choose the instalment plan that suits them — weekly, bi-weekly, or monthly — and see exactly what they'll pay.",
  },
  {
    num: 3,
    title: "They Get Approved Instantly",
    body: "Odiopay runs an instant eligibility check. If approved, the booking is confirmed immediately.",
  },
  {
    num: 4,
    title: "They Confirm and Travel",
    body: "The ticket is issued, their itinerary is confirmed, and they travel as planned. Repayments are handled by Odiopay.",
  },
];

const audienceCards = [
  { emoji: "✈️", title: "Travel Agents", body: "Close more sales by offering BNPL at the point of booking. Turn 'I can't afford it' into 'Let me lock that fare.'", href: "/for/travel-agents" },
  { emoji: "🚀", title: "Travel Independents", body: "Offer professional payment flexibility to your personal network without needing any financial infrastructure.", href: "/for/independents" },
  { emoji: "🏢", title: "Businesses", body: "Give employees flexible travel payment options for business trips — especially useful for SMEs managing cash flow.", href: "/for/businesses" },
  { emoji: "🏦", title: "Fintechs", body: "Embed Odiopay's BNPL alongside the Intraverse API to offer travel financing natively inside your fintech app.", href: "/for/fintechs" },
];

const faqs = [
  {
    q: "Is Odiopay part of Intraverse?",
    a: "Odiopay is an independent company that partners with Intraverse to provide Buy Now, Pay Later financing. It is not owned or operated by Intraverse. The integration is built into the Intraverse dashboard so agents can offer BNPL seamlessly, but Odiopay handles all credit decisions, instalment collection, and repayment management independently.",
  },
  {
    q: "How does Fare Lock work?",
    a: "Fare Lock lets your customer hold a fare at today's price by paying a small deposit. They then have a set window (usually 7-14 days) to pay the remaining balance. If they pay in time, the booking is confirmed at the locked price. If not, the deposit may be forfeited depending on the fare rules.",
  },
  {
    q: "How does Pay Later work?",
    a: "Pay Later allows your customer to book immediately and spread the remaining cost over weekly, bi-weekly, or monthly instalments. Odiopay runs an instant eligibility check, and if approved, the booking is confirmed right away. The customer repays Odiopay directly over the agreed schedule.",
  },
  {
    q: "Do I earn commission on BNPL bookings?",
    a: "Yes — full commission. Odiopay bookings are treated like any other booking on the Intraverse platform. Your commission is calculated on the full fare value, not on the instalment amount. Whether the customer pays upfront or over time, you earn the same.",
  },
  {
    q: "Do I carry any credit risk?",
    a: "No. Odiopay assumes all credit and repayment risk. If a customer defaults on their instalments, that's between them and Odiopay. Your commission and booking remain unaffected.",
  },
  {
    q: "Is Odiopay available on all Intraverse plans?",
    a: "Yes. Odiopay integration is available on every Intraverse plan — Starter, Agency, and Enterprise. There are no additional fees to activate it.",
  },
  {
    q: "Does Odiopay work for all booking types?",
    a: "Odiopay currently supports eligible flight bookings. Hotel and tour support is being rolled out progressively. Eligibility depends on fare rules, booking value, and Odiopay's credit assessment.",
  },
  {
    q: "How do I activate Odiopay?",
    a: "You can activate Odiopay directly from your Intraverse dashboard. Go to Settings → Integrations → Odiopay and follow the activation steps. No separate sign-up, no API keys, and no technical setup required.",
  },
];

/* ── PAGE ── */

export default function OdiopayProduct() {
  useEffect(() => {
    document.title = "Odiopay BNPL | Buy Now, Pay Later for Travel | Intraverse";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Close more travel sales with Odiopay BNPL. Two flexible options — Fare Lock and Pay Later — integrated into your Intraverse dashboard. Earn full commission. Zero credit risk.");
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-background overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent via-background to-background" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <RevealBlock>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              ⚡ POWERED BY ODIOPAY
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
              Close Every Sale. Even When Your Customer Can't Pay Upfront.
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
              Odiopay is the Buy Now, Pay Later partner integrated into your Intraverse dashboard. When customers love your fares but can't pay everything upfront, Odiopay lets them book now and pay in instalments. You close the sale, earn your full commission, and get paid just like a normal booking. They get their trip. Everyone wins.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button variant="hero" size="xl" asChild>
                <a href="https://intraverse.app" target="_blank" rel="noopener noreferrer">Activate Odiopay</a>
              </Button>
              <Button variant="outline" size="xl" className="rounded-none" asChild>
                <a href="#how-it-works">See How It Works</a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground font-mono">
              Two flexible options • Available on every Intraverse plan • Agent earns full commission
            </p>
          </RevealBlock>
        </div>
      </section>

      {/* ── SECTION 1 — THE PROBLEM ── */}
      <section className="py-20 md:py-28 bg-accent">
        <div className="max-w-4xl mx-auto px-6">
          <RevealBlock>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Every Travel Agent Knows This Story</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A customer finds the perfect fare. They're excited. You've done the work — searched suppliers, compared prices, built the itinerary. Then comes the pause: "Can I pay half now and the rest next week?" or "I love it, but I can't afford the full amount today."
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              You both know the fare might change. But you can't hold it without full payment. And just like that, the sale slips away. Not because the customer didn't want to travel — but because they couldn't pay everything upfront. That's the problem Odiopay solves.
            </p>
          </RevealBlock>
        </div>
      </section>

      {/* ── SECTION 2 — HOW IT WORKS ── */}
      <section id="how-it-works" className="py-20 md:py-28 bg-background scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6">
          <RevealBlock>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Two Ways Customers Can Pay</h2>
            <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-14">
              Odiopay offers two distinct payment flexibility options, each designed for a different customer need. Both are available directly within your Intraverse booking workflow.
            </p>
          </RevealBlock>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Fare Lock */}
            <RevealBlock>
              <div className="border border-border rounded-2xl p-8 md:p-10 h-full hover:border-primary hover:shadow-lg transition-all duration-300">
                <span className="text-5xl mb-4 block">🔒</span>
                <h3 className="text-2xl font-bold mb-1">Fare Lock</h3>
                <p className="text-primary italic mb-6">Lock today's price. Pay over time.</p>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <p className="font-semibold text-foreground mb-1">How it works:</p>
                    <p>Your customer pays a small deposit to lock in the current fare. They then have a set window — typically 7-14 days — to complete the full payment. The fare is guaranteed at the locked price, even if the airline changes it.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Best for:</p>
                    <p>Customers who have the money but need a few days to gather it. Group bookings where multiple travellers are contributing. Corporate travellers waiting for approval.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">What you do:</p>
                    <p>Nothing extra. The Fare Lock option appears automatically at checkout. You sell travel as normal.</p>
                  </div>
                </div>
              </div>
            </RevealBlock>

            {/* Pay Later */}
            <RevealBlock>
              <div className="border border-border rounded-2xl p-8 md:p-10 h-full hover:border-primary hover:shadow-lg transition-all duration-300">
                <span className="text-5xl mb-4 block">💳</span>
                <h3 className="text-2xl font-bold mb-1">Pay Later</h3>
                <p className="text-primary italic mb-6">Travel now. Pay back after.</p>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <p className="font-semibold text-foreground mb-1">How it works:</p>
                    <p>Your customer books immediately and spreads the cost over weekly, bi-weekly, or monthly instalments. Odiopay runs an instant eligibility check. If approved, the booking is confirmed and the ticket is issued right away.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Best for:</p>
                    <p>Customers who want to travel now but prefer to spread the cost. Last-minute bookings where fares are high. Budget-conscious travellers who would otherwise delay.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">What you do:</p>
                    <p>Nothing extra. The Pay Later option appears alongside Fare Lock at checkout. Odiopay handles the rest.</p>
                  </div>
                </div>
              </div>
            </RevealBlock>
          </div>
        </div>
      </section>

      {/* ── SECTION 3 — WHAT IT MEANS FOR YOU ── */}
      <section className="py-20 md:py-28 bg-accent">
        <div className="max-w-6xl mx-auto px-6">
          <RevealBlock>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">You Close the Sale. Odiopay Handles the Rest.</h2>
            <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-14">
              Here's the important part: Odiopay doesn't change how you sell. It changes how many sales you close.
            </p>
          </RevealBlock>

          <div className="grid sm:grid-cols-2 gap-8">
            {benefitCards.map((card) => (
              <RevealBlock key={card.title}>
                <div className="bg-background border border-border rounded-2xl p-8 h-full hover:shadow-lg transition-all duration-300">
                  <span className="text-4xl mb-4 block">{card.emoji}</span>
                  <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{card.body}</p>
                </div>
              </RevealBlock>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4 — CUSTOMER EXPERIENCE ── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <RevealBlock>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What Your Customers See</h2>
            <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-14">
              From your customer's perspective, Odiopay is a seamless checkout experience. They don't download a separate app or fill out a loan application. It's all built into the booking flow.
            </p>
          </RevealBlock>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {customerSteps.map((step, i) => (
              <RevealBlock key={step.num}>
                <div className="relative text-center">
                  <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.body}</p>
                  {i < customerSteps.length - 1 && (
                    <ArrowRight className="hidden lg:block absolute top-7 -right-4 w-5 h-5 text-muted-foreground/50" />
                  )}
                </div>
              </RevealBlock>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5 — WHO USES ODIOPAY ── */}
      <section className="py-20 md:py-28 bg-accent">
        <div className="max-w-6xl mx-auto px-6">
          <RevealBlock>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Built for Every Way You Sell Travel</h2>
            <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-14">
              Whether you're a professional agency, a solo independent, or a fintech embedding travel, Odiopay works wherever Intraverse works.
            </p>
          </RevealBlock>

          <div className="grid sm:grid-cols-2 gap-8">
            {audienceCards.map((card) => (
              <RevealBlock key={card.title}>
                <Link to={card.href} className="block border border-border bg-background rounded-2xl p-8 hover:border-primary hover:shadow-lg transition-all duration-300 group h-full">
                  <span className="text-4xl mb-4 block">{card.emoji}</span>
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    {card.title}
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{card.body}</p>
                </Link>
              </RevealBlock>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6 — PRICING & ACTIVATION ── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <RevealBlock>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Already Included. Always Available.</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Odiopay integration is included in every Intraverse plan at no additional cost. There are no setup fees, no monthly subscriptions for the integration, and no premium upgrades required. If you're on Intraverse, you can activate Odiopay.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {["No setup fees", "No monthly subscription", "Available on every Intraverse plan"].map((pill) => (
                <span key={pill} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-foreground text-sm font-medium">
                  <Check className="w-4 h-4 text-green-600" />
                  {pill}
                </span>
              ))}
            </div>
            <Button variant="hero" size="xl" asChild>
              <a href="https://intraverse.app" target="_blank" rel="noopener noreferrer">
                Activate Odiopay in Your Dashboard →
              </a>
            </Button>
          </RevealBlock>
        </div>
      </section>

      {/* ── SECTION 7 — FAQ ── */}
      <section className="py-20 md:py-28 bg-accent">
        <div className="max-w-3xl mx-auto px-6">
          <RevealBlock>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Common Questions About Odiopay</h2>
          </RevealBlock>
          <RevealBlock>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl bg-background px-6 overflow-hidden">
                  <AccordionTrigger className="text-base font-semibold text-left hover:no-underline py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </RevealBlock>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-20 md:py-28 bg-secondary text-secondary-foreground">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <RevealBlock>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Stop Losing Sales. Start Closing Them.</h2>
            <p className="text-secondary-foreground/70 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Every customer who walks away because they can't pay upfront is a sale you should have closed. Odiopay turns those lost sales into completed bookings. Activate it from your Intraverse dashboard today and start offering BNPL on every eligible booking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" className="bg-background text-foreground hover:bg-background/90 rounded-none font-semibold" asChild>
                <a href="https://intraverse.app" target="_blank" rel="noopener noreferrer">Activate Odiopay</a>
              </Button>
              <Button variant="whatsapp" size="xl" className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Talk to Our Team
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
}
