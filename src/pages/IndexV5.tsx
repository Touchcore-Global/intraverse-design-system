import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { HeroSectionV2 } from "@/components/v2/HeroSectionV2";
import { HomeTrustBar } from "@/components/HomeTrustBar";
import { ProductShowcaseV2 } from "@/components/v2/ProductShowcaseV2";
import { WhoWeServeSectionV2 } from "@/components/v2/WhoWeServeSectionV2";
import { ToolsSectionV2 } from "@/components/v2/ToolsSectionV2";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { RevealSection } from "@/components/RevealSection";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { DEMO_URL } from "@/lib/constants";

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

      {/* 1. Hero */}
      <HeroSectionV2 />

      {/* 2. Trust Bar */}
      <RevealSection variant="fade"><HomeTrustBar /></RevealSection>

      {/* 3. Product Showcase */}
      <RevealSection variant="scale"><ProductShowcaseV2 /></RevealSection>

      {/* 4. Who We Serve */}
      <RevealSection variant="fade-up"><WhoWeServeSectionV2 /></RevealSection>

      {/* 5. Tools */}
      <RevealSection variant="fade-up"><ToolsSectionV2 /></RevealSection>

      {/* 6. Testimonials */}
      <RevealSection variant="fade-up"><Testimonials /></RevealSection>

      {/* 7. BOFU */}
      <RevealSection variant="fade-up">
        <section className="py-20 md:py-28 bg-foreground text-background">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-3xl sm:text-4xl md:text-[64px] md:leading-[1.1] font-[660] tracking-[-1.5px] mb-6 text-white">
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
      </RevealSection>

      <Footer />
      <WhatsAppFab />
    </div>
  );
};

export default IndexV5;
