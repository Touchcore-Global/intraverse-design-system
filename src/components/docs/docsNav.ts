export type DocCategory = {
  slug: string;
  title: string;
  emoji: string;
  href: string;
};

export const docCategories: DocCategory[] = [
  { slug: "quickstart", title: "Quick Start", emoji: "🚀", href: "/docs/quickstart" },
  { slug: "authentication", title: "Authentication", emoji: "🔐", href: "/docs/authentication" },
  { slug: "flights", title: "Flights", emoji: "✈️", href: "/docs/flights" },
  { slug: "hotels", title: "Hotels", emoji: "🏨", href: "/docs/hotels" },
  { slug: "tours", title: "Tours", emoji: "🌍", href: "/docs/tours" },
  { slug: "webhooks", title: "Webhooks", emoji: "📡", href: "/docs/webhooks" },
  { slug: "payments", title: "Payments", emoji: "💳", href: "/docs/payments" },
  { slug: "reference", title: "API Reference", emoji: "📖", href: "/docs/reference" },
];

export function getNeighbors(slug: string) {
  const idx = docCategories.findIndex((c) => c.slug === slug);
  return {
    prev: idx > 0 ? docCategories[idx - 1] : null,
    next: idx >= 0 && idx < docCategories.length - 1 ? docCategories[idx + 1] : null,
  };
}
