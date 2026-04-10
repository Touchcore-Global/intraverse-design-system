import { StatCard } from "@/components/StatCard";

const stats = [
  { value: "400+", label: "Active Agents" },
  { value: "[X,000]+", label: "Bookings Processed" },
  { value: "[X]+", label: "Global Suppliers Connected" },
  { value: "48hrs", label: "Average Setup Time" },
  { value: "₦[X]M+", label: "Monthly Transactions" },
  { value: "99.5%", label: "Platform Uptime" },
];

export const StatsSection = () => {
  return (
    <section className="py-20 section-gradient-primary shimmer-overlay text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto">
          {stats.map((stat) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} light />
          ))}
        </div>
      </div>
    </section>
  );
};
