import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/intraverse-logo.svg";
import { productSections, solutionSections, resourceSections, companySections } from "./navbar/navData";
import { DesktopDropdown } from "./navbar/DesktopDropdown";
import { MobileMenu } from "./navbar/MobileMenu";

type DropdownKey = "products" | "solutions" | "resources" | "company" | null;

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const renderDropdownButton = (label: string, key: DropdownKey) => (
    <div
      className="relative"
      onMouseEnter={() => setActiveDropdown(key)}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
        {label}
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === key ? "rotate-180" : ""}`} />
      </button>
      {activeDropdown === key && key === "products" && (
        <DesktopDropdown
          sections={productSections}
          footerLink={{ label: "View All Products", href: "/products" }}
          columns={2}
        />
      )}
      {activeDropdown === key && key === "solutions" && (
        <DesktopDropdown
          sections={solutionSections}
          footerLink={{ label: "See All Audiences", href: "/who-we-serve" }}
          columns={3}
        />
      )}
      {activeDropdown === key && key === "resources" && (
        <DesktopDropdown
          sections={resourceSections}
          columns={2}
        />
      )}
      {activeDropdown === key && key === "company" && (
        <DesktopDropdown
          sections={companySections}
          columns={2}
        />
      )}
    </div>
  );

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm transition-shadow ${
          scrolled ? "shadow-md" : ""
        }`}
      >
        <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
          {/* Logo */}
          <a href="/" className="flex items-center shrink-0">
            <img src={logo} alt="Intraverse" className="h-7" />
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-0.5">
            {renderDropdownButton("Products", "products")}
            {renderDropdownButton("Solutions", "solutions")}
            {renderDropdownButton("Resources", "resources")}
            <a
              href="/pricing"
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </a>
            {renderDropdownButton("Company", "company")}
          </div>

          {/* Desktop CTA buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="/contact">
              <button
                className="h-10 px-6 text-sm font-semibold rounded-lg transition-colors"
                style={{ backgroundColor: "#0D1B2A", color: "#FFFFFF" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1A2B3F")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0D1B2A")}
              >
                Book a Demo
              </button>
            </a>
            <a href="/login">
              <button
                className="h-10 px-6 text-sm font-medium rounded-lg transition-colors"
                style={{
                  backgroundColor: "transparent",
                  color: "#0D1B2A",
                  border: "1px solid #0D1B2A",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#F0F5FC")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
              >
                Login / Register
              </button>
            </a>
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
      {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
    </>
  );
}
