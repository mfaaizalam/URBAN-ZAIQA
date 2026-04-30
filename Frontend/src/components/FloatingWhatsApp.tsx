import { motion } from "framer-motion";
import { waLink } from "@/lib/data";

const WhatsappIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" fill="currentColor" {...p}>
    <path d="M16 3C9.4 3 4 8.4 4 15c0 2.4.7 4.7 2 6.7L4 29l7.5-2c1.9 1 4 1.5 6.2 1.5h.3C24.6 28.5 30 23.1 30 16.5S24.6 3 18 3h-2zm0 2.5h2c5.2 0 9.5 4.3 9.5 9.5S23.2 25 18 25h-.3c-2 0-3.9-.6-5.5-1.6l-.5-.3-3.6 1 1-3.5-.3-.5C7.7 18.5 7 17 7 15c0-5.2 4.3-9.5 9.5-9.5zM12 9c-.3 0-.7.1-1 .5-.4.4-1.4 1.4-1.4 3.4s1.4 3.9 1.6 4.2c.2.3 2.7 4.4 6.7 6 3.3 1.3 4 1.1 4.7 1 .7-.1 2.3-1 2.6-1.9.3-.9.3-1.7.2-1.9-.1-.2-.4-.3-.8-.5-.4-.2-2.3-1.1-2.6-1.3-.3-.1-.6-.2-.9.2-.3.4-1 1.3-1.2 1.5-.2.2-.4.3-.8.1-.4-.2-1.7-.6-3.2-2-1.2-1-2-2.3-2.2-2.7-.2-.4 0-.6.2-.8.2-.2.4-.4.6-.7.2-.2.3-.4.4-.7.1-.3 0-.5-.1-.7C13.6 12 12.9 10 12.6 9.2c-.2-.5-.4-.5-.6-.5z" />
  </svg>
);

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={waLink("Hi Urban Zaiqa, I'd like to place an order.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      className="fixed bottom-5 right-5 z-50 h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-[oklch(0.55_0.18_145)] text-white flex items-center justify-center animate-pulse-glow hover:scale-110 transition shadow-luxe"
    >
      <WhatsappIcon className="h-7 w-7 sm:h-8 sm:w-8" />
    </motion.a>
  );
}
