import { createRoot, hydrateRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

type HelmetState = {
  title: { toString(): string };
  meta: { toString(): string };
  link: { toString(): string };
  script: { toString(): string };
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
    snapSaveState?: () => Record<string, unknown>;
  }
}

if (typeof window !== "undefined") {
  window.snapSaveState = () => {
    // On the client, react-helmet-async mutates document.head directly and
    // marks its tags with data-rh="true". We can't read helmetContext here
    // (only populated during server rendering), so we dedupe by walking
    // the data-rh tags and removing any static index.html tag that targets
    // the same head slot. This guarantees exactly one of each per-route
    // SEO tag in the snapshot.
    const head = document.head;
    const helmetTags = Array.from(
      head.querySelectorAll<HTMLElement>("[data-rh]")
    );

    const slotKey = (el: HTMLElement): string | null => {
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
        // hreflang alternates are keyed by language so each one is its own slot
        if (rel === "alternate" && hreflang) return `link:alternate:${hreflang.toLowerCase()}`;
        return `link:${rel}`;
      }
      return null;
    };

    // Collect every slot Helmet owns on this route
    const helmetSlots = new Set<string>();
    for (const el of helmetTags) {
      const key = slotKey(el);
      if (key) helmetSlots.add(key);
    }

    // Remove non-Helmet (static) tags from index.html that collide
    const candidates = head.querySelectorAll<HTMLElement>(
      "title, meta, link[rel='canonical'], link[rel='alternate']"
    );
    candidates.forEach((el) => {
      if (el.hasAttribute("data-rh")) return;
      const key = slotKey(el);
      if (key && helmetSlots.has(key)) el.remove();
    });

    return {};
  };
}

