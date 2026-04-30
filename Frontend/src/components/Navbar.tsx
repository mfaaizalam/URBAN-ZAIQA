import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo-uz.png";
import { CartButton } from "./CartButton";

const links = [
  { to: "/", label: "Home" },
  { to: "/packages", label: "Packages" },
  { to: "/menu", label: "Menu" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-4"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`flex items-center justify-between rounded-full px-4 sm:px-5 py-2.5 transition-all duration-500 ${
            scrolled
              ? "bg-charcoal-deep/95 border border-saffron/20 shadow-luxe"
              : "bg-charcoal-deep/40 border border-cream/10"
          }`}
        >
          <Link to="/" className="flex items-center gap-3 group">
            <div className="h-11 w-11 rounded-full bg-cream flex items-center justify-center overflow-hidden ring-1 ring-saffron/40 group-hover:ring-saffron transition shrink-0">
              <img src={logo} alt="Urban Zaiqa" className="h-10 w-10 object-contain" />
            </div>
            <div className="leading-tight hidden sm:block">
              <div className="font-display text-lg text-cream font-semibold tracking-tight">
                Urban Zaiqa
              </div>
              <div className="text-[9px] tracking-[0.3em] uppercase text-saffron/80">
                Restaurant & Catering
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end className={({isActive}) => "px-4 py-2 rounded-full text-sm font-medium text-cream/75 hover:text-saffron transition relative " + (isActive ? "text-saffron" : "")}>{l.label}</NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <a
              href="tel:03323336821"
              className="flex items-center gap-2 text-sm text-cream/75 hover:text-saffron transition px-3"
            >
              <Phone className="h-3.5 w-3.5" />
              0332-3336821
            </a>
            <CartButton />
            <Link
              to="/packages"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold bg-saffron text-charcoal hover:bg-saffron-soft transition"
            >
              Book Now
            </Link>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <CartButton />
            <button
              aria-label="Open menu"
              onClick={() => setOpen((v) => !v)}
              className="h-10 w-10 rounded-full bg-cream/10 border border-cream/15 flex items-center justify-center text-cream"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden mt-3 rounded-3xl bg-charcoal-deep border border-saffron/20 shadow-luxe overflow-hidden"
            >
              <div className="flex flex-col p-4 gap-1">
                {links.map((l, i) => (
                  <motion.div
                    key={l.to}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <NavLink to={l.to} end onClick={() => setOpen(false)} className={({isActive}) => "block px-4 py-3 rounded-xl text-cream/85 hover:bg-saffron/10 hover:text-saffron transition font-medium " + (isActive ? "text-saffron bg-saffron/10" : "")}>{l.label}</NavLink>
                  </motion.div>
                ))}
                <div className="mt-2 grid grid-cols-2 gap-2">
                  <a
                    href="tel:03323336821"
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-cream/15 text-cream"
                  >
                    <Phone className="h-4 w-4" /> Call
                  </a>
                  <Link
                    to="/packages"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-saffron text-charcoal font-semibold"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
