import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  light = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="text-center max-w-2xl mx-auto mb-14"
    >
      {eyebrow && (
        <div className="divider-dot text-[11px] tracking-[0.4em] uppercase font-semibold text-saffron mb-4">
          {eyebrow}
        </div>
      )}
      <h2
        className={`font-display text-4xl sm:text-5xl md:text-6xl font-light leading-[1.05] tracking-[-0.03em] ${
          light ? "text-cream" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-base sm:text-lg ${
            light ? "text-cream/65" : "text-muted-foreground"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
