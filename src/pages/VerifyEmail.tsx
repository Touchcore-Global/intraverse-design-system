import { useState, useRef, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { verifyEmail, resendVerificationOtp, storeAuthToken } from "@/lib/api/auth";
import { Mail, CheckCircle2, RefreshCw } from "lucide-react";

const OTP_LENGTH = 6;
const REDIRECT_URL = "https://www.intraverse.app/";

export default function VerifyEmail() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const email = searchParams.get("email") || "";
  const { toast } = useToast();

  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(""));
  const [verifying, setVerifying] = useState(false);
  const [resending, setResending] = useState(false);
  const [verified, setVerified] = useState(false);
  const [cooldown, setCooldown] = useState(0);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Cooldown timer for resend
  useEffect(() => {
    if (cooldown <= 0) return;
    const timer = setTimeout(() => setCooldown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [cooldown]);

  // Redirect if no email
  useEffect(() => {
    if (!email) {
      navigate("/login", { replace: true });
    }
  }, [email, navigate]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    // Auto-advance
    if (value && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, OTP_LENGTH);
    if (!pasted) return;
    const newOtp = [...otp];
    for (let i = 0; i < pasted.length; i++) {
      newOtp[i] = pasted[i];
    }
    setOtp(newOtp);
    const nextIndex = Math.min(pasted.length, OTP_LENGTH - 1);
    inputRefs.current[nextIndex]?.focus();
  };

  const handleVerify = async (e?: React.FormEvent) => {
    e?.preventDefault();
    const code = otp.join("");
    if (code.length !== OTP_LENGTH) {
      toast({
        title: "Incomplete Code",
        description: `Please enter all ${OTP_LENGTH} digits.`,
        variant: "destructive",
      });
      return;
    }

    setVerifying(true);
    try {
      const response = await verifyEmail(email, code);
      storeAuthToken(response.data.token);
      setVerified(true);
      toast({
        title: "Email Verified!",
        description: response.message || "Your email has been verified successfully.",
      });
      // Redirect after a short delay
      setTimeout(() => {
        window.location.href = REDIRECT_URL;
      }, 2000);
    } catch (err: any) {
      toast({
        title: "Verification Failed",
        description: err.message,
        variant: "destructive",
      });
    } finally {
      setVerifying(false);
    }
  };

  const handleResend = async () => {
    if (cooldown > 0) return;
    setResending(true);
    try {
      const response = await resendVerificationOtp(email);
      toast({
        title: "Code Sent!",
        description: response.message || "A new verification code has been sent to your email.",
      });
      setCooldown(60);
      setOtp(Array(OTP_LENGTH).fill(""));
      inputRefs.current[0]?.focus();
    } catch (err: any) {
      toast({
        title: "Resend Failed",
        description: err.message,
        variant: "destructive",
      });
    } finally {
      setResending(false);
    }
  };

  if (!email) return null;

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 flex items-start justify-center bg-accent">
        <div className="w-full max-w-md mx-4">
          <div className="bg-card rounded-xl shadow-lg border border-border p-8 text-center">
            {verified ? (
              <>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h1 className="text-2xl font-bold text-foreground mb-2">Email Verified!</h1>
                <p className="text-muted-foreground mb-6">
                  Your account is now active. Redirecting you…
                </p>
                <a href={REDIRECT_URL}>
                  <Button variant="hero" className="w-full h-11">
                    Continue to Intraverse
                  </Button>
                </a>
              </>
            ) : (
              <>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-2xl font-bold text-foreground mb-2">Verify Your Email</h1>
                <p className="text-muted-foreground mb-1">
                  We've sent a verification code to
                </p>
                <p className="text-sm font-semibold text-foreground mb-6">{email}</p>

                <form onSubmit={handleVerify}>
                  {/* OTP Inputs */}
                  <div className="flex justify-center gap-2 mb-6" onPaste={handlePaste}>
                    {otp.map((digit, i) => (
                      <input
                        key={i}
                        ref={(el) => { inputRefs.current[i] = el; }}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleChange(i, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(i, e)}
                        className="w-12 h-14 text-center text-xl font-bold rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        autoFocus={i === 0}
                      />
                    ))}
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    className="w-full h-11 mb-4"
                    disabled={verifying || otp.join("").length !== OTP_LENGTH}
                  >
                    {verifying ? "Verifying…" : "Verify Email"}
                  </Button>
                </form>

                {/* Resend */}
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <span>Didn't receive the code?</span>
                  <button
                    type="button"
                    onClick={handleResend}
                    disabled={resending || cooldown > 0}
                    className="inline-flex items-center gap-1 text-primary hover:underline disabled:opacity-50 disabled:no-underline font-medium"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${resending ? "animate-spin" : ""}`} />
                    {cooldown > 0 ? `Resend in ${cooldown}s` : "Resend"}
                  </button>
                </div>

                {/* Back to login */}
                <div className="mt-6 pt-6 border-t border-border">
                  <button
                    type="button"
                    onClick={() => navigate("/login")}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    ← Back to Login
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
