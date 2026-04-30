import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Star, Phone, Sparkles } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { SectionHeader } from "@/components/SectionHeader";
import { PackageCard } from "@/components/PackageCard";
import heroBiryani from "@/assets/hero-biryani-new.jpg";
import spreadLuxe from "@/assets/spread-luxe.jpg";
import dishKarahi from "@/assets/dish-karahi.jpg";
import dishBbq from "@/assets/dish-bbq.jpg";
import dishDesserts from "@/assets/dish-desserts.jpg";
import dishKorma from "@/assets/dish-korma.jpg";
import logoUz from "@/assets/logo-uz.png";
import { packages, waLink } from "@/lib/data";

function HomePage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <FeaturedPackages />
      <Story />
      <Highlights />
      <CTA />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-charcoal grain">
      {/* Ambient warm spotlights */}
      <div
        className="absolute inset-0 opacity-80"
        style={{
          backgroundImage:
            "radial-gradient(60% 50% at 80% 30%, oklch(0.78 0.17 65 / 0.18), transparent 60%), radial-gradient(50% 50% at 10% 90%, oklch(0.55 0.16 35 / 0.22), transparent 60%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 pt-32 pb-16 lg:pt-36 lg:pb-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* LEFT — copy */}
          <div className="lg:col-span-7">

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.9 }}
              className="mt-8 font-display text-cream font-light leading-[0.92] tracking-[-0.04em] text-[clamp(3rem,8.5vw,7.5rem)]"
            >
              The art of
              <br />
              <span className="italic font-normal text-saffron-gradient">desi dawat,</span>
              <br />
              <span className="font-medium">perfected.</span>
            </motion.h1>

            {/* Subhead */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.8 }}
              className="mt-7 max-w-xl text-cream/70 text-base sm:text-lg leading-relaxed"
            >
              Slow-cooked biryanis, hand-ground spice karahis, charcoal-kissed BBQ and royal desserts —
              served the way they were meant to be.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-10 flex flex-col sm:flex-row gap-3"
            >
              <Link
                to="/packages"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-saffron text-charcoal font-semibold shadow-saffron hover:bg-saffron-soft transition"
              >
                Explore Packages
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={waLink("Hi Urban Zaiqa! I'd like to place an order.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-cream/20 bg-cream/[0.03] text-cream font-medium hover:border-saffron hover:text-saffron transition"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Order
              </a>
            </motion.div>

            
            
          </div>

          {/* RIGHT — image */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-luxe ring-1 ring-saffron/20"
            >
              <img
                src={heroBiryani}
                alt="Authentic Pakistani biryani in copper handi"
                width={1080}
                height={1350}
                className="absolute inset-0 h-full w-full object-cover"
              />
              {/* Subtle dark vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/60 via-transparent to-transparent" />

              {/* Floating tag */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.7 }}
                className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-charcoal-deep/80 backdrop-blur-sm border border-saffron/30 text-saffron text-[10px] tracking-[0.3em] uppercase font-bold"
              >
                Today's Special
              </motion.div>

              {/* Bottom info card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.05, duration: 0.7 }}
                className="absolute bottom-5 left-5 right-5 rounded-2xl bg-charcoal-deep border border-saffron/30 p-4"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <div className="text-cream font-display text-xl leading-tight">
                      Shahi Royale Dawat
                    </div>
                    <div className="text-cream/55 text-xs mt-0.5">10 dishes · serves royally</div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-saffron font-display text-2xl font-semibold">Rs 1200</div>
                    <div className="text-cream/40 text-[10px] tracking-widest uppercase">/ head</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Side accent image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="absolute -left-4 lg:-left-12 top-12 hidden md:block w-28 h-36 lg:w-32 lg:h-40 rounded-2xl overflow-hidden shadow-luxe ring-1 ring-saffron/30 rotate-[-6deg]"
            >
              <img src={dishKorma} alt="Korma" className="h-full w-full object-cover" />
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-baseline gap-2">
      <span className="font-display text-2xl text-saffron font-medium">{n}</span>
      <span className="text-cream/55 text-xs tracking-wide">{label}</span>
    </div>
  );
}

/* ---------------- MARQUEE ---------------- */
function Marquee() {
  const items = [
    "Biryani",
    "Karahi",
    "Charcoal BBQ",
    "Nihari",
    "Haleem",
    "Pulao",
    "Korma",
    "Royal Desserts",
    "Kebab",
    "Tikka",
  ];
  return (
    <section className="border-y border-border bg-background py-6 overflow-hidden">
      <div className="flex gap-12 whitespace-nowrap animate-marquee will-change-transform">
        {[...items, ...items, ...items].map((it, i) => (
          <span
            key={i}
            className="font-display italic text-3xl sm:text-4xl text-foreground/30 hover:text-saffron transition flex items-center gap-12"
          >
            {it}
            <span className="text-saffron text-base">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}

/* ---------------- FEATURED PACKAGES ---------------- */
function FeaturedPackages() {
  const featured = packages.slice(0, 3);
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Catering Packages"
          title={
            <>
              Crafted for{" "}
              <em className="text-saffron-gradient not-italic font-medium">every dawat</em>
            </>
          }
          subtitle="From intimate gatherings to grand weddings — choose a package or let us tailor one for you."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featured.map((p, i) => (
            <PackageCard key={p.id} pkg={p} index={i} />
          ))}
        </div>
        <div className="text-center mt-14">
          <Link
            to="/packages"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-charcoal text-cream font-semibold hover:bg-charcoal-deep transition group"
          >
            See All 9 Packages
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------------- STORY ---------------- */
function Story() {
  return (
    <section className="py-24 sm:py-32 bg-warm-gradient">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative rounded-[2rem] overflow-hidden shadow-luxe">
            <img
              src={spreadLuxe}
              alt="Urban Zaiqa luxe catering spread"
              loading="lazy"
              width={1600}
              height={1280}
              className="w-full h-[520px] object-cover hover:scale-105 transition duration-700"
            />
          </div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -right-4 lg:-right-8 bg-cream rounded-2xl p-5 shadow-luxe max-w-[210px] border border-saffron/20"
          >
            <div className="flex items-center gap-1 text-saffron mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-saffron" />
              ))}
            </div>
            <div className="font-display text-3xl font-semibold text-charcoal leading-none">
              4.9
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              Rated by 1,200+ happy guests
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="divider-dot text-[11px] tracking-[0.4em] uppercase font-semibold text-saffron mb-5">
            Our Story
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light leading-[1.05] tracking-[-0.03em]">
            Where heritage meets{" "}
            <em className="text-saffron-gradient not-italic font-medium">hospitality</em>.
          </h2>
          <p className="mt-7 text-lg text-muted-foreground leading-relaxed">
            For over a decade, Urban Zaiqa has been a trusted name in Pakistani catering — blending
            slow-cooked traditional recipes with modern presentation. Every grain of biryani, every
            sizzle of karahi, every spoon of kheer is a tribute to our culture.
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            From shaadi to mehndi, aqeeqa to corporate iftar — we make every moment a feast worth
            remembering.
          </p>
          <div className="mt-9 grid grid-cols-3 gap-3">
            {["Halal", "Hygienic", "Heritage"].map((tag) => (
              <div
                key={tag}
                className="rounded-2xl border border-charcoal/15 bg-cream py-4 text-center text-sm font-semibold tracking-wider text-charcoal"
              >
                {tag}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- HIGHLIGHTS ---------------- */
function Highlights() {
  const items = [
    {
      img: dishKarahi,
      title: "Sizzling Karahi",
      desc: "Cast-iron seared, slow-cooked with hand-ground spices.",
    },
    {
      img: dishBbq,
      title: "Charcoal BBQ",
      desc: "Tikka, seekh & malai boti grilled over real coals.",
    },
    {
      img: dishDesserts,
      title: "Royal Desserts",
      desc: "Lab-e-Shireen, Pista Delight, Rabri Kheer & Shahi Tukda.",
    },
  ];
  return (
    <section className="py-24 sm:py-32 bg-charcoal grain text-cream relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(50% 40% at 80% 0%, oklch(0.78 0.17 65 / 0.18), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <div className="divider-dot text-[11px] tracking-[0.4em] uppercase font-semibold text-saffron mb-4">
              Signature
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light leading-[1.05] tracking-[-0.03em] max-w-2xl">
              Made with{" "}
              <em className="text-saffron-gradient not-italic font-medium">love</em>, served with{" "}
              <em className="text-saffron-gradient not-italic font-medium">grace</em>.
            </h2>
          </div>
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 text-saffron font-semibold group whitespace-nowrap"
          >
            View full menu
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative rounded-3xl overflow-hidden h-[440px]"
            >
              <img
                src={it.img}
                alt={it.title}
                loading="lazy"
                width={1024}
                height={1024}
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep via-charcoal-deep/30 to-transparent" />
              <div className="absolute top-4 right-4 h-10 w-10 rounded-full bg-saffron text-charcoal flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition">
                <ArrowRight className="h-4 w-4" />
              </div>
              <div className="absolute bottom-0 inset-x-0 p-6">
                <div className="text-saffron text-[10px] tracking-[0.3em] uppercase mb-2">
                  0{i + 1}
                </div>
                <h3 className="font-display text-2xl text-cream mb-2">{it.title}</h3>
                <p className="text-cream/70 text-sm">{it.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */
function CTA() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-charcoal grain p-10 sm:p-16 text-center shadow-luxe"
        >
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(50% 60% at 50% 0%, oklch(0.78 0.17 65 / 0.35), transparent 70%)",
            }}
          />
          <div className="relative">
            <Sparkles className="h-6 w-6 text-saffron mx-auto mb-4" />
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-cream font-light leading-[1.05] tracking-[-0.03em]">
              Ready for a{" "}
              <em className="text-saffron-gradient not-italic font-medium">royal feast?</em>
            </h2>
            <p className="mt-5 text-cream/70 max-w-xl mx-auto">
              Get a customised quote on WhatsApp in minutes. Big or small — every dawat is treated
              like a wedding.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={waLink("Hi Urban Zaiqa! I'd like a custom catering quote.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-saffron text-charcoal font-semibold hover:bg-saffron-soft transition"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Now
              </a>
              <a
                href="tel:03323336821"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-cream/20 bg-cream/[0.03] text-cream font-semibold hover:border-saffron hover:text-saffron transition"
              >
                <Phone className="h-4 w-4" /> 0332-3336821
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


import { useEffect as _useEffectTitle } from "react";
function _useTitle(t: string) { _useEffectTitle(() => { document.title = t; }, [t]); }

export default function Page() { _useTitle('Urban Zaiqa — Authentic Pakistani Restaurant & Catering, Karachi'); return <HomePage />; }
