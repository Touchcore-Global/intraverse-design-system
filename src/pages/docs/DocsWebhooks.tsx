import { DocsLayout, DocsSection } from "@/components/docs/DocsLayout";
import { CodeBlock, InlineCode } from "@/components/docs/CodeBlock";
import { Callout } from "@/components/docs/Callout";
import { EndpointHeading } from "@/components/docs/MethodBadge";
import { MultiLangCodeBlock, buildHttpSamples } from "@/components/docs/MultiLangCodeBlock";

const SANDBOX = "https://dev.intraversewebservices.com/api";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "register", label: "Register a Webhook" },
  { id: "manage", label: "Manage Webhooks" },
  { id: "lifecycle", label: "Activate / Suspend" },
  { id: "events", label: "Available Events" },
  { id: "ping", label: "Ping & Test" },
  { id: "payload", label: "Payload Format" },
  { id: "retries", label: "Retry Policy" },
  { id: "best-practices", label: "Best Practices" },
];

const knownEvents: [string, string][] = [
  ["order.flight.booking.success", "A flight booking was created and confirmed successfully."],
  ["order.flight.booking.cancel", "A flight booking was cancelled."],
];

export default function DocsWebhooks() {
  return (
    <DocsLayout
      slug="webhooks"
      title="Real-Time Events, Delivered to You"
      subtitle="Receive instant notifications when bookings are confirmed or cancelled. Build event-driven systems without polling."
      toc={toc}
    >
      <DocsSection id="overview" title="Overview">
        <p>
          Polling is wasteful and slow. Webhooks let Intraverse push events
          to a URL you control the moment something happens. Use webhooks for
          any operation where state can change asynchronously.
        </p>
        <p>
          All webhook endpoints are under the <InlineCode>/main/v1/webhook</InlineCode>{" "}
          namespace.
        </p>
      </DocsSection>

      <DocsSection id="register" title="Register a Webhook">
        <EndpointHeading method="POST" path="/main/v1/webhook" id="ep-register" />
        <p>Subscribe a URL to one or more event names.</p>
        <MultiLangCodeBlock
          samples={buildHttpSamples({
            method: "POST",
            url: `${SANDBOX}/main/v1/webhook`,
            body: {
              name: "My Webhook",
              url: "https://your-app.com/webhooks",
              events: [
                "order.flight.booking.success",
                "order.flight.booking.cancel",
              ],
            },
          })}
        />
      </DocsSection>

      <DocsSection id="manage" title="Manage Webhooks">
        <EndpointHeading method="GET" path="/main/v1/webhook" id="ep-list" />
        <p>List all webhooks registered for your account.</p>

        <EndpointHeading method="GET" path="/main/v1/webhook/:id" id="ep-get" />
        <p>Retrieve a single webhook by ID.</p>

        <EndpointHeading method="PATCH" path="/main/v1/webhook/:id" id="ep-update" />
        <p>Update a webhook's properties (e.g. rename it).</p>
        <CodeBlock label="JSON" code={`{ "name": "Updated Name" }`} />

        <EndpointHeading method="DELETE" path="/main/v1/webhook/:id" id="ep-delete" />
        <p>Delete a webhook permanently.</p>
      </DocsSection>

      <DocsSection id="lifecycle" title="Activate, Deactivate & Suspend">
        <EndpointHeading method="PATCH" path="/main/v1/webhook/activate/:id" id="ep-activate" />
        <p>Activate a webhook so it begins receiving events.</p>

        <EndpointHeading method="PATCH" path="/main/v1/webhook/deactivate/:id" id="ep-deactivate" />
        <p>Deactivate a webhook (no events will be delivered until reactivated).</p>

        <EndpointHeading method="PATCH" path="/main/v1/webhook/suspend/:id" id="ep-suspend" />
        <p>Suspend a webhook (typically used by ops to pause delivery temporarily).</p>
      </DocsSection>

      <DocsSection id="events" title="Available Events">
        <EndpointHeading method="GET" path="/main/v1/webhook/events" id="ep-events" />
        <p>
          Use this endpoint to fetch the current list of available webhook
          events. New events may be added over time — always query this
          endpoint for the latest list rather than hard-coding event names.
        </p>
        <p className="mt-4">Known events at the time of writing:</p>
        <div className="my-4 overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <tbody>
              {knownEvents.map(([name, desc], i) => (
                <tr key={name} className={i % 2 === 0 ? "bg-white" : "bg-[#F9FAFB]"}>
                  <td className="px-4 py-2.5 align-top w-[320px]">
                    <code className="font-mono text-[13px] text-foreground">{name}</code>
                  </td>
                  <td className="px-4 py-2.5 align-top text-muted-foreground">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DocsSection>

      <DocsSection id="ping" title="Ping a Webhook">
        <EndpointHeading method="GET" path="/main/v1/webhook/ping/:id" id="ep-ping" />
        <p>
          Test connectivity to your endpoint by triggering a ping delivery.
          Useful for verifying your URL is reachable and responding before
          relying on real events.
        </p>
      </DocsSection>

      <DocsSection id="payload" title="Webhook Payload Format">
        <p>
          Each delivery posts a JSON body to your URL containing the event
          name and the resource it relates to. Refer to the{" "}
          <a
            href="https://documenter.getpostman.com/view/17671608/2s9Yyqhgtj"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[hsl(var(--brand-blue))] hover:underline"
          >
            Postman collection
          </a>{" "}
          for the latest payload schema.
        </p>
      </DocsSection>

      <DocsSection id="retries" title="Retry Policy">
        <p>
          If your endpoint returns a non-2xx response or times out, the
          delivery is retried with backoff. Failed deliveries can be inspected
          and replayed from the dashboard.
        </p>
        <Callout variant="info">
          Always return <InlineCode>200 OK</InlineCode> as quickly as possible
          and process the event asynchronously to avoid timeouts.
        </Callout>
      </DocsSection>

      <DocsSection id="best-practices" title="Best Practices">
        <ul className="list-disc list-inside space-y-2">
          <li>Process webhooks asynchronously — return <InlineCode>200 OK</InlineCode> immediately, then enqueue work.</li>
          <li>Treat deliveries as at-least-once — deduplicate using a stable ID from the payload.</li>
          <li>Use HTTPS endpoints only.</li>
          <li>Use a queue (SQS, Redis, etc.) so traffic spikes don't drop events.</li>
          <li>Monitor delivery success rates and alert on consecutive failures.</li>
          <li>Query <InlineCode>/main/v1/webhook/events</InlineCode> regularly to discover newly available events.</li>
        </ul>
      </DocsSection>
    </DocsLayout>
  );
}
