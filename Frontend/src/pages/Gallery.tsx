import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { SectionHeader } from "@/components/SectionHeader";
import biryani from "@/assets/dish-biryani.jpg";
import biryani2 from "@/assets/hero-biryani.jpg";
import karahi from "@/assets/dish-karahi.jpg";
import bbq from "@/assets/dish-bbq.jpg";
import desserts from "@/assets/dish-desserts.jpg";
import korma from "@/assets/dish-korma.jpg";
import nihari from "@/assets/dish-nihari.jpg";
import spread from "@/assets/catering-spread.jpg";

type Item = { src: string; cat: string; title: string };

const items: Item[] = [
  { src: biryani, cat: "Biryani", title: "Chicken Biryani Platter" },
  { src: biryani2, cat: "Biryani", title: "Beef Biryani Royale" },
  { src: karahi, cat: "Karahi", title: "Mutton Karahi" },
  { src: korma, cat: "Karahi", title: "Chicken Korma" },
  { src: bbq, cat: "BBQ", title: "Charcoal Tikka & Kabab" },
  { src: nihari, cat: "Karahi", title: "Slow-Cooked Nihari" },
  { src: desserts, cat: "Desserts", title: "Royal Dessert Platter" },
  { src: spread, cat: "Biryani", title: "Wedding Catering Spread" },
];

const categories = ["All", "Biryani", "BBQ", "Karahi", "Desserts"] as const;

function GalleryPage() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const [lightbox, setLightbox] = useState<Item | null>(null);
  const filtered = filter === "All" ? items : items.filter((i) => i.cat === filter);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-36 pb-12 bg-charcoal grain text-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "radial-gradient(circle at 50% 0%, oklch(0.78 0.13 80 / 0.4), transparent 60%)",
        }} />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="divider-dot mb-4 text-saffron">
            <span className="text-[11px] tracking-[0.35em] uppercase">A Visual Feast</span>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-semibold leading-tight">
            <em className="text-saffron-gradient not-italic">Gallery</em>
          </h1>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Moments captured"
            title={<>A taste of <em className="text-saffron-gradient not-italic">Urban Zaiqa</em></>}
          />

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all ${
                  filter === c
                    ? "bg-primary text-primary-foreground shadow-luxe scale-105"
                    : "border border-saffron/40 text-foreground hover:bg-saffron/10"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((it, i) => (
                <motion.button
                  key={it.title}
                  layout
                  onClick={() => setLightbox(it)}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35, delay: (i % 4) * 0.05 }}
                  className={`group relative overflow-hidden rounded-2xl bg-muted aspect-square ${
                    i % 5 === 0 ? "md:row-span-2 md:aspect-[1/2.05]" : ""
                  }`}
                >
                  <img
                    src={it.src}
                    alt={it.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/85 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition" />
                  <div className="absolute bottom-0 inset-x-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition">
                    <div className="text-[10px] tracking-[0.25em] uppercase text-saffron">{it.cat}</div>
                    <div className="font-display text-lg text-cream">{it.title}</div>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[60] bg-charcoal-deep/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-12 right-0 h-10 w-10 rounded-full bg-charcoal-deep border border-saffron/20 text-cream flex items-center justify-center hover:bg-saffron hover:text-charcoal transition"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
              <img src={lightbox.src} alt={lightbox.title} className="w-full max-h-[80vh] object-contain rounded-2xl" />
              <div className="mt-3 text-center text-cream">
                <div className="text-[10px] tracking-[0.3em] uppercase text-saffron">{lightbox.cat}</div>
                <div className="font-display text-2xl">{lightbox.title}</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}


import { useEffect as _useEffectTitle } from "react";
function _useTitle(t: string) { _useEffectTitle(() => { document.title = t; }, [t]); }

export default function Page() { _useTitle('Gallery — Urban Zaiqa'); return <GalleryPage />; }
