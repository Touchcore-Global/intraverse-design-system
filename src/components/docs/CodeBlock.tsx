import { useState, useMemo } from "react";
import { Copy, Check } from "lucide-react";
import { highlight } from "@/lib/docs/highlight";

interface CodeBlockProps {
  code: string;
  language?: string;
  label?: string;
}

export function CodeBlock({ code, language = "bash", label }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const html = useMemo(() => highlight(code, language), [code, language]);
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative my-6 rounded-lg overflow-hidden bg-[#1A1A2E] border border-white/5 docs-code">
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-black/30">
        <span className="text-[11px] font-mono uppercase tracking-wider text-white/40">
          {label ?? language}
        </span>
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 text-[11px] font-mono text-white/50 hover:text-white transition-colors"
          aria-label="Copy code"
        >
          {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="p-6 overflow-x-auto text-sm leading-relaxed">
        <code
          className={`font-mono text-white/90 language-${language}`}
          style={{ fontFamily: "'Fira Code', 'Courier New', ui-monospace, monospace" }}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </pre>
    </div>
  );
}

export function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="px-1.5 py-0.5 rounded text-[0.875em] font-mono bg-[#F0F2F5] text-foreground">
      {children}
    </code>
  );
}
