import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { SEO } from "@/components/SEO";

type State =
  | { kind: "loading" }
  | { kind: "missing-token" }
  | { kind: "valid" }
  | { kind: "already" }
  | { kind: "invalid" }
  | { kind: "submitting" }
  | { kind: "success" }
  | { kind: "error"; message: string };

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;

const Unsubscribe = () => {
  const [params] = useSearchParams();
  const token = params.get("token");
  const [state, setState] = useState<State>({ kind: "loading" });

  useEffect(() => {
    if (!token) {
      setState({ kind: "missing-token" });
      return;
    }
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(
          `${SUPABASE_URL}/functions/v1/handle-email-unsubscribe?token=${encodeURIComponent(token)}`,
          { headers: { apikey: SUPABASE_ANON_KEY } }
        );
        const data = await res.json();
        if (cancelled) return;
        if (res.status === 404) {
          setState({ kind: "invalid" });
        } else if (data?.valid === false && data?.reason === "already_unsubscribed") {
          setState({ kind: "already" });
        } else if (data?.valid === true) {
          setState({ kind: "valid" });
        } else {
          setState({ kind: "invalid" });
        }
      } catch {
        if (!cancelled) setState({ kind: "invalid" });
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [token]);

  const handleConfirm = async () => {
    if (!token) return;
    setState({ kind: "submitting" });
    try {
      const { data, error } = await supabase.functions.invoke(
        "handle-email-unsubscribe",
        { body: { token } }
      );
      if (error) throw error;
      if (data?.success) {
        setState({ kind: "success" });
      } else if (data?.reason === "already_unsubscribed") {
        setState({ kind: "already" });
      } else {
        setState({ kind: "error", message: "We couldn't process your request." });
      }
    } catch {
      setState({ kind: "error", message: "We couldn't process your request. Please try again." });
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="Unsubscribe | Intraverse"
        description="Manage your Intraverse email preferences."
        noindex={true}
      />
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4 py-24">
        <div className="w-full max-w-md bg-accent rounded-2xl p-8 text-center">
          {state.kind === "loading" && (
            <>
              <Loader2 className="w-10 h-10 text-primary mx-auto mb-4 animate-spin" />
              <h1 className="text-2xl font-bold text-foreground mb-2">Checking your link…</h1>
            </>
          )}

          {state.kind === "missing-token" && (
            <>
              <AlertCircle className="w-10 h-10 text-destructive mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-foreground mb-2">Invalid link</h1>
              <p className="text-muted-foreground mb-6">
                This unsubscribe link is missing required information.
              </p>
              <Button asChild><Link to="/">Back to home</Link></Button>
            </>
          )}

          {state.kind === "valid" && (
            <>
              <h1 className="text-2xl font-bold text-foreground mb-3">
                Unsubscribe from Intraverse emails
              </h1>
              <p className="text-muted-foreground mb-6">
                Confirm below and we'll stop sending you emails from this address.
              </p>
              <Button size="lg" className="w-full" onClick={handleConfirm}>
                Confirm unsubscribe
              </Button>
            </>
          )}

          {state.kind === "submitting" && (
            <>
              <Loader2 className="w-10 h-10 text-primary mx-auto mb-4 animate-spin" />
              <h1 className="text-2xl font-bold text-foreground mb-2">Processing…</h1>
            </>
          )}

          {state.kind === "success" && (
            <>
              <CheckCircle2 className="w-10 h-10 text-primary mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-foreground mb-2">You're unsubscribed</h1>
              <p className="text-muted-foreground mb-6">
                You will no longer receive emails from Intraverse at this address.
              </p>
              <Button asChild><Link to="/">Back to home</Link></Button>
            </>
          )}

          {state.kind === "already" && (
            <>
              <CheckCircle2 className="w-10 h-10 text-primary mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-foreground mb-2">Already unsubscribed</h1>
              <p className="text-muted-foreground mb-6">
                This email address has already been unsubscribed.
              </p>
              <Button asChild><Link to="/">Back to home</Link></Button>
            </>
          )}

          {state.kind === "invalid" && (
            <>
              <AlertCircle className="w-10 h-10 text-destructive mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-foreground mb-2">Link expired or invalid</h1>
              <p className="text-muted-foreground mb-6">
                We couldn't verify this unsubscribe link. It may have already been used.
              </p>
              <Button asChild><Link to="/contact">Contact support</Link></Button>
            </>
          )}

          {state.kind === "error" && (
            <>
              <AlertCircle className="w-10 h-10 text-destructive mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-foreground mb-2">Something went wrong</h1>
              <p className="text-muted-foreground mb-6">{state.message}</p>
              <Button onClick={handleConfirm}>Try again</Button>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Unsubscribe;
