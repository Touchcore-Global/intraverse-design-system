import { createRoot, hydrateRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

type HelmetDatum = { toString(): string };
type HelmetState = {
  title: HelmetDatum;
  meta: HelmetDatum;
  link: HelmetDatum;
  script: HelmetDatum;
};
import App from "./App.tsx";
import "./index.css";
import { installWhatsAppClickTracking } from "./lib/whatsapp-tracking";

installWhatsAppClickTracking();

const rootElement = document.getElementById("root")!;

// Shared Helmet context so we can read the rendered head state during
// react-snap prerendering and inject it into document.head before the
// snapshot is captured.
const helmetContext: Record<string, unknown> = {};
if (typeof window !== "undefined") {
  (window as unknown as { __helmetContext: typeof helmetContext }).__helmetContext = helmetContext;
}

const tree = (
  <HelmetProvider context={helmetContext}>
    <App />
  </HelmetProvider>
);

// react-snap pre-renders pages at build time; hydrate when markup is present.
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, tree);
} else {
  createRoot(rootElement).render(tree);
}

/**
 * react-snap hook: called inside the Puppeteer page right before the
 * snapshot is serialized. We use it to flush react-helmet-async's head
 * state into the real document.head so the prerendered HTML contains
 * per-route <title>, canonical, hreflang, OG, and Twitter tags.
 *
 * The default react-helmet-async dispatcher mutates document.head via
 * requestAnimationFrame, which can race with react-snap's snapshot. By
 * writing the tags synchronously here we guarantee they're in the HTML
 * that gets written to disk.
 */
declare global {
  interface Window {
    snapSaveState?: () => Record<string, unknown> | Promise<Record<string, unknown>>;
  }
}

if (typeof window !== "undefined") {
  // react-snap calls snapSaveState synchronously inside puppeteer right
  // before serializing document.documentElement.outerHTML. We proactively
  // flush react-helmet-async's rendered state into document.head (instead
  // of relying on its rAF-deferred dispatcher) so every prerendered route
  // ships per-route <title>, canonical, hreflang, OG, and Twitter tags.
  const slotKey = (el: Element): string | null => {
    const tag = el.tagName.toLowerCase();
    if (tag === "title") return "title";
    if (tag === "meta") {
      const name = el.getAttribute("name");
      const prop = el.getAttribute("property");
      const httpEquiv = el.getAttribute("http-equiv");
      if (name) return `meta:name:${name.toLowerCase()}`;
      if (prop) return `meta:property:${prop.toLowerCase()}`;
      if (httpEquiv) return `meta:http-equiv:${httpEquiv.toLowerCase()}`;
      return null;
    }
    if (tag === "link") {
      const rel = (el.getAttribute("rel") || "").toLowerCase();
      const hreflang = el.getAttribute("hreflang");
      if (rel === "alternate" && hreflang) return `link:alternate:${hreflang.toLowerCase()}`;
      return `link:${rel}`;
    }
    return null;
  };

  window.snapSaveState = () => {
    const head = document.head;
    const ctx = (window as unknown as { __helmetContext?: { helmet?: HelmetState } }).__helmetContext;
    const helmet = ctx?.helmet;

    // Parse Helmet's rendered HTML strings into a template so we get real
    // DOM elements we can append. This bypasses the rAF dispatcher entirely.
    const tpl = document.createElement("template");
    if (helmet) {
      tpl.innerHTML = [
        helmet.title?.toString() || "",
        helmet.meta?.toString() || "",
        helmet.link?.toString() || "",
        helmet.script?.toString() || "",
      ].join("");
    }

    const helmetEls: HTMLElement[] = [];
    Array.from(tpl.content.childNodes).forEach((node) => {
      if (node.nodeType === 1) {
        const el = node as HTMLElement;
        el.setAttribute("data-rh", "true");
        helmetEls.push(el);
      }
    });

    // If Helmet's own dispatcher already ran, those tags are already in
    // <head> with data-rh="true" — collect their slots so we don't double up.
    const existingHelmet = Array.from(head.querySelectorAll<HTMLElement>("[data-rh]"));
    const helmetSlots = new Set<string>();
    for (const el of [...helmetEls, ...existingHelmet]) {
      const key = slotKey(el);
      if (key) helmetSlots.add(key);
    }

    // Remove static index.html tags that collide with Helmet-owned slots.
    head.querySelectorAll<HTMLElement>(
      "title, meta, link[rel='canonical'], link[rel='alternate']"
    ).forEach((el) => {
      if (el.hasAttribute("data-rh")) return;
      const key = slotKey(el);
      if (key && helmetSlots.has(key)) el.remove();
    });

    // Append our freshly-parsed Helmet tags only for slots not already
    // populated by Helmet's own dispatcher (avoids duplicates).
    const existingSlots = new Set<string>();
    for (const el of existingHelmet) {
      const key = slotKey(el);
      if (key) existingSlots.add(key);
    }
    for (const el of helmetEls) {
      const key = slotKey(el);
      if (key && existingSlots.has(key)) continue;
      head.appendChild(el);
    }

    return {};
  };
}




