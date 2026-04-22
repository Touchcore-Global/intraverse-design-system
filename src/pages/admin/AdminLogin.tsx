import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";
import { useAdminAuth } from "@/hooks/use-admin";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AdminLogin() {
  const navigate = useNavigate();
  const { session, isAdmin, loading } = useAdminAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [adminExists, setAdminExists] = useState<boolean | null>(null);
  const [claiming, setClaiming] = useState(false);

  useEffect(() => {
    if (!loading && session && isAdmin) navigate("/admin/blog", { replace: true });
  }, [session, isAdmin, loading, navigate]);

  useEffect(() => {
    if (!session || isAdmin) return;
    supabase.rpc("admin_exists").then(({ data }) => setAdminExists(!!data));
  }, [session, isAdmin]);

  const handleClaimAdmin = async () => {
    setClaiming(true);
    const { data, error } = await supabase.rpc("claim_first_admin");
    setClaiming(false);
    if (error) {
      toast({ title: "Could not claim admin", description: error.message, variant: "destructive" });
      return;
    }
    if (data === true) {
      toast({ title: "You're now an admin", description: "Redirecting..." });
      setTimeout(() => navigate("/admin/blog", { replace: true }), 600);
    } else {
      toast({
        title: "Admin already exists",
        description: "An existing admin must grant you access.",
        variant: "destructive",
      });
      setAdminExists(true);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setSubmitting(false);
    if (error) {
      toast({ title: "Sign in failed", description: error.message, variant: "destructive" });
      return;
    }
    toast({ title: "Signed in" });
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/admin`,
        data: { display_name: displayName },
      },
    });
    setSubmitting(false);
    if (error) {
      toast({ title: "Signup failed", description: error.message, variant: "destructive" });
      return;
    }
    toast({
      title: "Account created",
      description: "Check your email to confirm your address. An existing admin must grant you the admin role.",
    });
  };

  return (
    <div className="min-h-screen bg-muted/30 flex items-center justify-center p-4">
      <Helmet>
        <title>Admin · Intraverse Blog</title>
      </Helmet>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Blog Admin</CardTitle>
          <CardDescription>
            Sign in to manage articles. New accounts must be granted the admin role.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {session && !isAdmin && !loading && (
            <div className="mb-4 p-3 rounded border border-border bg-muted text-sm text-foreground">
              You're signed in as <strong>{session.user.email}</strong> but don't have admin access. Ask an
              existing admin to grant you the role, or insert a row in <code>user_roles</code> with your
              user id and role <code>admin</code>.
            </div>
          )}
          <Tabs defaultValue="signin">
            <TabsList className="grid grid-cols-2 mb-4">
              <TabsTrigger value="signin">Sign In</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            <TabsContent value="signin">
              <form onSubmit={handleLogin} className="space-y-4">
                <Input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button type="submit" disabled={submitting} className="w-full">
                  {submitting ? "Signing in..." : "Sign In"}
                </Button>
              </form>
            </TabsContent>
            <TabsContent value="signup">
              <form onSubmit={handleSignup} className="space-y-4">
                <Input placeholder="Display name" required value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
                <Input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input type="password" placeholder="Password (min 6 chars)" required minLength={6} value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button type="submit" disabled={submitting} className="w-full">
                  {submitting ? "Creating..." : "Sign Up"}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
          <div className="mt-4 text-center">
            <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary">
              ← Back to Blog
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
