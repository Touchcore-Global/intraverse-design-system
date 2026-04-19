import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  Globe, Plug, Zap, Handshake, Landmark, Code, Plane, Network,
  ArrowRight, Check, X, MessageCircle, ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { WHATSAPP_URL } from "@/lib/constants";

/* ───────── DATA ───────── */

const whyPartner = [
  {
    icon: Globe,
    title: "Continental Reach",
    description:
      "Intraverse already powers travel businesses across multiple African markets. Partnering with us gives you distribution, market access, and a team that understands the continent's travel industry from the inside.",
  },
  {
    icon: Plug,
    title: "Technology That Works",
    description:
      "Our platform is built for real African infrastructure — low-bandwidth environments, multi-currency payments, complex supplier integrations. You're plugging into technology that's been battle-tested, not theoretical.",
  },
  {
    icon: Zap,
    title: "A Team That Moves",
    description:
      "We ship fast, communicate clearly, and make decisions quickly. Partnerships with Intraverse don't get stuck in committee — you'll work with people who have the authority and urgency to move.",
  },
  {
    icon: Handshake,
    title: "Long-Term Thinking",
    description:
      "We're not looking for quick logo placements or co-marketing that goes nowhere. We want partners who are building something real — and we'll invest the time and resources to make the partnership work over years, not quarters.",
  },
];

const partnershipTypes = [
  {
    icon: Landmark,
    title: "Fintech & Embedded Travel Partnerships",
    description:
      "If you're a fintech, neobank, or digital wallet and want to offer travel as a native feature — booking, payments, BNPL — Intraverse provides the infrastructure. We handle the travel complexity; you own the customer experience.",
    cta: "Explore Fintech Partnerships",
    href: "/for/fintechs",
  },
  {
    icon: Code,
    title: "Tech Startup & API Partnerships",
    description:
      "If you're building a product that touches travel — or could — our API gives you access to flights, hotels, and travel infrastructure without building from scratch. We work with startups at every stage, from MVP to scale.",
    cta: "Explore API Partnerships",
    href: "/for/startups",
  },
  {
    icon: Plane,
    title: "Supplier & Inventory Partnerships",
    description:
      "If you're an airline, hotel chain, GDS, or content aggregator looking for distribution in African markets, Intraverse gives you access to thousands of active travel sellers across the continent. Let's connect your inventory to our network.",
    cta: "Get in Touch",
    href: "#partner-form",
  },
  {
    icon: Network,
    title: "Distribution & Ecosystem Partnerships",
    description:
      "If you run a travel association, industry body, franchise network, or technology ecosystem and want to bring Intraverse to your members or customers, we build custom partnership structures that work for both sides.",
    cta: "Get in Touch",
    href: "#partner-form",
  },
];

const processSteps = [
  {
    num: 1,
    title: "Initial Conversation",
    description: "We learn about what you're building and share how Intraverse might fit.",
  },
  {
    num: 2,
    title: "Mutual Discovery",
    description: "We explore alignment — technical, commercial, and strategic.",
  },
  {
    num: 3,
    title: "Commercial Agreement",
    description: "We agree on terms, responsibilities, and success metrics.",
  },
  {
    num: 4,
    title: "Integration & Launch",
    description: "Our teams work together to integrate, test, and go live.",
  },
  {
    num: 5,
    title: "Ongoing Partnership",
    description: "Regular reviews, shared roadmap input, and scaling together.",
  },
];

const goodFit = [
  "You're building something that genuinely touches travel — booking, payments, logistics, or distribution.",
  "You have a product or platform with real users (or a clear path to them).",
  "You're willing to invest time in proper integration — not just surface-level co-branding.",
  "Your team moves quickly and communicates openly.",
  "You think in years, not just quarters — long-term alignment matters to you.",
];

const notFit = [
  "You're looking for a logo swap or co-marketing arrangement without product integration.",
  "You don't have a product or platform yet — you're still at the idea stage.",
  "You're looking for white-label resale without adding value to the chain.",
  "Your primary interest is extracting data or leads rather than building something together.",
  "You need a partner who will move slowly through months of approvals — we won't.",
];

/* ───────── COMPONENT ───────── */

const Partnerships = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    role: "",
    email: "",
    partnershipType: "",
    message: "",
  });

  useEffect(() => {
    document.title = "Partnerships | Build African Travel Together | Intraverse";
    const setMeta = (attr: string, value: string) => {
      const selector = attr.startsWith("og:")
        ? `meta[property="${attr}"]`
        : `meta[name="${attr}"]`;
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        attr.startsWith("og:")
          ? el.setAttribute("property", attr)
          : el.setAttribute("name", attr);
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
    };
    setMeta(
      "description",
      "Intraverse partners with fintechs, tech startups, suppliers, and ecosystem players to power travel businesses across Africa. Explore partnership opportunities."
    );
    setMeta(
      "og:title",
      "Partnerships at Intraverse — Build African Travel Together"
    );
    setMeta(
      "og:description",
      "Fintech embedded travel, API partnerships, supplier integration, and distribution partnerships. If you're building for African travel, let's build together."
    );
    window.scrollTo(0, 0);
  }, []);

  const hero = useScrollReveal();
  const whySection = useScrollReveal();
  const typesSection = useScrollReveal();
  const processSection = useScrollReveal();
  const fitSection = useScrollReveal();
  const ctaSection = useScrollReveal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Partnership inquiry sent!",
      description: "We'll get back to you within 5 business days.",
    });
    setFormData({ name: "", company: "", role: "", email: "", partnershipType: "", message: "" });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* ─── HERO ─── */}
      <section
        ref={hero.ref}
        className="relative bg-secondary text-secondary-foreground pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
      >
        {/* subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,78%,49%,0.12)] to-transparent pointer-events-none" />
        <div className={`relative max-w-4xl mx-auto px-6 text-center transition-all duration-700 ${hero.revealClass}`}>
          <span className="inline-block text-xs font-semibold tracking-[0.2em] text-primary mb-4">
            PARTNERSHIPS AT INTRAVERSE
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 text-white">
            Build the Future of African Travel — Together
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/95 max-w-3xl mx-auto mb-10 leading-relaxed">
            Intraverse partners with fintechs, tech startups, suppliers, distribution partners, and
            ecosystem players to power travel businesses across the continent. If you're building
            something that touches travel — or want to add travel to what you're already building —
            let's talk about how we can build it together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="rounded-none bg-foreground text-background hover:bg-foreground/90 px-8 text-base"
              onClick={() => scrollToSection("partner-form")}
            >
              Become a Partner
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-none border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10 px-8 text-base"
              onClick={() => scrollToSection("partnership-types")}
            >
              Explore Partnership Types
            </Button>
          </div>
        </div>
      </section>

      {/* ─── WHY PARTNER ─── */}
      <section ref={whySection.ref} className="py-20 md:py-28 bg-background">
        <div className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${whySection.revealClass}`}>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Partnership Matters to Us
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              We don't treat partnerships as a marketing channel. For Intraverse, partnerships are
              how we extend our infrastructure into new markets, new verticals, and new use cases.
              Every major platform company in the world was built on partnerships — and we're
              building ours the same way.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {whyPartner.map((item) => (
              <div
                key={item.title}
                className="p-8 rounded-none border border-border bg-card hover:shadow-lg transition-shadow"
              >
                <item.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PARTNERSHIP TYPES ─── */}
      <section
        id="partnership-types"
        ref={typesSection.ref}
        className="py-20 md:py-28 bg-accent"
      >
        <div className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${typesSection.revealClass}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-center mb-16">
            Ways We Partner
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {partnershipTypes.map((pt) => (
              <div
                key={pt.title}
                className="p-8 bg-card border border-border rounded-none hover:shadow-xl hover:border-primary transition-all group"
              >
                <pt.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-3">{pt.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {pt.description}
                </p>
                {pt.href.startsWith("#") ? (
                  <Button
                    variant="outline"
                    className="rounded-none group-hover:border-primary group-hover:text-primary"
                    onClick={() => scrollToSection(pt.href.slice(1))}
                  >
                    {pt.cta} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    className="rounded-none group-hover:border-primary group-hover:text-primary"
                    asChild
                  >
                    <Link to={pt.href}>
                      {pt.cta} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section ref={processSection.ref} className="py-20 md:py-28 bg-background">
        <div className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${processSection.revealClass}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-center mb-16">
            How Our Partnership Process Works
          </h2>

          {/* Desktop horizontal */}
          <div className="hidden md:flex items-start justify-between gap-4">
            {processSteps.map((step, i) => (
              <div key={step.num} className="flex-1 flex flex-col items-center text-center">
                <div className="relative">
                  <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                    {step.num}
                  </div>
                  {i < processSteps.length - 1 && (
                    <ChevronRight className="absolute top-1/2 -right-[calc(50%+12px)] -translate-y-1/2 h-5 w-5 text-primary/40" />
                  )}
                </div>
                <h3 className="text-sm font-bold text-foreground mt-4 mb-1">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed max-w-[180px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile vertical */}
          <div className="md:hidden space-y-8">
            {processSteps.map((step) => (
              <div key={step.num} className="flex gap-4 items-start">
                <div className="w-12 h-12 shrink-0 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FIT / NOT FIT ─── */}
      <section ref={fitSection.ref} className="py-20 md:py-28 bg-accent">
        <div className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${fitSection.revealClass}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-center mb-16">
            What We Look For in Partners
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Good fit */}
            <div className="p-8 bg-card border border-border rounded-none">
              <h3 className="text-lg font-bold text-foreground mb-6">A Strong Fit Looks Like…</h3>
              <ul className="space-y-4">
                {goodFit.map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <Check className="h-5 w-5 text-[hsl(var(--success))] shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Not fit */}
            <div className="p-8 bg-card border border-border rounded-none">
              <h3 className="text-lg font-bold text-foreground mb-6">Probably Not a Fit If…</h3>
              <ul className="space-y-4">
                {notFit.map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <X className="h-5 w-5 text-muted-foreground/60 shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA + FORM ─── */}
      <section
        id="partner-form"
        ref={ctaSection.ref}
        className="py-20 md:py-28 bg-foreground text-background"
      >
        <div className={`max-w-4xl mx-auto px-6 transition-all duration-700 ${ctaSection.revealClass}`}>
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Together?
            </h2>
            <p className="text-base md:text-lg opacity-80 max-w-2xl mx-auto leading-relaxed">
              If you're building something where Intraverse could be a partner — fintech, tech
              startup, supplier, distribution, or ecosystem — we want to hear from you. Tell us
              what you're building and we'll get back within 5 business days.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-background/70 text-sm">Name</Label>
              <Input
                id="name"
                required
                maxLength={100}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="rounded-none bg-background/10 border-background/20 text-background placeholder:text-background/40"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company" className="text-background/70 text-sm">Company</Label>
              <Input
                id="company"
                required
                maxLength={100}
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="rounded-none bg-background/10 border-background/20 text-background placeholder:text-background/40"
                placeholder="Company name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role" className="text-background/70 text-sm">Role</Label>
              <Input
                id="role"
                maxLength={100}
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="rounded-none bg-background/10 border-background/20 text-background placeholder:text-background/40"
                placeholder="Your role"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-background/70 text-sm">Email</Label>
              <Input
                id="email"
                type="email"
                required
                maxLength={255}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="rounded-none bg-background/10 border-background/20 text-background placeholder:text-background/40"
                placeholder="you@company.com"
              />
            </div>
            <div className="sm:col-span-2 space-y-2">
              <Label className="text-background/70 text-sm">Partnership Type</Label>
              <Select
                value={formData.partnershipType}
                onValueChange={(v) => setFormData({ ...formData, partnershipType: v })}
              >
                <SelectTrigger className="rounded-none bg-background/10 border-background/20 text-background">
                  <SelectValue placeholder="Select partnership type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fintech">Fintech</SelectItem>
                  <SelectItem value="tech-startup">Tech Startup</SelectItem>
                  <SelectItem value="supplier">Supplier</SelectItem>
                  <SelectItem value="distribution">Distribution / Ecosystem</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="sm:col-span-2 space-y-2">
              <Label htmlFor="message" className="text-background/70 text-sm">
                Tell us what you're building
              </Label>
              <Textarea
                id="message"
                required
                maxLength={1000}
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="rounded-none bg-background/10 border-background/20 text-background placeholder:text-background/40"
                placeholder="Describe your product and how a partnership might work…"
              />
            </div>
            <div className="sm:col-span-2 flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                type="submit"
                size="lg"
                className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 px-8 flex-1 sm:flex-none"
              >
                Send Partnership Inquiry
              </Button>
              <Button
                type="button"
                size="lg"
                variant="outline"
                className="rounded-none border-background/30 text-background hover:bg-background/10 px-8"
                asChild
              >
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-4 w-4" /> Chat on WhatsApp
                </a>
              </Button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
      <WhatsAppFab />
    </div>
  );
};

export default Partnerships;
