import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type CartItem = {
  id: string;
  name: string;
  price: string;
  category: string;
  qty: number;
};

type CartContextType = {
  items: CartItem[];
  count: number;
  add: (item: Omit<CartItem, "qty">) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  open: boolean;
  setOpen: (v: boolean) => void;
  sendOrder: () => void;
  canCheckout: boolean;
};

const CartContext = createContext<CartContextType | null>(null);
const STORAGE_KEY = "uz_cart_v1";

// Determine minimum quantity based on price unit
export function getMinQty(price: string): { min: number; label: string } {
  const p = price.toLowerCase();
  if (p.includes("/dozen")) return { min: 5, label: "Min. 5 dozens required" };
  if (p.includes("/kg"))    return { min: 2, label: "Min. 2 kg required" };
  return                           { min: 5, label: "Min. 5 pieces required" };
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {
      // ignore
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items, hydrated]);

  const add: CartContextType["add"] = (item) => {
    setItems((prev) => {
      const found = prev.find((i) => i.id === item.id);
      if (found) {
        return prev.map((i) => (i.id === item.id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const remove = (id: string) => setItems((p) => p.filter((i) => i.id !== id));

  const setQty = (id: string, qty: number) =>
    setItems((p) =>
      qty <= 0
        ? p.filter((i) => i.id !== id)
        : p.map((i) => (i.id === id ? { ...i, qty } : i)),
    );

  const clear = () => setItems([]);

  // Every item must individually meet its minimum quantity
  const canCheckout =
    items.length > 0 &&
    items.every((i) => i.qty >= getMinQty(i.price).min);

  const sendOrder = () => {
    if (!canCheckout) return;
    const msg = buildOrderMessage(items);
    const url = `https://wa.me/923323336821?text=${encodeURIComponent(msg)}`;
    localStorage.removeItem(STORAGE_KEY);
    setItems([]);
    setOpen(false);
    window.open(url, "_blank");
  };

  const count = items.reduce((s, i) => s + i.qty, 0);

  return (
    <CartContext.Provider
      value={{ items, count, add, remove, setQty, clear, open, setOpen, sendOrder, canCheckout }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}

export function buildOrderMessage(items: CartItem[]) {
  const lines = [
    "*New Order — Urban Zaiqa*",
    "",
    ...items.map((i, idx) => `${idx + 1}. ${i.name} × ${i.qty}  (${i.price})`),
    "",
    `_Total items: ${items.reduce((s, i) => s + i.qty, 0)}_`,
    "",
    "Please confirm availability and total. Thank you!",
  ];
  return lines.join("\n");
}
