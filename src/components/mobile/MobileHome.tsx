import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  LayoutDashboard,
  Globe,
  Building2,
  Rocket,
  Wallet,
  Link2,
  Plane,
  Landmark,
  Lightbulb,
  CodeXml,
  MessageCircle,
  Quote,
} from "lucide-react";
import { WHATSAPP_URL, DEMO_URL } from "@/lib/constants";
import { trackEvent, CTA_EVENTS } from "@/lib/analytics";
import { Footer } from "@/components/Footer";

/**
 * MobileHome — Apple-style mobile-only homepage.
 * Renders only on small screens (controlled from src/pages/Index.tsx).
 * Sections: Hero, Products, Who we serve, Testimonials, Final CTA, Footer.
 * Plus a sticky bottom CTA bar.
 */

const products = [
  {
    icon: LayoutDashboard,
    eyebrow: "Agent Selling Platform",
    title: "Every flight. Every hotel. One dashboard.",
    body: "Aggregated GDS, NDC, consolidator and aggregator inventory — compare and book in minutes.",
    href: "/agent-platform",
    cta: "Book a demo",
    tone: "dark",
  },
  {
    icon: Globe,
    eyebrow: "Travx",
    title: "Your brand. Your website. Bookings while you sleep.",
    body: "A fully branded, booking-enabled website for your agency. No developer needed.",
    href: "/travx",
    cta: "See Travx",
    tone: "light",
  },
  {
    icon: Building2,
    eyebrow: "CoopX",
    title: "Take control of your company's travel spend.",
    body: "Approval workflows, policy enforcement, consolidated billing and full reporting.",
    href: "/coopx",
    cta: "Book a demo",
    tone: "dark",
  },
  {
    icon: Rocket,
    eyebrow: "Independents",
    title: "Start earning in travel. No agency required.",
    body: "Real IATA-backed technology. Sell flights, hotels and tours. Earn on every booking.",
    href: "/independents",
    cta: "Join the programme",
    tone: "light",
  },
  {
    icon: Link2,
    eyebrow: "Travel Links",
    title: "Sell travel without a website. Just share a link.",
    body: "Generate a shareable booking link for any flight, hotel or package — they click, book, pay.",
    href: "/products/travel-links",
    cta: "Learn more",
    tone: "dark",
    isNew: true,
  },
  {
    icon: Wallet,
    eyebrow: "Odiopay",
    title: "Close the sale, even on a part payment.",
    body: "Fare Lock and Pay Later let customers secure today's fare and pay in instalments.",
    href: "/supplier-engine",
    cta: "Learn about Odiopay",
    tone: "light",
  },
];

const audiences = [
  { icon: Plane, title: "Travel Agents", body: "Sell more flights, hotels and tours from one platform.", href: "/for/travel-agents" },
  { icon: Building2, title: "Businesses", body: "Streamline how your team books and manages travel.", href: "/for/businesses" },
  { icon: Landmark, title: "Corporates", body: "Enterprise-grade travel management for African companies.", href: "/for/corporates" },
  { icon: Rocket, title: "Independents", body: "Earn from travel. No agency. No experience needed.", href: "/for/independents", featured: true },
  { icon: Lightbulb, title: "Tech Startups", body: "Build your travel product on Intraverse infrastructure.", href: "/for/startups" },
  { icon: Landmark, title: "Fintechs", body: "Add travel as a revenue stream — natively, in weeks.", href: "/for/fintechs" },
  { icon: CodeXml, title: "Developers", body: "The travel API that just works — backed by real inventory.", href: "/for/developers" },
];

const testimonials = [
  { quote: "Intraverse transformed how we access inventory. We now offer fares we never had before.", name: "Adaeze O.", agency: "Prestige Tours", city: "Lagos" },
  { quote: "24/7 ticketing changed everything. We no longer lose bookings because a supplier office was closed.", name: "Ibrahim M.", agency: "Gateway Travel", city: "Abuja" },
  { quote: "The wallet system freed up our cash flow. We process more bookings without waiting on payments.", name: "Chioma E.", agency: "Horizon Express", city: "Port Harcourt" },
  { quote: "We cut our manual workload in half. Automation lets us focus on selling, not paperwork.", name: "Olu B.", agency: "Royal Wings Travel", city: "Ibadan" },
  { quote: "I started with zero experience and no IATA. Intraverse gave me everything from day one.", name: "Amaka N.", agency: "Nova Travel Co.", city: "Enugu" },
];

const onDemoClick = (location: string) =>
  trackEvent(CTA_EVENTS.demoClick, { location, page: "mobile_home" });
const onWaClick = (location: string) =>
  trackEvent(CTA_EVENTS.whatsappClick, { location, page: "mobile_home" });

export const MobileHome = () => {
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowStickyBar(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="md:hidden bg-background text-foreground">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#0b0b0f] text-white pt-14 pb-20 px-5">
        <div
          aria-hidden
          className="absolute -top-32 -right-24 w-[360px] h-[360px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, hsl(var(--primary)/0.45), transparent 70%)" }}
        />
        <div
          aria-hidden
          className="absolute bottom-0 -left-20 w-[280px] h-[280px] rounded-full blur-3xl opacity-60"
          style={{ background: "radial-gradient(circle, #1e61dc55, transparent 70%)" }}
        />

        <div className="relative">
          <p className="text-[11px] uppercase tracking-[0.22em] text-white/60 mb-5">
            Intraverse · Travel OS
          </p>
          <h1
            className="font-[660] text-white"
            style={{ fontSize: "clamp(2.5rem, 12vw, 4rem)", lineHeight: 1.02, letterSpacing: "-0.035em" }}
          >
            Flights.<br />Hotels.<br />Tours.<br />
            <span className="text-white/50">Sold beautifully.</span>
          </h1>

          <p className="mt-6 text-[17px] leading-snug text-white/70 max-w-[28ch]">
            One AI-powered platform to sell every kind of travel — your brand, your way.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="book_demo"
              data-page="mobile_home"
              onClick={() => onDemoClick("hero")}
              className="inline-flex items-center justify-center h-14 px-6 rounded-full bg-white text-[#0b0b0f] font-semibold text-[15px] active:scale-[0.98] transition-transform"
            >
              Book a free demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="whatsapp"
              data-page="mobile_home"
              onClick={() => onWaClick("hero")}
              className="inline-flex items-center justify-center h-14 px-6 rounded-full bg-white/10 backdrop-blur text-white font-semibold text-[15px] border border-white/15 active:scale-[0.98] transition-transform"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>

          <p className="mt-4 text-xs text-white/50">15-minute demo · No commitment · Free</p>

          <div className="mt-10 flex items-center gap-2 text-white/50 text-xs uppercase tracking-widest">
            <span>Scroll</span>
            <ChevronDown className="h-3.5 w-3.5 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ================= PRODUCTS — full-bleed snap stack ================= */}
      <section className="bg-background">
        <header className="px-5 pt-14 pb-6">
          <p className="text-[11px] uppercase tracking-[0.22em] text-primary mb-3">The platform</p>
          <h2
            className="font-[660] text-foreground"
            style={{ fontSize: "clamp(2rem, 9vw, 3rem)", lineHeight: 1.05, letterSpacing: "-0.03em" }}
          >
            Everything you need to sell travel.
          </h2>
        </header>

        <div
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-5 pb-8 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products.map((p) => {
            const Icon = p.icon;
            const isDark = p.tone === "dark";
            return (
              <Link
                key={p.eyebrow}
                to={p.href}
                className={`relative snap-center shrink-0 w-[85vw] max-w-[360px] rounded-3xl p-7 flex flex-col min-h-[440px] transition-transform active:scale-[0.99] ${
                  isDark ? "bg-[#0b0b0f] text-white" : "bg-[hsl(216,60%,97%)] text-foreground"
                }`}
              >
                {p.isNew && (
                  <span className="absolute top-4 right-4 inline-flex px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500 text-white">
                    New
                  </span>
                )}
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${
                    isDark ? "bg-white/10" : "bg-primary/10"
                  }`}
                >
                  <Icon className={`w-6 h-6 ${isDark ? "text-white" : "text-primary"}`} />
                </div>
                <p
                  className={`text-[11px] uppercase tracking-[0.18em] mb-3 ${
                    isDark ? "text-white/60" : "text-primary"
                  }`}
                >
                  {p.eyebrow}
                </p>
                <h3
                  className="font-[660] mb-3"
                  style={{ fontSize: "1.6rem", lineHeight: 1.1, letterSpacing: "-0.02em" }}
                >
                  {p.title}
                </h3>
                <p className={`text-[15px] leading-snug ${isDark ? "text-white/70" : "text-muted-foreground"}`}>
                  {p.body}
                </p>
                <span
                  className={`mt-auto inline-flex items-center gap-1.5 text-sm font-semibold pt-6 ${
                    isDark ? "text-white" : "text-primary"
                  }`}
                >
                  {p.cta}
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ================= WHO WE SERVE ================= */}
      <section className="px-5 pt-14 pb-16 bg-[hsl(216,60%,97%)]">
        <p className="text-[11px] uppercase tracking-[0.22em] text-primary mb-3">Built for</p>
        <h2
          className="font-[660] text-foreground mb-8"
          style={{ fontSize: "clamp(2rem, 9vw, 3rem)", lineHeight: 1.05, letterSpacing: "-0.03em" }}
        >
          Everyone who sells, buys or builds travel.
        </h2>

        <ul className="divide-y divide-border/60 border-y border-border/60">
          {audiences.map((a) => {
            const Icon = a.icon;
            return (
              <li key={a.title}>
                <Link
                  to={a.href}
                  className="flex items-start gap-4 py-5 active:bg-background/60 transition-colors"
                >
                  <div
                    className={`shrink-0 w-11 h-11 rounded-2xl flex items-center justify-center ${
                      a.featured ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                    }`}
                  >
                    <Icon className="w-5 h-5" strokeWidth={1.75} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-[17px] font-semibold text-foreground">{a.title}</h3>
                      {a.featured && (
                        <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                          Popular
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground leading-snug mt-1">{a.body}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground mt-4 shrink-0" />
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          to="/who-we-serve"
          className="inline-flex items-center gap-1.5 mt-6 text-sm font-bold text-primary"
        >
          See all audiences
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      {/* ================= TESTIMONIALS — dark editorial ================= */}
      <section className="bg-[#0b0b0f] text-white px-5 pt-14 pb-16">
        <p className="text-[11px] uppercase tracking-[0.22em] text-white/60 mb-3">Loved by agents</p>
        <h2
          className="font-[660] text-white mb-8"
          style={{ fontSize: "clamp(2rem, 9vw, 3rem)", lineHeight: 1.05, letterSpacing: "-0.03em" }}
        >
          Real teams. Real results.
        </h2>

        <div
          className="-mx-5 px-5 flex overflow-x-auto snap-x snap-mandatory gap-4 pb-2 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="snap-center shrink-0 w-[82vw] max-w-[340px] rounded-3xl bg-white/5 border border-white/10 p-6 flex flex-col"
            >
              <Quote className="h-5 w-5 text-white/30 mb-4" />
              <blockquote
                className="text-[20px] leading-snug font-medium text-white mb-6 flex-1"
                style={{ letterSpacing: "-0.01em" }}
              >
                "{t.quote}"
              </blockquote>
              <figcaption className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white font-semibold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-white/60">{t.agency} — {t.city}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="px-5 pt-16 pb-20 bg-primary text-primary-foreground text-center">
        <h2
          className="font-[660] mb-4 text-primary-foreground"
          style={{ fontSize: "clamp(2.25rem, 10vw, 3.25rem)", lineHeight: 1.05, letterSpacing: "-0.03em" }}
        >
          Start selling travel faster today.
        </h2>
        <p className="text-primary-foreground/80 text-[15px] leading-snug max-w-md mx-auto mb-8">
          Book a 15-minute demo. See how Intraverse helps you sell more flights, hotels, tours and packages — all from one platform.
        </p>

        <div className="flex flex-col gap-3">
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="book_demo"
            data-page="mobile_home"
            onClick={() => onDemoClick("final_cta")}
            className="inline-flex items-center justify-center h-14 px-6 rounded-full bg-primary-foreground text-primary font-semibold text-[15px] active:scale-[0.98] transition-transform"
          >
            Book a free demo
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="whatsapp"
            data-page="mobile_home"
            onClick={() => onWaClick("final_cta")}
            className="inline-flex items-center justify-center h-14 px-6 rounded-full bg-white/10 text-primary-foreground font-semibold text-[15px] border border-primary-foreground/20 active:scale-[0.98] transition-transform"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Chat on WhatsApp
          </a>
        </div>
      </section>

      <Footer />

      {/* Spacer so sticky bar never overlaps footer content */}
      <div aria-hidden className="h-20" />

      {/* ================= STICKY BOTTOM CTA BAR ================= */}
      <div
        className={`fixed bottom-0 inset-x-0 z-40 px-4 pb-[max(env(safe-area-inset-bottom),12px)] pt-3 transition-all duration-300 ${
          showStickyBar ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
        style={{ background: "linear-gradient(to top, hsl(var(--background)) 65%, transparent)" }}
      >
        <div className="flex gap-2 rounded-full bg-[#0b0b0f] p-1.5 shadow-[0_8px_24px_rgba(0,0,0,0.18)]">
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="book_demo"
            data-page="mobile_home"
            onClick={() => onDemoClick("sticky_bar")}
            className="flex-1 inline-flex items-center justify-center h-11 rounded-full bg-white text-[#0b0b0f] font-semibold text-sm"
          >
            Book a demo
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="whatsapp"
            data-page="mobile_home"
            onClick={() => onWaClick("sticky_bar")}
            className="flex-1 inline-flex items-center justify-center gap-1.5 h-11 rounded-full bg-emerald-500 text-white font-semibold text-sm"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileHome;
