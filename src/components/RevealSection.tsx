import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealVariant = "fade-up" | "fade" | "scale" | "slide-right";

interface RevealSectionProps {
  children: ReactNode;
  variant?: RevealVariant;
  /** Delay in ms before the entry transition starts. */
  delay?: number;
  /** Override the default duration (ms). */
  duration?: number;
  className?: string;
}

/**
 * Wraps a section with smooth entry AND exit transitions tied to the viewport.
 * Uses IntersectionObserver to toggle visibility so leaving the viewport plays
 * the reverse animation. Respects `prefers-reduced-motion`.
 */
export const RevealSection = ({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 700,
  className = "",
}: RevealSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.12, rootMargin: "0px 0px -80px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const hiddenByVariant: Record<RevealVariant, string> = {
    "fade-up": "opacity-0 translate-y-10",
    fade: "opacity-0",
    scale: "opacity-0 scale-95",
    "slide-right": "opacity-0 -translate-x-10",
  };

  const visibleClass = "opacity-100 translate-x-0 translate-y-0 scale-100";
  const hiddenClass = reducedMotion ? "opacity-100" : hiddenByVariant[variant];

  return (
    <div
      ref={ref}
      className={`will-change-[opacity,transform] transition-all ease-out ${
        isVisible ? visibleClass : hiddenClass
      } ${className}`}
      style={{
        transitionDuration: reducedMotion ? "0ms" : `${duration}ms`,
        transitionDelay: isVisible ? `${delay}ms` : "0ms",
      }}
    >
      {children}
    </div>
  );
};
