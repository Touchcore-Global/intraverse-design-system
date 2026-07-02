import { DocsLayout, DocsSection } from "@/components/docs/DocsLayout";
import { SEO } from "@/components/SEO";
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

type Method = "GET" | "POST" | "PATCH" | "DELETE" | "PUT";
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
      { method: "POST", path: "/product/v2/flight/search", desc: "Search flight inventory (recommended)" },
      { method: "POST", path: "/product/v1/flight/pricing", desc: "Re-price an offer" },
      { method: "POST", path: "/product/v1/book", desc: "Create a flight booking" },
      { method: "PATCH", path: "/product/v1/book/selfTicket/:id", desc: "Issue ticket" },
      { method: "PATCH", path: "/product/v1/book/cancelBooking", desc: "Cancel booking" },
      { method: "POST", path: "/product/v1/refund/booking", desc: "Refund booking" },
    ],
  },
  {
    title: "Hotels",
    endpoints: [
      { method: "GET", path: "/product/v1/hotel/google-places", desc: "Location autocomplete" },
      { method: "GET", path: "/product/v1/hotel/google-place-detail/:placeId", desc: "Location detail" },
      { method: "POST", path: "/product/v1/hotel/search", desc: "Search hotels by coordinates" },
      { method: "POST", path: "/product/v1/hotel/by-name", desc: "Search hotels by name" },
      { method: "POST", path: "/product/v1/hotel/select-by-name", desc: "Availability from name search" },
      { method: "POST", path: "/product/v1/hotel/availability", desc: "Room availability" },
      { method: "POST", path: "/product/v1/hotel/book", desc: "Book hotel" },
      { method: "GET", path: "/product/v1/hotel/:id", desc: "Get single booking" },
      { method: "GET", path: "/product/v1/hotel", desc: "List bookings" },
      { method: "POST", path: "/product/v1/hotel/cancel-booking/:id", desc: "Cancel unpaid booking" },
      { method: "POST", path: "/product/v1/hotel/cancel-confirmed/:id", desc: "Cancel paid booking" },
      { method: "POST", path: "/product/v1/hotel/process-change-booking/:id", desc: "Change quote" },
      { method: "POST", path: "/product/v1/hotel/change-booking/:id", desc: "Finalize change" },
    ],
  },
  {
    title: "Tours",
    endpoints: [
      { method: "GET", path: "/product/v1/package/auto-complete", desc: "Destination autocomplete" },
      { method: "POST", path: "/product/v1/package/search-by-destination", desc: "Search tours by destination" },
      { method: "POST", path: "/product/v1/package/get-single", desc: "Get single tour" },
      { method: "POST", path: "/product/v1/package/product-reviews", desc: "Tour reviews" },
      { method: "POST", path: "/product/v1/package/availability", desc: "Availability" },
      { method: "POST", path: "/product/v1/package/hold-booking", desc: "Hold booking" },
      { method: "GET", path: "/product/v1/package/:_id", desc: "Get single booking" },
      { method: "GET", path: "/product/v1/package", desc: "List bookings" },
      { method: "POST", path: "/product/v1/package/confirm-booking/:id", desc: "Confirm booking" },
      { method: "POST", path: "/product/v1/package/cancel-booking/:id", desc: "Cancel booking" },
      { method: "POST", path: "/product/v1/package/cancel-quote", desc: "Cancel quote" },
      { method: "POST", path: "/product/v1/package/cancel-confirmed-booking", desc: "Cancel confirmed" },
    ],
  },
  {
    title: "Insurance",
    endpoints: [
      { method: "POST", path: "/product/v1/insurance/flight-policies", desc: "Get flight policies" },
      { method: "POST", path: "/product/v1/insurance/flight-purchase", desc: "Purchase policy" },
      { method: "GET", path: "/product/v1/insurance/:id", desc: "Get single purchase" },
      { method: "GET", path: "/product/v1/insurance", desc: "List purchases" },
      { method: "POST", path: "/product/v1/insurance/cancel-purchase/:id", desc: "Cancel purchase" },
    ],
  },
  {
    title: "PackagePro · Packages",
    endpoints: [
      { method: "GET", path: "/product/v1/nobiPackage/categories", desc: "Get categories" },
      { method: "POST", path: "/product/v1/nobiPackage/packages", desc: "Create package" },
      { method: "GET", path: "/product/v1/nobiPackage/packages", desc: "List packages" },
      { method: "PATCH", path: "/product/v1/nobiPackage/packages/:id", desc: "Update package" },
      { method: "DELETE", path: "/product/v1/nobiPackage/packages/:id", desc: "Delete package" },
      { method: "POST", path: "/product/v1/nobiPackage/packages/add-availability", desc: "Add availability" },
      { method: "POST", path: "/product/v1/nobiPackage/packages/pre-package/images/:id", desc: "Add gallery images" },
      { method: "DELETE", path: "/product/v1/nobiPackage/packages/gallery-image/:id", desc: "Delete gallery image" },
      { method: "POST", path: "/product/v1/nobiPackage/packages/pre-package", desc: "Create pre-package" },
      { method: "GET", path: "/product/v1/nobiPackage/packages/pre-package", desc: "List pre-packages" },
      { method: "GET", path: "/product/v1/nobiPackage/packages/pre-package/:id", desc: "Get pre-package" },
      { method: "DELETE", path: "/product/v1/nobiPackage/packages/pre-package/:id", desc: "Delete pre-package" },
    ],
  },
  {
    title: "PackagePro · Options",
    endpoints: [
      { method: "POST", path: "/product/v1/nobiPackage/options", desc: "Create option" },
      { method: "GET", path: "/product/v1/nobiPackage/options", desc: "List options" },
      { method: "GET", path: "/product/v1/nobiPackage/options/:packageId", desc: "Options by package" },
      { method: "PUT", path: "/product/v1/nobiPackage/options/:optionId", desc: "Update option" },
      { method: "DELETE", path: "/product/v1/nobiPackage/options/:optionId", desc: "Delete option" },
    ],
  },
  {
    title: "PackagePro · Protocol Services",
    endpoints: [
      { method: "POST", path: "/product/v1/nobiPackage/protocol-services", desc: "Create service" },
      { method: "GET", path: "/product/v1/nobiPackage/protocol-services/all", desc: "List all" },
      { method: "GET", path: "/product/v1/nobiPackage/protocol-services/:id", desc: "Get service" },
      { method: "PATCH", path: "/product/v1/nobiPackage/protocol-services/:id", desc: "Update service" },
      { method: "DELETE", path: "/product/v1/nobiPackage/protocol-services/:id", desc: "Delete service" },
      { method: "PATCH", path: "/product/v1/nobiPackage/protocol-services/approve/:id", desc: "Approve" },
      { method: "PATCH", path: "/product/v1/nobiPackage/protocol-services/reject/:id", desc: "Reject" },
    ],
  },
  {
    title: "PackagePro · Payouts & Reports",
    endpoints: [
      { method: "GET", path: "/product/v1/nobiPackage/payouts/wallet", desc: "Gross wallet" },
      { method: "GET", path: "/product/v1/nobiPackage/payouts/get-my-payouts", desc: "My payouts" },
      { method: "GET", path: "/product/v1/nobiPackage/reports/package-statistics", desc: "Package stats" },
      { method: "GET", path: "/product/v1/nobiPackage/reports/protocol-service-statistics", desc: "Protocol stats" },
      { method: "GET", path: "/product/v1/nobiPackage/reports/transaction-reports", desc: "Transactions" },
      { method: "POST", path: "/product/v1/nobiPackage/settings/platform-fee", desc: "Set platform fee" },
      { method: "GET", path: "/product/v1/nobiPackage/settings/platform-fee", desc: "Get platform fee" },
      { method: "PUT", path: "/product/v1/nobiPackage/settings/platform-fee/change-settings", desc: "Change platform fee" },
      { method: "DELETE", path: "/product/v1/nobiPackage/settings/platform-fee/disable-settings", desc: "Disable platform fee" },
    ],
  },
  {
    title: "PackagePro · Marketplace",
    endpoints: [
      { method: "GET", path: "/product/v1/nobiPackage/search-packages", desc: "Search marketplace" },
      { method: "GET", path: "/product/v1/nobiPackage/packages/:id", desc: "Get single package" },
      { method: "POST", path: "/product/v1/nobiPackage/package/availability", desc: "Package availability" },
      { method: "GET", path: "/product/v1/nobiPackage/packages/by-availability", desc: "Browse by availability" },
      { method: "GET", path: "/product/v1/nobiPackage/protocol-services/search", desc: "Search protocol services" },
    ],
  },
  {
    title: "PackagePro · Booking",
    endpoints: [
      { method: "POST", path: "/product/v1/nobiPackage/booking", desc: "Book package" },
      { method: "GET", path: "/product/v1/nobiPackage/booking", desc: "List bookings" },
      { method: "GET", path: "/product/v1/nobiPackage/booking/:id", desc: "Get booking" },
      { method: "POST", path: "/product/v1/nobiPackage/booking/cancel/:id", desc: "Cancel booking" },
      { method: "POST", path: "/product/v1/nobiPackage/booking/:id/reschedule/quote", desc: "Reschedule quote" },
      { method: "POST", path: "/product/v1/nobiPackage/booking/:id/cancellation/quote", desc: "Cancellation quote" },
      { method: "POST", path: "/product/v1/nobiPackage/protocol-services/booking", desc: "Create protocol booking" },
      { method: "GET", path: "/product/v1/nobiPackage/protocol-services/booking", desc: "List protocol bookings" },
      { method: "GET", path: "/product/v1/nobiPackage/protocol-services/booking/:id", desc: "Get protocol booking" },
      { method: "GET", path: "/product/v1/nobiPackage/booking/my-packages", desc: "My package stats" },
      { method: "GET", path: "/product/v1/nobiPackage/booking/transactions", desc: "My transactions" },
      { method: "POST", path: "/product/v1/nobiPackage/booking/:id/ticket-used", desc: "Set ticket used" },
    ],
  },
  {
    title: "Payments — Hotels",
    endpoints: [
      { method: "POST", path: "/payment/v1/payment/hotel", desc: "Hotel payment" },
      { method: "POST", path: "/payment/v1/payment/hotel-change-reconcilation", desc: "Change reconciliation" },
      { method: "POST", path: "/payment/v1/payment/cancel-paid-hotel", desc: "Cancel paid hotel" },
    ],
  },
  {
    title: "Payments — Tours",
    endpoints: [
      { method: "POST", path: "/payment/v1/payment/package", desc: "Tour payment" },
    ],
  },
  {
    title: "Payments — Insurance",
    endpoints: [
      { method: "POST", path: "/payment/v1/payment/insurance", desc: "Insurance payment" },
    ],
  },
  {
    title: "Payments — PackagePro",
    endpoints: [
      { method: "POST", path: "/payment/v1/payment/nobi-package", desc: "Package payment" },
      { method: "POST", path: "/payment/v1/payment/nobi-package-reschedule", desc: "Reschedule payment" },
      { method: "POST", path: "/payment/v1/payment/nobi-package/:id/cancellation-refund", desc: "Cancel & refund" },
      { method: "POST", path: "/payment/v1/payment/nobi-protocol", desc: "Protocol payment" },
      { method: "POST", path: "/payment/v1/payment/nobi/payout-quote", desc: "Payout quote" },
      { method: "POST", path: "/payment/v1/payment/nobi/payout-to-intraverse-wallet", desc: "Payout to wallet" },
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
    <>
      <SEO
        title="API Reference | Intraverse Docs"
        description="Complete Intraverse API reference. Every endpoint, parameter, and response field documented with examples and live testing."
        canonical="https://intraverse.africa/docs/reference"
      />
      <DocsLayout
      slug="reference"
      title="Complete Endpoint Reference"
      subtitle="Every endpoint, every parameter, every response field - documented with examples and live testing."
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
          <li><InlineCode>X-RateLimit-Limit</InlineCode> - request quota for the window</li>
          <li><InlineCode>X-RateLimit-Remaining</InlineCode> - requests left in the window</li>
          <li><InlineCode>X-RateLimit-Reset</InlineCode> - Unix timestamp when the window resets</li>
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
    </>
  );
}
