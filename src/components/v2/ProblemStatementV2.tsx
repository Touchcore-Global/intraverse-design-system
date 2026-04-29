import { Card, CardContent } from "@/components/ui/card";
import { Globe, Ticket, Wallet, Cog, RefreshCcw, Rocket, LucideIcon } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";
import { useEffect, useState, type CSSProperties } from "react";

type CardData = {
  icon: LucideIcon;
  headline: string;
  subheading: string;
  content: string;
};

const cards: CardData[] = [
  {
    icon: Globe,
    headline: "Access Global Travel Inventory. Sell Without Limits.",
    subheading: "Unlock flights, hotels, and travel services from multiple suppliers-all in one platform.",
    content: "Stop juggling multiple supplier contracts and limited inventory. Intraverse connects you to global travel content through GDS integrations and trusted partners-giving you access to real-time availability, competitive pricing, and both published and private fares, all in one place.",
  },
  {
    icon: Ticket,
    headline: "Issue Tickets Anytime. Never Miss a Sale.",
    subheading: "Your business doesn't sleep-your ticketing shouldn't either.",
    content: "Intraverse enables instant ticket issuance around the clock, removing dependency on supplier availability. Automated workflows ensure faster confirmations, helping you secure bookings immediately and deliver a seamless experience to your customers.",
  },
  {
    icon: Wallet,
    headline: "Sell More Travel. Worry Less About Cash.",
    subheading: "Flexible payment infrastructure designed for modern travel businesses.",
    content: "With wallet-based transactions and seamless payment flows, Intraverse reduces capital constraints and speeds up booking turnaround. Built to support flexible and split payments, it empowers you to grow your business without being limited by cash flow.",
  },
  {
    icon: Cog,
    headline: "Automate Your Travel Business. Scale Without Stress.",
    subheading: "Eliminate manual processes and run a smarter operation.",
    content: "Intraverse automates core travel operations-from ticketing to booking management-reducing errors and manual workload. This allows you to operate faster, scale efficiently, and focus more on growth than administration.",
  },
  {
    icon: RefreshCcw,
    headline: "Stay in Control-Even After the Ticket is Issued.",
    subheading: "Manage changes, refunds, and more-without delays.",
    content: "Manage post-ticketing processes with ease, including reissues, refunds, name corrections, and ancillary services. Intraverse gives you the tools to respond quickly to customer needs while maintaining full control over every booking.",
  },
  {
    icon: Rocket,
    headline: "Start a Travel Business. No Barriers.",
    subheading: "Whether you're an agent or just getting started, Intraverse gives you everything you need.",
    content: "Intraverse removes traditional barriers to entry by providing ready-to-use infrastructure, access to global inventory, and white-label tools. Whether you're an experienced agent or a new entrant, you can start, run, and scale a travel business without needing IATA accreditation or prior experience.",
  },
];

const FeatureCard = ({ card }: { card: CardData }) => (
  <Card className="border border-border bg-card shadow-sm hover:shadow-md transition-all duration-300 h-full overflow-hidden">
    <CardContent className="p-8 md:p-10">
      <card.icon className="h-10 w-10 mb-6" style={{ color: "hsl(220 95% 55%)" }} strokeWidth={2} />
      <h3 className="h3-global text-foreground mb-3">{card.headline}</h3>
      <p className="text-base font-medium text-muted-foreground mb-4">
        {card.subheading}
      </p>
      <p className="text-base text-muted-foreground leading-relaxed">{card.content}</p>
    </CardContent>
  </Card>
);

export const ProblemStatementV2 = () => {
  const { ref, revealClass } = useScrollReveal();
  const isMobile = useIsMobile();
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);

  useEffect(() => {
    if (!api) return;
    const update = () => setCanScrollPrev(api.canScrollPrev());
    update();
    api.on("select", update);
    api.on("reInit", update);
    return () => {
      api.off("select", update);
      api.off("reInit", update);
    };
  }, [api]);

  // Match the site-wide `container` left edge: padding 2rem, max-width 1400px (centered at 2xl).
  // Mobile: 1rem to match `px-4` used elsewhere.
  const gutterStyle = {
    "--carousel-gutter": "max(1rem, calc((100vw - 1400px) / 2 + 2rem))",
    "--carousel-gutter-md": "max(2rem, calc((100vw - 1400px) / 2 + 2rem))",
  } as CSSProperties;

  return (
    <section className="pt-10 pb-7 md:pt-20 md:pb-14 bg-background" style={gutterStyle}>
      <div ref={ref} className={`transition-all duration-700 ease-out ${revealClass}`}>
        <h2
          className="text-center md:text-left mb-8 md:mb-12 text-black px-4 md:px-0 md:pl-[100px]"
          style={{
            fontSize: "clamp(2rem, 9vw, 6rem)",
            fontWeight: 660,
            letterSpacing: "-0.03em",
            lineHeight: 1.0416666667,
          }}
        >
          Start. Manage.<br />Scale your travel<br />business
        </h2>
        <p className="text-center md:text-left mb-8 md:mb-12 px-4 md:px-0 md:pl-[100px] text-base md:text-lg text-muted-foreground max-w-3xl">
          Intraverse is the easiest way for anyone to launch and run a travel business in Africa with zero upfront cost. Sell using your own branding, access global flights, hotels, tours and packages, and earn revenue - no industry experience required
        </p>

        <Carousel setApi={setApi} opts={{ align: "start" }} className="w-full">
          <CarouselContent className="ml-0 pl-4 pr-4 md:pl-[var(--carousel-gutter-md)] md:pr-[var(--carousel-gutter-md)]">
            {cards.map((card, index) => (
              <CarouselItem
                key={index}
                className={isMobile ? "pl-3 basis-[85%]" : "pl-6 basis-1/3"}
              >
                <FeatureCard card={card} />
              </CarouselItem>
            ))}
          </CarouselContent>
          {!isMobile && (
            <>
              {canScrollPrev && (
                <CarouselPrevious className="left-[calc(var(--carousel-gutter-md)-2.5rem)]" />
              )}
              <CarouselNext className="right-[calc(var(--carousel-gutter-md)-2.5rem)]" />
            </>
          )}
        </Carousel>
      </div>
    </section>
  );
};
