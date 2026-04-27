import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Download, ExternalLink, LogOut, Search } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAdminAuth } from "@/hooks/use-admin";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

interface InterestRow {
  id: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  details: string;
  created_at: string;
}

const formatDateTime = (iso: string) =>
  new Date(iso).toLocaleString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

const csvEscape = (value: string) => {
  if (value == null) return "";
  const needsQuotes = /[",\n\r]/.test(value);
  const escaped = value.replace(/"/g, '""');
  return needsQuotes ? `"${escaped}"` : escaped;
};

export default function AdminIndependentsInterest() {
  const { session, isAdmin, loading } = useAdminAuth();
  const navigate = useNavigate();
  const [rows, setRows] = useState<InterestRow[]>([]);
  const [fetching, setFetching] = useState(true);
  const [search, setSearch] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  useEffect(() => {
    if (loading) return;
    if (!session || !isAdmin) navigate("/admin", { replace: true });
  }, [session, isAdmin, loading, navigate]);

  useEffect(() => {
    if (!isAdmin) return;
    (async () => {
      const { data, error } = await supabase
        .from("independents_interest")
        .select("id, first_name, last_name, phone_number, details, created_at")
        .order("created_at", { ascending: false });
      if (error) {
        toast({ title: "Failed to load", description: error.message, variant: "destructive" });
      } else {
        setRows((data ?? []) as InterestRow[]);
      }
      setFetching(false);
    })();
  }, [isAdmin]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    const fromTs = from ? new Date(from).getTime() : null;
    const toTs = to ? new Date(to).getTime() + 24 * 60 * 60 * 1000 - 1 : null;
    return rows.filter((r) => {
      const created = new Date(r.created_at).getTime();
      if (fromTs !== null && created < fromTs) return false;
      if (toTs !== null && created > toTs) return false;
      if (!q) return true;
      const haystack = `${r.first_name} ${r.last_name} ${r.phone_number}`.toLowerCase();
      return haystack.includes(q);
    });
  }, [rows, search, from, to]);

  const handleExport = () => {
    if (filtered.length === 0) {
      toast({ title: "Nothing to export", description: "No rows match the current filters." });
      return;
    }
    const headers = ["First Name", "Last Name", "Phone Number", "Details", "Submitted At"];
    const lines = [headers.join(",")];
    for (const r of filtered) {
      lines.push(
        [
          csvEscape(r.first_name),
          csvEscape(r.last_name),
          csvEscape(r.phone_number),
          csvEscape(r.details),
          csvEscape(new Date(r.created_at).toISOString()),
        ].join(","),
      );
    }
    const blob = new Blob([lines.join("\n")], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `independents-interest-${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/admin");
  };

  const clearFilters = () => {
    setSearch("");
    setFrom("");
    setTo("");
  };

  if (loading || !isAdmin) return null;

  return (
    <div className="min-h-screen bg-muted/30">
      <Helmet>
        <title>Admin · Independents Interest</title>
      </Helmet>
      <header className="bg-background border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold">Admin</h1>
            <p className="text-xs text-muted-foreground">{session?.user.email}</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link to="/for/independents">
                <ExternalLink className="h-4 w-4" /> View Page
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
          <Link to="/admin/news" className="px-3 py-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted">
            News
          </Link>
          <Link to="/admin/jobs" className="px-3 py-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted">Jobs</Link>
          <Link to="/admin/independents-interest" className="px-3 py-1.5 rounded-md bg-primary/10 text-primary font-medium">
            Independents Interest
          </Link>
          <Link to="/admin/users" className="px-3 py-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted">
            Admin Users
          </Link>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div>
            <h2 className="text-2xl font-bold">Independents Interest</h2>
            <p className="text-sm text-muted-foreground">
              {filtered.length} of {rows.length} submission{rows.length === 1 ? "" : "s"}
            </p>
          </div>
          <Button onClick={handleExport} disabled={filtered.length === 0}>
            <Download className="h-4 w-4" /> Export CSV
          </Button>
        </div>

        <Card className="p-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2 space-y-2">
              <Label htmlFor="search">Search by name or phone</Label>
              <div className="relative">
                <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="search"
                  className="pl-9"
                  placeholder="e.g. Ada or +234..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="from">From</Label>
              <Input id="from" type="date" value={from} onChange={(e) => setFrom(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="to">To</Label>
              <Input id="to" type="date" value={to} onChange={(e) => setTo(e.target.value)} />
            </div>
          </div>
          {(search || from || to) && (
            <div className="mt-4">
              <Button variant="ghost" size="sm" onClick={clearFilters}>
                Clear filters
              </Button>
            </div>
          )}
        </Card>

        <Card className="overflow-hidden">
          {fetching ? (
            <div className="p-8 text-center text-muted-foreground">Loading...</div>
          ) : filtered.length === 0 ? (
            <div className="p-8 text-center text-muted-foreground">
              {rows.length === 0 ? "No submissions yet." : "No submissions match the current filters."}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-3 font-medium">Name</th>
                    <th className="text-left p-3 font-medium">Phone</th>
                    <th className="text-left p-3 font-medium hidden md:table-cell">Details</th>
                    <th className="text-left p-3 font-medium whitespace-nowrap">Submitted</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((r) => (
                    <tr key={r.id} className="border-t border-border hover:bg-muted/30 align-top">
                      <td className="p-3 font-medium text-foreground whitespace-nowrap">
                        {r.first_name} {r.last_name}
                      </td>
                      <td className="p-3 text-muted-foreground whitespace-nowrap">
                        <a href={`tel:${r.phone_number}`} className="hover:text-primary">
                          {r.phone_number}
                        </a>
                      </td>
                      <td className="p-3 hidden md:table-cell text-muted-foreground max-w-xl">
                        <p className="whitespace-pre-wrap">{r.details}</p>
                      </td>
                      <td className="p-3 text-muted-foreground whitespace-nowrap">
                        {formatDateTime(r.created_at)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </Card>
      </main>
    </div>
  );
}
