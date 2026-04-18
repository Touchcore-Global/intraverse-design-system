import { Calendar } from "lucide-react";

export const ContactHero = () => (
  <section className="pt-32 pb-16 bg-accent">
    <div className="container mx-auto px-4 text-center max-w-3xl">
      <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
        <Calendar className="w-4 h-4" />
        Book a Demo or Get in Touch
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
        Let's Talk Travel Infrastructure
      </h1>
      <p className="text-lg text-muted-foreground">
        Whether you're ready to see Intraverse in action or just have questions,
        we're here to help. Our team typically responds within 24 hours.
      </p>
    </div>
  </section>
);
