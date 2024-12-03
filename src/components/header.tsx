import { Link } from "react-router-dom";
import { LiaGripfire } from "react-icons/lia";
import { LuUser } from "react-icons/lu";
import { BsCart } from "react-icons/bs";
import Button from "./button";

const Header = () => {
  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            {/* flame */}
            <LiaGripfire className="h-8 w-8 text-orange-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-600 text-transparent bg-clip-text">
              Incendiar
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/products/lighters"
              className="text-gray-300 hover:text-orange-500 transition"
            >
              Lighters
            </Link>
            <Link
              to="/products/vapes"
              className="text-gray-300 hover:text-orange-500 transition"
            >
              Vapes
            </Link>
            <Link
              to="/collections"
              className="text-gray-300 hover:text-orange-500 transition"
            >
              Collections
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/cart">
              <Button variant="outline" size="sm" className="relative">
                {/* CART */}
                <BsCart className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </Button>
            </Link>
            <Link to="/account">
              <Button variant="outline" size="sm">
                {/* Profile */}
                <LuUser className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
