import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  Plane,
  Hotel,
  Globe,
  Wallet,
  ShieldCheck,
  Smartphone,
  Quote,
  AlertTriangle,
  GraduationCap,
  Briefcase,
  Users,
  Megaphone,
  Rocket,
  Check,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { WHATSAPP_URL } from "@/lib/constants";
import { SEO } from "@/components/SEO";
import { useLocation } from "react-router-dom";

const features = [
  {
    icon: Plane,
    title: "Sell Flights From Every Source",
    description:
      "Access the same flight inventory that professional agencies use - GDS systems (Amadeus, Sabre, Galileo by Travelport), NDC direct connections, and consolidator fares. You're not reselling someone else's markup. You're selling real inventory at real prices.",
    bullets: [
      "GDS, NDC, and consolidator inventory",
      "Domestic and international flights",
      "Real-time availability and pricing",
      "Competitive fares your customers won't find elsewhere",
    ],
  },
  {
    icon: Hotel,
    title: "Sell Hotels",
    description:
      "Access hotel inventory from leading global suppliers. Search, compare, and book accommodation for your customers - from budget stays to premium properties.",
    bullets: [
      "Global hotel supplier connections",
      "Rate comparison across providers",
      "Instant booking confirmation",
      "Earn commission on every room night",
    ],
  },
  {
    icon: Globe,
    title: "Sell Tours & Packages",
    description:
      "Bundle flights, hotels, and experiences into packages - the products with the highest margins. Tour packages let you earn more per booking and give your customers more value.",
    bullets: [
      "Pre-built tour packages available",
      "Create custom bundles for clients",
      "Higher commission on package bookings",
      "Access to global tour operators",
    ],
  },
  {
    icon: Wallet,
    title: "Earn on Every Booking",
    description:
      "You earn a commission on every booking you make. No monthly fees eating into your income. Your earnings scale with your effort and volume - the more you sell, the more you keep.",
    bullets: [
      "Commission on flights, hotels, and tours",
      "Transparent commission structure",
      "Earnings scale with booking volume",
      "Regular payout schedule",
    ],
  },
  {
    icon: ShieldCheck,
    title: "IATA-Backed Infrastructure",
    description:
      "You're selling on a platform used by 200+ professional travel agencies with IATA accreditation. This is real travel infrastructure - not a WhatsApp group or a PDF course.",
    bullets: [
      "IATA-accredited platform",
      "BSP settlement for airline ticketing",
      "Same technology used by established agencies",
      "Verifiable credentials you can show customers",
    ],
  },
  {
    icon: Smartphone,
    title: "Work From Anywhere",
    description:
      "All you need is a phone and internet connection. Search inventory, create bookings, and manage customers from wherever you are. No office. No overhead. No commute.",
    bullets: [
      "Full platform access on mobile",
      "No office or physical location needed",
      "Manage your business on your schedule",
      "Built for how young Africans work",
    ],
  },
];

const trustPoints = [
  "You earn money from actual travel bookings - not from recruiting other people.",
  "The platform is IATA-accredited. You can verify this independently.",
  "There is no upline, downline, or multi-level structure. You sell travel. You earn commissions.",
  "200+ professional travel agencies use the same Intraverse technology you'll be using.",
  "You will never be asked to pay for \"levels,\" \"packages,\" or \"positions.\" You pay to access tools. You earn by selling travel.",
];

const steps = [
  {
    step: "01",
    title: "Join",
    description:
      "Sign up for the Independents Programme. Complete your profile and get verified. No IATA accreditation needed - you operate under ours.",
  },
  {
    step: "02",
    title: "Learn",
    description:
      "Access training materials on how to use the platform, search inventory, create bookings, and find customers. Learn at your own pace.",
  },
  {
    step: "03",
    title: "Start Selling",
    description:
      "Search flights, hotels, and tours. Make bookings for your customers. Earn commissions on every completed booking. Grow at your own speed.",
  },
];

const earningsStats = [
  { value: "50+", label: "Active Independents" },
];

const whoItsFor = [
  { icon: GraduationCap, text: "Recent graduates looking for income while building a career" },
  { icon: Briefcase, text: "Side hustlers who want a legitimate business they can grow" },
  { icon: Users, text: "Stay-at-home parents with a network and time to earn" },
  { icon: Megaphone, text: "Social media creators with an audience that travels" },
  { icon: Rocket, text: "Aspiring entrepreneurs who want to start a travel business without significant capital" },
];

const faqs = [
  {
    question: "Is this an MLM or network marketing scheme?",
    answer:
      "No. There is no recruitment component. You do not earn money by signing up other people. There is no upline, downline, or multi-level structure of any kind. You earn commissions by selling travel - flights, hotels, and tours - to real customers. That's it. If you don't sell, you don't earn. If you sell a lot, you earn a lot. It's straightforward.",
  },
  {
    question: "Do I need IATA accreditation or a travel agency licence?",
    answer:
      "No. As an Independent, you operate under Intraverse's IATA accreditation. This means you can sell and issue airline tickets through BSP settlement without needing your own accreditation. You get the benefit of professional travel infrastructure without the cost and complexity of setting it up yourself.",
  },
  {
    question: "How much does it cost to join?",
    answer:
      "There is a monthly subscription fee that gives you access to the platform, inventory, training materials, and support. You are never asked to buy \"packages,\" \"levels,\" or pay for recruitment positions. The fee covers your tools - the same way a barber pays for clippers or a designer pays for software.",
  },
  {
    question: "How much can I realistically earn?",
    answer:
      "Your earnings depend entirely on how many bookings you make. Commissions vary by product - flights, hotels, and tour packages each have different rates. Some Independents earn a supplementary income on the side; others build it into a full-time business. We will never promise you a specific income figure because it depends on your effort, network, and sales ability.",
  },
  {
    question: "What training and support do I get?",
    answer:
      "You get access to platform training (how to search, book, and issue), sales training (how to find and serve customers), and ongoing support from the Intraverse team. Training is self-paced and available on the platform. You also join a community of other Independents.",
  },
  {
    question: "Can I do this part-time alongside my current job?",
    answer:
      "Yes. Many Independents start part-time. The platform is available 24/7, so you can search inventory and make bookings on your own schedule - evenings, weekends, whenever works for you. There are no minimum booking requirements or mandatory hours.",
  },
];

const Independents = () => {
  const { pathname } = useLocation();
  return (
    <div className="min-h-screen">
      <SEO
        title="Start a Travel Business in Nigeria — Independents Programme | Intraverse"
        description="Become a travel agent with zero IATA accreditation. Access flights, hotels, and tours through Intraverse. Earn commissions on every booking. No experience needed."
        canonical={pathname}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
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
              <pattern id="indep-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#indep-grid)" />
          </svg>
        </div>

        <div className="container relative mx-auto px-4 py-20 lg:py-32 text-center">
          <h1 className="max-w-5xl mx-auto">
            Start Earning in Travel. No Agency. No Experience. No Gatekeepers.
          </h1>
          <p className="mt-8 text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground leading-relaxed">
            The Independents Programme gives you access to the same
            IATA-accredited travel technology used by 200+ professional
            agencies. Sell flights from GDS, NDC, and consolidator inventory,
            plus hotels and tours from leading global suppliers. Earn real
            commissions on every booking. No agency required.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" className="cta-responsive min-h-[48px]" asChild>
              <a href="/for/independents/interest">Join the Independents Programme</a>
            </Button>
            <Button variant="whatsapp" size="xl" className="cta-responsive min-h-[48px]" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Real tools • Real inventory • Real commissions
          </p>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 lg:pl-[100px]">
          <h2 className="max-w-4xl">
            <span className="block">You Want to Earn in Travel.</span>
            <span className="block">The Barriers Are Real.</span>
          </h2>
          <p className="mt-8 text-base sm:text-lg max-w-3xl text-muted-foreground leading-relaxed">
            You know there's money in travel. You see agencies posting on
            Instagram. You hear about people earning commissions. But when you
            look into it, the barriers are real: IATA accreditation costs
            millions. GDS access requires contracts and deposits. Starting an
            agency demands capital, an office, and industry connections you
            don't have.
          </p>
          <p className="mt-6 text-base sm:text-lg max-w-3xl text-muted-foreground leading-relaxed">
            And then there's the noise. "Pay $50 to unlock Diamond Level."
            "Recruit 5 people to earn." You've seen enough "travel business
            opportunities" to be skeptical - and you should be. Most of them
            are selling the dream, not the tools. The Independents Programme is
            different. We give you legitimate travel technology and real
            inventory. What you do with it is up to you.
          </p>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:pl-[100px]">
          <h2 className="max-w-4xl mb-16">What You Actually Get</h2>
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

      {/* ANTI-SCAM TRUST BLOCK */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="border-l-4 border-destructive bg-card rounded-r-xl p-8 md:p-12 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="h-7 w-7 text-destructive flex-shrink-0" />
                <h3 className="h3-global text-foreground">
                  Let's Be Direct: This Is Not a Scam
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We know you've heard promises before. Here's exactly how this works - and how it doesn't:
              </p>
              <ul className="space-y-4">
                {trustPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ShieldCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground leading-relaxed font-medium">
                      {point}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-center max-w-4xl mx-auto mb-16">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-primary">{s.step}</span>
                </div>
                <h3 className="h3-global text-foreground mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* TRAVEL LINKS CALLOUT */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "#F0F5FC" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase text-white mb-4" style={{ backgroundColor: "#16A34A" }}>
              🆕 New
            </span>
            <h3 className="h3-global text-foreground mb-4">
              Sell Travel Without a Website - Just Share a Link
            </h3>
            <p className="text-muted-foreground text-base leading-relaxed mb-6">
              With Travel Links, you can generate a shareable booking link for any flight, hotel, or package. Send it on WhatsApp, post it on Instagram, or email it to your network. Your customer clicks, books, and pays - and you earn the commission.
            </p>
            <a href="/products/travel-links">
              <Button variant="hero" size="xl" className="cta-responsive min-h-[48px]">
                Learn About Travel Links →
              </Button>
            </a>
          </div>
        </div>
      </section>


      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="border border-border rounded-xl p-8 md:p-12 bg-card">
              <Quote className="h-10 w-10 text-primary/20 mb-6" />
              <p className="text-lg md:text-xl text-foreground leading-relaxed font-medium mb-8">
                "I graduated in 2024 with no clear plan. A friend told me about
                the Independents Programme. I was skeptical - I'd seen too many
                'business opportunities' that turned out to be recruitment
                schemes. But this was different. I got real booking tools, real
                flight inventory, and I made my first commission in my second
                week. It's not easy money - you have to find customers and
                learn the platform - but it's real."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                  C
                </div>
                <div>
                  <p className="font-semibold text-foreground">Chidera N.</p>
                  <p className="text-sm text-muted-foreground">
                    Independent - Enugu
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 lg:pl-[100px]">
          <h2 className="max-w-4xl mb-12">Who This Is For</h2>
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

      {/* FAQ */}
      <section className="py-20 bg-background">
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
            Ready to Start Earning in Travel?
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Real tools. Real inventory. Real commissions. Join the Independents
            Programme and start building your travel business today.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="outline"
              size="xl"
              className="cta-responsive min-h-[48px] bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-none font-semibold"
              asChild
            >
              <a href="/for/independents/interest">Join the Independents Programme</a>
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

export default Independents;
