import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { ArrowLeft, ExternalLink, Linkedin, Twitter, Link2, MessageCircle } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Button } from "@/components/ui/button";
import { NewsCard } from "@/components/news/NewsCard";
import { fetchNewsBySlug, fetchRelatedNews, incrementNewsViews } from "@/lib/news/queries";
import {
  CATEGORY_LABEL,
  formatNewsDate,
  getNewsCategoryBadge,
  type NewsItem,
} from "@/lib/news/types";
import { toast } from "@/hooks/use-toast";

function renderBody(content: string) {
  const lines = content.split("\n");
  const blocks: JSX.Element[] = [];
  let listBuf: string[] = [];
  let listType: "ul" | "ol" | null = null;

  const inline = (t: string) =>
    t
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary underline">$1</a>');

  const flush = () => {
    if (!listType || listBuf.length === 0) return;
    const Tag = listType;
    blocks.push(
      <Tag
        key={`l-${blocks.length}`}
        className={`my-4 ${listType === "ul" ? "list-disc" : "list-decimal"} pl-6 space-y-2 text-foreground`}
      >
        {listBuf.map((it, i) => (
          <li key={i} dangerouslySetInnerHTML={{ __html: inline(it) }} />
        ))}
      </Tag>,
    );
    listBuf = [];
    listType = null;
  };

  lines.forEach((line, i) => {
    if (/^##\s+/.test(line)) {
      flush();
      blocks.push(
        <h2 key={i} className="text-2xl md:text-3xl font-bold mt-10 mb-4 text-foreground">
          {line.replace(/^##\s+/, "")}
        </h2>,
      );
    } else if (/^###\s+/.test(line)) {
      flush();
      blocks.push(
        <h3 key={i} className="h3-global mt-8 mb-3 text-foreground">
          {line.replace(/^###\s+/, "")}
        </h3>,
      );
    } else if (/^>\s+/.test(line)) {
      flush();
      blocks.push(
        <blockquote key={i} className="border-l-4 border-primary pl-4 italic text-muted-foreground my-6">
          {line.replace(/^>\s+/, "")}
        </blockquote>,
      );
    } else if (/^\d+\.\s+/.test(line)) {
      if (listType !== "ol") flush();
      listType = "ol";
      listBuf.push(line.replace(/^\d+\.\s+/, ""));
    } else if (/^-\s+/.test(line)) {
      if (listType !== "ul") flush();
      listType = "ul";
      listBuf.push(line.replace(/^-\s+/, ""));
    } else if (line.trim() === "") {
      flush();
    } else {
      flush();
      blocks.push(
        <p
          key={i}
          className="my-4 text-foreground leading-relaxed text-base md:text-lg"
          dangerouslySetInnerHTML={{ __html: inline(line) }}
        />,
      );
    }
  });
  flush();
  return blocks;
}

export default function NewsArticle() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [item, setItem] = useState<NewsItem | null>(null);
  const [related, setRelated] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    window.scrollTo(0, 0);
    fetchNewsBySlug(slug)
      .then(async (n) => {
        if (!n) {
          navigate("/news", { replace: true });
          return;
        }
        setItem(n);
        incrementNewsViews(slug);
        const rel = await fetchRelatedNews(n, 3);
        setRelated(rel);
      })
      .finally(() => setLoading(false));
  }, [slug, navigate]);

  if (loading || !item) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-32 text-center text-muted-foreground">Loading...</div>
        <Footer />
      </div>
    );
  }

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(shareUrl);
    toast({ title: "Link copied to clipboard" });
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${item.title} | News`}
        description={item.excerpt}
        canonicalPath={`/news/${item.slug}`}
        image={item.featured_image || "/og/news.png"}
        type="article"
        article={{
          publishedTime: item.published_at ?? undefined,
          modifiedTime: item.updated_at,
          section: item.category,
          tags: item.tags,
        }}
        jsonLd={
          item.category === "press-releases"
            ? {
                "@context": "https://schema.org",
                "@type": "NewsArticle",
                headline: item.title,
                description: item.excerpt,
                datePublished: item.published_at,
                dateModified: item.updated_at,
                image: item.featured_image,
                publisher: { "@type": "Organization", name: "Intraverse" },
              }
            : undefined
        }
      />
      <Navbar />

      <article className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Breadcrumb */}
          <nav className="text-sm text-muted-foreground mb-6 flex items-center gap-2 flex-wrap">
            <Link to="/news" className="hover:text-primary inline-flex items-center gap-1">
              <ArrowLeft className="h-3 w-3" /> News
            </Link>
            <span>/</span>
            <Link to={`/news?category=${item.category}`} className="hover:text-primary">
              {CATEGORY_LABEL[item.category]}
            </Link>
          </nav>

          <span
            className={`inline-flex w-fit text-xs font-semibold px-2.5 py-1 rounded-full border mb-4 ${getNewsCategoryBadge(item.category)}`}
          >
            {CATEGORY_LABEL[item.category]}
          </span>
          <p className="text-base text-muted-foreground mb-3">{formatNewsDate(item.published_at)}</p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6">{item.title}</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">{item.excerpt}</p>

          {/* Source attribution */}
          {item.source && (
            <div className="mb-8 p-4 bg-muted/40 border-l-4 border-primary">
              <p className="text-sm text-muted-foreground">
                Originally published in{" "}
                <span className="font-semibold text-foreground">{item.source}</span>
              </p>
              {item.source_url && (
                <a
                  href={item.source_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-2 text-sm text-primary font-semibold hover:underline"
                >
                  Read Original Article <ExternalLink className="h-3 w-3" />
                </a>
              )}
            </div>
          )}

          {/* Featured image */}
          {item.featured_image && (
            <img
              src={item.featured_image}
              alt={item.title}
              className="w-full aspect-video object-cover rounded-lg mb-10"
            />
          )}

          {/* Share bar (inline mobile, fixed desktop) */}
          <div className="lg:fixed lg:left-6 lg:top-1/2 lg:-translate-y-1/2 flex lg:flex-col gap-2 mb-8 lg:mb-0">
            <a
              href={`https://wa.me/?text=${encodeURIComponent(item.title + " " + shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on WhatsApp"
              className="h-10 w-10 flex items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-[hsl(var(--whatsapp))] hover:text-white transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
            <button
              onClick={handleCopyLink}
              aria-label="Copy link"
              className="h-10 w-10 flex items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Link2 className="h-4 w-4" />
            </button>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(item.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Twitter"
              className="h-10 w-10 flex items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on LinkedIn"
              className="h-10 w-10 flex items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>

          {/* Body */}
          <div className="prose-content">{renderBody(item.body || item.excerpt)}</div>
        </div>
      </article>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-muted/30 border-t border-border py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              More From Intraverse
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {related.map((n) => (
                <NewsCard key={n.id} item={n} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Press CTA */}
      <section className="bg-background border-t border-border py-16">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="text-base md:text-lg text-foreground mb-6">
            For press inquiries, interview requests, or media kits, contact{" "}
            <a href="mailto:press@intraverse.com" className="text-primary font-semibold hover:underline">
              press@intraverse.com
            </a>
          </p>
          <Button size="lg" variant="outline" className="rounded-none" asChild>
            <Link to="/news#press-kit">Download Press Kit →</Link>
          </Button>
        </div>
      </section>

      <Footer />
      <WhatsAppFab />
    </div>
  );
}
