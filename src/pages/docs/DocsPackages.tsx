import { DocsLayout, DocsSection } from "@/components/docs/DocsLayout";
import { CodeBlock, InlineCode } from "@/components/docs/CodeBlock";
import { EndpointHeading } from "@/components/docs/MethodBadge";
import { ParamsTable } from "@/components/docs/ParamsTable";
import { Callout } from "@/components/docs/Callout";
import { DocsPostmanLink } from "@/components/docs/DocsPostmanLink";
import { DocsBofu } from "@/components/docs/DocsBofu";
import { ArrowRight } from "lucide-react";

const SANDBOX = "https://dev.intraversewebservices.com/api";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "mgmt-packages", label: "Management · Packages" },
  { id: "mgmt-pre", label: "Pre-Packages" },
  { id: "mgmt-options", label: "Options" },
  { id: "mgmt-protocol", label: "Protocol Services" },
  { id: "mgmt-payouts", label: "Payouts" },
  { id: "mgmt-reports", label: "Reports" },
  { id: "mgmt-platform", label: "Platform Fee" },
  { id: "market-search", label: "Marketplace · Search" },
  { id: "market-booking", label: "Package Booking" },
  { id: "market-protocol", label: "Protocol Booking" },
  { id: "market-supplier", label: "Supplier Ops" },
  { id: "flows", label: "Flows" },
];

function Flow({ steps }: { steps: string[] }) {
  return (
    <div className="not-prose flex items-center flex-wrap gap-3 my-6 p-5 rounded-lg bg-[#F0F5FC] border border-border">
      {steps.map((s, i) => (
        <div key={s} className="flex items-center gap-3">
          <div className="px-3 py-2 rounded-md bg-white border border-border text-sm font-medium text-foreground">
            {s}
          </div>
          {i < steps.length - 1 && <ArrowRight className="w-4 h-4 text-muted-foreground" />}
        </div>
      ))}
    </div>
  );
}

export default function DocsPackages() {
  return (
    <DocsLayout
      slug="packages"
      title="Create, Sell, and Manage Your Own Travel Packages"
      metaTitle="PackagePro APIs | Create & Sell Packages | Intraverse API Docs"
      metaDescription="Build custom travel packages, set pricing and availability, list them on the Intraverse marketplace, and manage bookings — with full payout and reporting capabilities."
      subtitle="Build custom travel packages, set pricing and availability, list them on the Intraverse marketplace, and manage bookings — with full payout and reporting capabilities."
      toc={toc}
    >
      <DocsSection id="overview" title="Overview">
        <p>
          PackagePro (Nobi PackagePro) lets you create and sell your own travel packages and protocol services through
          the Intraverse marketplace. Unlike the Tours API which searches third-party supplier inventory, PackagePro is
          for building and managing YOUR packages — tours, experiences, activities, and VIP services that you design,
          price, and sell. The API is split into <strong>Management Routes</strong> (creating and managing packages)
          and <strong>Marketplace Routes</strong> (searching, booking, and paying for packages).
        </p>
        <Callout variant="warning" title="Namespace note">
          PackagePro uses the <InlineCode>/product/v1/nobiPackage/</InlineCode> namespace. This is separate from the
          Tours/Activities API at <InlineCode>/product/v1/package/</InlineCode> which searches third-party supplier inventory.
        </Callout>
        <p>All endpoints are relative to <InlineCode>{SANDBOX}</InlineCode>.</p>
        <Callout variant="info">
          Explore these endpoints interactively in our <DocsPostmanLink>Postman collection →</DocsPostmanLink>
        </Callout>
      </DocsSection>

      {/* ============ MANAGEMENT ============ */}
      <DocsSection id="mgmt-packages" title="Management · Packages">
        <p className="text-muted-foreground">Create and manage your packages, options, availability, protocol services, and payouts.</p>

        <EndpointHeading method="GET" path="/product/v1/nobiPackage/categories" />
        <p>Get available package categories for classifying your packages.</p>

        <EndpointHeading method="POST" path="/product/v1/nobiPackage/packages" />
        <p>Create a new custom travel package.</p>
        <CodeBlock label="JSON" language="json" code={`{
  "title": "Historic Ethiopia Tour",
  "category": "668584471d322ef8d42e4653",
  "shortDescription": "A 7-day cultural and historic exploration...",
  "fullDescription": "Detailed itinerary description...",
  "servicesIncluded": ["Professional guide", "Transport", "Accommodation"],
  "mealSettings": []
}`} />

        <EndpointHeading method="GET" path="/product/v1/nobiPackage/packages" />
        <p>List your created packages with pagination and search. Query: <InlineCode>?limit=10&amp;page=1&amp;searchKey=&#123;query&#125;</InlineCode>.</p>

        <EndpointHeading method="PATCH" path="/product/v1/nobiPackage/packages/:id" />
        <p>Update an existing package's details.</p>

        <EndpointHeading method="DELETE" path="/product/v1/nobiPackage/packages/:id" />
        <p>Delete a package.</p>

        <EndpointHeading method="POST" path="/product/v1/nobiPackage/packages/add-availability" />
        <p>Set available spots for one or more packages.</p>
        <CodeBlock label="JSON" language="json" code={`{
  "packageId": ["68a47390e1908f6d7b145974"],
  "availableSpots": 6
}`} />

        <EndpointHeading method="POST" path="/product/v1/nobiPackage/packages/pre-package/images/:id" />
        <p>Add gallery images to a pre-package.</p>

        <EndpointHeading method="DELETE" path="/product/v1/nobiPackage/packages/gallery-image/:id" />
        <p>Remove a gallery image.</p>
      </DocsSection>

      <DocsSection id="mgmt-pre" title="Pre-Packages (Drafts)">
        <EndpointHeading method="POST" path="/product/v1/nobiPackage/packages/pre-package" />
        <p>Create a draft package (work in progress).</p>
        <CodeBlock label="JSON" language="json" code={`{
  "progress": 12,
  "title": "Draft Package Title",
  "mealSettings": []
}`} />

        <EndpointHeading method="GET" path="/product/v1/nobiPackage/packages/pre-package" />
        <p>List all pre-packages.</p>

        <EndpointHeading method="GET" path="/product/v1/nobiPackage/packages/pre-package/:id" />
        <p>Get a single pre-package.</p>

        <EndpointHeading method="DELETE" path="/product/v1/nobiPackage/packages/pre-package/:id" />
        <p>Delete a pre-package.</p>
      </DocsSection>

      <DocsSection id="mgmt-options" title="Options (Package Variants)">
        <EndpointHeading method="POST" path="/product/v1/nobiPackage/options" />
        <p>Create a bookable option/variant for a package. Options define specific configurations — group size, pricing, meeting points, accessibility, and timing.</p>
        <CodeBlock label="JSON" language="json" code={`{
  "title": "Morning Tour",
  "package": "68f9471be96f7caf5bee6bc3",
  "referenceCode": "option-ref",
  "description": "Morning departure with breakfast",
  "maxGroupSize": 5,
  "guideMaterial": "Information booklets",
  "customerSkipLine": true,
  "lineToSkip": "Express security check",
  "wheelchair": true,
  "accessTime": "1 Hour(s)",
  "cutOffTime": "1 day",
  "meetingAddress": "Airport, Lagos",
  "meetingSetting": "meeting_point",
  "pricingOption": "fixed",
  "meetingPointDescription": "Main entrance"
}`} />

        <EndpointHeading method="GET" path="/product/v1/nobiPackage/options" />
        <p>List all options. Query: <InlineCode>?page=1&amp;limit=10&amp;searchKey=&#123;query&#125;</InlineCode>.</p>

        <EndpointHeading method="GET" path="/product/v1/nobiPackage/options/:packageId" />
        <p>List options for a specific package.</p>

        <EndpointHeading method="PUT" path="/product/v1/nobiPackage/options/:optionId" />
        <p>Update an option.</p>

        <EndpointHeading method="DELETE" path="/product/v1/nobiPackage/options/:optionId" />
        <p>Delete an option.</p>
      </DocsSection>

      <DocsSection id="mgmt-protocol" title="Protocol Services (VIP / Concierge)">
        <EndpointHeading method="POST" path="/product/v1/nobiPackage/protocol-services" />
        <p>Create a VIP protocol service — airport assistance, chauffeur, concierge.</p>
        <CodeBlock label="JSON" language="json" code={`{
  "title": "Platinum Executive Protocol Service",
  "shortDescription": "Superior protocol service for VIP clients",
  "longDescription": "Full description...",
  "servicesIncluded": ["Private yacht access", "Chauffeur-driven limousine", "Dedicated butler"],
  "priceSetting": "age_group",
  "protocolServicePackageType": "all",
  "protocolServiceType": "international"
}`} />

        <EndpointHeading method="GET" path="/product/v1/nobiPackage/protocol-services/all" />
        <p>Get all protocol services.</p>

        <EndpointHeading method="GET" path="/product/v1/nobiPackage/protocol-services/:id" />
        <EndpointHeading method="PATCH" path="/product/v1/nobiPackage/protocol-services/:id" />
        <EndpointHeading method="DELETE" path="/product/v1/nobiPackage/protocol-services/:id" />
        <p>Get, update, or delete a protocol service.</p>

        <EndpointHeading method="PATCH" path="/product/v1/nobiPackage/protocol-services/approve/:id" />
        <EndpointHeading method="PATCH" path="/product/v1/nobiPackage/protocol-services/reject/:id" />
        <p>Approve or reject a protocol service.</p>
      </DocsSection>

      <DocsSection id="mgmt-payouts" title="Payouts">
        <EndpointHeading method="GET" path="/product/v1/nobiPackage/payouts/wallet" />
        <p>Get gross wallet balance.</p>

        <EndpointHeading method="GET" path="/product/v1/nobiPackage/payouts/get-my-payouts" />
        <p>Get all your payouts.</p>

        <EndpointHeading method="GET" path="/payment/v1/payment/nobi/payout-quote" />
        <p>Get a payout quote.</p>

        <EndpointHeading method="POST" path="/payment/v1/payment/nobi/payout-to-intraverse-wallet" />
        <p>Payout to your Intraverse wallet.</p>
      </DocsSection>

      <DocsSection id="mgmt-reports" title="Reports">
        <EndpointHeading method="GET" path="/product/v1/nobiPackage/reports/package-statistics" />
        <EndpointHeading method="GET" path="/product/v1/nobiPackage/reports/protocol-service-statistics" />
        <EndpointHeading method="GET" path="/product/v1/nobiPackage/reports/transaction-reports" />
        <p>Package, protocol, and transaction reports.</p>
      </DocsSection>

      <DocsSection id="mgmt-platform" title="Platform Fee (Admin)">
        <EndpointHeading method="POST" path="/product/v1/nobiPackage/settings/platform-fee" />
        <EndpointHeading method="GET" path="/product/v1/nobiPackage/settings/platform-fee" />
        <EndpointHeading method="PUT" path="/product/v1/nobiPackage/settings/platform-fee/change-settings" />
        <EndpointHeading method="DELETE" path="/product/v1/nobiPackage/settings/platform-fee/disable-settings" />
        <p>Set, get, update, or disable the platform fee.</p>
      </DocsSection>

      {/* ============ MARKETPLACE ============ */}
      <DocsSection id="market-search" title="Marketplace · Search & Discovery">
        <p className="text-muted-foreground">Search, book, and pay for packages listed on the Intraverse marketplace.</p>

        <EndpointHeading method="GET" path="/product/v1/nobiPackage/search-packages" />
        <p>Search published packages on the marketplace with pricing. Query: <InlineCode>?limit=10&amp;page=1&amp;searchKey=&#123;query&#125;</InlineCode>.</p>

        <EndpointHeading method="GET" path="/product/v1/nobiPackage/packages/:id" />
        <p>Get a single marketplace package.</p>

        <EndpointHeading method="POST" path="/product/v1/nobiPackage/package/availability" />
        <p>Check package availability.</p>
        <CodeBlock label="JSON" language="json" code={`{
  "packageId": "6997f7d2a3bfbc714b1d8330",
  "selectedDate": "2026-03-02",
  "totalAdults": 1
}`} />

        <EndpointHeading method="GET" path="/product/v1/nobiPackage/packages/by-availability" />
        <p>Browse packages filtered by availability.</p>

        <EndpointHeading method="GET" path="/product/v1/nobiPackage/protocol-services/search" />
        <p>Search protocol services.</p>
      </DocsSection>

      <DocsSection id="market-booking" title="Package Booking">
        <EndpointHeading method="POST" path="/product/v1/nobiPackage/booking" />
        <p>Book a package.</p>
        <ParamsTable params={[
          { name: "package", type: "string", required: true, description: "Package ID" },
          { name: "option", type: "string", required: true, description: "Option/variant ID" },
          { name: "paymentTime", type: "string", description: "\"pay_later\" or \"pay_now\"" },
          { name: "totalAdults", type: "number", description: "Number of adults" },
          { name: "totalInfants", type: "number", description: "Number of infants" },
          { name: "totalStudents", type: "number", description: "Number of students" },
          { name: "totalMilitaries", type: "number", description: "Number of military travelers" },
          { name: "totalEuCitizens", type: "number", description: "Number of EU citizens" },
          { name: "totalSeniors", type: "number", description: "Number of seniors" },
          { name: "startDate", type: "string", required: true, description: "YYYY-MM-DD" },
          { name: "reservationDetails", type: "array", required: true, description: "Guest details" },
        ]} />
        <CodeBlock label="JSON" language="json" code={`{
  "package": "69493bfa360c2bdbea8d8f5d",
  "option": "69493fdf35422f660a2f41f0",
  "paymentTime": "pay_later",
  "totalInfants": 0,
  "totalAdults": 1,
  "totalStudents": 0,
  "totalMilitaries": 0,
  "totalEuCitizens": 0,
  "totalSeniors": 0,
  "startDate": "2026-02-01",
  "reservationDetails": [
    {
      "gender": "Male",
      "lastName": "Smith",
      "birthDate": "1985-05-15",
      "firstName": "John"
    }
  ]
}`} />

        <EndpointHeading method="POST" path="/payment/v1/payment/nobi-package" />
        <p>Pay for a package booking.</p>
        <CodeBlock label="JSON" language="json" code={`{
  "nobiPackageBookingId": "68a865972486d588ed54e242",
  "paymentMode": "Card",
  "callbackUrl": "http://your-app.com/callback"
}`} />

        <EndpointHeading method="GET" path="/product/v1/nobiPackage/booking" />
        <p>List bookings. Query: <InlineCode>?limit=10&amp;skip=0</InlineCode>.</p>

        <EndpointHeading method="GET" path="/product/v1/nobiPackage/booking/:id" />
        <p>Get a single booking.</p>

        <EndpointHeading method="POST" path="/product/v1/nobiPackage/booking/cancel/:id" />
        <p>Cancel a booking.</p>

        <EndpointHeading method="POST" path="/product/v1/nobiPackage/booking/:id/reschedule/quote" />
        <p>Get a reschedule quote.</p>
        <CodeBlock label="JSON" language="json" code={`{
  "rescheduleDate": "2026-01-22",
  "reason": "Schedule conflict"
}`} />

        <EndpointHeading method="POST" path="/payment/v1/payment/nobi-package-reschedule" />
        <p>Pay for a reschedule.</p>
        <CodeBlock label="JSON" language="json" code={`{
  "nobiPackageBookingId": "booking_id",
  "paymentMode": "Wallet"
}`} />

        <EndpointHeading method="POST" path="/product/v1/nobiPackage/booking/:id/cancellation/quote" />
        <p>Get a cancellation quote.</p>

        <EndpointHeading method="POST" path="/payment/v1/payment/nobi-package/:nobiPackageBookingId/cancellation-refund" />
        <p>Cancel and refund.</p>
      </DocsSection>

      <DocsSection id="market-protocol" title="Protocol Service Booking">
        <EndpointHeading method="POST" path="/product/v1/nobiPackage/protocol-services/booking" />
        <p>Create a protocol service booking.</p>
        <CodeBlock label="JSON" language="json" code={`{
  "protocolService": "66a21d7af3b01f427becabe4",
  "totalAdults": 5,
  "totalInfants": 3,
  "totalSeniors": 1,
  "totalStudents": 2,
  "totalEuCitizens": 3,
  "totalMilitaries": 1
}`} />

        <EndpointHeading method="GET" path="/product/v1/nobiPackage/protocol-services/booking" />
        <p>List all protocol bookings.</p>

        <EndpointHeading method="GET" path="/product/v1/nobiPackage/protocol-services/booking/:id" />
        <p>Get a single protocol booking.</p>

        <EndpointHeading method="POST" path="/payment/v1/payment/nobi-protocol" />
        <p>Pay for a protocol service booking.</p>
        <CodeBlock label="JSON" language="json" code={`{
  "nobiProtocolServiceBookingId": "692819f44719862111f236dc",
  "paymentMode": "Card",
  "callbackUrl": "http://your-app.com/callback"
}`} />
      </DocsSection>

      <DocsSection id="market-supplier" title="Supplier Booking Management">
        <EndpointHeading method="GET" path="/product/v1/nobiPackage/booking/my-packages" />
        <p>Get booking stats for your packages. Query: <InlineCode>?limit=10&amp;skip=0</InlineCode>.</p>

        <EndpointHeading method="GET" path="/product/v1/nobiPackage/booking/transactions" />
        <p>Get your transactions.</p>

        <EndpointHeading method="POST" path="/product/v1/nobiPackage/booking/:id/ticket-used" />
        <p>Mark a ticket as used.</p>
      </DocsSection>

      <DocsSection id="flows" title="Flows">
        <h3 className="h3-global text-foreground mb-2" style={{ fontSize: "14px" }}>Create</h3>
        <Flow steps={["Create Package", "Add Options", "Add Availability", "Add Images", "Publish"]} />
        <h3 className="h3-global text-foreground mb-2 mt-6" style={{ fontSize: "14px" }}>Marketplace Booking</h3>
        <Flow steps={["Search", "Get Details", "Check Availability", "Book", "Pay", "Confirm"]} />
        <h3 className="h3-global text-foreground mb-2 mt-6" style={{ fontSize: "14px" }}>Modification</h3>
        <Flow steps={["Reschedule Quote", "Reschedule Payment"]} />
        <h3 className="h3-global text-foreground mb-2 mt-6" style={{ fontSize: "14px" }}>Cancellation</h3>
        <Flow steps={["Cancellation Quote", "Cancel and Refund"]} />
      </DocsSection>

      <DocsBofu />
    </DocsLayout>
  );
}
