import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { type BlogArticle, formatDate, getCategoryBadgeClass, getInitials } from "@/lib/blog/types";

export function FeaturedArticle({ article }: { article: BlogArticle }) {
  return (
    <Link
      to={`/blog/${article.slug}`}
      className="group grid md:grid-cols-2 gap-0 bg-card border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
    >
      <div className="relative aspect-video md:aspect-auto bg-gradient-to-br from-primary/20 to-primary/40 overflow-hidden">
        {article.cover_image_url ? (
          <img
            src={article.cover_image_url}
            alt={article.title}
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="h-full w-full min-h-[280px] flex items-center justify-center text-primary/50 font-bold text-3xl">
            {article.category?.name ?? "Featured"}
          </div>
        )}
      </div>
      <div className="p-6 md:p-10 flex flex-col gap-4 justify-center">
        {article.category && (
          <span
            className={`inline-flex w-fit text-xs font-medium px-2.5 py-1 rounded-full border ${getCategoryBadgeClass(article.category.slug)}`}
          >
            {article.category.name}
          </span>
        )}
        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl leading-tight text-foreground group-hover:text-primary transition-colors">
          {article.title}
        </h2>
        <p className="text-muted-foreground text-base md:text-lg line-clamp-3">{article.excerpt}</p>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Avatar className="h-8 w-8">
            <AvatarImage src={article.author?.avatar_url ?? undefined} />
            <AvatarFallback className="text-xs">{getInitials(article.author?.name)}</AvatarFallback>
          </Avatar>
          <span className="font-medium text-foreground">{article.author?.name ?? "Intraverse"}</span>
          <span>·</span>
          <span>{formatDate(article.published_at)}</span>
          <span>·</span>
          <span>{article.read_time_minutes} min read</span>
        </div>
        <div className="flex items-center gap-2 text-primary font-bold pt-2">
          Read Article <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
