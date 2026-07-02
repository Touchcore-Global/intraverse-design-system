import { Navbar } from "@/components/Navbar";
import { HeroSectionV2 } from "@/components/v2/HeroSectionV2";
import { HomeTrustBar } from "@/components/HomeTrustBar";
import { ProblemStatementV2 } from "@/components/v2/ProblemStatementV2";
import { ProductShowcaseV2 } from "@/components/v2/ProductShowcaseV2";
import { WhoWeServeSectionV2 } from "@/components/v2/WhoWeServeSectionV2";
import { ToolsSectionV2 } from "@/components/v2/ToolsSectionV2";

import { HowItWorksV2 } from "@/components/v2/HowItWorksV2";
import { Testimonials } from "@/components/Testimonials";

import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { RevealSection } from "@/components/RevealSection";
import { SEO } from "@/components/SEO";

const IndexV5 = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <SEO
        title="Intraverse — B2B Travel Technology Platform (V5)"
        description="Africa's B2B travel technology platform. Access GDS, NDC, and 900+ airlines through one API. White-label booking engine, agent tools, and corporate travel management."
        noindex={true}
      />
      <Navbar />
      <div className="h-16" />

      <HeroSectionV2 />

      <RevealSection variant="fade"><HomeTrustBar /></RevealSection>
      <RevealSection variant="fade-up"><ProblemStatementV2 /></RevealSection>
      <RevealSection variant="fade-up"><Testimonials /></RevealSection>
      <RevealSection variant="scale"><ProductShowcaseV2 /></RevealSection>
      <RevealSection variant="fade-up"><WhoWeServeSectionV2 /></RevealSection>
      <RevealSection variant="fade-up"><ToolsSectionV2 /></RevealSection>

      <RevealSection variant="fade-up"><HowItWorksV2 /></RevealSection>
      <Footer />
      <WhatsAppFab />
    </div>
  );
};

export default IndexV5;
