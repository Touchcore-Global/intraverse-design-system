import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Loader2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Button } from "@/components/ui/button";
import { NewsCard } from "@/components/news/NewsCard";
import { FeaturedNews } from "@/components/news/FeaturedNews";
import { NewsSidebar } from "@/components/news/NewsSidebar";
import { PressKitSection } from "@/components/news/PressKitSection";
import {
  fetchFeaturedNews,
  fetchLatestNews,
  fetchNewsItems,
  fetchUpcomingEvents,
} from "@/lib/news/queries";
import { NEWS_CATEGORIES, type NewsCategory, type NewsEvent, type NewsItem } from "@/lib/news/types";
import { SEO } from "@/components/SEO";

const PAGE_SIZE = 9;

export default function News() {
  const [params, setParams] = useSearchParams();
  const activeCategory = (params.get("category") ?? "all") as NewsCategory | "all";

  const [featured, setFeatured] = useState<NewsItem | null>(null);
  const [latest, setLatest] = useState<NewsItem[]>([]);
  const [events, setEvents] = useState<NewsEvent[]>([]);
  const [items, setItems] = useState<NewsItem[]>([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    (async () => {
      const [feat, lat, ev] = await Promise.all([
        fetchFeaturedNews(),
        fetchLatestNews(5),
        fetchUpcomingEvents(3),
      ]);
      setFeatured(feat);
      setLatest(lat);
      setEvents(ev);
    })();
  }, []);

  useEffect(() => {
    setLoading(true);
    setPage(0);
    fetchNewsItems({
      category: activeCategory,
      excludeId: activeCategory === "all" ? featured?.id : undefined,
      page: 0,
      pageSize: PAGE_SIZE,
    })
      .then(({ items, count }) => {
        setItems(items);
        setTotal(count);
      })
      .finally(() => setLoading(false));
  }, [activeCategory, featured?.id]);

  const handleLoadMore = async () => {
    setLoadingMore(true);
    const next = page + 1;
    const { items: more } = await fetchNewsItems({
      category: activeCategory,
      excludeId: activeCategory === "all" ? featured?.id : undefined,
      page: next,
      pageSize: PAGE_SIZE,
    });
    setItems((p) => [...p, ...more]);
    setPage(next);
    setLoadingMore(false);
  };

  const setCategoryFilter = (slug: string) => {
    const next = new URLSearchParams(params);
    if (slug === "all") next.delete("category");
    else next.set("category", slug);
    setParams(next, { replace: true });
  };

  const tabs = useMemo(() => NEWS_CATEGORIES, []);
  const hasMore = items.length < total;

  const scrollToPressContact = () => {
    document.getElementById("press-contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="News & Press — Intraverse in the Media"
        description="Latest news, press releases, and media coverage about Intraverse. Product launches, partnerships, and industry recognition in African travel technology."
        canonical="https://intraverse.africa/news"
      />
      <Helmet>
        <title>News &amp; Press | Intraverse</title>
        <meta
          name="description"
          content="Press releases, media coverage, events, and milestones from Intraverse - the Africa-first travel technology company building travel infrastructure for the continent."
        />
        <link rel="canonical" href="https://intraverse.africa/news" />
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section className="border-b border-border bg-gradient-to-b from-primary/5 to-background pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-xs font-bold text-primary uppercase tracking-wider mb-4">News &amp; Press</p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            What's Happening at Intraverse
          </h1>
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Press releases, media coverage, event announcements, and milestones from the team building Africa's
            travel infrastructure. For press inquiries, contact our communications team directly.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button size="lg" className="rounded-none" onClick={scrollToPressContact}>
              Press Inquiries
            </Button>
            <Button size="lg" variant="outline" className="rounded-none" asChild>
              <a href="#press-kit">Download Press Kit</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Sticky tabs */}
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
        {featured && activeCategory === "all" && (
          <div className="mb-12">
            <FeaturedNews item={featured} />
          </div>
        )}

        <div className="grid lg:grid-cols-[1fr_280px] gap-10">
          <div>
            {loading ? (
              <div className="flex justify-center py-20">
                <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
              </div>
            ) : items.length === 0 ? (
              <div className="text-center py-20 border border-dashed border-border rounded-lg">
                <p className="text-lg font-medium text-foreground mb-2">No news in this category yet</p>
                <p className="text-sm text-muted-foreground">Check back soon or try another category.</p>
              </div>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((n) => (
                    <NewsCard key={n.id} item={n} />
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
                        "Load More"
                      )}
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>

          <div className="hidden lg:block">
            <NewsSidebar latest={latest} events={events} />
          </div>
        </div>
      </main>

      <PressKitSection />

      {/* Press contact */}
      <section id="press-contact" className="bg-background border-t border-border py-16">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Press &amp; Media Inquiries</h2>
          <p className="text-base text-muted-foreground mb-6">
            For interviews, comments, or media kits, contact our communications team. We respond within 24 hours.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button size="lg" className="rounded-none" asChild>
              <a href="mailto:press@intraverse.com">Email press@intraverse.com</a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-none" asChild>
              <a href="#press-kit">Download Press Kit</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFab />
    </div>
  );
}
