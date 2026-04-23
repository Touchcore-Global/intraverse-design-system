import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Home, Plane, Users, DollarSign, HelpCircle, MessageCircle, ArrowRight, Navigation } from "lucide-react";
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

const quickLinks = [
  { icon: Home, title: "Homepage", desc: "Back to the main page", href: "/" },
  { icon: Plane, title: "All Products", desc: "Explore our travel platform", href: "/products" },
  { icon: Users, title: "Who We Serve", desc: "Find your audience segment", href: "/who-we-serve" },
  { icon: DollarSign, title: "Pricing", desc: "View plans and pricing", href: "/pricing" },
  { icon: HelpCircle, title: "Help Centre", desc: "Browse guides and articles", href: "/help" },
  { icon: MessageCircle, title: "Contact Us", desc: "Get in touch with our team", href: "/contact" },
];

const NotFound = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    document.title = "Page Not Found | Intraverse";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "The page you're looking for doesn't exist. Find your way back to Intraverse's homepage, products, or Help Centre.");
    
    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement("meta");
      robots.setAttribute("name", "robots");
      document.head.appendChild(robots);
    }
    robots.setAttribute("content", "noindex");

    return () => {
      robots?.setAttribute("content", "index, follow");
    };
  }, [location.pathname]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/help?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4 pt-32 pb-16 animate-fade-in">
        <div className="relative mb-8">
          <span className="text-[120px] md:text-[180px] font-black leading-none text-primary/15 select-none">404</span>
          <Navigation className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-primary rotate-45" strokeWidth={1.5} />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-4 max-w-lg">
          Looks Like This Destination Isn't on the Map
        </h1>
        <p className="text-muted-foreground text-lg max-w-[600px] mb-8">
          The page you're searching for can't be found. But like any good travel experience, there's always another route. Let's get you where you need to go.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link to="/">
            <Button variant="hero" size="xl">Go to Homepage</Button>
          </Link>
          <Link to="/products">
            <Button variant="outline" size="xl">Browse Products</Button>
          </Link>
        </div>
      </section>

      {/* Popular Places */}
      <section className="bg-[hsl(var(--section-alt))] py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-[28px] font-bold text-center text-secondary mb-10">Popular Places to Go</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="group bg-background rounded-xl border border-border p-6 hover:border-primary hover:shadow-md transition-all hover:-translate-y-0.5"
              >
                <link.icon className="w-8 h-8 text-primary mb-3" strokeWidth={1.5} />
                <h3 className="h3-global text-secondary mb-1">{link.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{link.desc}</p>
                <span className="text-primary text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Visit <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-lg text-center">
          <h2 className="text-2xl font-bold text-secondary mb-6">Or Search for What You Need</h2>
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search pages, articles, or products..."
                className="pl-10 h-12 text-base"
              />
            </div>
            <Button type="submit" variant="hero" className="h-12 px-6">Search</Button>
          </form>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="bg-[hsl(var(--section-alt))] py-12 px-4">
        <div className="container mx-auto max-w-xl text-center">
          <p className="text-muted-foreground mb-6">
            Still can't find what you're looking for? Chat with us on WhatsApp and we'll point you in the right direction. Our Lagos-based team responds within 2 hours during business days.
          </p>
          <a
            href={whatsappUrl("Hi Intraverse, I landed on a page that doesn't exist and need help.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="xl" className="border-[hsl(var(--whatsapp))] text-[hsl(var(--whatsapp))] hover:bg-[hsl(var(--whatsapp))]/10" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-1" />
                Chat on WhatsApp
              </a>
            </Button>
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppFab />
    </div>
  );
};

export default NotFound;
