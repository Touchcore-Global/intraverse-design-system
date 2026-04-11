import { useState, useMemo, useEffect, useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Search, MessageCircle, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";


/* ────────────────────────────── FAQ DATA ────────────────────────────── */

type FAQCategory = {
  id: string;
  label: string;
  questions: { q: string; a: string }[];
};

const categories: FAQCategory[] = [
  {
    id: "general",
    label: "General",
    questions: [
      {
        q: "What is Intraverse?",
        a: "Intraverse is a B2B travel technology company headquartered in Lagos, Nigeria, with presence in the UK, USA and UAE. We build the tools, platforms, and infrastructure that travel agencies, corporate travel managers, and independent travel entrepreneurs use to search, book, and sell flights, hotels, tours, and packages from suppliers around the world. We don't sell travel directly to consumers — we power the businesses that do.",
      },
      {
        q: "Is Intraverse a travel agency?",
        a: "No. Intraverse is a technology company, not a travel agency. We don't sell flights, hotels, or tours to travellers. Instead, we build the platforms and tools that travel agencies and travel professionals use to run their businesses. Think of us as the engine behind the agencies you book with.",
      },
      {
        q: "Is Intraverse IATA-accredited?",
        a: "Yes. Intraverse is fully IATA-accredited and operates under its own IATA license. This means every ticket issued through our platform is backed by a legitimate, verified accreditation — giving our agents the credibility and trust they need when dealing with airlines, suppliers, and customers.",
      },
      {
        q: "Where is Intraverse based?",
        a: "We're headquartered in Lagos, Nigeria. With presence in the UK, USA and UAE. Our entire platform is designed for the realities of the African travel market — from payment infrastructure to supplier relationships.",
      },
      {
        q: "How long has Intraverse been operating?",
        a: "Intraverse has been building travel technology and serving the African travel market for several years. We've grown from a small team with a single product to a full-suite platform powering 400+ travel businesses.",
      },
      {
        q: "What products does Intraverse offer?",
        a: "Intraverse offers a suite of products designed for different segments of the travel industry:\n\n• Agent Selling Platform — aggregated flight, hotel, and tour inventory for travel agencies\n• Travx — branded booking websites for travel businesses\n• CoopX — corporate travel management for companies\n• Independents Programme — a platform for aspiring travel entrepreneurs\n• Odiopay — Buy Now Pay Later and Fare Lock for travel\n• Supplier Engine — multi-OID fare aggregation (coming soon)",
      },
      {
        q: "Who can use Intraverse?",
        a: "Intraverse is built for travel professionals — whether you're an established IATA-accredited agency, a growing non-IATA agency, a corporate travel manager, or someone looking to start a travel business from scratch. If you sell travel or want to sell travel, we have a product for you.",
      },
      {
        q: "Can I try before committing?",
        a: "Yes. We offer free demos where you can see the full platform in action. Our team will walk you through every feature, answer your questions, and help you understand exactly how Intraverse fits into your business. There's no pressure and no obligation — just book a demo and see for yourself.",
      },
    ],
  },
  {
    id: "agent-platform",
    label: "Agent Platform",
    questions: [
      {
        q: "What can I sell on the Agent Platform?",
        a: "You can search, compare, and book flights, hotels, tours, and packages — all from a single dashboard. Our platform aggregates inventory from multiple GDS systems, NDC connections, consolidators, and global hotel and tour suppliers, giving you access to thousands of options across hundreds of airlines and suppliers.",
      },
      {
        q: "What flight sources does Intraverse connect to?",
        a: "Intraverse connects to three major GDS systems (Amadeus, Sabre, and Galileo), multiple NDC airline connections, consolidator fares, and aggregator feeds. This means you see more fare options, more routing combinations, and more competitive prices than you would on any single GDS terminal.",
      },
      {
        q: "What about hotel and tour suppliers?",
        a: "We integrate with leading global hotel suppliers and tour operators, giving you access to hundreds of thousands of properties and experiences worldwide. You can search, compare, and book hotels and tours directly from the platform — no need to log into separate supplier portals.",
      },
      {
        q: "How is this different from a GDS terminal?",
        a: "A traditional GDS terminal shows you fares from one source. Intraverse aggregates fares from multiple GDS systems, NDC connections, and consolidators — all in one search. You see more options, compare prices instantly, and book in fewer clicks. Plus, our interface is modern and intuitive — no cryptic GDS commands required.",
      },
      {
        q: "Can I issue tickets directly from the platform?",
        a: "Yes. You can search, book, and issue tickets directly from the Intraverse platform. No need to switch between systems or log into separate GDS terminals. Everything happens in one place, and every ticket is issued under Intraverse's IATA accreditation.",
      },
      {
        q: "Can I make date changes and modifications?",
        a: "Yes. The platform supports date changes, name corrections (where airline policy allows), and other post-ticketing modifications. You can manage changes directly from your booking dashboard without needing to contact a separate support team.",
      },
      {
        q: "Does the platform work on mobile?",
        a: "Yes. The Intraverse platform is fully responsive and works on smartphones, tablets, and desktops. You can search fares, manage bookings, and issue tickets from any device with an internet connection.",
      },
      {
        q: "How long does setup take?",
        a: "Most agents are fully set up and ready to sell within 48 hours. Our onboarding team handles account creation, wallet setup, training, and your first guided booking. We don't leave you to figure it out alone.",
      },
    ],
  },
  {
    id: "travx",
    label: "Travx",
    questions: [
      {
        q: "What is Travx?",
        a: "Travx is a subscription-based product that gives travel agencies their own branded booking website. Your customers can search flights, hotels, and tours, make bookings, and pay online — all on a website that carries your brand, your logo, and your domain. It's like having your own online travel agency without building anything from scratch.",
      },
      {
        q: "How much does Travx cost?",
        a: "Travx is available for $50 per month. This includes your branded website, hosting, maintenance, booking engine integration, payment processing, and ongoing updates. There are no setup fees and no hidden charges.",
      },
      {
        q: "Will the website show my brand or Intraverse?",
        a: "Your brand. Travx websites are fully white-labelled — your logo, your colours, your domain name. Your customers will see your brand throughout the booking experience. Intraverse operates entirely in the background.",
      },
      {
        q: "Can customers book and pay directly on my website?",
        a: "Yes. Travx websites come with a full booking engine and integrated payment processing. Your customers can search for flights, hotels, and tours, select their options, and pay securely — all without leaving your website.",
      },
      {
        q: "Do I need technical skills to use Travx?",
        a: "No. Travx is a fully managed product. We handle the design, development, hosting, and maintenance. You just provide your brand assets (logo, colours, preferences) and we build everything for you. If you want to make changes, our team handles them for you.",
      },
      {
        q: "How quickly can my website go live?",
        a: "Most Travx websites are live within 5-7 business days after onboarding. This includes brand customisation, booking engine integration, payment setup, and testing. We handle everything from start to finish.",
      },
      {
        q: "Is the website mobile-friendly?",
        a: "Yes. Every Travx website is fully responsive and optimised for mobile devices. Your customers can browse, search, and book from any smartphone or tablet — which is critical in a market where most web traffic comes from mobile devices.",
      },
      {
        q: "Can I cancel my Travx subscription?",
        a: "Yes. Travx is a monthly subscription with no long-term contracts. You can cancel at any time with 30 days' notice. We believe in earning your business every month, not locking you into contracts.",
      },
    ],
  },
  {
    id: "coopx",
    label: "CoopX",
    questions: [
      {
        q: "What is CoopX?",
        a: "CoopX is Intraverse's corporate travel management platform. It gives companies a single dashboard to manage all business travel — flights, hotels, and ground transport — with built-in approval workflows, policy enforcement, real-time reporting, and cost controls. It replaces the chaos of email chains, WhatsApp threads, and manual reconciliation.",
      },
      {
        q: "Is CoopX only for large companies?",
        a: "No. CoopX is designed for companies of all sizes — from startups with 10 employees to enterprises with thousands. Whether you have 5 travellers or 500, CoopX gives you the same visibility, control, and efficiency. We offer flexible plans that scale with your needs.",
      },
      {
        q: "Can employees self-book their own travel?",
        a: "Yes. CoopX supports self-booking within company-defined policies. Employees can search and select their own flights and hotels, but every booking goes through your approval workflow before being confirmed. This gives employees flexibility while keeping finance and management in control.",
      },
      {
        q: "What travel products are available through CoopX?",
        a: "CoopX provides access to the same aggregated inventory as the Agent Selling Platform — flights from multiple GDS systems and NDC connections, hotels from global suppliers, and ground transport options. Your employees get competitive options, and your company gets centralised billing and reporting.",
      },
      {
        q: "How does the approval workflow work?",
        a: "You define the rules — who can book, what they can book, spending limits, and who approves. When an employee makes a booking request, it's routed to the appropriate approver (manager, finance, HR) based on your policy. Approvers can approve or reject from their dashboard or via email notification.",
      },
      {
        q: "How does billing work?",
        a: "CoopX offers centralised billing with detailed reporting. All bookings are charged to your company wallet, and you get itemised reports broken down by department, employee, destination, and trip purpose. No more chasing receipts or reconciling expense reports.",
      },
      {
        q: "How long does it take to set up CoopX?",
        a: "Most companies are fully onboarded within 1-2 weeks. This includes policy configuration, employee account setup, approval workflow design, wallet funding, and training for administrators and travellers.",
      },
      {
        q: "How is CoopX priced?",
        a: "CoopX pricing is tailored to your company's size and travel volume. We offer flexible plans with transparent pricing — no hidden fees, no per-booking surcharges. Contact our team for a customised quote based on your needs.",
      },
    ],
  },
  {
    id: "independents",
    label: "Independents",
    questions: [
      {
        q: "What is the Independents Programme?",
        a: "The Independents Programme is Intraverse's platform for aspiring travel entrepreneurs. It gives you access to the same technology, inventory, and IATA accreditation that established agencies use — without needing your own IATA license, office, or prior experience. You sell travel, earn commissions, and build your own client base using professional tools.",
      },
      {
        q: "Is this a scam or MLM scheme?",
        a: "No. Absolutely not. Let us be direct: The Independents Programme is not a pyramid scheme, not multi-level marketing, and not a get-rich-quick programme. Here's what makes us different:\n\n• You earn money by selling real travel products (flights, hotels, tours) to real customers — not by recruiting other people.\n• There is no recruitment requirement. Your income comes from bookings, not from signing others up.\n• You are selling legitimate, IATA-accredited travel products through a licensed platform.\n• Every booking generates a real ticket, a real itinerary, and a real commission.\n• We are a registered, IATA-accredited technology company with a physical office in Lagos.\n\nIf anyone tells you they can guarantee you millions overnight, that's a scam. We don't make those promises. What we do offer is a legitimate platform, real tools, and the opportunity to build a travel business with effort and dedication.",
      },
      {
        q: "Do I need travel experience to join?",
        a: "No. The programme is designed for people with zero travel industry experience. We provide comprehensive training, onboarding support, and ongoing mentorship to help you learn the business from scratch. Many of our most successful independents started with no prior experience.",
      },
      {
        q: "What can I sell as an Independent?",
        a: "You can sell flights, hotels, tours, and travel packages — the same inventory available to established travel agencies on our platform. You have access to multiple GDS systems, NDC connections, and global hotel and tour suppliers.",
      },
      {
        q: "How much can I earn?",
        a: "Your earnings depend on your effort, your client base, and the types of bookings you make. Commissions vary by product type and supplier. Some independents earn a modest side income; others build it into a full-time business. We don't guarantee specific income levels — your results depend on your work.",
      },
      {
        q: "How do I get paid?",
        a: "Commissions are tracked automatically in your dashboard and paid directly to your bank account on a regular settlement cycle. You can see your earnings, pending commissions, and payment history in real time.",
      },
      {
        q: "Is there a cost to join?",
        a: "There is a modest onboarding fee that covers your account setup, training materials, and platform access. This is a one-time investment — not a recurring charge. We keep the barrier to entry low because we want to make this accessible to as many aspiring entrepreneurs as possible.",
      },
      {
        q: "Can I do this as a side hustle?",
        a: "Yes. Many of our independents run their travel business alongside a full-time job, studies, or other commitments. The platform is available 24/7, and you can work at your own pace. There are no minimum booking requirements or mandatory hours.",
      },
      {
        q: "Who is the Independents Programme for?",
        a: "It's for anyone who wants to earn income by selling travel — students, professionals looking for a side hustle, stay-at-home parents, retirees, or anyone with an entrepreneurial mindset. If you're willing to learn, put in the work, and build relationships with customers, this programme is for you.",
      },
      {
        q: "How is this different from other travel business programmes?",
        a: "Most programmes give you a link and leave you to figure it out. Intraverse gives you:\n\n• Access to professional-grade technology (not a basic affiliate portal)\n• Real IATA-accredited ticket issuance\n• Aggregated inventory from multiple suppliers\n• Training and onboarding support\n• A dashboard to manage bookings, customers, and commissions\n• Ongoing platform updates and new features\n\nYou're not just getting a referral link — you're getting a real business platform.",
      },
    ],
  },
  {
    id: "odiopay",
    label: "Odiopay",
    questions: [
      {
        q: "What is Odiopay?",
        a: "Odiopay is Intraverse's payment flexibility product that lets travellers spread the cost of their trips. It includes two features: Fare Lock (hold a fare at today's price while the customer arranges payment) and Pay Later (split the cost into instalments). It helps agents close more deals by removing the 'I can't afford it right now' objection.",
      },
      {
        q: "Is Odiopay part of Intraverse?",
        a: "Yes. Odiopay is a product built and operated by Intraverse. It's fully integrated into the Agent Selling Platform, so agents can offer Fare Lock and Pay Later options directly from their booking workflow — no separate system or third-party integration required.",
      },
      {
        q: "How does Fare Lock work?",
        a: "Fare Lock allows an agent to hold a specific fare at today's price for a set period (usually 24-72 hours, depending on the airline and route). This gives the customer time to confirm their plans and arrange payment without risking a price increase. The agent pays a small fee to lock the fare.",
      },
      {
        q: "How does Pay Later work?",
        a: "Pay Later allows customers to split their booking cost into multiple instalments over a defined period. The agent processes the booking, and the customer pays in scheduled instalments. Eligibility and terms depend on the booking value, route, and customer profile.",
      },
      {
        q: "Do agents earn commission on BNPL bookings?",
        a: "Yes. Agents earn their full commission on every booking, regardless of whether the customer pays upfront or uses Pay Later. Odiopay handles the instalment collection — the agent gets paid as normal.",
      },
      {
        q: "How do I activate Odiopay?",
        a: "Odiopay is available to all agents on the Intraverse platform. You can enable it from your dashboard settings. Our team will walk you through the setup during onboarding or at any time via WhatsApp support.",
      },
      {
        q: "Is there any risk to the agent?",
        a: "No. Intraverse and Odiopay handle all payment collection and credit risk. The agent's commission and booking are protected regardless of the customer's payment schedule. You sell, we handle the rest.",
      },
    ],
  },
  {
    id: "pricing",
    label: "Pricing",
    questions: [
      {
        q: "How is the Agent Platform priced?",
        a: "The Agent Selling Platform uses a transaction-based model. There are no monthly subscription fees for the core platform. You fund your wallet and pay per booking. Commission structures vary by product type and supplier. Contact our team for detailed pricing.",
      },
      {
        q: "How much does Travx cost?",
        a: "Travx is $50 per month. This includes your branded website, hosting, booking engine, payment integration, and ongoing maintenance. There are no setup fees or hidden charges.",
      },
      {
        q: "How is CoopX priced?",
        a: "CoopX pricing is customised based on your company's size, travel volume, and feature requirements. Contact our sales team for a tailored quote.",
      },
      {
        q: "How much does the Independents Programme cost?",
        a: "There is a one-time onboarding fee that covers setup, training, and platform access. Contact our team for current pricing. There are no recurring subscription fees — you earn commissions on every booking you make.",
      },
      {
        q: "How does the wallet system work?",
        a: "The Intraverse wallet is a pre-funded account used to process bookings. You deposit funds into your wallet via bank transfer, and the cost of each booking is deducted automatically. You can top up your wallet at any time and track your balance in real time from your dashboard.",
      },
      {
        q: "Are there hidden fees?",
        a: "No. We believe in transparent pricing. All fees, commissions, and charges are clearly communicated upfront. You'll never see surprise charges on your account. If you have questions about any charge, our support team is available 24/7.",
      },
      {
        q: "How do I fund my account?",
        a: "You can fund your Intraverse wallet via bank transfer. Funds are credited to your account promptly, and you can start booking immediately. We're also working on additional funding methods to make the process even more convenient.",
      },
      {
        q: "How do refunds work?",
        a: "Refund policies depend on the airline, hotel, or supplier. When a refund is approved by the supplier, the amount is credited back to your Intraverse wallet. Our support team handles refund processing and keeps you updated throughout the process.",
      },
    ],
  },
  {
    id: "security",
    label: "Security",
    questions: [
      {
        q: "Is my money safe with Intraverse?",
        a: "Yes. Your wallet funds are held securely and used exclusively for processing your bookings. We operate under strict financial controls, and every transaction is logged, tracked, and auditable. We are an IATA-accredited company, which means we meet international standards for financial responsibility.",
      },
      {
        q: "How does Intraverse protect my data?",
        a: "We comply with the Nigeria Data Protection Regulation (NDPR) and follow PCI DSS standards for payment data handling. All data is encrypted in transit and at rest. We never share your personal or business data with third parties without your consent.",
      },
      {
        q: "What happens if the platform goes down?",
        a: "We maintain high uptime standards with redundant infrastructure and monitoring. In the rare event of downtime, our technical team is alerted immediately and works to restore service as quickly as possible. We communicate status updates through our support channels.",
      },
      {
        q: "How do I know Intraverse is a legitimate company?",
        a: "Intraverse is a registered Nigerian company, IATA-accredited, and operates from a physical office in Lagos. We work with major global travel technology providers including Amadeus, Sabre, and Galileo. You can visit our office, meet our team, and verify our credentials.",
      },
      {
        q: "Can I visit your office?",
        a: "Yes. Our Lagos office is open to visitors by appointment. We welcome agents, partners, and prospective customers to visit, meet the team, and see the platform in action. Contact us to schedule a visit.",
      },
      {
        q: "What is your settlement track record?",
        a: "We have a consistent, reliable settlement record with airlines and suppliers. Our IATA accreditation requires us to meet strict financial obligations, and we have never defaulted on a settlement. Your bookings are backed by a company that takes its financial commitments seriously.",
      },
    ],
  },
  {
    id: "support",
    label: "Support",
    questions: [
      {
        q: "How can I contact support?",
        a: "You can reach our support team via WhatsApp (fastest), phone, or email. WhatsApp is our primary support channel — most queries are responded to within minutes during business hours.",
      },
      {
        q: "What are your support hours?",
        a: "Our support team is available 24/7 for urgent booking issues. General enquiries and account support are handled during business hours (Monday-Saturday), with WhatsApp responses typically within minutes.",
      },
      {
        q: "What does the onboarding process look like?",
        a: "Onboarding includes account setup, wallet configuration, platform training, and your first guided booking. Our onboarding team walks you through everything step by step — most agents are fully set up and confident within 48 hours.",
      },
      {
        q: "Is there training available?",
        a: "Yes. We provide comprehensive training during onboarding and ongoing training sessions for new features and products. Training is delivered via video calls, screen sharing, and our help centre documentation.",
      },
      {
        q: "Do you have a help centre?",
        a: "Yes. Our help centre includes guides, tutorials, FAQs, and video walkthroughs for every feature on the platform. It's available 24/7 and regularly updated with new content.",
      },
      {
        q: "Can I request new features?",
        a: "Absolutely. We actively listen to feedback from our agents and partners. You can submit feature requests through WhatsApp, email, or directly through the platform. Many of our most popular features were built based on agent feedback.",
      },
      {
        q: "Can I migrate from another platform?",
        a: "Yes. Our onboarding team can help you migrate your customer data, booking history, and workflows from your existing platform or manual processes. We make the transition as smooth as possible.",
      },
    ],
  },
  {
    id: "technical",
    label: "Technical",
    questions: [
      {
        q: "What browsers are supported?",
        a: "Intraverse works on all modern browsers — Chrome, Firefox, Safari, and Edge. We recommend using the latest version of Chrome for the best experience.",
      },
      {
        q: "Is there a mobile app?",
        a: "The Intraverse platform is fully responsive and works on any mobile browser. We're also developing dedicated mobile apps for iOS and Android — stay tuned for updates.",
      },
      {
        q: "Do you offer API access?",
        a: "Yes. We offer API access for partners and agencies that need to integrate Intraverse inventory or booking capabilities into their own systems. API access is available on request — contact our technical team for documentation and onboarding.",
      },
      {
        q: "Can I integrate Intraverse with my existing tools?",
        a: "We offer integrations with popular payment gateways, CRM tools, and accounting systems. If you have a specific integration need, our technical team can discuss custom integration options.",
      },
      {
        q: "What internet speed do I need?",
        a: "Intraverse is designed to work on standard Nigerian internet connections. A stable connection of 1 Mbps or higher is sufficient for smooth operation. The platform is optimised for performance, even on slower connections.",
      },
      {
        q: "Can multiple staff use the same account?",
        a: "Yes. The Agent Selling Platform supports multi-user access. You can create individual accounts for each team member, with role-based permissions to control who can search, book, issue tickets, and manage finances.",
      },
      {
        q: "Can I export my data?",
        a: "Yes. You can export booking data, customer records, financial reports, and transaction history in standard formats (CSV, PDF). Your data belongs to you, and we make it easy to access and export at any time.",
      },
    ],
  },
];

/* ────────────────────────────── JSON-LD ────────────────────────────── */

function buildFaqSchema() {
  const allQA = categories.flatMap((c) =>
    c.questions.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    }))
  );
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allQA,
  };
}

/* ────────────────────────────── COMPONENT ────────────────────────────── */

export default function FAQ() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("general");
  const tabBarRef = useRef<HTMLDivElement>(null);

  // Scroll active tab into view
  useEffect(() => {
    const el = tabBarRef.current?.querySelector(`[data-tab="${activeTab}"]`);
    if (el) el.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
  }, [activeTab]);

  const filtered = useMemo(() => {
    if (!search.trim()) return null;
    const q = search.toLowerCase();
    return categories
      .map((c) => ({
        ...c,
        questions: c.questions.filter(
          (f) => f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q)
        ),
      }))
      .filter((c) => c.questions.length > 0);
  }, [search]);

  const visibleCategories = filtered ?? categories.filter((c) => c.id === activeTab);

  return (
    <>
      {/* JSON-LD FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqSchema()) }}
      />

      <Navbar />
      <main className="pt-16">
        {/* ─── HERO ─── */}
        <section className="bg-accent py-16 md:py-24">
          <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
            <h1 className="text-section mb-4">
              Everything You Need to Know About Intraverse
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Can't find what you're looking for? Chat with us on WhatsApp and we'll get you an
              answer within hours.
            </p>
            <div className="relative max-w-lg mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search questions..."
                className="pl-10 h-12 text-base rounded-none"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </section>

        {/* ─── FILTER TABS ─── */}
        {!filtered && (
          <div className="sticky top-16 z-30 bg-background border-b">
            <div
              ref={tabBarRef}
              className="container mx-auto px-4 lg:px-8 flex gap-1 overflow-x-auto scrollbar-hide py-2"
            >
              {categories.map((c) => (
                <button
                  key={c.id}
                  data-tab={c.id}
                  onClick={() => setActiveTab(c.id)}
                  className={`whitespace-nowrap px-4 py-2 text-sm font-medium rounded-none transition-colors ${
                    activeTab === c.id
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ─── FAQ SECTIONS ─── */}
        <div className="container mx-auto px-4 lg:px-8 py-12 md:py-20 max-w-4xl">
          {filtered && filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-16 text-lg">
              No questions match your search. Try different keywords or{" "}
              <button
                className="text-primary underline"
                onClick={() => setSearch("")}
              >
                clear the search
              </button>
              .
            </p>
          )}

          {visibleCategories.map((category) => (
            <div key={category.id} className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold mb-6 pl-4 border-l-4 border-primary">
                {category.label}
              </h2>
              <Accordion type="single" collapsible className="space-y-2">
                {category.questions.map((faq, idx) => (
                  <AccordionItem
                    key={idx}
                    value={`${category.id}-${idx}`}
                    className="border rounded-none bg-card px-4"
                  >
                    <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground whitespace-pre-line leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        {/* ─── FINAL CTA ─── */}
        <section className="bg-secondary text-secondary-foreground py-16 md:py-24">
          <div className="container mx-auto px-4 lg:px-8 text-center max-w-2xl">
            <h2 className="text-section mb-2 text-secondary-foreground">Still Have Questions?</h2>
            <p className="text-lg text-secondary-foreground/70 mb-8">
              Didn't find your answer? We're one message away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Button variant="hero" size="xl" className="rounded-none">
                Book a Free Demo
              </Button>
              <Button
                variant="whatsapp"
                size="xl"
                className="rounded-none"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-secondary-foreground/60">
              {[
                { label: "Agent Platform", href: "/agent-platform" },
                { label: "Travx", href: "/travx" },
                { label: "CoopX", href: "/coopx" },
                { label: "Independents", href: "/independents" },
                { label: "Case Studies", href: "/proof" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-1 hover:text-secondary-foreground transition-colors"
                >
                  {link.label}
                  <ArrowRight className="h-3 w-3" />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
