import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Mail, Send } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { SectionHeader } from "@/components/SectionHeader";
import { waLink } from "@/lib/data";

function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Urban Zaiqa!\nName: ${form.name}\nPhone: ${form.phone}\nMessage: ${form.message}`;
    window.open(waLink(text), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-36 pb-12 bg-charcoal grain text-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "radial-gradient(circle at 50% 0%, oklch(0.78 0.13 80 / 0.4), transparent 60%)",
        }} />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="divider-dot mb-4 text-saffron">
            <span className="text-[11px] tracking-[0.35em] uppercase">Get in touch</span>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-semibold leading-tight">
            Let's <em className="text-saffron-gradient not-italic">talk dawat</em>
          </h1>
          <p className="mt-5 text-cream/80 max-w-xl mx-auto">
            Tell us about your event — we'll respond on WhatsApp within minutes.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            {[
              { icon: Phone, title: "Call us", value: "0332-3336821", href: "tel:03323336821", external: false },
              { icon: MessageCircle, title: "WhatsApp", value: "Chat instantly", href: waLink("Hi Urban Zaiqa!"), external: true },
              { icon: MapPin, title: "Location", value: "Gulzar e Hijri, Karachi", href: "https://www.google.com/maps/search/?api=1&query=X47H%2BQJ%20Gulzar%20E%20Hijri%20Scheme%2033%20Karachi%20Pakistan", external: true },
              { icon: Mail, title: "Hours", value: "Open daily · 11 AM – 1 AM", href: "#", external: false },
            ].map((c, i) => (
              <motion.a
                key={c.title}
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border border border-saffron/30 hover:shadow-luxe hover:-translate-y-1 transition-all group"
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-charcoal-deep text-saffron flex items-center justify-center group-hover:scale-110 transition">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground">{c.title}</div>
                  <div className="font-display text-xl text-primary font-semibold">{c.value}</div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 rounded-3xl bg-card border border-border border border-saffron/30 p-7 sm:p-9 shadow-luxe"
          >
            <SectionHeader
              eyebrow="Send a message"
              title={<>Quick <em className="text-saffron-gradient not-italic">enquiry</em></>}
            />
            <div className="space-y-5">
              <Field label="Your name" type="text" required value={form.name} onChange={(v) => setForm({ ...form, name: v })} placeholder="e.g. Ali Khan" />
              <Field label="Phone number" type="tel" required value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} placeholder="03XX-XXXXXXX" />
              <div>
                <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-semibold">Message</label>
                <textarea
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  placeholder="Event date, number of guests, package interest..."
                  className="mt-2 w-full rounded-xl bg-background border border-border focus:border-saffron focus:ring-2 focus:ring-saffron/30 outline-none px-4 py-3 transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-primary to-charcoal-deep text-primary-foreground font-semibold hover:shadow-luxe transition group"
              >
                <Send className="h-4 w-4 group-hover:translate-x-1 transition" />
                Send via WhatsApp
              </button>
              <p className="text-xs text-center text-muted-foreground">
                Submitting opens WhatsApp with your details pre-filled.
              </p>
            </div>
          </motion.form>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-6xl px-6 mt-16"
        >
          <div className="text-center mb-6">
            <div className="divider-dot mb-3">
              <span className="text-[11px] tracking-[0.35em] uppercase font-medium">Find us</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold">
              Visit our <em className="text-saffron-gradient not-italic">kitchen</em>
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Gulzar e Hijri, Scheme 33, Karachi
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-saffron/30 shadow-luxe">
            <iframe
              title="Urban Zaiqa location"
              src="https://www.google.com/maps?q=X47H%2BQJ%2C%20Gulzar%20E%20Hijri%20Scheme%2033%2C%20Karachi%2C%20Pakistan&output=embed"
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="mt-4 text-center">
            <a
              href="https://www.google.com/maps/search/?api=1&query=X47H%2BQJ%20Gulzar%20E%20Hijri%20Scheme%2033%20Karachi%20Pakistan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-luxe transition"
            >
              <MapPin className="h-4 w-4" />
              Get directions
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function Field({
  label, type, required, value, onChange, placeholder,
}: {
  label: string; type: string; required?: boolean;
  value: string; onChange: (v: string) => void; placeholder?: string;
}) {
  return (
    <div>
      <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-semibold">{label}</label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl bg-background border border-border focus:border-saffron focus:ring-2 focus:ring-saffron/30 outline-none px-4 py-3 transition"
      />
    </div>
  );
}


import { useEffect as _useEffectTitle } from "react";
function _useTitle(t: string) { _useEffectTitle(() => { document.title = t; }, [t]); }

export default function Page() { _useTitle('Contact — Urban Zaiqa'); return <ContactPage />; }
