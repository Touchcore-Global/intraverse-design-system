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
  { id: "search", label: "Search" },
  { id: "details", label: "Details & Reviews" },
  { id: "availability", label: "Availability" },
  { id: "booking", label: "Booking" },
  { id: "payment", label: "Payment" },
  { id: "manage", label: "Manage Bookings" },
  { id: "cancel", label: "Cancellation" },
  { id: "flow", label: "Flows" },
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

export default function DocsTours() {
  return (
    <DocsLayout
      slug="tours"
      title="Tours, Activities, and Experiences"
      metaTitle="Tour & Activity APIs | Search & Book Experiences | Intraverse API Docs"
      metaDescription="Search tours and activities by destination, check availability, hold bookings, confirm, and manage cancellations. Powered by global tour suppliers."
      subtitle="Search tours and activities by destination, check availability, hold bookings, confirm, and manage cancellations. Powered by global tour suppliers."
      toc={toc}
    >
      <DocsSection id="overview" title="Overview">
        <p>
          The Package API (Tours) provides access to tours, activities, and experiences from international suppliers.
          Search by destination, check real-time availability for specific dates and group sizes, hold bookings,
          confirm after payment, and manage cancellations. Tours are referred to as "packages" in the API namespace
          but represent standalone bookable tours and activities.
        </p>
        <Callout variant="warning" title="Namespace note">
          In the API, tours and activities use the <InlineCode>/product/v1/package/</InlineCode> namespace. This is
          separate from Nobi PackagePro (custom packages you create yourself) which uses{" "}
          <InlineCode>/product/v1/nobiPackage/</InlineCode>.
        </Callout>
        <p>All endpoints are relative to <InlineCode>{SANDBOX}</InlineCode>.</p>
        <Callout variant="info">
          Explore these endpoints interactively in our <DocsPostmanLink>Postman collection →</DocsPostmanLink>
        </Callout>
      </DocsSection>

      <DocsSection id="search" title="Search">
        <EndpointHeading method="GET" path="/product/v1/package/auto-complete" />
        <p>Search for tour destinations and activities by keyword. Returns matching destinations and tour suggestions.</p>
        <ParamsTable params={[
          { name: "q", type: "string", required: true, description: "Search term" },
        ]} />
        <CodeBlock label="Example" language="bash" code={`GET ${SANDBOX}/product/v1/package/auto-complete?q=northern historic site circuit`} />

        <EndpointHeading method="POST" path="/product/v1/package/search-by-destination" />
        <p>Search for available tours and activities at a specific destination.</p>
        <ParamsTable params={[
          { name: "destinationId", type: "string", required: true, description: "Destination ID from auto-complete results" },
          { name: "destinationName", type: "string", required: true, description: "Destination name" },
          { name: "suppliers", type: "string[]", required: true, description: "Tour supplier codes (e.g. \"TourX1\")" },
          { name: "populate", type: "boolean", description: "Include full details — set false for speed" },
          { name: "limit", type: "number", description: "Maximum results" },
        ]} />
        <CodeBlock label="JSON" language="json" code={`{
  "destinationId": "66f941431e951df6140bc378",
  "destinationName": "Abuja",
  "suppliers": ["TourX1"],
  "populate": false,
  "limit": 10
}`} />
      </DocsSection>

      <DocsSection id="details" title="Details & Reviews">
        <EndpointHeading method="POST" path="/product/v1/package/get-single" />
        <p>Get full details for a specific tour or activity.</p>
        <CodeBlock label="JSON" language="json" code={`{
  "productCode": "109060P4",
  "supplier": "TourX1"
}`} />

        <EndpointHeading method="POST" path="/product/v1/package/product-reviews" />
        <p>Get customer reviews for a specific tour or activity.</p>
        <CodeBlock label="JSON" language="json" code={`{
  "productCode": "20364P1",
  "skip": 0,
  "limit": 20,
  "supplier": "TourX1"
}`} />
      </DocsSection>

      <DocsSection id="availability" title="Availability">
        <EndpointHeading method="POST" path="/product/v1/package/availability" />
        <p>Check real-time availability for a specific tour on a specific date with a specific group size.</p>
        <ParamsTable params={[
          { name: "productCode", type: "string", required: true, description: "Tour product code" },
          { name: "travelDate", type: "string", required: true, description: "Travel date (YYYY-MM-DD)" },
          { name: "paxMix", type: "array", required: true, description: "Traveler breakdown by age band (ADULT, CHILD, INFANT, SENIOR, STUDENT)" },
          { name: "supplier", type: "string", required: true, description: "Supplier code" },
        ]} />
        <CodeBlock label="JSON" language="json" code={`{
  "productCode": "666a052cafe8934123aade80",
  "travelDate": "2026-07-15",
  "paxMix": [
    {
      "ageBand": "ADULT",
      "numberOfTravelers": 1
    }
  ],
  "supplier": "TourX1"
}`} />
      </DocsSection>

      <DocsSection id="booking" title="Booking">
        <EndpointHeading method="POST" path="/product/v1/package/hold-booking" />
        <p>Create a temporary hold on a tour booking. Holds the availability while payment is processed.</p>
        <ParamsTable params={[
          { name: "items", type: "array", required: true, description: "Array of tour items to book (productCode, productOptionCode, travelDate, startTime, paxMix, bookingQuestionAnswers)" },
        ]} />
        <CodeBlock label="JSON" language="json" code={`{
  "items": [
    {
      "productCode": "146604P4",
      "productOptionCode": "TG1",
      "travelDate": "2026-08-10",
      "startTime": "06:30",
      "paxMix": [
        {
          "ageBand": "ADULT",
          "numberOfTravelers": 1
        }
      ],
      "bookingQuestionAnswers": [
        {
          "question": "FULL_NAMES_FIRST",
          "answer": "Chinedu",
          "travelerNum": 1
        }
      ]
    }
  ]
}`} />
        <Callout variant="info">
          <InlineCode>startTime</InlineCode> is required only if the product has multiple start times.
          <InlineCode>bookingQuestionAnswers</InlineCode> vary by tour — check the product details for required questions.
        </Callout>

        <EndpointHeading method="POST" path="/product/v1/package/confirm-booking/:id" />
        <p>Confirm a tour booking after successful payment.</p>
      </DocsSection>

      <DocsSection id="payment" title="Payment">
        <EndpointHeading method="POST" path="/payment/v1/payment/package" />
        <p>Initialize payment for a held tour booking.</p>
        <CodeBlock label="JSON" language="json" code={`{
  "packageBookingId": "678914be10d5dfdc3ff1b5e7",
  "paymentMode": "Wallet",
  "callbackUrl": "http://your-app.com/callback"
}`} />
      </DocsSection>

      <DocsSection id="manage" title="Manage Bookings">
        <EndpointHeading method="GET" path="/product/v1/package/:_id" />
        <p>Get details for a specific tour booking.</p>

        <EndpointHeading method="GET" path="/product/v1/package" />
        <p>List all tour bookings for the authenticated account.</p>
      </DocsSection>

      <DocsSection id="cancel" title="Cancellation">
        <EndpointHeading method="POST" path="/product/v1/package/cancel-booking/:id" />
        <p>Cancel a tour booking (before confirmation).</p>

        <EndpointHeading method="POST" path="/product/v1/package/cancel-quote" />
        <p>Get a cancellation quote showing any applicable fees.</p>
        <CodeBlock label="JSON" language="json" code={`{
  "bookingId": "66830b74ca45c6857aa1af7f"
}`} />

        <EndpointHeading method="POST" path="/product/v1/package/cancel-confirmed-booking" />
        <p>Cancel a confirmed tour booking with reason. Returns refund details based on cancellation policy.</p>
        <CodeBlock label="JSON" language="json" code={`{
  "supplier": "TourX1",
  "bookingId": "667d64e36f4f8b38bdccbfcc",
  "cancelReason": "Customer_Service.Unexpected_medical_circumstances"
}`} />
      </DocsSection>

      <DocsSection id="flow" title="Flows">
        <h3 className="h3-global text-foreground mb-2" style={{ fontSize: "14px" }}>Booking</h3>
        <Flow steps={["Auto-Complete", "Search by Destination", "Get Single Tour", "Availability", "Hold", "Payment", "Confirm"]} />
        <h3 className="h3-global text-foreground mb-2 mt-6" style={{ fontSize: "14px" }}>Cancellation</h3>
        <Flow steps={["Cancel Quote", "Cancel Booking OR Cancel Confirmed"]} />
      </DocsSection>

      <DocsBofu />
    </DocsLayout>
  );
}
