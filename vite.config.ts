import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { checkPostmanUrls } from "./scripts/check-postman-url.mjs";

// Build-time guard: fail the build if any docs page hard-codes a Postman URL.
function postmanUrlGuard() {
  return {
    name: "postman-url-guard",
    buildStart() {
      const violations = checkPostmanUrls();
      if (violations.length > 0) {
        const lines = violations
          .map(
            (v) =>
              `  • ${v.file}\n      ${v.url}${v.reason ? `\n      ${v.reason}` : ""}`,
          )
          .join("\n");
        this.error(
          `Outdated/hard-coded Postman URL detected in docs. Use <DocsPostmanLink> from @/components/docs/DocsPostmanLink.\n${lines}`,
        );
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    postmanUrlGuard(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
}));
