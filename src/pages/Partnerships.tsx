import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  Select,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  SelectContent,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  SelectItem,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  SelectTrigger,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  SelectValue,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
} from "@/components/ui/select";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  Globe, Plug, Zap, Handshake, Landmark, Code, Plane, Network,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  ArrowRight, Check, X, MessageCircle, ChevronRight,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
} from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
/* ───────── DATA ───────── */
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
const whyPartner = [
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    icon: Globe,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    title: "Continental Reach",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    description:
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      "Intraverse already powers travel businesses across multiple African markets. Partnering with us gives you distribution, market access, and a team that understands the continent's travel industry from the inside.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    icon: Plug,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    title: "Technology That Works",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    description:
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      "Our platform is built for real African infrastructure — low-bandwidth environments, multi-currency payments, complex supplier integrations. You're plugging into technology that's been battle-tested, not theoretical.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    icon: Zap,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    title: "A Team That Moves",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    description:
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      "We ship fast, communicate clearly, and make decisions quickly. Partnerships with Intraverse don't get stuck in committee — you'll work with people who have the authority and urgency to move.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    icon: Handshake,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    title: "Long-Term Thinking",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    description:
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      "We're not looking for quick logo placements or co-marketing that goes nowhere. We want partners who are building something real — and we'll invest the time and resources to make the partnership work over years, not quarters.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
];
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
const partnershipTypes = [
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    icon: Landmark,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    title: "Fintech & Embedded Travel Partnerships",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    description:
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      "If you're a fintech, neobank, or digital wallet and want to offer travel as a native feature — booking, payments, BNPL — Intraverse provides the infrastructure. We handle the travel complexity; you own the customer experience.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    cta: "Explore Fintech Partnerships",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    href: "/for/fintechs",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    icon: Code,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    title: "Tech Startup & API Partnerships",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    description:
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      "If you're building a product that touches travel — or could — our API gives you access to flights, hotels, and travel infrastructure without building from scratch. We work with startups at every stage, from MVP to scale.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    cta: "Explore API Partnerships",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    href: "/for/startups",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    icon: Plane,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    title: "Supplier & Inventory Partnerships",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    description:
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      "If you're an airline, hotel chain, GDS, or content aggregator looking for distribution in African markets, Intraverse gives you access to thousands of active travel sellers across the continent. Let's connect your inventory to our network.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    cta: "Get in Touch",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    href: "#partner-form",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    icon: Network,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    title: "Distribution & Ecosystem Partnerships",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    description:
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      "If you run a travel association, industry body, franchise network, or technology ecosystem and want to bring Intraverse to your members or customers, we build custom partnership structures that work for both sides.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    cta: "Get in Touch",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    href: "#partner-form",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
];
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
const processSteps = [
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    num: 1,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    title: "Initial Conversation",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    description: "We learn about what you're building and share how Intraverse might fit.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    num: 2,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    title: "Mutual Discovery",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    description: "We explore alignment — technical, commercial, and strategic.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    num: 3,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    title: "Commercial Agreement",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    description: "We agree on terms, responsibilities, and success metrics.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    num: 4,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    title: "Integration & Launch",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    description: "Our teams work together to integrate, test, and go live.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    num: 5,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    title: "Ongoing Partnership",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    description: "Regular reviews, shared roadmap input, and scaling together.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
];
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
const goodFit = [
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  "You're building something that genuinely touches travel — booking, payments, logistics, or distribution.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  "You have a product or platform with real users (or a clear path to them).",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  "You're willing to invest time in proper integration — not just surface-level co-branding.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  "Your team moves quickly and communicates openly.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  "You think in years, not just quarters — long-term alignment matters to you.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
];
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
const notFit = [
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  "You're looking for a logo swap or co-marketing arrangement without product integration.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  "You don't have a product or platform yet — you're still at the idea stage.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  "You're looking for white-label resale without adding value to the chain.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  "Your primary interest is extracting data or leads rather than building something together.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  "You need a partner who will move slowly through months of approvals — we won't.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
];
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
/* ───────── COMPONENT ───────── */
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
const Partnerships = () => {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  const { toast } = useToast();
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  const [formData, setFormData] = useState({
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    name: "",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    company: "",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    role: "",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    email: "",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    partnershipType: "",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    message: "",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  });
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  useEffect(() => {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    document.title = "Partnerships | Build African Travel Together | Intraverse";
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    const setMeta = (attr: string, value: string) => {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      const selector = attr.startsWith("og:")
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        ? `meta[property="${attr}"]`
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        : `meta[name="${attr}"]`;
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      let el = document.querySelector(selector);
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      if (!el) {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        el = document.createElement("meta");
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        attr.startsWith("og:")
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          ? el.setAttribute("property", attr)
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          : el.setAttribute("name", attr);
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        document.head.appendChild(el);
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      }
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      el.setAttribute("content", value);
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    };
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    setMeta(
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      "description",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      "Intraverse partners with fintechs, tech startups, suppliers, and ecosystem players to power travel businesses across Africa. Explore partnership opportunities."
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    );
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    setMeta(
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      "og:title",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      "Partnerships at Intraverse — Build African Travel Together"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    );
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    setMeta(
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      "og:description",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      "Fintech embedded travel, API partnerships, supplier integration, and distribution partnerships. If you're building for African travel, let's build together."
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    );
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    window.scrollTo(0, 0);
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  }, []);
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  const hero = useScrollReveal();
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  const whySection = useScrollReveal();
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  const typesSection = useScrollReveal();
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  const processSection = useScrollReveal();
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  const fitSection = useScrollReveal();
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  const ctaSection = useScrollReveal();
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  const handleSubmit = (e: React.FormEvent) => {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    e.preventDefault();
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    toast({
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      title: "Partnership inquiry sent!",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      description: "We'll get back to you within 5 business days.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    });
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    setFormData({ name: "", company: "", role: "", email: "", partnershipType: "", message: "" });
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  };
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  const scrollToSection = (id: string) => {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  };
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  return (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    <div className="min-h-screen flex flex-col bg-background">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <Navbar />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      {/* ─── HERO ─── */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <section
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        ref={hero.ref}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        className="relative bg-secondary text-secondary-foreground pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      >
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        {/* subtle gradient overlay */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,78%,49%,0.12)] to-transparent pointer-events-none" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <div className={`relative max-w-4xl mx-auto px-6 text-center transition-all duration-700 ${hero.revealClass}`}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <span className="inline-block text-xs font-semibold tracking-[0.2em] text-primary mb-4">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            PARTNERSHIPS AT INTRAVERSE
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </span>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            Build the Future of African Travel — Together
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </h1>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <p className="text-base sm:text-lg md:text-xl text-muted max-w-3xl mx-auto mb-10 leading-relaxed opacity-80">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            Intraverse partners with fintechs, tech startups, suppliers, distribution partners, and
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            ecosystem players to power travel businesses across the continent. If you're building
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            something that touches travel — or want to add travel to what you're already building —
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            let's talk about how we can build it together.
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <Button
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              size="lg"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              className="rounded-none bg-foreground text-background hover:bg-foreground/90 px-8 text-base"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              onClick={() => scrollToSection("partner-form")}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            >
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              Become a Partner
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </Button>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <Button
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              size="lg"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              variant="outline"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              className="rounded-none border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10 px-8 text-base"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              onClick={() => scrollToSection("partnership-types")}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            >
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              Explore Partnership Types
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </Button>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      </section>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      {/* ─── WHY PARTNER ─── */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <section ref={whySection.ref} className="py-20 md:py-28 bg-background">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <div className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${whySection.revealClass}`}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <div className="max-w-3xl mx-auto text-center mb-16">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              Why Partnership Matters to Us
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </h2>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              We don't treat partnerships as a marketing channel. For Intraverse, partnerships are
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              how we extend our infrastructure into new markets, new verticals, and new use cases.
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              Every major platform company in the world was built on partnerships — and we're
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              building ours the same way.
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <div className="grid sm:grid-cols-2 gap-8">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            {whyPartner.map((item) => (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <div
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                key={item.title}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                className="p-8 rounded-none border border-border bg-card hover:shadow-lg transition-shadow"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              >
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <item.icon className="h-8 w-8 text-primary mb-4" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            ))}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      </section>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      {/* ─── PARTNERSHIP TYPES ─── */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <section
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        id="partnership-types"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        ref={typesSection.ref}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        className="py-20 md:py-28 bg-accent"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      >
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <div className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${typesSection.revealClass}`}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-center mb-16">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            Ways We Partner
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </h2>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <div className="grid md:grid-cols-2 gap-8">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            {partnershipTypes.map((pt) => (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <div
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                key={pt.title}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                className="p-8 bg-card border border-border rounded-none hover:shadow-xl hover:border-primary transition-all group"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              >
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <pt.icon className="h-8 w-8 text-primary mb-4" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <h3 className="text-lg font-bold text-foreground mb-3">{pt.title}</h3>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  {pt.description}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                {pt.href.startsWith("#") ? (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <Button
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    variant="outline"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    className="rounded-none group-hover:border-primary group-hover:text-primary"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    onClick={() => scrollToSection(pt.href.slice(1))}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  >
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    {pt.cta} <ArrowRight className="ml-2 h-4 w-4" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  </Button>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                ) : (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <Button
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    variant="outline"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    className="rounded-none group-hover:border-primary group-hover:text-primary"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    asChild
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  >
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <Link to={pt.href}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      {pt.cta} <ArrowRight className="ml-2 h-4 w-4" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    </Link>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  </Button>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                )}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            ))}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      </section>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      {/* ─── PROCESS ─── */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <section ref={processSection.ref} className="py-20 md:py-28 bg-background">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <div className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${processSection.revealClass}`}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-center mb-16">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            How Our Partnership Process Works
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </h2>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          {/* Desktop horizontal */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <div className="hidden md:flex items-start justify-between gap-4">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            {processSteps.map((step, i) => (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <div key={step.num} className="flex-1 flex flex-col items-center text-center">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <div className="relative">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    {step.num}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  {i < processSteps.length - 1 && (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <ChevronRight className="absolute top-1/2 -right-[calc(50%+12px)] -translate-y-1/2 h-5 w-5 text-primary/40" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  )}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <h3 className="text-sm font-bold text-foreground mt-4 mb-1">{step.title}</h3>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <p className="text-xs text-muted-foreground leading-relaxed max-w-[180px]">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  {step.description}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            ))}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          {/* Mobile vertical */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <div className="md:hidden space-y-8">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            {processSteps.map((step) => (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <div key={step.num} className="flex gap-4 items-start">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <div className="w-12 h-12 shrink-0 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  {step.num}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <h3 className="text-base font-bold text-foreground mb-1">{step.title}</h3>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <p className="text-sm text-muted-foreground leading-relaxed">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    {step.description}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            ))}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      </section>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      {/* ─── FIT / NOT FIT ─── */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <section ref={fitSection.ref} className="py-20 md:py-28 bg-accent">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <div className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${fitSection.revealClass}`}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-center mb-16">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            What We Look For in Partners
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </h2>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <div className="grid md:grid-cols-2 gap-8">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            {/* Good fit */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <div className="p-8 bg-card border border-border rounded-none">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <h3 className="text-lg font-bold text-foreground mb-6">A Strong Fit Looks Like…</h3>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <ul className="space-y-4">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                {goodFit.map((item, i) => (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <li key={i} className="flex gap-3 items-start">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <Check className="h-5 w-5 text-[hsl(var(--success))] shrink-0 mt-0.5" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  </li>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                ))}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </ul>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            {/* Not fit */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <div className="p-8 bg-card border border-border rounded-none">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <h3 className="text-lg font-bold text-foreground mb-6">Probably Not a Fit If…</h3>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <ul className="space-y-4">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                {notFit.map((item, i) => (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <li key={i} className="flex gap-3 items-start">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <X className="h-5 w-5 text-muted-foreground/60 shrink-0 mt-0.5" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  </li>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                ))}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </ul>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      </section>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      {/* ─── FINAL CTA + FORM ─── */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <section
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        id="partner-form"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        ref={ctaSection.ref}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        className="py-20 md:py-28 bg-foreground text-background"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      >
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <div className={`max-w-4xl mx-auto px-6 transition-all duration-700 ${ctaSection.revealClass}`}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <div className="text-center mb-12">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              Ready to Build Together?
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </h2>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <p className="text-base md:text-lg opacity-80 max-w-2xl mx-auto leading-relaxed">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              If you're building something where Intraverse could be a partner — fintech, tech
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              startup, supplier, distribution, or ecosystem — we want to hear from you. Tell us
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              what you're building and we'll get back within 5 business days.
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <div className="space-y-2">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <Label htmlFor="name" className="text-background/70 text-sm">Name</Label>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <Input
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                id="name"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                required
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                maxLength={100}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                value={formData.name}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                className="rounded-none bg-background/10 border-background/20 text-background placeholder:text-background/40"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                placeholder="Your name"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <div className="space-y-2">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <Label htmlFor="company" className="text-background/70 text-sm">Company</Label>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <Input
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                id="company"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                required
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                maxLength={100}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                value={formData.company}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                className="rounded-none bg-background/10 border-background/20 text-background placeholder:text-background/40"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                placeholder="Company name"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <div className="space-y-2">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <Label htmlFor="role" className="text-background/70 text-sm">Role</Label>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <Input
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                id="role"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                maxLength={100}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                value={formData.role}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                className="rounded-none bg-background/10 border-background/20 text-background placeholder:text-background/40"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                placeholder="Your role"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <div className="space-y-2">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <Label htmlFor="email" className="text-background/70 text-sm">Email</Label>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <Input
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                id="email"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                type="email"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                required
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                maxLength={255}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                value={formData.email}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                className="rounded-none bg-background/10 border-background/20 text-background placeholder:text-background/40"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                placeholder="you@company.com"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <div className="sm:col-span-2 space-y-2">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <Label className="text-background/70 text-sm">Partnership Type</Label>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <Select
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                value={formData.partnershipType}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                onValueChange={(v) => setFormData({ ...formData, partnershipType: v })}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              >
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <SelectTrigger className="rounded-none bg-background/10 border-background/20 text-background">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <SelectValue placeholder="Select partnership type" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </SelectTrigger>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <SelectContent>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <SelectItem value="fintech">Fintech</SelectItem>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <SelectItem value="tech-startup">Tech Startup</SelectItem>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <SelectItem value="supplier">Supplier</SelectItem>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <SelectItem value="distribution">Distribution / Ecosystem</SelectItem>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <SelectItem value="other">Other</SelectItem>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </SelectContent>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </Select>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <div className="sm:col-span-2 space-y-2">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <Label htmlFor="message" className="text-background/70 text-sm">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                Tell us what you're building
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </Label>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <Textarea
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                id="message"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                required
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                maxLength={1000}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                rows={4}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                value={formData.message}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                className="rounded-none bg-background/10 border-background/20 text-background placeholder:text-background/40"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                placeholder="Describe your product and how a partnership might work…"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <div className="sm:col-span-2 flex flex-col sm:flex-row gap-4 pt-2">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <Button
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                type="submit"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                size="lg"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 px-8 flex-1 sm:flex-none"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              >
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                Send Partnership Inquiry
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </Button>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <Button
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                type="button"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                size="lg"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                variant="outline"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                className="rounded-none border-background/30 text-background hover:bg-background/10 px-8"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                asChild
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              >
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <a
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  href="https://wa.me/2349030002629"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  target="_blank"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  rel="noopener noreferrer"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                >
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <MessageCircle className="mr-2 h-4 w-4" /> Chat on WhatsApp
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </a>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </Button>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </form>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      </section>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <Footer />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <WhatsAppFab />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  );
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
};
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
export default Partnerships;
