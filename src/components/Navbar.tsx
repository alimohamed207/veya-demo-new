import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, User, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "../utils/cn";
import { useCart } from "../context/CartContext";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { items, setIsCartOpen } = useCart();

  const navLinks = [
    { name: "الرئيسية", path: "/" },
    { name: "السوق", path: "/marketplace" },
    { name: "لوحة التحكم", path: "/dashboard" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Veya Logo" className="w-10 h-10 object-contain" />
            <span className="font-bold text-xl tracking-tight">ڤيا ماركت</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-gold-main relative",
                    location.pathname === link.path ? "text-gold-main" : "text-gray-600"
                  )}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-gold-main rounded-full"
                    />
                  )}
                </Link>
              ))}
            </div>
            
            <div className="flex items-center gap-4 border-r border-gray-200 pr-4">
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-gray-600 hover:text-gold-main transition-colors rounded-full hover:bg-gray-50"
              >
                <ShoppingBag className="w-5 h-5" />
                {items.length > 0 && (
                  <span className="absolute top-0 right-0 w-4 h-4 bg-gold-main text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {items.length}
                  </span>
                )}
              </button>
              <Link to="/dashboard" className="p-2 text-gray-600 hover:text-gold-main transition-colors rounded-full hover:bg-gray-50">
                <User className="w-5 h-5" />
              </Link>
              <Link to="/sell" className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                بيع منتجك
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-gray-600 hover:text-gold-main transition-colors rounded-full hover:bg-gray-50"
            >
              <ShoppingBag className="w-5 h-5" />
              {items.length > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-gold-main text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {items.length}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 hover:text-black"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-white border-b border-gray-100 px-4 py-4 space-y-4"
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "block text-base font-medium",
                location.pathname === link.path ? "text-gold-main" : "text-gray-600"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
            <Link to="/sell" onClick={() => setIsOpen(false)} className="w-full text-center bg-black text-white px-4 py-3 rounded-xl text-sm font-medium">
              بيع منتجك
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
