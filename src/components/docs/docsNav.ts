export type DocCategory = {
  slug: string;
  title: string;
  emoji: string;
  href: string;
  isNew?: boolean;
  /** Sidebar-only entries are shown in the left nav but excluded from prev/next footer navigation. */
  sidebarOnly?: boolean;
};

export const docCategories: DocCategory[] = [
  { slug: "quickstart", title: "Quick Start", emoji: "🚀", href: "/docs/quickstart" },
  { slug: "authentication", title: "Authentication", emoji: "🔐", href: "/docs/authentication" },
  { slug: "flights", title: "Flights", emoji: "✈️", href: "/docs/flights" },
  { slug: "hotels", title: "Hotels", emoji: "🏨", href: "/docs/hotels" },
  { slug: "tours", title: "Tours", emoji: "🌍", href: "/docs/tours" },
  { slug: "insurance", title: "Insurance", emoji: "🛡️", href: "/docs/insurance", isNew: true },
  { slug: "packages", title: "PackagePro", emoji: "📦", href: "/docs/packages", isNew: true },
  { slug: "webhooks", title: "Webhooks", emoji: "📡", href: "/docs/webhooks" },
  { slug: "payments", title: "Payments", emoji: "💳", href: "/docs/payments" },
  { slug: "pricing-api", title: "Price Adjustments", emoji: "🏷️", href: "/docs/pricing-api", isNew: true, sidebarOnly: true },
  { slug: "reports", title: "Reports", emoji: "📊", href: "/docs/reports", isNew: true, sidebarOnly: true },
  { slug: "reference", title: "API Reference", emoji: "📖", href: "/docs/reference" },
];

export function getNeighbors(slug: string) {
  const nav = docCategories.filter((c) => !c.sidebarOnly);
  const idx = nav.findIndex((c) => c.slug === slug);
  return {
    prev: idx > 0 ? nav[idx - 1] : null,
    next: idx >= 0 && idx < nav.length - 1 ? nav[idx + 1] : null,
  };
}
