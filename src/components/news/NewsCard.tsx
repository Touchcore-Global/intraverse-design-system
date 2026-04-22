import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { CATEGORY_LABEL, formatNewsDate, getNewsCategoryBadge, type NewsItem } from "@/lib/news/types";

export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <Link
      to={`/news/${item.slug}`}
      className="group flex flex-col bg-background border border-border rounded-lg overflow-hidden hover:-translate-y-0.5 hover:shadow-md transition-all"
    >
      <div className="aspect-video bg-muted overflow-hidden">
        {item.featured_image ? (
          <img
            src={item.featured_image}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/5 to-muted">
            <span className="text-2xl font-bold text-muted-foreground/40">Intraverse</span>
          </div>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span
            className={`inline-flex text-xs font-medium px-2 py-0.5 rounded-full border ${getNewsCategoryBadge(item.category)}`}
          >
            {CATEGORY_LABEL[item.category]}
          </span>
          <span className="text-xs text-muted-foreground">{formatNewsDate(item.published_at)}</span>
        </div>
        <h3 className="text-base font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {item.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{item.excerpt}</p>
        {item.source && (
          <p className="text-xs italic text-muted-foreground mt-auto inline-flex items-center gap-1">
            Published in {item.source}
            {item.source_url && <ExternalLink className="h-3 w-3" />}
          </p>
        )}
      </div>
    </Link>
  );
}
