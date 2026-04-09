import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote: "[Testimonial quote from agent — replace with real quote]",
    name: "Agent Name",
    agency: "Agency Name",
    city: "Lagos",
  },
  {
    quote: "[Testimonial quote from agent — replace with real quote]",
    name: "Agent Name",
    agency: "Agency Name",
    city: "Abuja",
  },
  {
    quote: "[Testimonial quote from agent — replace with real quote]",
    name: "Agent Name",
    agency: "Agency Name",
    city: "Port Harcourt",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
          Don't Take Our Word for It
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Hear from travel professionals already growing with Intraverse.
        </p>

        <div className="max-w-5xl mx-auto">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {testimonials.map((t, i) => (
                <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
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
