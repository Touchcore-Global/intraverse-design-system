import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Search, ArrowRight, MessageCircle, ChevronRight } from "lucide-react";
import { getCategoryBySlug, getRelatedCategories } from "./helpCategoryData";
import NotFound from "@/pages/NotFound";
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
export default function HelpCategoryPage() {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  const { slug } = useParams<{ slug: string }>();
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  const category = slug ? getCategoryBySlug(slug) : undefined;
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  const [query, setQuery] = useState("");
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  const hero = useScrollReveal();
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  const articlesSection = useScrollReveal();
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  const relatedSection = useScrollReveal();
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  const ctaSection = useScrollReveal();
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  useEffect(() => {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    if (!category) return;
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    document.title = `${category.title} | Help Centre | Intraverse`;
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    const setMeta = (name: string, content: string) => {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      const attr = name.startsWith("og:") ? "property" : "name";
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      let el = document.querySelector(`meta[${attr}="${name}"]`);
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      el.setAttribute("content", content);
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    };
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    setMeta("description", `${category.heroSub.split(".")[0]}. Browse articles, watch tutorials, and get support from our Lagos-based team.`);
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    setMeta("og:title", `${category.title} — Intraverse Help Centre`);
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    window.scrollTo(0, 0);
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  }, [category]);
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  if (!category) return <NotFound />;
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  const Icon = category.icon;
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  const related = getRelatedCategories(category.relatedSlugs);
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  const filteredArticles = query.trim()
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    ? category.articles.filter(a => a.title.toLowerCase().includes(query.toLowerCase()))
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    : category.articles;
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  return (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    <>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <Navbar />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <main className="pt-16">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        {/* ── HERO ── */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <section className="bg-background py-16 md:py-20">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <div
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            ref={hero.ref}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            className={`container mx-auto px-4 max-w-3xl transition-all duration-700 ${hero.revealClass}`}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          >
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            {/* Breadcrumb */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <nav className="flex items-center gap-1.5 text-sm text-muted-foreground mb-8">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <ChevronRight className="h-3.5 w-3.5" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <Link to="/help" className="hover:text-foreground transition-colors">Help Centre</Link>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <ChevronRight className="h-3.5 w-3.5" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <span className="text-foreground font-medium">{category.title}</span>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </nav>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <div className="flex items-start gap-5 mb-6">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <div className="h-16 w-16 rounded-2xl bg-[hsl(220,76%,49%)]/10 flex items-center justify-center shrink-0">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <Icon className="h-8 w-8 text-[hsl(220,76%,49%)]" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-3">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  {category.heroHeadline}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </h1>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <p className="text-lg text-muted-foreground max-w-xl">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  {category.heroSub}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            {/* Search */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <div className="relative max-w-xl mt-8">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <Input
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                type="text"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                placeholder={`Search articles in ${category.title}...`}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                value={query}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                onChange={e => setQuery(e.target.value)}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                className="h-12 pl-12 pr-4 text-base rounded-xl border-border shadow-sm focus-visible:ring-primary"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </section>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        {/* ── ARTICLES ── */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <section className="py-16 md:py-20 bg-background border-t border-border">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <div
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            ref={articlesSection.ref}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            className={`container mx-auto px-4 max-w-3xl transition-all duration-700 ${articlesSection.revealClass}`}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          >
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              Articles in {category.title}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </h2>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            {filteredArticles.length > 0 ? (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <ul className="divide-y divide-border">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                {filteredArticles.map(article => (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <li key={article.slug}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <Link
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      to={`/help/${category.slug}/${article.slug}`}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      className="group flex items-center justify-between py-4 px-4 -mx-4 rounded-lg hover:bg-accent/50 transition-colors"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    >
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      <span className="text-base font-medium text-foreground group-hover:text-[hsl(220,76%,49%)] transition-colors">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                        {article.title}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      </span>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      <span className="text-sm text-muted-foreground whitespace-nowrap ml-4 flex items-center gap-1 group-hover:text-[hsl(220,76%,49%)] transition-colors">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                        Read article
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                        <ArrowRight className="h-3.5 w-3.5" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      </span>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    </Link>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  </li>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                ))}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </ul>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            ) : (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <p className="text-muted-foreground py-8">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                No articles match your search. Try a different keyword or{" "}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <a href={WHATSAPP_URL} className="text-[hsl(220,76%,49%)] underline" target="_blank" rel="noopener noreferrer">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  message us on WhatsApp
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </a>.
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            )}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </section>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        {/* ── RELATED CATEGORIES ── */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <section className="py-16 md:py-20 bg-background">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <div
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            ref={relatedSection.ref}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            className={`container mx-auto px-4 max-w-4xl transition-all duration-700 ${relatedSection.revealClass}`}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          >
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10 text-center">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              Related Help Topics
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </h2>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              {related.map(rel => {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                const RelIcon = rel.icon;
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                return (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <Link
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    key={rel.slug}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    to={`/help/${rel.slug}`}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    className="group bg-background rounded-xl p-8 border border-border hover:border-[hsl(220,76%,49%)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  >
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <RelIcon className="h-10 w-10 text-[hsl(220,76%,49%)] mx-auto mb-4" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-[hsl(220,76%,49%)] transition-colors">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      {rel.title}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    </h3>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <p className="text-sm text-muted-foreground mb-4">{rel.heroSub.split(".")[0]}.</p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <span className="text-sm font-medium text-[hsl(220,76%,49%)] flex items-center justify-center gap-1">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      Browse <ArrowRight className="h-3.5 w-3.5" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    </span>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  </Link>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                );
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              })}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </section>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        {/* ── STILL NEED HELP CTA ── */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <section className="py-16 md:py-20" style={{ backgroundColor: "hsl(214, 100%, 97%)" }}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <div
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            ref={ctaSection.ref}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            className={`container mx-auto px-4 max-w-2xl text-center transition-all duration-700 ${ctaSection.revealClass}`}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          >
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              Can't Find What You're Looking For?
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </h2>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <p className="text-lg text-muted-foreground mb-10">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              Our Lagos-based support team responds via WhatsApp within 2 hours during business days. Reach out — we're happy to help.
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <Button variant="hero" size="xl" className="w-full sm:w-auto gap-2">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <MessageCircle className="h-5 w-5" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  Chat on WhatsApp
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </Button>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </a>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <a href="mailto:support@intraverse.com">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <Button variant="outline" size="xl" className="w-full sm:w-auto rounded-none border-foreground text-foreground hover:bg-accent">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  Email Support
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </Button>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </a>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </section>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      </main>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <Footer />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <WhatsAppFab />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    </>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  );
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
}