import { DocsLayout, DocsSection } from "@/components/docs/DocsLayout";
import { CodeBlock, InlineCode } from "@/components/docs/CodeBlock";
import { EndpointHeading } from "@/components/docs/MethodBadge";
import { ParamsTable } from "@/components/docs/ParamsTable";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "endpoints", label: "Endpoints" },
  { id: "response-format", label: "Response Format" },
  { id: "categories", label: "Tour Categories" },
  { id: "bundling", label: "Bundling" },
  { id: "errors", label: "Common Errors" },
];

const categories = [
  "sightseeing", "adventure", "cultural", "food", "nature",
  "transfer", "water_sports", "nightlife", "wellness", "workshop",
];

export default function DocsTours() {
  return (
    <DocsLayout
      slug="tours"
      title="Tours, Activities, and Experiences"
      subtitle="Access curated tour and activity inventory from international suppliers. Search by destination, category, and date. Book standalone or bundle with flights and hotels for complete travel packages."
      toc={toc}
    >
      <DocsSection id="overview" title="Overview">
        <p>
          The Tours API exposes inventory from leading global activity providers — from city walking tours to multi-day adventures — all
          through one consistent contract. Tours can be booked standalone or composed into packages with flights and hotels via the
          Packages API.
        </p>
      </DocsSection>

      <DocsSection id="endpoints" title="Endpoints">
        <EndpointHeading method="POST" path="/v1/tours/search" />
        <p>Search tours by destination and date.</p>
        <ParamsTable
          params={[
            { name: "destination", type: "string", required: true, description: "City name or destination ID" },
            { name: "date", type: "string", required: true, description: "ISO date (YYYY-MM-DD)" },
            { name: "category", type: "string", description: "See Tour Categories" },
            { name: "max_price", type: "integer", description: "Maximum price per participant (smallest unit)" },
            { name: "duration_hours", type: "object", description: "{ min, max } hours" },
            { name: "language", type: "string", description: "ISO language code (en, fr, ar)" },
            { name: "group_size", type: "integer", description: "Expected number of participants" },
          ]}
        />

        <EndpointHeading method="GET" path="/v1/tours/{tour_id}" />
        <p>Full tour details: itinerary, inclusions, exclusions, meeting point, photos.</p>

        <EndpointHeading method="GET" path="/v1/tours/{tour_id}/availability" />
        <p>Available timeslots and capacity for a given date.</p>
        <ParamsTable
          params={[
            { name: "date", type: "string", required: true, description: "ISO date" },
            { name: "participants", type: "integer", required: true, description: "Number of participants" },
          ]}
        />

        <EndpointHeading method="POST" path="/v1/tours/bookings" />
        <p>Create a tour booking.</p>
        <CodeBlock
          label="JSON"
          code={`{
  "tour_id": "tour_xyz",
  "timeslot_id": "ts_abc",
  "participants": [
    { "first_name": "Tunde", "last_name": "Adeyemi", "age": 32 }
  ],
  "contact": { "email": "guest@example.com", "phone": "+2348012345678" }
}`}
        />

        <EndpointHeading method="GET" path="/v1/tours/bookings/{booking_id}" />
        <p>Retrieve a tour booking by ID.</p>

        <EndpointHeading method="POST" path="/v1/tours/bookings/{booking_id}/cancel" />
        <p>Cancel a tour booking, subject to provider cancellation policy.</p>
      </DocsSection>

      <DocsSection id="response-format" title="Response Format">
        <CodeBlock
          label="JSON"
          code={`{
  "tour_id": "tour_xyz",
  "title": "Lagos Island Heritage Walking Tour",
  "category": "cultural",
  "duration_hours": 3,
  "language": "en",
  "price_per_person": 25000,
  "currency": "NGN",
  "rating": 4.8,
  "reviews_count": 312,
  "thumbnail": "https://cdn.intraverse.com/tours/lagos-walking.jpg",
  "free_cancellation_until_hours": 24
}`}
        />
      </DocsSection>

      <DocsSection id="categories" title="Tour Categories">
        <div className="my-4 flex flex-wrap gap-2 not-prose">
          {categories.map((c) => (
            <code
              key={c}
              className="px-2.5 py-1 rounded bg-[#F0F2F5] font-mono text-[13px] text-foreground"
            >
              {c}
            </code>
          ))}
        </div>
      </DocsSection>

      <DocsSection id="bundling" title="Bundling With Flights and Hotels">
        <p>
          Use <InlineCode>/v1/packages/create</InlineCode> to bundle tours with flights and hotels into a single booking with one payment
          and one confirmation.
        </p>
        <CodeBlock
          label="JSON"
          code={`POST /v1/packages/create
{
  "components": [
    { "type": "flight", "offer_id": "offer_xyz789" },
    { "type": "hotel", "rate_id": "rate_h_abc" },
    { "type": "tour", "tour_id": "tour_xyz", "timeslot_id": "ts_abc" }
  ],
  "passengers": [ /* shared passenger info */ ],
  "contact": { "email": "...", "phone": "..." }
}`}
        />
      </DocsSection>

      <DocsSection id="errors" title="Common Errors">
        <ul className="space-y-3">
          <li><InlineCode>TOUR_UNAVAILABLE</InlineCode> — Tour not running on the requested date.</li>
          <li><InlineCode>TIMESLOT_FULL</InlineCode> — Selected timeslot has no remaining capacity. Choose another.</li>
          <li><InlineCode>MINIMUM_PARTICIPANTS</InlineCode> — Tour requires more participants than booked.</li>
        </ul>
      </DocsSection>
    </DocsLayout>
  );
}
