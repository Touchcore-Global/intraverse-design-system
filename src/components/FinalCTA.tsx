import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MessageCircle } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
          200+ Agents Chose Intraverse. See Why in 15 Minutes.
        </h2>
        <p className="max-w-2xl mx-auto mb-10 text-primary-foreground/80 text-sm md:text-base">
          Book a 15-minute demo and see how Intraverse can help you sell more flights, hotels, tours,
          and packages from one platform. No commitment. No pressure.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            variant="outline"
            size="xl"
            className="cta-responsive min-h-[48px] bg-primary-foreground text-primary border-primary-foreground hover:bg-primary-foreground/90 hover:text-primary rounded-full font-semibold"
          >
            Book a Free Demo
          </Button>
          <Button
            variant="outline"
            size="xl"
            className="cta-responsive min-h-[48px] border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary rounded-full font-semibold"
          >
            <MessageCircle className="h-5 w-5" />
            Chat on WhatsApp
          </Button>
        </div>

        {/* Demo form */}
        <div className="max-w-md mx-auto bg-primary-foreground/10 backdrop-blur rounded-xl p-6 md:p-8">
          <form className="space-y-4 text-left" onSubmit={(e) => e.preventDefault()}>
            <div>
              <Label htmlFor="name" className="text-primary-foreground text-sm">Name</Label>
              <Input
                id="name"
                placeholder="Your full name"
                className="mt-1 bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50"
              />
            </div>
            <div>
              <Label htmlFor="agency" className="text-primary-foreground text-sm">Agency Name</Label>
              <Input
                id="agency"
                placeholder="Your agency or company"
                className="mt-1 bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50"
              />
            </div>
            <div>
              <Label htmlFor="phone" className="text-primary-foreground text-sm">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+234..."
                className="mt-1 bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50"
              />
            </div>
            <div>
              <Label htmlFor="demo-time" className="text-primary-foreground text-sm">Preferred Demo Time</Label>
              <Input
                id="demo-time"
                placeholder="e.g. Monday 10am WAT"
                className="mt-1 bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50"
              />
            </div>
            <Button
              type="submit"
              className="w-full min-h-[48px] bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-full font-semibold"
            >
              Request a Demo
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
