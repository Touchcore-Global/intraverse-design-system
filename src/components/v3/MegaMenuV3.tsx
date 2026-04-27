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
  /** Layout variant. "default" = featured card + 2-col link grid. "solutions" = horizontal sections with image cards for use cases. */
  variant?: "default" | "solutions";
}

export function MegaMenuV3({
  sections,
  featured,
  align = "center",
  footerLink,
  trackingLocation = "navbar_mega_menu",
  variant = "default",
}: MegaMenuV3Props) {
  const alignmentClass =
    align === "left"
      ? "left-0"
      : align === "right"
        ? "right-0"
        : "left-1/2 -translate-x-1/2";

  const track = (item: { trackingId?: string; label: string; href: string }, sectionHeader: string) => {
    if (item.trackingId) {
      trackEvent(CTA_EVENTS.navProductClick, {
        cta: item.trackingId,
        label: item.label,
        href: item.href,
        location: trackingLocation,
        section: sectionHeader,
      });
    }
  };

  // ---------- SOLUTIONS VARIANT (horizontal, image-rich) ----------
  if (variant === "solutions") {
    const audiences = sections.find((s) => /audience/i.test(s.header));
    const useCases = sections.find((s) => /use ?case/i.test(s.header));

    return (
      <div
        className={`absolute top-full ${alignmentClass} pt-3 animate-fade-in z-50`}
        style={{ width: "min(1080px, calc(100vw - 2rem))", minWidth: "780px" }}
      >
        <div
          className="bg-popover border border-border rounded-2xl overflow-hidden"
          style={{ boxShadow: "0 20px 50px -10px rgba(13,27,42,0.15)" }}
        >
          {/* By Audience — horizontal chip row (rendered second, below use cases) */}

          {/* By Use Case — horizontal image card grid */}
          {useCases && (
            <div className={`p-5 lg:p-6 ${audiences ? "border-b border-border" : ""}`}>
              {(() => {
                const featuredCases = useCases.items.slice(0, 3);
                const moreCases = useCases.items.slice(3);
                return (
                  <>
                    {/* Row: header column + 3 image cards = 4 columns */}
                    <div className="grid grid-cols-4 gap-4">
                      <div className="flex flex-col justify-center pr-2">
                        <p
                          className="text-[11px] uppercase tracking-[0.08em] font-bold"
                          style={{ color: "#94A3B8" }}
                        >
                          {useCases.header}
                        </p>
                        <p className="text-[13px] text-muted-foreground mt-2 leading-snug">
                          Discover the most common ways teams put Intraverse to work — from selling flights online to embedding travel in your own product.
                        </p>
                        {footerLink && (
                          <a
                            href={footerLink.href}
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all mt-3"
                          >
                            {footerLink.label} <ArrowRight className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                      {featuredCases.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          onClick={() => track(item, useCases.header)}
                          className="group rounded-xl overflow-hidden border border-border hover:border-primary/40 hover:shadow-md transition-all bg-background"
                        >
                          <div className="aspect-[16/9] w-full overflow-hidden bg-muted">
                            {item.image ? (
                              <img
                                src={item.image}
                                alt=""
                                loading="lazy"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            ) : (
                              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5" />
                            )}
                          </div>
                          <div className="p-3">
                            <p className="text-[13px] font-semibold leading-tight text-foreground group-hover:text-primary transition-colors">
                              {item.label}
                            </p>
                            {item.description && (
                              <p className="text-[12px] text-muted-foreground leading-snug mt-1 line-clamp-2">
                                {item.description}
                              </p>
                            )}
                          </div>
                        </a>
                      ))}
                    </div>

                    {/* Bottom: remaining use cases as compact text list */}
                    {moreCases.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-border grid grid-cols-3 gap-x-4 gap-y-1">
                        {moreCases.map((item) => {
                          const Icon = item.icon;
                          return (
                            <a
                              key={item.label}
                              href={item.href}
                              onClick={() => track(item, useCases.header)}
                              className="group flex items-center gap-2 py-1.5 rounded-md transition-colors"
                            >
                              <Icon className="w-3.5 h-3.5 text-primary shrink-0" />
                              <span className="text-[13px] font-medium text-foreground group-hover:text-primary transition-colors truncate">
                                {item.label}
                              </span>
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </>
                );
              })()}
            </div>
          )}

          {/* By Audience — horizontal chip row (rendered after use cases) */}
          {audiences && (
            <div className="p-5 lg:p-6">
              {(() => {
                const featuredAud = audiences.items.slice(0, 3);
                const moreAud = audiences.items.slice(3);
                return (
                  <>
                    {/* Row: header column + 3 audience cards = 4 columns */}
                    <div className="grid grid-cols-4 gap-4">
                      <div className="flex flex-col justify-center pr-2">
                        <p
                          className="text-[11px] uppercase tracking-[0.08em] font-bold"
                          style={{ color: "#94A3B8" }}
                        >
                          {audiences.header}
                        </p>
                        <p className="text-[13px] text-muted-foreground mt-2 leading-snug">
                          Built for the people who move travel forward — pick the audience that fits you to see tailored solutions.
                        </p>
                      </div>
                      {featuredAud.map((item) => {
                        const Icon = item.icon;
                        return (
                          <a
                            key={item.label}
                            href={item.href}
                            onClick={() => track(item, audiences.header)}
                            className="group rounded-xl p-4 border border-border bg-background hover:border-primary/40 hover:shadow-md transition-all flex flex-col"
                          >
                            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/15 transition-colors">
                              <Icon className="w-4.5 h-4.5 text-primary" />
                            </div>
                            <div className="flex items-center gap-1.5">
                              <p className="text-[13px] font-semibold leading-tight text-foreground group-hover:text-primary transition-colors">
                                {item.label}
                              </p>
                              {item.popular && (
                                <Star className="w-3 h-3 fill-primary text-primary" />
                              )}
                            </div>
                            {item.description && (
                              <p className="text-[12px] text-muted-foreground leading-snug mt-1 line-clamp-2">
                                {item.description}
                              </p>
                            )}
                          </a>
                        );
                      })}
                    </div>

                    {/* Bottom: remaining audiences as compact text list */}
                    {moreAud.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-border grid grid-cols-4 gap-x-4 gap-y-1">
                        {moreAud.map((item) => {
                          const Icon = item.icon;
                          return (
                            <a
                              key={item.label}
                              href={item.href}
                              onClick={() => track(item, audiences.header)}
                              className="group flex items-center gap-2 py-1.5 rounded-md transition-colors"
                            >
                              <Icon className="w-3.5 h-3.5 text-primary shrink-0" />
                              <span className="text-[13px] font-medium text-foreground group-hover:text-primary transition-colors truncate">
                                {item.label}
                              </span>
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </>
                );
              })()}
            </div>
          )}
        </div>
      </div>
    );
  }

  // ---------- DEFAULT VARIANT (featured card + 2-col link grid) ----------
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
          <div
            className="absolute inset-0 bg-no-repeat bg-cover"
            style={{
              backgroundImage: `url(${featured.image})`,
              backgroundPosition: "right center",
            }}
          />
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
              {section.image && (
                <div className="aspect-[16/9] w-full overflow-hidden rounded-lg mb-3 bg-muted">
                  <img
                    src={section.image}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
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
                      onClick={() => track(item, section.header)}
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
