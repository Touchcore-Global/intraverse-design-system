import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import dashboardBooking from "@/assets/features-hero.svg";
import dashboardBackoffice from "@/assets/dashboard-backoffice.jpg";
import dashboardStorefront from "@/assets/dashboard-storefront.jpg";
import dashboardAnalytics from "@/assets/dashboard-analytics.jpg";

const containers = [
  {
    title: "One Platform. Every Booking.",
    p1: "Search, compare, and book flights, hotels, and tour packages from multiple global suppliers — all from a single dashboard. No more switching between GDS terminals, NDC portals, and supplier websites.",
    p2: "Manage customer records, track payments, issue invoices, and monitor your team's performance in real time. Intraverse replaces the ten tools you're juggling today with one that just works.",
    image: dashboardBooking,
  },
  {
    title: "Automate the Back Office",
    p1: "From invoice generation to BSP reconciliation, Intraverse handles the admin tasks that eat into your day. Set up automated payment reminders, generate financial reports, and track commissions effortlessly.",
    p2: "Spend less time on spreadsheets and more time closing deals. Your back office runs itself so your team can focus on what matters — selling travel.",
    image: dashboardBackoffice,
  },
  {
    title: "Your Own Branded Storefront",
    p1: "Launch a professional, mobile-ready booking website under your own brand — no developers needed. Showcase flights, hotels, and packages with real-time pricing your customers can book directly.",
    p2: "Build credibility and compete with larger agencies online. Customise your storefront with your logo, colours, and domain to create a seamless customer experience.",
    image: dashboardStorefront,
  },
  {
    title: "Insights That Drive Growth",
    p1: "Track sales performance, monitor booking trends, and identify your top-performing agents with built-in analytics. Real-time dashboards give you full visibility into revenue, margins, and customer behaviour.",
    p2: "Make data-driven decisions with reports you can filter by date, destination, supplier, or agent. Know exactly where your business stands at any moment.",
    image: dashboardAnalytics,
  },
];

export const HomeTrustBar = () => {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const lastScrollTime = useRef(0);
  const touchStartY = useRef(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleWheel = (e: WheelEvent) => {
      const rect = section.getBoundingClientRect();
      const inView = rect.top <= 100 && rect.bottom >= window.innerHeight * 0.5;
      if (!inView) return;

      const now = Date.now();
      if (now - lastScrollTime.current < 1200) {
        e.preventDefault();
        return;
      }

      const direction = e.deltaY > 0 ? 1 : -1;

      setActive((prev) => {
        const next = prev + direction;
        if (next < 0 || next >= containers.length) return prev;
        e.preventDefault();
        lastScrollTime.current = now;
        return next;
      });
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const rect = section.getBoundingClientRect();
      const inView = rect.top <= 100 && rect.bottom >= window.innerHeight * 0.5;
      if (!inView) return;

      const deltaY = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(deltaY) < 40) return;

      const now = Date.now();
      if (now - lastScrollTime.current < 1200) return;

      const direction = deltaY > 0 ? 1 : -1;
      setActive((prev) => {
        const next = prev + direction;
        if (next < 0 || next >= containers.length) return prev;
        lastScrollTime.current = now;
        return next;
      });
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    section.addEventListener("touchstart", handleTouchStart, { passive: true });
    section.addEventListener("touchend", handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("wheel", handleWheel);
      section.removeEventListener("touchstart", handleTouchStart);
      section.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-accent">
      <div className="container mx-auto px-4 md:pl-[100px]">
        <h2
          className="text-3xl sm:text-4xl md:text-[60px] font-[660] leading-[1.1] tracking-[-2px] text-left mb-6"
          style={{ color: "rgb(23, 19, 33)" }}
        >
          Built for How Travel is Sold
        </h2>
        <p
          className="text-left text-base sm:text-lg md:text-[24px] md:leading-[30px] md:tracking-[-0.48px] font-normal mb-6 max-w-2xl"
          style={{ color: "rgb(116, 113, 122)" }}
        >
          Trusted by 400+ travel agents selling flights, hotels, tours &amp; packages
        </p>
        <div className="flex justify-start mb-10">
          <Button variant="hero" size="xl" className="cta-responsive min-h-[48px]">
            Try for Free
          </Button>
        </div>

        {/* Card with overlay crossfade */}
        <div className="relative bg-background rounded-2xl shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08)] border border-border/50 overflow-hidden min-h-[400px]">
          {containers.map((c, i) => (
            <div
              key={i}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-8 md:p-12 transition-all duration-500 ease-in-out ${
                i === active
                  ? "relative opacity-100 translate-y-0"
                  : "absolute inset-0 opacity-0 translate-y-6 pointer-events-none"
              }`}
            >
              <div>
                <h3
                  className="text-2xl md:text-3xl font-semibold mb-4"
                  style={{ color: "rgb(23, 19, 33)" }}
                >
                  {c.title}
                </h3>
                <p
                  className="text-base md:text-lg leading-relaxed mb-4"
                  style={{ color: "rgb(116, 113, 122)" }}
                >
                  {c.p1}
                </p>
                <p
                  className="text-base md:text-lg leading-relaxed"
                  style={{ color: "rgb(116, 113, 122)" }}
                >
                  {c.p2}
                </p>
              </div>
              <div className="flex justify-center lg:justify-end">
                <img
                  src={c.image}
                  alt={`Intraverse - ${c.title}`}
                  className="rounded-2xl shadow-lg w-full"
                  loading="lazy"
                  width={1280}
                  height={800}
                />
              </div>
            </div>
          ))}

          {/* Progress dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {containers.map((_, i) => (
              <span
                key={i}
                className={`block w-2 h-2 rounded-full transition-all duration-300 ${
                  i === active ? "bg-primary w-6" : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
