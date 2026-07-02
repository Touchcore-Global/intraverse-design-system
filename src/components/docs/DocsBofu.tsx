import { MessageCircle, Mail } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

export function DocsBofu() {
  return (
    <section className="mt-16 pt-10 border-t border-border">
      <div className="rounded-xl bg-[#0D1B2A] text-white p-8 md:p-10">
        <h2
          className="text-white"
          style={{ fontSize: "24px", lineHeight: 1.25, fontWeight: 700, letterSpacing: "-0.3px" }}
        >
          Need Help With Your Integration?
        </h2>
        <p className="mt-3 text-white/70 text-[15px] leading-relaxed max-w-[560px]">
          Our developer support team responds via WhatsApp within 4 hours during business days.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-none bg-white text-[#0D1B2A] px-5 py-3 text-sm font-semibold hover:bg-white/90 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Chat With Developer Support
          </a>
          <a
            href="mailto:developers@intraverse.com"
            className="inline-flex items-center gap-2 rounded-none border border-white/30 text-white px-5 py-3 text-sm font-semibold hover:bg-white/10 transition-colors"
          >
            <Mail className="w-4 h-4" />
            developers@intraverse.com
          </a>
        </div>
      </div>
    </section>
  );
}
