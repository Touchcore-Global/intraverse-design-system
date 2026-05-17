import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  CheckSquare,
  ClipboardList,
  Wallet,
  Plane,
  Users,
  BarChart3,
  Quote,
  Building2,
  Calculator,
  UserCog,
  Briefcase,
  Building,
  Check,
  X,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { WHATSAPP_URL, DEMO_URL } from "@/lib/constants";
import { SEO } from "@/components/SEO";
import { useLocation } from "react-router-dom";

const features = [
  {
    icon: CheckSquare,
    title: "Approval Workflows",
    description:
      "Configurable approval chains that match your org structure. Every trip request goes through the right people before a single naira is spent. No more surprise bookings.",
    bullets: [
      "Multi-level approval chains (manager → finance → exec)",
      "Policy gates that auto-reject out-of-policy requests",
      "Email and in-app notifications for pending approvals",
      "Mobile approval for managers on the go",
    ],
  },
  {
    icon: ClipboardList,
    title: "Travel Policy Enforcement",
    description:
      "Set rules once - the platform enforces them automatically. Cabin class limits, hotel rate caps, advance booking requirements, and per-diem budgets. No exceptions unless approved.",
    bullets: [
      "Automatic cabin class restrictions by role",
      "Hotel rate caps by city and employee level",
      "Advance booking and preferred supplier rules",
      "Exception handling with audit trail",
    ],
  },
  {
    icon: Wallet,
    title: "Consolidated Naira Billing",
    description:
      "One invoice for all company travel, billed in Naira. Full breakdown by department, project, cost centre, or employee. No more chasing receipts from dozens of separate bookings or reconciling dollar-denominated expenses.",
    bullets: [
      "Single monthly invoice for all travel spend",
      "Breakdown by department, project, or cost centre",
      "Automated reconciliation with your finance system",
      "Downloadable reports for audits and tax filing",
      "Naira billing — no currency conversion headaches",
    ],
  },
  {
    icon: Plane,
    title: "Best Available Fares",
    description:
      "Powered by Intraverse's aggregated inventory — Amadeus, Sabre, Galileo, NDC, and consolidators. Your employees get the best prices across 900+ airlines without you negotiating carrier by carrier.",
    bullets: [
      "Multi-source fare comparison (GDS + NDC + LCC)",
      "Automatic lowest-fare recommendations",
      "Strong coverage on intra-Africa routes",
      "Hotels and ground transport included",
    ],
  },
  {
    icon: Users,
    title: "Employee Self-Service",
    description:
      "Employees search and book within policy - no admin bottleneck. The platform guides them to compliant options and routes approvals automatically.",
    bullets: [
      "Intuitive booking interface for non-travel staff",
      "Policy-compliant options highlighted automatically",
      "Traveller profiles with preferences and documents",
      "Booking history and upcoming trip dashboard",
    ],
  },
  {
    icon: BarChart3,
    title: "Real-Time Spend Visibility",
    description:
      "Live dashboards showing exactly what your company is spending on travel - right now. No waiting until month-end to discover budget overruns. When the CEO asks for a travel report, you have it in seconds.",
    bullets: [
      "Live spend tracking by department and employee",
      "Budget vs. actual dashboards",
      "Trend analysis and savings reports",
      "Exportable data for board reporting",
    ],
  },
];

const whoItsFor = [
  { icon: Building2, text: "Companies with 20+ employees making regular business trips" },
  { icon: Calculator, text: "Finance teams tired of chasing receipts and reconciling travel expenses in spreadsheets" },
  { icon: UserCog, text: "HR and admin managers handling travel logistics alongside their actual job" },
  { icon: Briefcase, text: "Dedicated travel managers who need better tools and visibility" },
  { icon: Building, text: "Any Nigerian or African business that wants to stop losing money on unmanaged travel" },
];

const trustStats = [
  { value: "30%", label: "Average Cost Reduction" },
  { value: "900+", label: "Airlines via GDS" },
  { value: "24/7", label: "Booking Availability" },
];

const howItWorksSteps = [
  {
    number: "1",
    title: "Set Your Travel Policy",
    description:
      "Define cabin class limits, hotel rate caps, advance booking rules, and per diem budgets. Set approval chains by department and spend threshold. Do this once — CoopX enforces it automatically on every booking.",
  },
  {
    number: "2",
    title: "Employees Book Within Policy",
    description:
      "Your team searches flights, hotels, and transport through a simple booking interface. Only policy-compliant options are shown. Out-of-policy requests are flagged and routed for approval — no exceptions slip through.",
  },
  {
    number: "3",
    title: "Finance Gets Real-Time Visibility",
    description:
      "Live dashboards show exactly what your company is spending on travel — by department, project, or employee. One consolidated invoice per month. No more chasing receipts or month-end surprises.",
  },
];

const globalAssumptions = [
  "Stable currency and international card payments",
  "Standardised expense reporting systems",
  "Direct flights on major carrier networks",
  "Local support in your timezone",
  "Per diem and travel policy norms matching Western standards",
];

const coopxUnderstands = [
  "Naira billing with local payment methods",
  "Nigerian tax and audit requirements",
  "Intra-Africa routing through connecting hubs",
  "Lagos-based support team on WhatsApp and phone",
  "Per diem culture and approval hierarchies unique to Nigerian corporates",
];

const faqs = [
  {
    question: "How is CoopX different from TravelPerk or Navan?",
    answer:
      "TravelPerk and Navan are excellent platforms built for European and American businesses. CoopX is built specifically for African corporate travel. That means Naira billing, local payment methods, Lagos-based support, strong intra-Africa route coverage, and an understanding of Nigerian approval hierarchies and per diem culture. If your business operates in Nigeria or across Africa, CoopX is built for your reality.",
  },
  {
    question: "How does CoopX enforce our travel policy?",
    answer:
      "You configure your travel policy rules in the platform - cabin class limits by employee level, hotel rate caps by city, advance booking requirements, preferred suppliers, and per-diem budgets. When an employee searches for travel, only policy-compliant options are shown by default. Out-of-policy requests can be blocked entirely or routed through an exception approval workflow with a full audit trail.",
  },
  {
    question: "How much does CoopX cost?",
    answer:
      "CoopX pricing is based on your company size and travel volume. We offer flexible plans that scale with your needs — you only pay for what you use. Book a demo and we'll provide a custom quote based on your specific requirements. There are no hidden fees or long-term lock-in contracts.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "Most companies are live within 2-4 weeks. Implementation includes: configuring your travel policy, setting up approval workflows, adding employee profiles, and a training session for your team. We handle the technical setup — your admin team focuses on policy decisions.",
  },
  {
    question: "Can we customise approval workflows for different departments?",
    answer:
      "Yes. Approval chains are fully configurable by department, trip type, or spend threshold. A domestic trip might need only a line manager's approval, while an international business-class booking might require department head, finance, and executive sign-off. You set the rules - the platform enforces them.",
  },
  {
    question: "Does CoopX handle Naira billing?",
    answer:
      "Yes — this is one of our key differentiators. All billing is in Naira. Your consolidated monthly invoice is denominated in NGN, so there's no currency conversion reconciliation. This matters for Nigerian companies dealing with CBN forex restrictions and fluctuating exchange rates.",
  },
  {
    question: "What size of company is CoopX designed for?",
    answer:
      "CoopX is built for companies with 20 or more employees making regular business trips. Whether you're a mid-size Nigerian firm with a small admin team handling travel or a large enterprise with a dedicated travel manager, the platform scales to your needs. Pricing is based on usage, so you only pay for what you need.",
  },
  {
    question: "Does CoopX integrate with our accounting system?",
    answer:
      "CoopX generates reports in formats compatible with most Nigerian accounting systems. Spend data is exportable by department, project, cost centre, or employee. For enterprise clients, we offer custom integrations with ERP and finance systems. Discuss your specific requirements during the demo.",
  },
  {
    question: "Do employees need training to use the platform?",
    answer:
      "The booking interface is designed for people who are not travel professionals. If your employees can book a flight on a consumer website, they can use CoopX. We provide onboarding sessions and support materials, but most users are self-sufficient after their first booking.",
  },
  {
    question: "What happens if an employee has a travel emergency?",
    answer:
      "CoopX includes duty-of-care features — you can see where your travelling employees are at any time. For booking changes and emergencies, our Lagos-based support team is available on WhatsApp and phone. Your employees aren't waiting for a chatbot in a different timezone.",
  },
];

const CoopX = () => {
  const { pathname } = useLocation();
  return (
    <div className="min-h-screen">
      <SEO
        title="CoopX — Corporate Travel Management Platform Nigeria | Intraverse"
        description="Simplify corporate travel in Africa. Manage bookings, control spend, enforce travel policy, and automate expense reporting. Built for Nigerian and African enterprises."
        canonical={pathname}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "CoopX",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          description: "Corporate travel management platform for African businesses",
          provider: { "@type": "Organization", name: "Intraverse", url: "https://intraverse.africa" },
        }}
      />
      <Navbar />
      <div className="h-16" />

      {/* HERO */}
      <section className="relative overflow-hidden bg-background">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent blur-3xl translate-y-1/2 -translate-x-1/4" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="coopx-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#coopx-grid)" />
          </svg>
        </div>

        <div className="container relative mx-auto px-4 py-20 lg:py-32 text-center">
          <h1 className="max-w-5xl mx-auto">
            Corporate Travel Management Built for African Businesses
          </h1>
          <p className="mt-8 text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground leading-relaxed">
            CoopX gives your company a complete travel management platform —
            booking, approvals, policy enforcement, consolidated billing, and
            real-time spend visibility. Built in Lagos for businesses that are
            done managing employee travel on spreadsheets and WhatsApp.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" className="cta-responsive min-h-[48px]" asChild>
              <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">Book a Demo for Your Company</a>
            </Button>
            <Button variant="whatsapp" size="xl" className="cta-responsive min-h-[48px]" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            15-minute demo • No commitment • Built in Lagos for African businesses
          </p>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="py-8 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
            {trustStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                <p className="mt-1 text-xs md:text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-muted-foreground max-w-2xl mx-auto">
            Powered by Amadeus, Sabre, Galileo, and NDC — accessed through Intraverse's IATA accreditation
          </p>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 lg:pl-[100px]">
          <h2 className="max-w-4xl">
            Your Company Is Losing Money on Unmanaged Travel
          </h2>
          <p className="mt-8 text-base sm:text-lg max-w-3xl text-muted-foreground leading-relaxed">
            There's no approval workflow — so anyone books anything. There's no
            policy enforcement — so economy becomes business class. There's no
            visibility — so finance discovers the damage at month-end. Your admin
            team spends hours chasing receipts, reconciling expenses, and
            explaining overruns that could have been prevented.
          </p>
          <p className="mt-6 text-base sm:text-lg max-w-3xl text-muted-foreground leading-relaxed">
            This isn't just a Nigerian problem — a recent Skift report found that
            Africa recorded over $10 billion in business travel spending in 2025,
            growing at 28% annually. But most companies still manage travel
            through WhatsApp groups, email chains, and spreadsheets. Global
            platforms like TravelPerk and Navan weren't built for Naira billing,
            intra-Africa routing, or Nigerian corporate travel culture. CoopX was.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="max-w-4xl mx-auto mb-12">Three Steps to Managed Travel</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {howItWorksSteps.map((step) => (
              <div key={step.number} className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="h3-global text-foreground mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 lg:pl-[100px]">
          <h2 className="max-w-4xl mb-16">
            Control, Visibility, and Savings - Built In
          </h2>
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

      {/* WHO IT'S FOR */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:pl-[100px]">
          <h2 className="max-w-4xl mb-12">Who CoopX Is Built For</h2>
          <div className="max-w-3xl space-y-5">
            {whoItsFor.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPETITOR */}
      <section className="py-20 bg-background border-t border-border">
        <div className="container mx-auto px-4 lg:pl-[100px]">
          <h2 className="max-w-4xl mb-6">Built for Africa, Not Adapted for It</h2>
          <p className="text-base sm:text-lg max-w-3xl text-muted-foreground leading-relaxed mb-12">
            Global corporate travel platforms like TravelPerk, Navan, and SAP
            Concur are built for European and American companies. They work well
            in markets with established TMC infrastructure, stable currencies,
            and standardised expense systems. But Nigerian and African
            businesses face different realities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
            <div className="brand-card border border-border">
              <h3 className="h3-global mb-5">What global platforms assume</h3>
              <ul className="space-y-3">
                {globalAssumptions.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="w-5 h-5 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="h-3 w-3 text-destructive" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="brand-card border border-border">
              <h3 className="h3-global mb-5">What CoopX understands</h3>
              <ul className="space-y-3">
                {coopxUnderstands.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-primary" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-10 text-base sm:text-lg max-w-3xl text-muted-foreground leading-relaxed">
            CoopX isn't a global platform with an Africa add-on. It's a corporate
            travel platform built from the ground up for how African businesses
            actually operate.
          </p>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="border border-border rounded-xl p-8 md:p-12 bg-card">
              <Quote className="h-10 w-10 text-primary/20 mb-6" />
              <p className="text-lg md:text-xl text-foreground leading-relaxed font-medium mb-8">
                "We used to find out about travel budget overruns at the end of
                the month - by then the damage was done. With CoopX, I see
                exactly what we're spending in real time. Approvals are
                automatic, policy is enforced before booking, and our quarterly
                travel costs dropped by 30%. The Naira billing alone saved us
                hours of reconciliation every month. I wish we'd started sooner."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                  O
                </div>
                <div>
                  <p className="font-semibold text-foreground">Olumide Kadri</p>
                  <p className="text-sm text-muted-foreground">
                    CFO, Meridian Industries - Lagos
                  </p>
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
            Stop Losing Money on Unmanaged Travel
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            See how CoopX gives your finance team real-time visibility, your
            employees self-service booking, and your company measurable savings.
            Book a 15-minute demo — no commitment, no payment details required.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="outline"
              size="xl"
              className="cta-responsive min-h-[48px] bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-none font-semibold" asChild
            >
              <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">Book a Demo for Your Company</a>
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

export default CoopX;
