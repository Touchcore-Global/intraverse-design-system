import { useState } from "react";
import { z } from "zod";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { SEO } from "@/components/SEO";
import {
  formatNigeriaPhoneInput,
  isValidNigeriaPhone,
  toE164Nigeria,
} from "@/lib/phone";

const interestSchema = z.object({
  first_name: z.string().trim().min(1, "First name is required").max(100),
  last_name: z.string().trim().min(1, "Last name is required").max(100),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .max(255, "Email is too long")
    .email("Enter a valid email address"),
  phone_number: z
    .string()
    .trim()
    .min(1, "Phone number is required")
    .transform((val, ctx) => {
      const e164 = toE164Nigeria(val);
      if (!e164) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Enter a valid Nigerian mobile number (e.g. 0803 123 4567).",
        });
        return z.NEVER;
      }
      return e164;
    }),
  details: z
    .string()
    .trim()
    .min(10, "Please share a few details (min 10 chars)")
    .max(2000),
});


// Spam protection
const RATE_LIMIT_KEY = "independents_interest_last_submit";
const RATE_LIMIT_MS = 60 * 1000; // 1 submission per minute per browser
const MIN_FILL_TIME_MS = 3000; // forms filled in <3s are almost certainly bots

const IndependentsInterest = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    details: "",
  });
  // Honeypot - should always remain empty for real users (hidden from view).
  const [website, setWebsite] = useState("");
  // Track when the form was first rendered to detect instant submissions.
  const [mountedAt] = useState(() => Date.now());
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Honeypot tripped - bot filled a hidden field. Pretend success silently.
    if (website.trim() !== "") {
      setSubmitted(true);
      return;
    }

    // Bot heuristic: form submitted faster than a human could type.
    if (Date.now() - mountedAt < MIN_FILL_TIME_MS) {
      toast({
        title: "Please take a moment",
        description: "The form was submitted too quickly. Please try again.",
        variant: "destructive",
      });
      return;
    }

    // Client-side rate limit (per browser).
    try {
      const last = Number(localStorage.getItem(RATE_LIMIT_KEY) || 0);
      const elapsed = Date.now() - last;
      if (last && elapsed < RATE_LIMIT_MS) {
        const wait = Math.ceil((RATE_LIMIT_MS - elapsed) / 1000);
        toast({
          title: "Slow down a bit",
          description: `Please wait ${wait}s before submitting again.`,
          variant: "destructive",
        });
        return;
      }
    } catch {
      // localStorage unavailable - proceed without client-side rate limiting.
    }

    const parsed = interestSchema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.issues.forEach((issue) => {
        if (issue.path[0]) fieldErrors[issue.path[0] as string] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }


    setSubmitting(true);
    const id = crypto.randomUUID();
    const { error } = await supabase.from("independents_interest").insert({
      id,
      first_name: parsed.data.first_name,
      last_name: parsed.data.last_name,
      email: parsed.data.email,
      phone_number: parsed.data.phone_number,
      details: parsed.data.details,
    });

    if (error) {
      setSubmitting(false);
      toast({
        title: "Submission failed",
        description: "Please try again in a moment.",
        variant: "destructive",
      });
      return;
    }

    // Fire-and-forget confirmation + internal notification emails
    const submittedAt = new Date().toUTCString();
    const fullName = `${parsed.data.first_name} ${parsed.data.last_name}`.trim();

    void supabase.functions.invoke("send-transactional-email", {
      body: {
        templateName: "independents-interest-confirmation",
        recipientEmail: parsed.data.email,
        idempotencyKey: `independents-confirm-${id}`,
        templateData: { name: parsed.data.first_name },
      },
    });

    void supabase.functions.invoke("send-transactional-email", {
      body: {
        templateName: "independents-interest-notification",
        recipientEmail: "support@intraverse.africa",
        idempotencyKey: `independents-notify-${id}`,
        templateData: {
          firstName: parsed.data.first_name,
          lastName: parsed.data.last_name,
          fullName,
          email: parsed.data.email,
          phoneNumber: parsed.data.phone_number,
          details: parsed.data.details,
          submittedAt,
        },
      },
    });

    // Record successful submission timestamp for client-side rate limiting.
    try {
      localStorage.setItem(RATE_LIMIT_KEY, String(Date.now()));
    } catch {
      // ignore storage errors
    }

    setSubmitting(false);
    setSubmitted(true);
    toast({
      title: "Thank you!",
      description: "We've received your interest and will be in touch soon.",
    });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="Express Interest — Independents Programme | Intraverse"
        description="Join the Intraverse Independents Programme. Register your interest to get access to travel booking tools, supplier connections, and training for new travel agents."
        canonical="https://intraverse.africa/for/independents/interest"
        noindex={true}
      />
      <Navbar />

      <main className="flex-1 py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-2xl">
          {submitted ? (
            <div className="text-center py-12">
              <CheckCircle2 className="h-16 w-16 mx-auto text-primary mb-6" />
              <h1 className="text-3xl md:text-4xl font-[660] tracking-[-1px] mb-4">
                You're on the list
              </h1>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Thanks for your interest in the Intraverse Independents
                Programme. Our team will reach out shortly with next steps.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="hero" asChild>
                  <a href="/for/independents">Explore the Programme</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/">Back to Home</a>
                </Button>
              </div>
            </div>
          ) : (
            <>
              <div className="mb-10">
                <h1 className="text-3xl md:text-[40px] md:leading-[48px] font-[660] tracking-[-1.5px] mb-4">
                  Express Your Interest
                </h1>
                <p className="text-muted-foreground text-base md:text-lg">
                  Join the Intraverse Independents Programme. Share a few
                  details and our team will get in touch with onboarding
                  instructions.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Honeypot - hidden from real users; bots tend to fill every field. */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: "-10000px",
                    top: "auto",
                    width: "1px",
                    height: "1px",
                    overflow: "hidden",
                  }}
                >
                  <Label htmlFor="website">Website</Label>
                  <Input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="first_name">First Name *</Label>
                    <Input
                      id="first_name"
                      value={form.first_name}
                      onChange={(e) => handleChange("first_name", e.target.value)}
                      maxLength={100}
                      required
                    />
                    {errors.first_name && (
                      <p className="text-sm text-destructive">{errors.first_name}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last_name">Last Name *</Label>
                    <Input
                      id="last_name"
                      value={form.last_name}
                      onChange={(e) => handleChange("last_name", e.target.value)}
                      maxLength={100}
                      required
                    />
                    {errors.last_name && (
                      <p className="text-sm text-destructive">{errors.last_name}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    maxLength={255}
                    required
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone_number">
                    Phone Number (WhatsApp) *
                  </Label>
                  <Input
                    id="phone_number"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="0803 123 4567"
                    value={form.phone_number}
                    onChange={(e) =>
                      handleChange(
                        "phone_number",
                        formatNigeriaPhoneInput(e.target.value),
                      )
                    }
                    maxLength={20}
                    aria-invalid={!!errors.phone_number}
                    aria-describedby="phone_number_hint"
                    required
                  />
                  {errors.phone_number ? (
                    <p className="text-sm text-destructive">
                      {errors.phone_number}
                    </p>
                  ) : isValidNigeriaPhone(form.phone_number) ? (
                    <p
                      id="phone_number_hint"
                      className="text-sm text-primary flex items-center gap-1.5"
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                      WhatsApp-ready: {toE164Nigeria(form.phone_number)}
                    </p>
                  ) : (
                    <p
                      id="phone_number_hint"
                      className="text-sm text-muted-foreground"
                    >
                      Use your WhatsApp number - Nigerian format, e.g.
                      0803 123 4567 or +234 803 123 4567.
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="details">Details *</Label>
                  <Textarea
                    id="details"
                    placeholder="Tell us about yourself, your network, and why you'd like to join."
                    value={form.details}
                    onChange={(e) => handleChange("details", e.target.value)}
                    maxLength={2000}
                    rows={6}
                    required
                  />
                  {errors.details && (
                    <p className="text-sm text-destructive">{errors.details}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="xl"
                  className="w-full sm:w-auto"
                  disabled={submitting}
                >
                  {submitting ? "Submitting..." : "Submit Interest"}
                </Button>
              </form>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default IndependentsInterest;
