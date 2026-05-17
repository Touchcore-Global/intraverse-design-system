import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  Palette,
  Plane,
  Smartphone,
  CreditCard,
  Clock,
  TrendingUp,
  Check,
  Quote,
  X as XIcon,
  Globe,
  ShoppingCart,
  Star,
  Search,
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
import iataLogo from "@/assets/iata-logo.png";
import amadeusLogo from "@/assets/amadeus-logo.png";
import sabreLogo from "@/assets/sabre-logo.png";
import travelportLogo from "@/assets/travelport-logo.png";

const features = [
  {
    icon: Palette,
    title: "Your Brand, Your Domain",
    description:
      "Fully white-labelled with your agency's logo, colours, and custom domain. Your customers see your brand — not ours. When they visit book.youragency.com, it looks and feels like your own platform.",
    bullets: [
      "Custom domain (e.g. book.youragency.com)",
      "Your logo, brand colours, and fonts",
      "No Intraverse branding visible to customers",
      "Professional design templates to choose from",
    ],
  },
  {
    icon: Plane,
    title: "GDS + NDC Booking Engine",
    description:
      "Connected to Amadeus, Sabre, Galileo, NDC, and LCC inventory. Your customers search real-time flights across 900+ airlines, compare fares, and book instantly. No manual fare searches. No copy-pasting PNRs.",
    bullets: [
      "Amadeus, Sabre, Galileo GDS content",
      "NDC and low-cost carrier fares",
      "1M+ hotel properties via HotelBeds",
      "Instant booking confirmation and e-ticket issuance",
    ],
  },
  {
    icon: CreditCard,
    title: "Nigerian Payment Methods",
    description:
      "Accept payments directly on your website in Naira. Customers pay with cards, bank transfers, or USSD — no more chasing payments over WhatsApp or waiting for bank alerts to confirm.",
    bullets: [
      "Card payments (Visa, Mastercard, Verve)",
      "Bank transfer and USSD support",
      "Naira pricing for your customers",
      "Automatic payment reconciliation",
    ],
  },
  {
    icon: TrendingUp,
    title: "Markup and Commission Control",
    description:
      "Set your own markup on every fare. You decide how much profit you make on each booking — not us. See your earnings in real time and track which routes and products generate the most revenue.",
    bullets: [
      "Set custom markup per booking type",
      "Real-time earnings dashboard",
      "Revenue analytics by route and product",
      "Full control over your pricing to customers",
    ],
  },
  {
    icon: Smartphone,
    title: "Built for Nigerian Mobile",
    description:
      "Over 80% of your customers will visit from their phones on 3G or 4G. TravX is mobile-first — fast loading, touch-optimised, and designed for how Nigerians actually browse and book.",
    bullets: [
      "Mobile-first responsive design",
      "Fast load times on 3G/4G networks",
      "Touch-optimised booking flow",
      "Works on every device and browser",
    ],
  },
  {
    icon: Clock,
    title: "Live in Days, Not Months",
    description:
      "No developers needed. No months of back-and-forth. Choose a template, add your branding, and go live. Most agencies launch their TravX site within a week.",
    bullets: [
      "Template-based setup — no coding required",
      "Guided onboarding process",
      "Content upload assistance available",
      "Live within 5-7 business days",
    ],
  },
];

const includedItems = [
  "Fully branded, booking-enabled website",
  "Custom domain setup and hosting",
  "GDS access: Amadeus, Sabre, Galileo",
  "NDC and LCC fare content",
  "1M+ hotel properties",
  "Online payment integration (Naira)",
  "Mobile-responsive design",
  "Markup and commission control",
  "Ongoing platform updates and support",
];

const trustStats = [
  { value: "900+", label: "Airlines" },
  { value: "1M+", label: "Hotel Properties" },
  { value: "200+", label: "Active Agents" },
];

const faqs = [
  {
    question: "Do I need IATA accreditation to use TravX?",
    answer:
      "No. TravX operates under Intraverse's IATA accreditation. You get full GDS access — Amadeus, Sabre, Galileo — and the ability to issue tickets without needing your own IATA licence. This saves you the ₦30M+ share capital requirement and years of application process.",
  },
  {
    question: "What airlines and hotels can my customers access?",
    answer:
      "Over 900 airlines including major carriers (Emirates, British Airways, Ethiopian Airlines, Air Peace, etc.) and low-cost carriers through GDS, NDC, and consolidator content. For hotels, you get access to 1M+ properties worldwide through HotelBeds and other aggregators. Tours and experiences are also included.",
  },
  {
    question: "Can I add my own markup to bookings?",
    answer:
      "Yes — full markup control is built in. You set the profit margin on every fare. When a customer books on your TravX website, they see your price (base fare + your markup). You keep the markup as profit. There's no cap on how much you can add.",
  },
  {
    question: "Can my customers actually book and pay on the website?",
    answer:
      "Yes — that's the whole point. Unlike most agency websites that are just digital brochures, TravX connects to live inventory. Your customers search real flights, hotels, and tours, book instantly, and pay online in Naira using cards, bank transfer, or USSD. You get notified and the booking is processed automatically.",
  },
  {
    question: "How is TravX different from Wakanow or Travelstart?",
    answer:
      "Wakanow and Travelstart are B2C OTAs — they sell travel directly to consumers under their own brand. TravX is a B2B white-label platform — it gives YOU a branded website that sells travel under YOUR brand. Your customers see your agency name, your domain, your logo. You control the pricing, the relationship, and the customer data.",
  },
  {
    question: "How long does it take to go live?",
    answer:
      "Most agencies launch within 5-7 business days. Once you sign up, you go through a guided setup process — choose your template, upload your branding, and review your site. We handle the technical deployment and domain configuration.",
  },
  {
    question: "Do I need any technical skills?",
    answer:
      "Not at all. TravX is designed for travel agents, not developers. You choose a template, upload your logo and brand details, and we handle the rest. If you can use WhatsApp, you can manage your TravX website.",
  },
  {
    question: "Can I use my own domain name?",
    answer:
      "Absolutely. You can connect your existing domain (e.g. www.youragency.com) or set up a subdomain (e.g. book.youragency.com). We help you configure the DNS settings during onboarding.",
  },
  {
    question: "What does ₦75,000/month include?",
    answer:
      "Everything: hosting, custom domain, GDS booking engine (Amadeus, Sabre, Galileo), NDC and LCC content, hotel and tour inventory, payment integration, mobile-responsive design, markup control, analytics, platform updates, and support. No hidden fees. No setup costs.",
  },
  {
    question: "Is there a contract or can I cancel anytime?",
    answer:
      "Month-to-month billing. No long-term contracts. You can cancel anytime. We believe TravX should earn your subscription every month — if it's not generating more revenue than it costs, you shouldn't be paying for it.",
  },
];

const beforeItems = [
  { icon: MessageCircle, text: "WhatsApp-only enquiries" },
  { icon: XIcon, text: "No online booking capability" },
  { icon: XIcon, text: "Invisible on Google search" },
  { icon: XIcon, text: "Manual payment collection" },
  { icon: XIcon, text: "No 24/7 availability" },
];

const afterItems = [
  { icon: Globe, text: "Professional branded website" },
  { icon: ShoppingCart, text: "Real-time booking engine" },
  { icon: Search, text: "Found on Google search" },
  { icon: CreditCard, text: "Online payment processing" },
  { icon: Star, text: "Selling travel 24/7" },
];

const Travx = () => {
  const { pathname } = useLocation();
  return (
    <div className="min-h-screen">
      <SEO
        title="TravX — White-Label Travel Booking Platform for Agents | Intraverse"
        description="White-label travel booking platform for travel agents. Branded website with GDS access (Amadeus, Sabre, Galileo), 900+ airlines, hotels, and NGN payments. From ₦75,000/month."
        canonical={pathname}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "TravX",
          applicationCategory: "TravelApplication",
          operatingSystem: "Web",
          description: "White-label travel booking platform for travel agents",
          offers: { "@type": "Offer", price: "75000", priceCurrency: "NGN", priceValidUntil: "2026-12-31" },
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
          <svg
            className="absolute inset-0 w-full h-full opacity-[0.03]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="travx-grid"
                x="0"
                y="0"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#travx-grid)" />
          </svg>
        </div>

        <div className="container relative mx-auto px-4 py-20 lg:py-32 text-center">
          <h1 className="max-w-5xl mx-auto">
            Your Own Travel Booking Website — Live in Days, Not Months
          </h1>
          <p className="mt-8 text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground leading-relaxed">
            TravX gives your travel agency a fully branded, booking-enabled website connected to 900+ airlines via Amadeus, Sabre, Galileo, and NDC. Your customers search, book, and pay online. You control the markup and keep the customer. From ₦75,000/month.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="hero"
              size="xl"
              className="cta-responsive min-h-[48px]"
            >
              See Travx in Action
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
          <p className="mt-4 text-sm text-muted-foreground">
            IATA accredited • No setup fees • Cancel anytime • Live in 5-7 days
          </p>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="py-6 md:py-8 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8 max-w-6xl mx-auto md:max-h-[120px]">
            <div className="grid grid-cols-3 gap-4 md:gap-8">
              {trustStats.map((s) => (
                <div key={s.label} className="text-center md:text-left">
                  <p className="text-xl md:text-2xl font-bold text-foreground">{s.value}</p>
                  <p className="text-xs md:text-sm text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center md:justify-end gap-6 md:gap-10 flex-wrap">
              {[
                { name: "IATA", logo: iataLogo },
                { name: "Amadeus", logo: amadeusLogo },
                { name: "Sabre", logo: sabreLogo },
                { name: "Travelport", logo: travelportLogo },
              ].map((p) => (
                <img
                  key={p.name}
                  src={p.logo}
                  alt={`${p.name} logo`}
                  className="h-6 md:h-8 w-auto object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 lg:pl-[100px]">
          <h2 className="max-w-4xl">
            Your Agency Deserves More Than a WhatsApp Business Profile
          </h2>
          <p className="mt-8 text-base sm:text-lg max-w-3xl text-muted-foreground leading-relaxed">
            Right now, when a potential customer searches "flights to London from Lagos," they find agencies with websites — not yours. You're relying on WhatsApp forwards and word-of-mouth while competitors with an online presence capture bookings around the clock, even while they sleep.
          </p>
          <p className="mt-6 text-base sm:text-lg max-w-3xl text-muted-foreground leading-relaxed">
            Building a custom booking website costs ₦3-10 million and takes months of back-and-forth with developers. And most agency websites end up as digital brochures — they can't search live inventory, process bookings, or accept payments. You pay for a site that still requires you to do everything manually. TravX is the alternative: a fully branded, booking-enabled website connected to GDS and NDC content, live in days for ₦75,000/month.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:pl-[100px]">
          <h2 className="max-w-4xl mb-16">
            Everything Your Agency Website Needs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="brand-card border border-border flex flex-col"
              >
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
                    <li
                      key={bullet}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
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

      {/* PRICING */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              Simple Pricing
            </p>
            <div className="brand-card border-2 border-primary p-8 md:p-12">
              <p className="text-5xl sm:text-6xl md:text-7xl font-bold text-foreground tracking-tight">
                ₦75,000
                <span className="text-2xl sm:text-3xl text-muted-foreground font-normal">
                  /month
                </span>
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                Less than the cost of one round-trip Lagos-London commission. Includes everything.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-lg mx-auto">
                {includedItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <p className="mt-4 text-xs text-muted-foreground text-center">
                One-time setup fee applies
              </p>

              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  variant="hero"
                  size="xl"
                  className="cta-responsive min-h-[48px]"
                >
                  Start now
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

            <p className="mt-8 text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              <strong className="text-foreground">
                What it costs you NOT to have a website:
              </strong>{" "}
              Every day without a booking-enabled site, potential customers find your competitors instead. At just 2–3 lost bookings per month, the revenue you're missing far exceeds ₦75,000. TravX doesn't cost you money — it makes you money.
            </p>
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-center max-w-4xl mx-auto mb-16">
            The Difference Is Night and Day
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Before */}
            <div className="rounded-xl border border-border bg-muted/50 p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                Before
              </p>
              <h3 className="h3-global text-foreground mb-6">
                WhatsApp-Only Agency
              </h3>
              <ul className="space-y-4">
                {beforeItems.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-4 w-4 text-destructive" />
                    </div>
                    <span className="text-sm">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div className="rounded-xl border-2 border-primary bg-primary/5 p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
                After
              </p>
              <h3 className="h3-global text-foreground mb-6">
                Your Travx Website
              </h3>
              <ul className="space-y-4">
                {afterItems.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-foreground"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="border border-border rounded-xl p-8 md:p-12 bg-card">
              <Quote className="h-10 w-10 text-primary/20 mb-6" />
              <p className="text-lg md:text-xl text-foreground leading-relaxed font-medium mb-8">
                "We went from only getting enquiries through WhatsApp to having customers book and pay directly on our website. In the first month, we processed 15 online bookings we would have never received before. The GDS access alone — being able to offer Amadeus and Sabre fares on our own website — changed how our customers see us. TravX paid for itself in the first week."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                  T
                </div>
                <div>
                  <p className="font-semibold text-foreground">Tunde Adeyemi</p>
                  <p className="text-sm text-muted-foreground">
                    Royal Wings Travel - Ibadan
                  </p>
                </div>
              </div>
            </div>
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
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border-border"
                >
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
            Your Customers Are Searching Online. Are You There?
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Launch your branded, booking-enabled website for ₦75,000/month. GDS access included. No developers. No delays. Just revenue.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="outline"
              size="xl"
              className="cta-responsive min-h-[48px] bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-none font-semibold"
            >
              See Travx in Action
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

export default Travx;
