import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { type BlogArticle, formatDate, getCategoryBadgeClass, getInitials } from "@/lib/blog/types";

interface Props {
  article: BlogArticle;
}

export function ArticleCard({ article }: Props) {
  const categorySlug = article.category?.slug;
  return (
    <Link
      to={`/blog/${article.slug}`}
      className="group flex flex-col bg-card border border-border/60 rounded-lg overflow-hidden hover:-translate-y-0.5 hover:shadow-md hover:border-border transition-all duration-200"
    >
      <div className="relative aspect-video bg-gradient-to-br from-primary/10 to-primary/30 overflow-hidden">
        {article.cover_image_url ? (
          <img
            src={article.cover_image_url}
            alt={article.title}
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center text-primary/40 font-bold text-2xl">
            {article.category?.name ?? "Intraverse"}
          </div>
        )}
      </div>
      <div className="p-5 flex flex-col gap-3 flex-1">
        {article.category && (
          <span
            className={`inline-flex w-fit text-xs font-medium px-2.5 py-1 rounded-full border ${getCategoryBadgeClass(categorySlug)}`}
          >
            {article.category.name}
          </span>
        )}
        <h3 className="h3-global text-foreground line-clamp-2 group-hover:text-primary transition-colors">
          {article.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{article.excerpt}</p>
        <div className="flex items-center gap-2 text-xs text-muted-foreground mt-auto pt-2">
          <Avatar className="h-6 w-6">
            <AvatarImage src={article.author?.avatar_url ?? undefined} />
            <AvatarFallback className="text-[10px]">{getInitials(article.author?.name)}</AvatarFallback>
          </Avatar>
          <span className="font-medium text-foreground">{article.author?.name ?? "Intraverse"}</span>
          <span>·</span>
          <span>{formatDate(article.published_at)}</span>
          <span>·</span>
          <span>{article.read_time_minutes} min</span>
        </div>
      </div>
    </Link>
  );
}
