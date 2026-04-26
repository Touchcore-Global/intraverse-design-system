// Lightweight analytics helper.
// Pushes events to window.dataLayer (GA4 / GTM compatible) and forwards to
// gtag/posthog/plausible if any of them happen to be loaded. Safe no-op
// otherwise, so it works in dev and before a provider is wired up.

type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
    posthog?: { capture: (event: string, props?: EventParams) => void };
    plausible?: (event: string, opts?: { props?: EventParams }) => void;
  }
}

export function trackEvent(eventName: string, params: EventParams = {}) {
  if (typeof window === "undefined") return;

  const payload = { event: eventName, ...params };

  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(payload);

    window.gtag?.("event", eventName, params);
    window.posthog?.capture(eventName, params);
    window.plausible?.(eventName, { props: params });
  } catch {
    // Never let analytics break the UI.
  }

  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.debug("[analytics]", eventName, params);
  }
}

// Canonical event names for the homepage final CTA area.
export const CTA_EVENTS = {
  demoClick: "cta_book_demo_click",
  whatsappClick: "cta_whatsapp_click",
  navProductClick: "nav_product_cta_click",
} as const;
