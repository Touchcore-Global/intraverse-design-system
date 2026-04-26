import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/constants";

export const WhatsAppFab = () => {
  return (
    <a
      href={whatsappUrl("Hi Intraverse, I'd like to learn more about your platform.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      data-wa-source="floating-fab"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[hsl(var(--whatsapp))] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};
