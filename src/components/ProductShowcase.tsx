import { useRef, useState, useEffect } from "react";
import { LayoutDashboard, Globe, Building2, Rocket, Wallet, Link2, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";

const products = [
  {
    icon: LayoutDashboard,
    title: "Every Flight. Every Hotel. Every Tour. One Dashboard.",
    body: "Aggregated flight inventory from GDS, NDC, consolidators, and aggregators. Hotels and tours from leading global suppliers. Compare prices across every source and book in minutes.",
    cta: "Book a Demo →",
    label: "Agent Selling Platform",
    href: "/agent-platform",
  },
  {
    icon: Globe,
    title: "Your Brand. Your Website. Bookings While You Sleep.",
    body: "A fully branded, booking-enabled website for your agency at $50/month. No developer needed. Your customers search, book, and pay directly.",
    cta: "See Travx →",
    label: "Travx",
    href: "/travx",
  },
  {
    icon: Building2,
    title: "Take Control of Your Company's Travel Spend",
    body: "Approval workflows, policy enforcement, consolidated billing, and full reporting — built for corporates managing employee travel.",
    cta: "Book a Demo →",
    label: "CoopX",
    href: "/coopx",
  },
  {
    icon: Rocket,
    title: "Start Earning in Travel. No Agency Required.",
    body: "Access real IATA-backed technology. Sell flights, hotels, and tours from global suppliers. Earn commissions on every booking. No experience needed.",
    cta: "Join the Programme →",
    label: "Independents Programme",
    href: "/independents",
  },
  {
    icon: Link2,
    title: "Sell Travel Without a Website. Just Share a Link.",
    body: "Generate a shareable booking link for any flight, hotel, or package. Send it on WhatsApp, social media, or email. Your customer clicks, books, and pays — and you earn the commission. No website, no app, no tech skills required.",
    cta: "Learn About Travel Links →",
    label: "Travel Links",
    href: "/products/travel-links",
    isNew: true,
  },
  {
    icon: Wallet,
    title: "Close the Sale. Even When Your Customer Doesn't Have the Full Amount.",
    body: "Fare Lock and Pay Later options let your customers secure today's fare and pay in instalments. You close the deal. They get their trip.",
    cta: "Learn About Odiopay →",
    label: "Odiopay (BNPL)",
    href: "/supplier-engine",
  },
];

export const ProductShowcase = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const isMobile = useIsMobile();

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState);
    return () => el.removeEventListener("scroll", updateScrollState);
  }, []);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.6;
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  const renderCard = (product: typeof products[0]) => {
    const Icon = product.icon;
    return (
      <div
        key={product.label}
        className="brand-card flex flex-col hover:shadow-lg transition-shadow duration-300 flex-1 relative"
      >
        {product.isNew && (
          <span className="absolute top-4 right-4 inline-flex px-2 py-0.5 rounded-full text-[11px] font-bold uppercase text-white" style={{ backgroundColor: "var(--iv-teal-500)" }}>
            🆕 New
          </span>
        )}
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
          {product.label}
        </span>
        <h3 className="font-bold text-foreground mb-3 leading-tight">
          {product.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed flex-1">
          {product.body}
        </p>
        <a
          href={product.href}
          className="mt-4 text-sm font-semibold text-primary hover:underline inline-block"
        >
          {product.cta}
        </a>
      </div>
    );
  };

  // Mobile: simple vertical stack
  if (isMobile) {
    return (
      <section className="py-12 bg-accent">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-foreground mb-8">
            One Platform - Everything You Need To Sell Travel
          </h2>
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-3">
              {products.map((product) => (
                <CarouselItem key={product.label} className="pl-3 basis-[85%]">
                  {renderCard(product)}
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>
    );
  }

  // Desktop: two-row horizontal scroll
  const rows = 2;
  const grid: (typeof products[0] | null)[][] = Array.from({ length: rows }, () => []);
  products.forEach((p, i) => {
    grid[i % rows].push(p);
  });
  const maxLen = Math.max(...grid.map(r => r.length));
  grid.forEach(r => { while (r.length < maxLen) r.push(null); });

  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4" style={{ paddingLeft: '100px' }}>
        <div className="flex items-end justify-between mb-12">
          <h2
            className="text-left max-w-4xl text-foreground"
          >
            One Platform - Everything You Need To Sell Travel
          </h2>

          <div className="flex gap-2 shrink-0 ml-8">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center transition-colors hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center transition-colors hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>

        <div ref={scrollRef} className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <div className="flex gap-6" style={{ width: 'max-content' }}>
            {Array.from({ length: maxLen }, (_, colIdx) => (
              <div key={colIdx} className="flex flex-col gap-6 shrink-0 w-[calc(50vw-80px)] max-w-[500px] min-w-[300px]">
                {grid.map((row, rowIdx) => {
                  const product = row[colIdx];
                  if (!product) return null;
                  return renderCard(product);
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
