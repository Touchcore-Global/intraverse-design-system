import { LayoutDashboard, Globe, Building2, Rocket, Wallet } from "lucide-react";

const products = [
  {
    icon: LayoutDashboard,
    title: "Every Flight. Every Hotel. Every Tour. One Dashboard.",
    body: "Aggregated flight inventory from GDS, NDC, consolidators, and aggregators. Hotels and tours from leading global suppliers. Compare prices across every source and book in minutes.",
    cta: "Book a Demo →",
    label: "Agent Selling Platform",
  },
  {
    icon: Globe,
    title: "Your Brand. Your Website. Bookings While You Sleep.",
    body: "A fully branded, booking-enabled website for your agency at ₦120,000/month. No developer needed. Your customers search, book, and pay directly.",
    cta: "See Travx →",
    label: "Travx",
  },
  {
    icon: Building2,
    title: "Take Control of Your Company's Travel Spend",
    body: "Approval workflows, policy enforcement, consolidated billing, and full reporting — built for Nigerian corporates managing employee travel.",
    cta: "Book a Demo →",
    label: "CoopX",
  },
  {
    icon: Rocket,
    title: "Start Earning in Travel. No Agency Required.",
    body: "Access real IATA-backed technology. Sell flights, hotels, and tours from global suppliers. Earn commissions on every booking. No experience needed.",
    cta: "Join the Programme →",
    label: "Independents Programme",
  },
  {
    icon: Wallet,
    title: "Close the Sale. Even When Your Customer Doesn't Have the Full Amount.",
    body: "Fare Lock and Pay Later options let your customers secure today's fare and pay in instalments. You close the deal. They get their trip.",
    cta: "Learn About Odiopay →",
    label: "Odiopay (BNPL)",
  },
];

export const ProductShowcase = () => {
  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <h2
          className="text-left mb-12 max-w-4xl text-foreground"
          style={{
            fontFamily: '"GitLab Sans", sans-serif',
            fontSize: '80px',
            fontWeight: 660,
            letterSpacing: '-2.88px',
            lineHeight: '100px',
          }}
        >
          One Platform - Everything You Need To Sell Travel
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.label}
                className="brand-card flex flex-col hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                  {product.label}
                </span>
                <h3 className="text-lg font-bold text-foreground mb-3 leading-snug">
                  {product.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {product.body}
                </p>
                <a
                  href="#"
                  className="mt-4 text-sm font-semibold text-primary hover:underline inline-block"
                >
                  {product.cta}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
