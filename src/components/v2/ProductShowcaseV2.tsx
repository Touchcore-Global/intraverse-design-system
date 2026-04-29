import { useRef, useState, useEffect } from "react";
import { LayoutDashboard, Globe, Building2, Rocket, Wallet, Link2, ChevronLeft, ChevronRight, LucideIcon } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";

type Product = {
  icon: LucideIcon;
  title: string;
  body: string;
  cta: string;
  label: string;
  href: string;
  isNew?: boolean;
  gradient: string;
  accent: string;
};

const products: Product[] = [
  {
    icon: LayoutDashboard,
    title: "Every Flight. Every Hotel. Every Tour. One Dashboard.",
    body: "Aggregated flight inventory from GDS, NDC, consolidators, and aggregators. Hotels and tours from leading global suppliers. Compare prices across every source and book in minutes.",
    cta: "Book a Demo →",
    label: "Agent Selling Platform",
    href: "/agent-platform",
    gradient: "linear-gradient(135deg, hsl(220 95% 55%), hsl(280 90% 60%))",
    accent: "hsl(220 95% 55%)",
  },
  {
    icon: Globe,
    title: "Your Brand. Your Website. Bookings While You Sleep.",
    body: "A fully branded, booking-enabled website for your agency at $50/month. No developer needed. Your customers search, book, and pay directly.",
    cta: "See Travx →",
    label: "Travx",
    href: "/travx",
    gradient: "linear-gradient(135deg, hsl(190 95% 50%), hsl(220 95% 55%))",
    accent: "hsl(190 95% 45%)",
  },
  {
    icon: Building2,
    title: "Take Control of Your Company's Travel Spend",
    body: "Approval workflows, policy enforcement, consolidated billing, and full reporting - built for corporates managing employee travel.",
    cta: "Book a Demo →",
    label: "CoopX",
    href: "/coopx",
    gradient: "linear-gradient(135deg, hsl(150 80% 40%), hsl(180 80% 45%))",
    accent: "hsl(150 80% 40%)",
  },
  {
    icon: Rocket,
    title: "Start Earning in Travel. No Agency Required.",
    body: "Access real IATA-backed technology. Sell flights, hotels, and tours from global suppliers. Earn commissions on every booking. No experience needed.",
    cta: "Join the Programme →",
    label: "Independents Programme",
    href: "/independents",
    gradient: "linear-gradient(135deg, hsl(15 95% 60%), hsl(35 95% 60%))",
    accent: "hsl(15 95% 55%)",
  },
  {
    icon: Link2,
    title: "Sell Travel Without a Website. Just Share a Link.",
    body: "Generate a shareable booking link for any flight, hotel, or package. Send it on WhatsApp, social media, or email. Your customer clicks, books, and pays - and you earn the commission. No website, no app, no tech skills required.",
    cta: "Learn About Travel Links →",
    label: "Travel Links",
    href: "/products/travel-links",
    isNew: true,
    gradient: "linear-gradient(135deg, hsl(330 90% 60%), hsl(280 90% 60%))",
    accent: "hsl(330 90% 55%)",
  },
  {
    icon: Wallet,
    title: "Close the Sale. Even When Your Customer Doesn't Have the Full Amount.",
    body: "Fare Lock and Pay Later options let your customers secure today's fare and pay in instalments. You close the deal. They get their trip.",
    cta: "Learn About Odiopay →",
    label: "Odiopay (BNPL)",
    href: "/supplier-engine",
    gradient: "linear-gradient(135deg, hsl(280 90% 55%), hsl(330 90% 60%))",
    accent: "hsl(280 90% 55%)",
  },
];

export const ProductShowcaseV2 = () => {
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

  const renderCard = (product: Product) => {
    const Icon = product.icon;
    return (
      <div
        key={product.label}
        className="rounded-xl p-[2px] flex flex-col flex-1 hover:-translate-y-1 transition-transform duration-300"
        style={{ background: product.gradient }}
      >
        <div className="bg-white rounded-[10px] p-6 md:p-8 flex flex-col flex-1 relative h-full">
          {product.isNew && (
            <span
              className="absolute top-4 right-4 inline-flex px-2 py-0.5 rounded-full text-[11px] font-bold uppercase text-white shadow"
              style={{ background: "linear-gradient(90deg, hsl(150 80% 40%), hsl(180 80% 45%))" }}
            >
              🆕 New
            </span>
          )}
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-md"
            style={{ background: product.gradient }}
          >
            <Icon className="w-6 h-6 text-white" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: product.accent }}>
            {product.label}
          </span>
          <h3 className="h3-global mb-3">{product.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed flex-1">{product.body}</p>
          <a href={product.href} className="mt-4 text-sm font-semibold hover:underline inline-block" style={{ color: product.accent }}>
            {product.cta}
          </a>
        </div>
      </div>
    );
  };

  if (isMobile) {
    return (
      <section
        className="py-12"
        style={{ background: "linear-gradient(135deg, hsl(280 90% 97%) 0%, hsl(220 95% 96%) 50%, hsl(190 90% 96%) 100%)" }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-center text-foreground mb-8">One Platform - Everything You Need To Sell Travel</h2>
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

  const rows = 2;
  const grid: (Product | null)[][] = Array.from({ length: rows }, () => []);
  products.forEach((p, i) => {
    grid[i % rows].push(p);
  });
  const maxLen = Math.max(...grid.map((r) => r.length));
  grid.forEach((r) => {
    while (r.length < maxLen) r.push(null);
  });

  return (
    <section
      className="py-20"
      style={{
        background:
          "linear-gradient(135deg, hsl(280 90% 97%) 0%, hsl(220 95% 96%) 33%, hsl(190 90% 96%) 66%, hsl(330 90% 97%) 100%)",
        backgroundSize: "200% 200%",
        animation: "gradient-shift 14s ease infinite",
      }}
    >
      <div className="container mx-auto px-4 md:pl-[100px]">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 md:mb-12">
          <h2
            className="text-left max-w-4xl text-black"
            style={{
              fontSize: "clamp(2rem, 9vw, 6rem)",
              fontWeight: 660,
              letterSpacing: "-0.03em",
              lineHeight: 1.0416666667,
            }}
          >
            Every tool you need to sell travel easily
          </h2>

          <div className="flex gap-2 shrink-0 md:ml-8">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center transition-all hover:shadow-md disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center transition-all hover:shadow-md disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>

        <div ref={scrollRef} className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          <div className="flex gap-6" style={{ width: "max-content" }}>
            {Array.from({ length: maxLen }, (_, colIdx) => (
              <div key={colIdx} className="flex flex-col gap-6 shrink-0 w-[calc(50vw-80px)] max-w-[500px] min-w-[300px]">
                {grid.map((row) => {
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
