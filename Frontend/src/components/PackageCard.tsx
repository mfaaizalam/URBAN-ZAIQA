import { motion } from "framer-motion";
import { MessageCircle, Check, ArrowRight } from "lucide-react";
import type { Package } from "@/lib/data";
import { waLink } from "@/lib/data";

export function PackageCard({ pkg, index }: { pkg: Package; index: number }) {
  const orderText = `Hi Urban Zaiqa! I want to order Package ${pkg.id} – ${pkg.name} (Rs ${pkg.price}/head). Please share details.`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: "easeOut" }}
      className="group relative h-full"
    >
      <div
        className={`relative h-full rounded-3xl overflow-hidden transition-all duration-500 ${
          pkg.featured
            ? "bg-charcoal text-cream shadow-luxe ring-1 ring-saffron/40"
            : "bg-card text-foreground border border-border hover:border-saffron/40 hover:shadow-luxe"
        }`}
      >
        {pkg.featured && (
          <div className="absolute top-5 right-5 px-3 py-1 rounded-full bg-saffron text-charcoal text-[9px] font-bold tracking-[0.25em] uppercase">
            ★ Signature
          </div>
        )}

        <div className="p-7 sm:p-8 flex flex-col h-full">
          <div className="mb-5">
            <div
              className={`text-[10px] tracking-[0.35em] uppercase font-semibold mb-2 ${
                pkg.featured ? "text-saffron" : "text-secondary"
              }`}
            >
              Package {String(pkg.id).padStart(2, "0")}
            </div>
            <h3
              className={`font-display text-3xl sm:text-4xl font-light leading-[1.05] tracking-tight ${
                pkg.featured ? "text-cream" : "text-foreground"
              }`}
            >
              {pkg.name}
            </h3>
            <p
              className={`text-sm mt-2 italic ${
                pkg.featured ? "text-cream/60" : "text-muted-foreground"
              }`}
            >
              {pkg.tagline}
            </p>
          </div>

          <div
            className={`flex items-baseline gap-1 mb-6 pb-6 border-b border-dashed ${
              pkg.featured ? "border-cream/20" : "border-border"
            }`}
          >
            <span
              className={`text-xs ${pkg.featured ? "text-cream/60" : "text-muted-foreground"}`}
            >
              Rs
            </span>
            <span
              className={`font-display text-5xl font-medium ${
                pkg.featured ? "text-saffron" : "text-foreground"
              }`}
            >
              {pkg.price}
            </span>
            <span
              className={`text-sm ml-1 ${
                pkg.featured ? "text-cream/60" : "text-muted-foreground"
              }`}
            >
              / per head
            </span>
          </div>

          <ul className="flex-1 space-y-2.5 mb-7">
            {pkg.items.map((item) => (
              <li
                key={item}
                className={`flex items-start gap-2.5 text-sm ${
                  pkg.featured ? "text-cream/85" : "text-foreground/85"
                }`}
              >
                <span
                  className={`mt-0.5 h-5 w-5 rounded-full flex items-center justify-center shrink-0 ${
                    pkg.featured ? "bg-saffron/20" : "bg-secondary/15"
                  }`}
                >
                  <Check
                    className={`h-3 w-3 ${pkg.featured ? "text-saffron" : "text-secondary"}`}
                    strokeWidth={3}
                  />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <a
            href={waLink(orderText)}
            target="_blank"
            rel="noopener noreferrer"
            className={`group/btn inline-flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-full font-semibold text-sm transition ${
              pkg.featured
                ? "bg-saffron text-charcoal hover:bg-saffron-soft"
                : "bg-charcoal text-cream hover:bg-charcoal-deep"
            }`}
          >
            <MessageCircle className="h-4 w-4" />
            Order on WhatsApp
            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
