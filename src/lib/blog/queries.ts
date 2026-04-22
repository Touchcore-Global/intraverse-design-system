import { supabase } from "@/integrations/supabase/client";
import type { BlogArticle, BlogAuthor, BlogCategory } from "./types";

const ARTICLE_SELECT = `
  *,
  category:blog_categories(*),
  author:blog_authors(*)
`;

export async function fetchCategories(): Promise<BlogCategory[]> {
  const { data, error } = await supabase
    .from("blog_categories")
    .select("*")
    .order("display_order");
  if (error) throw error;
  return (data ?? []) as BlogCategory[];
}

export async function fetchAuthors(): Promise<BlogAuthor[]> {
  const { data, error } = await supabase
    .from("blog_authors")
    .select("*")
    .order("name");
  if (error) throw error;
  return (data ?? []) as BlogAuthor[];
}

export async function fetchFeaturedArticle(): Promise<BlogArticle | null> {
  const { data: featured } = await supabase
    .from("blog_articles")
    .select(ARTICLE_SELECT)
    .eq("status", "published")
    .eq("is_featured", true)
    .order("published_at", { ascending: false })
    .limit(1)
    .maybeSingle();
  if (featured) return featured as unknown as BlogArticle;

  const { data: latest } = await supabase
    .from("blog_articles")
    .select(ARTICLE_SELECT)
    .eq("status", "published")
    .order("published_at", { ascending: false })
    .limit(1)
    .maybeSingle();
  return (latest as unknown as BlogArticle) ?? null;
}

export interface ArticleListParams {
  categorySlug?: string;
  search?: string;
  excludeId?: string;
  page?: number;
  pageSize?: number;
}

export async function fetchArticles(params: ArticleListParams = {}): Promise<{
  articles: BlogArticle[];
  count: number;
}> {
  const { categorySlug, search, excludeId, page = 0, pageSize = 9 } = params;
  let q = supabase
    .from("blog_articles")
    .select(ARTICLE_SELECT + ", category:blog_categories!inner(*)", { count: "exact" })
    .eq("status", "published");

  if (categorySlug && categorySlug !== "all") {
    q = q.eq("category.slug", categorySlug);
  }
  if (search && search.trim()) {
    const term = `%${search.trim()}%`;
    q = q.or(`title.ilike.${term},excerpt.ilike.${term}`);
  }
  if (excludeId) q = q.neq("id", excludeId);

  q = q
    .order("published_at", { ascending: false })
    .range(page * pageSize, page * pageSize + pageSize - 1);

  const { data, error, count } = await q;
  if (error) throw error;
  return { articles: (data ?? []) as unknown as BlogArticle[], count: count ?? 0 };
}

export async function fetchArticleBySlug(slug: string): Promise<BlogArticle | null> {
  const { data, error } = await supabase
    .from("blog_articles")
    .select(ARTICLE_SELECT)
    .eq("slug", slug)
    .eq("status", "published")
    .maybeSingle();
  if (error) throw error;
  return (data as unknown as BlogArticle) ?? null;
}

export async function fetchPopularArticles(limit = 5): Promise<BlogArticle[]> {
  const { data, error } = await supabase
    .from("blog_articles")
    .select(ARTICLE_SELECT)
    .eq("status", "published")
    .order("view_count", { ascending: false })
    .limit(limit);
  if (error) throw error;
  return (data ?? []) as unknown as BlogArticle[];
}

export async function fetchRelatedArticles(article: BlogArticle, limit = 3): Promise<BlogArticle[]> {
  let q = supabase
    .from("blog_articles")
    .select(ARTICLE_SELECT)
    .eq("status", "published")
    .neq("id", article.id);
  if (article.category_id) q = q.eq("category_id", article.category_id);
  q = q.order("published_at", { ascending: false }).limit(limit);
  const { data, error } = await q;
  if (error) throw error;
  return (data ?? []) as unknown as BlogArticle[];
}

export async function fetchCategoryCounts(): Promise<Record<string, number>> {
  const { data, error } = await supabase
    .from("blog_articles")
    .select("category_id")
    .eq("status", "published");
  if (error) throw error;
  const counts: Record<string, number> = {};
  (data ?? []).forEach((row: { category_id: string | null }) => {
    if (row.category_id) counts[row.category_id] = (counts[row.category_id] ?? 0) + 1;
  });
  return counts;
}

export async function incrementArticleViews(slug: string) {
  await supabase.rpc("increment_article_views", { article_slug: slug });
}
