import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export function CartSidebar() {
  const { isCartOpen, setIsCartOpen, items, removeFromCart, total } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5" />
                <h2 className="font-bold text-lg">سلة المشتريات</h2>
                <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-xs font-bold">
                  {items.length}
                </span>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-gray-500 space-y-4">
                  <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-2">
                    <ShoppingBag className="w-10 h-10 text-gray-300" />
                  </div>
                  <p className="font-medium text-lg">السلة فارغة</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="px-6 py-3 bg-gray-100 text-gray-900 rounded-xl font-bold hover:bg-gray-200 transition-colors"
                  >
                    تصفح المنتجات
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map(item => (
                    <motion.div 
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      key={item.id} 
                      className="flex gap-4 bg-white border border-gray-100 p-4 rounded-2xl shadow-sm"
                    >
                      <img src={item.images[0]} alt={item.name} className="w-20 h-20 object-cover rounded-xl bg-gray-50" />
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="font-bold text-gray-900 line-clamp-1">{item.name}</h3>
                          <p className="text-xs text-gray-500 mt-1">{item.category}</p>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <p className="font-bold text-gold-dark">{item.price.toLocaleString()} ج.م</p>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-400 hover:text-red-600 hover:bg-red-50 p-2 rounded-lg transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-gray-100 bg-white shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>المجموع الفرعي</span>
                    <span>{total.toLocaleString()} ج.م</span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>رسوم حماية المشتري (5%)</span>
                    <span>{(total * 0.05).toLocaleString()} ج.م</span>
                  </div>
                  <div className="pt-3 border-t border-gray-100 flex justify-between items-center">
                    <span className="font-bold text-gray-900">الإجمالي</span>
                    <span className="text-2xl font-bold text-gray-900">{(total * 1.05).toLocaleString()} ج.م</span>
                  </div>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-full py-4 bg-black text-white rounded-xl font-bold text-lg hover:bg-gray-800 transition-all hover:shadow-lg flex items-center justify-center gap-2 group"
                >
                  إتمام الشراء
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
