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
      "Configurable approval chains that match your org structure. Every trip request goes through the right people before a single dollar is spent. No more surprise bookings.",
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
    title: "Consolidated Billing",
    description:
      "One invoice for all company travel. Full breakdown by department, project, cost centre, or employee. No more chasing receipts from 50 different bookings.",
    bullets: [
      "Single monthly invoice for all travel spend",
      "Breakdown by department, project, or cost centre",
      "Automated reconciliation with your finance system",
      "Downloadable reports for audits and tax filing",
    ],
  },
  {
    icon: Plane,
    title: "Best Available Fares",
    description:
      "Powered by Intraverse's aggregated inventory - GDS, NDC, consolidators, and more. Your employees get the best prices without you negotiating airline-by-airline.",
    bullets: [
      "Multi-source fare comparison for every search",
      "Automatic lowest-fare recommendations",
      "Negotiated corporate rates where available",
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
      "Live dashboards showing exactly what your company is spending on travel - right now. No waiting until month-end to discover budget overruns.",
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
  { icon: Calculator, text: "Finance teams tired of chasing receipts and reconciling travel expenses manually" },
  { icon: UserCog, text: "HR and admin managers handling travel logistics alongside their actual job" },
  { icon: Briefcase, text: "Dedicated travel managers who need better tools and visibility" },
  { icon: Building, text: "Any business that wants to stop losing money on unmanaged travel" },
];

const stats = [
  { value: "30%", label: "Average Cost Reduction" },
  { value: "2+hrs", label: "Admin Time Saved Monthly" },
];

const faqs = [
  {
    question: "How does CoopX enforce our travel policy?",
    answer:
      "You configure your travel policy rules in the platform - cabin class limits by employee level, hotel rate caps by city, advance booking requirements, preferred suppliers, and per-diem budgets. When an employee searches for travel, only policy-compliant options are shown by default. Out-of-policy requests can be blocked entirely or routed through an exception approval workflow with a full audit trail.",
  },
  {
    question: "Can we customise the approval workflow for different departments?",
    answer:
      "Yes. Approval chains are fully configurable by department, trip type, or spend threshold. A domestic trip might need only a line manager's approval, while an international business-class booking might require department head, finance, and executive sign-off. You set the rules - the platform enforces them.",
  },
  {
    question: "How does billing and invoicing work?",
    answer:
      "All company travel is consolidated into a single monthly invoice with full line-item detail. You can break down spend by department, project, cost centre, or individual employee. Reports are downloadable in formats compatible with most accounting systems, and our team can help with custom integrations.",
  },
  {
    question: "Do employees need training to use the platform?",
    answer:
      "The booking interface is designed for people who are not travel professionals. If your employees can book a flight on a consumer website, they can use CoopX. We provide onboarding sessions and support materials, but most users are self-sufficient after their first booking.",
  },
  {
    question: "What size of company is CoopX designed for?",
    answer:
      "CoopX is built for companies with 20 or more employees making regular business trips. Whether you're a mid-size firm with a small admin team handling travel or a large enterprise with a dedicated travel manager, the platform scales to your needs. Pricing is based on usage, so you only pay for what you need.",
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
        ogImage="https://intraverse.africa/og/coopx.jpg"
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
            Your Company's Travel. Managed Properly. Finally.
          </h1>
          <p className="mt-8 text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground leading-relaxed">
            CoopX gives your company a complete travel management platform -
            booking, approvals, policy enforcement, consolidated billing, and
            full reporting. Built for African corporates that are done managing
            employee travel on spreadsheets and WhatsApp.
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
            15-minute demo • No commitment • Built for African corporates
          </p>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 lg:pl-[100px]">
          <h2 className="max-w-4xl">
            Your Company Is Bleeding Money on Unmanaged Travel
          </h2>
          <p className="mt-8 text-base sm:text-lg max-w-3xl text-muted-foreground leading-relaxed">
            There's no approval workflow - so anyone books anything. There's no
            policy enforcement - so economy becomes business class. There's no
            visibility - so finance discovers the damage at month-end. Your admin
            team spends days chasing receipts, reconciling expenses, and
            explaining overruns that could have been prevented.
          </p>
          <p className="mt-6 text-base sm:text-lg max-w-3xl text-muted-foreground leading-relaxed">
            Meanwhile, the company is paying above-market rates because nobody
            has time to compare fares properly. The CEO wants a travel report and
            gets a cobbled-together spreadsheet three weeks later. Every
            stakeholder is frustrated - finance, HR, the travellers themselves,
            and leadership. There has to be a better way.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-background">
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
      <section className="py-20 bg-accent">
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

      {/* STATS - removed */}

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
                travel costs dropped by 30%. I wish we'd started sooner."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                  O
                </div>
                <div>
                  <p className="font-semibold text-foreground">Olumide K.</p>
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
            Take Control of Your Company's Travel Spend
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            See how CoopX gives your finance team visibility, your employees
            self-service, and your company real savings. Book a free demo -
            no commitment required.
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
