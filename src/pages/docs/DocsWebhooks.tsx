import { DocsLayout, DocsSection } from "@/components/docs/DocsLayout";
import { CodeBlock, InlineCode } from "@/components/docs/CodeBlock";
import { Callout } from "@/components/docs/Callout";
import { EndpointHeading } from "@/components/docs/MethodBadge";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "setup", label: "Setting Up" },
  { id: "events", label: "Available Events" },
  { id: "payload", label: "Payload Format" },
  { id: "security", label: "Webhook Security" },
  { id: "retries", label: "Retry Policy" },
  { id: "best-practices", label: "Best Practices" },
  { id: "errors", label: "Common Errors" },
];

const eventGroups: { title: string; events: [string, string][] }[] = [
  {
    title: "Booking Events",
    events: [
      ["booking.created", "A booking has been created and is awaiting confirmation."],
      ["booking.confirmed", "The supplier has confirmed the booking."],
      ["booking.modified", "Booking details (dates, passengers, itinerary) have changed."],
      ["booking.cancelled", "The booking has been cancelled."],
      ["booking.failed", "The booking failed to complete."],
    ],
  },
  {
    title: "Ticket Events",
    events: [
      ["ticket.issued", "A flight ticket has been issued by the airline."],
      ["ticket.voided", "An issued ticket has been voided within the void window."],
      ["ticket.refunded", "A ticket has been refunded."],
    ],
  },
  {
    title: "Payment Events",
    events: [
      ["payment.received", "Funds have been received and credited."],
      ["payment.failed", "A charge attempt failed."],
      ["payment.refunded", "A refund has been processed."],
    ],
  },
  {
    title: "Schedule Events",
    events: [
      ["schedule.changed", "The airline or supplier changed the schedule."],
      ["schedule.cancelled", "The flight or service has been cancelled by the operator."],
    ],
  },
];

export default function DocsWebhooks() {
  return (
    <DocsLayout
      slug="webhooks"
      title="Real-Time Events, Delivered to You"
      subtitle="Receive instant notifications when bookings are confirmed, tickets are issued, payments settle, schedules change, or cancellations occur. Build event-driven systems without polling."
      toc={toc}
    >
      <DocsSection id="overview" title="Overview">
        <p>
          Polling is wasteful and slow. Webhooks let Intraverse push events to a URL you control the moment something happens — usually
          within seconds. Use webhooks for any operation where state can change asynchronously: ticket issuance, schedule changes,
          settlement, and refunds.
        </p>
      </DocsSection>

      <DocsSection id="setup" title="Setting Up Webhooks">
        <EndpointHeading method="POST" path="/v1/webhooks" />
        <p>Register a webhook endpoint with one or more event subscriptions.</p>
        <CodeBlock
          label="JSON"
          code={`POST /v1/webhooks
{
  "url": "https://yourapp.com/webhooks/intraverse",
  "events": ["booking.confirmed", "ticket.issued", "payment.received"],
  "secret": "whsec_a_long_random_string"
}`}
        />

        <EndpointHeading method="GET" path="/v1/webhooks" />
        <p>List all webhook endpoints registered for your account.</p>

        <EndpointHeading method="PATCH" path="/v1/webhooks/{webhook_id}" />
        <p>Update a webhook URL, event subscriptions, or rotate the secret.</p>

        <EndpointHeading method="DELETE" path="/v1/webhooks/{webhook_id}" />
        <p>Delete a webhook endpoint.</p>
      </DocsSection>

      <DocsSection id="events" title="Available Events">
        <div className="my-4 space-y-6">
          {eventGroups.map((g) => (
            <div key={g.title}>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2" style={{ fontSize: "13px" }}>
                {g.title}
              </h3>
              <div className="overflow-x-auto rounded-lg border border-border">
                <table className="w-full text-sm">
                  <tbody>
                    {g.events.map(([name, desc], i) => (
                      <tr key={name} className={i % 2 === 0 ? "bg-white" : "bg-[#F9FAFB]"}>
                        <td className="px-4 py-2.5 align-top w-[260px]">
                          <code className="font-mono text-[13px] text-foreground">{name}</code>
                        </td>
                        <td className="px-4 py-2.5 align-top text-muted-foreground">{desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </DocsSection>

      <DocsSection id="payload" title="Webhook Payload Format">
        <CodeBlock
          label="JSON"
          code={`{
  "webhook_id": "wh_abc123",
  "event": "booking.confirmed",
  "timestamp": "2026-06-15T10:24:55Z",
  "data": {
    "booking_id": "bkg_def456",
    "pnr": "ABC123",
    "status": "confirmed",
    "total_charged": 485000,
    "currency": "NGN"
  }
}`}
        />
      </DocsSection>

      <DocsSection id="security" title="Webhook Security">
        <p>
          Every delivery includes an <InlineCode>X-Intraverse-Signature</InlineCode> header containing an HMAC-SHA256 signature of the raw
          request body, computed with your webhook secret.
        </p>
        <CodeBlock
          label="javascript"
          code={`const crypto = require('crypto');

function verifyWebhook(payload, signature, secret) {
  const expected = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex');
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expected)
  );
}`}
        />
        <Callout variant="warning">Always verify the webhook signature before processing the event.</Callout>
      </DocsSection>

      <DocsSection id="retries" title="Retry Policy">
        <p>
          If your endpoint returns a non-2xx response or times out, Intraverse retries on this schedule:
        </p>
        <div className="not-prose my-6 flex flex-wrap items-center gap-2">
          {["1 min", "5 min", "30 min", "2 hrs", "24 hrs"].map((t, i, arr) => (
            <div key={t} className="flex items-center gap-2">
              <div className="px-3 py-1.5 rounded-md bg-[#F0F5FC] border border-border text-xs font-medium text-foreground">
                {t}
              </div>
              {i < arr.length - 1 && <span className="text-muted-foreground">→</span>}
            </div>
          ))}
        </div>
        <p>After the final retry, the delivery is marked failed and surfaced in your dashboard.</p>
      </DocsSection>

      <DocsSection id="best-practices" title="Best Practices">
        <ul className="list-disc list-inside space-y-2">
          <li>Process webhooks asynchronously — return 200 OK immediately, then enqueue work.</li>
          <li>Deduplicate by <InlineCode>webhook_id</InlineCode> — retries can deliver the same event twice.</li>
          <li>Always verify the HMAC signature before trusting the payload.</li>
          <li>Use a queue (SQS, Redis, etc.) so traffic spikes don't drop events.</li>
          <li>Monitor delivery success rates and alert on consecutive failures.</li>
        </ul>
      </DocsSection>

      <DocsSection id="errors" title="Common Errors">
        <ul className="space-y-3">
          <li><InlineCode>INVALID_URL</InlineCode> — URL is not reachable or not HTTPS.</li>
          <li><InlineCode>SIGNATURE_MISMATCH</InlineCode> — Computed signature doesn't match. Check your secret.</li>
          <li><InlineCode>ENDPOINT_FAILING</InlineCode> — Endpoint has returned non-2xx for the past N deliveries. Investigate before more events queue.</li>
        </ul>
      </DocsSection>
    </DocsLayout>
  );
}
