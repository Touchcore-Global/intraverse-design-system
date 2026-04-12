import { Star } from "lucide-react";
import type { NavSection } from "./navData";

interface DesktopDropdownProps {
  sections: NavSection[];
  footerLink?: { label: string; href: string };
  columns?: 1 | 2 | 3;
}

export function DesktopDropdown({ sections, footerLink, columns = 1 }: DesktopDropdownProps) {
  const useGrid = columns >= 2 || sections.reduce((acc, s) => acc + s.items.length, 0) > 5;
  const gridCols = columns === 3 ? "grid-cols-3" : "grid-cols-2";
  const dropdownWidth = columns === 3 ? "820px" : useGrid ? "620px" : "380px";

  return (
    <div
      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-popover border border-border rounded-xl p-6 animate-fade-in"
      style={{
        boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
        width: dropdownWidth,
      }}
    >
      <div className={useGrid ? "grid grid-cols-2 gap-x-6" : ""}>
        {sections.map((section, sIdx) => (
          <div key={section.header} className={sIdx > 0 && !useGrid ? "mt-4 pt-4 border-t border-border" : sIdx > 0 && useGrid ? "mt-2" : ""}>
            <p className="text-[12px] uppercase tracking-[0.05em] font-bold mb-3" style={{ color: "#94A3B8" }}>
              {section.header}
            </p>
            <div className="flex flex-col gap-0.5">
              {section.items.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 rounded-lg p-2.5 transition-colors group"
                    style={{ color: "#0D1B2A" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#F0F5FC";
                      e.currentTarget.style.color = "#1E61DC";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = "#0D1B2A";
                    }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-semibold leading-tight">{item.label}</p>
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
                        {item.isNew && (
                          <span className="inline-flex px-1.5 py-0.5 rounded-full text-[10px] font-bold uppercase text-white" style={{ backgroundColor: "#16A34A" }}>
                            New
                          </span>
                        )}
                      </div>
                      {item.description && (
                        <p className="text-xs text-muted-foreground leading-snug mt-0.5">{item.description}</p>
                      )}
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      {footerLink && (
        <div className="mt-4 pt-4 border-t border-border">
          <a href={footerLink.href} className="text-sm font-medium text-primary hover:underline">
            {footerLink.label} →
          </a>
        </div>
      )}
    </div>
  );
}
