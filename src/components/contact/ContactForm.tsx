import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send } from "lucide-react";
import { useRef, useState } from "react";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255),
  company: z.string().trim().max(200).optional().or(z.literal("")),
  reason: z.string().trim().min(1, "Please select a topic").max(100),
  message: z.string().trim().min(1, "Message is required").max(5000, "Message must be less than 5000 characters"),
});

const contactReasons = [
  "API & Integration Support",
  "Partnership Enquiry",
  "Pricing & Plans",
  "General Enquiry",
];

const MIN_TIME_ON_PAGE_MS = 3000;
const MIN_INTERVAL_BETWEEN_SUBMITS_MS = 30_000;
const LAST_SUBMIT_KEY = "intraverse:contact:last-submit";

export const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    reason: "",
    message: "",
  });
  // Honeypot — must remain empty. Bots tend to fill every field.
  const [website, setWebsite] = useState("");
  const mountedAtRef = useRef<number>(Date.now());
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (website.trim() !== "") {
      toast({
        title: "Message sent!",
        description: "We've received your message and emailed you a confirmation.",
      });
      setFormData({ name: "", email: "", company: "", reason: "", message: "" });
      return;
    }

    const elapsed = Date.now() - mountedAtRef.current;
    if (elapsed < MIN_TIME_ON_PAGE_MS) {
      toast({
        title: "Hold on a moment",
        description: "Please take a moment to review your message before sending.",
        variant: "destructive",
      });
      return;
    }

    try {
      const lastRaw = localStorage.getItem(LAST_SUBMIT_KEY);
      const last = lastRaw ? Number(lastRaw) : 0;
      const sinceLast = Date.now() - last;
      if (last && sinceLast < MIN_INTERVAL_BETWEEN_SUBMITS_MS) {
        const wait = Math.ceil((MIN_INTERVAL_BETWEEN_SUBMITS_MS - sinceLast) / 1000);
        toast({
          title: "Please wait",
          description: `You can send another message in ${wait}s.`,
          variant: "destructive",
        });
        return;
      }
    } catch {
      // localStorage unavailable — proceed
    }

    const parsed = contactSchema.safeParse(formData);
    if (!parsed.success) {
      toast({
        title: "Please check your details",
        description: parsed.error.issues[0]?.message ?? "Some fields are invalid.",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);
    try {
      const id = crypto.randomUUID();
      const submittedAt = new Date().toUTCString();

      const { error: insertError } = await supabase
        .from("contact_submissions")
        .insert({
          id,
          name: parsed.data.name,
          email: parsed.data.email,
          company: parsed.data.company || null,
          reason: parsed.data.reason,
          message: parsed.data.message,
        });

      if (insertError) throw insertError;

      await Promise.all([
        supabase.functions.invoke("send-transactional-email", {
          body: {
            templateName: "contact-notification",
            recipientEmail: "support@intraverse.africa",
            idempotencyKey: `contact-notify-${id}`,
            templateData: {
              name: parsed.data.name,
              email: parsed.data.email,
              company: parsed.data.company || undefined,
              reason: parsed.data.reason,
              message: parsed.data.message,
              submittedAt,
            },
          },
        }),
        supabase.functions.invoke("send-transactional-email", {
          body: {
            templateName: "contact-confirmation",
            recipientEmail: parsed.data.email,
            idempotencyKey: `contact-confirm-${id}`,
            templateData: {
              name: parsed.data.name,
              reason: parsed.data.reason,
              message: parsed.data.message,
            },
          },
        }),
      ]);

      try {
        localStorage.setItem(LAST_SUBMIT_KEY, String(Date.now()));
      } catch {
        // ignore
      }

      toast({
        title: "Message sent!",
        description: "We've received your message and emailed you a confirmation.",
      });
      setFormData({ name: "", email: "", company: "", reason: "", message: "" });
    } catch (err) {
      console.error("Contact form submission failed", err);
      toast({
        title: "Something went wrong",
        description: "We couldn't send your message. Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-2">
        Send Us a Message
      </h2>
      <p className="text-muted-foreground mb-8">
        Fill out the form and our team will get back to you shortly.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Honeypot — hidden from users, visible to bots */}
        <div
          aria-hidden="true"
          className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden"
        >
          <label htmlFor="website-url">Website (leave this empty)</label>
          <input
            id="website-url"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">
              Full Name *
            </label>
            <Input
              required
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">
              Work Email *
            </label>
            <Input
              required
              type="email"
              placeholder="you@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">
              Company
            </label>
            <Input
              placeholder="Your company"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">
              What can we help with? *
            </label>
            <Select
              value={formData.reason}
              onValueChange={(value) => setFormData({ ...formData, reason: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a topic" />
              </SelectTrigger>
              <SelectContent>
                {contactReasons.map((reason) => (
                  <SelectItem key={reason} value={reason}>
                    {reason}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-foreground mb-1.5 block">
            Message *
          </label>
          <Textarea
            required
            placeholder="Tell us about your needs..."
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>

        <Button type="submit" size="lg" disabled={submitting} className="w-full sm:w-auto">
          <Send className="w-4 h-4 mr-2" />
          {submitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
};
