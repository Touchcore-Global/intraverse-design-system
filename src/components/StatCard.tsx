interface StatCardProps {
  value: string;
  label: string;
}

export const StatCard = ({ value, label }: StatCardProps) => {
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-primary">{value}</div>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </div>
  );
};
