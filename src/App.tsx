import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Marketplace } from "./pages/Marketplace";
import { ProductDetails } from "./pages/ProductDetails";
import { Dashboard } from "./pages/Dashboard";
import { SellProduct } from "./pages/SellProduct";
import { CartProvider } from "./context/CartContext";
import { CartSidebar } from "./components/CartSidebar";

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col font-sans">
          <Navbar />
          <CartSidebar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/sell" element={<SellProduct />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}
