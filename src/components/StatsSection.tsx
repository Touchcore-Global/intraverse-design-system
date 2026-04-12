import { StatCard } from "@/components/StatCard";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const stats = [
  { value: "200+", label: "Active Agents" },
  { value: "5,000+", label: "Bookings Processed" },
  { value: "25+", label: "Global Suppliers Connected" },
  { value: "48hrs", label: "Average Setup Time" },
  
  { value: "99.5%", label: "Platform Uptime" },
];

export const StatsSection = () => {
  const { ref, revealClass } = useScrollReveal();
  return (
    <section className="py-20 section-gradient-primary shimmer-overlay text-primary-foreground">
      <div ref={ref} className={`container mx-auto px-4 transition-all duration-700 ease-out ${revealClass}`}>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto">
          {stats.map((stat) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} light />
          ))}
        </div>
      </div>
    </section>
  );
};
