import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart";

export function CartButton({ floating = false }: { floating?: boolean }) {
  const { count, setOpen } = useCart();

  if (floating) {
    return (
      <motion.button
        onClick={() => setOpen(true)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
        aria-label="Open cart"
        className="fixed bottom-24 right-5 z-50 h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-gradient-to-br from-saffron to-[oklch(0.65_0.15_70)] text-charcoal flex items-center justify-center shadow-saffron hover:scale-110 transition"
      >
        <ShoppingBag className="h-6 w-6" />
        <AnimatePresence>
          {count > 0 && (
            <motion.span
              key={count}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute -top-1 -right-1 h-6 min-w-6 px-1.5 rounded-full bg-secondary text-white text-xs font-bold flex items-center justify-center ring-2 ring-background"
            >
              {count}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    );
  }

  return (
    <button
      onClick={() => setOpen(true)}
      aria-label="Open cart"
      className="relative h-11 w-11 rounded-full bg-charcoal-deep border border-saffron/20 text-cream flex items-center justify-center hover:bg-saffron/20 transition"
    >
      <ShoppingBag className="h-5 w-5" />
      <AnimatePresence>
        {count > 0 && (
          <motion.span
            key={count}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="absolute -top-1 -right-1 h-5 min-w-5 px-1 rounded-full bg-saffron text-charcoal text-[10px] font-bold flex items-center justify-center"
          >
            {count}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
