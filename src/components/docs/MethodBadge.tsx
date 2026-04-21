type Method = "GET" | "POST" | "PATCH" | "DELETE" | "PUT";

const colors: Record<Method, string> = {
  POST: "bg-[#1E61DC]",
  GET: "bg-[#16A34A]",
  PATCH: "bg-[#EAB308]",
  DELETE: "bg-[#DC2626]",
  PUT: "bg-purple-600",
};

export function MethodBadge({ method }: { method: Method }) {
  return (
    <span
      className={`inline-flex items-center justify-center px-2 py-0.5 rounded text-[11px] font-mono font-semibold text-white tracking-wide ${colors[method]}`}
    >
      {method}
    </span>
  );
}

export function EndpointHeading({ method, path, id }: { method: Method; path: string; id?: string }) {
  return (
    <div id={id} className="flex flex-wrap items-center gap-2 mt-8 mb-3 scroll-mt-24">
      <MethodBadge method={method} />
      <code className="font-mono text-sm text-foreground">
        {path}
      </code>
    </div>
  );
}
