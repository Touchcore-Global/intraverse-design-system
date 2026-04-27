import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
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
import { slugify, type JobStatus } from "@/lib/jobs/types";

const EMPLOYMENT_TYPES = ["Full-time", "Part-time", "Contract", "Internship", "Temporary"];

export default function AdminJobsEditor() {
  const { id } = useParams<{ id: string }>();
  const isNew = !id || id === "new";
  const navigate = useNavigate();
  const { session, isAdmin, loading } = useAdminAuth();

  const [form, setForm] = useState({
    title: "",
    slug: "",
    team: "",
    location: "",
    employment_type: "Full-time",
    description: "",
    responsibilities: "",
    requirements: "",
    salary_min: "" as string,
    salary_max: "" as string,
    salary_currency: "USD",
    apply_url: "",
    status: "draft" as JobStatus,
    is_featured: false,
    display_order: 0,
  });
  const [saving, setSaving] = useState(false);
  const [fetching, setFetching] = useState(!isNew);

  useEffect(() => {
    if (loading) return;
    if (!session || !isAdmin) navigate("/admin", { replace: true });
  }, [session, isAdmin, loading, navigate]);

  useEffect(() => {
    if (isNew || !isAdmin) return;
    (async () => {
      const { data, error } = await supabase.from("job_postings").select("*").eq("id", id!).maybeSingle();
      if (error || !data) {
        toast({ title: "Failed to load job", description: error?.message ?? "Not found", variant: "destructive" });
        navigate("/admin/jobs");
        return;
      }
      setForm({
        title: data.title,
        slug: data.slug,
        team: data.team,
        location: data.location,
        employment_type: data.employment_type,
        description: data.description ?? "",
        responsibilities: data.responsibilities ?? "",
        requirements: data.requirements ?? "",
        salary_min: data.salary_min != null ? String(data.salary_min) : "",
        salary_max: data.salary_max != null ? String(data.salary_max) : "",
        salary_currency: data.salary_currency ?? "USD",
        apply_url: data.apply_url ?? "",
        status: data.status as JobStatus,
        is_featured: data.is_featured,
        display_order: data.display_order,
      });
      setFetching(false);
    })();
  }, [id, isNew, isAdmin, navigate]);

  const handleTitleChange = (title: string) => {
    setForm((p) => ({ ...p, title, slug: isNew && !p.slug ? slugify(title) : p.slug }));
  };

  const handleSave = async () => {
    if (!form.title.trim() || !form.team.trim() || !form.location.trim()) {
      toast({ title: "Missing required fields", description: "Title, team and location are required.", variant: "destructive" });
      return;
    }
    setSaving(true);
    const payload = {
      title: form.title.trim(),
      slug: form.slug.trim() || slugify(form.title),
      team: form.team.trim(),
      location: form.location.trim(),
      employment_type: form.employment_type,
      description: form.description,
      responsibilities: form.responsibilities,
      requirements: form.requirements,
      salary_min: form.salary_min ? Number(form.salary_min) : null,
      salary_max: form.salary_max ? Number(form.salary_max) : null,
      salary_currency: form.salary_currency || null,
      apply_url: form.apply_url.trim() || null,
      status: form.status,
      is_featured: form.is_featured,
      display_order: form.display_order,
      published_at: form.status === "open" ? new Date().toISOString() : null,
    };

    if (isNew) {
      const { data, error } = await supabase.from("job_postings").insert(payload).select("id").maybeSingle();
      setSaving(false);
      if (error) {
        toast({ title: "Save failed", description: error.message, variant: "destructive" });
        return;
      }
      toast({ title: "Job created" });
      navigate(`/admin/jobs/${data?.id}`);
    } else {
      const { error } = await supabase.from("job_postings").update(payload).eq("id", id!);
      setSaving(false);
      if (error) {
        toast({ title: "Save failed", description: error.message, variant: "destructive" });
        return;
      }
      toast({ title: "Job saved" });
    }
  };

  if (loading || !isAdmin || fetching) return null;

  return (
    <div className="min-h-screen bg-muted/30">
      <Helmet>
        <title>{isNew ? "New Job" : `Edit · ${form.title || "Job"}`}</title>
      </Helmet>
      <header className="bg-background border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/admin/jobs"><ArrowLeft className="h-4 w-4" /> Back</Link>
          </Button>
          <div className="flex gap-2">
            <Button onClick={handleSave} disabled={saving}>
              {saving ? "Saving..." : isNew ? "Create Job" : "Save Changes"}
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-2xl font-bold mb-6">{isNew ? "New Job Posting" : "Edit Job Posting"}</h1>

        <Card>
          <CardContent className="p-6 space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="title">Title *</Label>
                <Input id="title" value={form.title} onChange={(e) => handleTitleChange(e.target.value)} />
              </div>
              <div>
                <Label htmlFor="slug">Slug *</Label>
                <Input id="slug" value={form.slug} onChange={(e) => setForm({ ...form, slug: slugify(e.target.value) })} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="team">Team *</Label>
                <Input id="team" value={form.team} onChange={(e) => setForm({ ...form, team: e.target.value })} />
              </div>
              <div>
                <Label htmlFor="location">Location *</Label>
                <Input id="location" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} />
              </div>
              <div>
                <Label htmlFor="employment_type">Employment Type</Label>
                <Select value={form.employment_type} onValueChange={(v) => setForm({ ...form, employment_type: v })}>
                  <SelectTrigger id="employment_type"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {EMPLOYMENT_TYPES.map((t) => (
                      <SelectItem key={t} value={t}>{t}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" rows={5} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} placeholder="Overview of the role..." />
            </div>

            <div>
              <Label htmlFor="responsibilities">Responsibilities</Label>
              <Textarea id="responsibilities" rows={5} value={form.responsibilities} onChange={(e) => setForm({ ...form, responsibilities: e.target.value })} placeholder="One per line..." />
            </div>

            <div>
              <Label htmlFor="requirements">Requirements</Label>
              <Textarea id="requirements" rows={5} value={form.requirements} onChange={(e) => setForm({ ...form, requirements: e.target.value })} placeholder="One per line..." />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="salary_min">Salary Min</Label>
                <Input id="salary_min" type="number" value={form.salary_min} onChange={(e) => setForm({ ...form, salary_min: e.target.value })} />
              </div>
              <div>
                <Label htmlFor="salary_max">Salary Max</Label>
                <Input id="salary_max" type="number" value={form.salary_max} onChange={(e) => setForm({ ...form, salary_max: e.target.value })} />
              </div>
              <div>
                <Label htmlFor="salary_currency">Currency</Label>
                <Input id="salary_currency" value={form.salary_currency} onChange={(e) => setForm({ ...form, salary_currency: e.target.value.toUpperCase() })} />
              </div>
            </div>

            <div>
              <Label htmlFor="apply_url">Apply URL</Label>
              <Input id="apply_url" value={form.apply_url} onChange={(e) => setForm({ ...form, apply_url: e.target.value })} placeholder="https://... (optional - falls back to /contact)" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-border">
              <div>
                <Label htmlFor="status">Status</Label>
                <Select value={form.status} onValueChange={(v) => setForm({ ...form, status: v as JobStatus })}>
                  <SelectTrigger id="status"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="open">Open</SelectItem>
                    <SelectItem value="closed">Closed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="display_order">Display Order</Label>
                <Input id="display_order" type="number" value={form.display_order} onChange={(e) => setForm({ ...form, display_order: Number(e.target.value) })} />
              </div>
              <div className="flex items-end">
                <div className="flex items-center gap-2">
                  <Switch id="is_featured" checked={form.is_featured} onCheckedChange={(v) => setForm({ ...form, is_featured: v })} />
                  <Label htmlFor="is_featured">Featured</Label>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
