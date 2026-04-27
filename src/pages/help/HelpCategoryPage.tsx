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
import { WHATSAPP_URL } from "@/lib/constants";

export default function HelpCategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const category = slug ? getCategoryBySlug(slug) : undefined;
  const [query, setQuery] = useState("");

  const hero = useScrollReveal();
  const articlesSection = useScrollReveal();
  const relatedSection = useScrollReveal();
  const ctaSection = useScrollReveal();

  useEffect(() => {
    if (!category) return;
    document.title = `${category.title} | Help Centre | Intraverse`;
    const setMeta = (name: string, content: string) => {
      const attr = name.startsWith("og:") ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("description", `${category.heroSub.split(".")[0]}. Browse articles, watch tutorials, and get support from our Lagos-based team.`);
    setMeta("og:title", `${category.title} - Intraverse Help Centre`);
    window.scrollTo(0, 0);
  }, [category]);

  if (!category) return <NotFound />;

  const Icon = category.icon;
  const related = getRelatedCategories(category.relatedSlugs);

  const filteredArticles = query.trim()
    ? category.articles.filter(a => a.title.toLowerCase().includes(query.toLowerCase()))
    : category.articles;

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* ── HERO ── */}
        <section className="bg-background py-16 md:py-20">
          <div
            ref={hero.ref}
            className={`container mx-auto px-4 max-w-3xl transition-all duration-700 ${hero.revealClass}`}
          >
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-sm text-muted-foreground mb-8">
              <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <Link to="/help" className="hover:text-foreground transition-colors">Help Centre</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-foreground font-medium">{category.title}</span>
            </nav>

            <div className="flex items-start gap-5 mb-6">
              <div className="h-16 w-16 rounded-2xl bg-[hsl(220,76%,49%)]/10 flex items-center justify-center shrink-0">
                <Icon className="h-8 w-8 text-[hsl(220,76%,49%)]" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-3">
                  {category.heroHeadline}
                </h1>
                <p className="text-lg text-muted-foreground max-w-xl">
                  {category.heroSub}
                </p>
              </div>
            </div>

            {/* Search */}
            <div className="relative max-w-xl mt-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder={`Search articles in ${category.title}...`}
                value={query}
                onChange={e => setQuery(e.target.value)}
                className="h-12 pl-12 pr-4 text-base rounded-xl border-border shadow-sm focus-visible:ring-primary"
              />
            </div>
          </div>
        </section>

        {/* ── ARTICLES ── */}
        <section className="py-16 md:py-20 bg-background border-t border-border">
          <div
            ref={articlesSection.ref}
            className={`container mx-auto px-4 max-w-3xl transition-all duration-700 ${articlesSection.revealClass}`}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">
              Articles in {category.title}
            </h2>
            {filteredArticles.length > 0 ? (
              <ul className="divide-y divide-border">
                {filteredArticles.map(article => (
                  <li key={article.slug}>
                    <Link
                      to={`/help/${category.slug}/${article.slug}`}
                      className="group flex items-center justify-between py-4 px-4 -mx-4 rounded-lg hover:bg-accent/50 transition-colors"
                    >
                      <span className="text-base font-medium text-foreground group-hover:text-[hsl(220,76%,49%)] transition-colors">
                        {article.title}
                      </span>
                      <span className="text-sm text-muted-foreground whitespace-nowrap ml-4 flex items-center gap-1 group-hover:text-[hsl(220,76%,49%)] transition-colors">
                        Read article
                        <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-muted-foreground py-8">
                No articles match your search. Try a different keyword or{" "}
                <a href={WHATSAPP_URL} className="text-[hsl(220,76%,49%)] underline" target="_blank" rel="noopener noreferrer">
                  message us on WhatsApp
                </a>.
              </p>
            )}
          </div>
        </section>

        {/* ── RELATED CATEGORIES ── */}
        <section className="py-16 md:py-20 bg-background">
          <div
            ref={relatedSection.ref}
            className={`container mx-auto px-4 max-w-4xl transition-all duration-700 ${relatedSection.revealClass}`}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10 text-center">
              Related Help Topics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map(rel => {
                const RelIcon = rel.icon;
                return (
                  <Link
                    key={rel.slug}
                    to={`/help/${rel.slug}`}
                    className="group bg-background rounded-xl p-8 border border-border hover:border-[hsl(220,76%,49%)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
                  >
                    <RelIcon className="h-10 w-10 text-[hsl(220,76%,49%)] mx-auto mb-4" />
                    <h3 className="h3-global text-foreground mb-1 group-hover:text-[hsl(220,76%,49%)] transition-colors">
                      {rel.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">{rel.heroSub.split(".")[0]}.</p>
                    <span className="text-sm font-medium text-[hsl(220,76%,49%)] flex items-center justify-center gap-1">
                      Browse <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── STILL NEED HELP CTA ── */}
        <section className="py-16 md:py-20" style={{ backgroundColor: "hsl(214, 100%, 97%)" }}>
          <div
            ref={ctaSection.ref}
            className={`container mx-auto px-4 max-w-2xl text-center transition-all duration-700 ${ctaSection.revealClass}`}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Our Lagos-based support team responds via WhatsApp within 2 hours during business days. Reach out - we're happy to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="xl" className="w-full sm:w-auto gap-2" asChild>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </a>
              <a href="mailto:support@intraverse.com">
                <Button variant="outline" size="xl" className="w-full sm:w-auto rounded-none border-foreground text-foreground hover:bg-accent">
                  Email Support
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}