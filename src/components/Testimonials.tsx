import { Quote } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const testimonials = [
  {
    quote: "Intraverse transformed how we access inventory. We now offer fares we never had before—our clients love it.",
    name: "Adaeze O.",
    agency: "Skyline Travels",
    city: "Lagos",
  },
  {
    quote: "24/7 ticketing changed everything. We no longer lose bookings because a supplier office was closed.",
    name: "Ibrahim M.",
    agency: "Gateway Travel",
    city: "Abuja",
  },
  {
    quote: "The wallet system freed up our cash flow. We can process more bookings without waiting on payments to clear.",
    name: "Chioma E.",
    agency: "Prestige Tours",
    city: "Port Harcourt",
  },
  {
    quote: "We cut our manual workload in half. Automation lets us focus on selling, not paperwork.",
    name: "Tunde A.",
    agency: "Royal Wings Travel",
    city: "Ibadan",
  },
  {
    quote: "Handling refunds and reissues used to be a nightmare. Now it's just a few clicks—our customers notice the difference.",
    name: "Fatima B.",
    agency: "Sahara Holidays",
    city: "Kano",
  },
  {
    quote: "I started my travel business with zero experience and no IATA. Intraverse gave me everything I needed from day one.",
    name: "Emeka N.",
    agency: "Nova Travel Co.",
    city: "Enugu",
  },
];

export const Testimonials = () => {
  const { ref, revealClass } = useScrollReveal();
  return (
    <section className="py-20 bg-background">
      <div ref={ref} className={`container mx-auto px-4 lg:px-8 transition-all duration-700 ease-out ${revealClass}`}>

        <div className="max-w-xl mx-auto">
          <Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 4000, stopOnInteraction: false })]} className="w-full">
            <CarouselContent className="-ml-4">
              {testimonials.map((t, i) => (
                <CarouselItem key={i} className="pl-4 basis-full">
                  <div className="border border-border rounded-lg p-6 bg-card hover:shadow-md transition-shadow h-full flex flex-col">
                    <Quote className="h-6 w-6 text-primary/20 mb-4" />
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                      "{t.quote}"
                    </p>
                    <div className="flex items-center gap-3 mt-auto">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{t.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {t.agency} — {t.city}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 md:-left-12" />
            <CarouselNext className="-right-4 md:-right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
