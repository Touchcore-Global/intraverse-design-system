import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  Rocket, Users, Heart, Globe, Zap, MapPin, Briefcase,
  ArrowRight, Clock, GraduationCap, Coffee, Plane,
} from "lucide-react";

/* ---------- DATA ---------- */

const values = [
  { icon: Rocket, title: "Move Fast, Ship Often", description: "We bias toward action. Small team, big impact — every commit counts." },
  { icon: Users, title: "Customer-Obsessed", description: "We build for the agents, independents, and developers who rely on us daily." },
  { icon: Heart, title: "Own It End-to-End", description: "Everyone owns outcomes. No hand-offs into the void — see it through." },
  { icon: Globe, title: "Africa-First, Global Standard", description: "We build from Lagos for the continent, at world-class quality." },
  { icon: Zap, title: "Default to Transparency", description: "Open books, honest feedback, clear context. Trust scales better than control." },
  { icon: GraduationCap, title: "Always Learning", description: "We invest in growth — yours and ours. Curiosity is a core trait here." },
];

const perks = [
  { icon: MapPin, label: "Lagos HQ / Hybrid" },
  { icon: Clock, label: "Flexible Hours" },
  { icon: Plane, label: "Travel Benefits" },
  { icon: Coffee, label: "Learning Budget" },
  { icon: Heart, label: "Health Coverage" },
  { icon: GraduationCap, label: "Conference Stipend" },
];

interface Role {
  title: string;
  team: string;
  location: string;
  type: string;
}

const openRoles: Role[] = [
  { title: "Senior Frontend Engineer", team: "Engineering", location: "Lagos / Remote", type: "Full-time" },
  { title: "Backend Engineer (Node / Go)", team: "Engineering", location: "Lagos / Remote", type: "Full-time" },
  { title: "Product Designer", team: "Product", location: "Lagos / Remote", type: "Full-time" },
  { title: "Growth Marketing Lead", team: "Marketing", location: "Lagos", type: "Full-time" },
  { title: "Customer Success Manager", team: "Operations", location: "Lagos", type: "Full-time" },
];

/* ---------- COMPONENTS ---------- */

function HeroSection() {
  const { ref, revealClass } = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-secondary text-secondary-foreground overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />

      <div ref={ref} className={`container mx-auto px-4 max-w-4xl text-center relative z-10 transition-all duration-700 ${revealClass}`}>
        <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-primary mb-6">
          Careers at Intraverse
        </span>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-secondary-foreground">
          Join the Team Building Africa's Travel Infrastructure
        </h1>

        <p className="text-lg md:text-xl text-secondary-foreground/70 max-w-3xl mx-auto mb-10 leading-relaxed">
          We're an Africa-first travel technology company headquartered in Lagos, building the platform that travel agents, independents, corporates, fintechs, and developers across the continent will rely on for decades. If you want your work to shape how an entire industry operates — across an entire continent — this is the place to do it.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#open-roles">
            <Button variant="hero" size="xl" className="bg-primary text-primary-foreground hover:bg-primary/90">
              View Open Roles
            </Button>
          </a>
          <a href="#culture">
            <Button variant="outline" size="xl" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10">
              Learn About Our Culture
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

function CultureSection() {
  const { ref, revealClass } = useScrollReveal();

  return (
    <section id="culture" className="py-20 bg-background">
      <div ref={ref} className={`container mx-auto px-4 max-w-6xl transition-all duration-700 ${revealClass}`}>
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">
            Our Culture
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            How We Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're a small, fast-moving team solving real problems for travel professionals across Africa. Here's what drives us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <div key={i} className="brand-card p-6 rounded-xl hover:shadow-lg transition-shadow">
              <v.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PerksSection() {
  const { ref, revealClass } = useScrollReveal();

  return (
    <section className="py-20 section-alt">
      <div ref={ref} className={`container mx-auto px-4 max-w-4xl text-center transition-all duration-700 ${revealClass}`}>
        <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">
          Benefits
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-12">
          Perks of Working Here
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {perks.map((p, i) => (
            <div key={i} className="flex flex-col items-center gap-3 p-6 brand-card rounded-xl">
              <p.icon className="h-8 w-8 text-primary" />
              <span className="font-semibold text-foreground text-sm">{p.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OpenRolesSection() {
  const { ref, revealClass } = useScrollReveal();

  return (
    <section id="open-roles" className="py-20 bg-background">
      <div ref={ref} className={`container mx-auto px-4 max-w-4xl transition-all duration-700 ${revealClass}`}>
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">
            Open Roles
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Current Openings
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're hiring across engineering, product, and operations. If you don't see a role that fits, reach out anyway — we're always looking for exceptional people.
          </p>
        </div>

        <div className="space-y-4">
          {openRoles.map((role, i) => (
            <a
              key={i}
              href="/contact"
              className="flex items-center justify-between p-5 brand-card rounded-xl hover:shadow-lg transition-all group"
            >
              <div>
                <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">{role.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {role.team} · {role.location} · {role.type}
                </p>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Don't see a fit? We'd still love to hear from you.</p>
          <a href="/contact">
            <Button variant="outline" size="lg" className="border-foreground text-foreground hover:bg-accent">
              <Briefcase className="h-4 w-4 mr-2" />
              Send a General Application
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- PAGE ---------- */

export default function Careers() {
  useEffect(() => {
    document.title = "Careers | Build Africa's Travel Infrastructure | Intraverse";
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[property="${name}"]`) || document.querySelector(`meta[name="${name}"]`);
      if (!el) { el = document.createElement("meta"); (el as HTMLMetaElement).setAttribute(name.startsWith("og:") ? "property" : "name", name); document.head.appendChild(el); }
      (el as HTMLMetaElement).setAttribute("content", content);
    };
    setMeta("description", "Join Intraverse — the Africa-first travel technology company building infrastructure for agents, independents, corporates, and developers across the continent.");
    setMeta("og:title", "Careers at Intraverse — Join the Team Building Africa's Travel Infrastructure");
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <CultureSection />
        <PerksSection />
        <OpenRolesSection />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
