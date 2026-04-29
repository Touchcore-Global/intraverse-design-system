import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Plus, Pencil, Trash2, ExternalLink, LogOut } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAdminAuth } from "@/hooks/use-admin";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { formatDate } from "@/lib/blog/types";

interface ArticleRow {
  id: string;
  title: string;
  slug: string;
  status: string;
  is_featured: boolean;
  published_at: string | null;
  updated_at: string;
  category: { name: string } | null;
}

export default function AdminBlogList() {
  const { session, isAdmin, loading } = useAdminAuth();
  const navigate = useNavigate();
  const [articles, setArticles] = useState<ArticleRow[]>([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (loading) return;
    if (!session) navigate("/admin", { replace: true });
    else if (!isAdmin) navigate("/admin", { replace: true });
  }, [session, isAdmin, loading, navigate]);

  useEffect(() => {
    if (!isAdmin) return;
    (async () => {
      const { data, error } = await supabase
        .from("blog_articles")
        .select("id, title, slug, status, is_featured, published_at, updated_at, category:blog_categories(name)")
        .order("updated_at", { ascending: false });
      if (error) toast({ title: "Failed to load", description: error.message, variant: "destructive" });
      else setArticles((data ?? []) as unknown as ArticleRow[]);
      setFetching(false);
    })();
  }, [isAdmin]);

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this article? This cannot be undone.")) return;
    const { error } = await supabase.from("blog_articles").delete().eq("id", id);
    if (error) toast({ title: "Delete failed", description: error.message, variant: "destructive" });
    else {
      setArticles((p) => p.filter((a) => a.id !== id));
      toast({ title: "Article deleted" });
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/admin");
  };

  if (loading || !isAdmin) return null;

  return (
    <div className="min-h-screen bg-muted/30">
      <SEO title="Blog Admin | Intraverse Admin" description="Internal Intraverse admin tool." noindex />
      <header className="bg-background border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold">Blog Admin</h1>
            <p className="text-xs text-muted-foreground">{session?.user.email}</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link to="/blog">
                <ExternalLink className="h-4 w-4" /> View Blog
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
          <Link to="/admin/blog" className="px-3 py-1.5 rounded-md bg-primary/10 text-primary font-medium">
            Articles
          </Link>
          <Link to="/admin/news" className="px-3 py-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted">
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
          <h2 className="text-2xl font-bold">Articles</h2>
          <Button asChild>
            <Link to="/admin/blog/new">
              <Plus className="h-4 w-4" /> New Article
            </Link>
          </Button>
        </div>

        <Card className="overflow-hidden">
          {fetching ? (
            <div className="p-8 text-center text-muted-foreground">Loading...</div>
          ) : articles.length === 0 ? (
            <div className="p-8 text-center text-muted-foreground">
              No articles yet. <Link to="/admin/blog/new" className="text-primary underline">Create your first one.</Link>
            </div>
          ) : (
            <table className="w-full text-sm">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-3 font-medium">Title</th>
                  <th className="text-left p-3 font-medium hidden md:table-cell">Category</th>
                  <th className="text-left p-3 font-medium">Status</th>
                  <th className="text-left p-3 font-medium hidden md:table-cell">Updated</th>
                  <th className="text-right p-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {articles.map((a) => (
                  <tr key={a.id} className="border-t border-border hover:bg-muted/30">
                    <td className="p-3">
                      <div className="font-medium text-foreground">{a.title}</div>
                      <div className="text-xs text-muted-foreground">/{a.slug}</div>
                    </td>
                    <td className="p-3 hidden md:table-cell text-muted-foreground">
                      {a.category?.name ?? "-"}
                    </td>
                    <td className="p-3">
                      <span
                        className={`inline-flex text-xs px-2 py-0.5 rounded-full border ${
                          a.status === "published"
                            ? "bg-emerald-100 text-emerald-800 border-emerald-200"
                            : a.status === "draft"
                              ? "bg-amber-100 text-amber-800 border-amber-200"
                              : "bg-slate-100 text-slate-800 border-slate-200"
                        }`}
                      >
                        {a.status}
                      </span>
                      {a.is_featured && (
                        <span className="ml-1 inline-flex text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                          featured
                        </span>
                      )}
                    </td>
                    <td className="p-3 hidden md:table-cell text-muted-foreground">{formatDate(a.updated_at)}</td>
                    <td className="p-3">
                      <div className="flex justify-end gap-1">
                        <Button asChild variant="ghost" size="sm">
                          <Link to={`/admin/blog/${a.id}`}>
                            <Pencil className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => handleDelete(a.id)}>
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
