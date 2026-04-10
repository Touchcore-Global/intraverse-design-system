import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import toolTrips from "@/assets/tool-trips.jpg";
import toolItineraries from "@/assets/tool-itineraries.jpg";
import toolPayments from "@/assets/tool-payments.jpg";
import toolInsights from "@/assets/tool-insights.jpg";
import toolPackages from "@/assets/tool-packages.jpg";
import toolLinks from "@/assets/tool-links.jpg";
import toolWorkspace from "@/assets/tool-workspace.jpg";
import toolTeam from "@/assets/tool-team.jpg";

const tools = [
  {
    emoji: "🗺️",
    title: "Create & Manage Trips",
    tagline: "Build complete trips in minutes, not hours.",
    body: "Bundle flights, hotels, tours, and transfers into a single trip. Manage everything — dates, pricing, passengers, documents — from one clean workspace.",
    image: "/placeholder.svg",
  },
  {
    emoji: "📱",
    title: "Share Live Itineraries",
    tagline: "Your customers get their trip in real time.",
    body: "Send branded, live-updating itineraries via WhatsApp, email, or link. Flight changes? They see it. Hotel confirmed? They see it. No more PDF chasing.",
    image: "/placeholder.svg",
  },
  {
    emoji: "💳",
    title: "Get Paid Securely",
    tagline: "Accept card payments and virtual account transfers — instantly.",
    body: "Built-in payment processing via card and virtual account. Your customers pay you directly. Funds hit your wallet in real time. Zero payment headaches.",
    image: "/placeholder.svg",
  },
  {
    emoji: "📊",
    title: "Grow With Real Insights",
    tagline: "Know what's working. Double down on it.",
    body: "Real-time dashboards showing your bookings, revenue, top destinations, customer retention, and conversion rates. Data that actually helps you grow.",
    image: "/placeholder.svg",
  },
  {
    emoji: "📦",
    title: "Create & Sell Your Own Packages",
    tagline: "Turn every customer into a bigger sale.",
    body: "Design custom travel packages — flights + hotels + tours — under your brand. Price them your way. Sell them directly through your Travel Links or website.",
    image: "/placeholder.svg",
  },
  {
    emoji: "🔗",
    title: "Travel Links",
    tagline: "One link. Every trip. Instant bookings.",
    body: "Generate shareable booking links for any trip, package, or deal. Post on WhatsApp, Instagram, or your bio. Customers click, book, and pay. You get the commission.",
    image: "/placeholder.svg",
  },
  {
    emoji: "🏢",
    title: "Setup Workspace",
    tagline: "Your agency's digital HQ.",
    body: "Customise your workspace with your branding, booking preferences, policies, and supplier settings. One place to run everything — built exactly the way you work.",
    image: "/placeholder.svg",
  },
  {
    emoji: "👥",
    title: "Manage Team",
    tagline: "Scale without chaos.",
    body: "Add team members with role-based permissions. Track individual performance. Control who can book, approve, and access what. Built for agencies that are growing.",
    image: "/placeholder.svg",
  },
];

export const ToolsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const tool = tools[activeIndex];

  const prev = () => setActiveIndex((i) => (i === 0 ? tools.length - 1 : i - 1));
  const next = () => setActiveIndex((i) => (i === tools.length - 1 ? 0 : i + 1));

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4" style={{ maxWidth: "1200px" }}>
        <h2 className="text-[32px] md:text-[48px] font-bold text-foreground text-center mb-4 leading-tight">
          Every Tool You Need to Sell Travel Like a Pro — Included
        </h2>
        <p className="text-center text-muted-foreground text-lg max-w-[720px] mx-auto mb-12">
          Intraverse isn't just a booking platform. It's a complete toolkit for running and growing
          your travel business. Whether you're an agent, an independent, or a business, every tool
          below is included in your plan — no hidden upgrades, no premium tiers, no extra fees.
        </p>

        {/* Tool selector tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tools.map((t, i) => (
            <button
              key={t.title}
              onClick={() => setActiveIndex(i)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                i === activeIndex
                  ? "bg-primary text-primary-foreground border-primary shadow-md"
                  : "bg-background text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
              }`}
            >
              <span className="text-base">{t.emoji}</span>
              <span className="hidden sm:inline">{t.title}</span>
            </button>
          ))}
        </div>

        {/* Slide content */}
        <div className="max-w-5xl mx-auto rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 min-h-[380px]">
            {/* Left: description */}
            <div className="flex flex-col justify-center p-8 md:p-12">
              <span className="text-[48px] mb-4">{tool.emoji}</span>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                {tool.title}
              </h3>
              <p className="text-primary italic text-base mb-4">{tool.tagline}</p>
              <p className="text-muted-foreground text-[15px] leading-relaxed">
                {tool.body}
              </p>
            </div>

            {/* Right: screenshot */}
            <div className="bg-muted/30 flex items-center justify-center p-8">
              <div className="w-full rounded-xl border border-border overflow-hidden shadow-lg bg-background">
                <div className="h-8 bg-muted flex items-center gap-1.5 px-3">
                  <span className="w-3 h-3 rounded-full bg-destructive/60" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400/60" />
                  <span className="w-3 h-3 rounded-full bg-green-400/60" />
                </div>
                <img
                  src={tool.image}
                  alt={`${tool.title} screenshot`}
                  className="w-full aspect-[16/10] object-cover"
                />
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between px-8 py-4 border-t border-border bg-muted/20">
            <button
              onClick={prev}
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>
            <div className="flex gap-1.5">
              {tools.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    i === activeIndex ? "bg-primary w-6" : "bg-border hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm mb-4">
            Every tool. Every plan. Every audience. No upgrades required.
          </p>
          <a href="#demo">
            <Button variant="hero" size="xl" className="cta-responsive min-h-[48px]">
              See how these tools work in action → Book a Demo
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
