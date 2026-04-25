import { ExternalLink } from "lucide-react";

export const POSTMAN_COLLECTION_URL = "https://documenter.getpostman.com/view/17671608/2s9Yyqhgtj";

export function DocsPostmanLink({ children }: { children: React.ReactNode }) {
  return (
    <a
      href={POSTMAN_COLLECTION_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-[hsl(var(--brand-blue))] hover:underline"
    >
      {children}
      <ExternalLink className="w-3 h-3" />
    </a>
  );
}
