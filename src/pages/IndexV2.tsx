import { Navbar } from "@/components/Navbar";
import { HeroSectionV2 } from "@/components/v2/HeroSectionV2";
import { HomeTrustBar } from "@/components/HomeTrustBar";
import { ProblemStatementV2 } from "@/components/v2/ProblemStatementV2";
import { ProductShowcaseV2 } from "@/components/v2/ProductShowcaseV2";
import { WhoWeServeSectionV2 } from "@/components/v2/WhoWeServeSectionV2";
import { ToolsSectionV2 } from "@/components/v2/ToolsSectionV2";
import { VideoWalkthrough } from "@/components/VideoWalkthrough";
import { HowItWorksV2 } from "@/components/v2/HowItWorksV2";
import { Testimonials } from "@/components/Testimonials";
import { SecuritySectionV2 } from "@/components/v2/SecuritySectionV2";
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
      <WhoWeServeSectionV2 />
      <ToolsSectionV2 />
      <VideoWalkthrough />
      <HowItWorksV2 />

      <SecuritySectionV2 />
      <FinalCTAV2 />
      <Footer />
      <WhatsAppFab />
    </div>
  );
};

export default IndexV2;
