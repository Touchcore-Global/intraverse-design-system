import { createRoot, hydrateRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";
import { installWhatsAppClickTracking } from "./lib/whatsapp-tracking";

installWhatsAppClickTracking();

const rootElement = document.getElementById("root")!;

const tree = (
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

// react-snap pre-renders pages at build time; hydrate when markup is present.
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, tree);
} else {
  createRoot(rootElement).render(tree);
}
