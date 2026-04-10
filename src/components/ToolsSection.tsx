import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const tools = [
  {
    emoji: "🗺️",
    title: "Create & Manage Trips",
    tagline: "Build complete trips in minutes, not hours.",
    body: "Bundle flights, hotels, tours, and transfers into a single trip. Manage everything — dates, pricing, passengers, documents — from one clean workspace.",
  },
  {
    emoji: "📱",
    title: "Share Live Itineraries",
    tagline: "Your customers get their trip in real time.",
    body: "Send branded, live-updating itineraries via WhatsApp, email, or link. Flight changes? They see it. Hotel confirmed? They see it. No more PDF chasing.",
  },
  {
    emoji: "💳",
    title: "Get Paid Securely",
    tagline: "Accept card payments and virtual account transfers — instantly.",
    body: "Built-in payment processing via card and virtual account. Your customers pay you directly. Funds hit your wallet in real time. Zero payment headaches.",
  },
  {
    emoji: "📊",
    title: "Grow With Real Insights",
    tagline: "Know what's working. Double down on it.",
    body: "Real-time dashboards showing your bookings, revenue, top destinations, customer retention, and conversion rates. Data that actually helps you grow.",
  },
  {
    emoji: "📦",
    title: "Create & Sell Your Own Packages",
    tagline: "Turn every customer into a bigger sale.",
    body: "Design custom travel packages — flights + hotels + tours — under your brand. Price them your way. Sell them directly through your Travel Links or website.",
  },
  {
    emoji: "🔗",
    title: "Travel Links",
    tagline: "One link. Every trip. Instant bookings.",
    body: "Generate shareable booking links for any trip, package, or deal. Post on WhatsApp, Instagram, or your bio. Customers click, book, and pay. You get the commission.",
  },
  {
    emoji: "🏢",
    title: "Setup Workspace",
    tagline: "Your agency's digital HQ.",
    body: "Customise your workspace with your branding, booking preferences, policies, and supplier settings. One place to run everything — built exactly the way you work.",
  },
  {
    emoji: "👥",
    title: "Manage Team",
    tagline: "Scale without chaos.",
    body: "Add team members with role-based permissions. Track individual performance. Control who can book, approve, and access what. Built for agencies that are growing.",
  },
];

export const ToolsSection = () => {
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool) => (
            <div
              key={tool.title}
              className="bg-background border border-border rounded-xl p-7 transition-all duration-300 hover:border-primary hover:-translate-y-1"
              style={{
                boxShadow: "none",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 8px 24px rgba(30,97,220,0.10)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              <span className="text-[40px] block mb-4">{tool.emoji}</span>
              <h3 className="text-xl font-bold text-foreground mb-1">{tool.title}</h3>
              <p className="text-primary italic text-sm mb-3">{tool.tagline}</p>
              <p className="text-muted-foreground text-[15px] leading-relaxed">{tool.body}</p>
            </div>
          ))}
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
