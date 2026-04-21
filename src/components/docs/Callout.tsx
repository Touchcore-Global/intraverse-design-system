import { Info, AlertTriangle, AlertOctagon } from "lucide-react";

type Variant = "info" | "warning" | "danger";

const styles: Record<Variant, { bg: string; border: string; icon: React.ElementType; iconColor: string }> = {
  info: { bg: "bg-[#F0F5FC]", border: "border-l-[hsl(var(--brand-blue))]", icon: Info, iconColor: "text-[hsl(var(--brand-blue))]" },
  warning: { bg: "bg-[#FFF8E1]", border: "border-l-amber-500", icon: AlertTriangle, iconColor: "text-amber-600" },
  danger: { bg: "bg-[#FEF2F2]", border: "border-l-red-500", icon: AlertOctagon, iconColor: "text-red-600" },
};

export function Callout({
  variant = "info",
  children,
  title,
}: {
  variant?: Variant;
  children: React.ReactNode;
  title?: string;
}) {
  const s = styles[variant];
  const Icon = s.icon;
  return (
    <div className={`my-6 border-l-4 rounded-r-md p-4 ${s.bg} ${s.border}`}>
      <div className="flex gap-3">
        <Icon className={`w-5 h-5 shrink-0 mt-0.5 ${s.iconColor}`} />
        <div className="text-sm text-foreground/80 leading-relaxed">
          {title && <p className="font-semibold text-foreground mb-1">{title}</p>}
          {children}
        </div>
      </div>
    </div>
  );
}
