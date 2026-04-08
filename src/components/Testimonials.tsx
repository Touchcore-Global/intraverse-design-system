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
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-section mb-12">Don't Take Our Word for It</h2>

        <div className="max-w-4xl mx-auto">
          <Carousel opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {testimonials.map((t, i) => (
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                  <div className="brand-card h-full flex flex-col items-center text-center">
                    {/* Photo placeholder */}
                    <div className="w-16 h-16 rounded-full bg-muted mb-4" aria-hidden="true" />
                    <p className="italic text-muted-foreground text-sm leading-relaxed flex-1 mb-4">
                      "{t.quote}"
                    </p>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{t.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {t.agency} — {t.city}
                      </p>
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
