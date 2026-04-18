import { DocsLayout, DocsSection } from "@/components/docs/DocsLayout";
import { CodeBlock, InlineCode } from "@/components/docs/CodeBlock";
import { MultiLangCodeBlock, buildHttpSamples } from "@/components/docs/MultiLangCodeBlock";
import { EndpointHeading } from "@/components/docs/MethodBadge";
import { ParamsTable } from "@/components/docs/ParamsTable";
import { ArrowRight } from "lucide-react";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "endpoints", label: "Endpoints" },
  { id: "response-format", label: "Response Format" },
  { id: "best-practices", label: "Search Best Practices" },
  { id: "flow", label: "Booking Flow" },
  { id: "price", label: "Price Guarantee" },
  { id: "errors", label: "Common Errors" },
];

export default function DocsFlights() {
  return (
    <DocsLayout
      slug="flights"
      title="Aggregated Flight Inventory, One API"
      subtitle="Search, book, ticket, modify, and cancel flights across GDS (Amadeus, Sabre, Galileo), NDC connections, consolidators, and aggregators — all through a single unified API."
      toc={toc}
    >
      <DocsSection id="overview" title="Overview">
        <p>
          The Flights API aggregates inventory from GDS, NDC, consolidators, and direct supplier connections into a single, normalised
          response format. You don't need to negotiate with each source separately or learn each schema — Intraverse abstracts the
          heterogeneity behind one consistent contract.
        </p>
        <p>
          Every offer carries a <InlineCode>source</InlineCode> field so you know where it came from, but the structure of the offer is
          identical regardless of source. That makes it easy to display, sort, filter, and book without source-specific code paths.
        </p>
      </DocsSection>

      <DocsSection id="endpoints" title="Endpoints">
        <EndpointHeading method="POST" path="/v1/flights/search" id="ep-search" />
        <p>Search aggregated flight inventory across all configured sources.</p>
        <ParamsTable
          params={[
            { name: "origin", type: "string", required: true, description: "IATA airport code (e.g. LOS)" },
            { name: "destination", type: "string", required: true, description: "IATA airport code (e.g. DXB)" },
            { name: "departure_date", type: "string", required: true, description: "ISO 8601 date (YYYY-MM-DD)" },
            { name: "passengers", type: "object", required: true, description: "{ adults, children, infants }" },
            { name: "return_date", type: "string", description: "ISO date for return leg" },
            { name: "cabin_class", type: "string", description: "economy | premium_economy | business | first" },
            { name: "max_results", type: "integer", description: "Default 50, max 200" },
            { name: "preferred_airlines", type: "string[]", description: "IATA airline codes to prioritise" },
            { name: "direct_only", type: "boolean", description: "Restrict to non-stop itineraries" },
          ]}
        />
        <MultiLangCodeBlock
          samples={buildHttpSamples({
            method: "POST",
            url: "https://sandbox.api.intraverse.com/v1/flights/search",
            body: {
              origin: "LOS",
              destination: "DXB",
              departure_date: "2026-06-15",
              passengers: { adults: 1 },
              cabin_class: "economy",
            },
          })}
        />
        <CodeBlock
          label="JSON"
          code={`{
  "search_id": "srch_abc123",
  "currency": "NGN",
  "results_count": 12,
  "results": [ /* offer objects */ ]
}`}
        />

        <EndpointHeading method="GET" path="/v1/flights/offers/{offer_id}" id="ep-offer" />
        <p>Fetch full details for a single offer, including baggage, fare rules summary, and refundability.</p>

        <EndpointHeading method="POST" path="/v1/bookings" id="ep-book" />
        <p>Create a new booking from a selected offer.</p>
        <ParamsTable
          params={[
            { name: "offer_id", type: "string", required: true, description: "ID of the offer being booked" },
            { name: "passengers", type: "object[]", required: true, description: "Passenger details (first name, last name, DOB, passport)" },
            { name: "contact", type: "object", required: true, description: "{ email, phone } for the booking" },
          ]}
        />

        <EndpointHeading method="POST" path="/v1/bookings/{booking_id}/issue" id="ep-issue" />
        <p>Issue the ticket for a confirmed booking. Required before the airline considers the seat ticketed.</p>

        <EndpointHeading method="GET" path="/v1/bookings/{booking_id}" id="ep-get" />
        <p>Retrieve booking status, passenger info, ticket numbers, and payment state.</p>

        <EndpointHeading method="POST" path="/v1/bookings/{booking_id}/modify" id="ep-modify" />
        <p>Modify a booking — date change, name correction, or itinerary update — subject to fare rules.</p>

        <EndpointHeading method="POST" path="/v1/bookings/{booking_id}/cancel" id="ep-cancel" />
        <p>Cancel the booking and trigger any applicable refund flow.</p>

        <EndpointHeading method="GET" path="/v1/flights/offers/{offer_id}/rules" id="ep-rules" />
        <p>Get full fare rules: refundability, change fees, baggage, mileage accrual.</p>
      </DocsSection>

      <DocsSection id="response-format" title="Response Format">
        <p>Every offer returned from any source uses this shape:</p>
        <CodeBlock
          label="JSON"
          code={`{
  "offer_id": "offer_xyz789",
  "source": "amadeus",
  "airline": "Emirates",
  "flight_number": "EK786",
  "total_price": 485000,
  "currency": "NGN",
  "departure": "2026-06-15T23:55:00+01:00",
  "arrival": "2026-06-16T09:45:00+04:00",
  "duration_minutes": 470,
  "stops": 0,
  "cabin_class": "economy",
  "refundable": true,
  "baggage": { "checked": "30kg", "cabin": "7kg" },
  "expires_at": "2026-06-15T00:30:00Z"
}`}
        />
      </DocsSection>

      <DocsSection id="best-practices" title="Search Best Practices">
        <ul className="list-disc list-inside space-y-2">
          <li>Always pass <InlineCode>cabin_class</InlineCode> — defaulting to economy when the user wants business inflates results.</li>
          <li>Use <InlineCode>direct_only</InlineCode> for short-haul where most travellers prefer non-stops.</li>
          <li>Cap <InlineCode>max_results</InlineCode> to what your UI can display. Larger values increase latency.</li>
          <li>Cache search results by <InlineCode>search_id</InlineCode> for up to 5 minutes — don't re-search on every page render.</li>
          <li>For round trips, send <InlineCode>return_date</InlineCode> in the same call rather than two one-way searches.</li>
        </ul>
      </DocsSection>

      <DocsSection id="flow" title="Booking Flow">
        <div className="not-prose flex items-center flex-wrap gap-3 my-6 p-5 rounded-lg bg-[#F0F5FC] border border-border">
          {["Search", "Select Offer", "Get Details", "Create Booking", "Issue Ticket"].map((s, i, arr) => (
            <div key={s} className="flex items-center gap-3">
              <div className="px-3 py-2 rounded-md bg-white border border-border text-sm font-medium text-foreground">
                {s}
              </div>
              {i < arr.length - 1 && <ArrowRight className="w-4 h-4 text-muted-foreground" />}
            </div>
          ))}
        </div>
      </DocsSection>

      <DocsSection id="price" title="Price Guarantee">
        <p>
          Search results return <strong>indicative</strong> pricing. Actual price is confirmed at booking time. If the price changes between
          search and book, the booking response includes <InlineCode>price_changed: true</InlineCode> and the new <InlineCode>total_price</InlineCode>.
          Your integration should always reconfirm the price with the user before charging.
        </p>
      </DocsSection>

      <DocsSection id="errors" title="Common Errors">
        <ul className="space-y-3">
          <li><InlineCode>OFFER_EXPIRED</InlineCode> — Offer is no longer bookable. Re-run search.</li>
          <li><InlineCode>INSUFFICIENT_FUNDS</InlineCode> — Wallet balance can't cover booking. Top up via <InlineCode>/v1/wallet/fund</InlineCode>.</li>
          <li><InlineCode>PASSENGER_DATA_INVALID</InlineCode> — Passport, name, or DOB validation failed. Check the <InlineCode>errors</InlineCode> array.</li>
          <li><InlineCode>TICKETING_FAILED</InlineCode> — Airline rejected ticketing. Often transient — retry once after 30 seconds.</li>
          <li><InlineCode>FARE_RULES_VIOLATED</InlineCode> — Modification or cancellation conflicts with the fare rules.</li>
        </ul>
      </DocsSection>
    </DocsLayout>
  );
}
