import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { ArrowLeft, Linkedin, Twitter } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { fetchArticleBySlug, fetchRelatedArticles, incrementArticleViews } from "@/lib/blog/queries";
import {
  type BlogArticle as BlogArticleType,
  formatDate,
  getCategoryBadgeClass,
  getInitials,
} from "@/lib/blog/types";

function renderContent(content: string) {
  // Lightweight markdown rendering: headings, lists, paragraphs, bold, code
  const lines = content.split("\n");
  const blocks: JSX.Element[] = [];
  let listBuffer: string[] = [];
  let listType: "ul" | "ol" | null = null;

  const flushList = () => {
    if (!listType || listBuffer.length === 0) return;
    const Tag = listType;
    blocks.push(
      <Tag key={`list-${blocks.length}`} className={`my-4 ${listType === "ul" ? "list-disc" : "list-decimal"} pl-6 space-y-2 text-foreground`}>
        {listBuffer.map((it, i) => (
          <li key={i} dangerouslySetInnerHTML={{ __html: inline(it) }} />
        ))}
      </Tag>,
    );
    listBuffer = [];
    listType = null;
  };

  const inline = (text: string) =>
    text
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/`([^`]+)`/g, '<code class="px-1 py-0.5 rounded bg-muted text-foreground text-sm">$1</code>');

  lines.forEach((line, idx) => {
    if (/^##\s+/.test(line)) {
      flushList();
      blocks.push(
        <h2 key={idx} className="text-2xl md:text-3xl font-bold mt-10 mb-4 text-foreground">
          {line.replace(/^##\s+/, "")}
        </h2>,
      );
    } else if (/^###\s+/.test(line)) {
      flushList();
      blocks.push(
        <h3 key={idx} className="h3-global mt-8 mb-3 text-foreground">
          {line.replace(/^###\s+/, "")}
        </h3>,
      );
    } else if (/^\d+\.\s+/.test(line)) {
      if (listType !== "ol") flushList();
      listType = "ol";
      listBuffer.push(line.replace(/^\d+\.\s+/, ""));
    } else if (/^-\s+/.test(line)) {
      if (listType !== "ul") flushList();
      listType = "ul";
      listBuffer.push(line.replace(/^-\s+/, ""));
    } else if (line.trim() === "") {
      flushList();
    } else {
      flushList();
      blocks.push(
        <p
          key={idx}
          className="my-4 text-foreground leading-relaxed text-base md:text-lg"
          dangerouslySetInnerHTML={{ __html: inline(line) }}
        />,
      );
    }
  });
  flushList();
  return blocks;
}

export default function BlogArticle() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<BlogArticleType | null>(null);
  const [related, setRelated] = useState<BlogArticleType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    window.scrollTo(0, 0);
    fetchArticleBySlug(slug)
      .then(async (a) => {
        if (!a) {
          navigate("/blog", { replace: true });
          return;
        }
        setArticle(a);
        incrementArticleViews(slug);
        const rel = await fetchRelatedArticles(a, 3);
        setRelated(rel);
      })
      .finally(() => setLoading(false));
  }, [slug, navigate]);

  if (loading || !article) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-32 text-center text-muted-foreground">Loading...</div>
        <Footer />
      </div>
    );
  }

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${article.title} | Intraverse Blog`}
        description={article.excerpt}
        canonical={`https://intraverse.africa/blog/${article.slug}`}
        ogImage={article.cover_image_url || "https://intraverse.africa/og-default.png"}
        ogType="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: article.title,
          description: article.excerpt,
          datePublished: article.published_at,
          dateModified: article.updated_at,
          author: { "@type": "Person", name: article.author?.name ?? "Intraverse" },
          image: article.cover_image_url,
          mainEntityOfPage: `https://intraverse.africa/blog/${article.slug}`,
        }}
      />
      <Navbar />

      <article className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>

          {article.category && (
            <Link
              to={`/blog?category=${article.category.slug}`}
              className={`inline-flex w-fit text-xs font-medium px-2.5 py-1 rounded-full border mb-4 ${getCategoryBadgeClass(article.category.slug)}`}
            >
              {article.category.name}
            </Link>
          )}
          <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6">
            {article.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">{article.excerpt}</p>

          {/* Author row */}
          <div className="flex items-center gap-3 mb-10 pb-8 border-b border-border">
            <Avatar className="h-12 w-12">
              <AvatarImage src={article.author?.avatar_url ?? undefined} />
              <AvatarFallback>{getInitials(article.author?.name)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="font-bold text-foreground">{article.author?.name ?? "Intraverse"}</p>
              <p className="text-sm text-muted-foreground">
                {article.author?.role ?? "Editorial"} · {formatDate(article.published_at)} ·{" "}
                {article.read_time_minutes} min read
              </p>
            </div>
            <div className="flex gap-2">
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(article.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 flex items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Share on Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 flex items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Share on LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Cover image */}
          {article.cover_image_url && (
            <img
              src={article.cover_image_url}
              alt={article.title}
              className="w-full aspect-video object-cover rounded-lg mb-10"
            />
          )}

          {/* Content */}
          <div className="prose-content">{renderContent(article.content)}</div>

          {/* Author bio */}
          {article.author?.bio && (
            <div className="mt-12 p-6 bg-muted/30 border border-border rounded-lg flex gap-4">
              <Avatar className="h-14 w-14 shrink-0">
                <AvatarImage src={article.author.avatar_url ?? undefined} />
                <AvatarFallback>{getInitials(article.author.name)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-bold text-foreground">{article.author.name}</p>
                <p className="text-sm text-muted-foreground">{article.author.bio}</p>
              </div>
            </div>
          )}
        </div>
      </article>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-muted/30 border-t border-border py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {related.map((a) => (
                <ArticleCard key={a.id} article={a} />
              ))}
            </div>
            <div className="text-center mt-10">
              <Button asChild variant="outline" size="lg" className="rounded-none">
                <Link to="/blog">View All Articles</Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      <Footer />
      <WhatsAppFab />
    </div>
  );
}
