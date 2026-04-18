import { Navbar } from "@/components/Navbar";
import { HeroSectionV2 } from "@/components/v2/HeroSectionV2";
import { HomeTrustBar } from "@/components/HomeTrustBar";
import { ProblemStatementV2 } from "@/components/v2/ProblemStatementV2";
import { ProductShowcaseV2 } from "@/components/v2/ProductShowcaseV2";
import { WhoWeServeSection } from "@/components/WhoWeServeSection";
import { ToolsSection } from "@/components/ToolsSection";
import { VideoWalkthrough } from "@/components/VideoWalkthrough";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { SecuritySection } from "@/components/SecuritySection";
import { FinalCTAV2 } from "@/components/v2/FinalCTAV2";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";

const IndexV2 = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="h-16" />

      <HeroSectionV2 />
      <HomeTrustBar />
      <ProblemStatementV2 />
      <Testimonials />
      <ProductShowcaseV2 />
      <WhoWeServeSection />
      <ToolsSection />
      <VideoWalkthrough />
      <HowItWorks />

      <SecuritySection />
      <FinalCTAV2 />
      <Footer />
      <WhatsAppFab />
    </div>
  );
};

export default IndexV2;
