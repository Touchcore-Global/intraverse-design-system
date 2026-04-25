// Fails the build if any docs page hard-codes an old Postman collection URL.
// All Postman links must go through src/components/docs/DocsPostmanLink.tsx
// which exports POSTMAN_COLLECTION_URL as the single source of truth.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = process.cwd();
const DOCS_DIR = join(ROOT, "src", "pages", "docs");
const POSTMAN_COMPONENT = join(
  ROOT,
  "src",
  "components",
  "docs",
  "DocsPostmanLink.tsx",
);

// Any Postman documenter URL that does NOT match this canonical one is "old".
const CANONICAL_URL =
  "https://documenter.getpostman.com/view/17671608/2s9Yyqhgtj";
const POSTMAN_URL_RE = /https:\/\/documenter\.getpostman\.com\/view\/[\w/-]+/g;

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) out.push(...walk(full));
    else if (/\.(tsx?|mdx?)$/.test(name)) out.push(full);
  }
  return out;
}

export function checkPostmanUrls() {
  const violations = [];
  const files = walk(DOCS_DIR);

  for (const file of files) {
    const content = readFileSync(file, "utf8");
    const matches = content.match(POSTMAN_URL_RE) ?? [];
    for (const url of matches) {
      if (url !== CANONICAL_URL) {
        violations.push({ file: relative(ROOT, file), url });
      } else {
        // Even the canonical URL shouldn't be hard-coded in docs pages —
        // it must come from the shared component.
        violations.push({
          file: relative(ROOT, file),
          url,
          reason:
            "Use <DocsPostmanLink> from @/components/docs/DocsPostmanLink instead of hard-coding the URL.",
        });
      }
    }
  }

  return violations;
}

// CLI entry point
if (import.meta.url === `file://${process.argv[1]}`) {
  const violations = checkPostmanUrls();
  if (violations.length > 0) {
    console.error("\n❌ Outdated/hard-coded Postman URL detected in docs:\n");
    for (const v of violations) {
      console.error(`  • ${v.file}`);
      console.error(`      ${v.url}`);
      if (v.reason) console.error(`      ${v.reason}`);
    }
    console.error(
      `\n  Single source of truth: ${relative(ROOT, POSTMAN_COMPONENT)}\n`,
    );
    process.exit(1);
  }
  console.log("✅ Postman URL check passed — no hard-coded URLs in docs.");
}
