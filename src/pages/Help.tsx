import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
import { WHATSAPP_URL } from "@/lib/constants";
  Search, MessageCircle, Mail, Phone, Rocket, Plane, Hotel, CreditCard,
  Users, Settings, LinkIcon, BarChart3, Play, ArrowRight, Clock,
} from "lucide-react";

/* ───────────────── DATA ───────────────── */

const categories = [
  { icon: Rocket, title: "Getting Started", desc: "Set up your account and make your first booking", href: "/help/getting-started" },
  { icon: Plane, title: "Booking Flights", desc: "Search, compare, and issue flight tickets", href: "/help/booking-flights" },
  { icon: Hotel, title: "Hotels & Tours", desc: "Book hotels, tours, and packages for clients", href: "/help/hotels-tours" },
  { icon: CreditCard, title: "Payments & Wallet", desc: "Fund your wallet, track payments, and invoices", href: "/help/payments-wallet" },
  { icon: Users, title: "Managing Customers", desc: "Add passengers, manage profiles, and histories", href: "/help/managing-customers" },
  { icon: Settings, title: "Account & Settings", desc: "Update your profile, team, and preferences", href: "/help/account-settings" },
  { icon: LinkIcon, title: "Travel Links & Packages", desc: "Create shareable links and custom packages", href: "/help/travel-links-packages" },
  { icon: BarChart3, title: "Reports & Analytics", desc: "Understand your sales, commissions, and data", href: "/help/reports-analytics" },
];

const popularArticles = [
  { title: "How to fund your Intraverse wallet", read: "3 min read", href: "/help/fund-wallet" },
  { title: "Issuing your first flight ticket — step by step", read: "5 min read", href: "/help/first-ticket" },
  { title: "Understanding fare classes and baggage rules", read: "4 min read", href: "/help/fare-classes" },
  { title: "How to void or refund a ticket", read: "3 min read", href: "/help/void-refund" },
  { title: "Setting up Travel Links for social media selling", read: "4 min read", href: "/help/travel-links-setup" },
  { title: "Adding and managing team members", read: "2 min read", href: "/help/team-members" },
  { title: "How commissions and markups work", read: "5 min read", href: "/help/commissions" },
  { title: "Generating sales reports and downloading statements", read: "3 min read", href: "/help/sales-reports" },
];

const videos = [
  { title: "Getting Started with Intraverse", duration: "4:32" },
  { title: "How to Search and Book Flights", duration: "6:15" },
  { title: "Setting Up Travel Links", duration: "3:48" },
  { title: "Understanding Your Dashboard & Reports", duration: "5:20" },
];

/* ───────────────── COMPONENT ───────────────── */

export default function Help() {
  const [query, setQuery] = useState("");

  useEffect(() => {
    document.title = "Help Centre | Get Support, Browse Guides | Intraverse";
    const setMeta = (name: string, content: string) => {
      const attr = name.startsWith("og:") ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("description", "Find help articles, video tutorials, and direct support for Intraverse. Search our knowledge base or chat with our Lagos-based support team on WhatsApp.");
    setMeta("og:title", "Intraverse Help Centre");
    setMeta("og:description", "Self-serve guides, video tutorials, and human support — all in one place. Fast answers from a real team based in Lagos.");
  }, []);

  const hero = useScrollReveal();
  const catSection = useScrollReveal();
  const articlesSection = useScrollReveal();
  const videoSection = useScrollReveal();
  const humanSection = useScrollReveal();
  const ctaSection = useScrollReveal();

  const filtered = query.trim()
    ? categories.filter(c => c.title.toLowerCase().includes(query.toLowerCase()) || c.desc.toLowerCase().includes(query.toLowerCase()))
    : categories;

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* ── HERO ── */}
        <section className="bg-background py-20 md:py-28">
          <div
            ref={hero.ref}
            className={`container mx-auto px-4 max-w-3xl text-center transition-all duration-700 ${hero.revealClass}`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
              How Can We Help You Today?
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Find answers, learn how to use Intraverse, and get the support you need — fast. Search our knowledge base, browse by category, or message us directly on WhatsApp.
            </p>

            {/* Search bar */}
            <div className="relative max-w-xl mx-auto mb-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search for help articles, guides, or topics..."
                value={query}
                onChange={e => setQuery(e.target.value)}
                className="h-14 pl-12 pr-4 text-base rounded-xl border-border shadow-lg focus-visible:ring-primary"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="xl" className="w-full sm:w-auto gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </Button>
              </a>
              <Link to="/contact">
                <Button variant="outline" size="xl" className="w-full sm:w-auto rounded-none border-foreground text-foreground hover:bg-accent">
                  Contact Support
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* ── SECTION 1 — BROWSE BY CATEGORY ── */}
        <section className="py-20 md:py-24" style={{ backgroundColor: "hsl(214, 100%, 97%)" }}>
          <div
            ref={catSection.ref}
            className={`container mx-auto px-4 transition-all duration-700 ${catSection.revealClass}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-14">
              Browse Help Topics
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {filtered.map(cat => {
                const Icon = cat.icon;
                return (
                  <Link
                    key={cat.title}
                    to={cat.href}
                    className="group bg-background rounded-xl p-8 border border-border hover:border-[hsl(220,76%,49%)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <Icon className="h-10 w-10 text-[hsl(220,76%,49%)] mb-4" />
                    <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-[hsl(220,76%,49%)] transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{cat.desc}</p>
                  </Link>
                );
              })}
              {filtered.length === 0 && (
                <p className="col-span-full text-center text-muted-foreground py-8">No topics match your search. Try a different keyword or <a href={WHATSAPP_URL} className="text-[hsl(220,76%,49%)] underline" target="_blank" rel="noopener noreferrer">message us on WhatsApp</a>.</p>
              )}
            </div>
          </div>
        </section>

        {/* ── SECTION 2 — POPULAR ARTICLES ── */}
        <section className="py-20 md:py-24 bg-background">
          <div
            ref={articlesSection.ref}
            className={`container mx-auto px-4 max-w-3xl transition-all duration-700 ${articlesSection.revealClass}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-14">
              Most Helpful Right Now
            </h2>
            <ul className="divide-y divide-border">
              {popularArticles.map(article => (
                <li key={article.title}>
                  <Link
                    to={article.href}
                    className="group flex items-center justify-between py-4 px-4 -mx-4 rounded-lg hover:bg-accent/50 transition-colors"
                  >
                    <span className="text-base font-medium text-foreground group-hover:text-[hsl(220,76%,49%)] transition-colors">
                      {article.title}
                    </span>
                    <span className="text-sm text-muted-foreground whitespace-nowrap ml-4 flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {article.read}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── SECTION 3 — VIDEO TUTORIALS ── */}
        <section className="py-20 md:py-24" style={{ backgroundColor: "hsl(214, 100%, 97%)" }}>
          <div
            ref={videoSection.ref}
            className={`container mx-auto px-4 transition-all duration-700 ${videoSection.revealClass}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
              Learn by Watching
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-14 max-w-2xl mx-auto">
              Short, practical videos that walk you through the platform — from your first login to advanced features.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {videos.map(v => (
                <div key={v.title} className="bg-background rounded-xl overflow-hidden border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
                  {/* Thumbnail placeholder */}
                  <div className="aspect-video bg-secondary flex items-center justify-center relative">
                    <div className="h-16 w-16 rounded-full bg-[hsl(220,76%,49%)] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="h-7 w-7 text-background fill-background ml-1" />
                    </div>
                    <span className="absolute bottom-2 right-2 bg-foreground/80 text-background text-xs px-2 py-0.5 rounded">
                      {v.duration}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground">{v.title}</h3>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Button variant="outline" className="rounded-none border-foreground text-foreground hover:bg-accent gap-2">
                View All Videos
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* ── SECTION 4 — TALK TO A HUMAN ── */}
        <section className="py-20 md:py-24 bg-background">
          <div
            ref={humanSection.ref}
            className={`container mx-auto px-4 transition-all duration-700 ${humanSection.revealClass}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-14 max-w-2xl mx-auto">
              Our Lagos-based support team is here to help. Pick the channel that works best for you.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {/* WhatsApp */}
              <div className="bg-background rounded-xl border border-border p-8 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <MessageCircle className="h-10 w-10 text-[hsl(142,70%,45%)] mx-auto mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">WhatsApp Support</h3>
                <p className="text-sm text-muted-foreground mb-6">Fastest response — usually under 30 minutes during office hours.</p>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="default" className="w-full gap-2">
                    <MessageCircle className="h-4 w-4" />
                    Message Us on WhatsApp
                  </Button>
                </a>
              </div>
              {/* Email */}
              <div className="bg-background rounded-xl border border-border p-8 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <Mail className="h-10 w-10 text-[hsl(220,76%,49%)] mx-auto mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">Email Support</h3>
                <p className="text-sm text-muted-foreground mb-6">Detailed inquiries — we respond within 24 hours on weekdays.</p>
                <a href="mailto:support@intraverse.com">
                  <Button variant="outline" size="default" className="w-full rounded-none border-foreground text-foreground hover:bg-accent">
                    Email support@intraverse.com
                  </Button>
                </a>
              </div>
              {/* Phone */}
              <div className="bg-background rounded-xl border border-border p-8 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <Phone className="h-10 w-10 text-[hsl(220,76%,49%)] mx-auto mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">Phone Support</h3>
                <p className="text-sm text-muted-foreground mb-6">Speak with a human — available during business hours WAT.</p>
                <a href="tel:+2349030002629">
                  <Button variant="outline" size="default" className="w-full rounded-none border-foreground text-foreground hover:bg-accent">
                    Call +234 903 000 2629
                  </Button>
                </a>
              </div>
            </div>
            <p className="text-sm text-muted-foreground text-center mt-8">
              Office hours: Monday–Friday, 8am–6pm WAT • Weekend WhatsApp support available for urgent matters
            </p>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="bg-secondary text-secondary-foreground py-20 md:py-24">
          <div
            ref={ctaSection.ref}
            className={`container mx-auto px-4 max-w-3xl text-center transition-all duration-700 ${ctaSection.revealClass}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need More Than Help? Talk to Sales.
            </h2>
            <p className="text-lg text-secondary-foreground/70 mb-10 max-w-2xl mx-auto">
              If you're evaluating Intraverse, exploring a partnership, or considering an enterprise plan, our sales team can help you figure out the right fit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="xl" className="w-full sm:w-auto bg-background text-foreground hover:bg-background/90 rounded-none font-semibold">
                  Book a Demo
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="xl" className="w-full sm:w-auto rounded-none border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10">
                  Talk to Sales
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}