import { Card, CardContent } from "@/components/ui/card";

const cards = [
  {
    headline: "Access Global Travel Inventory. Sell Without Limits.",
    subheading: "Unlock flights, hotels, and travel services from multiple suppliers—all in one platform.",
    content: "Stop juggling multiple supplier contracts and limited inventory. Intraverse connects you to global travel content through GDS integrations and trusted partners—giving you access to real-time availability, competitive pricing, and both published and private fares, all in one place.",
  },
  {
    headline: "Issue Tickets Anytime. Never Miss a Sale.",
    subheading: "Your business doesn't sleep—your ticketing shouldn't either.",
    content: "Intraverse enables instant ticket issuance around the clock, removing dependency on supplier availability. Automated workflows ensure faster confirmations, helping you secure bookings immediately and deliver a seamless experience to your customers.",
  },
  {
    headline: "Sell More Travel. Worry Less About Cash.",
    subheading: "Flexible payment infrastructure designed for modern travel businesses.",
    content: "With wallet-based transactions and seamless payment flows, Intraverse reduces capital constraints and speeds up booking turnaround. Built to support flexible and split payments, it empowers you to grow your business without being limited by cash flow.",
  },
  {
    headline: "Automate Your Travel Business. Scale Without Stress.",
    subheading: "Eliminate manual processes and run a smarter operation.",
    content: "Intraverse automates core travel operations—from ticketing to booking management—reducing errors and manual workload. This allows you to operate faster, scale efficiently, and focus more on growth than administration.",
  },
  {
    headline: "Stay in Control—Even After the Ticket is Issued.",
    subheading: "Manage changes, refunds, and more—without delays.",
    content: "Manage post-ticketing processes with ease, including reissues, refunds, name corrections, and ancillary services. Intraverse gives you the tools to respond quickly to customer needs while maintaining full control over every booking.",
  },
  {
    headline: "Start a Travel Business. No Barriers.",
    subheading: "Whether you're an agent or just getting started, Intraverse gives you everything you need.",
    content: "Intraverse removes traditional barriers to entry by providing ready-to-use infrastructure, access to global inventory, and white-label tools. Whether you're an experienced agent or a new entrant, you can start, run, and scale a travel business without needing IATA accreditation or prior experience.",
  },
];

export const ProblemStatement = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 pl-[100px]">
        <h2 className="text-left mb-12">
          Built to Meet Industry's Demands
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <Card key={index} className="border border-border bg-card shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {card.headline}
                </h3>
                <p className="text-sm font-medium text-primary mb-3">
                  {card.subheading}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {card.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
