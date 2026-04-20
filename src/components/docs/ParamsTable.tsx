export type Param = {
  name: string;
  type: string;
  required?: boolean;
  description: string;
};

export function ParamsTable({ params }: { params: Param[] }) {
  return (
    <div className="my-6 overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-muted text-left">
            <th className="px-4 py-2.5 font-semibold text-foreground">Name</th>
            <th className="px-4 py-2.5 font-semibold text-foreground">Type</th>
            <th className="px-4 py-2.5 font-semibold text-foreground">Required</th>
            <th className="px-4 py-2.5 font-semibold text-foreground">Description</th>
          </tr>
        </thead>
        <tbody>
          {params.map((p, i) => (
            <tr key={p.name} className={i % 2 === 0 ? "bg-white" : "bg-muted/50"}>
              <td className="px-4 py-2.5 align-top">
                <code
                  className="font-mono text-[13px] text-foreground"
                  style={{ fontFamily: "'Fira Code', 'Courier New', ui-monospace, monospace" }}
                >
                  {p.name}
                </code>
              </td>
              <td className="px-4 py-2.5 align-top text-muted-foreground font-mono text-[13px]">{p.type}</td>
              <td className="px-4 py-2.5 align-top">
                {p.required ? (
                  <span className="text-red-600 font-medium text-xs">Required</span>
                ) : (
                  <span className="text-muted-foreground text-xs">Optional</span>
                )}
              </td>
              <td className="px-4 py-2.5 align-top text-muted-foreground">{p.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
