import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  Link2,
  Smartphone,
  CreditCard,
  DollarSign,
  Rocket,
  Zap,
  Plane,
  Users,
  Check,
  ArrowRight,
  MessageCircle,
  Share2,
  ShoppingCart,
  Gift,
} from "lucide-react";

function RevealBlock({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, revealClass } = useScrollReveal();
  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${revealClass} ${className}`}>
      {children}
    </div>
  );
}

const steps = [
  {
    number: 1,
    title: "Search & Select",
    description: "Find any flight, hotel, or tour on the Intraverse platform. Add your markup or use the default commission structure.",
  },
  {
    number: 2,
    title: "Generate Your Link",
    description: "Click 'Create Travel Link' and get a unique, branded URL for that specific trip, deal, or package.",
  },
  {
    number: 3,
    title: "Share It Anywhere",
    description: "Send your link via WhatsApp, post it on Instagram, drop it in your bio, email it to your client list, or share it in a group chat.",
  },
  {
    number: 4,
    title: "Get Paid",
    description: "Your customer clicks the link, sees the full itinerary, books, and pays directly. You earn commission or markup on every completed booking.",
  },
];

const benefits = [
  {
    icon: Rocket,
    title: "No Tech Required",
    description: "You don't need a website, an app, a developer, or any coding knowledge. If you can copy and paste a link, you can sell travel.",
  },
  {
    icon: Zap,
    title: "Instant Selling",
    description: "Find a deal, generate a link, share it. The entire process takes less than 2 minutes. Start selling the moment you see an opportunity.",
  },
  {
    icon: Smartphone,
    title: "Built for Social Selling",
    description: "Designed for WhatsApp, Instagram, Twitter, Facebook, TikTok, and email. Travel Links work wherever your customers already spend their time.",
  },
];

const audiences = [
  {
    icon: Rocket,
    title: "Travel Independents",
    description: "You don't have a website or an agency. Travel Links let you sell real travel inventory to your network - friends, family, colleagues, social media followers - with zero setup.",
  },
  {
    icon: Plane,
    title: "Travel Agents",
    description: "You already have an agency but want a faster way to share deals and quotes. Travel Links let you send a bookable quote in seconds instead of back-and-forth PDFs.",
  },
  {
    icon: Smartphone,
    title: "Social Media Sellers",
    description: "You have an audience on Instagram, TikTok, or Twitter that loves travel content. Travel Links turn your audience into paying customers - one click at a time.",
  },
  {
    icon: Users,
    title: "Community Leaders",
    description: "You run a church group, alumni network, sports club, or community association. Travel Links let you share group travel deals with your members and earn on every booking.",
  },
];

const features = [
  "Full flight, hotel, or tour itinerary with pricing",
  "Your branding and agency name",
  "Secure online payment (card or bank transfer)",
  "Real-time availability - no stale pricing",
  "Mobile-optimised booking experience",
  "Automatic booking confirmation and receipt",
];

const scenarios = [
  {
    icon: Share2,
    title: "The WhatsApp Deal Drop",
    description: "You spot a Lagos-to-London fare at a great price. You generate a Travel Link, post it in your WhatsApp status with a caption: 'London return from $850 - book now before it's gone.' Three people book by evening. You earned commission on all three.",
  },
  {
    icon: ShoppingCart,
    title: "The Instagram Package Post",
    description: "You create a 'Dubai Shopping Trip' package - flights + hotel + desert safari. You generate a Travel Link and post it on your Instagram with a clean graphic. Your followers click, book, and pay. No DMs. No back-and-forth. Just sales.",
  },
  {
    icon: Gift,
    title: "The Group Pilgrimage Organiser",
    description: "You're organising Hajj or Umrah for 40 members of your mosque. You generate a Travel Link for the group package and share it in the group chat. Each member clicks, fills in their details, and pays individually. You track every booking from your dashboard.",
  },
];

const TravelLinks = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="h-16" />

      {/* HERO */}
      <section className="relative overflow-hidden section-gradient-blue">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent blur-3xl translate-y-1/2 -translate-x-1/4" />
        </div>

        <div className="container relative mx-auto px-4 py-20 lg:py-32 text-center" style={{ maxWidth: "1200px" }}>
          <RevealBlock>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase text-white mb-6" style={{ backgroundColor: "#16A34A" }}>
              🆕 New Product
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-[64px] md:leading-[72px] font-[660] tracking-[-2px] max-w-5xl mx-auto" style={{ color: "rgb(23, 19, 33)" }}>
              Sell Travel With a Link. Get Paid With a Click.
            </h1>
            <p className="mt-8 text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground leading-relaxed">
              Travel Links turn any flight, hotel, or package into a shareable booking link. Send it on WhatsApp. Drop it on Instagram. Email it to your customers. They click, book, and pay directly. You earn markup or commission on every sale. No website needed. No technical skills required.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/contact">
                <Button variant="hero" size="xl" className="cta-responsive min-h-[48px]">
                  Try Travel Links Free
                </Button>
              </a>
              <a href="#how-it-works">
                <Button variant="outline" size="xl" className="cta-responsive min-h-[48px]">
                  See How It Works
                </Button>
              </a>
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* SECTION 1 - WHAT ARE TRAVEL LINKS */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4" style={{ maxWidth: "1200px" }}>
          <RevealBlock>
            <h2 className="text-3xl sm:text-4xl md:text-[48px] md:leading-[56px] font-[660] tracking-[-2px] text-center mb-8" style={{ color: "rgb(13, 27, 42)" }}>
              The Simplest Way to Sell Travel Online
            </h2>
            <p className="text-center text-muted-foreground text-base md:text-lg max-w-3xl mx-auto mb-16 leading-relaxed">
              A Travel Link is a unique, shareable URL that lets anyone book and pay for a specific flight, hotel, or travel package - directly from their phone or computer. You generate the link. You share it. Your customer clicks, books, and pays. You earn. That's it.
            </p>
          </RevealBlock>

          {/* Flow diagram */}
          <RevealBlock>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
              {[
                { icon: Link2, label: "Generate Link", color: "bg-primary" },
                { icon: Smartphone, label: "Share It", color: "bg-primary" },
                { icon: CreditCard, label: "Customer Books", color: "bg-primary" },
                { icon: DollarSign, label: "You Earn", color: "bg-primary" },
              ].map((step, i) => (
                <div key={step.label} className="flex items-center">
                  <div className="flex flex-col items-center gap-3">
                    <div className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl ${step.color} flex items-center justify-center shadow-lg`}>
                      <step.icon className="w-10 h-10 md:w-12 md:h-12 text-primary-foreground" />
                    </div>
                    <span className="text-sm font-semibold text-foreground">{step.label}</span>
                  </div>
                  {i < 3 && (
                    <ArrowRight className="hidden md:block w-8 h-8 text-muted-foreground/40 mx-6" />
                  )}
                </div>
              ))}
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* SECTION 2 - HOW IT WORKS */}
      <section id="how-it-works" className="py-16 md:py-24 bg-[hsl(216,60%,97%)]">
        <div className="container mx-auto px-4" style={{ maxWidth: "1200px" }}>
          <RevealBlock>
            <h2 className="text-3xl sm:text-4xl md:text-[48px] md:leading-[56px] font-[660] tracking-[-2px] text-center mb-16" style={{ color: "rgb(13, 27, 42)" }}>
              From Search to Sale in 4 Steps
            </h2>
          </RevealBlock>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step) => (
              <RevealBlock key={step.number}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-5">
                    <span className="text-2xl font-bold text-primary-foreground">{step.number}</span>
                  </div>
                  <h3 className="h3-global text-foreground mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </RevealBlock>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 - WHY TRAVEL LINKS WORK */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#F0F5FC" }}>
        <div className="container mx-auto px-4" style={{ maxWidth: "1200px" }}>
          <RevealBlock>
            <h2 className="text-3xl sm:text-4xl md:text-[48px] md:leading-[56px] font-[660] tracking-[-2px] text-center mb-16" style={{ color: "rgb(13, 27, 42)" }}>
              Why Travel Links Beat Building a Website
            </h2>
          </RevealBlock>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <RevealBlock key={benefit.title}>
                  <div className="bg-card rounded-2xl border border-border p-8 text-center shadow-sm">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="h3-global text-foreground mb-3">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </RevealBlock>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4 - WHO TRAVEL LINKS ARE FOR */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4" style={{ maxWidth: "1200px" }}>
          <RevealBlock>
            <h2 className="text-3xl sm:text-4xl md:text-[48px] md:leading-[56px] font-[660] tracking-[-2px] text-center mb-16" style={{ color: "rgb(13, 27, 42)" }}>
              If You Sell Travel Through Conversations, Travel Links Are for You
            </h2>
          </RevealBlock>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {audiences.map((audience) => {
              const Icon = audience.icon;
              return (
                <RevealBlock key={audience.title}>
                  <div className="bg-card rounded-2xl border border-border p-8 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="h3-global text-foreground mb-3">{audience.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{audience.description}</p>
                  </div>
                </RevealBlock>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5 - WHAT'S INSIDE A TRAVEL LINK */}
      <section className="py-16 md:py-24 bg-[hsl(216,60%,97%)]">
        <div className="container mx-auto px-4" style={{ maxWidth: "1200px" }}>
          <RevealBlock>
            <h2 className="text-3xl sm:text-4xl md:text-[48px] md:leading-[56px] font-[660] tracking-[-2px] text-center mb-16" style={{ color: "rgb(13, 27, 42)" }}>
              Every Link Is a Mini Booking Site
            </h2>
          </RevealBlock>

          <div className="flex flex-col-reverse md:flex-row gap-12 items-center">
            <div className="flex-1">
              <RevealBlock>
                <p className="text-muted-foreground text-base leading-relaxed mb-8">
                  When your customer clicks a Travel Link, they don't see a basic form or a generic page. They see a fully branded, mobile-optimised booking page with everything they need to make a decision and pay - instantly.
                </p>
                <div className="space-y-4">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                        <Check className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <p className="text-sm text-foreground">{feature}</p>
                    </div>
                  ))}
                </div>
              </RevealBlock>
            </div>

            <div className="flex-1">
              <RevealBlock>
                <div className="bg-card rounded-2xl border border-border p-8 shadow-lg">
                  <div className="bg-muted/30 rounded-xl p-6 flex items-center justify-center min-h-[300px]">
                    <div className="text-center text-muted-foreground">
                      <Link2 className="w-16 h-16 mx-auto mb-4 opacity-20" />
                      <p className="text-sm">Travel Link booking page preview</p>
                    </div>
                  </div>
                </div>
              </RevealBlock>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 - USE CASES */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4" style={{ maxWidth: "1200px" }}>
          <RevealBlock>
            <h2 className="text-3xl sm:text-4xl md:text-[48px] md:leading-[56px] font-[660] tracking-[-2px] text-center mb-16" style={{ color: "rgb(13, 27, 42)" }}>
              Real Ways People Use Travel Links
            </h2>
          </RevealBlock>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {scenarios.map((scenario) => {
              const Icon = scenario.icon;
              return (
                <RevealBlock key={scenario.title}>
                  <div className="bg-card rounded-2xl border border-border p-8 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="h3-global text-foreground mb-3">{scenario.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{scenario.description}</p>
                  </div>
                </RevealBlock>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 7 - PRICING */}
      <section className="py-16 md:py-24 bg-[hsl(216,60%,97%)]">
        <div className="container mx-auto px-4 text-center" style={{ maxWidth: "800px" }}>
          <RevealBlock>
            <h2 className="text-3xl sm:text-4xl md:text-[48px] md:leading-[56px] font-[660] tracking-[-2px] mb-6" style={{ color: "rgb(13, 27, 42)" }}>
              Included in Every Intraverse Plan
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
              Travel Links are included in every Intraverse plan - from Starter to Agency. There are no per-link fees, no hidden charges, and no limits on how many links you can generate. If you have an Intraverse account, you can create and share Travel Links today.
            </p>
            <a href="/pricing">
              <Button variant="hero" size="xl" className="cta-responsive min-h-[48px]">
                See Pricing Plans →
              </Button>
            </a>
          </RevealBlock>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#0D1B2A" }}>
        <div className="container mx-auto px-4 text-center" style={{ maxWidth: "900px" }}>
          <RevealBlock>
            <h2 className="text-3xl sm:text-4xl md:text-[48px] md:leading-[56px] font-[660] tracking-[-2px] text-white mb-6">
              Stop Losing Sales to Friction. Start Selling With Links.
            </h2>
            <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-10">
              Every Travel Link is a sale that doesn't need a website, an app, or a sales call. Just a link, a customer, and a click. Try Travel Links free with your Starter account, or upgrade to unlock unlimited links and full commission earnings.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/contact">
                <Button size="xl" className="cta-responsive min-h-[48px] bg-white text-foreground hover:bg-white/90 font-semibold">
                  Start Free
                </Button>
              </a>
              <a href="/contact">
                <Button variant="outline" size="xl" className="cta-responsive min-h-[48px] bg-white border-white text-foreground hover:bg-foreground hover:text-white hover:border-foreground">
                  Talk to Sales
                </Button>
              </a>
            </div>
          </RevealBlock>
        </div>
      </section>

      <Footer />
      <WhatsAppFab />
    </div>
  );
};

export default TravelLinks;
