import { DocsLayout, DocsSection } from "@/components/docs/DocsLayout";
import { SEO } from "@/components/SEO";
import { DocsPostmanLink } from "@/components/docs/DocsPostmanLink";
import { CodeBlock, InlineCode } from "@/components/docs/CodeBlock";
import { Callout } from "@/components/docs/Callout";
import { EndpointHeading } from "@/components/docs/MethodBadge";
import { MultiLangCodeBlock, buildHttpSamples } from "@/components/docs/MultiLangCodeBlock";

const SANDBOX = "https://dev.intraversewebservices.com/api";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "wallet", label: "Wallet" },
  { id: "ticket-payment", label: "Pay for Tickets" },
  { id: "transactions", label: "Transactions" },
  { id: "payouts", label: "Payouts" },
  { id: "bank-accounts", label: "Bank Accounts" },
  { id: "saved-cards", label: "Saved Cards" },
  { id: "virtual-accounts", label: "Virtual Accounts" },
  { id: "currency", label: "Currency & Units" },
  { id: "bnpl", label: "Odiopay BNPL" },
  { id: "errors", label: "Errors" },
];

export default function DocsPayments() {
  return (
    <>
      <SEO
        title="Payments API | Intraverse Docs"
        description="Wallet management, ticket payment, payouts, saved cards, and virtual accounts — built for the realities of African payment rails."
        canonical="https://intraverse.africa/docs/payments"
      />
      <DocsLayout
      slug="payments"
      title="Process Payments and Settle Travel"
      subtitle="Wallet management, ticket payment, payouts, saved cards, and virtual accounts - built for the realities of African payment rails."
      toc={toc}
    >
      <DocsSection id="overview" title="Overview">
        <p>
          Payment endpoints live under <InlineCode>/payment/v1/</InlineCode>{" "}
          and <InlineCode>/payment/v2/</InlineCode>. The v2 endpoints are
          newer and recommended where available; v1 endpoints remain
          supported.
        </p>
        <p>
          All examples below use the sandbox base URL{" "}
          <InlineCode>{SANDBOX}</InlineCode>.
        </p>
      </DocsSection>

      <DocsSection id="wallet" title="Wallet">
        <EndpointHeading method="GET" path="/payment/v1/wallet" id="ep-wallet-balance" />
        <p>Get the current wallet balance.</p>

        <EndpointHeading method="POST" path="/payment/v1/wallet" id="ep-wallet-topup" />
        <p>
          Initiate a wallet top-up. Supported{" "}
          <InlineCode>paymentMode</InlineCode> values:{" "}
          <InlineCode>"bank"</InlineCode>, <InlineCode>"card"</InlineCode>,{" "}
          <InlineCode>"ussd"</InlineCode>, <InlineCode>"qr"</InlineCode>,{" "}
          <InlineCode>"mobile_money"</InlineCode>,{" "}
          <InlineCode>"bank_transfer"</InlineCode>.
        </p>
        <MultiLangCodeBlock
          samples={buildHttpSamples({
            method: "POST",
            url: `${SANDBOX}/payment/v1/wallet`,
            body: {
              amount: 3000,
              paymentMode: "card",
              callbackUrl: "https://your-app.com/callback",
            },
          })}
        />

        <EndpointHeading method="POST" path="/payment/v1/wallet/lowbalance" id="ep-low-balance" />
        <p>Set a low-balance threshold so you're alerted before funds run out.</p>
        <CodeBlock label="JSON" code={`{ "amount": 200 }`} />

        <EndpointHeading method="GET" path="/payment/v1/wallet/transactions" id="ep-wallet-tx" />
        <p>List all wallet transactions for the account.</p>
      </DocsSection>

      <DocsSection id="ticket-payment" title="Pay for Tickets">
        <EndpointHeading method="POST" path="/payment/v1/payment/ticket" id="ep-pay-ticket-v1" />
        <p>
          Charge for an issued booking. Supported{" "}
          <InlineCode>paymentMode</InlineCode> values:{" "}
          <InlineCode>"Wallet"</InlineCode>,{" "}
          <InlineCode>"SavedCard"</InlineCode>,{" "}
          <InlineCode>"Bank"</InlineCode>, <InlineCode>"Card"</InlineCode>,{" "}
          <InlineCode>"Ussd"</InlineCode>, <InlineCode>"Qr"</InlineCode>,{" "}
          <InlineCode>"MobileMoney"</InlineCode>,{" "}
          <InlineCode>"BankTransfer"</InlineCode>.
        </p>
        <MultiLangCodeBlock
          samples={buildHttpSamples({
            method: "POST",
            url: `${SANDBOX}/payment/v1/payment/ticket`,
            body: {
              flightBookingId: "booking_id",
              paymentMode: "Wallet",
              callback: "http://your-app.com",
              deductCommission: false,
              pin: "123456",
            },
          })}
        />

        <EndpointHeading method="POST" path="/payment/v2/transaction/agentTicket" id="ep-pay-ticket-v2" />
        <p>v2 of the ticket payment flow - recommended for new integrations.</p>
        <CodeBlock
          label="JSON"
          code={`{
  "flightBookingId": "booking_id",
  "paymentMode": "Card",
  "callback": "http://your-app.com",
  "deductCommission": false
}`}
        />

        <EndpointHeading method="POST" path="/payment/v1/payment/invoiceCustomer" id="ep-invoice" />
        <p>Email an invoice to the customer for a booking.</p>
        <CodeBlock label="JSON" code={`{ "flightBookingId": "booking_id", "email": "customer@example.com" }`} />
      </DocsSection>

      <DocsSection id="transactions" title="Transactions">
        <EndpointHeading method="GET" path="/payment/v2/transaction/transactions" id="ep-tx-list" />
        <p>List transactions for the account.</p>

        <EndpointHeading method="GET" path="/payment/v2/transaction/transaction/:id" id="ep-tx-detail" />
        <p>Retrieve a single transaction by ID.</p>

        <EndpointHeading method="GET" path="/payment/v2/transaction/transactionReport?startDate=DATE&endDate=DATE" id="ep-tx-report" />
        <p>Generate a transaction report for a date range.</p>
      </DocsSection>

      <DocsSection id="payouts" title="Payouts">
        <EndpointHeading method="POST" path="/payment/v1/walletPayout/requestPayout" id="ep-payout-request" />
        <p>Request a payout from your wallet to a registered bank account.</p>

        <EndpointHeading method="GET" path="/payment/v1/walletPayout/getPayoutRequest" id="ep-payout-get" />
        <p>List payout requests and their statuses.</p>
      </DocsSection>

      <DocsSection id="bank-accounts" title="Bank Account Management">
        <EndpointHeading method="GET" path="/payment/v1/personalAccount/banks" id="ep-banks" />
        <p>List supported banks for account verification and payouts.</p>

        <EndpointHeading method="POST" path="/payment/v1/personalAccount/checkBankAccount" id="ep-check-bank" />
        <p>Verify a bank account number and resolve the account holder name.</p>

        <EndpointHeading method="POST" path="/payment/v1/personalAccount/addBankAccount" id="ep-add-bank" />
        <p>Save a verified bank account to your profile.</p>

        <EndpointHeading method="GET" path="/payment/v1/personalAccount/ownBankAccounts" id="ep-own-banks" />
        <p>List bank accounts saved on your profile.</p>

        <EndpointHeading method="DELETE" path="/payment/v1/personalAccount/removeBankAccount/:id" id="ep-remove-bank" />
        <p>Remove a saved bank account.</p>
      </DocsSection>

      <DocsSection id="saved-cards" title="Saved Cards">
        <EndpointHeading method="POST" path="/payment/v1/personalAccount/addCard" id="ep-add-card" />
        <p>Tokenise and save a card for future charges.</p>

        <EndpointHeading method="GET" path="/payment/v1/personalAccount/savedCards" id="ep-cards" />
        <p>List saved cards.</p>

        <EndpointHeading method="DELETE" path="/payment/v1/personalAccount/removeSavedCard/:id" id="ep-remove-card" />
        <p>Remove a saved card.</p>
      </DocsSection>

      <DocsSection id="virtual-accounts" title="Virtual Accounts">
        <EndpointHeading method="POST" path="/payment/v1/virtualAccount" id="ep-create-va" />
        <p>Create a virtual account for inbound bank transfers.</p>

        <EndpointHeading method="GET" path="/payment/v1/virtualAccount/saved" id="ep-saved-va" />
        <p>List virtual accounts saved on the profile.</p>
      </DocsSection>

      <DocsSection id="currency" title="Currency & Units">
        <Callout variant="info" title="Monetary values are in full units (NGN)">
          All monetary values are in the currency specified (default NGN) and
          expressed in <strong>full units</strong>, not kobo. For example,{" "}
          <InlineCode>485000</InlineCode> means ₦485,000.00, not ₦4,850.00.
          Verify with the engineering team before relying on this convention
          for production amounts.
        </Callout>
      </DocsSection>

      <DocsSection id="bnpl" title="Odiopay BNPL">
        <p>
          Odiopay BNPL is integrated into the Intraverse booking workflow but
          is <strong>not currently accessible through the public API</strong>.
          Odiopay is a separate company; its BNPL integration is handled at
          the platform level. If you need BNPL support, contact the
          Intraverse team for the latest options.
        </p>
      </DocsSection>

      <DocsSection id="errors" title="Errors">
        <Callout variant="info">
          Refer to the <DocsPostmanLink>Postman collection</DocsPostmanLink>{" "}
          for current error response formats. Error responses include HTTP
          status codes and JSON error messages.
        </Callout>
      </DocsSection>
    </DocsLayout>
    </>
  );
}
