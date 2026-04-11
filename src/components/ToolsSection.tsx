import { useState, useRef, useCallback } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Button } from "@/components/ui/button";

import toolTrips from "@/assets/tool-trips.png";
import toolItineraries from "@/assets/tool-itineraries.png";
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
    image: toolTrips,
  },
  {
    emoji: "📱",
    title: "Share Live Itineraries",
    tagline: "Your customers get their trip in real time.",
    body: "Send branded, live-updating itineraries via WhatsApp, email, or link. Flight changes? They see it. Hotel confirmed? They see it. No more PDF chasing.",
    image: toolItineraries,
  },
  {
    emoji: "💳",
    title: "Get Paid Securely",
    tagline: "Accept card payments and virtual account transfers — instantly.",
    body: "Built-in payment processing via card and virtual account. Your customers pay you directly. Funds hit your wallet in real time. Zero payment headaches.",
    image: toolPayments,
  },
  {
    emoji: "📊",
    title: "Grow With Real Insights",
    tagline: "Know what's working. Double down on it.",
    body: "Real-time dashboards showing your bookings, revenue, top destinations, customer retention, and conversion rates. Data that actually helps you grow.",
    image: toolInsights,
  },
  {
    emoji: "📦",
    title: "Create & Sell Your Own Packages",
    tagline: "Turn every customer into a bigger sale.",
    body: "Design custom travel packages — flights + hotels + tours — under your brand. Price them your way. Sell them directly through your Travel Links or website.",
    image: toolPackages,
  },
  {
    emoji: "🔗",
    title: "Travel Links",
    tagline: "One link. Every trip. Instant bookings.",
    body: "Generate shareable booking links for any trip, package, or deal. Post on WhatsApp, Instagram, or your bio. Customers click, book, and pay. You get the commission.",
    image: toolLinks,
  },
  {
    emoji: "🏢",
    title: "Setup Workspace",
    tagline: "Your agency's digital HQ.",
    body: "Customise your workspace with your branding, booking preferences, policies, and supplier settings. One place to run everything — built exactly the way you work.",
    image: toolWorkspace,
  },
  {
    emoji: "👥",
    title: "Manage Team",
    tagline: "Scale without chaos.",
    body: "Add team members with role-based permissions. Track individual performance. Control who can book, approve, and access what. Built for agencies that are growing.",
    image: toolTeam,
  },
];

export const ToolsSection = () => {
  const { ref: revealRef, revealClass } = useScrollReveal();
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [displayIndex, setDisplayIndex] = useState(0);
  const tool = tools[displayIndex];

  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const swiping = useRef(false);

  const handleSwitch = useCallback((i: number) => {
    if (i === activeIndex) return;
    setVisible(false);
    setActiveIndex(i);
    setTimeout(() => {
      setDisplayIndex(i);
      setVisible(true);
    }, 200);
  }, [activeIndex]);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
    swiping.current = false;
  }, []);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    if (!touchStart.current) return;
    const dx = e.touches[0].clientX - touchStart.current.x;
    const dy = e.touches[0].clientY - touchStart.current.y;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 10) {
      swiping.current = true;
    }
  }, []);

  const onTouchEnd = useCallback((e: React.TouchEvent) => {
    if (!touchStart.current || !swiping.current) {
      touchStart.current = null;
      return;
    }
    const dx = e.changedTouches[0].clientX - touchStart.current.x;
    touchStart.current = null;
    if (Math.abs(dx) < 40) return;
    if (dx < 0 && activeIndex < tools.length - 1) {
      handleSwitch(activeIndex + 1);
    } else if (dx > 0 && activeIndex > 0) {
      handleSwitch(activeIndex - 1);
    }
  }, [activeIndex, handleSwitch]);


  return (
    <section className="py-16 md:py-24 section-gradient-blue">
      <div ref={revealRef} className={`container mx-auto px-4 transition-all duration-700 ease-out ${revealClass}`} style={{ maxWidth: "1200px" }}>
        <h2 className="text-[32px] md:text-[80px] md:leading-[96px] font-bold text-foreground text-center mb-4">
          Every Tool You Need to Sell Travel Like a Pro — Included
        </h2>
        <p className="text-center text-muted-foreground text-lg max-w-[720px] mx-auto mb-12">
          Intraverse isn't just a booking platform. It's a complete toolkit for running and growing
          your travel business. Whether you're an agent, an independent, or a business, every tool
          below is included in your plan — no hidden upgrades, no premium tiers, no extra fees.
        </p>

        {/* Main layout: tabs on left, content on right */}
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6">
          {/* Left: pill tabs */}
          <div className="flex flex-row md:flex-col gap-2 md:w-[260px] shrink-0 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0">
            {tools.map((t, i) => (
              <button
                key={t.title}
                onClick={() => handleSwitch(i)}
                className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 border text-left whitespace-nowrap md:whitespace-normal ${
                  i === activeIndex
                    ? "bg-primary text-primary-foreground border-primary shadow-md"
                    : "bg-background text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
                }`}
              >
                <span className="text-lg shrink-0">{t.emoji}</span>
                <span>{t.title}</span>
              </button>
            ))}
          </div>

          {/* Right: slide content */}
          <div
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            className={`flex-1 rounded-2xl border border-border bg-card overflow-hidden shadow-sm transition-all duration-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'}`}>
            <div className="flex flex-col">
              {/* Screenshot */}
              <div className="bg-muted/30 flex items-center justify-center p-6">
                <div className="w-full rounded-xl border border-border overflow-hidden shadow-lg bg-background">
                  <div className="h-8 bg-muted flex items-center gap-1.5 px-3">
                    <span className="w-3 h-3 rounded-full bg-destructive/60" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400/60" />
                    <span className="w-3 h-3 rounded-full bg-green-400/60" />
                  </div>
                  <img
                    src={tool.image}
                    alt={`${tool.title} screenshot`}
                    loading="lazy"
                    className="w-full aspect-[16/10] object-contain bg-background"
                  />
                </div>
              </div>

              {/* Description */}
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[32px]">{tool.emoji}</span>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">
                    {tool.title}
                  </h3>
                </div>
                <p className="text-primary italic text-sm mb-3">{tool.tagline}</p>
                <p className="text-muted-foreground text-[15px] leading-relaxed">
                  {tool.body}
                </p>
              </div>
            </div>
          </div>
        </div>


        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm mb-4">
            Every tool. Every plan. Every audience. No upgrades required.
          </p>
          <a href="#demo">
            <Button variant="hero" size="xl" className="cta-responsive min-h-[48px] whitespace-normal text-center px-6">
              <span className="hidden sm:inline">See how these tools work in action → Book a Demo</span>
              <span className="sm:hidden">Book a Demo → See Tools in Action</span>
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
