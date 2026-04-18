import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { DocsLayout, DocsSection } from "@/components/docs/DocsLayout";
import { CodeBlock, InlineCode } from "@/components/docs/CodeBlock";
import { Callout } from "@/components/docs/Callout";

const toc = [
  { id: "prerequisites", label: "Prerequisites" },
  { id: "step-1", label: "Step 1 — Create Account" },
  { id: "step-2", label: "Step 2 — Get Token" },
  { id: "step-3", label: "Step 3 — Search Flights" },
  { id: "step-4", label: "Step 4 — Book a Flight" },
  { id: "next", label: "What's Next" },
  { id: "troubleshooting", label: "Troubleshooting" },
];

export default function DocsQuickstart() {
  return (
    <DocsLayout
      slug="quickstart"
      title="From Zero to First API Call in Under 10 Minutes"
      subtitle="This guide walks you through creating an account, authenticating, and making your first flight search — the entire process, with nothing skipped."
      toc={toc}
    >
      <DocsSection id="prerequisites" title="Prerequisites">
        <Callout variant="info" title="Before you begin">
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>A working understanding of REST APIs and JSON</li>
            <li>An HTTP client tool (cURL, Postman, Insomnia, or similar)</li>
            <li>A programming environment of your choice (Node, Python, PHP, etc.)</li>
          </ul>
        </Callout>
      </DocsSection>

      <DocsSection id="step-1" title="Step 1 — Create a Developer Account">
        <p>
          Sign up at <a href="https://www.intraverse.app/register" className="text-[hsl(var(--brand-blue))] hover:underline">intraverse.app/register</a>.
          You'll instantly receive sandbox credentials — a <InlineCode>client_id</InlineCode> and a <InlineCode>client_secret</InlineCode> — usable
          against the sandbox environment with no card or approval required. Production credentials are issued once you've completed onboarding.
        </p>
        <Callout variant="warning" title="Keep your secrets safe">
          Store your credentials securely. Never share them publicly or commit them to version control.
        </Callout>
      </DocsSection>

      <DocsSection id="step-2" title="Step 2 — Get an Access Token">
        <p>Exchange your client credentials for a short-lived bearer token using OAuth 2.0 client credentials grant.</p>
        <CodeBlock
          label="HTTP"
          code={`POST https://sandbox.api.intraverse.com/v1/auth/token
Content-Type: application/x-www-form-urlencoded

grant_type=client_credentials
&client_id=YOUR_CLIENT_ID
&client_secret=YOUR_CLIENT_SECRET`}
        />
        <CodeBlock
          label="JSON"
          code={`{
  "access_token": "eyJhbGciOiJSUzI1NiIs...",
  "token_type": "bearer",
  "expires_in": 3600
}`}
        />
        <p>
          Cache the <InlineCode>access_token</InlineCode> and reuse it until it expires. Tokens are valid for 60 minutes by default.
        </p>
      </DocsSection>

      <DocsSection id="step-3" title="Step 3 — Search for Flights">
        <p>Send a flight search across aggregated GDS, NDC, and consolidator inventory.</p>
        <CodeBlock
          label="HTTP"
          code={`POST https://sandbox.api.intraverse.com/v1/flights/search
Authorization: Bearer YOUR_ACCESS_TOKEN
Content-Type: application/json

{
  "origin": "LOS",
  "destination": "DXB",
  "departure_date": "2026-06-15",
  "passengers": { "adults": 1 },
  "cabin_class": "economy"
}`}
        />
        <CodeBlock
          label="JSON"
          code={`{
  "search_id": "srch_abc123",
  "currency": "NGN",
  "results_count": 12,
  "results": [
    {
      "offer_id": "offer_xyz789",
      "source": "amadeus",
      "airline": "Emirates",
      "flight_number": "EK786",
      "total_price": 485000,
      "departure": "2026-06-15T23:55:00+01:00",
      "arrival": "2026-06-16T09:45:00+04:00",
      "cabin_class": "economy",
      "refundable": true,
      "baggage": { "checked": "30kg", "cabin": "7kg" }
    }
  ]
}`}
        />
      </DocsSection>

      <DocsSection id="step-4" title="Step 4 — Book a Flight">
        <p>Use the <InlineCode>offer_id</InlineCode> from your search to create a booking.</p>
        <CodeBlock
          label="HTTP"
          code={`POST https://sandbox.api.intraverse.com/v1/bookings
Authorization: Bearer YOUR_ACCESS_TOKEN
Content-Type: application/json

{
  "offer_id": "offer_xyz789",
  "passengers": [
    {
      "first_name": "Chinedu",
      "last_name": "Ike",
      "date_of_birth": "1990-01-15",
      "passport_number": "A12345678",
      "passport_expiry": "2030-01-15",
      "nationality": "NG"
    }
  ],
  "contact": {
    "email": "customer@example.com",
    "phone": "+2348012345678"
  }
}`}
        />
        <CodeBlock
          label="JSON"
          code={`{
  "booking_id": "bkg_def456",
  "status": "confirmed",
  "pnr": "ABC123",
  "ticket_number": "160-1234567890",
  "total_charged": 485000,
  "currency": "NGN"
}`}
        />
      </DocsSection>

      <DocsSection id="next" title="What's Next">
        <div className="grid sm:grid-cols-2 gap-3 not-prose">
          {[
            { href: "/docs/hotels", title: "Hotels", desc: "Search and book hotel inventory" },
            { href: "/docs/tours", title: "Tours", desc: "Browse and book experiences" },
            { href: "/docs/webhooks", title: "Webhooks", desc: "Real-time event notifications" },
            { href: "/docs/payments", title: "Payments", desc: "Wallet, settlement, and BNPL" },
          ].map((c) => (
            <Link
              key={c.href}
              to={c.href}
              className="group p-5 border border-border rounded-lg hover:border-[hsl(var(--brand-blue))] transition-colors"
            >
              <div className="font-semibold text-foreground group-hover:text-[hsl(var(--brand-blue))]">
                {c.title}
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
              <span className="mt-2 inline-flex items-center gap-1 text-xs text-[hsl(var(--brand-blue))]">
                Read <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          ))}
        </div>
      </DocsSection>

      <DocsSection id="troubleshooting" title="Troubleshooting">
        <ul className="list-none space-y-3">
          <li>
            <InlineCode>401 Unauthorized</InlineCode> — Token missing, malformed, or expired. Re-issue a token via{" "}
            <InlineCode>/v1/auth/token</InlineCode>.
          </li>
          <li>
            <InlineCode>422 Unprocessable Entity</InlineCode> — Validation failed. Check the <InlineCode>errors</InlineCode> array in the response
            body for the offending field.
          </li>
          <li>
            <InlineCode>429 Too Many Requests</InlineCode> — Rate limit exceeded. Back off using the{" "}
            <InlineCode>X-RateLimit-Reset</InlineCode> header.
          </li>
        </ul>
      </DocsSection>
    </DocsLayout>
  );
}
