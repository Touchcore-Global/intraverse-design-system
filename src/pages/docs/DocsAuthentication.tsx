import { DocsLayout, DocsSection } from "@/components/docs/DocsLayout";
import { CodeBlock, InlineCode } from "@/components/docs/CodeBlock";
import { MultiLangCodeBlock, buildHttpSamples } from "@/components/docs/MultiLangCodeBlock";
import { Callout } from "@/components/docs/Callout";

const SANDBOX = "https://dev.intraversewebservices.com/api";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "credentials", label: "Account & API Keys" },
  { id: "create-key", label: "1. Create an API Key" },
  { id: "get-token", label: "2. Generate a Token" },
  { id: "use-token", label: "3. Use the Token" },
  { id: "refresh", label: "Refresh Strategy" },
  { id: "scopes", label: "API Key Scopes" },
  { id: "security", label: "Security Best Practices" },
  { id: "environments", label: "Environments" },
  { id: "errors", label: "Common Errors" },
];

const scopes: [string, string][] = [
  ["Full", "Read and write access to all endpoints permitted by your account."],
  ["ReadOnly", "Read-only access — search, list, and inspect resources without making changes."],
];

export default function DocsAuthentication() {
  return (
    <DocsLayout
      slug="authentication"
      title="Secure, Standard, Simple"
      subtitle="The Intraverse API uses API Key authentication with short-lived bearer tokens. This guide covers everything from creating your first API key to managing token refresh in production."
      toc={toc}
    >
      <DocsSection id="overview" title="Overview">
        <p>
          Authentication is a two-step process. First, create a long-lived API
          key (one-time setup) using your account access token. Then exchange
          your API key's <InlineCode>clientId</InlineCode> and{" "}
          <InlineCode>clientSecret</InlineCode> for a short-lived bearer token,
          and include that token on every subsequent request. This is a
          server-to-server flow — your <InlineCode>clientSecret</InlineCode>{" "}
          should never be exposed to a browser or mobile client.
        </p>
      </DocsSection>

      <DocsSection id="credentials" title="Account & API Keys">
        <p>
          You'll need an Intraverse account first — sign up at{" "}
          <a href="https://www.intraverse.app/register" className="text-[hsl(var(--brand-blue))] hover:underline">
            intraverse.app/register
          </a>
          . After signing in, you can create one or more API keys, each with
          its own scope. Sandbox and production credentials are{" "}
          <strong>not interchangeable</strong>.
        </p>
        <Callout variant="warning">
          Never share your <InlineCode>clientSecret</InlineCode> or commit it
          to version control. The secret is shown only once when the key is
          created. Use environment variables or a secrets manager.
        </Callout>
      </DocsSection>

      <DocsSection id="create-key" title="1. Create an API Key">
        <p>
          Authenticated with your account access token, create a new API key.
          Choose a scope of <InlineCode>"Full"</InlineCode> or{" "}
          <InlineCode>"ReadOnly"</InlineCode>.
        </p>
        <MultiLangCodeBlock
          samples={buildHttpSamples({
            method: "POST",
            url: `${SANDBOX}/main/v1/apikey`,
            headers: { Authorization: "Bearer YOUR_ACCOUNT_TOKEN" },
            auth: false,
            body: {
              scope: "Full",
              name: "My Production Key",
            },
          })}
        />
        <p>
          The response returns a <InlineCode>clientId</InlineCode> and{" "}
          <InlineCode>clientSecret</InlineCode>. Store both immediately — the
          secret cannot be retrieved later.
        </p>
      </DocsSection>

      <DocsSection id="get-token" title="2. Generate an Access Token">
        <p>
          Exchange your API key credentials for a short-lived bearer token. No{" "}
          <InlineCode>Authorization</InlineCode> header is required for this
          endpoint.
        </p>
        <MultiLangCodeBlock
          samples={buildHttpSamples({
            method: "POST",
            url: `${SANDBOX}/main/v1/apikey/token`,
            auth: false,
            body: {
              clientId: "your_client_id",
              clientSecret: "your_client_secret",
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
      </DocsSection>

      <DocsSection id="use-token" title="3. Use the Token">
        <CodeBlock label="HTTP" code={`Authorization: Bearer eyJhbGciOiJSUzI1NiIs...`} />
        <p>Include this header on every authenticated request to the API.</p>
      </DocsSection>

      <DocsSection id="refresh" title="Token Refresh Strategy">
        <p>
          Tokens are valid for the duration returned in{" "}
          <InlineCode>expiresIn</InlineCode> (seconds — typically 60 minutes).
          Cache the token in memory or a fast store (Redis, Memcached) and
          refresh proactively when fewer than 5 minutes remain. Do not request
          a new token for every API call.
        </p>
        <Callout variant="warning">Do not request a new token for every API call.</Callout>
      </DocsSection>

      <DocsSection id="scopes" title="API Key Scopes">
        <p>
          Each API key is created with a scope that determines what it can do.
          Use the most restrictive scope that satisfies your use case.
        </p>
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
          <li>Store <InlineCode>clientSecret</InlineCode> in an encrypted secrets manager — never in code or config files.</li>
          <li>Always use HTTPS. The API rejects plain HTTP requests.</li>
          <li>Rotate API keys regularly, and immediately if compromise is suspected.</li>
          <li>Use a separate API key per environment and per integration so you can revoke a single key without disrupting others.</li>
          <li>Monitor your API logs for unexpected IP addresses or request volume.</li>
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
                <td className="px-4 py-2.5"><code className="font-mono text-[13px]">{SANDBOX}</code></td>
                <td className="px-4 py-2.5 text-muted-foreground">Available now — sign up to create a key</td>
              </tr>
              <tr className="bg-[#F9FAFB]">
                <td className="px-4 py-2.5">Production</td>
                <td className="px-4 py-2.5 text-muted-foreground italic">To be confirmed</td>
                <td className="px-4 py-2.5 text-muted-foreground">Issued after onboarding</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DocsSection>

      <DocsSection id="errors" title="Common Errors">
        <ul className="space-y-3">
          <li><InlineCode>401 Unauthorized</InlineCode> — Token expired or missing. Re-issue a token via <InlineCode>/main/v1/apikey/token</InlineCode>.</li>
          <li><InlineCode>403 Forbidden</InlineCode> — The API key's scope does not allow this action (e.g. a <InlineCode>ReadOnly</InlineCode> key calling a write endpoint).</li>
          <li><InlineCode>429 Too Many Requests</InlineCode> — Rate limit hit. Cache and reuse tokens until expiry.</li>
        </ul>
      </DocsSection>
    </DocsLayout>
  );
}
