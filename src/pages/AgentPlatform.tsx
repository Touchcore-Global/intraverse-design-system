import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Button } from "@/components/ui/button";
import { MessageCircle, Plane, Hotel, Globe, LayoutDashboard, Zap, ShieldCheck, Quote } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { WHATSAPP_URL, DEMO_URL } from "@/lib/constants";

const features = [
  {
    icon: Plane,
    title: "Aggregated Flight Search",
    description: "Search across GDS systems, NDC connections, consolidators, and aggregators simultaneously. One query returns every available fare from every source.",
    bullets: [
      "Amadeus, Sabre, Galileo by Travelport - all in one search",
      "NDC direct connections for better fares",
      "Consolidator and aggregator inventory included",
      "Compare prices across all sources instantly",
    ],
  },
  {
    icon: Hotel,
    title: "Hotels From Global Suppliers",
    description: "Access hotel inventory from multiple global providers. Compare rates, availability, and room types side by side without switching platforms.",
    bullets: [
      "Multiple supplier connections in one view",
      "Real-time rate comparison across providers",
      "Room-level detail and cancellation policies",
      "Markup and commission management built in",
    ],
  },
  {
    icon: Globe,
    title: "Tours & Packages",
    description: "Bundle flights, hotels, and experiences into complete packages. Access tour inventory from leading suppliers and create custom itineraries.",
    bullets: [
      "Pre-built and custom tour packages",
      "Bundle flights + hotels + experiences",
      "Supplier inventory from global operators",
      "Dynamic packaging with real-time pricing",
    ],
  },
  {
    icon: LayoutDashboard,
    title: "Single Dashboard",
    description: "One login. Zero switching. Manage flights, hotels, tours, bookings, payments, and reporting from a unified interface designed for speed.",
    bullets: [
      "Unified booking management across all products",
      "Customer records and itineraries in one place",
      "Payment tracking and reconciliation",
      "Role-based access for your team",
    ],
  },
  {
    icon: Zap,
    title: "Speed",
    description: "Search results in seconds, not minutes. Issue tickets faster with streamlined workflows that eliminate redundant steps and manual data entry.",
    bullets: [
      "Sub-second search across all sources",
      "One-click booking and ticket issuance",
      "Auto-populated passenger and payment data",
      "Bulk booking and group management tools",
    ],
  },
  {
    icon: ShieldCheck,
    title: "IATA-Accredited & Secure",
    description: "Book with confidence on a platform that meets international aviation standards. BSP settlement, end-to-end encryption, and full compliance.",
    bullets: [
      "IATA-accredited platform",
      "BSP settlement integration",
      "End-to-end data encryption",
      "PCI-DSS compliant payment processing",
      "Regular security audits",
    ],
  },
];

const stats = [
  { value: "15+", label: "Flight Sources" },
  { value: "5+", label: "Hotel Suppliers" },
  { value: "5+", label: "Tour Suppliers" },
  { value: "200+", label: "Active Agents" },
  { value: "<24hrs", label: "Setup" },
];

const faqs = [
  {
    question: "What flight sources does the platform aggregate?",
    answer: "The Agent Selling Platform connects to all major GDS systems (Amadeus, Sabre, Galileo by Travelport), NDC direct connections with airlines, consolidator inventory, and other aggregator feeds. This means every search returns fares from every available source - so you never miss a better price or route option.",
  },
  {
    question: "Can I book hotels and tours alongside flights?",
    answer: "Yes. The platform integrates hotel inventory from multiple global suppliers and tour/experience packages from leading operators. You can search, compare, and book flights, hotels, and tours from the same dashboard - or bundle them into complete packages for your customers.",
  },
  {
    question: "How does this compare to using a GDS directly?",
    answer: "A standalone GDS only gives you access to its own inventory. The Agent Selling Platform layers multiple GDS systems, NDC connections, consolidators, and aggregators into a single search. You see more options, find better fares, and book faster - all without switching between systems or learning multiple interfaces.",
  },
  {
    question: "How long does setup take?",
    answer: "Most agencies are live within 24 hours. Sign up on the platform, follow the guided steps to complete your profile, and our team will help configure your supplier connections and train your staff. There's no lengthy integration process or IT requirements.",
  },
  {
    question: "What does the platform cost?",
    answer: "Pricing is tailored to your agency's size and booking volume. We offer flexible plans with no long-term contracts. Book a free demo to discuss your needs and get a custom quote - there's no commitment required.",
  },
];

const AgentPlatform = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="h-16" />

      {/* HERO */}
      <section className="relative overflow-hidden bg-background">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent blur-3xl translate-y-1/2 -translate-x-1/4" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="agent-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#agent-grid)" />
          </svg>
        </div>

        <div className="container relative mx-auto px-4 py-20 lg:py-32 text-center">
          <h1 className="max-w-5xl mx-auto">
            Every Flight, Hotel, and Tour - From Every Source - On One Screen
          </h1>
          <p className="mt-8 text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground leading-relaxed">
            Intraverse's Agent Selling Platform aggregates flight inventory from GDS systems (Amadeus, Sabre, Galileo by Travelport), NDC connections, consolidators, and other aggregators - plus hotels and tours from leading global suppliers. Search, compare, book, and issue from a single dashboard. IATA-accredited.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" className="cta-responsive min-h-[48px]" asChild>
              <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">Book a Demo</a>
            </Button>
            <Button variant="whatsapp" size="xl" className="cta-responsive min-h-[48px]" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            15-minute demo • No commitment • Free
          </p>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 lg:pl-[100px]">
          <h2 className="max-w-4xl">What You're Dealing With Right Now</h2>
          <p className="mt-8 text-base sm:text-lg max-w-3xl text-muted-foreground leading-relaxed">
            You open Amadeus for one airline, Sabre for another, check an NDC portal for a better fare, call your consolidator for group pricing, then log into a hotel platform to add accommodation. Five systems. Five logins. Five chances to make an error. And your customer is already shopping somewhere else.
          </p>
          <p className="mt-6 text-base sm:text-lg max-w-3xl text-muted-foreground leading-relaxed">
            Meanwhile, tour packages and curated experiences - the products with the highest margins - are left on the table because there's no time to search yet another platform. Your agents are spending more time toggling between tabs than actually selling travel.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:pl-[100px]">
          <h2 className="max-w-4xl mb-16">Everything You Need to Sell Travel</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
            {features.map((feature) => (
              <div key={feature.title} className="brand-card border border-border flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="h3-global">{feature.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2 mt-auto">
                  {feature.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS ROW */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-primary-foreground">{stat.value}</p>
                <p className="mt-1 text-sm text-secondary-foreground/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="border border-border rounded-xl p-8 md:p-12 bg-card">
              <Quote className="h-10 w-10 text-primary/20 mb-6" />
              <p className="text-lg md:text-xl text-foreground leading-relaxed font-medium mb-8">
                "Before Intraverse, I had four browser tabs open just to search for a single client's flight. Now I run one search and see fares from every source - GDS, NDC, consolidators - side by side. I book faster, I find better prices, and my clients think I'm a genius."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                  A
                </div>
                <div>
                  <p className="font-semibold text-foreground">Adaeze O.</p>
                  <p className="text-sm text-muted-foreground">Skyline Travels - Lagos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 lg:pl-[100px]">
          <h2 className="max-w-4xl mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-border">
                  <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="max-w-4xl mx-auto text-primary-foreground">
            Ready to Sell More From One Screen?
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            See how the Agent Selling Platform can replace your fragmented workflow with a single, powerful dashboard. Book a free 15-minute demo - no commitment required.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="outline"
              size="xl"
              className="cta-responsive min-h-[48px] bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-none font-semibold" asChild
            >
              <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">Book a Free Demo</a>
            </Button>
            <Button variant="whatsapp" size="xl" className="cta-responsive min-h-[48px]" asChild>
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

export default AgentPlatform;
