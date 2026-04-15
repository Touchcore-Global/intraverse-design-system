import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Home, Plane, Users, DollarSign, HelpCircle, MessageCircle, ArrowRight, Navigation } from "lucide-react";
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
const quickLinks = [
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { icon: Home, title: "Homepage", desc: "Back to the main page", href: "/" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { icon: Plane, title: "All Products", desc: "Explore our travel platform", href: "/products" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { icon: Users, title: "Who We Serve", desc: "Find your audience segment", href: "/who-we-serve" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { icon: DollarSign, title: "Pricing", desc: "View plans and pricing", href: "/pricing" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { icon: HelpCircle, title: "Help Centre", desc: "Browse guides and articles", href: "/help" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  { icon: MessageCircle, title: "Contact Us", desc: "Get in touch with our team", href: "/contact" },
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
];
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
const NotFound = () => {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  const location = useLocation();
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  const [searchQuery, setSearchQuery] = useState("");
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  useEffect(() => {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    document.title = "Page Not Found | Intraverse";
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    const meta = document.querySelector('meta[name="description"]');
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    if (meta) meta.setAttribute("content", "The page you're looking for doesn't exist. Find your way back to Intraverse's homepage, products, or Help Centre.");
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    let robots = document.querySelector('meta[name="robots"]');
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    if (!robots) {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      robots = document.createElement("meta");
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      robots.setAttribute("name", "robots");
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      document.head.appendChild(robots);
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    }
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    robots.setAttribute("content", "noindex");
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    return () => {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      robots?.setAttribute("content", "index, follow");
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    };
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  }, [location.pathname]);
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  const handleSearch = (e: React.FormEvent) => {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    e.preventDefault();
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    if (searchQuery.trim()) {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      window.location.href = `/help?q=${encodeURIComponent(searchQuery.trim())}`;
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    }
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
      {/* Hero */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4 pt-32 pb-16 animate-fade-in">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <div className="relative mb-8">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <span className="text-[120px] md:text-[180px] font-black leading-none text-primary/15 select-none">404</span>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <Navigation className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-primary rotate-45" strokeWidth={1.5} />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-4 max-w-lg">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          Looks Like This Destination Isn't on the Map
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </h1>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <p className="text-muted-foreground text-lg max-w-[600px] mb-8">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          The page you're searching for can't be found. But like any good travel experience, there's always another route. Let's get you where you need to go.
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <div className="flex flex-col sm:flex-row gap-3">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <Link to="/">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <Button variant="hero" size="xl">Go to Homepage</Button>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </Link>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <Link to="/products">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <Button variant="outline" size="xl">Browse Products</Button>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </Link>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      </section>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      {/* Popular Places */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <section className="bg-[hsl(var(--section-alt))] py-16 px-4">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <div className="container mx-auto max-w-4xl">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <h2 className="text-2xl md:text-[28px] font-bold text-center text-secondary mb-10">Popular Places to Go</h2>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            {quickLinks.map((link) => (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <Link
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                key={link.href}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                to={link.href}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                className="group bg-background rounded-xl border border-border p-6 hover:border-primary hover:shadow-md transition-all hover:-translate-y-0.5"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              >
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <link.icon className="w-8 h-8 text-primary mb-3" strokeWidth={1.5} />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <h3 className="font-semibold text-secondary text-lg mb-1">{link.title}</h3>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <p className="text-muted-foreground text-sm mb-3">{link.desc}</p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <span className="text-primary text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  Visit <ArrowRight className="w-3.5 h-3.5" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </span>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </Link>
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
      {/* Search */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <section className="py-16 px-4">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <div className="container mx-auto max-w-lg text-center">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <h2 className="text-2xl font-bold text-secondary mb-6">Or Search for What You Need</h2>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <form onSubmit={handleSearch} className="flex gap-2">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <div className="relative flex-1">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <Input
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                value={searchQuery}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                onChange={(e) => setSearchQuery(e.target.value)}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                placeholder="Search pages, articles, or products..."
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                className="pl-10 h-12 text-base"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <Button type="submit" variant="hero" className="h-12 px-6">Search</Button>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </form>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      </section>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      {/* WhatsApp CTA */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <section className="bg-[hsl(var(--section-alt))] py-12 px-4">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <div className="container mx-auto max-w-xl text-center">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <p className="text-muted-foreground mb-6">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            Still can't find what you're looking for? Chat with us on WhatsApp and we'll point you in the right direction. Our Lagos-based team responds within 2 hours during business days.
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <a
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            href={whatsappUrl("Hi Intraverse, I landed on a page that doesn't exist and need help.")}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            target="_blank"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            rel="noopener noreferrer"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          >
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <Button variant="outline" size="xl" className="border-[hsl(var(--whatsapp))] text-[hsl(var(--whatsapp))] hover:bg-[hsl(var(--whatsapp))]/10">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <MessageCircle className="w-5 h-5 mr-1" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              Chat on WhatsApp
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </Button>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </a>
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
export default NotFound;
