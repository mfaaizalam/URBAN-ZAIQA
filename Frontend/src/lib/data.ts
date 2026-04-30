export const WHATSAPP_NUMBER = "923323336821";
export const PHONE_DISPLAY = "0332-3336821";

/** Build a standard wa.me link with a pre-filled message. */
export const waLink = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

export type Package = {
  id: number;
  name: string;
  price: number;
  tagline: string;
  items: string[];
  featured?: boolean;
};

export const packages: Package[] = [
  {
    id: 1,
    name: "Shahi Royale",
    price: 1200,
    tagline: "Our most luxurious offering",
    featured: true,
    items: [
      "Beef Biryani",
      "Mutton Karahi",
      "Chicken Tikka",
      "Lab e Shireen",
      "Mint Roll",
      "Milky Naan",
      "Taftan",
      "Salad Platter",
      "Dahi Raita",
      "Welcome Juice",
    ],
  },
  {
    id: 3,
    name: "Bahar e Zaiqa",
    price: 900,
    tagline: "Premium signature spread",
    items: [
      "Chicken Biryani",
      "Chicken White Karahi",
      "Jheenga Fry",
      "Chicken Pocket",
      "Pista Delight",
      "Milky Naan",
      "Taftan",
      "Green Salad",
      "Dahi Raita",
      "Jumbo Cold Drink",
    ],
  },
  {
    id: 2,
    name: "Daawat e Khaas",
    price: 700,
    tagline: "A complete feast",
    items: [
      "Peas Pulao",
      "Beef Korma",
      "Fish Fry",
      "Chicken Macaroni",
      "Rabri Kheer",
      "Milky Naan",
      "Taftan",
      "Green Salad",
      "Dahi Raita",
      "Welcome Juice",
    ],
  },
  {
    id: 6,
    name: "Mehfil Special",
    price: 700,
    tagline: "Crowd-pleasing classics",
    items: [
      "Beef Biryani",
      "Chicken Korma",
      "Chicken Malai Boti",
      "Special Zarda",
      "Milky Naan",
      "Taftan",
      "Salad Platter",
      "Dahi Raita",
      "Cold Drink",
    ],
  },
  {
    id: 7,
    name: "Rasm e Dawat",
    price: 650,
    tagline: "Balanced & bold",
    items: [
      "Chicken Biryani",
      "Chicken Korma",
      "Beef Seekh Kabab",
      "Spring Roll",
      "Kheer",
      "Milky Naan",
      "Taftan",
      "Dahi Raita",
      "Welcome Juice",
    ],
  },
  {
    id: 9,
    name: "Daawat Deluxe",
    price: 650,
    tagline: "Fusion of flavours",
    items: [
      "Beef Biryani",
      "Chicken Korma",
      "Doodh Dulari",
      "Wanton",
      "Chowmein",
      "Milky Naan",
      "Taftan",
      "Green Salad",
      "Dahi Raita",
      "Welcome Juice",
    ],
  },
  {
    id: 4,
    name: "Khushi ka Daawat",
    price: 600,
    tagline: "Family favourite",
    items: [
      "Chicken Biryani",
      "Chicken Korma",
      "Chicken Roast",
      "Fruit Custard",
      "Milky Naan",
      "Taftan",
      "Green Salad",
      "Dahi Raita",
      "Jumbo Cold Drink",
      "Welcome Juice",
    ],
  },
  {
    id: 8,
    name: "Zaiqa Classic",
    price: 600,
    tagline: "Tradition meets variety",
    items: [
      "Beef Biryani",
      "Chicken Korma",
      "Chicken Reshmi Kabab",
      "Chicken Chowmein",
      "Fruit Custard",
      "Milky Naan",
      "Taftan",
      "Green Salad",
      "Dahi Raita",
      "Cold Drink",
    ],
  },
  {
    id: 5,
    name: "Nashta Special",
    price: 600,
    tagline: "Traditional desi breakfast",
    items: [
      "Chandan Kabab",
      "Puri Paratha",
      "Kachori",
      "Tarkari",
      "Gulab Jamun",
      "Green Chutney",
      "Cold Drink",
    ],
  },
];

export type MenuItem = { name: string; price: string };
export type MenuCategory = { title: string; icon: string; items: MenuItem[] };

export const menu: MenuCategory[] = [
  {
    title: "Rice & Biryani",
    icon: "🍚",
    items: [
      { name: "Mutton Yakhni Pulao", price: "Rs 3500/kg" },
      { name: "Beef Yakhni Pulao", price: "Rs 2300/kg" },
      { name: "Chicken Yakhni Pulao", price: "Rs 1600/kg" },
      { name: "Kabuli Pulao", price: "Rs 4000/kg" },
      { name: "Dumba Kabuli Pulao", price: "Rs 4000/kg" },
      { name: "Biryani", price: "Rs 3500/kg" },
      { name: "Fish Biryani", price: "Rs 2300/kg" },
      { name: "Jheenga Biryani", price: "Rs 3500/kg" },
      { name: "Beef Kofta Biryani", price: "Rs 2500/kg" },
      { name: "Chicken Kofta Biryani", price: "Rs 2300/kg" },
    ],
  },
  {
    title: "Gosht / Karahi / Curry",
    icon: "🍖",
    items: [
      { name: "Mutton Karahi", price: "Rs 3000/kg" },
      { name: "Beef Korma", price: "Rs 2000/kg" },
      { name: "Chicken Korma", price: "Rs 1400/kg" },
      { name: "Mutton Bhuna Gosht", price: "Rs 3000/kg" },
      { name: "Beef Bhuna Gosht", price: "Rs 2000/kg" },
      { name: "Chicken Bhuna Gosht", price: "Rs 1300/kg" },
      { name: "Mutton Aloo Gosht", price: "Rs 2800/kg" },
      { name: "Beef Aloo Gosht", price: "Rs 1600/kg" },
      { name: "Chicken Aloo Gosht", price: "Rs 1300/kg" },
    ],
  },
  {
    title: "Traditional",
    icon: "🍲",
    items: [
      { name: "Beef Nihari", price: "Rs 2000/kg" },
      { name: "Chicken Nihari", price: "Rs 1500/kg" },
      { name: "Mutton Nihari", price: "Rs 3300/kg" },
      { name: "Beef Haleem", price: "Rs 600/kg" },
      { name: "Chicken Haleem", price: "Rs 500/kg" },
      { name: "Mutton Paya", price: "Rs 2000/kg" },
      { name: "Beef Paya", price: "Rs 1600/kg" },
      { name: "Kari", price: "Rs 1800/kg" },
    ],
  },
  {
    title: "Vegetable & Sides",
    icon: "🥘",
    items: [
      { name: "Mix Sabzi", price: "Rs 800/kg" },
      { name: "Bhindi", price: "Rs 800/kg" },
      { name: "Mash Daal", price: "Rs 900/kg" },
      { name: "Chane Ki Daal", price: "Rs 1800/kg" },
    ],
  },
  {
    title: "BBQ & Special",
    icon: "🍢",
    items: [
      { name: "Mutton Namkeen Roast", price: "Rs 3500/kg" },
      { name: "Beef Namkeen Roast", price: "Rs 2500/kg" },
      { name: "Chicken Roast", price: "Rs 1600/kg" },
      { name: "Jheenga Karahi", price: "Rs 3000/kg" },
      { name: "Fish Korma", price: "Rs 2500/kg" },
      { name: "Fish Salan", price: "Rs 2200/kg" },
    ],
  },
  {
    title: "Fast Food",
    icon: "🍔",
    items: [
      { name: "Zinger Burger", price: "Rs 300" },
      { name: "Beef Burger", price: "Rs 350" },
      { name: "Chicken Broast", price: "Rs 1800/kg" },
      { name: "Chicken Sandwich Deals", price: "Rs 450 – 500" },
      { name: "Chicken Ala Kiev", price: "Rs 3000/kg" },
      { name: "Pineapple Chicken", price: "Rs 2000/kg" },
      { name: "Mango Chicken", price: "Rs 2000/kg" },
    ],
  },
  {
    title: "Snacks (min order 5 dozen)",
    icon: "🥟",
    items: [
      { name: "Aloo Samosa", price: "Rs 360/dozen" },
      { name: "Keema Samosa", price: "Rs 420/dozen" },
      { name: "Chicken Samosa", price: "Rs 480/dozen" },
      { name: "Chicken Roll", price: "Rs 600/dozen" },
      { name: "Wanton", price: "Rs 240/dozen" },
      { name: "Spring Roll", price: "Rs 30/piece" },
      { name: "Chicken Stick", price: "Rs 60/piece" },
      { name: "Kachori", price: "Rs 20/piece" },
    ],
  },
  {
    title: "Desserts",
    icon: "🍰",
    items: [
      { name: "Gajar ka Halwa", price: "Rs 1200/kg" },
      { name: "Pudding", price: "Rs 1000/kg" },
      { name: "Shahi Tukda", price: "Rs 5000/kg" },
      { name: "Kheer / Rabri", price: "On request" },
    ],
  },
];
