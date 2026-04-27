import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Plus, Pencil, Trash2, ExternalLink, LogOut } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAdminAuth } from "@/hooks/use-admin";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { formatDate } from "@/lib/blog/types";
import type { JobPosting } from "@/lib/jobs/types";

export default function AdminJobsList() {
  const { session, isAdmin, loading } = useAdminAuth();
  const navigate = useNavigate();
  const [jobs, setJobs] = useState<JobPosting[]>([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (loading) return;
    if (!session || !isAdmin) navigate("/admin", { replace: true });
  }, [session, isAdmin, loading, navigate]);

  useEffect(() => {
    if (!isAdmin) return;
    (async () => {
      const { data, error } = await supabase
        .from("job_postings")
        .select("*")
        .order("display_order", { ascending: true })
        .order("updated_at", { ascending: false });
      if (error) toast({ title: "Failed to load", description: error.message, variant: "destructive" });
      else setJobs((data ?? []) as JobPosting[]);
      setFetching(false);
    })();
  }, [isAdmin]);

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this job posting? This cannot be undone.")) return;
    const { error } = await supabase.from("job_postings").delete().eq("id", id);
    if (error) toast({ title: "Delete failed", description: error.message, variant: "destructive" });
    else {
      setJobs((p) => p.filter((j) => j.id !== id));
      toast({ title: "Job deleted" });
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/admin");
  };

  if (loading || !isAdmin) return null;

  return (
    <div className="min-h-screen bg-muted/30">
      <Helmet>
        <title>Admin · Jobs</title>
      </Helmet>
      <header className="bg-background border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold">Jobs Admin</h1>
            <p className="text-xs text-muted-foreground">{session?.user.email}</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link to="/careers">
                <ExternalLink className="h-4 w-4" /> View Careers
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
          <Link to="/admin/blog" className="px-3 py-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted">Articles</Link>
          <Link to="/admin/news" className="px-3 py-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted">News</Link>
          <Link to="/admin/jobs" className="px-3 py-1.5 rounded-md bg-primary/10 text-primary font-medium">Jobs</Link>
          <Link to="/admin/independents-interest" className="px-3 py-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted">Independents Interest</Link>
          <Link to="/admin/users" className="px-3 py-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted">Admin Users</Link>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Job Postings</h2>
          <Button asChild>
            <Link to="/admin/jobs/new">
              <Plus className="h-4 w-4" /> New Job
            </Link>
          </Button>
        </div>

        <Card className="overflow-hidden">
          {fetching ? (
            <div className="p-8 text-center text-muted-foreground">Loading...</div>
          ) : jobs.length === 0 ? (
            <div className="p-8 text-center text-muted-foreground">
              No jobs yet. <Link to="/admin/jobs/new" className="text-primary underline">Post your first one.</Link>
            </div>
          ) : (
            <table className="w-full text-sm">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-3 font-medium">Title</th>
                  <th className="text-left p-3 font-medium hidden md:table-cell">Team</th>
                  <th className="text-left p-3 font-medium hidden md:table-cell">Location</th>
                  <th className="text-left p-3 font-medium">Status</th>
                  <th className="text-left p-3 font-medium hidden md:table-cell">Updated</th>
                  <th className="text-right p-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((j) => (
                  <tr key={j.id} className="border-t border-border hover:bg-muted/30">
                    <td className="p-3">
                      <div className="font-medium text-foreground">{j.title}</div>
                      <div className="text-xs text-muted-foreground">/careers/{j.slug}</div>
                    </td>
                    <td className="p-3 hidden md:table-cell text-muted-foreground">{j.team}</td>
                    <td className="p-3 hidden md:table-cell text-muted-foreground">{j.location}</td>
                    <td className="p-3">
                      <span
                        className={`inline-flex text-xs px-2 py-0.5 rounded-full border ${
                          j.status === "open"
                            ? "bg-emerald-100 text-emerald-800 border-emerald-200"
                            : j.status === "draft"
                              ? "bg-amber-100 text-amber-800 border-amber-200"
                              : "bg-slate-100 text-slate-800 border-slate-200"
                        }`}
                      >
                        {j.status}
                      </span>
                      {j.is_featured && (
                        <span className="ml-1 inline-flex text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                          featured
                        </span>
                      )}
                    </td>
                    <td className="p-3 hidden md:table-cell text-muted-foreground">{formatDate(j.updated_at)}</td>
                    <td className="p-3">
                      <div className="flex justify-end gap-1">
                        <Button asChild variant="ghost" size="sm">
                          <Link to={`/admin/jobs/${j.id}`}>
                            <Pencil className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => handleDelete(j.id)}>
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
