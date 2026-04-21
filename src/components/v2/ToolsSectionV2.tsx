import { useState, useRef, useCallback } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Button } from "@/components/ui/button";

import toolTrips from "@/assets/tool-trips-web.svg";
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
    gradient: "linear-gradient(135deg, hsl(220 95% 60%), hsl(190 90% 55%))",
  },
  {
    emoji: "📱",
    title: "Share Live Itineraries",
    tagline: "Your customers get their trip in real time.",
    body: "Send branded, live-updating itineraries via WhatsApp, email, or link. Flight changes? They see it. Hotel confirmed? They see it. No more PDF chasing.",
    image: toolItineraries,
    gradient: "linear-gradient(135deg, hsl(280 80% 60%), hsl(330 85% 60%))",
  },
  {
    emoji: "💳",
    title: "Get Paid Securely",
    tagline: "Accept card payments and virtual account transfers — instantly.",
    body: "Built-in payment processing via card and virtual account. Your customers pay you directly. Funds hit your wallet in real time. Zero payment headaches.",
    image: toolPayments,
    gradient: "linear-gradient(135deg, hsl(160 75% 45%), hsl(190 85% 50%))",
  },
  {
    emoji: "📊",
    title: "Grow With Real Insights",
    tagline: "Know what's working. Double down on it.",
    body: "Real-time dashboards showing your bookings, revenue, top destinations, customer retention, and conversion rates. Data that actually helps you grow.",
    image: toolInsights,
    gradient: "linear-gradient(135deg, hsl(35 100% 55%), hsl(15 95% 60%))",
  },
  {
    emoji: "📦",
    title: "Create & Sell Your Own Packages",
    tagline: "Turn every customer into a bigger sale.",
    body: "Design custom travel packages — flights + hotels + tours — under your brand. Price them your way. Sell them directly through your Travel Links or website.",
    image: toolPackages,
    gradient: "linear-gradient(135deg, hsl(330 85% 60%), hsl(280 80% 60%))",
  },
  {
    emoji: "🔗",
    title: "Travel Links",
    tagline: "One link. Every trip. Instant bookings.",
    body: "Generate shareable booking links for any trip, package, or deal. Post on WhatsApp, Instagram, or your bio. Customers click, book, and pay. You get the commission.",
    image: toolLinks,
    gradient: "linear-gradient(135deg, hsl(50 95% 55%), hsl(30 95% 55%))",
  },
  {
    emoji: "🏢",
    title: "Setup Workspace",
    tagline: "Your agency's digital HQ.",
    body: "Customise your workspace with your branding, booking preferences, policies, and supplier settings. One place to run everything — built exactly the way you work.",
    image: toolWorkspace,
    gradient: "linear-gradient(135deg, hsl(200 90% 50%), hsl(260 80% 60%))",
  },
  {
    emoji: "👥",
    title: "Manage Team",
    tagline: "Scale without chaos.",
    body: "Add team members with role-based permissions. Track individual performance. Control who can book, approve, and access what. Built for agencies that are growing.",
    image: toolTeam,
    gradient: "linear-gradient(135deg, hsl(290 80% 55%), hsl(220 90% 55%))",
  },
];

export const ToolsSectionV2 = () => {
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
    <section
      className="py-16 md:py-24 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, hsl(190 90% 95%) 0%, hsl(220 95% 95%) 30%, hsl(280 85% 95%) 60%, hsl(330 85% 95%) 100%)",
        backgroundSize: "200% 200%",
        animation: "gradient-shift 14s ease infinite",
      }}
    >
      <div ref={revealRef} className={`container mx-auto px-4 transition-all duration-700 ease-out ${revealClass} relative`} style={{ maxWidth: "1200px" }}>
        <h2 className="text-[32px] md:text-[80px] md:leading-[96px] font-bold text-center mb-4 text-black">
          Every Tool You Need to Sell Travel Like a Pro — Included
        </h2>
        <p className="text-center text-muted-foreground text-lg max-w-[720px] mx-auto mb-12">
          Intraverse isn't just a booking platform. It's a complete toolkit for running and growing
          your travel business. Whether you're an agent, an independent, or a business, every tool
          below is included in your plan — no hidden upgrades, no premium tiers, no extra fees.
        </p>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6">
          <div className="flex flex-row md:flex-col gap-2 md:w-[260px] shrink-0 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0">
            {tools.map((t, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={t.title}
                  onClick={() => handleSwitch(i)}
                  className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 border text-left whitespace-nowrap md:whitespace-normal ${
                    isActive
                      ? "text-primary-foreground border-transparent shadow-lg scale-[1.02]"
                      : "bg-background/80 backdrop-blur text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
                  }`}
                  style={isActive ? { background: t.gradient } : undefined}
                >
                  <span className="text-lg shrink-0">{t.emoji}</span>
                  <span>{t.title}</span>
                </button>
              );
            })}
          </div>

          <div
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            className={`flex-1 rounded-2xl p-[2px] transition-all duration-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'}`}
            style={{ background: tool.gradient }}
          >
            <div className="rounded-2xl bg-card overflow-hidden h-full">
              <div className="flex flex-col">
                <div className="flex items-center justify-center p-6" style={{ background: tool.gradient }}>
                  <div className="w-full rounded-xl border border-border overflow-hidden shadow-lg bg-background">
                    <div className="flex items-center justify-center aspect-[16/10] bg-background">
                      <img
                        src={tool.image}
                        alt={`${tool.title} screenshot`}
                        loading="lazy"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[32px]">{tool.emoji}</span>
                    <h3
                      className="text-xl md:text-2xl font-bold"
                      style={{
                        background: tool.gradient,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {tool.title}
                    </h3>
                  </div>
                  <p className="text-foreground/80 italic text-sm mb-3 font-medium">{tool.tagline}</p>
                  <p className="text-muted-foreground text-[15px] leading-relaxed">
                    {tool.body}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm mb-4">
            Every tool. Every plan. Every audience. No upgrades required.
          </p>
          <a href="/tools">
            <Button variant="hero" size="xl" className="cta-responsive min-h-[48px] whitespace-normal text-center px-6">
              <span className="hidden sm:inline">Explore All 8 Tools →</span>
              <span className="sm:hidden">Explore All Tools →</span>
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
