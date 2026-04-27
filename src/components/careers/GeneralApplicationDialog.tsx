import { useState } from "react";
import { z } from "zod";
import { Send, Upload, X, Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface GeneralApplicationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultRole?: string;
}

const ALLOWED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "text/plain",
  "application/rtf",
];
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(50).optional().or(z.literal("")),
  role: z.string().trim().min(1, "Please tell us the role you're interested in").max(150),
  location: z.string().trim().max(150).optional().or(z.literal("")),
  linkedin: z.string().trim().max(300).optional().or(z.literal("")),
  portfolio: z.string().trim().max(300).optional().or(z.literal("")),
  message: z.string().trim().max(5000).optional().or(z.literal("")),
});

const sanitizeFileName = (name: string) =>
  name.replace(/[^a-zA-Z0-9._-]/g, "_").slice(0, 80);

const validateFile = (file: File): string | null => {
  if (file.size > MAX_FILE_SIZE) return "File must be 10MB or smaller.";
  if (!ALLOWED_TYPES.includes(file.type) && !/\.(pdf|doc|docx|txt|rtf)$/i.test(file.name)) {
    return "Only PDF, DOC, DOCX, TXT or RTF files are allowed.";
  }
  return null;
};

export const GeneralApplicationDialog = ({
  open,
  onOpenChange,
  defaultRole,
}: GeneralApplicationDialogProps) => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [cv, setCv] = useState<File | null>(null);
  const [coverLetter, setCoverLetter] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: defaultRole ?? "",
    location: "",
    linkedin: "",
    portfolio: "",
    message: "",
  });

  const reset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      role: defaultRole ?? "",
      location: "",
      linkedin: "",
      portfolio: "",
      message: "",
    });
    setCv(null);
    setCoverLetter(null);
  };

  const handleFile =
    (setter: (f: File | null) => void) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0] ?? null;
      if (!file) return setter(null);
      const error = validateFile(file);
      if (error) {
        toast({ title: "Invalid file", description: error, variant: "destructive" });
        e.target.value = "";
        return;
      }
      setter(file);
    };

  const uploadFile = async (
    file: File,
    submissionId: string,
    label: "cv" | "cover-letter",
  ): Promise<{ url: string; name: string } | null> => {
    const path = `${submissionId}/${label}-${sanitizeFileName(file.name)}`;
    const { error: uploadError } = await supabase.storage
      .from("career-applications")
      .upload(path, file, { upsert: false, contentType: file.type });
    if (uploadError) throw uploadError;

    const { data: signed, error: signError } = await supabase.storage
      .from("career-applications")
      .createSignedUrl(path, 60 * 60 * 24 * 7); // 7 days
    if (signError) throw signError;
    return { url: signed.signedUrl, name: file.name };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!cv) {
      toast({
        title: "CV required",
        description: "Please attach your CV to continue.",
        variant: "destructive",
      });
      return;
    }
    const parsed = schema.safeParse(formData);
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
      const submissionId = crypto.randomUUID();
      const cvUploaded = await uploadFile(cv, submissionId, "cv");
      const coverUploaded = coverLetter
        ? await uploadFile(coverLetter, submissionId, "cover-letter")
        : null;

      const { error: invokeError } = await supabase.functions.invoke(
        "send-transactional-email",
        {
          body: {
            templateName: "general-application-notification",
            recipientEmail: "support@intraverse.africa",
            idempotencyKey: `career-app-${submissionId}`,
            templateData: {
              name: parsed.data.name,
              email: parsed.data.email,
              phone: parsed.data.phone || undefined,
              role: parsed.data.role,
              location: parsed.data.location || undefined,
              linkedin: parsed.data.linkedin || undefined,
              portfolio: parsed.data.portfolio || undefined,
              message: parsed.data.message || undefined,
              cvUrl: cvUploaded?.url,
              cvName: cvUploaded?.name,
              coverLetterUrl: coverUploaded?.url,
              coverLetterName: coverUploaded?.name,
              submittedAt: new Date().toUTCString(),
            },
            replyTo: parsed.data.email,
          },
        },
      );
      if (invokeError) throw invokeError;

      toast({
        title: "Application sent!",
        description:
          "Thanks for applying. Our team will review your details and reach out if there's a fit.",
      });
      reset();
      onOpenChange(false);
    } catch (err) {
      console.error("General application submission failed", err);
      toast({
        title: "Something went wrong",
        description:
          "We couldn't submit your application. Please try again or email support@intraverse.africa.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={(o) => (!submitting ? onOpenChange(o) : null)}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Send a General Application</DialogTitle>
          <DialogDescription>
            Tell us about yourself and the kind of role you're looking for. Attach your CV
            (and a cover letter if you'd like) and we'll be in touch when something fits.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 mt-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="ga-name">Full Name *</Label>
              <Input
                id="ga-name"
                required
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="ga-email">Email *</Label>
              <Input
                id="ga-email"
                type="email"
                required
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="ga-phone">Phone</Label>
              <Input
                id="ga-phone"
                placeholder="+234 ..."
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="ga-location">Location</Label>
              <Input
                id="ga-location"
                placeholder="City, Country"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="ga-role">Role you're interested in *</Label>
            <Input
              id="ga-role"
              required
              placeholder="e.g. Senior Backend Engineer, Product Designer"
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="ga-linkedin">LinkedIn</Label>
              <Input
                id="ga-linkedin"
                placeholder="https://linkedin.com/in/..."
                value={formData.linkedin}
                onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="ga-portfolio">Portfolio / Website</Label>
              <Input
                id="ga-portfolio"
                placeholder="https://..."
                value={formData.portfolio}
                onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <FileField
              id="ga-cv"
              label="CV / Résumé *"
              file={cv}
              onChange={handleFile(setCv)}
              onClear={() => setCv(null)}
              required
            />
            <FileField
              id="ga-cover"
              label="Cover Letter"
              file={coverLetter}
              onChange={handleFile(setCoverLetter)}
              onClear={() => setCoverLetter(null)}
            />
          </div>

          <div>
            <Label htmlFor="ga-message">Anything else you'd like to share?</Label>
            <Textarea
              id="ga-message"
              rows={4}
              placeholder="Tell us about your experience, what you're looking for, or anything else..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <p className="text-xs text-muted-foreground">
            Accepted file types: PDF, DOC, DOCX, TXT, RTF — up to 10MB each.
          </p>

          <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={submitting}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={submitting}>
              {submitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Send Application
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

interface FileFieldProps {
  id: string;
  label: string;
  file: File | null;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
}

const FileField = ({ id, label, file, required, onChange, onClear }: FileFieldProps) => (
  <div>
    <Label htmlFor={id}>{label}</Label>
    {file ? (
      <div className="flex items-center justify-between gap-2 rounded-md border border-input bg-background px-3 py-2 text-sm">
        <span className="truncate">{file.name}</span>
        <button
          type="button"
          onClick={onClear}
          className="text-muted-foreground hover:text-foreground"
          aria-label="Remove file"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    ) : (
      <label
        htmlFor={id}
        className="flex items-center justify-center gap-2 rounded-md border border-dashed border-input bg-background px-3 py-2 text-sm text-muted-foreground cursor-pointer hover:bg-accent transition-colors"
      >
        <Upload className="w-4 h-4" />
        Upload file
      </label>
    )}
    <input
      id={id}
      type="file"
      accept=".pdf,.doc,.docx,.txt,.rtf,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,text/plain,application/rtf"
      required={required && !file}
      className="hidden"
      onChange={onChange}
    />
  </div>
);
