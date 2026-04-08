import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { HomeTrustBar } from "@/components/HomeTrustBar";
import { ProblemStatement } from "@/components/ProblemStatement";
import { ProductShowcase } from "@/components/ProductShowcase";
import { VideoWalkthrough } from "@/components/VideoWalkthrough";
import { HowItWorks } from "@/components/HowItWorks";
import { StatsSection } from "@/components/StatsSection";
import { Testimonials } from "@/components/Testimonials";
import { SecuritySection } from "@/components/SecuritySection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Spacer for fixed nav */}
      <div className="h-16" />

      <HeroSection />
      <HomeTrustBar />
      <ProblemStatement />
      <ProductShowcase />
      <VideoWalkthrough />
      <HowItWorks />
      <StatsSection />
      <Testimonials />
      <SecuritySection />
      <FinalCTA />
      <Footer />
      <WhatsAppFab />
    </div>
  );
};

export default Index;
