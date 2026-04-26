import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/intraverse-logo.svg";
import { productSections, solutionSections, resourceSections, companySections } from "./navbar/navData";
import { DesktopDropdown } from "./navbar/DesktopDropdown";
import { MobileMenu } from "./navbar/MobileMenu";
import { NavbarCTAs } from "./navbar/NavbarCTAs";

type DropdownKey = "products" | "solutions" | "resources" | "company" | null;

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey>(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on Escape for keyboard users
  useEffect(() => {
    if (!activeDropdown) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveDropdown(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeDropdown]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  const openDropdown = (key: DropdownKey) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setActiveDropdown(key);
  };

  const scheduleClose = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  const renderDropdownButton = (label: string, key: DropdownKey, align: "left" | "center" | "right" = "center") => {
    const isOpen = activeDropdown === key;
    return (
      <div
        className="relative"
        onMouseEnter={() => openDropdown(key)}
        onMouseLeave={scheduleClose}
        onFocus={() => openDropdown(key)}
        onBlur={(e) => {
          // Only close if focus leaves the entire dropdown subtree
          if (!e.currentTarget.contains(e.relatedTarget as Node)) {
            scheduleClose();
          }
        }}
      >
        <button
          type="button"
          aria-expanded={isOpen}
          aria-haspopup="true"
          className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          onClick={() => (isOpen ? setActiveDropdown(null) : openDropdown(key))}
        >
          {label}
          <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
        </button>
        {isOpen && key === "products" && (
          <DesktopDropdown
            sections={productSections}
            footerLink={{ label: "View All Products", href: "/products" }}
            columns={2}
            align={align}
          />
        )}
        {isOpen && key === "solutions" && (
          <DesktopDropdown
            sections={solutionSections}
            footerLink={{ label: "See All Audiences", href: "/who-we-serve" }}
            columns={2}
            align={align}
          />
        )}
        {isOpen && key === "resources" && (
          <DesktopDropdown
            sections={resourceSections}
            columns={2}
            align={align}
          />
        )}
        {isOpen && key === "company" && (
          <DesktopDropdown
            sections={companySections}
            columns={2}
            align={align}
          />
        )}
      </div>
    );
  };

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
            {renderDropdownButton("Products", "products", "left")}
            {renderDropdownButton("Solutions", "solutions", "center")}
            {renderDropdownButton("Resources", "resources", "center")}
            <a
              href="/pricing"
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </a>
            {renderDropdownButton("Company", "company", "right")}
          </div>

          {/* Desktop CTA buttons */}
          <div className="hidden lg:flex items-center">
            <NavbarCTAs layout="compact" />
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
