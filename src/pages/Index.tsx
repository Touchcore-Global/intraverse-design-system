import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Spacer for fixed nav */}
      <div className="h-16" />

      {/* Placeholder hero section to demonstrate the design system */}
      <section className="container mx-auto px-4 py-20 lg:py-32 text-center">
        <h1 className="text-hero max-w-4xl mx-auto">
          Flights. Hotels. Tours. Packages.
        </h1>
        <p className="mt-6 text-[48px] max-w-2xl mx-auto">
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
    </div>
  );
};

export default Index;
