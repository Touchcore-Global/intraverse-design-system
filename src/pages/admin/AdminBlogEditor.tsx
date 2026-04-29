import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { ArrowLeft } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAdminAuth } from "@/hooks/use-admin";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import type { BlogAuthor, BlogCategory } from "@/lib/blog/types";

function slugify(s: string) {
  return s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export default function AdminBlogEditor() {
  const { id } = useParams<{ id: string }>();
  const isNew = !id || id === "new";
  const navigate = useNavigate();
  const { isAdmin, loading } = useAdminAuth();

  const [categories, setCategories] = useState<BlogCategory[]>([]);
  const [authors, setAuthors] = useState<BlogAuthor[]>([]);
  const [form, setForm] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    cover_image_url: "",
    category_id: "",
    author_id: "",
    status: "draft" as "draft" | "published" | "archived",
    is_featured: false,
    read_time_minutes: 5,
  });
  const [saving, setSaving] = useState(false);
  const [fetching, setFetching] = useState(!isNew);

  useEffect(() => {
    if (!loading && !isAdmin) navigate("/admin", { replace: true });
  }, [isAdmin, loading, navigate]);

  useEffect(() => {
    (async () => {
      const [{ data: cats }, { data: auths }] = await Promise.all([
        supabase.from("blog_categories").select("*").order("display_order"),
        supabase.from("blog_authors").select("*").order("name"),
      ]);
      setCategories((cats ?? []) as BlogCategory[]);
      setAuthors((auths ?? []) as BlogAuthor[]);
    })();
  }, []);

  useEffect(() => {
    if (isNew) return;
    (async () => {
      const { data, error } = await supabase.from("blog_articles").select("*").eq("id", id!).maybeSingle();
      if (error || !data) {
        toast({ title: "Article not found", variant: "destructive" });
        navigate("/admin/blog");
        return;
      }
      setForm({
        title: data.title,
        slug: data.slug,
        excerpt: data.excerpt,
        content: data.content,
        cover_image_url: data.cover_image_url ?? "",
        category_id: data.category_id ?? "",
        author_id: data.author_id ?? "",
        status: data.status as "draft" | "published" | "archived",
        is_featured: data.is_featured,
        read_time_minutes: data.read_time_minutes,
      });
      setFetching(false);
    })();
  }, [id, isNew, navigate]);

  const update = <K extends keyof typeof form>(k: K, v: (typeof form)[K]) => setForm((p) => ({ ...p, [k]: v }));

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const payload = {
      ...form,
      slug: form.slug || slugify(form.title),
      category_id: form.category_id || null,
      author_id: form.author_id || null,
      cover_image_url: form.cover_image_url || null,
      published_at:
        form.status === "published"
          ? // keep existing if editing; new gets now
            isNew
            ? new Date().toISOString()
            : undefined
          : null,
    };

    let error;
    if (isNew) {
      ({ error } = await supabase.from("blog_articles").insert(payload as never));
    } else {
      // remove undefined published_at so we don't overwrite when toggling
      const update = { ...payload };
      if (update.published_at === undefined) delete (update as { published_at?: unknown }).published_at;
      ({ error } = await supabase.from("blog_articles").update(update).eq("id", id!));
    }
    setSaving(false);
    if (error) {
      toast({ title: "Save failed", description: error.message, variant: "destructive" });
      return;
    }
    toast({ title: isNew ? "Article created" : "Article saved" });
    navigate("/admin/blog");
  };

  if (loading || !isAdmin || fetching) return null;

  return (
    <div className="min-h-screen bg-muted/30">
      <SEO title="Blog Editor | Intraverse Admin" description="Internal Intraverse admin tool." noindex />
      <header className="bg-background border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <Link to="/admin/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> All Articles
          </Link>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-2xl font-bold mb-6">{isNew ? "New Article" : "Edit Article"}</h1>
        <form onSubmit={handleSave} className="space-y-6">
          <Card>
            <CardContent className="p-6 space-y-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  required
                  value={form.title}
                  onChange={(e) => {
                    update("title", e.target.value);
                    if (isNew && !form.slug) update("slug", slugify(e.target.value));
                  }}
                />
              </div>
              <div>
                <Label htmlFor="slug">Slug</Label>
                <Input id="slug" required value={form.slug} onChange={(e) => update("slug", slugify(e.target.value))} />
              </div>
              <div>
                <Label htmlFor="excerpt">Excerpt</Label>
                <Textarea
                  id="excerpt"
                  required
                  rows={3}
                  maxLength={300}
                  value={form.excerpt}
                  onChange={(e) => update("excerpt", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="content">Content (Markdown supported: ## heading, - list, **bold**)</Label>
                <Textarea
                  id="content"
                  required
                  rows={16}
                  className="font-mono text-sm"
                  value={form.content}
                  onChange={(e) => update("content", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="cover">Cover image URL (optional)</Label>
                <Input
                  id="cover"
                  type="url"
                  value={form.cover_image_url}
                  onChange={(e) => update("cover_image_url", e.target.value)}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 grid sm:grid-cols-2 gap-4">
              <div>
                <Label>Category</Label>
                <Select value={form.category_id} onValueChange={(v) => update("category_id", v)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Pick a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((c) => (
                      <SelectItem key={c.id} value={c.id}>
                        {c.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Author</Label>
                <Select value={form.author_id} onValueChange={(v) => update("author_id", v)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Pick an author" />
                  </SelectTrigger>
                  <SelectContent>
                    {authors.map((a) => (
                      <SelectItem key={a.id} value={a.id}>
                        {a.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Status</Label>
                <Select value={form.status} onValueChange={(v) => update("status", v as typeof form.status)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                    <SelectItem value="archived">Archived</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="rt">Read time (minutes)</Label>
                <Input
                  id="rt"
                  type="number"
                  min={1}
                  max={60}
                  value={form.read_time_minutes}
                  onChange={(e) => update("read_time_minutes", parseInt(e.target.value) || 5)}
                />
              </div>
              <div className="flex items-center gap-3 sm:col-span-2 pt-2">
                <Switch
                  id="featured"
                  checked={form.is_featured}
                  onCheckedChange={(v) => update("is_featured", v)}
                />
                <Label htmlFor="featured" className="cursor-pointer">
                  Featured article (shown as hero on the blog index)
                </Label>
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-3 justify-end">
            <Button type="button" variant="outline" onClick={() => navigate("/admin/blog")}>
              Cancel
            </Button>
            <Button type="submit" disabled={saving}>
              {saving ? "Saving..." : isNew ? "Create Article" : "Save Changes"}
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
}
