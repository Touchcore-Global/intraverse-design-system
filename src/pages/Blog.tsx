import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { Search, Linkedin, Loader2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { FeaturedArticle } from "@/components/blog/FeaturedArticle";
import { BlogSidebar } from "@/components/blog/BlogSidebar";
import {
  fetchArticles,
  fetchCategories,
  fetchCategoryCounts,
  fetchFeaturedArticle,
  fetchPopularArticles,
} from "@/lib/blog/queries";
import type { BlogArticle, BlogCategory } from "@/lib/blog/types";
import { SEO } from "@/components/SEO";

const PAGE_SIZE = 9;

export default function Blog() {
  const [params, setParams] = useSearchParams();
  const activeCategory = params.get("category") ?? "all";
  const [search, setSearch] = useState(params.get("q") ?? "");
  const [debouncedSearch, setDebouncedSearch] = useState(search);

  const [categories, setCategories] = useState<BlogCategory[]>([]);
  const [categoryCounts, setCategoryCounts] = useState<Record<string, number>>({});
  const [featured, setFeatured] = useState<BlogArticle | null>(null);
  const [popular, setPopular] = useState<BlogArticle[]>([]);
  const [articles, setArticles] = useState<BlogArticle[]>([]);
  const [page, setPage] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  // Debounce search input
  useEffect(() => {
    const t = setTimeout(() => setDebouncedSearch(search), 300);
    return () => clearTimeout(t);
  }, [search]);

  // Initial load
  useEffect(() => {
    (async () => {
      const [cats, counts, feat, pop] = await Promise.all([
        fetchCategories(),
        fetchCategoryCounts(),
        fetchFeaturedArticle(),
        fetchPopularArticles(5),
      ]);
      setCategories(cats);
      setCategoryCounts(counts);
      setFeatured(feat);
      setPopular(pop);
    })();
  }, []);

  // Load filtered list
  useEffect(() => {
    setLoading(true);
    setPage(0);
    fetchArticles({
      categorySlug: activeCategory,
      search: debouncedSearch,
      excludeId: featured?.id,
      page: 0,
      pageSize: PAGE_SIZE,
    })
      .then(({ articles, count }) => {
        setArticles(articles);
        setTotalCount(count);
      })
      .finally(() => setLoading(false));
  }, [activeCategory, debouncedSearch, featured?.id]);

  const handleLoadMore = async () => {
    setLoadingMore(true);
    const nextPage = page + 1;
    const { articles: more } = await fetchArticles({
      categorySlug: activeCategory,
      search: debouncedSearch,
      excludeId: featured?.id,
      page: nextPage,
      pageSize: PAGE_SIZE,
    });
    setArticles((prev) => [...prev, ...more]);
    setPage(nextPage);
    setLoadingMore(false);
  };

  const setCategoryFilter = (slug: string) => {
    const next = new URLSearchParams(params);
    if (slug === "all") next.delete("category");
    else next.set("category", slug);
    setParams(next, { replace: true });
  };

  const tabs = useMemo(
    () => [{ slug: "all", name: "All" }, ...categories.map((c) => ({ slug: c.slug, name: c.name }))],
    [categories],
  );

  const hasMore = articles.length < totalCount;

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Blog — Travel Industry Insights & Product Updates | Intraverse"
        description="Insights for African travel businesses. Industry analysis, product updates, agent success stories, and practical guides for growing your travel business in Nigeria."
        canonical="https://intraverse.africa/blog"
      />
      <Navbar />

      {/* Hero */}
      <section className="border-b border-border bg-gradient-to-b from-primary/5 to-background pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-xs font-bold text-primary uppercase tracking-wider mb-4">Intraverse Blog</p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Insights, Updates, and Ideas for African Travel Businesses
          </h1>
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            The latest from the team building Africa's travel infrastructure - product launches, industry
            analysis, growth strategies, and the lessons we're learning along the way.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setDebouncedSearch(search);
            }}
            className="relative max-w-xl mx-auto mb-6"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search articles..."
              className="pl-12 h-12 text-base rounded-none"
            />
          </form>

          <div className="flex flex-wrap gap-3 justify-center">
            <Button size="lg" className="rounded-none">
              Subscribe for Updates
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-none"
              asChild
            >
              <a href="https://linkedin.com/company/intraverse" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                Follow on LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Sticky category tabs */}
      <div className="sticky top-16 z-30 bg-background/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto scrollbar-hide -mx-1 px-1">
            {tabs.map((tab) => {
              const isActive = activeCategory === tab.slug;
              return (
                <button
                  key={tab.slug}
                  onClick={() => setCategoryFilter(tab.slug)}
                  className={`whitespace-nowrap px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                    isActive
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        {/* Featured (only when no filter/search active) */}
        {featured && activeCategory === "all" && !debouncedSearch && (
          <div className="mb-12">
            <FeaturedArticle article={featured} />
          </div>
        )}

        <div className="grid lg:grid-cols-[1fr_280px] gap-10">
          {/* Articles grid */}
          <div>
            {loading ? (
              <div className="flex justify-center py-20">
                <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
              </div>
            ) : articles.length === 0 ? (
              <div className="text-center py-20 border border-dashed border-border rounded-lg">
                <p className="text-lg font-medium text-foreground mb-2">No articles found</p>
                <p className="text-sm text-muted-foreground">
                  Try a different category or search term.
                </p>
              </div>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {articles.map((a) => (
                    <ArticleCard key={a.id} article={a} />
                  ))}
                </div>
                {hasMore && (
                  <div className="flex justify-center mt-10">
                    <Button
                      onClick={handleLoadMore}
                      disabled={loadingMore}
                      variant="outline"
                      size="lg"
                      className="rounded-none"
                    >
                      {loadingMore ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" /> Loading...
                        </>
                      ) : (
                        "Load More Articles"
                      )}
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Sidebar */}
          <div className="hidden lg:block">
            <BlogSidebar
              popular={popular}
              categories={categories}
              categoryCounts={categoryCounts}
              activeCategory={activeCategory}
              onCategorySelect={setCategoryFilter}
            />
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppFab />
    </div>
  );
}
