import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { SectionHeader } from "@/components/SectionHeader";
import { PackageCard } from "@/components/PackageCard";
import { packages } from "@/lib/data";

function PackagesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-36 pb-12 bg-charcoal grain text-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "radial-gradient(circle at 50% 0%, oklch(0.78 0.13 80 / 0.4), transparent 60%)",
        }} />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="divider-dot mb-4 text-saffron">
            <span className="text-[11px] tracking-[0.35em] uppercase">9 Curated Packages</span>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-semibold leading-tight">
            Catering <em className="text-saffron-gradient not-italic">Packages</em>
          </h1>
          <p className="mt-5 text-cream/80 max-w-xl mx-auto">
            Every package below is fully customisable. Tap any "Order on WhatsApp" to start your conversation.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Choose your feast"
            title={<>From <em className="text-saffron-gradient not-italic">Rs 600</em> to <em className="text-saffron-gradient not-italic">Rs 1200</em> per head</>}
            subtitle="All packages include serving staff coordination, food warmers and elegant presentation."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {packages.map((p, i) => (
              <PackageCard key={p.id} pkg={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}


import { useEffect as _useEffectTitle } from "react";
function _useTitle(t: string) { _useEffectTitle(() => { document.title = t; }, [t]); }

export default function Page() { _useTitle('Packages — Urban Zaiqa'); return <PackagesPage />; }
