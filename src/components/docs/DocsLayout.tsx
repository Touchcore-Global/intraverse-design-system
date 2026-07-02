import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Menu, X, ThumbsUp, ThumbsDown, ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { SEO } from "@/components/SEO";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { docCategories, getNeighbors } from "./docsNav";
import { POSTMAN_COLLECTION_URL } from "./DocsPostmanLink";

export type TocItem = { id: string; label: string };

interface DocsLayoutProps {
  slug: string;
  title: string;
  subtitle: string;
  toc?: TocItem[];
  children: React.ReactNode;
  metaTitle?: string;
  metaDescription?: string;
}

export function DocsLayout({
  slug,
  title,
  subtitle,
  toc = [],
  children,
  metaTitle,
  metaDescription,
}: DocsLayoutProps) {
  const location = useLocation();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [feedback, setFeedback] = useState<"up" | "down" | null>(null);
  const [activeId, setActiveId] = useState<string>("");
  const { prev, next } = getNeighbors(slug);
  const current = docCategories.find((c) => c.slug === slug);

  useEffect(() => {
    if (toc.length === 0) return;
    const elements = toc
      .map((t) => document.getElementById(t.id))
      .filter((el): el is HTMLElement => !!el);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-96px 0px -70% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [toc, slug]);

  // Note: per-doc SEO meta is handled via the <SEO /> component on each Docs page.

  useEffect(() => {
    setMobileNavOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO
        title={metaTitle ?? `${current?.title ?? "Docs"} | API Docs | Intraverse`}
        description={metaDescription ?? subtitle}
        canonical={`https://intraverse.africa/docs/${slug}`}
      />
      <Navbar />
      <main className="flex-1 pt-16">
        <div className="container mx-auto px-4 lg:px-8 py-8 lg:py-12">
          <div className="lg:grid lg:grid-cols-[240px_minmax(0,1fr)_200px] lg:gap-10">
            {/* Sidebar - desktop */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  Documentation
                </p>
                <nav className="flex flex-col gap-0.5">
                  {docCategories.map((c) => {
                    const active = c.slug === slug;
                    return (
                      <Link
                        key={c.slug}
                        to={c.href}
                        className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${
                          active
                            ? "bg-[hsl(var(--brand-blue))] text-white font-medium"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                        }`}
                      >
                        <span className="text-base">{c.emoji}</span>
                        <span className="flex-1">{c.title}</span>
                        {c.isNew && (
                          <span className={`text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded ${active ? "bg-white/20 text-white" : "bg-[hsl(var(--brand-teal,178_60%_45%))] bg-teal-500 text-white"}`}>
                            New
                          </span>
                        )}
                      </Link>
                    );
                  })}
                </nav>
              </div>
            </aside>

            {/* Mobile nav toggle */}
            <div className="lg:hidden mb-4">
              <button
                onClick={() => setMobileNavOpen((v) => !v)}
                className="inline-flex items-center gap-2 px-3 py-2 border border-border rounded-md text-sm font-medium text-foreground"
                aria-expanded={mobileNavOpen}
                aria-label="Toggle docs navigation"
              >
                {mobileNavOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                Docs Menu
              </button>
              {mobileNavOpen && (
                <nav className="mt-3 flex flex-col gap-0.5 p-2 border border-border rounded-lg bg-card">
                  {docCategories.map((c) => {
                    const active = c.slug === slug;
                    return (
                      <Link
                        key={c.slug}
                        to={c.href}
                        className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${
                          active
                            ? "bg-[hsl(var(--brand-blue))] text-white font-medium"
                            : "text-foreground hover:bg-muted"
                        }`}
                      >
                        <span>{c.emoji}</span>
                        <span className="flex-1">{c.title}</span>
                        {c.isNew && (
                          <span className={`text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded ${active ? "bg-white/20 text-white" : "bg-teal-500 text-white"}`}>
                            New
                          </span>
                        )}
                      </Link>
                    );
                  })}
                </nav>
              )}
            </div>

            {/* Main content */}
            <article className="min-w-0 max-w-3xl mx-auto lg:mx-0 w-full animate-fade-in">
              {/* Breadcrumb */}
              <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-muted-foreground mb-6">
                <Link to="/docs" className="hover:text-foreground transition-colors">Docs</Link>
                <ChevronRight className="w-3.5 h-3.5" />
                <span className="text-foreground font-medium">{current?.title ?? title}</span>
              </nav>

              {/* Hero */}
              <header className="mb-10 pb-8 border-b border-border">
                <h1
                  className="text-foreground"
                  style={{
                    fontSize: "36px",
                    lineHeight: "1.15",
                    letterSpacing: "-0.5px",
                    fontWeight: 700,
                  }}
                >
                  {title}
                </h1>
                <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-[700px]">
                  {subtitle}
                </p>
              </header>

              {/* Body */}
              <div className="docs-content">{children}</div>

              {/* Page footer */}
              <div className="mt-16 pt-8 border-t border-border">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-muted-foreground">Was this page helpful?</span>
                    <button
                      onClick={() => setFeedback("up")}
                      aria-label="Helpful"
                      className={`p-2 rounded-md border transition-colors ${
                        feedback === "up"
                          ? "border-[hsl(var(--brand-blue))] bg-[#F0F5FC] text-[hsl(var(--brand-blue))]"
                          : "border-border text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <ThumbsUp className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setFeedback("down")}
                      aria-label="Not helpful"
                      className={`p-2 rounded-md border transition-colors ${
                        feedback === "down"
                          ? "border-red-400 bg-red-50 text-red-600"
                          : "border-border text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <ThumbsDown className="w-4 h-4" />
                    </button>
                    {feedback && (
                      <span className="text-xs text-muted-foreground">Thanks for the feedback.</span>
                    )}
                  </div>
                  <a
                    href={POSTMAN_COLLECTION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-border text-sm font-medium text-foreground hover:border-[hsl(var(--brand-blue))] hover:text-[hsl(var(--brand-blue))] transition-colors"
                  >
                    Open Postman collection
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="mt-8 grid sm:grid-cols-2 gap-3">
                  {prev ? (
                    <Link
                      to={prev.href}
                      className="group flex flex-col p-4 border border-border rounded-lg hover:border-[hsl(var(--brand-blue))] transition-colors"
                    >
                      <span className="text-xs text-muted-foreground inline-flex items-center gap-1">
                        <ArrowLeft className="w-3 h-3" /> Previous
                      </span>
                      <span className="mt-1 font-semibold text-foreground group-hover:text-[hsl(var(--brand-blue))]">
                        {prev.emoji} {prev.title}
                      </span>
                    </Link>
                  ) : <div />}
                  {next ? (
                    <Link
                      to={next.href}
                      className="group flex flex-col items-end text-right p-4 border border-border rounded-lg hover:border-[hsl(var(--brand-blue))] transition-colors"
                    >
                      <span className="text-xs text-muted-foreground inline-flex items-center gap-1">
                        Next <ArrowRight className="w-3 h-3" />
                      </span>
                      <span className="mt-1 font-semibold text-foreground group-hover:text-[hsl(var(--brand-blue))]">
                        {next.emoji} {next.title}
                      </span>
                    </Link>
                  ) : <div />}
                </div>
              </div>
            </article>

            {/* Right TOC - desktop only */}
            <aside className="hidden lg:block">
              {toc.length > 0 && (
                <div className="sticky top-24">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                    On this page
                  </p>
                  <nav className="flex flex-col gap-1.5 border-l border-border">
                    {toc.map((t) => {
                      const active = activeId === t.id;
                      return (
                        <a
                          key={t.id}
                          href={`#${t.id}`}
                          className={`-ml-px pl-3 py-1 border-l-2 text-sm transition-colors ${
                            active
                              ? "border-[hsl(var(--brand-blue))] text-[hsl(var(--brand-blue))] font-medium"
                              : "border-transparent text-muted-foreground hover:text-foreground hover:border-[hsl(var(--brand-blue))]"
                          }`}
                        >
                          {t.label}
                        </a>
                      );
                    })}
                  </nav>
                </div>
              )}
            </aside>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

/* Shared section heading helper */
export function DocsSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 mt-12 first:mt-0">
      <h2
        className="text-foreground mb-4"
        style={{
          fontSize: "24px",
          lineHeight: "1.3",
          fontWeight: 700,
          letterSpacing: "-0.3px",
        }}
      >
        {title}
      </h2>
      <div className="text-[16px] leading-[1.7] text-muted-foreground space-y-4">{children}</div>
    </section>
  );
}
