import { MessageCircle } from "lucide-react";
import { WA } from "@/lib/contact";

export function FloatingContact() {
  return (
    <a
      href={WA.general}
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp"
      className="wa-float fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-elevated transition-smooth hover:scale-110 print:hidden"
      style={{ backgroundColor: "#25D366" }}
    >
      <MessageCircle className="h-7 w-7" />
      <span className="sr-only">WhatsApp Universal Elevators</span>
    </a>
  );
}
