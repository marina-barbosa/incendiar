import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";
import { BsCart2 } from "react-icons/bs";
import { products } from '../database/products';
// import { useCartStore } from '../stores/cartStore';

export const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // const addItem = useCartStore(state => state.addItem);
  
  const product = products.find(p => p.id === Number(id));
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Product not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-black">
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-orange-500 hover:text-orange-600 mb-8"
        >
          <FaArrowLeft className="mr-2" /> Back
        </button>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-xl overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">{product.name}</h1>
            <p className="text-xl text-gray-300">{product.description}</p>
            <p className="text-3xl font-bold text-orange-500">${product.price}</p>
            
            <button
              // onClick={() => addItem(product)}
              className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <BsCart2 className="h-5 w-5" />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};