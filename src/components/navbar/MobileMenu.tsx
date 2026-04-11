import { useState } from "react";
import { ChevronDown, Star } from "lucide-react";
import type { NavSection } from "./navData";
import { productSections, solutionSections, resourceSections, companySections } from "./navData";

interface MobileMenuProps {
  onClose: () => void;
}

interface MobileAccordionProps {
  title: string;
  sections: NavSection[];
  footerLink?: { label: string; href: string };
  onClose: () => void;
}

function MobileAccordion({ title, sections, footerLink, onClose }: MobileAccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        className="flex items-center justify-between w-full py-3 text-lg font-semibold text-foreground"
        onClick={() => setOpen(!open)}
      >
        {title}
        <ChevronDown className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="pl-4 pb-2">
          {sections.map((section) => (
            <div key={section.header} className="mb-3">
              <p className="text-[11px] uppercase tracking-[0.05em] font-bold mb-1.5" style={{ color: "#94A3B8" }}>
                {section.header}
              </p>
              {section.items.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-2 py-2 text-muted-foreground hover:text-foreground"
                  onClick={onClose}
                >
                  {item.label}
                  {item.popular && (
                    <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full text-[11px] font-bold text-white" style={{ backgroundColor: "#1E61DC" }}>
                      <Star className="w-2.5 h-2.5 fill-current" /> Popular
                    </span>
                  )}
                  {item.comingSoon && (
                    <span className="inline-flex px-1.5 py-0.5 rounded-full bg-muted text-muted-foreground text-[10px] font-bold uppercase">
                      Soon
                    </span>
                  )}
                </a>
              ))}
            </div>
          ))}
          {footerLink && (
            <a
              href={footerLink.href}
              className="flex items-center gap-1 py-2 text-primary font-medium"
              onClick={onClose}
            >
              {footerLink.label} →
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <div className="fixed inset-0 z-40 bg-background flex flex-col pt-16">
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-1">
        <MobileAccordion
          title="Products"
          sections={productSections}
          footerLink={{ label: "View All Products", href: "/products" }}
          onClose={onClose}
        />
        <MobileAccordion
          title="Solutions"
          sections={solutionSections}
          footerLink={{ label: "See All Audiences", href: "/who-we-serve" }}
          onClose={onClose}
        />
        <MobileAccordion
          title="Resources"
          sections={resourceSections}
          onClose={onClose}
        />

        <a
          href="/pricing"
          className="block py-3 text-lg font-semibold text-foreground"
          onClick={onClose}
        >
          Pricing
        </a>

        <MobileAccordion
          title="Company"
          sections={companySections}
          onClose={onClose}
        />
      </div>

      {/* Mobile bottom buttons */}
      <div className="px-6 pb-8 space-y-3">
        <a href="/contact" className="block">
          <button
            className="w-full h-12 px-6 text-base font-semibold rounded-lg transition-colors"
            style={{ backgroundColor: "#0D1B2A", color: "#FFFFFF" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1A2B3F")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0D1B2A")}
          >
            Book a Demo
          </button>
        </a>
        <a href="/login" className="block">
          <button
            className="w-full h-12 px-6 text-base font-medium rounded-lg transition-colors"
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
    </div>
  );
}
