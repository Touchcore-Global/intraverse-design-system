import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LoadingButton } from "@/components/ui/loading-button";
import { DEMO_URL, WHATSAPP_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface NavbarCTAsProps {
  /** "compact" for desktop navbar, "full" for mobile menu footer */
  layout?: "compact" | "full";
  onClick?: () => void;
  /** Show spinner + disable the Book a Demo button (e.g. during form submit). */
  demoLoading?: boolean;
  /** Show spinner + disable the WhatsApp button. */
  whatsappLoading?: boolean;
  /** Disable all CTAs without a spinner. */
  disabled?: boolean;
}

/**
 * Shared CTA pair (Book a Demo + Login/Register or WhatsApp) used in
 * both the desktop Navbar and the MobileMenu so styling stays in sync.
 *
 * When `demoLoading`/`whatsappLoading`/`disabled` are set, the affected
 * buttons render as real <button>s with a spinner and pointer-events
 * disabled so they cannot be re-clicked mid-action.
 */
export function NavbarCTAs({
  layout = "compact",
  onClick,
  demoLoading = false,
  whatsappLoading = false,
  disabled = false,
}: NavbarCTAsProps) {
  const isFull = layout === "full";
  const size = "default" as const;
  const wrapperClass = isFull
    ? "flex flex-col gap-2 w-full"
    : "flex items-center gap-3";
  const btnClass = isFull
    ? "w-full h-11 text-sm sm:h-12 sm:text-base"
    : "h-10 px-6 text-sm";

  // Demo CTA - render as <button> when loading/disabled so we can show state,
  // otherwise use an <a> for native external-link semantics.
  const demoButton =
    demoLoading || disabled ? (
      <LoadingButton
        variant="hero"
        size={size}
        className={btnClass}
        loading={demoLoading}
        loadingText="Opening…"
        disabled={disabled}
      >
        Book a Demo
      </LoadingButton>
    ) : (
      <Button variant="hero" size={size} className={btnClass} asChild>
        <a
          href={DEMO_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
        >
          Book a Demo
        </a>
      </Button>
    );

  return (
    <div className={wrapperClass} aria-busy={demoLoading || whatsappLoading || undefined}>
      {demoButton}

      {isFull ? (
        <>
          {whatsappLoading || disabled ? (
            <LoadingButton
              variant="whatsapp"
              size={size}
              className={btnClass}
              loading={whatsappLoading}
              loadingText="Opening WhatsApp…"
              disabled={disabled}
            >
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
            </LoadingButton>
          ) : (
            <Button variant="whatsapp" size={size} className={btnClass} asChild>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-wa-source="mobile-menu"
                onClick={onClick}
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </a>
            </Button>
          )}

          <a
            href="/login"
            className={cn("block", disabled && "pointer-events-none opacity-50")}
            aria-disabled={disabled || undefined}
            tabIndex={disabled ? -1 : undefined}
            onClick={onClick}
          >
            <Button
              variant="outline"
              size={size}
              disabled={disabled}
              className="w-full rounded-none border-foreground text-foreground hover:bg-accent"
            >
              Login / Register
            </Button>
          </a>
        </>
      ) : (
        <a
          href="/login"
          className={cn(disabled && "pointer-events-none opacity-50")}
          aria-disabled={disabled || undefined}
          tabIndex={disabled ? -1 : undefined}
          onClick={onClick}
        >
          <Button
            variant="outline"
            size={size}
            disabled={disabled}
            className="h-10 px-6 text-sm rounded-none border-foreground text-foreground hover:bg-accent"
          >
            Login / Register
          </Button>
        </a>
      )}
    </div>
  );
}
