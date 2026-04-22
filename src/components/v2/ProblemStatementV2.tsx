import { Card, CardContent } from "@/components/ui/card";
import { Globe, Ticket, Wallet, Cog, RefreshCcw, Rocket, LucideIcon } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";
import { useEffect, useState } from "react";

type CardData = {
  icon: LucideIcon;
  headline: string;
  subheading: string;
  content: string;
  gradient: string;
  iconBg: string;
};

const cards: CardData[] = [
  {
    icon: Globe,
    headline: "Access Global Travel Inventory. Sell Without Limits.",
    subheading: "Unlock flights, hotels, and travel services from multiple suppliers—all in one platform.",
    content: "Stop juggling multiple supplier contracts and limited inventory. Intraverse connects you to global travel content through GDS integrations and trusted partners—giving you access to real-time availability, competitive pricing, and both published and private fares, all in one place.",
    gradient: "linear-gradient(135deg, hsl(220 95% 96%), hsl(280 90% 97%))",
    iconBg: "linear-gradient(135deg, hsl(220 95% 55%), hsl(280 90% 60%))",
  },
  {
    icon: Ticket,
    headline: "Issue Tickets Anytime. Never Miss a Sale.",
    subheading: "Your business doesn't sleep—your ticketing shouldn't either.",
    content: "Intraverse enables instant ticket issuance around the clock, removing dependency on supplier availability. Automated workflows ensure faster confirmations, helping you secure bookings immediately and deliver a seamless experience to your customers.",
    gradient: "linear-gradient(135deg, hsl(35 95% 95%), hsl(15 95% 96%))",
    iconBg: "linear-gradient(135deg, hsl(35 95% 55%), hsl(15 95% 60%))",
  },
  {
    icon: Wallet,
    headline: "Sell More Travel. Worry Less About Cash.",
    subheading: "Flexible payment infrastructure designed for modern travel businesses.",
    content: "With wallet-based transactions and seamless payment flows, Intraverse reduces capital constraints and speeds up booking turnaround. Built to support flexible and split payments, it empowers you to grow your business without being limited by cash flow.",
    gradient: "linear-gradient(135deg, hsl(150 80% 95%), hsl(180 80% 96%))",
    iconBg: "linear-gradient(135deg, hsl(150 80% 40%), hsl(180 80% 45%))",
  },
  {
    icon: Cog,
    headline: "Automate Your Travel Business. Scale Without Stress.",
    subheading: "Eliminate manual processes and run a smarter operation.",
    content: "Intraverse automates core travel operations—from ticketing to booking management—reducing errors and manual workload. This allows you to operate faster, scale efficiently, and focus more on growth than administration.",
    gradient: "linear-gradient(135deg, hsl(280 90% 96%), hsl(330 90% 96%))",
    iconBg: "linear-gradient(135deg, hsl(280 90% 60%), hsl(330 90% 60%))",
  },
  {
    icon: RefreshCcw,
    headline: "Stay in Control—Even After the Ticket is Issued.",
    subheading: "Manage changes, refunds, and more—without delays.",
    content: "Manage post-ticketing processes with ease, including reissues, refunds, name corrections, and ancillary services. Intraverse gives you the tools to respond quickly to customer needs while maintaining full control over every booking.",
    gradient: "linear-gradient(135deg, hsl(190 95% 95%), hsl(220 95% 96%))",
    iconBg: "linear-gradient(135deg, hsl(190 95% 50%), hsl(220 95% 55%))",
  },
  {
    icon: Rocket,
    headline: "Start a Travel Business. No Barriers.",
    subheading: "Whether you're an agent or just getting started, Intraverse gives you everything you need.",
    content: "Intraverse removes traditional barriers to entry by providing ready-to-use infrastructure, access to global inventory, and white-label tools. Whether you're an experienced agent or a new entrant, you can start, run, and scale a travel business without needing IATA accreditation or prior experience.",
    gradient: "linear-gradient(135deg, hsl(330 90% 96%), hsl(15 95% 95%))",
    iconBg: "linear-gradient(135deg, hsl(330 90% 60%), hsl(15 95% 60%))",
  },
];

const FeatureCard = ({ card }: { card: CardData }) => (
  <Card className="border-0 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full overflow-hidden" style={{ background: card.gradient }}>
    <CardContent className="p-8 md:p-10">
      <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md" style={{ background: card.iconBg }}>
        <card.icon className="h-8 w-8 text-white" />
      </div>
      <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">{card.headline}</h3>
      <p className="text-base font-medium mb-4" style={{ color: "hsl(280 60% 35%)" }}>
        {card.subheading}
      </p>
      <p className="text-base text-muted-foreground leading-relaxed">{card.content}</p>
    </CardContent>
  </Card>
);

export const ProblemStatementV2 = () => {
  const { ref, revealClass } = useScrollReveal();
  const isMobile = useIsMobile();

  return (
    <section className="pt-10 pb-7 md:pt-20 md:pb-14 bg-background">
      <div ref={ref} className={`container mx-auto px-4 md:pl-[100px] transition-all duration-700 ease-out ${revealClass}`}>
        <h2 className="text-center md:text-left mb-12 text-black">
          Built to Meet Industry's Demands
        </h2>

        <Carousel opts={{ align: "start", loop: true }} className="w-full md:px-12">
          <CarouselContent className="-ml-3 md:-ml-6">
            {cards.map((card, index) => (
              <CarouselItem
                key={index}
                className={isMobile ? "pl-3 basis-[85%]" : "pl-6 basis-1/2"}
              >
                <FeatureCard card={card} />
              </CarouselItem>
            ))}
          </CarouselContent>
          {!isMobile && (
            <>
              <CarouselPrevious className="-left-2" />
              <CarouselNext className="-right-2" />
            </>
          )}
        </Carousel>
      </div>
    </section>
  );
};
