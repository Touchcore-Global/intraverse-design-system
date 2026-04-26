import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { HomeTrustBar } from "@/components/HomeTrustBar";
import { ProblemStatement } from "@/components/ProblemStatement";
import { ProductShowcase } from "@/components/ProductShowcase";
import { WhoWeServeSection } from "@/components/WhoWeServeSection";
import { ToolsSection } from "@/components/ToolsSection";

import { HowItWorks } from "@/components/HowItWorks";
import { StatsSection } from "@/components/StatsSection";
import { Testimonials } from "@/components/Testimonials";
import { SecuritySection } from "@/components/SecuritySection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { MobileHome } from "@/components/mobile/MobileHome";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Spacer for fixed nav */}
      <div className="h-16" />

      {/* Mobile-only redesigned homepage */}
      <MobileHome />

      {/* Desktop / tablet (≥md) homepage — unchanged */}
      <div className="hidden md:block">
        <HeroSection />
        <HomeTrustBar />
        <ProblemStatement />
        <Testimonials />
        <ProductShowcase />
        <WhoWeServeSection />
        <ToolsSection />
        <HowItWorks />

        {/* <SecuritySection /> — hidden per request */}
        <FinalCTA />
        <Footer />
        <WhatsAppFab />
      </div>
    </div>
  );
};

export default Index;
