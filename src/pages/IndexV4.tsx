import { Link } from "react-router-dom";
import {
  ArrowRight,
  Play,
  Sparkles,
  ShieldCheck,
  Zap,
  Bot,
  Layers,
  Globe2,
  Building2,
  Plane,
  Landmark,
  Rocket,
  CodeXml,
  Wallet,
  Quote,
  ChevronRight,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { WHATSAPP_URL, DEMO_URL } from "@/lib/constants";

/**
 * IndexV4 — Homepage redesign modeled after the structural layout
 * of about.gitlab.com (announcement bar, peach-gradient hero with
 * 3 dark feature cards, logo scroller, alternating feature rows,
 * industries grid, testimonial, stat tiles, final CTA, footer).
 *
 * Content is Intraverse-specific; layout/composition mirrors GitLab.
 */

const partners = [
  "Tzopal", "Whogofly", "Wright Gateway", "Lutfu Travels",
  "Coastline", "Neso", "Leisure Affairs", "Terminal Seven",
  "Travio", "Blue Paradise",
];

const heroCards = [
  {
    badge: "v3.0",
    title: "What's new in Intraverse",
    body: "AI-powered fare search, faster NDC booking flows and Travel Links 2.0.",
    icon: Sparkles,
    href: "/products",
  },
  {
    title: "Intraverse AI",
    body: "AI co-pilot across search, booking, ticketing and post-sale support.",
    icon: Bot,
    href: "/products/agent-platform",
  },
  {
    title: "Security built in",
    body: "PCI-DSS-aligned payments, role-based access and full audit trails.",
    icon: ShieldCheck,
    href: "/products",
  },
];

const featureRows = [
  {
    eyebrow: "Agent Selling Platform",
    title: "Define how your team and AI agents sell travel.",
    body: "Customize your workflows for search, ticketing, reissues and refunds. Your team orchestrates from above; AI agents execute repetitive booking tasks based on the rules and guardrails you set — your agents turn enquiries into bookings, recover stranded PNRs and quote complex itineraries, while your team stays in control.",
    cta: "Meet the Agent Platform",
    href: "/agent-platform",
    image: "https://res.cloudinary.com/about-gitlab-com/image/upload/v1769011778/wptltgnfxjwuljdy07fs.png",
    alt: "Agent platform dashboard",
  },
  {
    eyebrow: "One Data Plane",
    title: "Your end-to-end travel business in one place.",
    body: "From flights, hotels and tours to wallets, ticketing and reporting — everything you need to sell and service travel in one platform. All your data — bookings, customers, ledgers — in a single data plane, so your team and AI agents work from one source of truth.",
    cta: "Explore the Platform",
    href: "/products",
    image: "https://res.cloudinary.com/about-gitlab-com/image/upload/v1769195293/qsofzzb8rawp0tmjhqiq.png",
    alt: "Unified booking workspace",
  },
  {
    eyebrow: "Trust & Compliance",
    title: "Be proactive with trust built in, not bolted on.",
    body: "Run a transparent travel business with fewer tools. Consolidate KYC, fraud screening, payment reconciliation and supplier compliance into one platform. Risk signals appear directly in the booking flow and the admin console — apply controls and collect audit-ready evidence automatically on every sale.",
    cta: "Learn about trust",
    href: "/about",
    image: "https://res.cloudinary.com/about-gitlab-com/image/upload/v1769195293/kdkx1wwhhxlu0krrmy1f.png",
    alt: "Compliance dashboard",
  },
];

const industries = [
  { title: "Travel Agencies", body: "Replace 5 logins with one. Sell GDS, NDC, LCC, hotels, tours and packages from a single workspace.", href: "/for/travel-agents" },
  { title: "Corporates", body: "Approval workflows, policy enforcement, consolidated billing and real-time spend visibility for finance teams.", href: "/coopx" },
  { title: "Independents", body: "Start a travel business with no IATA and no capital. Real inventory, real commissions, real support.", href: "/independents" },
  { title: "Fintechs", body: "Add flights, hotels and packages as a native revenue line — embedded with your wallet and KYC stack.", href: "/for/fintechs" },
  { title: "Tech Startups", body: "Build a travel product on Intraverse infrastructure. Skip the GDS contracts, ship in weeks not years.", href: "/for/startups" },
  { title: "Developers", body: "A travel API that just works, backed by real inventory. Sandbox keys, typed schemas, Postman ready.", href: "/for/developers" },
];

const stats = [
  { value: "4 hrs", label: "saved per agent per week", brand: "Lutfu Travels" },
  { value: "82%", label: "decrease in booking cycle time", brand: "Wright Gateway" },
  { value: "50%", label: "faster fare quoting", brand: "Coastline" },
  { value: "13x", label: "more inventory coverage", brand: "Terminal Seven" },
  { value: "20x", label: "faster ticket reissues", brand: "Travio" },
  { value: "100", label: "fewer hours of manual work / month", brand: "Blue Paradise" },
  { value: "6x", label: "faster time to market", brand: "Whogofly" },
  { value: "17%", label: "boost in customer satisfaction", brand: "Tzopal" },
];

// ───────────────────────────────────────────────────────────────────────────
// Page
// ───────────────────────────────────────────────────────────────────────────

export default function IndexV4() {
  return (
    <div className="min-h-screen bg-white text-[#171321]">
      <SEO
        title="Intraverse — Africa's intelligent orchestration platform for travel"
        description="Ship faster. With trust. Africa's intelligent orchestration platform for selling and servicing travel."
        noindex
      />

      {/* Announcement bar */}
      <div className="w-full bg-[#0b0b0f] text-white text-[13px]">
        <div className="mx-auto max-w-7xl px-4 py-2.5 flex items-center justify-center gap-3 text-center">
          <span className="opacity-80">See how AI is transforming travel distribution</span>
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold underline-offset-4 hover:underline"
          >
            Sign up for our June product showcase
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      <Navbar />
      <div className="h-16" />

      {/* ============================ HERO ============================ */}
      <section className="relative overflow-hidden">
        {/* Peach/coral gradient backdrop like GitLab */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(120% 80% at 80% 30%, #ffb38a 0%, #ffd9b8 25%, #fceee0 45%, #f5f0ee 65%, #efeae6 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute top-0 right-0 w-1/3 h-40 -z-10 opacity-40"
          style={{
            background:
              "linear-gradient(135deg, #1a1144 0%, #2a1a6a 50%, transparent 100%)",
            clipPath: "polygon(40% 0, 100% 0, 100% 100%, 0 0)",
          }}
        />

        <div className="mx-auto max-w-7xl px-4 pt-20 pb-16 md:pt-28 md:pb-24">
          <h1
            className="text-center font-[700] tracking-[-0.03em] text-[#171321] mx-auto max-w-5xl"
            style={{ fontSize: "clamp(2.75rem, 7vw, 6rem)", lineHeight: 1.02 }}
          >
            Sell travel faster. With trust.
          </h1>
          <p className="mt-6 text-center text-lg md:text-2xl text-[#4a4458] max-w-3xl mx-auto">
            Your intelligent orchestration platform for selling and servicing travel.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-12 px-7 bg-[#171321] text-white font-semibold hover:bg-[#0b0b0f] transition-colors"
            >
              Try for free
            </a>
            <button
              type="button"
              className="inline-flex items-center justify-center h-12 px-5 gap-2 font-semibold text-[#171321] hover:text-[#6a3aff] transition-colors"
            >
              Learn more
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-[#171321]/30">
                <Play className="h-3 w-3 fill-current ml-0.5" />
              </span>
            </button>
          </div>

          {/* Hero cards row (dark) */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5">
            {heroCards.map((c) => {
              const Icon = c.icon;
              return (
                <Link
                  key={c.title}
                  to={c.href}
                  className="group relative bg-[#0d0d12] text-white p-7 min-h-[200px] flex flex-col hover:bg-[#1a1a22] transition-colors"
                >
                  {c.badge && (
                    <span className="text-[#ff7a40] font-bold text-2xl mb-2">{c.badge}</span>
                  )}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center justify-center w-9 h-9 bg-white/10">
                      <Icon className="h-5 w-5 text-[#ff7a40]" />
                    </span>
                    <h3 className="font-bold text-lg">{c.title}</h3>
                  </div>
                  <p className="text-sm text-white/70 leading-relaxed">{c.body}</p>
                  <ChevronRight className="absolute bottom-5 right-5 h-5 w-5 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================ LOGO SCROLLER ============================ */}
      <section className="py-10 border-y border-[#e8e2dd] bg-white overflow-hidden">
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          <div className="flex animate-scroll-left w-max gap-16 hover:[animation-play-state:paused]">
            {[...partners, ...partners, ...partners].map((p, i) => (
              <span
                key={`${p}-${i}`}
                className="flex-shrink-0 text-[#74717a] font-bold text-xl tracking-tight uppercase whitespace-nowrap"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ BUILT FOR HOW YOU WORK ============================ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <h2
              className="font-[700] tracking-[-0.02em] text-[#171321]"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", lineHeight: 1.05 }}
            >
              Built for how you sell.
            </h2>
            <p className="mt-4 text-xl text-[#4a4458]">
              Join the 200+ agencies and 50,000+ travel sellers already using Intraverse.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-1.5 text-[#6a3aff] font-semibold hover:gap-2.5 transition-all"
            >
              Why Intraverse?
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-16 space-y-20 md:space-y-28">
            {featureRows.map((row, i) => {
              const reversed = i % 2 === 1;
              return (
                <div
                  key={row.title}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                    reversed ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div>
                    <p className="text-sm font-bold text-[#6a3aff] uppercase tracking-wider mb-3">
                      {row.eyebrow}
                    </p>
                    <h3
                      className="font-[700] tracking-[-0.02em] text-[#171321]"
                      style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)", lineHeight: 1.1 }}
                    >
                      {row.title}
                    </h3>
                    <p className="mt-5 text-lg text-[#4a4458] leading-relaxed">{row.body}</p>
                    <Link
                      to={row.href}
                      className="mt-6 inline-flex items-center gap-1.5 text-[#6a3aff] font-semibold hover:gap-2.5 transition-all"
                    >
                      {row.cta}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                  <div className="relative">
                    <div className="aspect-[4/3] bg-gradient-to-br from-[#f5f0ee] to-[#fceee0] overflow-hidden border border-[#e8e2dd]">
                      <img
                        src={row.image}
                        alt={row.alt}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================ INDUSTRIES ============================ */}
      <section className="py-20 md:py-28 bg-[#f5f0ee]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <h2
              className="font-[700] tracking-[-0.02em] text-[#171321]"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", lineHeight: 1.05 }}
            >
              Built to meet your business's demands.
            </h2>
            <p className="mt-4 text-xl text-[#4a4458]">
              Every kind of travel seller faces unique distribution, payment and service demands. Intraverse adapts to your model while maintaining the velocity your customers expect.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e8e2dd] border border-[#e8e2dd]">
            {industries.map((ind) => (
              <Link
                key={ind.title}
                to={ind.href}
                className="group bg-white p-8 hover:bg-[#fceee0] transition-colors flex flex-col"
              >
                <h3 className="font-bold text-xl text-[#171321] group-hover:text-[#6a3aff] transition-colors flex items-center gap-2">
                  {ind.title}
                  <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </h3>
                <p className="mt-3 text-[#4a4458] leading-relaxed">{ind.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ TESTIMONIAL ============================ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-5xl px-4">
          <Quote className="h-10 w-10 text-[#ff7a40] mb-6" />
          <blockquote
            className="font-[600] tracking-[-0.01em] text-[#171321]"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", lineHeight: 1.25 }}
          >
            "The faster booking and ticketing Intraverse enables directly contributes to our growth. Customers choose us because we can quote and confirm at the speed their plans demand."
          </blockquote>
          <div className="mt-8 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#fceee0] flex items-center justify-center font-bold text-[#171321]">
              C
            </div>
            <div>
              <p className="font-semibold text-[#171321]">Chidera Nwosu</p>
              <p className="text-sm text-[#74717a]">Head of Operations · Wright Gateway</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================ STATS GRID ============================ */}
      <section className="py-20 md:py-28 bg-[#0b0b0f] text-white">
        <div className="mx-auto max-w-7xl px-4">
          <h2
            className="font-[700] tracking-[-0.02em]"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", lineHeight: 1.05 }}
          >
            One platform for teams of every size.
          </h2>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {stats.map((s) => (
              <div key={s.label} className="bg-[#0b0b0f] p-6 md:p-8 flex flex-col justify-between min-h-[200px]">
                <div className="text-4xl md:text-5xl font-[700] text-[#ff7a40] tracking-tight">
                  {s.value}
                </div>
                <div>
                  <p className="text-white/80 leading-snug mb-3">{s.label}</p>
                  <p className="text-xs uppercase tracking-wider text-white/50 font-bold">{s.brand}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ FINAL CTA ============================ */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(80% 60% at 50% 40%, #ffd9b8 0%, #fceee0 50%, #f5f0ee 100%)",
          }}
        />
        <div className="mx-auto max-w-5xl px-4 py-24 md:py-32 text-center">
          <h2
            className="font-[700] tracking-[-0.03em] text-[#171321]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1.02 }}
          >
            Start selling faster today.
          </h2>
          <p className="mt-6 text-lg md:text-xl text-[#4a4458] max-w-2xl mx-auto">
            See what your team can do with the intelligent orchestration platform for travel.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-12 px-7 bg-[#171321] text-white font-semibold hover:bg-[#0b0b0f] transition-colors"
            >
              Try for free
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-12 px-7 border border-[#171321] text-[#171321] font-semibold hover:bg-[#171321] hover:text-white transition-colors"
            >
              Talk to sales
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
