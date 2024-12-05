import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import { ProductDetails } from "./components/productDetails";
import Home from "./pages/home";
import Account from "./pages/account";
import { LoginForm } from "./components/login";
import { RegisterForm } from "./components/register";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-zinc-950">
        <Header />
        <main className="pt-16 min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/account" element={<Account />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            {/* <Route path="/products/:category" element={<Products />} />
            <Route path="/cart" element={<Cart />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
