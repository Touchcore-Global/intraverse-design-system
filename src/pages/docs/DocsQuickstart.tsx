import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { ArrowRight } from "lucide-react";
import { DocsLayout, DocsSection } from "@/components/docs/DocsLayout";
import { CodeBlock, InlineCode } from "@/components/docs/CodeBlock";
import { MultiLangCodeBlock, buildHttpSamples } from "@/components/docs/MultiLangCodeBlock";
import { Callout } from "@/components/docs/Callout";

const SANDBOX = "https://dev.intraversewebservices.com/api";

const toc = [
  { id: "prerequisites", label: "Prerequisites" },
  { id: "step-1", label: "Step 1 - Create Account" },
  { id: "step-2", label: "Step 2 - API Key & Token" },
  { id: "step-3", label: "Step 3 - Search Flights" },
  { id: "step-4", label: "Step 4 - Book a Flight" },
  { id: "next", label: "What's Next" },
  { id: "troubleshooting", label: "Troubleshooting" },
];

export default function DocsQuickstart() {
  return (
    <>
      <SEO
        title="Quickstart | Intraverse Docs"
        description="From zero to your first Intraverse API call in under 10 minutes. Create an account, authenticate, and run your first flight search end-to-end."
        canonical="https://intraverse.africa/docs/quickstart"
      />
      <DocsLayout
      slug="quickstart"
      title="From Zero to First API Call in Under 10 Minutes"
      subtitle="This guide walks you through creating an account, authenticating, and making your first flight search - the entire process, with nothing skipped."
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
        <p>
          The sandbox base URL for all examples below is{" "}
          <InlineCode>{SANDBOX}</InlineCode>. The API is split across service
          namespaces: <InlineCode>/main/v1/</InlineCode>,{" "}
          <InlineCode>/product/v1/</InlineCode>,{" "}
          <InlineCode>/product/v2/</InlineCode>,{" "}
          <InlineCode>/payment/v1/</InlineCode>,{" "}
          <InlineCode>/payment/v2/</InlineCode>, and{" "}
          <InlineCode>/notification/v1/</InlineCode>.
        </p>
      </DocsSection>

      <DocsSection id="step-1" title="Step 1 - Create a Developer Account">
        <p>
          Sign up at <a href="https://www.intraverse.app/register" className="text-[hsl(var(--brand-blue))] hover:underline">intraverse.app/register</a>.
          Once registered, sign in to obtain your account access token - you'll
          use it to create your first API key in Step 2.
        </p>
        <Callout variant="warning" title="Keep your secrets safe">
          Store your credentials securely. Never share them publicly or commit them to version control.
        </Callout>
      </DocsSection>

      <DocsSection id="step-2" title="Step 2 - Create an API Key & Get a Token">
        <p>
          Authentication is a two-step process: first, create a long-lived API
          key (one-time setup), then exchange it for a short-lived access token
          on each session.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">Step 2a - Create an API Key</h3>
        <p>
          Use your account access token to create an API key. Choose{" "}
          <InlineCode>"Full"</InlineCode> for read + write or{" "}
          <InlineCode>"ReadOnly"</InlineCode> for read-only access.
        </p>
        <MultiLangCodeBlock
          samples={buildHttpSamples({
            method: "POST",
            url: `${SANDBOX}/main/v1/apikey`,
            headers: { Authorization: "Bearer YOUR_ACCOUNT_TOKEN" },
            auth: false,
            body: {
              scope: "Full",
              name: "My API Key",
            },
          })}
        />
        <p>
          The response returns a <InlineCode>clientId</InlineCode> and{" "}
          <InlineCode>clientSecret</InlineCode>. Store both securely - the
          secret is shown only once.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">Step 2b - Get an Access Token</h3>
        <p>Exchange your API key credentials for a bearer token. No auth header is required for this endpoint.</p>
        <MultiLangCodeBlock
          samples={buildHttpSamples({
            method: "POST",
            url: `${SANDBOX}/main/v1/apikey/token`,
            auth: false,
            body: {
              clientId: "your_client_id_here",
              clientSecret: "your_client_secret_here",
            },
          })}
        />
        <CodeBlock
          label="JSON"
          code={`{
  "token": "eyJhbGciOiJSUzI1NiIs...",
  "expiresIn": 3600
}`}
        />
        <p>
          Cache the <InlineCode>token</InlineCode> and reuse it until it
          expires. Tokens are valid for 60 minutes by default.
        </p>
      </DocsSection>

      <DocsSection id="step-3" title="Step 3 - Search for Flights">
        <p>
          The v2 search endpoint queries every available source automatically -
          you don't need to specify suppliers. Use the legacy v1 endpoint
          (<InlineCode>/product/v1/flight/search</InlineCode>) when you need
          fine-grained control over which inventory sources to query.
        </p>
        <MultiLangCodeBlock
          samples={buildHttpSamples({
            method: "POST",
            url: `${SANDBOX}/product/v2/flight/search`,
            body: {
              originDestinations: [
                {
                  from: "LOS",
                  to: "LHR",
                  departure: { date: "2026-07-09" },
                },
                {
                  from: "LHR",
                  to: "LOS",
                  departure: { date: "2026-07-20" },
                },
              ],
              passengers: { adult: 1 },
              cabinClass: ["Economy"],
            },
          })}
        />
        <Callout variant="info" title="v1 vs v2">
          The v2 search endpoint searches across all available sources
          automatically. The v1 endpoint requires a{" "}
          <InlineCode>"supplier"</InlineCode> array specifying which sources
          to query (e.g. <InlineCode>"AmadeusOne"</InlineCode>,{" "}
          <InlineCode>"TravXTwo"</InlineCode>).
        </Callout>
      </DocsSection>

      <DocsSection id="step-4" title="Step 4 - Book a Flight">
        <p>
          Take the <InlineCode>supplier</InlineCode> string and one of the{" "}
          <InlineCode>offers</InlineCode> from your search response and
          submit a booking. Passenger type uses airline codes:{" "}
          <InlineCode>"ADT"</InlineCode> (adult),{" "}
          <InlineCode>"CHD"</InlineCode> (child),{" "}
          <InlineCode>"INF"</InlineCode> (infant).
        </p>
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
                  phone: [
                    {
                      countryCode: "234",
                      location: "NG",
                      number: "8012345678",
                    },
                  ],
                  email: "customer@example.com",
                },
              ],
            },
          })}
        />
      </DocsSection>

      <DocsSection id="next" title="What's Next">
        <div className="grid sm:grid-cols-2 gap-3 not-prose">
          {[
            { href: "/docs/flights", title: "Flights", desc: "Full flight booking lifecycle" },
            { href: "/docs/payments", title: "Payments", desc: "Wallet, cards, and ticket payment" },
            { href: "/docs/webhooks", title: "Webhooks", desc: "Real-time event notifications" },
            { href: "/docs/reference", title: "API Reference", desc: "Full endpoint catalog" },
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
            <InlineCode>401 Unauthorized</InlineCode> - Token missing,
            malformed, or expired. Re-issue a token via{" "}
            <InlineCode>/main/v1/apikey/token</InlineCode>.
          </li>
          <li>
            <InlineCode>422 Unprocessable Entity</InlineCode> - Validation
            failed. Check the error message in the response body for the
            offending field.
          </li>
          <li>
            <InlineCode>429 Too Many Requests</InlineCode> - Rate limit
            exceeded. Back off and retry after a brief delay.
          </li>
        </ul>
      </DocsSection>
    </DocsLayout>
    </>
  );
}
