import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  Search, MessageCircle, Mail, Phone, Rocket, Plane, Hotel, CreditCard,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  Users, Settings, LinkIcon, BarChart3, Play, ArrowRight, Clock,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
} from "lucide-react";
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
/* ───────────────── DATA ───────────────── */
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
const categories = [
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { icon: Rocket, title: "Getting Started", desc: "Set up your account and make your first booking", href: "/help/getting-started" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { icon: Plane, title: "Booking Flights", desc: "Search, compare, and issue flight tickets", href: "/help/booking-flights" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { icon: Hotel, title: "Hotels & Tours", desc: "Book hotels, tours, and packages for clients", href: "/help/hotels-tours" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { icon: CreditCard, title: "Payments & Wallet", desc: "Fund your wallet, track payments, and invoices", href: "/help/payments-wallet" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { icon: Users, title: "Managing Customers", desc: "Add passengers, manage profiles, and histories", href: "/help/managing-customers" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { icon: Settings, title: "Account & Settings", desc: "Update your profile, team, and preferences", href: "/help/account-settings" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { icon: LinkIcon, title: "Travel Links & Packages", desc: "Create shareable links and custom packages", href: "/help/travel-links-packages" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { icon: BarChart3, title: "Reports & Analytics", desc: "Understand your sales, commissions, and data", href: "/help/reports-analytics" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
];
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
const popularArticles = [
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { title: "How to fund your Intraverse wallet", read: "3 min read", href: "/help/fund-wallet" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { title: "Issuing your first flight ticket — step by step", read: "5 min read", href: "/help/first-ticket" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { title: "Understanding fare classes and baggage rules", read: "4 min read", href: "/help/fare-classes" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { title: "How to void or refund a ticket", read: "3 min read", href: "/help/void-refund" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { title: "Setting up Travel Links for social media selling", read: "4 min read", href: "/help/travel-links-setup" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { title: "Adding and managing team members", read: "2 min read", href: "/help/team-members" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { title: "How commissions and markups work", read: "5 min read", href: "/help/commissions" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { title: "Generating sales reports and downloading statements", read: "3 min read", href: "/help/sales-reports" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
];
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
const videos = [
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { title: "Getting Started with Intraverse", duration: "4:32" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { title: "How to Search and Book Flights", duration: "6:15" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { title: "Setting Up Travel Links", duration: "3:48" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { title: "Understanding Your Dashboard & Reports", duration: "5:20" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
];
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
/* ───────────────── COMPONENT ───────────────── */
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
export default function Help() {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  const [query, setQuery] = useState("");
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  useEffect(() => {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    document.title = "Help Centre | Get Support, Browse Guides | Intraverse";
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    const setMeta = (name: string, content: string) => {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      const attr = name.startsWith("og:") ? "property" : "name";
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      let el = document.querySelector(`meta[${attr}="${name}"]`);
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      el.setAttribute("content", content);
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    };
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    setMeta("description", "Find help articles, video tutorials, and direct support for Intraverse. Search our knowledge base or chat with our Lagos-based support team on WhatsApp.");
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    setMeta("og:title", "Intraverse Help Centre");
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    setMeta("og:description", "Self-serve guides, video tutorials, and human support — all in one place. Fast answers from a real team based in Lagos.");
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  }, []);
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  const hero = useScrollReveal();
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  const catSection = useScrollReveal();
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  const articlesSection = useScrollReveal();
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  const videoSection = useScrollReveal();
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  const humanSection = useScrollReveal();
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  const ctaSection = useScrollReveal();
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  const filtered = query.trim()
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    ? categories.filter(c => c.title.toLowerCase().includes(query.toLowerCase()) || c.desc.toLowerCase().includes(query.toLowerCase()))
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    : categories;
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  return (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    <>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <Navbar />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <main className="pt-16">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        {/* ── HERO ── */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <section className="bg-background py-20 md:py-28">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <div
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            ref={hero.ref}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            className={`container mx-auto px-4 max-w-3xl text-center transition-all duration-700 ${hero.revealClass}`}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          >
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              How Can We Help You Today?
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </h1>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              Find answers, learn how to use Intraverse, and get the support you need — fast. Search our knowledge base, browse by category, or message us directly on WhatsApp.
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            {/* Search bar */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <div className="relative max-w-xl mx-auto mb-8">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <Input
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                type="text"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                placeholder="Search for help articles, guides, or topics..."
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                value={query}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                onChange={e => setQuery(e.target.value)}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                className="h-14 pl-12 pr-4 text-base rounded-xl border-border shadow-lg focus-visible:ring-primary"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <Button variant="hero" size="xl" className="w-full sm:w-auto gap-2">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <MessageCircle className="h-5 w-5" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  Chat on WhatsApp
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </Button>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </a>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <Link to="/contact">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <Button variant="outline" size="xl" className="w-full sm:w-auto rounded-none border-foreground text-foreground hover:bg-accent">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  Contact Support
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </Button>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </Link>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </section>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        {/* ── SECTION 1 — BROWSE BY CATEGORY ── */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <section className="py-20 md:py-24" style={{ backgroundColor: "hsl(214, 100%, 97%)" }}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <div
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            ref={catSection.ref}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            className={`container mx-auto px-4 transition-all duration-700 ${catSection.revealClass}`}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          >
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-14">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              Browse Help Topics
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </h2>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              {filtered.map(cat => {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                const Icon = cat.icon;
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                return (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <Link
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    key={cat.title}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    to={cat.href}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    className="group bg-background rounded-xl p-8 border border-border hover:border-[hsl(220,76%,49%)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  >
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <Icon className="h-10 w-10 text-[hsl(220,76%,49%)] mb-4" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-[hsl(220,76%,49%)] transition-colors">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      {cat.title}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    </h3>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <p className="text-sm text-muted-foreground">{cat.desc}</p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  </Link>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                );
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              })}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              {filtered.length === 0 && (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <p className="col-span-full text-center text-muted-foreground py-8">No topics match your search. Try a different keyword or <a href={WHATSAPP_URL} className="text-[hsl(220,76%,49%)] underline" target="_blank" rel="noopener noreferrer">message us on WhatsApp</a>.</p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              )}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </section>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        {/* ── SECTION 2 — POPULAR ARTICLES ── */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <section className="py-20 md:py-24 bg-background">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <div
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            ref={articlesSection.ref}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            className={`container mx-auto px-4 max-w-3xl transition-all duration-700 ${articlesSection.revealClass}`}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          >
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-14">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              Most Helpful Right Now
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </h2>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <ul className="divide-y divide-border">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              {popularArticles.map(article => (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <li key={article.title}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <Link
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    to={article.href}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    className="group flex items-center justify-between py-4 px-4 -mx-4 rounded-lg hover:bg-accent/50 transition-colors"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  >
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <span className="text-base font-medium text-foreground group-hover:text-[hsl(220,76%,49%)] transition-colors">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      {article.title}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    </span>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <span className="text-sm text-muted-foreground whitespace-nowrap ml-4 flex items-center gap-1">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      <Clock className="h-3.5 w-3.5" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      {article.read}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    </span>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  </Link>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </li>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              ))}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </ul>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </section>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        {/* ── SECTION 3 — VIDEO TUTORIALS ── */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <section className="py-20 md:py-24" style={{ backgroundColor: "hsl(214, 100%, 97%)" }}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <div
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            ref={videoSection.ref}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            className={`container mx-auto px-4 transition-all duration-700 ${videoSection.revealClass}`}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          >
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              Learn by Watching
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </h2>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <p className="text-lg text-muted-foreground text-center mb-14 max-w-2xl mx-auto">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              Short, practical videos that walk you through the platform — from your first login to advanced features.
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              {videos.map(v => (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <div key={v.title} className="bg-background rounded-xl overflow-hidden border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  {/* Thumbnail placeholder */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <div className="aspect-video bg-secondary flex items-center justify-center relative">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <div className="h-16 w-16 rounded-full bg-[hsl(220,76%,49%)] flex items-center justify-center group-hover:scale-110 transition-transform">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      <Play className="h-7 w-7 text-background fill-background ml-1" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <span className="absolute bottom-2 right-2 bg-foreground/80 text-background text-xs px-2 py-0.5 rounded">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      {v.duration}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    </span>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <div className="p-4">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <h3 className="font-semibold text-foreground">{v.title}</h3>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              ))}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <div className="text-center mt-10">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <Button variant="outline" className="rounded-none border-foreground text-foreground hover:bg-accent gap-2">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                View All Videos
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <ArrowRight className="h-4 w-4" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </Button>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </section>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        {/* ── SECTION 4 — TALK TO A HUMAN ── */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <section className="py-20 md:py-24 bg-background">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <div
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            ref={humanSection.ref}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            className={`container mx-auto px-4 transition-all duration-700 ${humanSection.revealClass}`}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          >
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              Can't Find What You're Looking For?
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </h2>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <p className="text-lg text-muted-foreground text-center mb-14 max-w-2xl mx-auto">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              Our Lagos-based support team is here to help. Pick the channel that works best for you.
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              {/* WhatsApp */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <div className="bg-background rounded-xl border border-border p-8 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <MessageCircle className="h-10 w-10 text-[hsl(142,70%,45%)] mx-auto mb-4" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <h3 className="text-lg font-bold text-foreground mb-2">WhatsApp Support</h3>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <p className="text-sm text-muted-foreground mb-6">Fastest response — usually under 30 minutes during office hours.</p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <Button variant="hero" size="default" className="w-full gap-2">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <MessageCircle className="h-4 w-4" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    Message Us on WhatsApp
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  </Button>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </a>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              {/* Email */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <div className="bg-background rounded-xl border border-border p-8 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <Mail className="h-10 w-10 text-[hsl(220,76%,49%)] mx-auto mb-4" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <h3 className="text-lg font-bold text-foreground mb-2">Email Support</h3>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <p className="text-sm text-muted-foreground mb-6">Detailed inquiries — we respond within 24 hours on weekdays.</p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <a href="mailto:support@intraverse.com">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <Button variant="outline" size="default" className="w-full rounded-none border-foreground text-foreground hover:bg-accent">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    Email support@intraverse.com
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  </Button>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </a>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              {/* Phone */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <div className="bg-background rounded-xl border border-border p-8 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <Phone className="h-10 w-10 text-[hsl(220,76%,49%)] mx-auto mb-4" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <h3 className="text-lg font-bold text-foreground mb-2">Phone Support</h3>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <p className="text-sm text-muted-foreground mb-6">Speak with a human — available during business hours WAT.</p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <a href="tel:+2349030002629">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <Button variant="outline" size="default" className="w-full rounded-none border-foreground text-foreground hover:bg-accent">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    Call +234 903 000 2629
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  </Button>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </a>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <p className="text-sm text-muted-foreground text-center mt-8">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              Office hours: Monday–Friday, 8am–6pm WAT • Weekend WhatsApp support available for urgent matters
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </section>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        {/* ── FINAL CTA ── */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <section className="bg-secondary text-secondary-foreground py-20 md:py-24">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <div
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            ref={ctaSection.ref}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            className={`container mx-auto px-4 max-w-3xl text-center transition-all duration-700 ${ctaSection.revealClass}`}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          >
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              Need More Than Help? Talk to Sales.
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </h2>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <p className="text-lg text-secondary-foreground/70 mb-10 max-w-2xl mx-auto">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              If you're evaluating Intraverse, exploring a partnership, or considering an enterprise plan, our sales team can help you figure out the right fit.
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <Link to="/contact">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <Button size="xl" className="w-full sm:w-auto bg-background text-foreground hover:bg-background/90 rounded-none font-semibold">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  Book a Demo
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </Button>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </Link>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <Link to="/contact">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <Button variant="outline" size="xl" className="w-full sm:w-auto rounded-none border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  Talk to Sales
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </Button>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </Link>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </section>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      </main>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <Footer />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <WhatsAppFab />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    </>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  );
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
}