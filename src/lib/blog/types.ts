export type ArticleStatus = "draft" | "published" | "archived";

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  display_order: number;
}

export interface BlogAuthor {
  id: string;
  name: string;
  slug: string;
  avatar_url: string | null;
  bio: string | null;
  role: string | null;
  twitter_url: string | null;
  linkedin_url: string | null;
}

export interface BlogArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover_image_url: string | null;
  category_id: string | null;
  author_id: string | null;
  status: ArticleStatus;
  is_featured: boolean;
  read_time_minutes: number;
  view_count: number;
  published_at: string | null;
  created_at: string;
  updated_at: string;
  category?: BlogCategory | null;
  author?: BlogAuthor | null;
}

export const CATEGORY_BADGE_VARIANTS: Record<string, string> = {
  "product-updates": "bg-emerald-100 text-emerald-800 border-emerald-200",
  "industry-insights": "bg-primary/10 text-primary border-primary/20",
  "growth-strategies": "bg-amber-100 text-amber-800 border-amber-200",
  engineering: "bg-slate-100 text-slate-800 border-slate-200",
  "company-news": "bg-violet-100 text-violet-800 border-violet-200",
  "guides-tutorials": "bg-sky-100 text-sky-800 border-sky-200",
};

export function getCategoryBadgeClass(slug?: string | null) {
  if (!slug) return "bg-muted text-muted-foreground border-border";
  return CATEGORY_BADGE_VARIANTS[slug] ?? "bg-muted text-muted-foreground border-border";
}

export function formatDate(iso?: string | null) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function getInitials(name?: string | null) {
  if (!name) return "??";
  return name
    .split(" ")
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}
