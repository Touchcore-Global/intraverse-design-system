import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  MessageCircle,
  Check,
  CheckCircle2,
  ClipboardList,
  Coins,
  Users,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { WHATSAPP_URL, DEMO_URL } from "@/lib/constants";

const bulletPoints = [
  "A growing SME with 10–100 employees who travel regularly?",
  "Tired of employees booking through random agents and submitting receipts later?",
  "Spending more on travel than you can clearly account for?",
  "Looking for a way to enforce travel policy without micromanaging?",
  "Frustrated by reimbursement requests and expense reports?",
];

const features = [
  { icon: CheckCircle2, title: "Approval Workflows", body: "Configurable approval chains for every booking. Manager approves, finance reviews. No surprises." },
  { icon: ClipboardList, title: "Policy Enforcement", body: "Set rules for cabin class, hotel rating, and maximum spend. CoopX enforces them automatically." },
  { icon: Coins, title: "Consolidated Billing", body: "One invoice covering all company travel. Full breakdown by employee, department, or destination." },
  { icon: Users, title: "Self-Service Booking", body: "Employees book within policy from a self-service portal. No more emailing admin." },
  { icon: BarChart3, title: "Real-Time Visibility", body: "See exactly what your company is spending on travel — today, this week, this month.", fullWidth: true },
];

const stats = [
  { value: "30%", label: "Average Cost Reduction" },
  { value: "12hrs", label: "Admin Saved Monthly" },
  { value: "100%", label: "Policy Compliance" },
];

function RevealBlock({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, revealClass } = useScrollReveal();
  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${revealClass} ${className}`}>
      {children}
    </div>
  );
}

const Businesses = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="h-16" />

      {/* Hero */}
      <section className="relative overflow-hidden section-gradient-blue">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent blur-3xl translate-y-1/2 -translate-x-1/4" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="biz-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#biz-grid)" />
          </svg>
        </div>

        <div className="container relative mx-auto px-4 py-20 lg:py-32 text-center" style={{ maxWidth: "1200px" }}>
          <RevealBlock>
            <h1 className="text-3xl sm:text-4xl md:text-[64px] font-[660] leading-[1.1] md:leading-[76px] tracking-[-2px] max-w-5xl mx-auto" style={{ color: "rgb(23, 19, 33)" }}>
              Stop Managing Business Travel on WhatsApp and Spreadsheets
            </h1>
            <p className="mt-8 text-base sm:text-lg md:text-xl font-normal max-w-3xl mx-auto leading-relaxed" style={{ color: "rgb(116, 113, 122)" }}>
              If your team books travel for work, you're a business that needs structure. Intraverse helps growing companies replace ad-hoc booking with a proper travel management process — saving money, saving time, and giving your finance team the visibility it needs.
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
          </RevealBlock>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4" style={{ maxWidth: "1200px" }}>
          <RevealBlock>
            <h2 className="text-3xl sm:text-4xl md:text-[48px] md:leading-[56px] font-[660] tracking-[-2px] text-center mb-12" style={{ color: "rgb(13, 27, 42)" }}>
              Is Your Business...
            </h2>
            <div className="max-w-3xl mx-auto space-y-5">
              {bulletPoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground">{point}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-foreground font-semibold mt-10 text-base md:text-lg">
              If yes, Intraverse is built for you.
            </p>
          </RevealBlock>
        </div>
      </section>

      {/* Problem */}
      <section className="py-16 md:py-24 bg-[hsl(216,60%,97%)]">
        <div className="container mx-auto px-4" style={{ maxWidth: "1200px" }}>
          <RevealBlock>
            <h2 className="text-3xl sm:text-4xl md:text-[48px] md:leading-[56px] font-[660] tracking-[-2px] text-center mb-8" style={{ color: "rgb(13, 27, 42)" }}>
              The Hidden Cost of Unmanaged Business Travel
            </h2>
            <div className="max-w-3xl mx-auto space-y-5 text-muted-foreground text-sm md:text-base leading-relaxed">
              <p>
                Employees are booking through personal contacts, random travel agents, and WhatsApp groups. Receipts arrive in Slack messages, email forwards, or not at all. Nobody knows what the company is actually spending on travel until the quarterly review — and by then, the budget is already blown.
              </p>
              <p>
                There's no travel policy, or if there is, no way to enforce it. First-class flights get booked when economy was approved. Hotel budgets vary wildly by who's booking. Reimbursement requests pile up and finance spends hours reconciling expenses that should have been managed from the start.
              </p>
              <p className="font-semibold text-foreground text-base md:text-lg">
                Your business deserves better than this.
              </p>
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4" style={{ maxWidth: "1200px" }}>
          <RevealBlock>
            <h2 className="text-3xl sm:text-4xl md:text-[48px] md:leading-[56px] font-[660] tracking-[-2px] text-center mb-12" style={{ color: "rgb(13, 27, 42)" }}>
              Everything You Need to Take Control
            </h2>
          </RevealBlock>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feat) => {
              const Icon = feat.icon;
              return (
                <RevealBlock key={feat.title} className={(feat as any).fullWidth ? "md:col-span-2" : ""}>
                  <div className={`bg-card rounded-xl border border-border p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full ${(feat as any).fullWidth ? "md:max-w-2xl md:mx-auto" : ""}`}>
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-2">{feat.title}</h3>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{feat.body}</p>
                      </div>
                    </div>
                  </div>
                </RevealBlock>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-24 bg-[hsl(216,60%,97%)]">
        <div className="container mx-auto px-4" style={{ maxWidth: "1200px" }}>
          <RevealBlock>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-4xl md:text-6xl font-[660] text-primary mb-2">{stat.value}</p>
                  <p className="text-sm md:text-base text-muted-foreground font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4" style={{ maxWidth: "1200px" }}>
          <RevealBlock>
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-16 rounded-full bg-muted mx-auto mb-6" />
              <blockquote className="text-lg md:text-xl italic text-foreground leading-relaxed mb-6">
                "Before Intraverse, our travel spend was a black hole. Employees booked however they wanted, receipts came in weeks later, and I had no idea what we were actually spending. Now every booking goes through an approval flow, everything is on one invoice, and I can see our travel spend in real time. It's saved us at least 12 hours a month in admin alone."
              </blockquote>
              <p className="text-sm text-muted-foreground font-medium">
                — Funke A., Head of Operations, Lagos
              </p>
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* Product Reference */}
      <section className="py-12 md:py-16 bg-[hsl(216,60%,97%)]">
        <div className="container mx-auto px-4 text-center" style={{ maxWidth: "1200px" }}>
          <RevealBlock>
            <p className="text-muted-foreground text-sm md:text-base mb-3">
              Powered by <span className="font-semibold text-foreground">CoopX</span> — corporate travel management built for SMEs
            </p>
            <Link to="/coopx" className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:underline">
              Learn more about CoopX
              <ArrowRight className="w-4 h-4" />
            </Link>
          </RevealBlock>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 text-center" style={{ maxWidth: "1200px" }}>
          <RevealBlock>
            <h2 className="text-3xl sm:text-4xl md:text-[48px] md:leading-[56px] font-[660] tracking-[-2px] text-primary-foreground mb-4">
              Take Control of Your Business Travel
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-10 text-sm md:text-base">
              Join growing African businesses already saving time and money with Intraverse.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="xl" className="bg-white text-primary hover:bg-white/90 cta-responsive min-h-[48px]" asChild>
                <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">Book a Demo for Your Business</a>
              </Button>
              <Button size="xl" variant="outline" className="border-white text-white hover:bg-white/10 cta-responsive min-h-[48px]" asChild>
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

export default Businesses;
