#!/usr/bin/env python3
"""
Generates branded Open Graph images (1200x630) for each route category.
Run once (or whenever brand/copy changes) and commit the output.

Usage: python3 scripts/generate-og-images.py
Output: /public/og/*.png
"""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
OUT_DIR = ROOT / "public" / "og"
FONT_DIR = ROOT / "public" / "fonts"
OUT_DIR.mkdir(parents=True, exist_ok=True)

W, H = 1200, 630
NAVY = (13, 27, 42)          # #0D1B2A — primary brand
NAVY_2 = (28, 50, 80)         # gradient stop
ACCENT = (61, 130, 247)       # primary blue
WHITE = (255, 255, 255)
MUTED = (180, 195, 220)

BOLD = ImageFont.truetype(str(FONT_DIR / "Ubuntu-Bold.ttf"), 64)
TITLE = ImageFont.truetype(str(FONT_DIR / "Ubuntu-Bold.ttf"), 78)
TAG = ImageFont.truetype(str(FONT_DIR / "Ubuntu-Medium.ttf"), 32)
LABEL = ImageFont.truetype(str(FONT_DIR / "Ubuntu-Bold.ttf"), 22)
BRAND = ImageFont.truetype(str(FONT_DIR / "Ubuntu-Bold.ttf"), 28)


def gradient_bg() -> Image.Image:
    img = Image.new("RGB", (W, H), NAVY)
    px = img.load()
    for y in range(H):
        t = y / H
        r = int(NAVY[0] + (NAVY_2[0] - NAVY[0]) * t)
        g = int(NAVY[1] + (NAVY_2[1] - NAVY[1]) * t)
        b = int(NAVY[2] + (NAVY_2[2] - NAVY[2]) * t)
        for x in range(W):
            px[x, y] = (r, g, b)
    # Subtle accent glow circle
    overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    od = ImageDraw.Draw(overlay)
    od.ellipse((W - 500, -200, W + 200, 500), fill=(61, 130, 247, 40))
    od.ellipse((-200, H - 400, 400, H + 200), fill=(120, 80, 220, 30))
    img = Image.alpha_composite(img.convert("RGBA"), overlay).convert("RGB")
    return img


def wrap(text: str, font: ImageFont.FreeTypeFont, max_width: int) -> list[str]:
    words = text.split()
    lines, current = [], ""
    for w in words:
        trial = (current + " " + w).strip()
        if font.getlength(trial) <= max_width:
            current = trial
        else:
            if current:
                lines.append(current)
            current = w
    if current:
        lines.append(current)
    return lines


def render(filename: str, label: str, title: str, tagline: str) -> None:
    img = gradient_bg()
    draw = ImageDraw.Draw(img)

    # Brand bar (top-left)
    draw.rectangle((80, 70, 86, 110), fill=ACCENT)
    draw.text((104, 72), "INTRAVERSE", font=BRAND, fill=WHITE)

    # Category label (uppercase)
    draw.text((80, 180), label.upper(), font=LABEL, fill=ACCENT, spacing=4)

    # Title (wrap)
    title_lines = wrap(title, TITLE, W - 160)
    y = 220
    for line in title_lines[:3]:
        draw.text((80, y), line, font=TITLE, fill=WHITE)
        y += 92

    # Tagline (wrap)
    tag_lines = wrap(tagline, TAG, W - 160)
    y += 12
    for line in tag_lines[:2]:
        draw.text((80, y), line, font=TAG, fill=MUTED)
        y += 44

    # Footer URL
    draw.text((80, H - 60), "intraverse.africa", font=TAG, fill=MUTED)

    # Accent corner mark (bottom-right)
    draw.rectangle((W - 100, H - 100, W - 80, H - 80), fill=ACCENT)
    draw.rectangle((W - 70, H - 100, W - 50, H - 80), fill=(120, 80, 220))

    img.save(OUT_DIR / filename, "PNG", optimize=True)
    print(f"  ✓ {filename}")


# (filename, category label, title, tagline)
IMAGES = [
    # Default / brand
    ("default.png", "Intraverse",
     "B2B Travel Technology for Africa",
     "SaaS tools for travel agencies, cooperatives, and independent operators."),

    # Home
    ("home.png", "Home",
     "Build the future of African travel.",
     "Booking, payments, and content APIs for the next generation of travel businesses."),

    # Products hub
    ("products.png", "Products",
     "Everything to run a modern travel business.",
     "Agent Platform, TravX, CoopX, Independents, Supplier Engine, Travel Links, API & Odiopay."),

    # Individual products
    ("agent-platform.png", "Product",
     "Agent Platform — All in one for agencies.",
     "Bookings, suppliers, payments, and reporting in a single workspace."),
    ("travx.png", "Product",
     "TravX — Online travel marketplace.",
     "Discover and book trips across African inventory."),
    ("coopx.png", "Product",
     "CoopX — Cooperative booking engine.",
     "Shared infrastructure for travel cooperatives across Africa."),
    ("independents.png", "Product",
     "Tools for solo travel professionals.",
     "Bookings, payments, and a storefront — built for independents."),
    ("supplier-engine.png", "Product",
     "Supplier Engine — connect faster.",
     "Unified integration layer for flights, hotels, tours, and more."),
    ("travel-links.png", "Product",
     "Travel Links — sell travel with a link.",
     "Turn any social post or message into a mini booking site."),
    ("api.png", "Developers",
     "Production-ready travel APIs.",
     "Flights, hotels, tours, payments, and webhooks for African travel."),
    ("odiopay.png", "Payments",
     "Odiopay — Buy Now, Pay Later for travel.",
     "Increase conversion with installments built for African travelers."),
    ("tools.png", "Tools",
     "Free utilities for travel pros.",
     "Calculators, currency tools, and resources for travel professionals."),

    # Audience
    ("for-agents.png", "For Travel Agents",
     "Modernize your travel agency.",
     "Why thousands of African agents grow with Intraverse."),
    ("for-independents.png", "For Independents",
     "Sell travel solo, with confidence.",
     "Tools, payments, and supply built for independent professionals."),
    ("for-businesses.png", "For Businesses",
     "Travel tech that scales with you.",
     "Booking, payments, and content APIs to power your travel business."),
    ("for-corporates.png", "For Corporates",
     "Modern business travel.",
     "Manage corporate travel, policy, and spend in one place."),
    ("for-startups.png", "For Startups",
     "Launch a travel brand, fast.",
     "Ship a travel product faster with Intraverse APIs."),
    ("for-developers.png", "For Developers",
     "Build on African travel infrastructure.",
     "Documentation, sandboxes, and APIs for engineers."),
    ("for-fintechs.png", "For Fintechs",
     "Embed travel commerce.",
     "Add flights, hotels, and BNPL travel to your fintech."),
    ("who-we-serve.png", "Who We Serve",
     "From agents to fintechs.",
     "See who builds with Intraverse."),

    # Company
    ("about.png", "About",
     "Africa-first travel technology.",
     "Built in Lagos, for the world. Our mission, team, and story."),
    ("built-in-lagos.png", "About",
     "Built in Lagos.",
     "Engineering and product made in Lagos — for the world."),
    ("careers.png", "Careers",
     "Join the team building African travel tech.",
     "Open roles across engineering, product, design, and operations."),
    ("partnerships.png", "Partnerships",
     "Distribution, supplier & platform partnerships.",
     "Grow with Intraverse — together."),
    ("contact.png", "Contact",
     "Talk to our team.",
     "Sales, partnerships, and support — we'd love to hear from you."),
    ("pricing.png", "Pricing",
     "Simple, transparent pricing.",
     "Plans for travel agencies, independents, and businesses."),

    # Content hubs
    ("blog.png", "Blog",
     "Insights for African travel businesses.",
     "Stories, guides, and analysis from the team building travel tech."),
    ("news.png", "News & Press",
     "News & press from Intraverse.",
     "Press releases, company updates, and announcements."),
    ("docs.png", "Developers",
     "Developer documentation.",
     "Build with Intraverse APIs — flights, hotels, tours, payments, webhooks."),
    ("help.png", "Help Center",
     "Help & guides.",
     "Answers to common questions about Intraverse products."),

    # Misc
    ("features.png", "Features",
     "The platform features that power African travel.",
     "Everything you need to run a modern travel business."),
    ("use-cases.png", "Use Cases",
     "How teams use Intraverse.",
     "Real workflows from agencies, cooperatives, corporates, and fintechs."),
    ("proof.png", "Customer Stories",
     "Proof — real outcomes.",
     "Travel businesses growing with Intraverse."),
    ("faq.png", "FAQ",
     "Frequently asked questions.",
     "Everything you wanted to know about Intraverse."),
]

print(f"Generating {len(IMAGES)} OG images → {OUT_DIR}")
for spec in IMAGES:
    render(*spec)
print("Done.")
