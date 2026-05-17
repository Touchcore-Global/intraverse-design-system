import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Sends a GA4 page_view event on every route change.
 * Place this component once inside <BrowserRouter> (no wrapper needed).
 */
export const PageViewTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const w = window as unknown as {
      gtag?: (...args: unknown[]) => void;
      fbq?: (...args: unknown[]) => void;
    };

    w.gtag?.("event", "page_view", {
      page_path: location.pathname + location.search,
      page_location: window.location.href,
      page_title: document.title,
    });

    w.fbq?.("track", "PageView");
  }, [location]);

  return null;
};
