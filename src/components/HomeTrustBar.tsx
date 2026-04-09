import { Button } from "@/components/ui/button";
import platformDashboard from "@/assets/platform-dashboard.jpg";

export const HomeTrustBar = () => {
  return (
    <section className="py-16 bg-accent">
      <div className="container mx-auto px-4 pl-[100px]">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[80px] font-[660] leading-[1.1] lg:leading-[88px] tracking-[-2.88px] text-left mb-6"
          style={{ color: 'rgb(23, 19, 33)' }}
        >
          Built for How Travel Is Sold
        </h2>
        <p
          className="text-left text-base sm:text-lg md:text-[32px] md:leading-[36px] md:tracking-[-0.64px] font-normal mb-6 max-w-2xl"
          style={{ color: 'rgb(116, 113, 122)' }}
        >
          Trusted by 400+ travel agents selling flights, hotels, tours &amp; packages
        </p>
        <div className="flex justify-start mb-10">
          <Button variant="hero" size="xl" className="cta-responsive min-h-[48px]">
            Try for Free
          </Button>
        </div>

        {/* Two-column explainer + dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-4 bg-background rounded-2xl p-8 md:p-12 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08)] border border-border/50">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4" style={{ color: 'rgb(23, 19, 33)' }}>
              One Platform. Every Booking.
            </h3>
            <p className="text-base md:text-lg leading-relaxed mb-4" style={{ color: 'rgb(116, 113, 122)' }}>
              Search, compare, and book flights, hotels, and tour packages from multiple global suppliers — all from a single dashboard. No more switching between GDS terminals, NDC portals, and supplier websites.
            </p>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: 'rgb(116, 113, 122)' }}>
              Manage customer records, track payments, issue invoices, and monitor your team's performance in real time. Intraverse replaces the ten tools you're juggling today with one that just works.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              src={platformDashboard}
              alt="Intraverse platform dashboard showing flights, hotels and analytics"
              className="rounded-2xl shadow-lg w-full max-w-lg"
              loading="lazy"
              width={1280}
              height={800}
            />
          </div>
        </div>
      </div>
    </section>
  );
};