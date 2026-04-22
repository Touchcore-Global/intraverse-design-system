import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Shield, ExternalLink, LogOut } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAdminAuth } from "@/hooks/use-admin";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { AdminUserDetailDrawer } from "@/components/admin/AdminUserDetailDrawer";

interface AdminUser {
  user_id: string;
  email: string;
  granted_at: string;
  user_created_at: string;
}

function formatDateTime(iso: string) {
  return new Date(iso).toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function AdminUsers() {
  const { session, isAdmin, loading } = useAdminAuth();
  const navigate = useNavigate();
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (loading) return;
    if (!session || !isAdmin) navigate("/admin", { replace: true });
  }, [session, isAdmin, loading, navigate]);

  useEffect(() => {
    if (!isAdmin) return;
    (async () => {
      const { data, error } = await supabase.rpc("list_admin_users");
      if (error) {
        toast({ title: "Failed to load admins", description: error.message, variant: "destructive" });
      } else {
        setUsers((data ?? []) as AdminUser[]);
      }
      setFetching(false);
    })();
  }, [isAdmin]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/admin");
  };

  if (loading || !isAdmin) return null;

  return (
    <div className="min-h-screen bg-muted/30">
      <Helmet>
        <title>Admin · Users</title>
      </Helmet>

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
        <div className="container mx-auto px-4 pb-3 flex gap-1 text-sm">
          <Link
            to="/admin/blog"
            className="px-3 py-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted"
          >
            Articles
          </Link>
          <Link
            to="/admin/users"
            className="px-3 py-1.5 rounded-md bg-primary/10 text-primary font-medium"
          >
            Admin Users
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" /> Admin Users
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Accounts with full access to manage the blog. {users.length} total.
            </p>
          </div>
          <Button asChild variant="outline">
            <Link to="/admin/blog">
              <ArrowLeft className="h-4 w-4" /> Back to Articles
            </Link>
          </Button>
        </div>

        <Card className="overflow-hidden">
          {fetching ? (
            <div className="p-8 text-center text-muted-foreground">Loading...</div>
          ) : users.length === 0 ? (
            <div className="p-8 text-center text-muted-foreground">No admin users found.</div>
          ) : (
            <table className="w-full text-sm">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-3 font-medium">Email</th>
                  <th className="text-left p-3 font-medium hidden sm:table-cell">Account Created</th>
                  <th className="text-left p-3 font-medium">Admin Since</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => {
                  const isYou = u.user_id === session?.user.id;
                  return (
                    <tr
                      key={u.user_id}
                      onClick={() => setSelectedUserId(u.user_id)}
                      className="border-t border-border hover:bg-muted/30 cursor-pointer"
                    >
                      <td className="p-3">
                        <div className="font-medium text-foreground flex items-center gap-2">
                          {u.email}
                          {isYou && (
                            <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                              You
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="p-3 hidden sm:table-cell text-muted-foreground">
                        {formatDateTime(u.user_created_at)}
                      </td>
                      <td className="p-3 text-muted-foreground">{formatDateTime(u.granted_at)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </Card>
      </main>
    </div>
  );
}
