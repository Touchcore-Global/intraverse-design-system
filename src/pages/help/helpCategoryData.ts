import {
  Rocket, Plane, Hotel, CreditCard, Users, Settings, LinkIcon, BarChart3,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface HelpArticle {
  title: string;
  slug: string;
}

export interface HelpCategoryData {
  slug: string;
  title: string;
  icon: LucideIcon;
  heroHeadline: string;
  heroSub: string;
  articles: HelpArticle[];
  relatedSlugs: string[];
}

export const helpCategories: HelpCategoryData[] = [
  {
    slug: "getting-started",
    title: "Getting Started",
    icon: Rocket,
    heroHeadline: "New to Intraverse? Start Here.",
    heroSub: "Everything you need to set up your account, complete your first booking, and start running your travel business on Intraverse.",
    articles: [
      { title: "Creating your Intraverse account", slug: "creating-account" },
      { title: "Completing your agency profile", slug: "agency-profile" },
      { title: "How to verify your identity (KYC)", slug: "kyc-verification" },
      { title: "Understanding your dashboard", slug: "understanding-dashboard" },
      { title: "Funding your wallet for the first time", slug: "first-wallet-fund" },
      { title: "Making your first flight booking", slug: "first-flight-booking" },
      { title: "How pricing and markups work", slug: "pricing-markups" },
      { title: "Setting up your team and roles", slug: "team-roles" },
      { title: "Connecting your branded website (Travx)", slug: "connecting-travx" },
      { title: "Understanding commission structures", slug: "commission-structures" },
      { title: "Navigating the Intraverse mobile experience", slug: "mobile-experience" },
      { title: "Where to get help if you're stuck", slug: "getting-help" },
    ],
    relatedSlugs: ["booking-flights", "account-settings", "payments-wallet"],
  },
  {
    slug: "booking-flights",
    title: "Booking Flights",
    icon: Plane,
    heroHeadline: "Search, Book, and Issue Tickets",
    heroSub: "Everything about searching aggregated flight inventory, comparing fares, booking, and issuing tickets through Intraverse.",
    articles: [
      { title: "How to search for flights", slug: "search-flights" },
      { title: "Understanding fare classes and cabin types", slug: "fare-classes" },
      { title: "Comparing fares across multiple suppliers", slug: "comparing-fares" },
      { title: "Booking a one-way, return, or multi-city flight", slug: "booking-types" },
      { title: "How to issue a ticket after booking", slug: "issuing-ticket" },
      { title: "Adding passenger details and documents", slug: "passenger-details" },
      { title: "Understanding baggage allowances and extras", slug: "baggage-extras" },
      { title: "How to hold a fare before issuing", slug: "hold-fare" },
      { title: "Voiding a ticket within the void window", slug: "void-ticket" },
      { title: "Requesting a refund for a booked ticket", slug: "refund-ticket" },
      { title: "Handling schedule changes and cancellations", slug: "schedule-changes" },
      { title: "Re-issuing or exchanging a ticket", slug: "reissue-ticket" },
    ],
    relatedSlugs: ["hotels-tours", "payments-wallet", "managing-customers"],
  },
  {
    slug: "hotels-tours",
    title: "Hotels & Tours",
    icon: Hotel,
    heroHeadline: "Hotels and Tours From Global Suppliers",
    heroSub: "Search, book, and manage hotel and tour inventory from leading global suppliers - all from your Intraverse dashboard.",
    articles: [
      { title: "Searching for hotels by destination", slug: "search-hotels" },
      { title: "Understanding hotel star ratings and reviews", slug: "hotel-ratings" },
      { title: "Booking a hotel for a client", slug: "book-hotel" },
      { title: "How hotel cancellation policies work", slug: "hotel-cancellation" },
      { title: "Searching and booking tours and activities", slug: "search-tours" },
      { title: "Creating a custom travel package", slug: "custom-package" },
      { title: "Adding hotels and tours to a Travel Link", slug: "hotels-travel-link" },
      { title: "Managing hotel booking confirmations", slug: "hotel-confirmations" },
      { title: "Handling hotel booking amendments", slug: "hotel-amendments" },
      { title: "Supplier coverage for hotels and tours", slug: "supplier-coverage" },
    ],
    relatedSlugs: ["booking-flights", "travel-links-packages", "managing-customers"],
  },
  {
    slug: "payments-wallet",
    title: "Payments & Wallet",
    icon: CreditCard,
    heroHeadline: "Manage Your Money on Intraverse",
    heroSub: "How to top up your wallet, accept customer payments, track commissions, and handle settlements.",
    articles: [
      { title: "How to fund your wallet via bank transfer", slug: "fund-bank-transfer" },
      { title: "Funding your wallet with a debit card", slug: "fund-debit-card" },
      { title: "Understanding wallet balances and holds", slug: "wallet-balances" },
      { title: "How commission payouts work", slug: "commission-payouts" },
      { title: "Tracking payments and transaction history", slug: "transaction-history" },
      { title: "Setting up Odiopay (Buy Now, Pay Later)", slug: "setup-odiopay" },
      { title: "Accepting payments from customers", slug: "accept-payments" },
      { title: "How settlement and reconciliation works", slug: "settlement" },
      { title: "Understanding service fees and charges", slug: "service-fees" },
      { title: "Generating invoices for customers", slug: "generate-invoices" },
      { title: "Handling failed or pending payments", slug: "failed-payments" },
      { title: "Requesting a wallet withdrawal", slug: "wallet-withdrawal" },
    ],
    relatedSlugs: ["account-settings", "reports-analytics", "booking-flights"],
  },
  {
    slug: "managing-customers",
    title: "Managing Customers",
    icon: Users,
    heroHeadline: "Customer Management Made Simple",
    heroSub: "Tools and workflows for managing customer profiles, sharing live itineraries, and keeping customers informed.",
    articles: [
      { title: "Adding a new customer profile", slug: "add-customer" },
      { title: "Storing passenger documents securely", slug: "passenger-documents" },
      { title: "Viewing a customer's booking history", slug: "booking-history" },
      { title: "Sharing a live itinerary with a customer", slug: "share-itinerary" },
      { title: "Sending booking confirmations via email", slug: "send-confirmations" },
      { title: "Managing group bookings and multiple passengers", slug: "group-bookings" },
      { title: "How customer notes and tags work", slug: "notes-tags" },
      { title: "Editing or merging duplicate customer profiles", slug: "merge-customers" },
      { title: "Customer data privacy and GDPR compliance", slug: "data-privacy" },
      { title: "Using customer data for repeat bookings", slug: "repeat-bookings" },
    ],
    relatedSlugs: ["travel-links-packages", "booking-flights", "account-settings"],
  },
  {
    slug: "account-settings",
    title: "Account & Settings",
    icon: Settings,
    heroHeadline: "Customise Your Workspace",
    heroSub: "Manage your branding, team, supplier preferences, policies, and platform settings.",
    articles: [
      { title: "Updating your agency profile and branding", slug: "update-profile" },
      { title: "Adding and managing team members", slug: "manage-team" },
      { title: "Setting user roles and permissions", slug: "roles-permissions" },
      { title: "Configuring email notifications", slug: "email-notifications" },
      { title: "Setting your default currency and language", slug: "currency-language" },
      { title: "Managing supplier preferences and priorities", slug: "supplier-preferences" },
      { title: "Setting up two-factor authentication (2FA)", slug: "two-factor-auth" },
      { title: "Changing your password or login email", slug: "change-password" },
      { title: "Configuring booking policies and rules", slug: "booking-policies" },
      { title: "Customising your Travx website settings", slug: "travx-settings" },
      { title: "How to deactivate or close your account", slug: "close-account" },
      { title: "Transferring account ownership", slug: "transfer-ownership" },
    ],
    relatedSlugs: ["getting-started", "reports-analytics", "payments-wallet"],
  },
  {
    slug: "travel-links-packages",
    title: "Travel Links & Packages",
    icon: LinkIcon,
    heroHeadline: "Sell Travel With Links and Custom Packages",
    heroSub: "Generate shareable booking links, build branded travel packages, and sell across WhatsApp, social media, and your website.",
    articles: [
      { title: "What are Travel Links and how do they work?", slug: "what-are-travel-links" },
      { title: "Creating your first Travel Link", slug: "first-travel-link" },
      { title: "Customising a Travel Link with your branding", slug: "customise-link" },
      { title: "Sharing Travel Links on WhatsApp and social media", slug: "share-links" },
      { title: "Tracking clicks and conversions on Travel Links", slug: "tracking-links" },
      { title: "Building a custom travel package", slug: "build-package" },
      { title: "Adding flights, hotels, and tours to a package", slug: "add-to-package" },
      { title: "Setting pricing and markup on packages", slug: "package-pricing" },
      { title: "Embedding Travel Links on your website", slug: "embed-links" },
      { title: "Managing and editing active Travel Links", slug: "manage-links" },
      { title: "How payment collection works via Travel Links", slug: "link-payments" },
      { title: "Travel Links FAQ and troubleshooting", slug: "links-faq" },
    ],
    relatedSlugs: ["hotels-tours", "managing-customers", "reports-analytics"],
  },
  {
    slug: "reports-analytics",
    title: "Reports & Analytics",
    icon: BarChart3,
    heroHeadline: "Understand Your Business",
    heroSub: "Generate reports, export data, and use real-time analytics to grow your travel business.",
    articles: [
      { title: "Accessing your sales dashboard", slug: "sales-dashboard" },
      { title: "Generating a booking report", slug: "booking-report" },
      { title: "Understanding your commission report", slug: "commission-report" },
      { title: "Exporting reports as CSV or PDF", slug: "export-reports" },
      { title: "Viewing revenue by product type", slug: "revenue-by-product" },
      { title: "Tracking team performance and agent metrics", slug: "team-performance" },
      { title: "Setting up automated report delivery", slug: "automated-reports" },
      { title: "Understanding booking funnel analytics", slug: "funnel-analytics" },
      { title: "Using filters to drill into specific data", slug: "report-filters" },
      { title: "How real-time vs. settled revenue works", slug: "realtime-vs-settled" },
    ],
    relatedSlugs: ["payments-wallet", "account-settings", "managing-customers"],
  },
];

export function getCategoryBySlug(slug: string): HelpCategoryData | undefined {
  return helpCategories.find(c => c.slug === slug);
}

export function getRelatedCategories(slugs: string[]): HelpCategoryData[] {
  return slugs.map(s => helpCategories.find(c => c.slug === s)).filter(Boolean) as HelpCategoryData[];
}