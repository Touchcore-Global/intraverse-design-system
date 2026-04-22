import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { CATEGORY_LABEL, formatNewsDate, getNewsCategoryBadge, type NewsItem } from "@/lib/news/types";

export function FeaturedNews({ item }: { item: NewsItem }) {
  return (
    <Link
      to={`/news/${item.slug}`}
      className="group grid md:grid-cols-2 gap-6 md:gap-10 bg-background border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all"
    >
      <div className="aspect-video md:aspect-auto md:min-h-[320px] bg-muted overflow-hidden">
        {item.featured_image ? (
          <img
            src={item.featured_image}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 via-primary/5 to-muted">
            <span className="text-4xl font-bold text-primary/30">Intraverse</span>
          </div>
        )}
      </div>
      <div className="p-6 md:p-10 flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-4">
          <span
            className={`inline-flex text-xs font-semibold px-2.5 py-1 rounded-full border ${getNewsCategoryBadge(item.category)}`}
          >
            {CATEGORY_LABEL[item.category]}
          </span>
          <span className="text-sm text-muted-foreground">{formatNewsDate(item.published_at)}</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight group-hover:text-primary transition-colors">
          {item.title}
        </h2>
        <p className="text-base text-muted-foreground mb-4 leading-relaxed">{item.excerpt}</p>
        {item.source && (
          <p className="text-sm italic text-muted-foreground mb-4">
            Originally published in <span className="font-medium not-italic">{item.source}</span>
          </p>
        )}
        <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm">
          Read More <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </Link>
  );
}
