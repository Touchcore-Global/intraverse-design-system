#!/usr/bin/env python3
"""One-shot script: inject <SEO /> into every page component.

Strategy:
1. For each page, ensure `import { SEO } from "@/components/SEO";` is present.
2. Find the *outermost component* `return (` and insert the <SEO ... /> tag
   as the first child after the opening JSX root element.
3. Page components that already have manual document.title / setMeta blocks
   are handled separately (those imperative blocks are removed by another step).
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent / "src" / "pages"

# (relative_path, seo_jsx_block)
PAGES = {
    "IndexV2.tsx": '''      <SEO
        title="Intraverse — B2B Travel Technology Platform"
        description="Africa's B2B travel technology platform. Access GDS, NDC, and 900+ airlines through one API. White-label booking engine, agent tools, and corporate travel management."
        canonical="https://intraverse.africa"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Intraverse",
          url: "https://intraverse.africa",
          logo: "https://intraverse.africa/images/intraverse-logo.svg",
          description: "Africa's B2B travel technology platform",
          address: { "@type": "PostalAddress", addressLocality: "Lagos", addressCountry: "NG" },
          sameAs: [
            "https://www.linkedin.com/company/intraverse.africa",
            "https://twitter.com/intraverseHQ",
            "https://www.instagram.com/intraverse.africa",
          ],
        }}
      />''',
    "Index.tsx": '''      <SEO
        title="Intraverse — B2B Travel Technology Platform"
        description="Africa's B2B travel technology platform."
        noindex={true}
      />''',
    "Travx.tsx": '''      <SEO
        title="TravX — White-Label Travel Booking Platform for Agents | Intraverse"
        description="Launch your branded travel booking website. White-label platform with 900+ airlines, hotel booking, payment processing, and customer management. From ₦75,000/month."
        canonical="https://intraverse.africa/travx"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "TravX",
          applicationCategory: "TravelApplication",
          operatingSystem: "Web",
          description: "White-label travel booking platform for travel agents",
          offers: { "@type": "Offer", price: "75000", priceCurrency: "NGN", priceValidUntil: "2026-12-31" },
          provider: { "@type": "Organization", name: "Intraverse", url: "https://intraverse.africa" },
        }}
      />''',
    "CoopX.tsx": '''      <SEO
        title="CoopX — Corporate Travel Management Platform Nigeria | Intraverse"
        description="Simplify corporate travel in Africa. Manage bookings, control spend, enforce travel policy, and automate expense reporting. Built for Nigerian and African enterprises."
        canonical="https://intraverse.africa/coopx"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "CoopX",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          description: "Corporate travel management platform for African businesses",
          provider: { "@type": "Organization", name: "Intraverse", url: "https://intraverse.africa" },
        }}
      />''',
    "Independents.tsx": '''      <SEO
        title="Start a Travel Business in Nigeria — Independents Programme | Intraverse"
        description="Become a travel agent with zero IATA accreditation. Access flights, hotels, and tours through Intraverse. Earn commissions on every booking. No experience needed."
        canonical="https://intraverse.africa/independents"
      />''',
    "IndependentsInterest.tsx": '''      <SEO
        title="Express Interest — Independents Programme | Intraverse"
        description="Join the Intraverse Independents Programme. Register your interest to get access to travel booking tools, supplier connections, and training for new travel agents."
        canonical="https://intraverse.africa/for/independents/interest"
      />''',
    "Pricing.tsx": '''      <SEO
        title="Pricing — Travel Agent Software Plans from ₦75,000/month | Intraverse"
        description="Transparent pricing for Africa's B2B travel platform. Agent, Business, and Enterprise plans. No hidden fees, no setup costs. Compare plans and start today."
        canonical="https://intraverse.africa/pricing"
      />''',
    "Products.tsx": '''      <SEO
        title="Products — Travel Agent Platform, Corporate Travel & APIs | Intraverse"
        description="Explore Intraverse's product suite: TravX white-label booking, CoopX corporate travel, Supplier Engine, Travel Links, API access, and Odiopay BNPL for travel."
        canonical="https://intraverse.africa/products"
      />''',
    "AgentPlatform.tsx": '''      <SEO
        title="Agent Platform — Professional Travel Booking System | Intraverse"
        description="All-in-one booking system for travel agents. Search, book, and manage flights, hotels, and tours from Amadeus, Sabre, Galileo, and NDC — all in one dashboard."
        canonical="https://intraverse.africa/products/agent-platform"
      />''',
    "SupplierEngine.tsx": '''      <SEO
        title="Supplier Engine — GDS, NDC & Hotel Aggregation | Intraverse"
        description="Access Amadeus, Sabre, Galileo, NDC, and HotelBeds through one integration. Intraverse aggregates 900+ airlines and 1M+ hotel properties for travel agents."
        canonical="https://intraverse.africa/supplier-engine"
      />''',
    "TravelLinks.tsx": '''      <SEO
        title="Travel Links — Shareable Booking Links for Travel Agents | Intraverse"
        description="Create branded, shareable booking links for your travel customers. Send flight and hotel quotes via WhatsApp, email, or social media. Customers book and pay online."
        canonical="https://intraverse.africa/products/travel-links"
      />''',
    "ApiProduct.tsx": '''      <SEO
        title="Travel API — Flights, Hotels & Tours API for Developers | Intraverse"
        description="Build travel into your product with Intraverse's REST API. Access flights, hotels, tours, and payments. Full documentation, sandbox environment, and developer support."
        canonical="https://intraverse.africa/products/api"
      />''',
    "OdiopayProduct.tsx": '''      <SEO
        title="Odiopay — Buy Now Pay Later for Travel | Intraverse"
        description="Let your customers split travel payments into affordable installments. Odiopay BNPL integrates into your booking flow. Agents get paid upfront, travelers pay over time."
        canonical="https://intraverse.africa/products/odiopay"
      />''',
    "Tools.tsx": '''      <SEO
        title="Agent Tools — Booking Engine, Itineraries & Payments | Intraverse"
        description="Professional tools for travel agents: booking engine, itinerary builder, payment collection, customer management, and business analytics. All included in your plan."
        canonical="https://intraverse.africa/tools"
      />''',
    "Features.tsx": '''      <SEO
        title="Features — Complete Travel Technology Platform | Intraverse"
        description="Explore every feature of Intraverse: GDS integration, white-label storefronts, itinerary sharing, multi-currency payments, team management, analytics, and more."
        canonical="https://intraverse.africa/features"
      />''',
    "UseCases.tsx": '''      <SEO
        title="Use Cases — How Travel Businesses Use Intraverse"
        description="See how travel agencies, independent agents, corporate travel managers, fintechs, and startups use Intraverse to sell travel, manage bookings, and grow revenue."
        canonical="https://intraverse.africa/use-cases"
      />''',
    "Proof.tsx": '''      <SEO
        title="Trusted by 200+ Travel Agents Across Africa | Intraverse"
        description="See why 200+ travel agents across Nigeria and Africa trust Intraverse. Real testimonials, case studies, and results from travel businesses using our platform."
        canonical="https://intraverse.africa/proof"
      />''',
    "WhoWeServe.tsx": '''      <SEO
        title="Who We Serve — Travel Agents, Corporates, Startups & Developers | Intraverse"
        description="Intraverse serves travel agents, aspiring independents, corporate travel managers, startups, developers, and fintechs. Find the right solution for your business."
        canonical="https://intraverse.africa/who-we-serve"
      />''',
    "TravelAgents.tsx": '''      <SEO
        title="For Travel Agents — Booking Platform & GDS Access | Intraverse"
        description="Access Amadeus, Sabre, and Galileo GDS through one platform. Manage bookings, issue tickets, collect payments, and run your agency with professional technology."
        canonical="https://intraverse.africa/for/travel-agents"
      />''',
    "IndependentsAudience.tsx": '''      <SEO
        title="For Aspiring Travel Agents — Start Your Travel Business | Intraverse"
        description="Become a travel agent without IATA accreditation. Intraverse gives you booking technology, supplier access, and training to launch your travel business in Nigeria."
        canonical="https://intraverse.africa/for/independents"
      />''',
    "CorporatesAudience.tsx": '''      <SEO
        title="For Corporate Travel Managers — Travel Management Platform | Intraverse"
        description="Manage your company's travel spend, enforce booking policies, and automate expense reporting. CoopX by Intraverse is built for Nigerian and African corporate travel."
        canonical="https://intraverse.africa/for/corporates"
      />''',
    "Businesses.tsx": '''      <SEO
        title="For Businesses — Streamline Corporate Travel & Expenses | Intraverse"
        description="Simplify business travel for your team. Book flights and hotels, track spending, and manage approvals in one platform. Built for African businesses of all sizes."
        canonical="https://intraverse.africa/for/businesses"
      />''',
    "StartupsAudience.tsx": '''      <SEO
        title="For Startups — Embed Travel Into Your Product via API | Intraverse"
        description="Add flight booking, hotel search, and travel payments to your app with Intraverse's API. Pre-built components, sandbox testing, and developer-first documentation."
        canonical="https://intraverse.africa/for/startups"
      />''',
    "DevelopersAudience.tsx": '''      <SEO
        title="For Developers — Travel API Documentation & SDKs | Intraverse"
        description="RESTful travel API with flights, hotels, tours, and payments. Full documentation, Postman collections, webhook support, and a dedicated sandbox environment."
        canonical="https://intraverse.africa/for/developers"
      />''',
    "FintechsAudience.tsx": '''      <SEO
        title="For Fintechs — Add Travel to Your Financial Platform | Intraverse"
        description="Integrate travel booking into your fintech product. Offer flight and hotel booking inside your banking, payments, or BNPL app with Intraverse's white-label API."
        canonical="https://intraverse.africa/for/fintechs"
      />''',
    "About.tsx": '''      <SEO
        title="About Intraverse — Africa's Travel Technology Company"
        description="Intraverse is a Lagos-based B2B travel technology company building the infrastructure for Africa's next generation of travel businesses. IATA accredited, serving 200+ agents."
        canonical="https://intraverse.africa/about"
      />''',
    "BuiltInLagos.tsx": '''      <SEO
        title="Built in Lagos — Africa's Travel Tech Innovation Hub | Intraverse"
        description="Intraverse is proudly built in Lagos, Nigeria. Our engineering, product, and support teams are based in Africa, building travel technology for African businesses."
        canonical="https://intraverse.africa/about/built-in-lagos"
      />''',
    "Careers.tsx": '''      <SEO
        title="Careers at Intraverse — Join Africa's Travel Tech Team"
        description="Join Intraverse and help build Africa's travel technology infrastructure. Engineering, product, sales, and operations roles in Lagos. Remote-friendly."
        canonical="https://intraverse.africa/careers"
      />''',
    "Partnerships.tsx": '''      <SEO
        title="Partner With Intraverse — Technology & Distribution Partnerships"
        description="Partner with Intraverse to distribute travel inventory, integrate technology, or co-build solutions for the African travel market. Airlines, hotels, and tech partners welcome."
        canonical="https://intraverse.africa/partnerships"
      />''',
    "Contact.tsx": '''      <SEO
        title="Contact Intraverse — Get In Touch"
        description="Reach the Intraverse team. WhatsApp, email, or visit us in Lagos. Sales enquiries, support requests, and partnership discussions."
        canonical="https://intraverse.africa/contact"
      />''',
    "Help.tsx": '''      <SEO
        title="Help Centre — Support & Documentation | Intraverse"
        description="Find help articles, video tutorials, and direct support for Intraverse. Search our knowledge base or chat with our Lagos-based support team on WhatsApp."
        canonical="https://intraverse.africa/help"
      />''',
    "Docs.tsx": '''      <SEO
        title="API Documentation — Developer Docs | Intraverse"
        description="Complete API documentation for the Intraverse travel platform. Authentication, flights, hotels, tours, payments, and webhooks. Quickstart guide and API reference."
        canonical="https://intraverse.africa/docs"
      />''',
    "NotFound.tsx": '''      <SEO
        title="Page Not Found | Intraverse"
        description="This page doesn't exist. Head back to Intraverse to explore our travel technology platform."
        noindex={true}
      />''',
    "Login.tsx": '''      <SEO
        title="Login | Intraverse"
        description="Sign in to your Intraverse account."
        noindex={true}
      />''',
    "ForgotPassword.tsx": '''      <SEO
        title="Reset Password | Intraverse"
        description="Reset your Intraverse account password."
        noindex={true}
      />''',
    "VerifyEmail.tsx": '''      <SEO
        title="Verify Email | Intraverse"
        description="Verify your email address for Intraverse."
        noindex={true}
      />''',
    "Unsubscribe.tsx": '''      <SEO
        title="Unsubscribe | Intraverse"
        description="Manage your Intraverse email preferences."
        noindex={true}
      />''',
    "Blog.tsx": '''      <SEO
        title="Blog — Travel Industry Insights & Product Updates | Intraverse"
        description="Insights for African travel businesses. Industry analysis, product updates, agent success stories, and practical guides for growing your travel business in Nigeria."
        canonical="https://intraverse.africa/blog"
      />''',
    "News.tsx": '''      <SEO
        title="News & Press — Intraverse in the Media"
        description="Latest news, press releases, and media coverage about Intraverse. Product launches, partnerships, and industry recognition in African travel technology."
        canonical="https://intraverse.africa/news"
      />''',
    # IndexV3 — internal demo, noindex
    "IndexV3.tsx": '''      <SEO
        title="Intraverse — B2B Travel Technology Platform"
        description="Africa's B2B travel technology platform."
        noindex={true}
      />''',
}

# Pages where the FIRST `return (` belongs to a sub-component, not the main one.
# For those, we anchor to a more specific marker. (page → search anchor line)
# Default behavior: insert after the first `return (\n    <` whose root is followed by Navbar.
SEO_TAG_RE = re.compile(r"<SEO\b", re.MULTILINE)
DOCTITLE_BLOCK_RE = re.compile(
    r"\n  useEffect\(\(\) => \{\s*\n\s*document\.title = .*?\n(?:.*?\n)*?\s*\}, \[\]\);\n",
    re.MULTILINE,
)
SIMPLE_DOCTITLE_RE = re.compile(
    r"\n  useEffect\(\(\) => \{\s*\n\s*document\.title = [^;]+;\s*\n\s*\}, \[\]\);\n"
)

IMPORT_RE = re.compile(r'^import .+ from "[^"]+";$', re.MULTILINE)


def add_import(content: str) -> str:
    if 'from "@/components/SEO"' in content:
        return content
    # Insert after the last top-of-file import statement
    matches = list(IMPORT_RE.finditer(content))
    if not matches:
        return f'import {{ SEO }} from "@/components/SEO";\n{content}'
    last = matches[-1]
    return content[: last.end()] + '\nimport { SEO } from "@/components/SEO";' + content[last.end() :]


def insert_seo(content: str, seo_block: str) -> str:
    """Insert SEO block as the first child of the main component's outer JSX root.

    Heuristic: find the first `return (` followed within the next ~6 lines by
    a JSX root element. We insert right after that opening element line.
    """
    if SEO_TAG_RE.search(content):
        return content  # already present

    # Find all `return (` then test which is the main component (last large one)
    matches = list(re.finditer(r"\n  return \(\n", content))
    if not matches:
        # try arrow style
        matches = list(re.finditer(r"\n  return \(\n", content))
    if not matches:
        print(f"  ! no 'return (' anchor found, skipping insert")
        return content

    # Pick the main component's return: usually the LAST one (since helper subcomponents
    # come above the default export, but their returns are also valid).
    # Better: pick the return that appears AFTER `export default function`.
    export_match = re.search(r"export default function \w+", content)
    if export_match:
        offset = export_match.end()
        candidates = [m for m in matches if m.start() >= offset]
        target = candidates[0] if candidates else matches[-1]
    else:
        # Page uses const X = () => { ... }; export default X
        target = matches[-1]

    # The opening JSX root is on the next non-empty line(s). Find the line ending of
    # the opening tag (could be `<>`, `<div...>`, `<main...>`). We insert after that line.
    insert_at = target.end()
    # Find end-of-line of the opening JSX tag. We scan forward to first `>\n`.
    rest = content[insert_at:]
    # Match opening element until its first `>` at end of line (handles multi-line attrs)
    m = re.search(r"(<[^/>][^>]*>|<>)\n", rest)
    if not m:
        print("  ! could not find opening JSX root tag")
        return content
    abs_pos = insert_at + m.end()
    return content[:abs_pos] + seo_block + "\n" + content[abs_pos:]


def remove_doctitle_blocks(content: str) -> str:
    """Strip useEffect blocks that only set document.title / setMeta."""
    # Remove multi-line useEffect that contains document.title and possibly setMeta
    pattern = re.compile(
        r"\n  useEffect\(\(\) => \{[^}]*?document\.title[^}]*?\}, \[\]\);\n",
        re.DOTALL,
    )
    new = pattern.sub("\n", content)

    # Some files have a more complex pattern with cleanup return; do an aggressive
    # multi-line search for blocks bracketed by useEffect(()=>{ ... document.title ... }, [])
    # Use a state-machine scan.
    lines = new.split("\n")
    out = []
    i = 0
    while i < len(lines):
        line = lines[i]
        if "useEffect(() => {" in line:
            # Look ahead within next 40 lines for closing `}, []);` and check for document.title
            depth = line.count("{") - line.count("}")
            buf = [line]
            j = i + 1
            while j < len(lines) and j - i < 60:
                buf.append(lines[j])
                depth += lines[j].count("{") - lines[j].count("}")
                if depth <= 0 and "}, [" in lines[j]:
                    break
                j += 1
            block = "\n".join(buf)
            if ("document.title" in block or "setMeta(" in block) and "fetch" not in block.lower():
                # Skip the block
                i = j + 1
                continue
        out.append(line)
        i += 1
    return "\n".join(out)


def process(path: Path, seo_block: str):
    content = path.read_text()
    original = content

    content = remove_doctitle_blocks(content)
    content = add_import(content)
    content = insert_seo(content, seo_block)

    # Remove unused useEffect import? Skip — leaves intact for other uses.
    if content != original:
        path.write_text(content)
        print(f"  ✓ {path.name}")
    else:
        print(f"  · {path.name} (no change)")


def main():
    print(f"Processing {len(PAGES)} pages...")
    for rel, seo in PAGES.items():
        path = ROOT / rel
        if not path.exists():
            print(f"  ! missing: {rel}")
            continue
        process(path, seo)
    print("Done.")


if __name__ == "__main__":
    main()
