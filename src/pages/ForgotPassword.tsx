import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { forgotPassword, recoverPassword, resendRecoverOtp } from "@/lib/api/auth";
import { Mail, KeyRound, CheckCircle2, RefreshCw, ArrowLeft } from "lucide-react";
import { SEO } from "@/components/SEO";

type Step = "email" | "otp" | "success";
const OTP_LENGTH = 6;

export default function ForgotPassword() {
  const navigate = useNavigate();
  const { toast } = useToast();

  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(""));
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [cooldown, setCooldown] = useState(0);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (cooldown <= 0) return;
    const timer = setTimeout(() => setCooldown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [cooldown]);

  const handleForgot = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await forgotPassword(email);
      toast({
        title: "Reset Code Sent",
        description: response.message || "Check your email for the reset code.",
      });
      setStep("otp");
      setCooldown(60);
    } catch (err: any) {
      toast({
        title: "Request Failed",
        description: err.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);
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
    inputRefs.current[Math.min(pasted.length, OTP_LENGTH - 1)]?.focus();
  };

  const handleRecover = async (e: React.FormEvent) => {
    e.preventDefault();
    const code = otp.join("");
    if (code.length !== OTP_LENGTH) {
      toast({ title: "Incomplete Code", description: `Please enter all ${OTP_LENGTH} digits.`, variant: "destructive" });
      return;
    }
    if (newPassword.length < 6) {
      toast({ title: "Password Too Short", description: "Password must be at least 6 characters.", variant: "destructive" });
      return;
    }
    if (newPassword !== confirmPassword) {
      toast({ title: "Passwords Don't Match", description: "Please make sure your passwords match.", variant: "destructive" });
      return;
    }

    setLoading(true);
    try {
      const response = await recoverPassword(code, newPassword);
      toast({
        title: "Password Reset!",
        description: response.message || "Your password has been reset successfully.",
      });
      setStep("success");
    } catch (err: any) {
      toast({
        title: "Reset Failed",
        description: err.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (cooldown > 0) return;
    setResending(true);
    try {
      const response = await resendRecoverOtp(email);
      toast({
        title: "Code Resent!",
        description: response.message || "A new reset code has been sent.",
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

  return (
    <>
      <SEO
        title="Reset Password | Intraverse"
        description="Reset your Intraverse account password."
        noindex={true}
      />
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 flex items-start justify-center bg-accent">
        <div className="w-full max-w-md mx-4">
          <div className="bg-card rounded-xl shadow-lg border border-border p-8 text-center">
            {step === "email" && (
              <>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-2xl font-bold text-foreground mb-2">Forgot Password?</h1>
                <p className="text-muted-foreground mb-6">
                  Enter your email and we'll send you a code to reset your password.
                </p>
                <form onSubmit={handleForgot} className="space-y-4 text-left">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full h-10 px-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="you@company.com"
                      autoFocus
                    />
                  </div>
                  <Button type="submit" variant="hero" className="w-full h-11" disabled={loading}>
                    {loading ? "Sending…" : "Send Reset Code"}
                  </Button>
                </form>
                <div className="mt-6 pt-6 border-t border-border">
                  <button
                    type="button"
                    onClick={() => navigate("/login")}
                    className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    Back to Login
                  </button>
                </div>
              </>
            )}

            {step === "otp" && (
              <>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <KeyRound className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-2xl font-bold text-foreground mb-2">Reset Your Password</h1>
                <p className="text-muted-foreground mb-1">Enter the code sent to</p>
                <p className="text-sm font-semibold text-foreground mb-6">{email}</p>

                <form onSubmit={handleRecover} className="space-y-4">
                  <div className="flex justify-center gap-2" onPaste={handlePaste}>
                    {otp.map((digit, i) => (
                      <input
                        key={i}
                        ref={(el) => { inputRefs.current[i] = el; }}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOtpChange(i, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(i, e)}
                        className="w-12 h-14 text-center text-xl font-bold rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        autoFocus={i === 0}
                      />
                    ))}
                  </div>

                  <div className="text-left space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">New Password</label>
                      <input
                        type="password"
                        required
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="w-full h-10 px-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="••••••••"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Confirm Password</label>
                      <input
                        type="password"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full h-10 px-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    className="w-full h-11"
                    disabled={loading || otp.join("").length !== OTP_LENGTH}
                  >
                    {loading ? "Resetting…" : "Reset Password"}
                  </Button>
                </form>

                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-4">
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

                <div className="mt-6 pt-6 border-t border-border">
                  <button
                    type="button"
                    onClick={() => setStep("email")}
                    className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    Use a different email
                  </button>
                </div>
              </>
            )}

            {step === "success" && (
              <>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h1 className="text-2xl font-bold text-foreground mb-2">Password Reset!</h1>
                <p className="text-muted-foreground mb-6">
                  Your password has been reset successfully. You can now sign in with your new password.
                </p>
                <Button variant="hero" className="w-full h-11" onClick={() => navigate("/login")}>
                  Back to Sign In
                </Button>
              </>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}