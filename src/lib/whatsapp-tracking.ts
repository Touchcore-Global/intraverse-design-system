// Global click tracking for WhatsApp links.
// Uses event delegation so we don't have to wrap every <a href="https://wa.me/..."> on every page.
// Fires CTA_EVENTS.whatsappClick via the existing analytics util.

import { CTA_EVENTS, trackEvent } from "./analytics";

const WHATSAPP_HOSTS = new Set(["wa.me", "api.whatsapp.com", "chat.whatsapp.com"]);

function isWhatsAppHref(href: string | null): boolean {
  if (!href) return false;
  try {
    const url = new URL(href, window.location.origin);
    return WHATSAPP_HOSTS.has(url.hostname);
  } catch {
    return false;
  }
}

/**
 * Best-effort label for where the click happened so we can compare audience pages.
 * Order of precedence:
 *   1. Explicit `data-wa-source` attribute on the anchor or any ancestor
 *   2. Nearest landmark/section id
 *   3. Tag name of the nearest <section>/<header>/<footer>/<nav>/<aside>
 */
function resolveSource(anchor: HTMLAnchorElement): string {
  const explicit = anchor.closest<HTMLElement>("[data-wa-source]");
  if (explicit?.dataset.waSource) return explicit.dataset.waSource;

  const landmark = anchor.closest<HTMLElement>(
    "section[id], header[id], footer[id], nav[id], aside[id]",
  );
  if (landmark?.id) return landmark.id;

  const tagged = anchor.closest<HTMLElement>("section, header, footer, nav, aside");
  if (tagged) return tagged.tagName.toLowerCase();

  return "unknown";
}

let installed = false;

export function installWhatsAppClickTracking() {
  if (installed || typeof window === "undefined") return;
  installed = true;

  document.addEventListener(
    "click",
    (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest<HTMLAnchorElement>("a[href]");
      if (!anchor) return;
      if (!isWhatsAppHref(anchor.getAttribute("href"))) return;

      trackEvent(CTA_EVENTS.whatsappClick, {
        source: resolveSource(anchor),
        path: window.location.pathname,
        href: anchor.href,
      });
    },
    { capture: true },
  );
}
