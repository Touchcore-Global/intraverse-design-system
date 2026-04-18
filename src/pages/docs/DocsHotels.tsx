import { DocsLayout, DocsSection } from "@/components/docs/DocsLayout";
import { CodeBlock, InlineCode } from "@/components/docs/CodeBlock";
import { MultiLangCodeBlock, buildHttpSamples } from "@/components/docs/MultiLangCodeBlock";
import { EndpointHeading } from "@/components/docs/MethodBadge";
import { ParamsTable } from "@/components/docs/ParamsTable";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "endpoints", label: "Endpoints" },
  { id: "response-format", label: "Response Format" },
  { id: "cancellation", label: "Cancellation Policies" },
  { id: "best-practices", label: "Best Practices" },
  { id: "errors", label: "Common Errors" },
];

export default function DocsHotels() {
  return (
    <DocsLayout
      slug="hotels"
      title="Hotels From Leading Global Suppliers"
      subtitle="Search, compare, and book hotel inventory from multiple global suppliers through a single API. Consistent response format, real-time availability, and instant confirmation."
      toc={toc}
    >
      <DocsSection id="overview" title="Overview">
        <p>
          The Hotels API queries multiple global suppliers in parallel, deduplicates results by property, and returns the best rate per
          property along with all alternative rates. You see one row per hotel, not the same hotel five times from five sources.
        </p>
        <p>
          All availability is real-time. Prices are guaranteed at the time of booking and confirmation is instant for the vast majority of
          properties.
        </p>
      </DocsSection>

      <DocsSection id="endpoints" title="Endpoints">
        <EndpointHeading method="POST" path="/v1/hotels/search" />
        <p>Search hotel inventory across all configured suppliers.</p>
        <ParamsTable
          params={[
            { name: "destination", type: "string", required: true, description: "City name, IATA code, or { lat, lng }" },
            { name: "check_in", type: "string", required: true, description: "ISO date (YYYY-MM-DD)" },
            { name: "check_out", type: "string", required: true, description: "ISO date (YYYY-MM-DD)" },
            { name: "guests", type: "object", required: true, description: "{ adults, children }" },
            { name: "rooms", type: "integer", required: true, description: "Number of rooms" },
            { name: "star_rating", type: "integer[]", description: "Filter by star rating (e.g. [4, 5])" },
            { name: "max_price", type: "integer", description: "Maximum nightly price in smallest currency unit" },
            { name: "amenities", type: "string[]", description: "wifi, pool, gym, parking, breakfast" },
            { name: "sort_by", type: "string", description: "price | rating | distance" },
            { name: "radius_km", type: "number", description: "Search radius from coordinate centre" },
          ]}
        />
        <MultiLangCodeBlock
          samples={buildHttpSamples({
            method: "POST",
            url: "https://sandbox.api.intraverse.com/v1/hotels/search",
            body: {
              destination: "Lagos",
              check_in: "2026-07-01",
              check_out: "2026-07-04",
              guests: { adults: 2 },
              rooms: 1,
            },
          })}
        />

        <EndpointHeading method="GET" path="/v1/hotels/{hotel_id}" />
        <p>Get full hotel details: photos, amenities, location, descriptions, policies.</p>

        <EndpointHeading method="GET" path="/v1/hotels/{hotel_id}/rooms" />
        <p>Get all available room types and rates for a specific hotel.</p>
        <ParamsTable
          params={[
            { name: "check_in", type: "string", required: true, description: "ISO date" },
            { name: "check_out", type: "string", required: true, description: "ISO date" },
            { name: "guests", type: "object", required: true, description: "{ adults, children }" },
          ]}
        />

        <EndpointHeading method="POST" path="/v1/hotels/bookings" />
        <p>Create a hotel booking from a selected room rate.</p>
        <CodeBlock
          label="JSON"
          code={`{
  "rate_id": "rate_h_abc",
  "guests": [
    { "first_name": "Aisha", "last_name": "Bello" }
  ],
  "contact": { "email": "guest@example.com", "phone": "+2348012345678" },
  "special_requests": "Late check-in"
}`}
        />

        <EndpointHeading method="GET" path="/v1/hotels/bookings/{booking_id}" />
        <p>Retrieve a hotel booking by ID.</p>

        <EndpointHeading method="POST" path="/v1/hotels/bookings/{booking_id}/cancel" />
        <p>Cancel a hotel booking. Subject to the property's cancellation policy.</p>
      </DocsSection>

      <DocsSection id="response-format" title="Response Format">
        <CodeBlock
          label="JSON"
          code={`{
  "hotel_id": "htl_lagos_xyz",
  "name": "Eko Hotel & Suites",
  "star_rating": 5,
  "address": "1415 Adetokunbo Ademola St, Victoria Island, Lagos",
  "coordinates": { "lat": 6.4281, "lng": 3.4219 },
  "best_rate": {
    "rate_id": "rate_h_abc",
    "room_type": "Deluxe King",
    "board": "room_only",
    "nightly_price": 95000,
    "total_price": 285000,
    "currency": "NGN",
    "refundable": true,
    "free_cancellation_until": "2026-06-29T23:59:00+01:00"
  },
  "amenities": ["wifi", "pool", "gym", "parking"],
  "thumbnail": "https://cdn.intraverse.com/hotels/eko/thumb.jpg"
}`}
        />
      </DocsSection>

      <DocsSection id="cancellation" title="Cancellation Policies">
        <p>Each rate carries a structured cancellation policy:</p>
        <CodeBlock
          label="JSON"
          code={`"cancellation_policy": {
  "type": "free_until_date",
  "free_cancellation_until": "2026-06-29T23:59:00+01:00",
  "penalties": [
    { "from": "2026-06-30T00:00:00+01:00", "amount": 95000, "currency": "NGN" },
    { "from": "2026-07-01T00:00:00+01:00", "amount": 285000, "currency": "NGN" }
  ]
}`}
        />
      </DocsSection>

      <DocsSection id="best-practices" title="Search Best Practices">
        <ul className="list-disc list-inside space-y-2">
          <li>Use coordinate-based search ({"{ lat, lng }"}) for nearby-hotels UX.</li>
          <li>Apply filters server-side via the search params, not client-side after the fact.</li>
          <li>Cache search results by destination + dates for up to 10 minutes.</li>
          <li>Validate that <InlineCode>check_out</InlineCode> is strictly after <InlineCode>check_in</InlineCode> before sending.</li>
          <li>Refresh rate availability with <InlineCode>/rooms</InlineCode> immediately before booking.</li>
        </ul>
      </DocsSection>

      <DocsSection id="errors" title="Common Errors">
        <ul className="space-y-3">
          <li><InlineCode>NO_AVAILABILITY</InlineCode> — No rooms available for the requested dates and guest config.</li>
          <li><InlineCode>RATE_EXPIRED</InlineCode> — Rate is no longer bookable. Re-fetch rooms.</li>
          <li><InlineCode>GUEST_DATA_INVALID</InlineCode> — Guest details failed validation.</li>
          <li><InlineCode>CANCELLATION_NOT_ALLOWED</InlineCode> — Cancellation window has passed or rate is non-refundable.</li>
        </ul>
      </DocsSection>
    </DocsLayout>
  );
}
