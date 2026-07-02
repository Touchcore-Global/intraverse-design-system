import { DocsLayout, DocsSection } from "@/components/docs/DocsLayout";
import { CodeBlock, InlineCode } from "@/components/docs/CodeBlock";
import { EndpointHeading } from "@/components/docs/MethodBadge";
import { ParamsTable } from "@/components/docs/ParamsTable";
import { Callout } from "@/components/docs/Callout";
import { DocsPostmanLink } from "@/components/docs/DocsPostmanLink";
import { DocsBofu } from "@/components/docs/DocsBofu";
import { ArrowRight } from "lucide-react";

const SANDBOX = "https://dev.intraversewebservices.com/api";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "location", label: "Location Search" },
  { id: "search", label: "Hotel Search" },
  { id: "availability", label: "Availability" },
  { id: "booking", label: "Booking" },
  { id: "payment", label: "Payment" },
  { id: "modify", label: "Modify Booking" },
  { id: "cancel", label: "Cancellation" },
  { id: "flow", label: "Booking Flow" },
  { id: "errors", label: "Common Errors" },
];

function Flow({ steps }: { steps: string[] }) {
  return (
    <div className="not-prose flex items-center flex-wrap gap-3 my-6 p-5 rounded-lg bg-[#F0F5FC] border border-border">
      {steps.map((s, i) => (
        <div key={s} className="flex items-center gap-3">
          <div className="px-3 py-2 rounded-md bg-white border border-border text-sm font-medium text-foreground">
            {s}
          </div>
          {i < steps.length - 1 && <ArrowRight className="w-4 h-4 text-muted-foreground" />}
        </div>
      ))}
    </div>
  );
}

export default function DocsHotels() {
  return (
    <DocsLayout
      slug="hotels"
      title="Search, Book, and Manage Hotel Reservations"
      metaTitle="Hotel APIs | Search & Book Hotels | Intraverse API Docs"
      metaDescription="Search hotels by location or name, check real-time room availability, book, modify, and cancel — all through a unified API backed by global hotel suppliers."
      subtitle="Search hotels by location or name, check real-time room availability, book, modify, and cancel — all through a unified API backed by global hotel suppliers."
      toc={toc}
    >
      <DocsSection id="overview" title="Overview">
        <p>
          The Hotel API provides programmatic access to global hotel inventory. Search by geographic coordinates
          with radius filtering, or search directly by hotel name. The API supports the full booking lifecycle —
          from search to availability check to booking to modification to cancellation and refund.
        </p>
        <p>
          All endpoints are relative to the sandbox base URL <InlineCode>{SANDBOX}</InlineCode>.
        </p>
        <Callout variant="info">
          Explore these endpoints interactively in our <DocsPostmanLink>Postman collection →</DocsPostmanLink>
        </Callout>
      </DocsSection>

      <DocsSection id="location" title="Location Search">
        <EndpointHeading method="GET" path="/product/v1/hotel/google-places" />
        <p>Search for hotel destinations using Google Places autocomplete. Returns location suggestions with coordinates you can use for the main hotel search.</p>
        <ParamsTable params={[
          { name: "q", type: "string", required: true, description: "Search term (city name, area, landmark)" },
        ]} />
        <CodeBlock label="Example" language="bash" code={`GET ${SANDBOX}/product/v1/hotel/google-places?q=london`} />

        <EndpointHeading method="GET" path="/product/v1/hotel/google-place-detail/:placeId" />
        <p>Get detailed location information including coordinates for a specific Google Place ID returned from the location search.</p>
        <ParamsTable params={[
          { name: "placeId", type: "string", required: true, description: "Google Place ID from the location search" },
        ]} />
      </DocsSection>

      <DocsSection id="search" title="Hotel Search">
        <EndpointHeading method="POST" path="/product/v1/hotel/search" />
        <p>Search for available hotels by geographic coordinates. Returns hotels within the specified radius with pricing, ratings, and basic information.</p>
        <ParamsTable params={[
          { name: "latitude", type: "number", required: true, description: "Latitude of search location" },
          { name: "longitude", type: "number", required: true, description: "Longitude of search location" },
          { name: "range", type: "number", required: true, description: "Search radius in km" },
          { name: "limit", type: "number", required: true, description: "Maximum results to return — important for speed" },
          { name: "start_date", type: "string", required: true, description: "Check-in date (YYYY-MM-DD)" },
          { name: "end_date", type: "string", required: true, description: "Check-out date (YYYY-MM-DD)" },
          { name: "rooms", type: "array", required: true, description: "Room configuration (adults, children ages, infants, units)" },
        ]} />
        <CodeBlock label="JSON" language="json" code={`{
  "latitude": 51.5072178,
  "longitude": -0.1275862,
  "range": 10,
  "limit": 10,
  "start_date": "2026-09-17",
  "end_date": "2026-09-18",
  "rooms": [
    {
      "adults": 1,
      "children": [10],
      "infants": 0,
      "units": 1
    }
  ]
}`} />
        <Callout variant="info" title="Keep it fast">
          Keep <InlineCode>limit</InlineCode> low (10–20) for faster response times. Increase only when you need comprehensive results.
        </Callout>

        <EndpointHeading method="POST" path="/product/v1/hotel/by-name" />
        <p>Search for hotels by name directly. Useful when the customer knows which hotel they want.</p>
        <CodeBlock label="JSON" language="json" code={`{
  "q": "Thistle London Marble Arch"
}`} />

        <EndpointHeading method="POST" path="/product/v1/hotel/select-by-name" />
        <p>Get room availability and pricing for a specific hotel found via name search.</p>
        <CodeBlock label="JSON" language="json" code={`{
  "code": "6557",
  "name": "Thistle London Marble Arch",
  "start_date": "2026-09-22",
  "end_date": "2026-09-23",
  "rooms": [
    {
      "adults": 1,
      "children": [],
      "infants": 0,
      "units": 1
    }
  ],
  "supplier": "StayX2"
}`} />
      </DocsSection>

      <DocsSection id="availability" title="Room Availability">
        <EndpointHeading method="POST" path="/product/v1/hotel/availability" />
        <p>Get detailed room availability, pricing, and booking conditions for a specific hotel from search results. This is the step between search and booking — it returns the exact rates and room types available.</p>
        <CodeBlock label="JSON" language="json" code={`{
  "codeContext": "GLOBAL",
  "code": "6547",
  "name": "The Royal Horseguards Hotel London",
  "cityCode": "LONDON",
  "chainCode": "THIS",
  "chainName": "Clermont Hotel Group (GLH)",
  "areaId": "SW1A 2EJ",
  "categoryCode": "5EST",
  "address": "Whitehall Court, Westminster, 2",
  "city": "LONDON",
  "countryCode": "UK",
  "start_date": "2026-09-26",
  "end_date": "2026-09-27",
  "units": 1,
  "nights": 1
}`} />
        <Callout variant="info">
          Pass the hotel object returned from search results directly into this endpoint. The fields
          (<InlineCode>code</InlineCode>, <InlineCode>codeContext</InlineCode>, <InlineCode>chainCode</InlineCode>, etc.)
          come from the search response.
        </Callout>
      </DocsSection>

      <DocsSection id="booking" title="Booking">
        <EndpointHeading method="POST" path="/product/v1/hotel/book" />
        <p>Create a hotel booking. Pass the full hotel and room details from the availability response along with guest information.</p>
        <Callout variant="info">
          The request body includes the hotel details from search/availability plus room selection and guest information.
          See the <DocsPostmanLink>Postman collection</DocsPostmanLink> for the complete request schema.
        </Callout>

        <EndpointHeading method="GET" path="/product/v1/hotel/:id" />
        <p>Retrieve details for a specific hotel booking by ID.</p>

        <EndpointHeading method="GET" path="/product/v1/hotel" />
        <p>List all hotel bookings for the authenticated account.</p>
      </DocsSection>

      <DocsSection id="payment" title="Payment">
        <EndpointHeading method="POST" path="/payment/v1/payment/hotel" />
        <p>Initialize payment for a hotel booking. Supported payment modes: <InlineCode>Wallet</InlineCode>, <InlineCode>Card</InlineCode>.</p>
        <CodeBlock label="JSON" language="json" code={`{
  "hotelBookingId": "692db12757d388e520c9cab7",
  "paymentMode": "Card",
  "callbackUrl": "http://your-app.com/callback"
}`} />
      </DocsSection>

      <DocsSection id="modify" title="Modify Booking">
        <EndpointHeading method="POST" path="/product/v1/hotel/process-change-booking/:id" />
        <p>Get a change quote for modifying a hotel booking — new dates, different room type. Returns the price difference before committing.</p>

        <EndpointHeading method="POST" path="/payment/v1/payment/hotel-change-reconcilation" />
        <p>Process payment for a hotel booking modification. Handles the price difference from the change quote.</p>
        <CodeBlock label="JSON" language="json" code={`{
  "hotelBookingId": "booking_id",
  "paymentMode": "Wallet",
  "callbackUrl": "http://your-app.com/callback"
}`} />

        <EndpointHeading method="POST" path="/product/v1/hotel/change-booking/:id" />
        <p>Finalize a hotel booking modification after payment reconciliation is complete.</p>
      </DocsSection>

      <DocsSection id="cancel" title="Cancellation">
        <EndpointHeading method="POST" path="/product/v1/hotel/cancel-booking/:id" />
        <p>Cancel a hotel booking before payment. Returns cancellation status.</p>

        <EndpointHeading method="POST" path="/product/v1/hotel/cancel-confirmed/:id" />
        <p>Cancel a confirmed (paid) hotel booking and initiate refund processing.</p>

        <EndpointHeading method="POST" path="/payment/v1/payment/cancel-paid-hotel" />
        <p>Cancel a paid hotel booking before the supplier has confirmed. Initiates automatic refund. Pass <InlineCode>?bookingId=&#123;bookingId&#125;</InlineCode> as a query parameter.</p>
      </DocsSection>

      <DocsSection id="flow" title="Flows">
        <h3 className="h3-global text-foreground mb-2" style={{ fontSize: "14px" }}>Booking</h3>
        <Flow steps={["Location Search", "Hotel Search", "Room Availability", "Book", "Payment", "Confirmation"]} />
        <h3 className="h3-global text-foreground mb-2 mt-6" style={{ fontSize: "14px" }}>Modification</h3>
        <Flow steps={["Process Change (quote)", "Payment Reconciliation", "Finalize Change"]} />
        <h3 className="h3-global text-foreground mb-2 mt-6" style={{ fontSize: "14px" }}>Cancellation</h3>
        <Flow steps={["Cancel Booking (unpaid)", "OR Cancel Confirmed (paid)", "OR Cancel Paid (before supplier)"]} />
      </DocsSection>

      <DocsSection id="errors" title="Common Errors">
        <ul className="space-y-2">
          <li><InlineCode>NO_AVAILABILITY</InlineCode> — No rooms available for selected dates.</li>
          <li><InlineCode>RATE_EXPIRED</InlineCode> — Room rate has changed since availability check.</li>
          <li><InlineCode>BOOKING_NOT_FOUND</InlineCode> — Invalid booking ID.</li>
          <li><InlineCode>CANCELLATION_NOT_ALLOWED</InlineCode> — Booking is past the cancellation window.</li>
          <li><InlineCode>PAYMENT_FAILED</InlineCode> — Payment processing error.</li>
        </ul>
      </DocsSection>

      <DocsBofu />
    </DocsLayout>
  );
}
