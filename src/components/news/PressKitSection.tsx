import { useState } from "react";
import { FileText, Download, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const BOILERPLATE = `Intraverse is an Africa-first travel technology company headquartered in Lagos, Nigeria. The company builds tools, infrastructure, and platforms that travel agents, independent sellers, corporates, fintechs, and developers use to sell flights, hotels, tours, and packages from global suppliers. Intraverse is IATA-accredited and serves 200+ active travel agents across Nigeria. For more information, visit intraverse.com.`;

const ASSETS = [
  { title: "Intraverse Logo Pack", description: "PNG, SVG and dark/light variants", file: "intraverse-logo-pack.zip" },
  { title: "Brand Guidelines", description: "Colours, typography, and usage", file: "intraverse-brand-guidelines.pdf" },
  { title: "Boilerplate Text", description: "Standard company description", file: "intraverse-boilerplate.txt" },
  { title: "Fact Sheet", description: "Key stats, leadership, milestones", file: "intraverse-fact-sheet.pdf" },
  { title: "Product Screenshots", description: "Hi-res product images", file: "intraverse-product-shots.zip" },
];

export function PressKitSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(BOILERPLATE);
    setCopied(true);
    toast({ title: "Boilerplate copied to clipboard" });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="press-kit" className="bg-muted/40 border-t border-border py-16 md:py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Press Kit</h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Logos, brand guidelines, fact sheets, and high-resolution screenshots — everything journalists and
            partners need to write about Intraverse.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
          {ASSETS.map((a) => (
            <a
              key={a.title}
              href={`/press-kit/${a.file}`}
              download
              className="group flex flex-col bg-background border border-border rounded-md p-5 hover:border-primary hover:shadow-sm transition-all"
            >
              <FileText className="h-7 w-7 text-primary mb-3" />
              <p className="font-bold text-foreground text-sm mb-1">{a.title}</p>
              <p className="text-xs text-muted-foreground mb-3 flex-1">{a.description}</p>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary">
                Download <Download className="h-3 w-3" />
              </span>
            </a>
          ))}
        </div>

        {/* Boilerplate */}
        <div className="bg-background border border-border rounded-md p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="h3-global text-foreground">About Intraverse</h3>
            <Button variant="ghost" size="sm" onClick={handleCopy}>
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              {copied ? "Copied" : "Copy Boilerplate"}
            </Button>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{BOILERPLATE}</p>
        </div>
      </div>
    </section>
  );
}
