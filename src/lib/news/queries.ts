import { supabase } from "@/integrations/supabase/client";
import type { NewsCategory, NewsEvent, NewsItem } from "./types";

interface ListParams {
  category?: NewsCategory | "all";
  excludeId?: string;
  page?: number;
  pageSize?: number;
}

export async function fetchNewsItems({
  category = "all",
  excludeId,
  page = 0,
  pageSize = 9,
}: ListParams): Promise<{ items: NewsItem[]; count: number }> {
  let q = supabase
    .from("news_items")
    .select("*", { count: "exact" })
    .eq("status", "published")
    .order("published_at", { ascending: false });

  if (category !== "all") q = q.eq("category", category);
  if (excludeId) q = q.neq("id", excludeId);

  const from = page * pageSize;
  const to = from + pageSize - 1;
  q = q.range(from, to);

  const { data, count, error } = await q;
  if (error) throw error;
  return { items: (data ?? []) as NewsItem[], count: count ?? 0 };
}

export async function fetchFeaturedNews(): Promise<NewsItem | null> {
  const { data } = await supabase
    .from("news_items")
    .select("*")
    .eq("status", "published")
    .eq("is_featured", true)
    .order("published_at", { ascending: false })
    .limit(1)
    .maybeSingle();
  return (data as NewsItem | null) ?? null;
}

export async function fetchLatestNews(limit = 5): Promise<NewsItem[]> {
  const { data } = await supabase
    .from("news_items")
    .select("*")
    .eq("status", "published")
    .order("published_at", { ascending: false })
    .limit(limit);
  return (data ?? []) as NewsItem[];
}

export async function fetchNewsBySlug(slug: string): Promise<NewsItem | null> {
  const { data } = await supabase
    .from("news_items")
    .select("*")
    .eq("slug", slug)
    .eq("status", "published")
    .maybeSingle();
  return (data as NewsItem | null) ?? null;
}

export async function fetchRelatedNews(item: NewsItem, limit = 3): Promise<NewsItem[]> {
  const { data } = await supabase
    .from("news_items")
    .select("*")
    .eq("status", "published")
    .eq("category", item.category)
    .neq("id", item.id)
    .order("published_at", { ascending: false })
    .limit(limit);
  return (data ?? []) as NewsItem[];
}

export async function fetchUpcomingEvents(limit = 3): Promise<NewsEvent[]> {
  const { data } = await supabase
    .from("news_events")
    .select("*")
    .eq("is_active", true)
    .gte("event_date", new Date().toISOString())
    .order("event_date", { ascending: true })
    .limit(limit);
  return (data ?? []) as NewsEvent[];
}

export async function incrementNewsViews(slug: string) {
  await supabase.rpc("increment_news_views", { news_slug: slug });
}
