import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, Trash2, MessageCircle, ShoppingBag } from "lucide-react";
import { buildOrderMessage, useCart } from "@/lib/cart";
import { waLink } from "@/lib/data";

export function CartDrawer() {
  const { items, open, setOpen, setQty, remove, clear, count } = useCart();

  const checkoutHref = items.length > 0 ? waLink(buildOrderMessage(items)) : "#";

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[70] bg-charcoal-deep/70 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 240 }}
            className="fixed top-0 right-0 z-[80] h-full w-full sm:w-[440px] bg-card flex flex-col shadow-luxe"
          >
            <header className="flex items-center justify-between p-5 border-b border-saffron/30 bg-charcoal grain text-cream">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-saffron/20 flex items-center justify-center">
                  <ShoppingBag className="h-5 w-5 text-saffron" />
                </div>
                <div>
                  <div className="font-display text-xl text-saffron-gradient font-semibold">Your Order</div>
                  <div className="text-xs text-cream/70">{count} {count === 1 ? "item" : "items"}</div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close cart"
                className="h-10 w-10 rounded-full bg-cream/10 hover:bg-cream/20 flex items-center justify-center transition"
              >
                <X className="h-5 w-5" />
              </button>
            </header>

            <div className="flex-1 overflow-y-auto p-5">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center px-6">
                  <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center mb-4">
                    <ShoppingBag className="h-9 w-9 text-muted-foreground" />
                  </div>
                  <h3 className="font-display text-2xl text-primary mb-2">Cart is empty</h3>
                  <p className="text-muted-foreground text-sm">
                    Tap "Add" on any menu item to start your order.
                  </p>
                </div>
              ) : (
                <ul className="space-y-3">
                  <AnimatePresence initial={false}>
                    {items.map((it) => (
                      <motion.li
                        key={it.id}
                        layout
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: 30, transition: { duration: 0.2 } }}
                        className="rounded-2xl border border-saffron/30 bg-background p-4"
                      >
                        <div className="flex justify-between gap-3">
                          <div className="min-w-0">
                            <div className="text-[10px] tracking-[0.25em] uppercase text-secondary font-semibold">
                              {it.category}
                            </div>
                            <div className="font-display text-lg text-primary font-semibold truncate">
                              {it.name}
                            </div>
                            <div className="text-sm text-muted-foreground mt-0.5">{it.price}</div>
                          </div>
                          <button
                            onClick={() => remove(it.id)}
                            aria-label="Remove"
                            className="h-8 w-8 rounded-full text-muted-foreground hover:bg-destructive/10 hover:text-destructive flex items-center justify-center transition shrink-0"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                          <div className="inline-flex items-center rounded-full border border-saffron/40 bg-card overflow-hidden">
                            <button
                              onClick={() => setQty(it.id, it.qty - 1)}
                              aria-label="Decrease"
                              className="h-9 w-9 flex items-center justify-center hover:bg-saffron/10 transition"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="w-10 text-center font-semibold tabular-nums">{it.qty}</span>
                            <button
                              onClick={() => setQty(it.id, it.qty + 1)}
                              aria-label="Increase"
                              className="h-9 w-9 flex items-center justify-center hover:bg-saffron/10 transition"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </ul>
              )}
            </div>

            <footer className="border-t border-saffron/30 p-5 space-y-3 bg-background">
              {items.length > 0 && (
                <button
                  onClick={clear}
                  className="text-xs text-muted-foreground hover:text-destructive transition tracking-wider uppercase"
                >
                  Clear cart
                </button>
              )}
              {items.length > 0 ? (
                <a
                  href={checkoutHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-gradient-to-r from-[oklch(0.55_0.18_145)] to-[oklch(0.42_0.16_145)] text-white font-semibold shadow-luxe hover:scale-[1.02] transition"
                >
                  <MessageCircle className="h-5 w-5" fill="currentColor" />
                  Send Order on WhatsApp
                </a>
              ) : (
                <button
                  disabled
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-gradient-to-r from-[oklch(0.55_0.18_145)] to-[oklch(0.42_0.16_145)] text-white font-semibold opacity-50 cursor-not-allowed"
                >
                  <MessageCircle className="h-5 w-5" fill="currentColor" />
                  Send Order on WhatsApp
                </button>
              )}
              <p className="text-[11px] text-center text-muted-foreground">
                Opens WhatsApp with your full order pre-filled.
              </p>
            </footer>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
