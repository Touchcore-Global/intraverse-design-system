import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import platformDashboard from "@/assets/platform-dashboard.jpg";

const useScrollReveal = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            entry.target.classList.remove("opacity-0", "translate-y-8");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    if (ref.current) {
      const cards = ref.current.querySelectorAll(".reveal-card");
      cards.forEach((card) => observer.observe(card));
    }
    return () => observer.disconnect();
  }, []);

  return ref;
};

const containers = [
  {
    title: "One Platform. Every Booking.",
    p1: "Search, compare, and book flights, hotels, and tour packages from multiple global suppliers — all from a single dashboard. No more switching between GDS terminals, NDC portals, and supplier websites.",
    p2: "Manage customer records, track payments, issue invoices, and monitor your team's performance in real time. Intraverse replaces the ten tools you're juggling today with one that just works.",
  },
  {
    title: "Automate the Back Office",
    p1: "From invoice generation to BSP reconciliation, Intraverse handles the admin tasks that eat into your day. Set up automated payment reminders, generate financial reports, and track commissions effortlessly.",
    p2: "Spend less time on spreadsheets and more time closing deals. Your back office runs itself so your team can focus on what matters — selling travel.",
  },
  {
    title: "Your Own Branded Storefront",
    p1: "Launch a professional, mobile-ready booking website under your own brand — no developers needed. Showcase flights, hotels, and packages with real-time pricing your customers can book directly.",
    p2: "Build credibility and compete with larger agencies online. Customise your storefront with your logo, colours, and domain to create a seamless customer experience.",
  },
  {
    title: "Insights That Drive Growth",
    p1: "Track sales performance, monitor booking trends, and identify your top-performing agents with built-in analytics. Real-time dashboards give you full visibility into revenue, margins, and customer behaviour.",
    p2: "Make data-driven decisions with reports you can filter by date, destination, supplier, or agent. Know exactly where your business stands at any moment.",
  },
];

export const HomeTrustBar = () => {
  const wrapperRef = useScrollReveal();

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

        <div ref={wrapperRef} className="flex flex-col gap-8">
          {containers.map((item, i) => (
            <div
              key={i}
              className="reveal-card opacity-0 translate-y-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-background rounded-2xl p-8 md:p-12 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08)] border border-border/50"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4" style={{ color: 'rgb(23, 19, 33)' }}>
                  {item.title}
                </h3>
                <p className="text-base md:text-lg leading-relaxed mb-4" style={{ color: 'rgb(116, 113, 122)' }}>
                  {item.p1}
                </p>
                <p className="text-base md:text-lg leading-relaxed" style={{ color: 'rgb(116, 113, 122)' }}>
                  {item.p2}
                </p>
              </div>
              <div className="flex justify-center lg:justify-end">
                <img
                  src={platformDashboard}
                  alt={`Intraverse - ${item.title}`}
                  className="rounded-2xl shadow-lg w-full"
                  loading="lazy"
                  width={1280}
                  height={800}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
