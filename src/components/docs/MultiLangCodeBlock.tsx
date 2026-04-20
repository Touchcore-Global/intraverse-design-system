import { useEffect, useMemo, useState } from "react";
import { Copy, Check } from "lucide-react";
import { highlight } from "@/lib/docs/highlight";

export type DocLang = "curl" | "node" | "python" | "php";

const LANG_LABELS: Record<DocLang, string> = {
  curl: "cURL",
  node: "Node.js",
  python: "Python",
  php: "PHP",
};

const LANG_ORDER: DocLang[] = ["curl", "node", "python", "php"];
const STORAGE_KEY = "docs:preferred-lang";
const SYNC_EVENT = "docs:lang-change";

function getInitialLang(): DocLang {
  if (typeof window === "undefined") return "curl";
  const stored = window.localStorage.getItem(STORAGE_KEY) as DocLang | null;
  if (stored && LANG_ORDER.includes(stored)) return stored;
  return "curl";
}

export interface MultiLangSamples {
  curl: string;
  node: string;
  python: string;
  php: string;
}

interface MultiLangCodeBlockProps {
  samples: MultiLangSamples;
}

export function MultiLangCodeBlock({ samples }: MultiLangCodeBlockProps) {
  const [lang, setLang] = useState<DocLang>(() => getInitialLang());
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<DocLang>).detail;
      if (detail && LANG_ORDER.includes(detail)) setLang(detail);
    };
    window.addEventListener(SYNC_EVENT, handler);
    return () => window.removeEventListener(SYNC_EVENT, handler);
  }, []);

  const selectLang = (next: DocLang) => {
    setLang(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore storage errors (private mode, etc.)
    }
    window.dispatchEvent(new CustomEvent<DocLang>(SYNC_EVENT, { detail: next }));
  };

  const code = samples[lang];
  const html = useMemo(() => highlight(code, lang), [code, lang]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative my-6 rounded-lg overflow-hidden bg-[#1A1A2E] border border-white/5 docs-code">
      <div className="flex items-center justify-between border-b border-white/5 bg-black/30">
        <div className="flex items-center" role="tablist" aria-label="Code language">
          {LANG_ORDER.map((l) => {
            const active = l === lang;
            return (
              <button
                key={l}
                role="tab"
                aria-selected={active}
                onClick={() => selectLang(l)}
                className={`px-3 py-2 text-[11px] font-mono uppercase tracking-wider transition-colors border-b-2 ${
                  active
                    ? "text-white border-[hsl(var(--brand-blue))]"
                    : "text-white/40 border-transparent hover:text-white/70"
                }`}
              >
                {LANG_LABELS[l]}
              </button>
            );
          })}
        </div>
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 px-4 py-2 text-[11px] font-mono text-white/50 hover:text-white transition-colors"
          aria-label="Copy code"
        >
          {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="p-6 overflow-x-auto text-sm leading-relaxed">
        <code
          className={`font-mono text-white/90 whitespace-pre language-${lang}`}
          style={{ fontFamily: "'Fira Code', 'Courier New', ui-monospace, monospace" }}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </pre>
    </div>
  );
}

/* ---------- Helpers to build samples for common HTTP request shapes ---------- */

interface HttpRequestSpec {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  url: string;
  /** Parsed JSON body, if any */
  body?: unknown;
  /** Extra headers beyond Authorization + Content-Type */
  headers?: Record<string, string>;
  /** If true, include `Authorization: Bearer YOUR_ACCESS_TOKEN` */
  auth?: boolean;
  /** Form-encoded body fields (used in token request); takes precedence over `body` */
  form?: Record<string, string>;
}

function indent(str: string, spaces: number) {
  const pad = " ".repeat(spaces);
  return str
    .split("\n")
    .map((l) => (l ? pad + l : l))
    .join("\n");
}

export function buildHttpSamples(spec: HttpRequestSpec): MultiLangSamples {
  const { method, url, body, headers = {}, auth = true, form } = spec;
  const hasJsonBody = !form && body !== undefined;
  const hasForm = !!form;

  const allHeaders: Record<string, string> = {
    ...(auth ? { Authorization: "Bearer YOUR_ACCESS_TOKEN" } : {}),
    ...(hasJsonBody ? { "Content-Type": "application/json" } : {}),
    ...(hasForm ? { "Content-Type": "application/x-www-form-urlencoded" } : {}),
    ...headers,
  };

  const bodyJson = hasJsonBody ? JSON.stringify(body, null, 2) : "";
  const formString = hasForm
    ? Object.entries(form!)
        .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
        .join("&")
    : "";

  /* ---------- cURL ---------- */
  const curlLines = [`curl -X ${method} "${url}"`];
  Object.entries(allHeaders).forEach(([k, v]) => {
    curlLines.push(`  -H "${k}: ${v}"`);
  });
  if (hasJsonBody) {
    curlLines.push(`  -d '${bodyJson}'`);
  } else if (hasForm) {
    curlLines.push(`  -d "${formString}"`);
  }
  const curl = curlLines.join(" \\\n");

  /* ---------- Node.js (fetch) ---------- */
  const nodeHeadersStr = Object.entries(allHeaders)
    .map(([k, v]) => `    "${k}": "${v}"`)
    .join(",\n");
  let nodeBodyStr = "";
  if (hasJsonBody) {
    nodeBodyStr = `,\n  body: JSON.stringify(${indent(bodyJson, 2).trimStart()})`;
  } else if (hasForm) {
    nodeBodyStr = `,\n  body: "${formString}"`;
  }
  const node = `const response = await fetch("${url}", {
  method: "${method}",
  headers: {
${nodeHeadersStr}
  }${nodeBodyStr}
});

const data = await response.json();
console.log(data);`;

  /* ---------- Python (requests) ---------- */
  const pyHeadersStr = Object.entries(allHeaders)
    .map(([k, v]) => `    "${k}": "${v}"`)
    .join(",\n");
  let pyBodyArg = "";
  if (hasJsonBody) {
    pyBodyArg = `,\n    json=${indent(bodyJson, 4).trimStart().replace(/true/g, "True").replace(/false/g, "False").replace(/null/g, "None")}`;
  } else if (hasForm) {
    const formPyDict = Object.entries(form!)
      .map(([k, v]) => `        "${k}": "${v}"`)
      .join(",\n");
    pyBodyArg = `,\n    data={\n${formPyDict}\n    }`;
  }
  const python = `import requests

response = requests.${method.toLowerCase()}(
    "${url}",
    headers={
${pyHeadersStr}
    }${pyBodyArg}
)

print(response.json())`;

  /* ---------- PHP (cURL) ---------- */
  const phpHeadersStr = Object.entries(allHeaders)
    .map(([k, v]) => `    "${k}: ${v}"`)
    .join(",\n");
  let phpBodySetup = "";
  if (hasJsonBody) {
    phpBodySetup = `\n$payload = ${indent(bodyJson, 0)};\ncurl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));`;
  } else if (hasForm) {
    phpBodySetup = `\ncurl_setopt($ch, CURLOPT_POSTFIELDS, "${formString}");`;
  }
  const php = `<?php
$ch = curl_init("${url}");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "${method}");
curl_setopt($ch, CURLOPT_HTTPHEADER, [
${phpHeadersStr}
]);${phpBodySetup}

$response = curl_exec($ch);
curl_close($ch);

print_r(json_decode($response, true));`;

  return { curl, node, python, php };
}
