import { FiTrash2 } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
// import { useCartStore } from '../stores/cartStore';
// import { useAuthStore } from '../stores/authStore';
import { useNavigate } from "react-router-dom";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Cart = ({ isOpen, onClose }: CartProps) => {
  // const { items, removeItem, updateQuantity, total } = useCartStore();
  // const user = useAuthStore(state => state.user);
  const navigate = useNavigate();
  

  const user = true;

  const items = [
    {
      id: 1,
      name: "Product 1",
      price: 10,
      quantity: 2,
      image: "/assets/default.png",
    },
  ];

  if (!isOpen) return null;

  const handleCheckout = () => {
    if (!user) {
      navigate("/login");
      onClose();
      return;
    }
    // Handle checkout logic here
    alert("Checkout functionality would go here!");
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-gray-900 shadow-xl">
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <h2 className="text-xl font-bold">Your Cart</h2>
          <button type="button" onClick={onClose} className="p-2 hover:text-orange-500">
            <GrClose />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {items.length === 0 ? (
            <p className="text-center text-gray-400">Your cart is empty</p>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 bg-gray-800/50 p-4 rounded-lg"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-orange-500">${item.price}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button type="button"
                      onClick={() =>
                        // updateQuantity(item.product.id, item.quantity - 1)
                        console.log("clicked")
                      }
                      className="px-2 py-1 bg-gray-700 rounded"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button type="button"
                      onClick={() =>
                        // updateQuantity(item.product.id, item.quantity + 1)
                        console.log("clicked")
                      }
                      className="px-2 py-1 bg-gray-700 rounded"
                    >
                      +
                    </button>
                    <button type="button"
                      // onClick={() => removeItem(item.product.id)}
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

        <div className="border-t border-gray-800 p-4">
          <div className="flex justify-between mb-4">
            <span className="font-semibold">Total:</span>
            <span className="text-orange-500 font-bold">
              {/* ${total.toFixed(2)} */}
            </span>
          </div>
          <button type="button"
            onClick={handleCheckout}
            disabled={items.length === 0}
            className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-lg disabled:opacity-50"
          >
            {user ? "Checkout" : "Login to Checkout"}
          </button>
        </div>
      </div>
    </div>
  );
};
