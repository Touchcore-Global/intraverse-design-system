import { Card, CardContent } from "@/components/ui/card";
import { Globe, Ticket, Wallet, Cog, RefreshCcw, Rocket } from "lucide-react";
import { LucideIcon } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";

const cards: { icon: LucideIcon; headline: string; subheading: string; content: string }[] = [
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

const FeatureCard = ({ card }: { card: typeof cards[0] }) => (
  <Card className="border-0 bg-card shadow-sm hover:shadow-md transition-shadow h-full">
    <CardContent className="p-6">
      <card.icon className="h-8 w-8 text-primary mb-4" />
      <h3 className="h3-global text-foreground mb-2">
        {card.headline}
      </h3>
      <p className="text-sm font-medium text-primary mb-3">
        {card.subheading}
      </p>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {card.content}
      </p>
    </CardContent>
  </Card>
);

export const ProblemStatement = () => {
  const { ref, revealClass } = useScrollReveal();
  const isMobile = useIsMobile();

  return (
    <section className="pt-10 pb-7 md:pt-20 md:pb-14 bg-background">
      <div ref={ref} className={`container mx-auto px-4 md:pl-[100px] transition-all duration-700 ease-out ${revealClass}`}>
        <h2 className="text-center md:text-left mb-4">
          Start. Manage.<br />Scale your travel<br />business
        </h2>
        <p className="text-center md:text-left mb-12 text-base md:text-lg text-muted-foreground max-w-3xl">
          Intraverse is the easiest way for anyone to launch and run a travel business in Africa.
        </p>

        {isMobile ? (
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-3">
              {cards.map((card, index) => (
                <CarouselItem key={index} className="pl-3 basis-[85%]">
                  <FeatureCard card={card} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <FeatureCard key={index} card={card} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
