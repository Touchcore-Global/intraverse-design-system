import { createRoot, hydrateRoot } from "react-dom/client";
import { HelmetProvider, type FilledContext } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";
import { installWhatsAppClickTracking } from "./lib/whatsapp-tracking";

installWhatsAppClickTracking();

const rootElement = document.getElementById("root")!;

// Shared Helmet context so we can read the rendered head state during
// react-snap prerendering and inject it into document.head before the
// snapshot is captured.
const helmetContext: { helmet?: FilledContext["helmet"] } = {};

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
    const helmet = helmetContext.helmet;
    if (!helmet) return {};

    const head = document.head;

    // 1) Replace <title> with Helmet's version (parse from helmet.title.toString()).
    const titleHtml = helmet.title.toString();
    const titleMatch = titleHtml.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
    if (titleMatch) {
      document.title = titleMatch[1].replace(/&amp;/g, "&");
    }

    // 2) Remove conflicting static tags that Helmet owns per-route so we
    //    end up with exactly one of each in the prerendered HTML.
    const removeSelectors = [
      'meta[name="description"]',
      'meta[name="robots"]',
      'link[rel="canonical"]',
      'link[rel="alternate"][hreflang]',
      'meta[property^="og:"]',
      'meta[name^="twitter:"]',
      'script[type="application/ld+json"]',
    ];
    removeSelectors.forEach((sel) => {
      head.querySelectorAll(sel).forEach((el) => el.remove());
    });

    // 3) Append Helmet's rendered tags (meta, link, script) into <head>.
    const fragments = [
      helmet.meta.toString(),
      helmet.link.toString(),
      helmet.script.toString(),
    ].join("");
    if (fragments.trim()) {
      const tmp = document.createElement("template");
      tmp.innerHTML = fragments;
      Array.from(tmp.content.childNodes).forEach((node) => {
        head.appendChild(node);
      });
    }

    return {};
  };
}
