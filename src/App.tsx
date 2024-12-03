import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-zinc-950">
        <Header />
        <main className="pt-16">
          <Routes>
            {/* <Route path="/" element={<Hero />} />
            <Route path="/products/:category" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/account" element={<Account />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
