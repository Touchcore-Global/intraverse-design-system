import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, MapPin, Clock, Calendar } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

export const ContactSidebar = () => (
  <div className="lg:col-span-2 space-y-6">
    {/* Quick contact cards */}
    <div className="bg-accent rounded-2xl p-6 space-y-5">
      <h3 className="h3-global text-foreground">Quick Contact</h3>

      <a href="mailto:hello@intraverse.africa" className="flex items-start gap-3 group">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
          <Mail className="w-5 h-5 text-primary" />
        </div>
        <div>
          <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
            hello@intraverse.africa
          </p>
          <p className="text-xs text-muted-foreground">General enquiries</p>
        </div>
      </a>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-start gap-3 group"
      >
        <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
          <MessageCircle className="w-5 h-5 text-green-600" />
        </div>
        <div>
          <p className="text-sm font-medium text-foreground group-hover:text-green-600 transition-colors">
            Chat on WhatsApp
          </p>
          <p className="text-xs text-muted-foreground">Quick responses, real humans</p>
        </div>
      </a>

      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
          <Clock className="w-5 h-5 text-primary" />
        </div>
        <div>
          <p className="text-sm font-medium text-foreground">Response Time</p>
          <p className="text-xs text-muted-foreground">Within 24 hours on business days</p>
        </div>
      </div>
    </div>

    {/* Book a demo CTA */}
    <div className="bg-foreground text-background rounded-2xl p-6">
      <h3 className="h3-global mb-2">Want a Live Demo?</h3>
      <p className="text-sm text-background/70 mb-4">
        See Intraverse in action. We'll walk you through the platform tailored to your business needs.
      </p>
      <ul className="space-y-2 mb-6 text-sm text-background/80">
        <li className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          30-minute personalised walkthrough
        </li>
        <li className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          See real inventory and pricing
        </li>
        <li className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          Get your questions answered live
        </li>
      </ul>
      <Button
        asChild
        variant="secondary"
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
      >
        <a
          href="https://business.intraverse.app/bookings/demo#/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Calendar className="w-4 h-4 mr-2" />
          Book a Demo
        </a>
      </Button>
    </div>

    {/* Offices */}
    <div className="bg-accent rounded-2xl p-6 space-y-5">
      <h3 className="h3-global text-foreground">Registered Locations</h3>

      {[
        { label: "Lagos, Nigeria (HQ)", detail: "14b Wole Ariyo Street, Lekki Phase 1, Lagos, Nigeria" },
        { label: "London, United Kingdom" },
        { label: "Delaware, United States" },
        { label: "Dubai, UAE" },
      ].map((loc) => (
        <div key={loc.label} className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
            <MapPin className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">{loc.label}</p>
            {loc.detail && (
              <p className="text-xs text-muted-foreground">{loc.detail}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);
