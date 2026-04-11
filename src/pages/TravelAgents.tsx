import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  MessageCircle,
  Check,
  Monitor,
  Globe,
  CreditCard,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const bulletPoints = [
  "Runs an agency of any size — from solo operators to multi-branch businesses",
  "Is tired of juggling multiple GDS terminals and supplier portals",
  "Wants access to fares from NDC, consolidators, and aggregators",
  "Is looking to add hotels and tours to your offering",
  "Needs a professional online presence without spending millions",
  "Wants to grow your revenue without hiring more staff",
];

const solutions = [
  {
    icon: Monitor,
    title: "Agent Selling Platform",
    body: "Aggregated flight inventory from GDS (Amadeus, Sabre, Galileo), NDC connections, consolidators, and aggregators — plus hotels and tours from leading global suppliers. All searchable from one dashboard.",
    link: "/agent-platform",
    linkText: "Learn more about Agent Selling Platform",
  },
  {
    icon: Globe,
    title: "Travx",
    body: "A fully branded, booking-enabled website for your agency at ₦120,000/month. No developer needed. Live in days.",
    link: "/travx",
    linkText: "Learn more about Travx",
  },
  {
    icon: CreditCard,
    title: "Odiopay",
    body: "Buy Now, Pay Later integration so you can close sales even when your customer can't pay the full fare upfront.",
    link: "#",
    linkText: "Learn more about Odiopay",
  },
];

const stats = [
  { value: "60%", label: "Faster Bookings" },
  { value: "35%", label: "More Revenue" },
  { value: "2+hrs", label: "Saved Per Week" },
];

const steps = [
  {
    number: "1",
    title: "Book a Demo",
    body: "Book a 15-minute demo with our team",
  },
  {
    number: "2",
    title: "Get Set Up",
    body: "We set up your GDS, NDC, supplier connections, and dashboard within 48 hours",
  },
  {
    number: "3",
    title: "Start Selling",
    body: "Start selling more flights, hotels, and tours from one platform",
  },
];

function RevealBlock({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, revealClass } = useScrollReveal();
  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${revealClass} ${className}`}>
      {children}
    </div>
  );
}

const TravelAgents = () => {
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
              <pattern id="ta-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#ta-grid)" />
          </svg>
        </div>

        <div className="container relative mx-auto px-4 py-20 lg:py-32 text-center" style={{ maxWidth: "1200px" }}>
          <RevealBlock>
            <h1
              className="text-3xl sm:text-4xl md:text-[80px] font-[660] leading-[1.1] md:leading-[96px] tracking-[-2px] max-w-5xl mx-auto"
              style={{ color: "rgb(23, 19, 33)" }}
            >
              The Operating System for Modern African Travel Agents
            </h1>
            <p
              className="mt-8 text-base sm:text-lg md:text-xl font-normal max-w-3xl mx-auto"
              style={{ color: "rgb(116, 113, 122)" }}
            >
              Whether you're a two-person agency in Lagos or a multi-branch operation across the country, Intraverse gives you the technology to compete with the biggest players in travel. Aggregated flight inventory, global hotel and tour suppliers, white-label website, and a wallet system — all in one platform.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" className="cta-responsive min-h-[48px]">
                Book a Demo
              </Button>
              <Button variant="whatsapp" size="xl" className="cta-responsive min-h-[48px]">
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </Button>
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4" style={{ maxWidth: "1200px" }}>
          <RevealBlock>
            <h2
              className="text-3xl sm:text-4xl md:text-[48px] md:leading-[56px] font-[660] tracking-[-2px] text-center mb-12"
              style={{ color: "rgb(13, 27, 42)" }}
            >
              Are You a Travel Agent Who...
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
              {bulletPoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground">{point}</p>
                </div>
              ))}
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 md:py-24 bg-[hsl(216,60%,97%)]">
        <div className="container mx-auto px-4" style={{ maxWidth: "1200px" }}>
          <RevealBlock>
            <h2
              className="text-3xl sm:text-4xl md:text-[48px] md:leading-[56px] font-[660] tracking-[-2px] text-center mb-8"
              style={{ color: "rgb(13, 27, 42)" }}
            >
              You're Doing Too Much Work for Too Little Margin
            </h2>
            <div className="max-w-3xl mx-auto space-y-5 text-muted-foreground text-sm md:text-base leading-relaxed">
              <p>
                Every day, you're juggling multiple GDS terminals, copying PNRs between systems, calling consolidators for better fares, and manually tracking payments. Your margins are getting squeezed, and you're spending more time on admin than on selling.
              </p>
              <p>
                You don't have access to negotiated fares from NDC or consolidator channels — so you're competing on the same inventory as everyone else. You have no website, no online presence, and no way to let your customers self-serve.
              </p>
              <p className="font-semibold text-foreground text-base md:text-lg">
                It doesn't have to be this way.
              </p>
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4" style={{ maxWidth: "1200px" }}>
          <RevealBlock>
            <h2
              className="text-3xl sm:text-4xl md:text-[48px] md:leading-[56px] font-[660] tracking-[-2px] text-center mb-12"
              style={{ color: "rgb(13, 27, 42)" }}
            >
              Everything You Need on One Platform
            </h2>
          </RevealBlock>
          <div className="space-y-6">
            {solutions.map((sol) => {
              const Icon = sol.icon;
              return (
                <RevealBlock key={sol.title}>
                  <div className="flex flex-col md:flex-row items-start gap-6 bg-card rounded-xl border border-border p-8 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">{sol.title}</h3>
                      <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">{sol.body}</p>
                      <Link
                        to={sol.link}
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:underline"
                      >
                        {sol.linkText}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </RevealBlock>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Row */}
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
                "Since switching to Intraverse, we've cut our booking time in half and added hotels and tours to our offering without any extra overhead. It's the single best investment we've made in our agency."
              </blockquote>
              <p className="text-sm text-muted-foreground font-medium">
                — Adebayo O., Coastline Travels, Lagos
              </p>
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* How To Get Started */}
      <section className="py-16 md:py-24 bg-[hsl(216,60%,97%)]">
        <div className="container mx-auto px-4" style={{ maxWidth: "1200px" }}>
          <RevealBlock>
            <h2
              className="text-3xl sm:text-4xl md:text-[48px] md:leading-[56px] font-[660] tracking-[-2px] text-center mb-12"
              style={{ color: "rgb(13, 27, 42)" }}
            >
              How to Get Started
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step) => (
                <div key={step.number} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.body}</p>
                </div>
              ))}
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 text-center" style={{ maxWidth: "1200px" }}>
          <RevealBlock>
            <h2 className="text-3xl sm:text-4xl md:text-[48px] md:leading-[56px] font-[660] tracking-[-2px] text-primary-foreground mb-4">
              Ready to Transform Your Agency?
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-10 text-sm md:text-base">
              Join 400+ travel agents already using Intraverse to sell more, earn more, and work smarter.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="xl" className="bg-white text-primary hover:bg-white/90 cta-responsive min-h-[48px]">
                Book Your Demo
              </Button>
              <Button
                size="xl"
                variant="outline"
                className="border-white text-white hover:bg-white/10 cta-responsive min-h-[48px]"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
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

export default TravelAgents;
