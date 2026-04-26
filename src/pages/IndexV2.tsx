import { Navbar } from "@/components/Navbar";
import { HeroSectionV2 } from "@/components/v2/HeroSectionV2";
import { HomeTrustBar } from "@/components/HomeTrustBar";
import { ProblemStatementV2 } from "@/components/v2/ProblemStatementV2";
import { ProductShowcaseV2 } from "@/components/v2/ProductShowcaseV2";
import { WhoWeServeSectionV2 } from "@/components/v2/WhoWeServeSectionV2";
import { ToolsSectionV2 } from "@/components/v2/ToolsSectionV2";

import { HowItWorksV2 } from "@/components/v2/HowItWorksV2";
import { Testimonials } from "@/components/Testimonials";
import { SecuritySectionV2 } from "@/components/v2/SecuritySectionV2";
import { FinalCTAV2 } from "@/components/v2/FinalCTAV2";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { RevealSection } from "@/components/RevealSection";

const IndexV2 = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="h-16" />

      {/* Hero stays static — above the fold, no entry transition needed */}
      <HeroSectionV2 />

      <RevealSection variant="fade"><HomeTrustBar /></RevealSection>
      <RevealSection variant="fade-up"><ProblemStatementV2 /></RevealSection>
      <RevealSection variant="fade-up"><Testimonials /></RevealSection>
      <RevealSection variant="scale"><ProductShowcaseV2 /></RevealSection>
      <RevealSection variant="fade-up"><WhoWeServeSectionV2 /></RevealSection>
      <RevealSection variant="fade-up"><ToolsSectionV2 /></RevealSection>
      
      <RevealSection variant="fade-up"><HowItWorksV2 /></RevealSection>
      {/* <RevealSection variant="fade-up"><SecuritySectionV2 /></RevealSection> — hidden per request */}
      <RevealSection variant="scale"><FinalCTAV2 /></RevealSection>

      <Footer />
      <WhatsAppFab />
    </div>
  );
};

export default IndexV2;
