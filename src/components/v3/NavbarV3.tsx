import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/intraverse-logo.svg";
import navProducts from "@/assets/nav/nav-products.jpg";
import navSolutions from "@/assets/nav/nav-solutions-portrait.png";
import navResources from "@/assets/nav/nav-resources.jpg";
import navCompany from "@/assets/nav/nav-company.jpg";
import {
  productSections,
  solutionSections,
  resourceSections,
  companySections,
} from "@/components/navbar/navData";
import { MegaMenuV3 } from "./MegaMenuV3";
import { MobileMenu } from "@/components/navbar/MobileMenu";
import { NavbarCTAs } from "@/components/navbar/NavbarCTAs";

type DropdownKey = "products" | "solutions" | "resources" | "company" | null;

const featured = {
  products: {
    image: navProducts,
    eyebrow: "Featured product",
    title: "Travel Links",
    description: "Sell travel with a shareable link - no website, no setup.",
    href: "/products/travel-links",
    cta: "Explore Travel Links",
  },
  solutions: {
    image: navSolutions,
    eyebrow: "For independents",
    title: "Start earning in travel today",
    description: "Join thousands of independents reselling flights and hotels.",
    href: "/for/independents",
    cta: "Join the programme",
  },
  resources: {
    image: navResources,
    eyebrow: "Developer hub",
    title: "Build with the Intraverse API",
    description: "Embed flights, hotels and payments into any product.",
    href: "/docs",
    cta: "Read the docs",
  },
  company: {
    image: navCompany,
    eyebrow: "Built in Lagos",
    title: "Africa's travel infrastructure",
    description: "Meet the team building the future of travel commerce.",
    href: "/about/built-in-lagos",
    cta: "Our story",
  },
};

export function NavbarV3() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey>(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!activeDropdown) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveDropdown(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeDropdown]);

  useEffect(
    () => () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    },
    []
  );

  const openDropdown = (key: DropdownKey) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setActiveDropdown(key);
  };

  const scheduleClose = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => setActiveDropdown(null), 140);
  };

  const renderDropdownButton = (
    label: string,
    key: Exclude<DropdownKey, null>,
    align: "left" | "center" | "right" = "center",
    footerLink?: { label: string; href: string }
  ) => {
    const isOpen = activeDropdown === key;
    const sectionsMap = {
      products: productSections,
      solutions: solutionSections,
      resources: resourceSections,
      company: companySections,
    } as const;
    return (
      <div
        className="relative"
        onMouseEnter={() => openDropdown(key)}
        onMouseLeave={scheduleClose}
        onFocus={() => openDropdown(key)}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node)) scheduleClose();
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
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
        {isOpen && (
          <MegaMenuV3
            sections={sectionsMap[key]}
            featured={featured[key]}
            align={align}
            footerLink={footerLink}
            trackingLocation={`navbar_v3_${key}`}
            variant={key === "solutions" ? "solutions" : "default"}
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
          <a href="/" className="flex items-center shrink-0">
            <img src={logo} alt="Intraverse" className="h-7" />
          </a>

          <div className="hidden lg:flex items-center gap-0.5">
            {renderDropdownButton("Platform", "products", "left", {
              label: "View all products",
              href: "/products",
            })}
            {renderDropdownButton("Solutions", "solutions", "center", {
              label: "See all audiences",
              href: "/who-we-serve",
            })}
            {renderDropdownButton("Resources", "resources", "center")}
            <a
              href="/pricing"
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </a>
            {renderDropdownButton("Company", "company", "right")}
          </div>

          <div className="hidden lg:flex items-center">
            <NavbarCTAs layout="compact" />
          </div>

          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
    </>
  );
}
