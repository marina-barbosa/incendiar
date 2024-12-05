import { FiTrash2, FiX } from 'react-icons/fi';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface CartItem {
  product: Product;
  quantity: number;
}

const mockUser = {
  id: 1,
  name: 'John Doe',
};

const mockCartItems: CartItem[] = [
  {
    product: {
      id: 1,
      name: 'Lighter',
      price: 9.99,
      image: 'https://via.placeholder.com/150',
    },
    quantity: 2,
  },
  {
    product: {
      id: 2,
      name: 'Vape',
      price: 29.99,
      image: 'https://via.placeholder.com/150',
    },
    quantity: 1,
  },
];

export const Cart = ({ isOpen, onClose }: CartProps) => {
  const [items, setItems] = useState<CartItem[]>(mockCartItems);
  const [user] = useState(mockUser); 
  const navigate = useNavigate();

  const removeItem = (productId: number) => {
    setItems(items.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity <= 0) return;
    setItems(items.map(item =>
      item.product.id === productId
        ? { ...item, quantity: newQuantity }
        : item
    ));
  };

  const total = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  if (!isOpen) return null;

  const handleCheckout = () => {
    if (!user) {
      navigate('/login');
      onClose();
      return;
    }
    // Handle checkout logic here
    alert('Checkout functionality would go here!');
  };

  return (
    <div id='cart' className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm text-white">
      <div style={{ height: '100vh' }}
      id='cart-content' className="absolute right-0 top-0 w-full max-w-md bg-gray-900 shadow-xl">
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <h2 className="text-xl font-bold">Your Cart</h2>
          <button type="button" onClick={onClose} className="p-2 hover:text-orange-500">
            <FiX />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-900">
          {items.length === 0 ? (
            <p className="text-center text-gray-400">Your cart is empty</p>
          ) : (
            items.map(item => (
              <div key={item.product.id} className="flex gap-4 bg-gray-800/50 p-4 rounded-lg">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">{item.product.name}</h3>
                  <p className="text-orange-500">${item.product.price}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="px-2 py-1 bg-gray-700 rounded"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="px-2 py-1 bg-gray-700 rounded"
                    >
                      +
                    </button>
                    <button
                      type="button"
                      onClick={() => removeItem(item.product.id)}
                      className="ml-auto text-red-500 hover:text-red-400"
                    >
                      <FiTrash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="border-t border-gray-800 p-4 bg-gray-900">
          <div className="flex justify-between mb-4">
            <span className="font-semibold">Total:</span>
            <span className="text-orange-500 font-bold">${total.toFixed(2)}</span>
          </div>
          <button
            type="button"
            onClick={handleCheckout}
            disabled={items.length === 0}
            className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-lg disabled:opacity-50"
          >
            {user ? 'Checkout' : 'Login to Checkout'}
          </button>
        </div>
      </div>
    </div>
  );
};
