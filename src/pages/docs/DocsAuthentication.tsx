import { DocsLayout, DocsSection } from "@/components/docs/DocsLayout";
import { CodeBlock, InlineCode } from "@/components/docs/CodeBlock";
import { MultiLangCodeBlock, buildHttpSamples } from "@/components/docs/MultiLangCodeBlock";
import { Callout } from "@/components/docs/Callout";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "credentials", label: "Getting Credentials" },
  { id: "request", label: "Token Request" },
  { id: "response", label: "Token Response" },
  { id: "using", label: "Using the Token" },
  { id: "refresh", label: "Refresh Strategy" },
  { id: "scopes", label: "Scopes" },
  { id: "security", label: "Security Best Practices" },
  { id: "environments", label: "Environments" },
  { id: "errors", label: "Common Errors" },
];

const scopes: [string, string][] = [
  ["flights:search", "Search aggregated flight inventory"],
  ["flights:book", "Create flight bookings and issue tickets"],
  ["flights:manage", "Modify or cancel existing flight bookings"],
  ["hotels:search", "Search hotel inventory across suppliers"],
  ["hotels:book", "Create hotel bookings"],
  ["hotels:manage", "Modify or cancel hotel bookings"],
  ["tours:search", "Search tour and activity inventory"],
  ["tours:book", "Create tour bookings"],
  ["payments:process", "Charge wallets, refund payments, manage settlement"],
  ["webhooks:manage", "Register, update, and delete webhook endpoints"],
];

export default function DocsAuthentication() {
  return (
    <DocsLayout
      slug="authentication"
      title="Secure, Standard, Simple"
      subtitle="The Intraverse API uses OAuth 2.0 client credentials for server-to-server authentication. This guide covers everything from getting your first token to managing token refresh in production."
      toc={toc}
    >
      <DocsSection id="overview" title="Overview">
        <p>
          Every request to the Intraverse API must be authenticated with a short-lived bearer token. Tokens are obtained via the OAuth 2.0
          client credentials grant, scoped to the operations your integration needs, and rotated automatically. This is a server-to-server
          flow — credentials should never be exposed to a browser or mobile client.
        </p>
      </DocsSection>

      <DocsSection id="credentials" title="Getting Your Credentials">
        <p>
          Sandbox credentials are issued instantly when you sign up. Production credentials are issued after onboarding and a brief
          compliance review. Sandbox and production credentials are <strong>not interchangeable</strong>.
        </p>
        <Callout variant="warning">
          Never share your <InlineCode>client_secret</InlineCode> or commit it to version control. Use environment variables or a
          secrets manager.
        </Callout>
      </DocsSection>

      <DocsSection id="request" title="Token Request">
        <MultiLangCodeBlock
          samples={buildHttpSamples({
            method: "POST",
            url: "https://sandbox.api.intraverse.com/v1/auth/token",
            auth: false,
            form: {
              grant_type: "client_credentials",
              client_id: "YOUR_CLIENT_ID",
              client_secret: "YOUR_CLIENT_SECRET",
              scope: "flights:search flights:book",
            },
          })}
        />
      </DocsSection>

      <DocsSection id="response" title="Token Response">
        <CodeBlock
          label="JSON"
          code={`{
  "access_token": "eyJhbGciOiJSUzI1NiIs...",
  "token_type": "bearer",
  "expires_in": 3600,
  "scope": "flights:search flights:book"
}`}
        />
      </DocsSection>

      <DocsSection id="using" title="Using the Token">
        <CodeBlock label="HTTP" code={`Authorization: Bearer eyJhbGciOiJSUzI1NiIs...`} />
        <p>Include this header on every authenticated request to the API.</p>
      </DocsSection>

      <DocsSection id="refresh" title="Token Refresh Strategy">
        <p>
          Tokens are valid for 60 minutes. Cache the token in memory or a fast store (Redis, Memcached) and refresh proactively when
          fewer than 5 minutes remain. Do not request a new token for every API call — you'll hit auth rate limits.
        </p>
        <Callout variant="warning">Do not request a new token for every API call.</Callout>
      </DocsSection>

      <DocsSection id="scopes" title="Scopes">
        <div className="my-6 overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#F3F4F6] text-left">
                <th className="px-4 py-2.5 font-semibold text-foreground">Scope</th>
                <th className="px-4 py-2.5 font-semibold text-foreground">Description</th>
              </tr>
            </thead>
            <tbody>
              {scopes.map(([s, d], i) => (
                <tr key={s} className={i % 2 === 0 ? "bg-white" : "bg-[#F9FAFB]"}>
                  <td className="px-4 py-2.5 align-top">
                    <code className="font-mono text-[13px] text-foreground">{s}</code>
                  </td>
                  <td className="px-4 py-2.5 align-top text-muted-foreground">{d}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DocsSection>

      <DocsSection id="security" title="Security Best Practices">
        <ul className="list-disc list-inside space-y-2">
          <li>Store <InlineCode>client_secret</InlineCode> in an encrypted secrets manager — never in code or config files.</li>
          <li>Always use HTTPS. The API rejects plain HTTP requests.</li>
          <li>Rotate credentials at least every 90 days, and immediately if compromise is suspected.</li>
          <li>Whitelist your server IP addresses in the dashboard for production credentials.</li>
          <li>Monitor your API logs for unexpected scopes, IP addresses, or request volume.</li>
          <li>Never expose credentials in client-side JavaScript, mobile binaries, or public repositories.</li>
        </ul>
      </DocsSection>

      <DocsSection id="environments" title="Environments">
        <div className="my-6 overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#F3F4F6] text-left">
                <th className="px-4 py-2.5 font-semibold text-foreground">Environment</th>
                <th className="px-4 py-2.5 font-semibold text-foreground">Base URL</th>
                <th className="px-4 py-2.5 font-semibold text-foreground">Credentials</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="px-4 py-2.5">Sandbox</td>
                <td className="px-4 py-2.5"><code className="font-mono text-[13px]">https://sandbox.api.intraverse.com/v1/</code></td>
                <td className="px-4 py-2.5 text-muted-foreground">Issued instantly on signup</td>
              </tr>
              <tr className="bg-[#F9FAFB]">
                <td className="px-4 py-2.5">Production</td>
                <td className="px-4 py-2.5"><code className="font-mono text-[13px]">https://api.intraverse.com/v1/</code></td>
                <td className="px-4 py-2.5 text-muted-foreground">Issued after onboarding</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DocsSection>

      <DocsSection id="errors" title="Common Errors">
        <ul className="space-y-3">
          <li><InlineCode>401 Unauthorized</InlineCode> — Token expired or missing. Re-issue a token.</li>
          <li><InlineCode>403 Forbidden</InlineCode> — Token is valid but lacks the required scope. Request the appropriate scope when issuing the token.</li>
          <li><InlineCode>429 Too Many Requests</InlineCode> — Token endpoint rate limit hit. Cache and reuse tokens until expiry.</li>
        </ul>
      </DocsSection>
    </DocsLayout>
  );
}
