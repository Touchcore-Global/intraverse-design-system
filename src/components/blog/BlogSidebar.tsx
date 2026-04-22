import { Link } from "react-router-dom";
import { useState } from "react";
import { Linkedin, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import type { BlogArticle, BlogCategory } from "@/lib/blog/types";

interface Props {
  popular: BlogArticle[];
  categories: BlogCategory[];
  categoryCounts: Record<string, number>;
  activeCategory: string;
  onCategorySelect: (slug: string) => void;
}

export function BlogSidebar({ popular, categories, categoryCounts, activeCategory, onCategorySelect }: Props) {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    toast({
      title: "You're subscribed!",
      description: "We'll send you one email per week. No spam.",
    });
    setEmail("");
  };

  return (
    <aside className="space-y-8 lg:sticky lg:top-24 self-start">
      {/* Popular */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="font-bold text-lg mb-4 text-foreground">Most Read</h3>
        <ol className="space-y-4">
          {popular.length === 0 && (
            <li className="text-sm text-muted-foreground">No articles yet.</li>
          )}
          {popular.map((a, i) => (
            <li key={a.id} className="flex gap-3 text-sm">
              <span className="font-bold text-primary w-5 shrink-0">{i + 1}</span>
              <Link to={`/blog/${a.slug}`} className="flex-1 group">
                <p className="text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                  {a.title}
                </p>
                <p className="text-xs text-muted-foreground mt-1">{a.read_time_minutes} min read</p>
              </Link>
            </li>
          ))}
        </ol>
      </div>

      {/* Categories */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="font-bold text-lg mb-4 text-foreground">Categories</h3>
        <ul className="space-y-2">
          {categories.map((c) => (
            <li key={c.id}>
              <button
                onClick={() => onCategorySelect(c.slug)}
                className={`w-full text-left text-sm py-1.5 px-2 -mx-2 rounded-md transition-colors flex justify-between ${
                  activeCategory === c.slug
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                <span>{c.name}</span>
                <span className="text-muted-foreground">({categoryCounts[c.id] ?? 0})</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Newsletter */}
      <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
        <h3 className="font-bold text-lg mb-2 text-foreground">Get Insights in Your Inbox</h3>
        <p className="text-sm text-muted-foreground mb-4">One email per week. No spam.</p>
        <form onSubmit={handleSubscribe} className="space-y-3">
          <Input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="rounded-none"
          />
          <Button type="submit" size="sm" className="w-full rounded-none">
            Subscribe
          </Button>
        </form>
        <p className="text-xs text-muted-foreground mt-3">We respect your privacy. Unsubscribe anytime.</p>
      </div>

      {/* Follow */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="font-bold text-lg mb-4 text-foreground">Follow Us</h3>
        <div className="flex gap-3">
          {[
            { Icon: Linkedin, href: "https://linkedin.com/company/intraverse", label: "LinkedIn" },
            { Icon: Twitter, href: "https://twitter.com/intraverse", label: "Twitter" },
            { Icon: Instagram, href: "https://instagram.com/intraverse", label: "Instagram" },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="h-10 w-10 flex items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
