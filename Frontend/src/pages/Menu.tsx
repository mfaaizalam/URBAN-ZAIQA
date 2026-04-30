import { motion } from "framer-motion";
import { Plus, Check } from "lucide-react";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { SectionHeader } from "@/components/SectionHeader";
import { menu } from "@/lib/data";
import { useCart } from "@/lib/cart";

function MenuPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-36 pb-12 bg-charcoal grain text-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "radial-gradient(circle at 50% 0%, oklch(0.45 0.11 135 / 0.4), transparent 60%)",
        }} />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="divider-dot mb-4 text-saffron">
            <span className="text-[11px] tracking-[0.35em] uppercase">À la carte</span>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-semibold leading-tight">
            The Full <em className="text-saffron-gradient not-italic">Menu</em>
          </h1>
          <p className="mt-5 text-cream/80">
            Every dish, freshly prepared. Prices in PKR.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="By Category"
            title={<>Browse our <em className="text-saffron-gradient not-italic">complete</em> selection</>}
          />

          <Accordion type="multiple" defaultValue={["Rice & Biryani"]} className="space-y-4">
            {menu.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <AccordionItem
                  value={cat.title}
                  className="rounded-2xl bg-card border border-border border border-saffron/30 px-5 sm:px-6 overflow-hidden data-[state=open]:shadow-luxe transition-all"
                >
                  <AccordionTrigger className="hover:no-underline py-5 group">
                    <div className="text-left">
                      <div className="font-display text-xl sm:text-2xl text-primary font-semibold">
                        {cat.title}
                      </div>
                      <div className="text-xs text-muted-foreground tracking-wider uppercase mt-0.5">
                        {cat.items.length} items
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 pb-2">
                      {cat.items.map((item) => (
                        <MenuRow
                          key={item.name}
                          name={item.name}
                          price={item.price}
                          category={cat.title}
                        />
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function MenuRow({ name, price, category }: { name: string; price: string; category: string }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    add({ id: `${category}::${name}`, name, price, category });
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  return (
    <div className="flex items-center gap-3 py-2.5 border-b border-dashed border-saffron/20 group">
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-3">
          <span className="text-foreground/90 font-medium truncate">{name}</span>
          <span className="flex-1 border-b border-dotted border-saffron/30 mb-1.5 hidden sm:block" />
          <span className="text-secondary font-semibold whitespace-nowrap text-sm">{price}</span>
        </div>
      </div>
      <button
        onClick={handleAdd}
        aria-label={`Add ${name} to cart`}
        className={`shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
          added
            ? "bg-secondary text-white scale-105"
            : "bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground"
        }`}
      >
        {added ? (
          <>
            <Check className="h-3.5 w-3.5" strokeWidth={3} /> Added
          </>
        ) : (
          <>
            <Plus className="h-3.5 w-3.5" strokeWidth={3} /> Add
          </>
        )}
      </button>
    </div>
  );
}


import { useEffect as _useEffectTitle } from "react";
function _useTitle(t: string) { _useEffectTitle(() => { document.title = t; }, [t]); }

export default function Page() { _useTitle('Menu — Urban Zaiqa'); return <MenuPage />; }
