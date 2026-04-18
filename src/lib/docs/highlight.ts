import Prism from "prismjs";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-php";
import "prismjs/components/prism-json";
import "prismjs/components/prism-markup-templating";

export type HighlightLang =
  | "bash"
  | "shell"
  | "curl"
  | "javascript"
  | "js"
  | "node"
  | "typescript"
  | "ts"
  | "python"
  | "py"
  | "php"
  | "json";

const ALIAS: Record<string, string> = {
  curl: "bash",
  shell: "bash",
  sh: "bash",
  node: "javascript",
  js: "javascript",
  ts: "javascript",
  typescript: "javascript",
  py: "python",
};

export function highlight(code: string, lang: string): string {
  const normalized = ALIAS[lang] ?? lang;
  const grammar = Prism.languages[normalized];
  if (!grammar) {
    return escapeHtml(code);
  }
  return Prism.highlight(code, grammar, normalized);
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
