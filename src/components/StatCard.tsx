interface StatCardProps {
  value: string;
  label: string;
  light?: boolean;
}

export const StatCard = ({ value, label, light }: StatCardProps) => {
  return (
    <div className="text-center">
      <div className={`font-mono font-medium text-4xl md:text-5xl ${light ? 'text-primary-foreground' : 'text-primary'}`}>{value}</div>
      <p className={`mt-2 text-sm ${light ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>{label}</p>
    </div>
  );
};
