import React from 'react';
import { BsCart2 } from "react-icons/bs";
import { Product } from '../types/product';
import { useNavigate } from 'react-router-dom';
// import { useCartStore } from '../stores/cartStore';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();
  // const addItem = useCartStore(state => state.addItem);

  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target.closest('button')) {
      navigate(`/product/${product.id}`);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="group relative bg-black/80 rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 cursor-pointer"
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
        <p className="text-gray-300 text-sm mb-3">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-orange-500 font-bold">${product.price}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              // addItem(product);
            }}
            className="bg-orange-500 p-2 rounded-full hover:bg-orange-600 transition-colors"
          >
            <BsCart2 className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};