import { NavbarV3 } from "@/components/v3/NavbarV3";
import { HeroSectionV2 } from "@/components/v2/HeroSectionV2";
import { FeatureGridV3 } from "@/components/v3/FeatureGridV3";
import { SliderSectionV3 } from "@/components/v3/SliderSectionV3";
import { ProofSectionV3 } from "@/components/v3/ProofSectionV3";
import { Testimonials } from "@/components/Testimonials";
import { FinalCTAV2 } from "@/components/v2/FinalCTAV2";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { RevealSection } from "@/components/RevealSection";
import { SEO } from "@/components/SEO";

const IndexV3 = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <SEO
        title="Intraverse — B2B Travel Technology Platform"
        description="Africa's B2B travel technology platform."
        noindex={true}
      />
      <NavbarV3 />
      <div className="h-16" />

      {/* Hero - bold AI/SaaS-style above the fold (logos strip already inside hero) */}
      <HeroSectionV2 />

      {/* Feature grid - Jasper-style "everything in one platform" */}
      <RevealSection variant="fade-up">
        <FeatureGridV3 />
      </RevealSection>

      {/* Slider - Jasper-style use-case carousel */}
      <RevealSection variant="fade-up">
        <SliderSectionV3 />
      </RevealSection>

      {/* Social proof - big stats on dark band */}
      <RevealSection variant="fade-up">
        <ProofSectionV3 />
      </RevealSection>

      {/* Customer testimonials */}
      <RevealSection variant="fade-up">
        <Testimonials />
      </RevealSection>

      {/* Final CTA */}
      <RevealSection variant="fade-up">
        <FinalCTAV2 />
      </RevealSection>

      <Footer />
      <WhatsAppFab />
    </div>
  );
};

export default IndexV3;
