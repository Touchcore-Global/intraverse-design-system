import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, MessageCircle } from "lucide-react";
import logo from "@/assets/intraverse-logo.svg";
import { Button } from "@/components/ui/button";

const productLinks = [
  { label: "Agent Platform", href: "/agent-platform" },
  { label: "Travx", href: "/travx" },
  { label: "CoopX", href: "/coopx" },
  { label: "Independents", href: "/independents" },
  { label: "Supplier Engine", href: "/supplier-engine" },
];

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Proof", href: "#proof" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm transition-shadow ${
          scrolled ? "shadow-md" : ""
        }`}
      >
        <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src={logo} alt="Intraverse" className="h-7" />
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Products dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Products
                <ChevronDown className="h-4 w-4" />
              </button>
              {productsOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-card border rounded-lg shadow-lg py-2">
                  {productLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="hero" size="default">
              Book a Demo
            </Button>
            <Button variant="whatsapp" size="default">
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-background flex flex-col pt-16">
          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-2">
            {/* Products accordion */}
            <button
              className="flex items-center justify-between w-full py-3 text-lg font-semibold text-foreground"
              onClick={() => setProductsOpen(!productsOpen)}
            >
              Products
              <ChevronDown className={`h-5 w-5 transition-transform ${productsOpen ? "rotate-180" : ""}`} />
            </button>
            {productsOpen && (
              <div className="pl-4 space-y-1">
                {productLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block py-2 text-muted-foreground hover:text-foreground"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block py-3 text-lg font-semibold text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile bottom buttons */}
          <div className="px-6 pb-8 space-y-3">
            <Button variant="hero" size="xl" className="w-full">
              Book a Demo
            </Button>
            <Button variant="whatsapp" size="xl" className="w-full">
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
