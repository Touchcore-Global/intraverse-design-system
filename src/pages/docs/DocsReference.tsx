import { DocsLayout, DocsSection } from "@/components/docs/DocsLayout";
import { CodeBlock, InlineCode } from "@/components/docs/CodeBlock";
import { Callout } from "@/components/docs/Callout";
import { MethodBadge } from "@/components/docs/MethodBadge";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const toc = [
  { id: "base-urls", label: "Base URLs" },
  { id: "request", label: "Request Format" },
  { id: "response", label: "Response Format" },
  { id: "index", label: "Endpoint Index" },
  { id: "pagination", label: "Pagination" },
  { id: "rate-limits", label: "Rate Limits" },
  { id: "errors", label: "Error Codes" },
  { id: "versioning", label: "Versioning" },
  { id: "openapi", label: "OpenAPI Spec" },
];

type Method = "GET" | "POST" | "PATCH" | "DELETE";
type Endpoint = { method: Method; path: string; desc: string };
type Group = { title: string; endpoints: Endpoint[] };

const groups: Group[] = [
  {
    title: "Authentication",
    endpoints: [{ method: "POST", path: "/v1/auth/token", desc: "Obtain an access token" }],
  },
  {
    title: "Flights",
    endpoints: [
      { method: "POST", path: "/v1/flights/search", desc: "Search flight inventory" },
      { method: "GET", path: "/v1/flights/offers/{offer_id}", desc: "Get offer details" },
      { method: "GET", path: "/v1/flights/offers/{offer_id}/rules", desc: "Get fare rules" },
    ],
  },
  {
    title: "Bookings",
    endpoints: [
      { method: "POST", path: "/v1/bookings", desc: "Create a flight booking" },
      { method: "POST", path: "/v1/bookings/{booking_id}/issue", desc: "Issue ticket" },
      { method: "GET", path: "/v1/bookings/{booking_id}", desc: "Get booking" },
      { method: "POST", path: "/v1/bookings/{booking_id}/modify", desc: "Modify booking" },
      { method: "POST", path: "/v1/bookings/{booking_id}/cancel", desc: "Cancel booking" },
    ],
  },
  {
    title: "Hotels",
    endpoints: [
      { method: "POST", path: "/v1/hotels/search", desc: "Search hotel inventory" },
      { method: "GET", path: "/v1/hotels/{hotel_id}", desc: "Hotel details" },
      { method: "GET", path: "/v1/hotels/{hotel_id}/rooms", desc: "Room availability" },
      { method: "POST", path: "/v1/hotels/bookings", desc: "Create hotel booking" },
      { method: "GET", path: "/v1/hotels/bookings/{booking_id}", desc: "Get hotel booking" },
      { method: "POST", path: "/v1/hotels/bookings/{booking_id}/cancel", desc: "Cancel hotel booking" },
    ],
  },
  {
    title: "Tours",
    endpoints: [
      { method: "POST", path: "/v1/tours/search", desc: "Search tour inventory" },
      { method: "GET", path: "/v1/tours/{tour_id}", desc: "Tour details" },
      { method: "GET", path: "/v1/tours/{tour_id}/availability", desc: "Tour availability" },
      { method: "POST", path: "/v1/tours/bookings", desc: "Create tour booking" },
      { method: "GET", path: "/v1/tours/bookings/{booking_id}", desc: "Get tour booking" },
      { method: "POST", path: "/v1/tours/bookings/{booking_id}/cancel", desc: "Cancel tour booking" },
    ],
  },
  {
    title: "Payments",
    endpoints: [
      { method: "GET", path: "/v1/wallet/balance", desc: "Wallet balance" },
      { method: "POST", path: "/v1/wallet/fund", desc: "Fund wallet" },
      { method: "POST", path: "/v1/payments", desc: "Charge payment" },
      { method: "GET", path: "/v1/payments/{payment_id}", desc: "Get payment" },
      { method: "POST", path: "/v1/payments/{payment_id}/refund", desc: "Refund payment" },
      { method: "GET", path: "/v1/refunds/{refund_id}", desc: "Get refund" },
    ],
  },
  {
    title: "BNPL",
    endpoints: [
      { method: "POST", path: "/v1/payments/bnpl/eligibility", desc: "Check BNPL eligibility" },
      { method: "POST", path: "/v1/payments/bnpl/create", desc: "Create BNPL order" },
    ],
  },
  {
    title: "Webhooks",
    endpoints: [
      { method: "POST", path: "/v1/webhooks", desc: "Register webhook" },
      { method: "GET", path: "/v1/webhooks", desc: "List webhooks" },
      { method: "PATCH", path: "/v1/webhooks/{webhook_id}", desc: "Update webhook" },
      { method: "DELETE", path: "/v1/webhooks/{webhook_id}", desc: "Delete webhook" },
    ],
  },
  {
    title: "Packages",
    endpoints: [
      { method: "POST", path: "/v1/packages/create", desc: "Create a multi-component package" },
      { method: "GET", path: "/v1/packages/{package_id}", desc: "Get package details" },
    ],
  },
];

const errorCodes: [string, string, string][] = [
  ["AUTH_INVALID", "Token missing, malformed, or expired", "Re-issue a token"],
  ["AUTH_SCOPE_MISSING", "Token lacks required scope for this operation", "Request token with the appropriate scope"],
  ["OFFER_EXPIRED", "Flight offer is no longer bookable", "Re-run search"],
  ["INSUFFICIENT_FUNDS", "Wallet balance cannot cover the booking", "Top up wallet"],
  ["PASSENGER_DATA_INVALID", "Passenger info failed validation", "Check the errors array"],
  ["TICKETING_FAILED", "Airline rejected ticketing", "Retry once after 30s; escalate if persistent"],
  ["FARE_RULES_VIOLATED", "Action conflicts with fare rules", "Review rules via /rules endpoint"],
  ["NO_AVAILABILITY", "No inventory matches the request", "Adjust dates or filters"],
  ["RATE_EXPIRED", "Hotel rate is no longer valid", "Re-fetch rooms"],
  ["PAYMENT_DECLINED", "Charge was declined", "Try a different method"],
  ["BNPL_NOT_ELIGIBLE", "Customer does not qualify for BNPL", "Offer alternative payment"],
  ["REFUND_NOT_ALLOWED", "Refund disallowed by rules or window", "Escalate to support if needed"],
  ["WEBHOOK_URL_INVALID", "Webhook URL not reachable or not HTTPS", "Use a valid public HTTPS URL"],
  ["RATE_LIMIT_EXCEEDED", "Too many requests in the window", "Honour X-RateLimit-Reset header"],
  ["INTERNAL_ERROR", "Unexpected server-side failure", "Retry with exponential backoff"],
];

export default function DocsReference() {
  return (
    <DocsLayout
      slug="reference"
      title="Complete Endpoint Reference"
      subtitle="Every endpoint, every parameter, every response field — documented with examples and live testing."
      toc={toc}
    >
      <DocsSection id="base-urls" title="Base URLs">
        <div className="my-6 overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#F3F4F6] text-left">
                <th className="px-4 py-2.5 font-semibold text-foreground">Environment</th>
                <th className="px-4 py-2.5 font-semibold text-foreground">URL</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="px-4 py-2.5">Sandbox</td>
                <td className="px-4 py-2.5"><code className="font-mono text-[13px]">https://sandbox.api.intraverse.com/v1/</code></td>
              </tr>
              <tr className="bg-[#F9FAFB]">
                <td className="px-4 py-2.5">Production</td>
                <td className="px-4 py-2.5"><code className="font-mono text-[13px]">https://api.intraverse.com/v1/</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </DocsSection>

      <DocsSection id="request" title="Request Format">
        <p>
          All requests use JSON. Dates are ISO 8601 (<InlineCode>YYYY-MM-DD</InlineCode> for dates,
          <InlineCode>YYYY-MM-DDTHH:MM:SSZ</InlineCode> for timestamps). Monetary values are in the smallest unit of the currency.
        </p>
        <Callout variant="info">
          All monetary values are in the smallest currency unit. For NGN: <InlineCode>485000</InlineCode> = ₦4,850.00.
        </Callout>
      </DocsSection>

      <DocsSection id="response" title="Response Format">
        <p>Success responses follow this shape:</p>
        <CodeBlock
          label="JSON"
          code={`{
  "data": { /* result */ },
  "meta": { "request_id": "req_abc123" }
}`}
        />
        <p>Error responses:</p>
        <CodeBlock
          label="JSON"
          code={`{
  "error": {
    "code": "PASSENGER_DATA_INVALID",
    "message": "Passport expiry must be at least 6 months after travel date.",
    "errors": [
      { "field": "passengers[0].passport_expiry", "issue": "too_soon" }
    ]
  },
  "meta": { "request_id": "req_abc123" }
}`}
        />
      </DocsSection>

      <DocsSection id="index" title="Endpoint Index">
        <div className="my-4 space-y-6">
          {groups.map((g) => (
            <div key={g.title}>
              <h3 className="h3-global text-foreground uppercase mb-2" style={{ fontSize: "13px" }}>
                {g.title} <span className="text-muted-foreground font-normal normal-case">({g.endpoints.length})</span>
              </h3>
              <div className="overflow-x-auto rounded-lg border border-border">
                <table className="w-full text-sm">
                  <tbody>
                    {g.endpoints.map((e, i) => (
                      <tr key={`${e.method}-${e.path}`} className={i % 2 === 0 ? "bg-white" : "bg-[#F9FAFB]"}>
                        <td className="px-4 py-2.5 align-top w-20"><MethodBadge method={e.method} /></td>
                        <td className="px-4 py-2.5 align-top">
                          <code className="font-mono text-[13px] text-foreground whitespace-nowrap">{e.path}</code>
                        </td>
                        <td className="px-4 py-2.5 align-top text-muted-foreground">{e.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">Total: 35 endpoints.</p>
      </DocsSection>

      <DocsSection id="pagination" title="Pagination">
        <p>List endpoints accept <InlineCode>page</InlineCode> and <InlineCode>per_page</InlineCode> query parameters.</p>
        <CodeBlock
          label="JSON"
          code={`{
  "data": [ /* items */ ],
  "pagination": {
    "page": 1,
    "per_page": 50,
    "total": 312,
    "total_pages": 7
  }
}`}
        />
      </DocsSection>

      <DocsSection id="rate-limits" title="Rate Limits">
        <div className="my-6 overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#F3F4F6] text-left">
                <th className="px-4 py-2.5 font-semibold text-foreground">Environment</th>
                <th className="px-4 py-2.5 font-semibold text-foreground">Limit</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="px-4 py-2.5">Sandbox</td>
                <td className="px-4 py-2.5 text-muted-foreground">100 requests / minute</td>
              </tr>
              <tr className="bg-[#F9FAFB]">
                <td className="px-4 py-2.5">Production</td>
                <td className="px-4 py-2.5 text-muted-foreground">Varies by plan</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Every response includes:</p>
        <ul className="list-disc list-inside space-y-1">
          <li><InlineCode>X-RateLimit-Limit</InlineCode> — request quota for the window</li>
          <li><InlineCode>X-RateLimit-Remaining</InlineCode> — requests left in the window</li>
          <li><InlineCode>X-RateLimit-Reset</InlineCode> — Unix timestamp when the window resets</li>
        </ul>
      </DocsSection>

      <DocsSection id="errors" title="Error Codes">
        <div className="my-6 overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#F3F4F6] text-left">
                <th className="px-4 py-2.5 font-semibold text-foreground">Code</th>
                <th className="px-4 py-2.5 font-semibold text-foreground">Description</th>
                <th className="px-4 py-2.5 font-semibold text-foreground">Action</th>
              </tr>
            </thead>
            <tbody>
              {errorCodes.map(([code, desc, action], i) => (
                <tr key={code} className={i % 2 === 0 ? "bg-white" : "bg-[#F9FAFB]"}>
                  <td className="px-4 py-2.5 align-top">
                    <code className="font-mono text-[13px] text-foreground whitespace-nowrap">{code}</code>
                  </td>
                  <td className="px-4 py-2.5 align-top text-muted-foreground">{desc}</td>
                  <td className="px-4 py-2.5 align-top text-muted-foreground">{action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DocsSection>

      <DocsSection id="versioning" title="Versioning">
        <p>
          The API is versioned in the URL (<InlineCode>/v1/</InlineCode>). Breaking changes ship as a new major version.
          Each version is supported for at least <strong>24 months</strong> after a successor is released.
        </p>
      </DocsSection>

      <DocsSection id="openapi" title="OpenAPI Specification">
        <p>Download the machine-readable OpenAPI 3.0 spec to generate clients, validate requests, and power internal tooling.</p>
        <div className="not-prose mt-4">
          <Button asChild className="rounded-none bg-foreground text-background hover:bg-foreground/90 font-semibold">
            <a href="#" download>
              <Download className="w-4 h-4 mr-1" />
              Download OpenAPI 3.0 Spec
            </a>
          </Button>
        </div>
      </DocsSection>
    </DocsLayout>
  );
}
