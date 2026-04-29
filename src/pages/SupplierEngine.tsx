import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Link2,
  DollarSign,
  Handshake,
  Lock,
  MessageCircle,
  Users,
  Hash,
  TrendingUp,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { WHATSAPP_URL } from "@/lib/constants";
import { SEO } from "@/components/SEO";

const steps = [
  { icon: Link2, title: "Share OIDs", desc: "Agents opt in to share their Amadeus Office IDs as supply partners within the network." },
  { icon: DollarSign, title: "Access Better Fares", desc: "The system searches across all shared OIDs simultaneously, surfacing the best available pricing." },
  { icon: Handshake, title: "Everyone Benefits", desc: "Collective buying power means better fares for all - without competitive disadvantage." },
  { icon: Lock, title: "Built Into Dashboard", desc: "No separate portal. Supplier Engine works inside the Intraverse platform you already use." },
];

const stats = [
  { value: "200+", label: "Agents in Network" },
  { value: "50+", label: "OIDs at Launch" },
  { value: "15%", label: "Projected Fare Improvement" },
];

const faqs = [
  { q: "What is a multi-OID fare aggregation system?", a: "It's a system that searches for fares across multiple Amadeus Office IDs simultaneously. Instead of seeing prices from just your single OID, you see the best available fares from dozens of OIDs - including negotiated and special deal fares." },
  { q: "Do I lose control of my OID?", a: "No. You retain full ownership and control of your OID. You're simply opting in to share fare access with the network, and in return you gain access to fares from every other shared OID." },
  { q: "Is there an additional cost?", a: "Pricing details will be announced at launch. Join the waitlist to be the first to know about launch pricing and any early-adopter benefits." },
  { q: "Can competitors see my negotiated fares?", a: "The system surfaces the best fare for a given route - it doesn't expose which OID it came from or the details of your negotiated agreements. Your commercial relationships remain private." },
  { q: "When does it launch?", a: "We're targeting launch in Q3 2026. Waitlist members will get early access and priority onboarding." },
];

const SupplierEngine = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Supplier Engine — GDS, NDC & Hotel Aggregation | Intraverse"
        description="Access Amadeus, Sabre, Galileo, NDC, and HotelBeds through one integration. Intraverse aggregates 900+ airlines and 1M+ hotel properties for travel agents."
        canonical="https://intraverse.africa/supplier-engine"
      />
      <Navbar />

      {/* HERO */}
      <section className="pt-32 pb-20 bg-accent">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Badge className="mb-6 bg-primary text-primary-foreground hover:bg-primary/90 text-sm px-4 py-1">
            Coming Soon
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
            Access Fares You Could Never Get Alone
          </h1>
          <p className="text-muted-foreground text-base md:text-lg mb-10 leading-relaxed">
            The Supplier Engine is a multi-OID fare aggregation system that lets travel agents
            share Amadeus Office IDs as supply partners. The result: access to negotiated fares, special
            deals, and pricing that no single agency could unlock on its own.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="xl" className="cta-responsive min-h-[48px] rounded-none font-semibold">
              Join the Waitlist
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="cta-responsive min-h-[48px] rounded-none font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Get Notified When It Launches
            </Button>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-foreground">
            You're Competing on Price With One Hand Tied Behind Your Back
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Large agencies have negotiated fares you can't access. They search dozens of Amadeus OIDs
            to find the best pricing on every route. You're searching one. That means you're quoting
            higher fares, losing bookings, and competing at a structural disadvantage - no matter how
            good your service is. Supplier Engine levels the playing field.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-14 text-foreground">
            How It Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {steps.map((step, i) => (
              <div key={i} className="bg-card rounded-xl p-6 text-center shadow-sm border border-border">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-7 w-7 text-primary" />
                </div>
                <div className="text-xs font-semibold text-primary mb-2">Step {i + 1}</div>
                <h3 className="h3-global mb-2 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS TEASER */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
            {stats.map((s, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{s.value}</div>
                <div className="text-muted-foreground text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WAITLIST FORM */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto bg-card rounded-xl p-8 md:p-10 shadow-sm border border-border">
            <h2 className="text-2xl font-bold text-center mb-2 text-foreground">
              Join the Waitlist
            </h2>
            <p className="text-muted-foreground text-center text-sm mb-8">
              We'll notify you first when Supplier Engine launches.
            </p>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <Label htmlFor="wl-name" className="text-sm text-foreground">Name</Label>
                <Input id="wl-name" placeholder="Your full name" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="wl-agency" className="text-sm text-foreground">Agency Name</Label>
                <Input id="wl-agency" placeholder="Your agency or company" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="wl-phone" className="text-sm text-foreground">Phone (WhatsApp)</Label>
                <Input id="wl-phone" type="tel" placeholder="+234..." className="mt-1" />
              </div>
              <div>
                <Label htmlFor="wl-oid" className="text-sm text-foreground">
                  Current OID <span className="text-muted-foreground">(optional)</span>
                </Label>
                <Input id="wl-oid" placeholder="e.g. LOSXX1234" className="mt-1" />
              </div>
              <Button type="submit" className="w-full min-h-[48px] rounded-none font-semibold">
                Join the Waitlist
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-foreground">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-foreground">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* MINIMAL FOOTER CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-primary-foreground">
            Don't Miss Early Access
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto text-sm md:text-base">
            Waitlist members get priority onboarding and early-adopter pricing when Supplier Engine launches.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="xl"
              className="cta-responsive min-h-[48px] bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-none font-semibold"
            >
              Join the Waitlist
            </Button>
            <Button
              variant="whatsapp"
              size="xl"
              className="cta-responsive min-h-[48px]"
             asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFab />
    </div>
  );
};

export default SupplierEngine;
