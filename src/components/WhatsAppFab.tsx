import { MessageCircle } from "lucide-react";

export const WhatsAppFab = () => {
  return (
    <a
      href="https://wa.me/2349030002629?text=Hi%20Intraverse%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20platform."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[hsl(var(--whatsapp))] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};
