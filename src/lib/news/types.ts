export type NewsCategory =
  | "press-releases"
  | "media-coverage"
  | "events"
  | "milestones"
  | "announcements";

export type NewsStatus = "draft" | "published" | "archived";

export interface NewsItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  category: NewsCategory;
  published_at: string | null;
  source: string | null;
  source_url: string | null;
  featured_image: string | null;
  tags: string[];
  is_featured: boolean;
  press_kit_relevant: boolean;
  view_count: number;
  status: NewsStatus;
  created_at: string;
  updated_at: string;
}

export interface NewsEvent {
  id: string;
  name: string;
  location: string | null;
  event_date: string;
  details_url: string | null;
  display_order: number;
  is_active: boolean;
}

export const NEWS_CATEGORIES: { slug: NewsCategory | "all"; name: string }[] = [
  { slug: "all", name: "All" },
  { slug: "press-releases", name: "Press Releases" },
  { slug: "media-coverage", name: "Media Coverage" },
  { slug: "events", name: "Events" },
  { slug: "milestones", name: "Milestones" },
  { slug: "announcements", name: "Announcements" },
];

export const CATEGORY_LABEL: Record<NewsCategory, string> = {
  "press-releases": "Press Release",
  "media-coverage": "Media Coverage",
  events: "Event",
  milestones: "Milestone",
  announcements: "Announcement",
};

const CATEGORY_BADGE: Record<NewsCategory, string> = {
  "press-releases": "bg-primary/10 text-primary border-primary/20",
  "media-coverage": "bg-amber-100 text-amber-800 border-amber-200",
  events: "bg-emerald-100 text-emerald-800 border-emerald-200",
  milestones: "bg-teal-100 text-teal-800 border-teal-200",
  announcements: "bg-slate-100 text-slate-800 border-slate-200",
};

export function getNewsCategoryBadge(cat?: NewsCategory | null) {
  if (!cat) return "bg-muted text-muted-foreground border-border";
  return CATEGORY_BADGE[cat] ?? "bg-muted text-muted-foreground border-border";
}

export function formatNewsDate(iso?: string | null) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
