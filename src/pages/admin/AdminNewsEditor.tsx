import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import type { NewsCategory, NewsStatus } from "@/lib/news/types";

function slugify(s: string) {
  return s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export default function AdminNewsEditor() {
  const { id } = useParams<{ id: string }>();
  const isNew = !id || id === "new";
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    slug: "",
    excerpt: "",
    body: "",
    category: "press-releases" as NewsCategory,
    published_at: new Date().toISOString().slice(0, 10),
    source: "",
    source_url: "",
    featured_image: "",
    tags: "",
    is_featured: false,
    press_kit_relevant: false,
    status: "draft" as NewsStatus,
  });
  const [saving, setSaving] = useState(false);
  const [fetching, setFetching] = useState(!isNew);

  useEffect(() => {
    if (isNew) return;
    (async () => {
      const { data, error } = await supabase.from("news_items").select("*").eq("id", id!).maybeSingle();
      if (error || !data) {
        toast({ title: "News item not found", variant: "destructive" });
        navigate("/admin/news");
        return;
      }
      setForm({
        title: data.title,
        slug: data.slug,
        excerpt: data.excerpt,
        body: data.body ?? "",
        category: data.category as NewsCategory,
        published_at: data.published_at ? data.published_at.slice(0, 10) : new Date().toISOString().slice(0, 10),
        source: data.source ?? "",
        source_url: data.source_url ?? "",
        featured_image: data.featured_image ?? "",
        tags: (data.tags ?? []).join(", "),
        is_featured: data.is_featured,
        press_kit_relevant: data.press_kit_relevant,
        status: data.status as NewsStatus,
      });
      setFetching(false);
    })();
  }, [id, isNew, navigate]);

  const update = <K extends keyof typeof form>(k: K, v: (typeof form)[K]) =>
    setForm((p) => ({ ...p, [k]: v }));

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const payload = {
      title: form.title,
      slug: form.slug || slugify(form.title),
      excerpt: form.excerpt,
      body: form.body,
      category: form.category,
      published_at: form.published_at ? new Date(form.published_at).toISOString() : null,
      source: form.source || null,
      source_url: form.source_url || null,
      featured_image: form.featured_image || null,
      tags: form.tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      is_featured: form.is_featured,
      press_kit_relevant: form.press_kit_relevant,
      status: form.status,
    };

    let error;
    if (isNew) {
      ({ error } = await supabase.from("news_items").insert(payload));
    } else {
      ({ error } = await supabase.from("news_items").update(payload).eq("id", id!));
    }
    setSaving(false);
    if (error) {
      toast({ title: "Save failed", description: error.message, variant: "destructive" });
      return;
    }
    toast({ title: isNew ? "News item created" : "News item saved" });
    navigate("/admin/news");
  };

  if (fetching) return null;

  return (
    <div className="min-h-screen bg-muted/30">
      <Helmet>
        <title>{isNew ? "New News Item" : "Edit News Item"} · Admin</title>
      </Helmet>
      <header className="bg-background border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <Link to="/admin/news" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> All News
          </Link>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-2xl font-bold mb-6">{isNew ? "New News Item" : "Edit News Item"}</h1>
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
                  maxLength={400}
                  value={form.excerpt}
                  onChange={(e) => update("excerpt", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="body">Body (Markdown: ## heading, - list, **bold**, &gt; quote, [text](url))</Label>
                <Textarea
                  id="body"
                  rows={14}
                  className="font-mono text-sm"
                  value={form.body}
                  onChange={(e) => update("body", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="image">Featured image URL (optional)</Label>
                <Input
                  id="image"
                  type="url"
                  value={form.featured_image}
                  onChange={(e) => update("featured_image", e.target.value)}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 grid sm:grid-cols-2 gap-4">
              <div>
                <Label>Category</Label>
                <Select value={form.category} onValueChange={(v) => update("category", v as NewsCategory)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="press-releases">Press Releases</SelectItem>
                    <SelectItem value="media-coverage">Media Coverage</SelectItem>
                    <SelectItem value="events">Events</SelectItem>
                    <SelectItem value="milestones">Milestones</SelectItem>
                    <SelectItem value="announcements">Announcements</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Status</Label>
                <Select value={form.status} onValueChange={(v) => update("status", v as NewsStatus)}>
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
                <Label htmlFor="date">Published date</Label>
                <Input
                  id="date"
                  type="date"
                  value={form.published_at}
                  onChange={(e) => update("published_at", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="tags">Tags (comma-separated)</Label>
                <Input id="tags" value={form.tags} onChange={(e) => update("tags", e.target.value)} />
              </div>
              <div>
                <Label htmlFor="source">Source publication (media coverage)</Label>
                <Input
                  id="source"
                  placeholder="e.g. TechCabal"
                  value={form.source}
                  onChange={(e) => update("source", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="source_url">Source URL</Label>
                <Input
                  id="source_url"
                  type="url"
                  value={form.source_url}
                  onChange={(e) => update("source_url", e.target.value)}
                />
              </div>
              <div className="flex items-center gap-3 sm:col-span-2 pt-2">
                <Switch
                  id="featured"
                  checked={form.is_featured}
                  onCheckedChange={(v) => update("is_featured", v)}
                />
                <Label htmlFor="featured" className="cursor-pointer">
                  Featured (shown as hero on the news index)
                </Label>
              </div>
              <div className="flex items-center gap-3 sm:col-span-2">
                <Switch
                  id="presskit"
                  checked={form.press_kit_relevant}
                  onCheckedChange={(v) => update("press_kit_relevant", v)}
                />
                <Label htmlFor="presskit" className="cursor-pointer">
                  Include in press kit highlights
                </Label>
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-3 justify-end">
            <Button type="button" variant="outline" onClick={() => navigate("/admin/news")}>
              Cancel
            </Button>
            <Button type="submit" disabled={saving}>
              {saving ? "Saving..." : isNew ? "Create" : "Save Changes"}
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
}
