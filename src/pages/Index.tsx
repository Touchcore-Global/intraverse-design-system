import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Spacer for fixed nav */}
      <div className="h-16" />

      {/* Hero section */}
      <section className="container mx-auto px-4 py-20 lg:py-32 text-center">
        <h1 className="text-[96px] font-[660] leading-[100px] tracking-[-2.88px] max-w-4xl mx-auto" style={{ color: 'rgb(23, 19, 33)' }}>
          Flights. Hotels. Tours. Packages.
        </h1>
        <p className="mt-6 mb-6 text-[32px] font-normal leading-[36px] tracking-[-0.64px] max-w-2xl mx-auto" style={{ color: 'rgb(116, 113, 122)' }}>
          Sell It All From One Platform.
        </p>
      </section>

      {/* Alternating section demo */}
      <section className="section-alt py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-section">Design system ready</h2>
          <p className="mt-4 max-w-xl mx-auto">
            All brand colors, typography, and component variants are configured. Start building pages.
          </p>
        </div>
      </section>

      <Footer />
      <WhatsAppFab />
    </div>
  );
};

export default Index;
