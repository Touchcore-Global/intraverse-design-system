import { useEffect, useRef, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Button } from "@/components/ui/button";
import {
  MessageCircle, Plane, Hotel, Globe, Ticket,
  LayoutDashboard, CalendarClock, ListChecks, Inbox,
  Wallet, PercentCircle, CreditCard, BadgeDollarSign,
  Users, BookUser, BellRing,
  Zap, Clock, Settings2,
  BarChart3, PieChart, TrendingUp,
  Globe2, Code2, ShoppingCart,
  ShieldCheck, FileCheck, Lock, Server,
  Headphones, Phone, GraduationCap, BookOpen,
  type LucideIcon,
} from "lucide-react";

/* ───── types ───── */
interface FeatureCard {
  icon: LucideIcon;
  title: string;
  benefit: string;
  description: string;
  bullets: string[];
}

interface FeatureSection {
  id: string;
  label: string;
  headline: string;
  cards: FeatureCard[];
}

/* ───── data ───── */
const sections: FeatureSection[] = [
  {
    id: "inventory",
    label: "Inventory & Booking",
    headline: "Search Every Source. Book From One Screen.",
    cards: [
      {
        icon: Plane,
        title: "Aggregated Flight Search",
        benefit: "Every fare from every source in one query",
        description: "Search across Amadeus, Sabre, Galileo by Travelport, NDC connections, consolidators, and aggregators simultaneously. One search returns all available fares so you never miss the best price.",
        bullets: ["GDS + NDC + consolidator results combined", "Real-time availability and pricing", "Fare comparison across all sources", "Filter by airline, stops, time, price"],
      },
      {
        icon: Hotel,
        title: "Hotel Search",
        benefit: "Global hotel inventory at your fingertips",
        description: "Access rooms from multiple global suppliers. Compare rates, cancellation policies, and room types side by side without switching between platforms.",
        bullets: ["Multiple supplier feeds in one view", "Real-time rate comparison", "Cancellation policy visibility", "Markup management built in"],
      },
      {
        icon: Globe,
        title: "Tours & Packages",
        benefit: "Bundle and sell complete travel experiences",
        description: "Access tour inventory from leading global operators. Create custom packages bundling flights, hotels, and experiences with dynamic pricing.",
        bullets: ["Pre-built and custom packages", "Dynamic pricing engine", "Supplier inventory from global operators", "Bundle flights + hotels + experiences"],
      },
      {
        icon: Ticket,
        title: "Ticket Issuance",
        benefit: "Issue tickets in seconds, not minutes",
        description: "Streamlined ticketing workflows eliminate manual steps. Auto-populated passenger data, one-click issuance, and instant confirmation across all GDS systems.",
        bullets: ["One-click ticket issuance", "Auto-populated PNR data", "Multi-GDS support", "Instant e-ticket delivery", "Void and reissue management"],
      },
    ],
  },
  {
    id: "dashboard",
    label: "Dashboard",
    headline: "One Dashboard. Complete Control.",
    cards: [
      {
        icon: LayoutDashboard,
        title: "Unified Dashboard",
        benefit: "Everything you need on one screen",
        description: "Manage flights, hotels, tours, bookings, payments, and reporting from a single interface. No more tab-switching between disconnected tools.",
        bullets: ["All products in one view", "Role-based access for teams", "Customisable layout", "Real-time notifications"],
      },
      {
        icon: ListChecks,
        title: "Booking Management",
        benefit: "Track every booking from search to post-travel",
        description: "View, modify, and manage all bookings in a centralised timeline. Filter by status, date, customer, or product type.",
        bullets: ["Centralised booking timeline", "Status tracking and alerts", "Modification and cancellation tools", "Booking notes and attachments"],
      },
      {
        icon: CalendarClock,
        title: "Date Changes & Modifications",
        benefit: "Handle changes without the chaos",
        description: "Process date changes, name corrections, and itinerary modifications directly from the dashboard with automated fare-difference calculations.",
        bullets: ["In-platform date change requests", "Automated fare-difference calculation", "Audit trail for all modifications"],
      },
      {
        icon: Inbox,
        title: "Queue Management",
        benefit: "Never miss a deadline or action item",
        description: "Automated queue system surfaces tasks that need attention — ticketing deadlines, payment reminders, schedule changes, and customer follow-ups.",
        bullets: ["Priority-based task queues", "Automated deadline alerts", "Team assignment and escalation", "Schedule change notifications", "Batch processing for bulk actions"],
      },
    ],
  },
  {
    id: "payments",
    label: "Payments",
    headline: "Get Paid Faster. Track Every Naira.",
    cards: [
      {
        icon: Wallet,
        title: "Agent Wallet",
        benefit: "Fund, spend, and reconcile in one place",
        description: "Pre-fund your wallet and book instantly. Track balances, top-ups, and spending in real time with full transaction history.",
        bullets: ["Instant wallet funding", "Real-time balance tracking", "Transaction history and export", "Multi-currency support"],
      },
      {
        icon: PercentCircle,
        title: "Commission Tracking",
        benefit: "Know exactly what you earn on every booking",
        description: "Automatic commission calculation across all products and suppliers. View earned, pending, and paid commissions in dedicated reports.",
        bullets: ["Per-booking commission visibility", "Supplier commission reconciliation", "Commission reports and export", "Automated calculations"],
      },
      {
        icon: CreditCard,
        title: "Secure Payments",
        benefit: "PCI-compliant processing you can trust",
        description: "Accept payments via bank transfer, card, or wallet. All transactions are encrypted and processed through PCI-DSS compliant infrastructure.",
        bullets: ["Multiple payment methods", "End-to-end encryption", "PCI-DSS compliant", "Instant payment confirmation"],
      },
      {
        icon: BadgeDollarSign,
        title: "Odiopay BNPL",
        benefit: "Let customers pay in instalments",
        description: "Offer Buy Now Pay Later and Fare Lock options to your customers. You get paid upfront — Odiopay handles the rest.",
        bullets: ["Buy Now Pay Later for travellers", "Fare Lock to hold prices", "Agent gets paid immediately", "Seamless checkout integration", "Risk managed by Odiopay"],
      },
    ],
  },
  {
    id: "customers",
    label: "Customers",
    headline: "Know Your Travellers. Serve Them Better.",
    cards: [
      {
        icon: Users,
        title: "Traveller Profiles",
        benefit: "Passenger data saved, auto-filled, always ready",
        description: "Store passport details, preferences, frequent-flyer numbers, and travel history for every traveller. Auto-populate bookings instantly.",
        bullets: ["Passport and ID storage", "Frequent-flyer integration", "Travel history timeline", "Auto-fill on new bookings"],
      },
      {
        icon: BookUser,
        title: "CRM Directory",
        benefit: "Your customer database, organised and searchable",
        description: "Maintain a complete directory of individual and corporate clients. Tag, segment, and search across your entire customer base.",
        bullets: ["Individual and corporate profiles", "Tagging and segmentation", "Search and filter tools", "Booking history per customer"],
      },
      {
        icon: BellRing,
        title: "Automated Notifications",
        benefit: "Keep travellers informed without lifting a finger",
        description: "Automatic email and SMS notifications for booking confirmations, itinerary changes, payment receipts, and travel reminders.",
        bullets: ["Booking confirmation emails", "Itinerary change alerts", "Payment receipt delivery", "Pre-travel reminders", "Customisable templates"],
      },
    ],
  },
  {
    id: "automation",
    label: "Automation",
    headline: "Automate the Repetitive. Focus on Selling.",
    cards: [
      {
        icon: Zap,
        title: "Auto-Ticketing",
        benefit: "Tickets issued automatically after payment",
        description: "Configure rules to auto-issue tickets once payment is confirmed. Reduce manual intervention and eliminate ticketing delays.",
        bullets: ["Rule-based auto-issuance", "Payment confirmation triggers", "Error handling and alerts", "Manual override available"],
      },
      {
        icon: Clock,
        title: "Smart Reminders",
        benefit: "Never miss a deadline again",
        description: "Automated reminders for ticketing deadlines, payment due dates, passport expiry, and visa application windows.",
        bullets: ["Ticketing deadline alerts", "Payment due-date reminders", "Passport expiry warnings", "Custom reminder rules"],
      },
      {
        icon: Settings2,
        title: "Post-Ticketing Automation",
        benefit: "After the ticket, the platform keeps working",
        description: "Automated post-ticketing workflows handle schedule-change monitoring, e-ticket delivery, and itinerary generation without manual effort.",
        bullets: ["Schedule change monitoring", "Automatic e-ticket delivery", "Itinerary PDF generation", "Post-booking follow-ups"],
      },
    ],
  },
  {
    id: "reporting",
    label: "Reporting",
    headline: "Data That Drives Decisions.",
    cards: [
      {
        icon: BarChart3,
        title: "Sales Reports",
        benefit: "See what's selling, what's not, and why",
        description: "Track bookings by product, supplier, destination, and time period. Identify trends, top-performing routes, and revenue drivers.",
        bullets: ["Booking volume by product/supplier", "Revenue tracking by period", "Top routes and destinations", "Export to CSV/PDF"],
      },
      {
        icon: PieChart,
        title: "Financial Reports",
        benefit: "Reconciliation made simple",
        description: "Complete financial visibility — revenue, costs, commissions, wallet movements, and outstanding balances in structured reports.",
        bullets: ["Revenue vs. cost breakdown", "Commission reconciliation", "Wallet transaction reports", "Outstanding balance tracking"],
      },
      {
        icon: TrendingUp,
        title: "Performance Dashboard",
        benefit: "Real-time KPIs for your agency",
        description: "Live dashboard showing booking conversion rates, average booking value, revenue per agent, and month-over-month growth.",
        bullets: ["Conversion rate tracking", "Average booking value", "Agent performance metrics", "Month-over-month trends"],
      },
    ],
  },
  {
    id: "whitelabel",
    label: "White-Label",
    headline: "Your Brand. Our Technology.",
    cards: [
      {
        icon: Globe2,
        title: "Travx Branded Websites",
        benefit: "A professional booking website with your name on it",
        description: "Launch a fully branded travel website powered by Intraverse. Your domain, your logo, your colours — our search, booking, and payment engine.",
        bullets: ["Custom domain support", "Brand colours and logo", "Full booking engine", "Mobile responsive", "SEO optimised"],
      },
      {
        icon: Code2,
        title: "API Access",
        benefit: "Build your own tools on top of Intraverse",
        description: "Access Intraverse search, booking, and pricing APIs to build custom integrations, internal tools, or third-party applications.",
        bullets: ["RESTful API endpoints", "Search and booking APIs", "Pricing and availability feeds", "Developer documentation"],
      },
      {
        icon: ShoppingCart,
        title: "Guest Checkout",
        benefit: "Let customers book without creating an account",
        description: "Enable guest checkout on your Travx website so customers can search, select, and pay without friction. Capture their data post-booking.",
        bullets: ["No-registration booking flow", "Frictionless checkout", "Post-booking data capture", "Conversion optimised"],
      },
    ],
  },
  {
    id: "security",
    label: "Security",
    headline: "Enterprise-Grade Security. No Compromises.",
    cards: [
      {
        icon: ShieldCheck,
        title: "IATA & BSP Compliance",
        benefit: "Book and settle with confidence",
        description: "Intraverse is an IATA-accredited platform with full BSP settlement integration. Every transaction meets international aviation industry standards.",
        bullets: ["IATA-accredited", "BSP settlement integration", "Airline compliance standards", "Regular audits"],
      },
      {
        icon: FileCheck,
        title: "NDPR Compliance",
        benefit: "Your data handled responsibly",
        description: "Full compliance with the Nigeria Data Protection Regulation. Customer data is collected, stored, and processed according to NDPR requirements.",
        bullets: ["NDPR-compliant data handling", "Data processing agreements", "Customer consent management", "Data retention policies"],
      },
      {
        icon: Lock,
        title: "PCI-DSS",
        benefit: "Payment security you can trust",
        description: "All payment processing meets PCI-DSS standards. Card data is tokenised and encrypted end-to-end — never stored in plain text.",
        bullets: ["PCI-DSS Level 1 compliant", "End-to-end encryption", "Tokenised card storage", "Regular penetration testing"],
      },
      {
        icon: Server,
        title: "99.9% Uptime",
        benefit: "Always on when you need it",
        description: "Enterprise-grade infrastructure with redundancy, automated failover, and 24/7 monitoring ensures the platform is available when you need it.",
        bullets: ["99.9% uptime SLA", "Automated failover", "24/7 infrastructure monitoring", "Disaster recovery"],
      },
    ],
  },
  {
    id: "support",
    label: "Support",
    headline: "Real People. Real Help. Real Fast.",
    cards: [
      {
        icon: Headphones,
        title: "WhatsApp Support",
        benefit: "Chat with a human in under 2 minutes",
        description: "Our primary support channel is WhatsApp — because that's where agents already are. Fast, personal, and no ticket numbers.",
        bullets: ["Under 2-minute response time", "Human agents, not bots", "Available during business hours", "Escalation to specialists"],
      },
      {
        icon: Phone,
        title: "Phone & Email",
        benefit: "Multiple ways to reach us",
        description: "For complex issues, urgent matters, or detailed requests — phone and email support are always available.",
        bullets: ["Dedicated support phone line", "Email with 4-hour SLA", "Priority support for enterprise", "Ticket tracking"],
      },
      {
        icon: GraduationCap,
        title: "Onboarding & Training",
        benefit: "Get productive in 48 hours or less",
        description: "Every new agent gets personalised onboarding — platform walkthrough, configuration, and training. Most agents are fully operational within 48 hours.",
        bullets: ["Personalised onboarding calls", "Platform configuration assistance", "Team training sessions", "48-hour setup guarantee"],
      },
      {
        icon: BookOpen,
        title: "Help Centre & Documentation",
        benefit: "Answers on demand, 24/7",
        description: "Comprehensive help centre with step-by-step guides, video tutorials, and FAQs. Find answers instantly without waiting for support.",
        bullets: ["Step-by-step guides", "Video tutorials", "Searchable knowledge base", "Regular content updates"],
      },
    ],
  },
];

/* ───── animated card ───── */
function FadeInCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} ${className}`}
    >
      {children}
    </div>
  );
}

/* ───── page ───── */
export default function Features() {
  const [activeTab, setActiveTab] = useState(sections[0].id);

  /* update active tab on scroll */
  useEffect(() => {
    const handler = () => {
      const offset = 160;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.getBoundingClientRect().top <= offset) {
          setActiveTab(sections[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 140;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* HERO */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-accent">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <h1 className="text-foreground mb-6">Every Feature Built to Help You Sell More Travel</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Intraverse is built for one thing: helping travel professionals sell more flights, hotels, tours, and packages while spending less time on admin.
          </p>
          <Button variant="hero" size="xl" asChild><a href={DEMO_URL} target="_blank" rel="noopener noreferrer">Book a Demo to See It Live</a></Button>
        </div>
      </section>

      {/* ANCHOR NAV */}
      <div className="sticky top-16 z-40 bg-background border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <nav className="flex overflow-x-auto scrollbar-hide gap-1 py-2" aria-label="Feature sections">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`whitespace-nowrap px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === s.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
              >
                {s.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* SECTIONS */}
      {sections.map((section, sIdx) => (
        <div key={section.id}>
          <section
            id={section.id}
            className={`py-16 md:py-24 ${sIdx % 2 === 0 ? "bg-background" : "bg-accent"}`}
          >
            <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
              <FadeInCard>
                <h2 className="text-foreground text-center mb-12 md:mb-16">{section.headline}</h2>
              </FadeInCard>

              <div className={`grid gap-8 ${section.cards.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
                {section.cards.map((card) => (
                  <FadeInCard key={card.title}>
                    <div className="brand-card h-full flex flex-col">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <card.icon className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="text-lg font-bold text-foreground">{card.title}</h3>
                      </div>
                      <p className="text-sm italic text-primary font-medium mb-3">{card.benefit}</p>
                      <p className="text-muted-foreground text-sm mb-4">{card.description}</p>
                      <ul className="space-y-1.5 mt-auto">
                        {card.bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-primary mt-1 flex-shrink-0">✓</span>
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </FadeInCard>
                ))}
              </div>
            </div>
          </section>

          {/* MID-PAGE CTA after Payments (index 2) */}
          {sIdx === 2 && (
            <section className="py-12 md:py-16 bg-primary">
              <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
                <h2 className="text-primary-foreground mb-4" style={{ fontSize: undefined }}>
                  <span className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ lineHeight: 1.2 }}>
                    Want to See These Features in Action?
                  </span>
                </h2>
                <p className="text-primary-foreground/80 mb-8 text-lg">
                  Book a 20-minute demo and we'll walk you through the entire platform — live.
                </p>
                <Button
                  variant="outline"
                  size="xl"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-0 rounded-none font-semibold" asChild
                >
                  <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">Book a Demo</a>
                </Button>
              </div>
            </section>
          )}
        </div>
      ))}

      {/* FINAL CTA */}
      <section className="py-20 md:py-28 bg-foreground">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
          <h2 className="text-background mb-4">
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold" style={{ lineHeight: 1.2 }}>
              Reading About Features Is Good. Seeing Them Is Better.
            </span>
          </h2>
          <p className="text-background/70 mb-8 text-lg">
            Book a live demo and let us show you exactly how Intraverse works for your agency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none" asChild>
              <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">Book a Demo</a>
            </Button>
            <Button variant="whatsapp" size="xl" className="border-whatsapp text-whatsapp hover:bg-whatsapp hover:text-primary-foreground rounded-none">
              <MessageCircle className="h-5 w-5" />
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFab />
    </div>
  );
}
