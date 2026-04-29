import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactSidebar } from "@/components/contact/ContactSidebar";
import { SEO } from "@/components/SEO";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contact Intraverse — Get In Touch"
        description="Reach the Intraverse team. WhatsApp, email, or visit us in Lagos. Sales enquiries, support requests, and partnership discussions."
        canonical="https://intraverse.africa/contact"
      />
      <Navbar />
      <ContactHero />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            <ContactSidebar />
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFab />
    </div>
  );
};

export default Contact;
