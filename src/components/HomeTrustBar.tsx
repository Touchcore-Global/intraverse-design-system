import { Button } from "@/components/ui/button";
import dashboardImage from "@/assets/section2-dashboard.jpg";

export const HomeTrustBar = () => {
  return (
    <section className="py-16 bg-accent">
      <div className="container mx-auto px-4 md:pl-[100px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Explainer text */}
          <div>
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
            <div className="flex justify-start">
              <Button variant="hero" size="xl" className="cta-responsive min-h-[48px]">
                Try for Free
              </Button>
            </div>
          </div>

          {/* Right side - Dashboard image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={dashboardImage}
              alt="Intraverse travel booking platform dashboard"
              className="rounded-2xl shadow-lg w-full max-w-lg"
              loading="lazy"
              width={800}
              height={800}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
