import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { HomeTrustBar } from "@/components/HomeTrustBar";
import { ProductShowcase } from "@/components/ProductShowcase";
import { WhoWeServeSection } from "@/components/WhoWeServeSection";
import { ToolsSection } from "@/components/ToolsSection";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { MobileHome } from "@/components/mobile/MobileHome";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { DEMO_URL } from "@/lib/constants";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Intraverse — B2B Travel Technology Platform"
        description="Africa's B2B travel technology platform."
        noindex={true}
      />
      <Navbar />
      <div className="h-16" />

      {/* Mobile-only redesigned homepage */}
      <MobileHome />

      {/* Desktop / tablet (≥md) homepage */}
      <div className="hidden md:block">
        {/* 1. Hero */}
        <HeroSection />
        {/* 2. Trust Bar */}
        <HomeTrustBar />
        {/* 3. Product Showcase */}
        <ProductShowcase />
        {/* 4. Who We Serve */}
        <WhoWeServeSection />
        {/* 5. Tools */}
        <ToolsSection />
        {/* 6. Testimonials */}
        <Testimonials />

        {/* 7. BOFU */}
        <section className="py-20 md:py-28 bg-foreground text-background">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-3xl sm:text-4xl md:text-[64px] md:leading-[1.1] font-[660] tracking-[-1.5px] mb-6">
              See Why 200+ Travel Agents Chose Intraverse
            </h2>
            <p className="text-base md:text-lg text-background/70 mb-10">
              Book a 15-minute demo and see how Intraverse can help you sell more travel,
              faster — with global inventory, 24/7 ticketing, and zero upfront cost.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" className="cta-responsive min-h-[48px]" asChild>
                <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">Book a Demo</a>
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="cta-responsive min-h-[48px] bg-transparent border-background text-background hover:bg-background hover:text-foreground"
                asChild
              >
                <Link to="/register">Start Free</Link>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
        <WhatsAppFab />
      </div>
    </div>
  );
};

export default Index;
