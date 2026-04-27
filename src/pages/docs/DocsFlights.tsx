import { DocsLayout, DocsSection } from "@/components/docs/DocsLayout";
import { DocsPostmanLink } from "@/components/docs/DocsPostmanLink";
import { CodeBlock, InlineCode } from "@/components/docs/CodeBlock";
import { MultiLangCodeBlock, buildHttpSamples } from "@/components/docs/MultiLangCodeBlock";
import { EndpointHeading } from "@/components/docs/MethodBadge";
import { ParamsTable } from "@/components/docs/ParamsTable";
import { Callout } from "@/components/docs/Callout";
import { ArrowRight } from "lucide-react";

const SANDBOX = "https://dev.intraversewebservices.com/api";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "search", label: "Search" },
  { id: "pricing", label: "Pricing & Fares" },
  { id: "lookups", label: "City & Airport Lookups" },
  { id: "booking", label: "Booking" },
  { id: "post-booking", label: "Post-Booking" },
  { id: "import-rebook", label: "Import & Rebook" },
  { id: "manage", label: "Manage Booking" },
  { id: "agent-flex", label: "Agent Markup" },
  { id: "share", label: "Share & Itinerary" },
  { id: "flow", label: "Booking Flow" },
  { id: "errors", label: "Errors" },
];

export default function DocsFlights() {
  return (
    <DocsLayout
      slug="flights"
      title="Aggregated Flight Inventory, One API"
      subtitle="Search, book, ticket, modify, and cancel flights across GDS (Amadeus, Sabre, Galileo), NDC connections, consolidators, and aggregators - all through a single unified API."
      toc={toc}
    >
      <DocsSection id="overview" title="Overview">
        <p>
          The Flights API aggregates inventory from GDS, NDC, consolidators,
          and direct supplier connections into a single, normalised response
          format. You don't need to negotiate with each source separately or
          learn each schema - Intraverse abstracts the heterogeneity behind
          one consistent contract.
        </p>
        <p>
          All endpoints below are relative to the sandbox base URL{" "}
          <InlineCode>{SANDBOX}</InlineCode>.
        </p>
      </DocsSection>

      <DocsSection id="search" title="Search">
        <EndpointHeading method="POST" path="/product/v2/flight/search" id="ep-search-v2" />
        <p>
          The recommended search endpoint. Queries every available source
          automatically - no need to specify suppliers.
        </p>
        <ParamsTable
          params={[
            { name: "originDestinations", type: "object[]", required: true, description: "Array of legs. Each: { from (IATA), to (IATA), departure: { date: YYYY-MM-DD } }" },
            { name: "passengers", type: "object", required: true, description: "{ adult, child, infant } counts" },
            { name: "cabinClass", type: "string[]", required: true, description: 'Any of "Economy", "PremiumEconomy", "Business", "First"' },
            { name: "maxSolutions", type: "integer", description: "Optional - cap the number of returned offers" },
          ]}
        />
        <MultiLangCodeBlock
          samples={buildHttpSamples({
            method: "POST",
            url: `${SANDBOX}/product/v2/flight/search`,
            body: {
              originDestinations: [
                { from: "LOS", to: "LHR", departure: { date: "2026-07-09" } },
                { from: "LHR", to: "LOS", departure: { date: "2026-07-20" } },
              ],
              passengers: { adult: 1 },
              cabinClass: ["Economy"],
            },
          })}
        />

        <EndpointHeading method="POST" path="/product/v1/flight/search" id="ep-search-v1" />
        <p>
          Legacy v1 search. Same body as v2 but{" "}
          <strong>requires a <InlineCode>supplier</InlineCode> array</strong>{" "}
          specifying which inventory sources to query - useful when you want
          fine-grained control.
        </p>
        <CodeBlock
          label="JSON"
          code={`{
  "supplier": ["AmadeusOne", "TravXTwo"],
  "originDestinations": [ /* ... */ ],
  "passengers": { "adult": 1 },
  "cabinClass": ["Economy"]
}`}
        />
      </DocsSection>

      <DocsSection id="pricing" title="Pricing, Branded Fares & Seat Maps">
        <p>
          After search, take the <InlineCode>supplier</InlineCode> string and
          one of the <InlineCode>offers</InlineCode> from the response and
          pass them to any of the endpoints below.
        </p>

        <EndpointHeading method="POST" path="/product/v1/flight/pricing" id="ep-pricing" />
        <p>Confirm and re-price an offer immediately before booking.</p>
        <CodeBlock label="JSON" code={`{ "supplier": "supplier_string", "offers": [offer_object] }`} />

        <EndpointHeading method="POST" path="/product/v1/flight/brandedFares" id="ep-branded" />
        <p>Fetch branded fare upgrade options for an offer.</p>
        <CodeBlock label="JSON" code={`{ "supplier": "supplier_string", "offers": [offer_object] }`} />

        <EndpointHeading method="POST" path="/product/v1/flight/seatmap" id="ep-seatmap" />
        <p>Retrieve seat map and seat-level pricing for the selected offer.</p>
        <CodeBlock label="JSON" code={`{ "supplier": "supplier_string", "offers": [offer_object] }`} />

        <EndpointHeading method="POST" path="/product/v1/flight/formattedFareRules" id="ep-rules" />
        <p>Get human-readable fare rules for a specific booking and segments.</p>
        <CodeBlock label="JSON" code={`{ "flightBookingId": "booking_id", "segments": [/* ... */] }`} />

        <EndpointHeading method="POST" path="/product/v1/flight/alternativeCheapestListings" id="ep-alts" />
        <p>Surface alternative, cheaper itineraries close to the searched dates.</p>
      </DocsSection>

      <DocsSection id="lookups" title="City & Airport Lookups">
        <EndpointHeading method="GET" path="/product/v1/flight/cityCodes/:searchString" id="ep-citycodes" />
        <p>Search for city codes by name (e.g. <InlineCode>/cityCodes/lagos</InlineCode>).</p>

        <EndpointHeading method="GET" path="/product/v1/flight/airportCodes/:searchString" id="ep-airportcodes" />
        <p>Search for airport IATA codes by name or city.</p>
      </DocsSection>

      <DocsSection id="booking" title="Booking">
        <EndpointHeading method="POST" path="/product/v1/book" id="ep-book" />
        <p>Create a flight booking. Passenger type uses airline codes: <InlineCode>"ADT"</InlineCode> (adult), <InlineCode>"CHD"</InlineCode> (child), <InlineCode>"INF"</InlineCode> (infant).</p>
        <ParamsTable
          params={[
            { name: "supplier", type: "string", required: true, description: "Supplier string from the search response" },
            { name: "offers", type: "object[]", required: true, description: "Array containing the selected offer object(s)" },
            { name: "travelersInfo", type: "object[]", required: true, description: "Traveler details (name, DOB, gender, type, phone, email)" },
          ]}
        />
        <MultiLangCodeBlock
          samples={buildHttpSamples({
            method: "POST",
            url: `${SANDBOX}/product/v1/book`,
            body: {
              supplier: "supplier_from_search_result",
              offers: [{ /* offer object from search results */ }],
              travelersInfo: [
                {
                  firstName: "Chinedu",
                  middleName: "Ike",
                  lastName: "Doe",
                  birthDate: "1990-11-24",
                  gender: "Male",
                  type: "ADT",
                  phone: [{ countryCode: "234", location: "NG", number: "8012345678" }],
                  email: "customer@example.com",
                },
              ],
            },
          })}
        />

        <EndpointHeading method="GET" path="/product/v1/book?populate[]=flightBooking" id="ep-list" />
        <p>List all bookings for the current account.</p>

        <EndpointHeading method="GET" path="/product/v1/book/:id?populate=flightBooking" id="ep-get-one" />
        <p>Retrieve a single booking by ID with the full flight booking populated.</p>

        <EndpointHeading method="POST" path="/product/v1/book/getFlightBookingByRef" id="ep-get-by-ref" />
        <p>Look up a booking by its reference and the lead passenger's last name.</p>
        <CodeBlock label="JSON" code={`{ "ref": "BK-AY7IAUT3", "lastName": "Miller" }`} />
      </DocsSection>

      <DocsSection id="post-booking" title="Post-Booking Actions">
        <EndpointHeading method="PATCH" path="/product/v1/book/cancelBooking" id="ep-cancel" />
        <CodeBlock label="JSON" code={`{ "flightBookingId": "booking_id" }`} />

        <EndpointHeading method="PATCH" path="/product/v1/book/holdFlightBooking/:flightBookingId" id="ep-hold" />
        <p>Place a temporary hold on a booking before issuing the ticket.</p>

        <EndpointHeading method="PATCH" path="/product/v1/book/selfTicket/:flightBookingId" id="ep-self-ticket" />
        <p>Self-issue the ticket for a held booking.</p>

        <EndpointHeading method="POST" path="/product/v1/refund/booking" id="ep-refund" />
        <p>Cancel and refund an issued booking, subject to fare rules.</p>
        <CodeBlock label="JSON" code={`{ "flightBookingId": "booking_id" }`} />

        <EndpointHeading method="GET" path="/product/v1/book/refresh/:flightBookingId" id="ep-refresh" />
        <p>Refresh the order from the supplier (sync latest status).</p>
      </DocsSection>

      <DocsSection id="import-rebook" title="Import & Rebook">
        <EndpointHeading method="POST" path="/product/v1/book/importBooking" id="ep-import" />
        <p>
          Import an existing PNR or order from a supplier into your Intraverse
          account. Supported supplier values:{" "}
          <InlineCode>"MyAmadeus"</InlineCode>,{" "}
          <InlineCode>"MyAmadeusSoap"</InlineCode>,{" "}
          <InlineCode>"MyTravelport"</InlineCode>,{" "}
          <InlineCode>"MySabre"</InlineCode>.
        </p>
        <CodeBlock label="JSON" code={`{ "supplier": "MyAmadeus", "pnrOrOrderId": "PNR_STRING" }`} />

        <EndpointHeading method="PATCH" path="/product/v1/book/rebook" id="ep-rebook" />
        <CodeBlock label="JSON" code={`{ "flightBookingId": "...", "offer": offer_object, "acceptPriceChange": true }`} />

        <EndpointHeading method="PATCH" path="/product/v1/book/autoRebook" id="ep-auto-rebook" />
        <CodeBlock label="JSON" code={`{ "flightBookingId": "...", "acceptPriceChange": true }`} />
      </DocsSection>

      <DocsSection id="manage" title="Manage Booking - Post-Booking Modifications">
        <p>All endpoints below are <InlineCode>PATCH</InlineCode> requests under <InlineCode>/product/v1/updateBooking/</InlineCode>.</p>
        <ul className="list-disc list-inside space-y-1.5">
          <li><InlineCode>/addSeat</InlineCode> - add a seat selection</li>
          <li><InlineCode>/addSSR</InlineCode> - add a Special Service Request</li>
          <li><InlineCode>/addDocuments</InlineCode> - attach passport / ID documents</li>
          <li><InlineCode>/addFrequentFlyer</InlineCode> - attach a frequent flyer number</li>
          <li><InlineCode>/travelerInfo</InlineCode> - update traveler details</li>
          <li><InlineCode>/addRemark</InlineCode> - add a free-form remark to the PNR</li>
          <li><InlineCode>/queuePnr</InlineCode> - queue the PNR for an agent</li>
          <li><InlineCode>/transferPnr</InlineCode> - transfer the PNR to another office</li>
        </ul>
      </DocsSection>

      <DocsSection id="agent-flex" title="Agent Flex Markup">
        <EndpointHeading method="PATCH" path="/product/v1/book/setAgentFlexPrice" id="ep-flex" />
        <p>Apply an agent markup or discount to the booking.</p>
        <CodeBlock
          label="JSON"
          code={`{
  "flightBookingId": "...",
  "agentFlexPriceAmount": 20000,
  "agentFlexPricingType": "Markup",
  "agentFlexPricingMethod": "Fixed"
}`}
        />
      </DocsSection>

      <DocsSection id="share" title="Share Booking & Itinerary">
        <EndpointHeading method="POST" path="/product/v1/book/shareBooking" id="ep-share" />
        <CodeBlock
          label="JSON"
          code={`{
  "flightBookingId": "...",
  "share": [
    { "shareToEmail": "guest@example.com", "shareToName": "Guest", "includePrice": true }
  ]
}`}
        />

        <EndpointHeading method="POST" path="/notification/v1/sendMail/itineraryPdf" id="ep-itinerary" />
        <p>Send the booking itinerary as a PDF attachment by email.</p>
      </DocsSection>

      <DocsSection id="flow" title="Booking Flow">
        <div className="not-prose flex items-center flex-wrap gap-3 my-6 p-5 rounded-lg bg-[#F0F5FC] border border-border">
          {["Search", "Re-price", "Book", "Hold or Self-Ticket", "Manage / Refund"].map((s, i, arr) => (
            <div key={s} className="flex items-center gap-3">
              <div className="px-3 py-2 rounded-md bg-white border border-border text-sm font-medium text-foreground">
                {s}
              </div>
              {i < arr.length - 1 && <ArrowRight className="w-4 h-4 text-muted-foreground" />}
            </div>
          ))}
        </div>
      </DocsSection>

      <DocsSection id="errors" title="Errors">
        <Callout variant="info">
          Refer to the <DocsPostmanLink>Postman collection</DocsPostmanLink>{" "}
          for current error response formats. Errors are returned as JSON with
          a relevant HTTP status code (<InlineCode>4xx</InlineCode> for client
          errors, <InlineCode>5xx</InlineCode> for upstream/supplier
          failures). Re-price an offer immediately before booking to avoid
          stale-price errors.
        </Callout>
      </DocsSection>
    </DocsLayout>
  );
}
