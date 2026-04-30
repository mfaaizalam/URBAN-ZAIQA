import { Link } from "react-router-dom";
import { MessageCircle, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo-uz.png";
import { waLink } from "@/lib/data";

const FacebookIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.2-1.5 1.5-1.5h1.5V5.1c-.3 0-1.1-.1-2.1-.1-2.1 0-3.6 1.3-3.6 3.6V11H8v3h2.8v7h2.7Z" />
  </svg>
);
const InstagramIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
);

export function Footer() {
  return (
    <footer className="relative bg-charcoal grain text-cream pt-20 pb-8 mt-24 overflow-hidden">
      <div
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(40% 60% at 20% 0%, oklch(0.78 0.17 65 / 0.18), transparent 60%), radial-gradient(40% 60% at 90% 100%, oklch(0.55 0.16 35 / 0.2), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 max-w-md">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-12 w-12 rounded-full bg-cream flex items-center justify-center ring-1 ring-saffron/30">
              <img src={logo} alt="" className="h-11 w-11 object-contain" />
            </div>
            <div>
              <div className="font-display text-2xl text-cream font-semibold tracking-tight">
                Urban Zaiqa
              </div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-saffron/80">
                Restaurant & Catering
              </div>
            </div>
          </div>
          <p className="text-cream/65 leading-relaxed">
            Authentic taste of Pakistan, crafted with heritage spices and served with elegance. From
            intimate dawats to grand weddings — Urban Zaiqa makes every gathering unforgettable.
          </p>
          <div className="flex gap-2 mt-6">
            {[
              { icon: FacebookIcon, href: "#" },
              { icon: InstagramIcon, href: "#" },
              { icon: MessageCircle, href: waLink("Hi! I'd like to know more about Urban Zaiqa.") },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-cream/5 border border-cream/15 flex items-center justify-center hover:bg-saffron hover:text-charcoal hover:border-saffron transition"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4 text-saffron font-medium">Quick Links</h4>
          <ul className="space-y-2.5 text-cream/70 text-sm">
            <li>
              <Link to="/" className="hover:text-saffron transition">Home</Link>
            </li>
            <li>
              <Link to="/packages" className="hover:text-saffron transition">Catering Packages</Link>
            </li>
            <li>
              <Link to="/menu" className="hover:text-saffron transition">Full Menu</Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-saffron transition">Gallery</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-saffron transition">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4 text-saffron font-medium">Contact</h4>
          <ul className="space-y-3 text-cream/70 text-sm">
            <li className="flex items-start gap-3">
              <Phone className="h-4 w-4 mt-0.5 text-saffron shrink-0" />
              <a href="tel:03323336821" className="hover:text-saffron transition">
                0332-3336821
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MessageCircle className="h-4 w-4 mt-0.5 text-saffron shrink-0" />
              <a
                href={waLink("Hello Urban Zaiqa!")}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-saffron transition"
              >
                WhatsApp Us
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="h-4 w-4 mt-0.5 text-saffron shrink-0" />
              <span>Gulzar e Hijri, Karachi</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative mt-16 pt-6 border-t border-cream/10 mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-cream/50">
        <div>© {new Date().getFullYear()} Urban Zaiqa Restaurant & Catering. All rights reserved.</div>
        <div className="font-display italic">Crafted with heritage. Served with love.</div>
      </div>
    </footer>
  );
}
