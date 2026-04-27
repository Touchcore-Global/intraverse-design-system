import { ArrowRight, Star } from "lucide-react";
import type { NavSection } from "@/components/navbar/navData";
import { trackEvent, CTA_EVENTS } from "@/lib/analytics";

interface FeaturedCard {
  image: string;
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  cta: string;
}

interface MegaMenuV3Props {
  sections: NavSection[];
  featured: FeaturedCard;
  align?: "left" | "center" | "right";
  footerLink?: { label: string; href: string };
  trackingLocation?: string;
}

export function MegaMenuV3({
  sections,
  featured,
  align = "center",
  footerLink,
  trackingLocation = "navbar_mega_menu",
}: MegaMenuV3Props) {
  const alignmentClass =
    align === "left"
      ? "left-0"
      : align === "right"
        ? "right-0"
        : "left-1/2 -translate-x-1/2";

  return (
    <div
      className={`absolute top-full ${alignmentClass} pt-3 animate-fade-in z-50`}
      style={{ width: "min(960px, calc(100vw - 2rem))", minWidth: "720px" }}
    >
      <div
        className="bg-popover border border-border rounded-2xl overflow-hidden grid grid-cols-12"
        style={{ boxShadow: "0 20px 50px -10px rgba(13,27,42,0.15)" }}
      >
        {/* Left: featured visual card — fixed proportions so portrait stays framed */}
        <a
          href={featured.href}
          className="col-span-5 xl:col-span-4 relative group min-h-[320px] lg:min-h-[340px] text-white overflow-hidden bg-[#0D1B2A]"
        >
          {/* Background image (right-anchored so portrait subjects stay visible) */}
          <div
            className="absolute inset-0 bg-no-repeat bg-cover"
            style={{
              backgroundImage: `url(${featured.image})`,
              backgroundPosition: "right center",
            }}
          />
          {/* Left-to-right gradient keeps text legible while preserving the subject on the right */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(13,27,42,0.95) 0%, rgba(13,27,42,0.78) 50%, rgba(13,27,42,0.2) 100%)",
            }}
          />
          <div className="relative h-full p-5 lg:p-6 flex flex-col justify-between max-w-[88%]">
            <div>
              <p className="text-[11px] uppercase tracking-[0.12em] font-bold opacity-80">
                {featured.eyebrow}
              </p>
              <h3 className="text-lg lg:text-xl font-bold mt-3 leading-tight">{featured.title}</h3>
              <p className="text-[13px] lg:text-sm opacity-85 mt-2 leading-snug">{featured.description}</p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold mt-4 group-hover:gap-2.5 transition-all">
              {featured.cta} <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </a>

        {/* Right: link sections */}
        <div className="col-span-7 xl:col-span-8 p-5 lg:p-6 grid grid-cols-2 gap-x-5 lg:gap-x-6 gap-y-4">

          {sections.map((section) => (
            <div key={section.header} className="min-w-0">
              <p
                className="text-[11px] uppercase tracking-[0.08em] font-bold mb-2"
                style={{ color: "#94A3B8" }}
              >
                {section.header}
              </p>
              <div className="flex flex-col">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      onClick={() => {
                        if (item.trackingId) {
                          trackEvent(CTA_EVENTS.navProductClick, {
                            cta: item.trackingId,
                            label: item.label,
                            href: item.href,
                            location: trackingLocation,
                            section: section.header,
                          });
                        }
                      }}
                      className="group flex items-start gap-3 rounded-lg p-2 -mx-2 transition-colors hover:bg-muted/60"
                    >
                      <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/15 transition-colors">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <p className="text-[13px] font-semibold leading-tight text-foreground group-hover:text-primary transition-colors">
                            {item.label}
                          </p>
                          {item.popular && (
                            <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full text-[10px] font-bold text-white bg-primary">
                              <Star className="w-2.5 h-2.5 fill-current" />
                            </span>
                          )}
                          {item.isNew && (
                            <span className="inline-flex px-1.5 py-0.5 rounded-full text-[9px] font-bold uppercase text-white bg-green-600">
                              New
                            </span>
                          )}
                          {item.comingSoon && (
                            <span className="inline-flex px-1.5 py-0.5 rounded-full bg-muted text-muted-foreground text-[9px] font-bold uppercase">
                              Soon
                            </span>
                          )}
                        </div>
                        {item.description && (
                          <p className="text-[12px] text-muted-foreground leading-snug mt-0.5 line-clamp-2">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          ))}

          {footerLink && (
            <div className="col-span-2 pt-3 mt-1 border-t border-border">
              <a
                href={footerLink.href}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
              >
                {footerLink.label} <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
