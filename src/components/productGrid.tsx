import { ProductCard } from "./productCard";
// import { products } from '../database/products';
import { useEffect, useState } from "react";
import api from "../services/api";
import type { Product } from "../types/product";

export const ProductGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get<Product[]>("/products");
        console.log("API Response:", response.data);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <section id="collections" className="py-20 relative">
      <div
        id="gradiente-r"
        className="absolute inset-0 bg-gradient-to-r from-[#060606] to-[#0f0f11]"
      />
      <div
        id="gradiente-b"
        className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"
      />
      <div className="container mx-auto px-4 relative">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
          Collections
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
