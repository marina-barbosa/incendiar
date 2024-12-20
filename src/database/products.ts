import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: 1,
    name: "Phoenix Flame Lighter",
    price: 89.99,
    description: "Elegant lighter with flame-colored metallic finish and artistic phoenix design.",
    image: "../assets/default.png",
    category: "lighter",
    featured: true
  },
  {
    id: 2,
    name: "Dragon's Breath Vape",
    price: 149.99,
    description: "Premium vape device with temperature control and artistic dragon scale pattern.",
    image: "../assets/default.png",
    category: "vape",
    featured: true
  },
  {
    id: 3,
    name: "Inferno Torch Lighter",
    price: 69.99,
    description: "Powerful torch lighter with adjustable flame and sleek design.",
    image: "../assets/default.png",
    category: "lighter"
  },
  {
    id: 4,
    name: "Ember Vape Pod",
    price: 129.99,
    description: "Compact vape pod system with stunning ember-like LED effects.",
    image: "../assets/default.png",
    category: "vape"
  }
];