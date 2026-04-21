import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DEMO_URL, WHATSAPP_URL } from "@/lib/constants";

interface NavbarCTAsProps {
  /** "compact" for desktop navbar, "full" for mobile menu footer */
  layout?: "compact" | "full";
  onClick?: () => void;
}

/**
 * Shared CTA pair (Book a Demo + Login/Register or WhatsApp) used in
 * both the desktop Navbar and the MobileMenu so styling stays in sync.
 */
export function NavbarCTAs({ layout = "compact", onClick }: NavbarCTAsProps) {
  const isFull = layout === "full";
  const size = isFull ? "xl" : "default";
  const wrapperClass = isFull
    ? "flex flex-col gap-3 w-full"
    : "flex items-center gap-3";
  const btnClass = isFull ? "w-full" : "h-10 px-6 text-sm";

  return (
    <div className={wrapperClass}>
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

      {isFull ? (
        <>
          <Button
            variant="whatsapp"
            size={size}
            className={btnClass}
            asChild
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClick}
            >
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
            </a>
          </Button>
          <a href="/login" className="block" onClick={onClick}>
            <Button
              variant="outline"
              size={size}
              className="w-full rounded-none border-foreground text-foreground hover:bg-accent"
            >
              Login / Register
            </Button>
          </a>
        </>
      ) : (
        <a href="/login" onClick={onClick}>
          <Button
            variant="outline"
            size={size}
            className="h-10 px-6 text-sm rounded-none border-foreground text-foreground hover:bg-accent"
          >
            Login / Register
          </Button>
        </a>
      )}
    </div>
  );
}
