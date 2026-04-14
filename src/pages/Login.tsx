import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { login, signUp, getGoogleAuthUrl, storeAuthToken } from "@/lib/api/auth";

type TabKey = "signin" | "create";

const accountTypes = [
  { label: "Travel Agent", value: "Agent" },
  { label: "Independent", value: "Customer" },
  { label: "Business", value: "Business" },
  { label: "Affiliate", value: "Affiliate" },
];

const REDIRECT_URL = "https://www.intraverse.app";

export default function Login() {
  const [tab, setTab] = useState<TabKey>("signin");
  const { toast } = useToast();

  // Sign in state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);

  // Sign up state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [userType, setUserType] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpLoading, setSignUpLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);
    try {
      const response = await login(loginEmail, loginPassword);
      storeAuthToken(response.data.token);
      toast({
        title: "Welcome back!",
        description: response.message || "You're now signed in.",
      });
      window.location.href = REDIRECT_URL;
    } catch (err: any) {
      toast({
        title: "Sign In Failed",
        description: err.message,
        variant: "destructive",
      });
    } finally {
      setLoginLoading(false);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userType) {
      toast({
        title: "Account Type Required",
        description: "Please select an account type.",
        variant: "destructive",
      });
      return;
    }
    setSignUpLoading(true);
    try {
      const response = await signUp({
        firstName,
        lastName,
        email: signUpEmail,
        phone,
        userType,
        password: signUpPassword,
      });
      toast({
        title: "Account Created!",
        description: response.message || "Please verify your email and login to continue.",
      });
      // Switch to sign-in tab after successful registration
      setTab("signin");
      setLoginEmail(signUpEmail);
    } catch (err: any) {
      toast({
        title: "Registration Failed",
        description: err.message,
        variant: "destructive",
      });
    } finally {
      setSignUpLoading(false);
    }
  };

  const handleGoogleAuth = () => {
    window.location.href = getGoogleAuthUrl(REDIRECT_URL);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 flex items-start justify-center bg-accent">
        <div className="w-full max-w-md mx-4">
          <div className="bg-card rounded-xl shadow-lg border border-border p-8">
            {/* Tabs */}
            <div className="flex rounded-lg bg-muted p-1 mb-8">
              <button
                className={`flex-1 py-2.5 text-sm font-semibold rounded-md transition-colors ${
                  tab === "signin" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground"
                }`}
                onClick={() => setTab("signin")}
              >
                Sign In
              </button>
              <button
                className={`flex-1 py-2.5 text-sm font-semibold rounded-md transition-colors ${
                  tab === "create" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground"
                }`}
                onClick={() => setTab("create")}
              >
                Create Account
              </button>
            </div>

            {tab === "signin" ? (
              <form className="space-y-4" onSubmit={handleLogin}>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                  <input
                    type="email"
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    className="w-full h-10 px-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Password</label>
                  <input
                    type="password"
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    className="w-full h-10 px-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="••••••••"
                  />
                </div>
                <div className="flex justify-end">
                  <a href="#" className="text-sm text-primary hover:underline">Forgot password?</a>
                </div>
                <Button type="submit" variant="hero" className="w-full h-11" disabled={loginLoading}>
                  {loginLoading ? "Signing in…" : "Sign In"}
                </Button>
              </form>
            ) : (
              <form className="space-y-4" onSubmit={handleSignUp}>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">First Name</label>
                    <input
                      type="text"
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full h-10 px-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Last Name</label>
                    <input
                      type="text"
                      required
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full h-10 px-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                  <input
                    type="email"
                    required
                    value={signUpEmail}
                    onChange={(e) => setSignUpEmail(e.target.value)}
                    className="w-full h-10 px-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Phone</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full h-10 px-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+234 800 000 0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Account Type</label>
                  <select
                    required
                    value={userType}
                    onChange={(e) => setUserType(e.target.value)}
                    className="w-full h-10 px-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select account type</option>
                    {accountTypes.map((t) => (
                      <option key={t.value} value={t.value}>{t.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Password</label>
                  <input
                    type="password"
                    required
                    value={signUpPassword}
                    onChange={(e) => setSignUpPassword(e.target.value)}
                    className="w-full h-10 px-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="••••••••"
                  />
                </div>
                <Button type="submit" variant="hero" className="w-full h-11" disabled={signUpLoading}>
                  {signUpLoading ? "Creating Account…" : "Create Account"}
                </Button>
              </form>
            )}

            {/* Divider */}
            <div className="flex items-center gap-3 my-6">
              <div className="flex-1 h-px bg-border" />
              <span className="text-xs text-muted-foreground">or continue with</span>
              <div className="flex-1 h-px bg-border" />
            </div>

            {/* OAuth */}
            <div className="flex gap-3">
              <Button variant="outline" className="flex-1 h-10 rounded-none" onClick={handleGoogleAuth}>
                <svg className="w-4 h-4" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                Google
              </Button>
              <Button variant="outline" className="flex-1 h-10 rounded-none" disabled>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
                Apple
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
