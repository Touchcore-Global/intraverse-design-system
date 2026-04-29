import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Plus, Pencil, Trash2, ExternalLink, LogOut } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAdminAuth } from "@/hooks/use-admin";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { CATEGORY_LABEL, formatNewsDate, type NewsItem } from "@/lib/news/types";

export default function AdminNewsList() {
  const { session } = useAdminAuth();
  const navigate = useNavigate();
  const [items, setItems] = useState<NewsItem[]>([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase
        .from("news_items")
        .select("*")
        .order("updated_at", { ascending: false });
      if (error) toast({ title: "Failed to load", description: error.message, variant: "destructive" });
      else setItems((data ?? []) as NewsItem[]);
      setFetching(false);
    })();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this news item? This cannot be undone.")) return;
    const { error } = await supabase.from("news_items").delete().eq("id", id);
    if (error) toast({ title: "Delete failed", description: error.message, variant: "destructive" });
    else {
      setItems((p) => p.filter((n) => n.id !== id));
      toast({ title: "News item deleted" });
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <SEO title="News Admin | Intraverse Admin" description="Internal Intraverse admin tool." noindex />
      <header className="bg-background border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold">News Admin</h1>
            <p className="text-xs text-muted-foreground">{session?.user.email}</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link to="/news">
                <ExternalLink className="h-4 w-4" /> View News
              </Link>
            </Button>
            <Button variant="ghost" size="sm" onClick={handleSignOut}>
              <LogOut className="h-4 w-4" /> Sign Out
            </Button>
          </div>
        </div>
      </header>

      <div className="bg-background border-b border-border">
        <div className="container mx-auto px-4 py-2 flex gap-1 text-sm overflow-x-auto">
          <Link to="/admin/blog" className="px-3 py-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted">
            Articles
          </Link>
          <Link to="/admin/news" className="px-3 py-1.5 rounded-md bg-primary/10 text-primary font-medium">
            News
          </Link>
          <Link to="/admin/jobs" className="px-3 py-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted">Jobs</Link>
          <Link to="/admin/independents-interest" className="px-3 py-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted">
            Independents Interest
          </Link>
          <Link to="/admin/users" className="px-3 py-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted">
            Admin Users
          </Link>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">News &amp; Press Items</h2>
          <Button asChild>
            <Link to="/admin/news/new">
              <Plus className="h-4 w-4" /> New Item
            </Link>
          </Button>
        </div>

        <Card className="overflow-hidden">
          {fetching ? (
            <div className="p-8 text-center text-muted-foreground">Loading...</div>
          ) : items.length === 0 ? (
            <div className="p-8 text-center text-muted-foreground">
              No news items yet. <Link to="/admin/news/new" className="text-primary underline">Create your first one.</Link>
            </div>
          ) : (
            <table className="w-full text-sm">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-3 font-medium">Title</th>
                  <th className="text-left p-3 font-medium hidden md:table-cell">Category</th>
                  <th className="text-left p-3 font-medium">Status</th>
                  <th className="text-left p-3 font-medium hidden md:table-cell">Date</th>
                  <th className="text-right p-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {items.map((n) => (
                  <tr key={n.id} className="border-t border-border hover:bg-muted/30">
                    <td className="p-3">
                      <div className="font-medium text-foreground">{n.title}</div>
                      <div className="text-xs text-muted-foreground">/{n.slug}</div>
                    </td>
                    <td className="p-3 hidden md:table-cell text-muted-foreground">{CATEGORY_LABEL[n.category]}</td>
                    <td className="p-3">
                      <span
                        className={`inline-flex text-xs px-2 py-0.5 rounded-full border ${
                          n.status === "published"
                            ? "bg-emerald-100 text-emerald-800 border-emerald-200"
                            : n.status === "draft"
                              ? "bg-amber-100 text-amber-800 border-amber-200"
                              : "bg-slate-100 text-slate-800 border-slate-200"
                        }`}
                      >
                        {n.status}
                      </span>
                      {n.is_featured && (
                        <span className="ml-1 inline-flex text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                          featured
                        </span>
                      )}
                    </td>
                    <td className="p-3 hidden md:table-cell text-muted-foreground">{formatNewsDate(n.published_at)}</td>
                    <td className="p-3">
                      <div className="flex justify-end gap-1">
                        <Button asChild variant="ghost" size="sm">
                          <Link to={`/admin/news/${n.id}`}>
                            <Pencil className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => handleDelete(n.id)}>
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </Card>
      </main>
    </div>
  );
}
