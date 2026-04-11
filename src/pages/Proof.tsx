import { useEffect, useRef, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  MessageCircle, Users, BookOpen, Globe, CreditCard, MapPin, Clock,
  ArrowRight, Quote, ShieldCheck, Plane, TrendingUp, AlertTriangle,
  type LucideIcon,
} from "lucide-react";

/* ───── fade-in on scroll ───── */
function FadeIn({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} ${className}`}>
      {children}
    </div>
  );
}

/* ───── types ───── */
type ProductFilter = "all" | "agent" | "travx" | "coopx" | "independents";

interface StatItem { value: string; label: string; icon: LucideIcon }
interface CaseStudy {
  id: ProductFilter;
  tag: string;
  tagColor: string;
  title: string;
  snapshot: { agency: string; size: string; products: string };
  stats: { value: string; label: string }[];
  challenge: string[];
  switchText: string[];
  results: string[];
  quote: string;
  quoteAuthor: string;
  quoteRole: string;
  extra?: React.ReactNode;
}

interface TestimonialCard {
  quote: string;
  name: string;
  role: string;
  company: string;
  city: string;
  product: ProductFilter;
}

/* ───── data ───── */
const heroStats: StatItem[] = [
  { value: "200+", label: "Active Agents", icon: Users },
  { value: "[X,000]+", label: "Bookings", icon: BookOpen },
  { value: "[X]+", label: "Global Suppliers", icon: Globe },
  { value: "$[X]M+", label: "Transaction Volume", icon: CreditCard },
  { value: "[X]+", label: "Cities", icon: MapPin },
  { value: "48hrs", label: "Setup", icon: Clock },
];

const filterTabs: { id: ProductFilter; label: string }[] = [
  { id: "all", label: "All Stories" },
  { id: "agent", label: "Agent Platform" },
  { id: "travx", label: "Travx" },
  { id: "coopx", label: "CoopX" },
  { id: "independents", label: "Independents" },
];

const caseStudies: CaseStudy[] = [
  {
    id: "agent",
    tag: "AGENT SELLING PLATFORM",
    tagColor: "bg-primary text-primary-foreground",
    title: "How [Agency] Tripled Their Monthly Bookings With Aggregated Search",
    snapshot: { agency: "[Agency Name]", size: "[X] Staff", products: "Flights, Hotels, Packages" },
    stats: [
      { value: "[X]→[Y]", label: "Monthly Bookings" },
      { value: "[X]%", label: "Revenue Increase" },
      { value: "[X]hrs", label: "Saved Per Week" },
    ],
    challenge: [
      "Searching fares across multiple platforms took hours every day",
      "Missed better fares available on systems they didn't have access to",
      "Manual ticketing led to errors and delays",
      "No centralised view of bookings, payments, or commissions",
    ],
    switchText: [
      "Migrated to Intraverse's Agent Selling Platform in under 48 hours",
      "Connected to aggregated GDS, NDC, and consolidator inventory",
      "Enabled auto-ticketing and wallet-based payments",
      "Trained entire team in a single onboarding session",
    ],
    results: [
      "Monthly booking volume tripled within 90 days",
      "Revenue increased by [X]% due to better fare access",
      "Admin time reduced by [X] hours per week",
      "Zero ticketing errors since switching to auto-issuance",
    ],
    quote: "We used to spend half our day searching fares on three different systems. Now one search gives us everything. We're booking more, earning more, and actually closing on time.",
    quoteAuthor: "[Agent Name]",
    quoteRole: "Managing Director, [Agency Name]",
  },
  {
    id: "travx",
    tag: "TRAVX",
    tagColor: "bg-primary text-primary-foreground",
    title: "How [Agency] Went From WhatsApp-Only to Online Bookings in [X] Days",
    snapshot: { agency: "[Agency Name]", size: "[X] Staff", products: "Travx Website, Flights, Hotels" },
    stats: [
      { value: "[X] Days", label: "To Go Live" },
      { value: "[X]%", label: "Bookings From Website" },
      { value: "$[X]K", label: "Monthly Website Revenue" },
    ],
    challenge: [
      "Entire business ran through WhatsApp — no website, no online presence",
      "Customers couldn't search or book independently",
      "Looked unprofessional compared to larger competitors",
      "Spent hours responding to price enquiries manually",
    ],
    switchText: [
      "Launched a Travx-branded website with custom domain in [X] days",
      "Full search and booking engine embedded on the site",
      "Customers could now search, compare, and pay online",
      "WhatsApp remained a channel — but no longer the only one",
    ],
    results: [
      "[X]% of bookings now come through the website",
      "Customer enquiry volume dropped — they self-serve online",
      ""Monthly revenue from web channel: $[X]K",",
      "Agency now appears on Google search results for local travel queries",
    ],
    quote: "I used to send fare screenshots on WhatsApp all day. Now my website does it for me. Customers search, compare, and book — I just see the confirmation. It changed everything.",
    quoteAuthor: "[Agent Name]",
    quoteRole: "Founder, [Agency Name]",
    extra: (
      <FadeIn>
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="brand-card text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Before</p>
            <div className="bg-muted rounded-lg p-8 flex flex-col items-center gap-3">
              <MessageCircle className="h-12 w-12 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">WhatsApp profile photo &amp; status updates</p>
              <p className="text-xs text-muted-foreground/70">Manual fare replies · No online booking · No brand presence</p>
            </div>
          </div>
          <div className="brand-card text-center border-2 border-primary/20">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">After — Travx</p>
            <div className="bg-accent rounded-lg p-8 flex flex-col items-center gap-3">
              <Globe className="h-12 w-12 text-primary" />
              <p className="text-sm text-foreground font-medium">Professional branded travel website</p>
              <p className="text-xs text-muted-foreground">Live search · Online booking · Payment processing · SEO</p>
            </div>
          </div>
        </div>
      </FadeIn>
    ),
  },
  {
    id: "coopx",
    tag: "COOPX",
    tagColor: "bg-primary text-primary-foreground",
    title: "How [Company] Cut Travel Spend by [X]% and Eliminated Receipt-Chasing",
    snapshot: { agency: "[Company Name]", size: "[X] Employees", products: "CoopX, Reporting, Policy Engine" },
    stats: [
      { value: "[X]%", label: "Cost Reduction" },
      { value: "[X]hrs", label: "Admin Saved Monthly" },
      { value: "100%", label: "Policy Compliance" },
    ],
    challenge: [
      "Travel bookings scattered across multiple agencies and personal cards",
      "Finance team spent days each month chasing receipts and reconciling expenses",
      "No visibility into who was booking what, at what price, or with which supplier",
      "Travel policy existed on paper but was impossible to enforce",
    ],
    switchText: [
      "Deployed CoopX across all departments with role-based access",
      "Configured travel policy rules — class, budget limits, advance booking requirements",
      "Centralised all bookings through a single managed platform",
      "Finance team got real-time dashboards and automated reports",
    ],
    results: [
      "Travel spend reduced by [X]% in the first quarter",
      "Receipt collection automated — zero manual chasing",
      "100% policy compliance across all departments",
      "Finance team reclaimed [X] hours per month in admin time",
    ],
    quote: "Before CoopX, our travel spend was a black box. Now I can see every booking, every cost, and every policy exception in real time. We've cut waste and regained control.",
    quoteAuthor: "[Name]",
    quoteRole: "CFO, [Company Name]",
  },
  {
    id: "independents",
    tag: "INDEPENDENTS PROGRAMME",
    tagColor: "bg-primary text-primary-foreground",
    title: "title: "How [Name] Went From Zero Experience to $[X]K/Month",",
    snapshot: { agency: "Independent Agent", size: "Solo", products: "Agent Platform, Independents Programme" },
    stats: [
      { value: "$[X]K", label: "Monthly Commissions" },
      { value: "[X]", label: "Bookings in First 3 Months" },
      { value: "[X]+", label: "Repeat Customers" },
    ],
    challenge: [
      "No travel industry experience or connections",
      "Wanted to build a side business but didn't know where to start",
      "Suspicious of 'travel business' offers — too many looked like scams",
      "Needed a real product to sell, not a recruitment pitch",
    ],
    switchText: [
      "Joined the Intraverse Independents Programme with full onboarding",
      "Received training on booking flights, hotels, and packages",
      "Got access to the same platform used by established agencies",
      "Started selling to personal network and social media contacts",
    ],
    results: [
      ""Earned $[X]K in commissions within the first 3 months",",
      "Built a repeat customer base of [X]+ travellers",
      "Grew booking volume month over month consistently",
      "Now treats it as a primary income stream, not a side project",
    ],
    quote: "I was sceptical at first — I'd seen too many 'travel business' pitches that were just pyramid schemes. But Intraverse gave me real tools, real inventory, and real commissions. I earn from actual bookings, not from recruiting people.",
    quoteAuthor: "[Name]",
    quoteRole: "Independent Travel Entrepreneur, [City]",
    extra: (
      <>
        {/* Month-by-month timeline */}
        <FadeIn>
          <div className="my-8">
            <h4 className="text-lg font-bold text-foreground mb-6 text-center">Growth Timeline</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { month: "Month 1", milestone: "Onboarding complete, first booking made", icon: "🚀" },
                { month: "Month 2", milestone: "[X] bookings, $[X]K earned", icon: "📈" },
                { month: "Month 3", milestone: "Repeat customers, $[X]K earned", icon: "🔄" },
                { month: "Month 6", milestone: "$[X]K/month, [X]+ regular clients", icon: "💰" },
              ].map((m, i) => (
                <div key={i} className="brand-card text-center">
                  <span className="text-2xl mb-2 block">{m.icon}</span>
                  <p className="text-sm font-bold text-foreground">{m.month}</p>
                  <p className="text-xs text-muted-foreground mt-1">{m.milestone}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Anti-scam block */}
        <FadeIn>
          <div className="my-8 border-l-4 border-primary bg-accent rounded-r-xl p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-foreground mb-2">This Is Not a Get-Rich-Quick Scheme</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  The Independents Programme is a real business model — you earn commissions by selling real travel products (flights, hotels, packages) to real customers. There are no sign-up fees disguised as "starter packs," no recruitment bonuses, and no multi-level commissions.
                </p>
                <p className="text-xs text-muted-foreground italic">
                  <strong>Earnings Disclaimer:</strong> Results vary based on individual effort, market conditions, and time invested. The figures shown are based on actual agent performance but are not guaranteed. Your results depend on your work.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </>
    ),
  },
];

const testimonials: TestimonialCard[] = [
  { quote: "Intraverse changed how we operate. We went from juggling three GDS terminals to one platform that does everything.", name: "[Name]", role: "CEO", company: "[Travel Agency]", city: "Lagos", product: "agent" },
  { quote: "{ quote: "Our Travx website brought in $[X]M in bookings in the first quarter alone. Customers love being able to search and book themselves.", name: "[Name]", role: "Director", company: "[Agency]", city: "Abuja", product: "travx" }, in the first quarter alone. Customers love being able to search and book themselves.", name: "[Name]", role: "Director", company: "[Agency]", city: "Abuja", product: "travx" },
  { quote: "The reporting alone saved us. We can finally see where our travel budget is going and enforce our policy.", name: "[Name]", role: "Finance Manager", company: "[Corporation]", city: "Lagos", product: "coopx" },
  { quote: "I started with zero knowledge and made my first booking within a week. The training and support are incredible.", name: "[Name]", role: "Independent Agent", company: "Self-employed", city: "Port Harcourt", product: "independents" },
  { quote: "Auto-ticketing changed my life. I used to stay up until midnight issuing tickets. Now the system handles it.", name: "[Name]", role: "Operations Manager", company: "[Agency]", city: "Kano", product: "agent" },
  { quote: "CoopX gives us complete visibility. No more surprise charges, no more chasing receipts at month end.", name: "[Name]", role: "Head of Procurement", company: "[Company]", city: "Lagos", product: "coopx" },
  { quote: "My Travx website ranks on Google now. Customers find me online instead of me chasing them on WhatsApp.", name: "[Name]", role: "Founder", company: "[Agency]", city: "Ibadan", product: "travx" },
  { quote: "I earn real commissions from real bookings. This isn't a scam — it's an actual business model that works.", name: "[Name]", role: "Independent Entrepreneur", company: "Self-employed", city: "Enugu", product: "independents" },
  { quote: "The wallet system is seamless. Fund it, book instantly, track every naira. No more bank transfer delays.", name: "[Name]", role: "Senior Agent", company: "[Agency]", city: "Benin City", product: "agent" },
];

const trustBadges = ["IATA", "Amadeus", "Sabre", "Galileo", "NDC", "NDPR", "PCI DSS"];

/* ───── page ───── */
export default function Proof() {
  const [filter, setFilter] = useState<ProductFilter>("all");

  const filteredStudies = filter === "all" ? caseStudies : caseStudies.filter((c) => c.id === filter);
  const filteredTestimonials = filter === "all" ? testimonials : testimonials.filter((t) => t.product === filter);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* HERO */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 bg-accent">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <h1 className="text-foreground mb-6">200+ Travel Businesses. Real Results. Here's the Proof.</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Travel agencies, corporate travel teams, and independent entrepreneurs across Nigeria use Intraverse to sell more, earn more, and operate more efficiently. Here are their stories.
          </p>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-foreground py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {heroStats.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-1">
                <s.icon className="h-5 w-5 text-primary mb-1" />
                <span className="text-2xl md:text-3xl font-bold text-background">{s.value}</span>
                <span className="text-xs text-background/60 uppercase tracking-wider">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FILTER TABS */}
      <section className="sticky top-16 z-40 bg-background border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <nav className="flex overflow-x-auto scrollbar-hide gap-1 py-2" aria-label="Filter stories">
            {filterTabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setFilter(t.id)}
                className={`whitespace-nowrap px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  filter === t.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
              >
                {t.label}
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* CASE STUDIES */}
      {filteredStudies.map((cs, idx) => (
        <section
          key={cs.id}
          className={`py-16 md:py-24 ${idx % 2 === 0 ? "bg-background" : "bg-accent"}`}
        >
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            {/* Tag */}
            <FadeIn>
              <Badge className={`${cs.tagColor} mb-4 text-xs font-semibold tracking-wider`}>{cs.tag}</Badge>
              <h2 className="text-foreground mb-8">{cs.title}</h2>
            </FadeIn>

            {/* Snapshot card */}
            <FadeIn>
              <div className="brand-card grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Agency / Company</p>
                  <p className="font-semibold text-foreground">{cs.snapshot.agency}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Size</p>
                  <p className="font-semibold text-foreground">{cs.snapshot.size}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Products Used</p>
                  <p className="font-semibold text-foreground">{cs.snapshot.products}</p>
                </div>
              </div>
            </FadeIn>

            {/* Results stats */}
            <FadeIn>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
                {cs.stats.map((s) => (
                  <div key={s.label} className="brand-card text-center border-t-4 border-primary">
                    <p className="text-3xl md:text-4xl font-bold text-primary mb-1">{s.value}</p>
                    <p className="text-sm text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Before/after visual (Travx only) */}
            {cs.extra && cs.id === "travx" && cs.extra}

            {/* Story sections */}
            <div className="space-y-10 mb-12">
              {[
                { heading: "The Challenge", items: cs.challenge, icon: "🔴" },
                { heading: "The Switch", items: cs.switchText, icon: "🔄" },
                { heading: "The Results", items: cs.results, icon: "🟢" },
              ].map((section) => (
                <FadeIn key={section.heading}>
                  <h3 className="text-xl font-bold text-foreground mb-4">{section.heading}</h3>
                  <ul className="space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="flex-shrink-0 mt-0.5">{section.icon}</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </FadeIn>
              ))}
            </div>

            {/* Quote */}
            <FadeIn>
              <blockquote className="border-l-4 border-primary bg-accent rounded-r-xl p-6 md:p-8 mb-10">
                <Quote className="h-8 w-8 text-primary/30 mb-3" />
                <p className="text-lg md:text-xl text-foreground italic leading-relaxed mb-4">"{cs.quote}"</p>
                <footer className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">{cs.quoteAuthor}</span> — {cs.quoteRole}
                </footer>
              </blockquote>
            </FadeIn>

            {/* Extra content (timeline, anti-scam for Independents) */}
            {cs.extra && cs.id !== "travx" && cs.extra}

            {/* CTA */}
            <FadeIn className="text-center">
              <Button variant="hero" size="xl">
                Want Results Like This? Book a Demo
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </FadeIn>
          </div>
        </section>
      ))}

      {/* TESTIMONIAL WALL */}
      <section className="py-16 md:py-24 bg-accent">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <FadeIn>
            <h2 className="text-foreground text-center mb-12">What Agents Are Saying</h2>
          </FadeIn>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredTestimonials.map((t, i) => (
              <FadeIn key={i}>
                <div className="brand-card break-inside-avoid">
                  <Badge variant="outline" className="mb-3 text-xs">
                    {filterTabs.find((f) => f.id === t.product)?.label}
                  </Badge>
                  <p className="text-muted-foreground italic text-sm mb-4">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}, {t.company}</p>
                      <p className="text-xs text-muted-foreground">{t.city}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST SIGNALS */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <FadeIn>
            <ShieldCheck className="h-10 w-10 text-primary mx-auto mb-4" />
            <h2 className="text-foreground mb-4">
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ lineHeight: 1.2 }}>
                Accredited. Verified. Trusted.
              </span>
            </h2>
            <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
              Intraverse meets the highest standards in aviation, data protection, and payment security.
            </p>
          </FadeIn>
          <FadeIn>
            <div className="flex flex-wrap justify-center gap-4">
              {trustBadges.map((b) => (
                <div key={b} className="brand-card px-6 py-4 flex items-center justify-center min-w-[100px]">
                  <span className="font-bold text-foreground text-sm">{b}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 md:py-28 bg-foreground">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <h2 className="text-background mb-4">
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold" style={{ lineHeight: 1.2 }}>
              These Are Their Stories. Yours Starts With a Demo.
            </span>
          </h2>
          <p className="text-background/70 mb-10 text-lg">
            Whether you're an established agency, a corporate travel buyer, or starting from scratch — we have a product built for you.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              { label: "I'm a Travel Agent", href: "/agent-platform" },
              { label: "I Need a Website", href: "/travx" },
              { label: "I Manage Corporate Travel", href: "/coopx" },
              { label: "I Want to Start Selling", href: "/independents" },
            ].map((cta) => (
              <a
                key={cta.label}
                href={cta.href}
                className="brand-card bg-background/5 border border-background/20 hover:bg-background/10 transition-colors text-center py-4 px-3"
              >
                <span className="text-sm font-semibold text-background">{cta.label}</span>
              </a>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none">
              Book a Demo
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
