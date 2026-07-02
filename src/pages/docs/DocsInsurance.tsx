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
  { id: "policies", label: "Get Policies" },
  { id: "purchase", label: "Purchase" },
  { id: "payment", label: "Payment" },
  { id: "manage", label: "Manage" },
  { id: "cancel", label: "Cancellation" },
  { id: "flow", label: "Booking Flow" },
];

export default function DocsInsurance() {
  return (
    <DocsLayout
      slug="insurance"
      title="Travel Insurance"
      metaTitle="Insurance APIs | Travel Insurance | Intraverse API Docs"
      metaDescription="Get insurance policy quotes for flight travellers, purchase coverage, and manage cancellations. Protect your customers' trips with integrated travel insurance."
      subtitle="Get insurance policy quotes for flight travellers, purchase coverage, and manage cancellations. Protect your customers' trips with integrated travel insurance."
      toc={toc}
    >
      <DocsSection id="overview" title="Overview">
        <p>
          The Insurance API lets you fetch available travel insurance policies for your customers, purchase coverage,
          and manage cancellations. Insurance is currently available for flight travellers and can be offered as an
          add-on during the flight booking process.
        </p>
        <p>All endpoints are relative to <InlineCode>{SANDBOX}</InlineCode>.</p>
        <Callout variant="info">
          Explore these endpoints interactively in our <DocsPostmanLink>Postman collection →</DocsPostmanLink>
        </Callout>
      </DocsSection>

      <DocsSection id="policies" title="Get Flight Policies">
        <EndpointHeading method="POST" path="/product/v1/insurance/flight-policies" />
        <p>Get available insurance policies for a flight traveller. Returns policy options with coverage details and pricing.</p>
        <ParamsTable params={[
          { name: "personInfo", type: "object", required: true, description: "Traveller details (birthDate, firstName, lastName, email, phone, gender, title, city, state, passportNumber)" },
          { name: "destinationCountry", type: "string", required: true, description: "Destination country name" },
          { name: "startDate", type: "string", required: true, description: "Coverage start date (YYYY-MM-DD)" },
          { name: "endDate", type: "string", required: true, description: "Coverage end date (YYYY-MM-DD)" },
          { name: "purposeOfTravel", type: "string", required: true, description: "\"Leisure\", \"Business\", etc." },
          { name: "isRoundTrip", type: "boolean", description: "Default false" },
          { name: "numberOfAdults", type: "number", description: "Default 1" },
        ]} />
        <CodeBlock label="JSON" language="json" code={`{
  "personInfo": {
    "birthDate": "1990-10-20",
    "firstName": "Chinedu",
    "middleName": "Ike",
    "lastName": "Doe",
    "email": "customer@example.com",
    "phone": "08012345678",
    "gender": "Male",
    "title": "Mr",
    "city": "Lagos",
    "state": "Lagos",
    "passportNumber": "A12345678"
  },
  "destinationCountry": "South Africa",
  "startDate": "2026-02-20",
  "endDate": "2026-02-25",
  "purposeOfTravel": "Leisure",
  "isRoundTrip": false,
  "numberOfAdults": 1
}`} />
      </DocsSection>

      <DocsSection id="purchase" title="Purchase">
        <EndpointHeading method="POST" path="/product/v1/insurance/flight-purchase" />
        <p>Purchase an insurance policy for one or more travellers.</p>
        <ParamsTable params={[
          { name: "personsInfo", type: "array", required: true, description: "Array of insured persons (firstName, middleName, lastName, birthDate, ageCategory, passportNumber, next-of-kin details, preMedical)" },
        ]} />
        <CodeBlock label="JSON" language="json" code={`{
  "personsInfo": [
    {
      "firstName": "Chinedu",
      "middleName": "Ike",
      "lastName": "Doe",
      "birthDate": "1990-10-20",
      "ageCategory": "Adult",
      "passportNumber": "A12345678",
      "nextOfKinRelationship": "Wife",
      "nextOfKinAddress": "Lagos",
      "nextOfKinName": "Jane Doe",
      "nextOfKinContact": "08012345679",
      "preMedical": false
    }
  ]
}`} />
        <Callout variant="info">
          If <InlineCode>firstName</InlineCode>/<InlineCode>lastName</InlineCode> are not provided, they default to
          the name on the authenticated account.
        </Callout>
      </DocsSection>

      <DocsSection id="payment" title="Payment">
        <EndpointHeading method="POST" path="/payment/v1/payment/insurance" />
        <p>Initialize payment for a purchased insurance policy.</p>
        <CodeBlock label="JSON" language="json" code={`{
  "insurancePurchaseId": "66c49b0d6b08122e19c4f449",
  "paymentMode": "Wallet",
  "callbackUrl": "http://your-app.com/callback"
}`} />
      </DocsSection>

      <DocsSection id="manage" title="Manage Purchases">
        <EndpointHeading method="GET" path="/product/v1/insurance/:id" />
        <p>Get details for a specific insurance purchase.</p>

        <EndpointHeading method="GET" path="/product/v1/insurance" />
        <p>List all insurance purchases for the authenticated account.</p>
      </DocsSection>

      <DocsSection id="cancel" title="Cancellation">
        <EndpointHeading method="POST" path="/product/v1/insurance/cancel-purchase/:id" />
        <p>Cancel an insurance purchase. Cancellation eligibility depends on the policy terms.</p>
      </DocsSection>

      <DocsSection id="flow" title="Booking Flow">
        <div className="not-prose flex items-center flex-wrap gap-3 my-6 p-5 rounded-lg bg-[#F0F5FC] border border-border">
          {["Get Flight Policies (quote)", "Purchase", "Payment", "Confirmation"].map((s, i, arr) => (
            <div key={s} className="flex items-center gap-3">
              <div className="px-3 py-2 rounded-md bg-white border border-border text-sm font-medium text-foreground">{s}</div>
              {i < arr.length - 1 && <ArrowRight className="w-4 h-4 text-muted-foreground" />}
            </div>
          ))}
        </div>
      </DocsSection>

      <DocsBofu />
    </DocsLayout>
  );
}
