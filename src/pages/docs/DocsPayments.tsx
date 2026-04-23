import { DocsLayout, DocsSection } from "@/components/docs/DocsLayout";
import { CodeBlock, InlineCode } from "@/components/docs/CodeBlock";
import { Callout } from "@/components/docs/Callout";
import { EndpointHeading } from "@/components/docs/MethodBadge";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "models", label: "Payment Models" },
  { id: "endpoints", label: "Endpoints" },
  { id: "bnpl", label: "Odiopay BNPL" },
  { id: "currency", label: "Currency & Settlement" },
  { id: "pci", label: "PCI Compliance" },
  { id: "errors", label: "Common Errors" },
];

const models = [
  {
    title: "Partner-Collected",
    desc: "You collect payment from your customer through your own payment processor and settle the net amount with Intraverse.",
    best: "Partners with existing payment infrastructure.",
  },
  {
    title: "Intraverse-Collected",
    desc: "Intraverse collects payment directly from the end customer via cards, bank transfer, or mobile money. We handle PCI and reconciliation.",
    best: "New integrations and partners without payment infrastructure.",
  },
  {
    title: "Hybrid",
    desc: "Different payment methods for different products. For example, you collect for flights but Intraverse processes BNPL for hotels.",
    best: "Mature partners with complex flows.",
  },
];

export default function DocsPayments() {
  return (
    <DocsLayout
      slug="payments"
      title="Process Payments and Settle Travel"
      subtitle="Handle payment processing, wallet management, and optional Odiopay BNPL integration through a unified payments API. PCI-compliant. BSP-settled. Built for the realities of African payment rails."
      toc={toc}
    >
      <DocsSection id="overview" title="Overview">
        <p>
          The Payments API supports both directions of money movement: you fund a wallet at Intraverse from which bookings are charged,
          or Intraverse collects from your end customer and settles to you. Either way, the booking-side API stays identical.
        </p>
      </DocsSection>

      <DocsSection id="models" title="Payment Models">
        <div className="not-prose grid md:grid-cols-3 gap-4 my-6">
          {models.map((m) => (
            <div key={m.title} className="p-5 border border-border rounded-lg bg-card">
              <h3 className="h3-global text-foreground" style={{ fontSize: "16px" }}>{m.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
              <p className="mt-3 text-xs text-muted-foreground">
                <span className="font-semibold text-foreground">Best for:</span> {m.best}
              </p>
            </div>
          ))}
        </div>
      </DocsSection>

      <DocsSection id="endpoints" title="Endpoints">
        <EndpointHeading method="GET" path="/v1/wallet/balance" />
        <p>Get the current wallet balance and pending settlements.</p>

        <EndpointHeading method="POST" path="/v1/wallet/fund" />
        <p>Initiate a wallet top-up via supported funding methods.</p>

        <EndpointHeading method="POST" path="/v1/payments" />
        <p>Charge a payment for a booking. Required when not using wallet auto-debit.</p>

        <EndpointHeading method="GET" path="/v1/payments/{payment_id}" />
        <p>Retrieve a payment by ID, including current status and reconciliation details.</p>

        <EndpointHeading method="POST" path="/v1/payments/{payment_id}/refund" />
        <p>Refund a payment in full or in part.</p>

        <EndpointHeading method="GET" path="/v1/refunds/{refund_id}" />
        <p>Track the status of an issued refund.</p>
      </DocsSection>

      <DocsSection id="bnpl" title="Odiopay BNPL Integration">
        <p className="text-foreground font-semibold" style={{ fontSize: "16px" }}>
          Buy Now, Pay Later as a Native Payment Option
        </p>
        <p>
          Enable Odiopay on your account to offer BNPL at checkout. After eligibility check, the customer selects an instalment plan and
          we manage collection over the agreed term.
        </p>

        <EndpointHeading method="POST" path="/v1/payments/bnpl/eligibility" />
        <p>Check if a customer qualifies for BNPL on a given booking.</p>
        <CodeBlock
          label="JSON"
          code={`POST /v1/payments/bnpl/eligibility
{
  "booking_id": "bkg_def456",
  "customer": {
    "email": "customer@example.com",
    "phone": "+2348012345678",
    "bvn": "12345678901"
  }
}`}
        />
        <CodeBlock
          label="JSON"
          code={`{
  "eligible": true,
  "plans": [
    { "id": "plan_3m", "instalments": 3, "monthly_amount": 165000, "total": 495000 },
    { "id": "plan_6m", "instalments": 6, "monthly_amount": 87500, "total": 525000 }
  ]
}`}
        />

        <EndpointHeading method="POST" path="/v1/payments/bnpl/create" />
        <p>Create a BNPL order against an approved plan.</p>
      </DocsSection>

      <DocsSection id="currency" title="Currency and Settlement">
        <p>
          All wallet balances and bookings are denominated in NGN by default unless you've enabled multi-currency. Settlement to partners
          runs daily by 18:00 WAT for transactions completed before 14:00 WAT the same day. Statements are available via the dashboard
          and the <InlineCode>/v1/wallet/transactions</InlineCode> endpoint.
        </p>
      </DocsSection>

      <DocsSection id="pci" title="PCI Compliance">
        <p>
          Partner-collected models keep PCI scope on your processor. Intraverse-collected models keep PCI scope on Intraverse — we
          process card data through certified providers and never store full PANs.
        </p>
        <Callout variant="warning">Never send raw card numbers through the Intraverse API.</Callout>
      </DocsSection>

      <DocsSection id="errors" title="Common Errors">
        <ul className="space-y-3">
          <li><InlineCode>INSUFFICIENT_WALLET_BALANCE</InlineCode> — Top up the wallet before retrying.</li>
          <li><InlineCode>PAYMENT_DECLINED</InlineCode> — Card or bank declined the charge.</li>
          <li><InlineCode>BNPL_NOT_ELIGIBLE</InlineCode> — Customer does not qualify for BNPL on this booking.</li>
          <li><InlineCode>REFUND_NOT_ALLOWED</InlineCode> — Refund window passed or fare rules forbid it.</li>
          <li><InlineCode>SETTLEMENT_PENDING</InlineCode> — Settlement is queued and will complete in the next cycle.</li>
        </ul>
      </DocsSection>
    </DocsLayout>
  );
}
