import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { mockProducts } from "../data/mockData";
import { ShieldCheck, Star, Truck, CheckCircle2, ChevronRight, AlertCircle, ShoppingBag } from "lucide-react";
import { Modal } from "../components/Modal";
import { Timeline } from "../components/Timeline";
import { useCart } from "../context/CartContext";

export function ProductDetails() {
  const { id } = useParams();
  const product = mockProducts.find(p => p.id === id);
  const [activeImage, setActiveImage] = useState(0);
  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);
  const [buyStep, setBuyStep] = useState(1);
  const { addToCart } = useCart();

  if (!product) {
    return <div className="min-h-screen flex items-center justify-center">المنتج غير موجود</div>;
  }

  const handleBuy = () => {
    if (buyStep < 3) {
      setBuyStep(buyStep + 1);
    }
  };

  return (
    <div className="min-h-screen bg-bg-light py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link to="/marketplace" className="hover:text-gold-main">السوق</Link>
          <ChevronRight className="w-4 h-4" />
          <span>{product.category}</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-gray-100">
              <img 
                src={product.images[activeImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-4">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                      activeImage === idx ? 'border-gold-main' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div>
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm mb-6">
              <div className="flex justify-between items-start mb-4">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{product.name}</h1>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-bold whitespace-nowrap">
                  {product.condition}
                </span>
              </div>
              
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-bold">
                    {product.seller.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{product.seller.name}</p>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs text-gray-500">{product.seller.rating} ({product.seller.reviews} تقييم)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <p className="text-sm text-gray-500 mb-1">السعر</p>
                <p className="text-4xl font-bold text-gray-900">{product.price.toLocaleString()} <span className="text-lg text-gray-500 font-normal">ج.م</span></p>
              </div>

              <div className="bg-gold-light/10 border border-gold-light/30 rounded-2xl p-4 mb-8 flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-gold-dark shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-gold-dark text-sm mb-1">هذا المنتج محمي بنظام الدفع المعلق من Veya</h4>
                  <p className="text-xs text-gold-dark/80">لن يتم تحويل المبلغ للبائع إلا بعد استلامك للمنتج وفحصه والتأكد من مطابقته للمواصفات.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <button 
                  onClick={() => setIsBuyModalOpen(true)}
                  className="flex-1 py-4 bg-black text-white rounded-xl font-bold text-lg hover:bg-gray-800 transition-colors shadow-lg shadow-black/10"
                >
                  شراء الآن
                </button>
                <button 
                  onClick={() => addToCart(product)}
                  className="px-6 py-4 bg-gray-100 text-gray-900 rounded-xl font-bold text-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Specs & Description */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-lg mb-4">الوصف</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">{product.description}</p>

              <h3 className="font-bold text-lg mb-4">المواصفات</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                    <p className="text-xs text-gray-500 mb-1">{key}</p>
                    <p className="font-medium text-gray-900">{value}</p>
                  </div>
                ))}
              </div>

              <h3 className="font-bold text-lg mb-4">الملحقات المشمولة</h3>
              <ul className="space-y-2">
                {product.accessoriesIncluded.map((acc, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    {acc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Buy Modal */}
      <Modal isOpen={isBuyModalOpen} onClose={() => setIsBuyModalOpen(false)} title="إتمام الشراء">
        <div className="min-h-[300px]">
          {/* Progress Bar */}
          <div className="flex items-center justify-between mb-8 relative">
            <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-100 -z-10" />
            {[1, 2, 3].map(step => (
              <div key={step} className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                buyStep >= step ? 'bg-black text-white' : 'bg-gray-100 text-gray-400'
              }`}>
                {step}
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {buyStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
              >
                <h4 className="font-bold text-lg mb-4">مراجعة الطلب</h4>
                <div className="flex gap-4 bg-gray-50 p-4 rounded-xl mb-6">
                  <img src={product.images[0]} alt="" className="w-16 h-16 rounded-lg object-cover" />
                  <div>
                    <p className="font-bold text-gray-900">{product.name}</p>
                    <p className="text-sm text-gray-500">{product.price.toLocaleString()} ج.م</p>
                  </div>
                </div>
                <div className="space-y-3 mb-8">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">المجموع الفرعي</span>
                    <span className="font-medium">{product.price.toLocaleString()} ج.م</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">رسوم حماية المشتري (Veya)</span>
                    <span className="font-medium">{(product.price * 0.05).toLocaleString()} ج.م</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">التوصيل</span>
                    <span className="font-medium text-green-600">مجاناً</span>
                  </div>
                  <div className="pt-3 border-t border-gray-200 flex justify-between">
                    <span className="font-bold">الإجمالي</span>
                    <span className="font-bold text-lg">{(product.price * 1.05).toLocaleString()} ج.م</span>
                  </div>
                </div>
                <button onClick={handleBuy} className="w-full py-3 bg-black text-white rounded-xl font-bold">متابعة للدفع</button>
              </motion.div>
            )}

            {buyStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
              >
                <h4 className="font-bold text-lg mb-4">الدفع (محاكاة)</h4>
                <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl flex items-start gap-3 mb-6">
                  <AlertCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-blue-800">هذا المبلغ سيتم حجزه في حساب وسيط (Escrow) ولن يتم تحويله للبائع إلا بعد استلامك للمنتج وفحصه.</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="border border-gray-200 rounded-xl p-4 flex items-center justify-between cursor-pointer hover:border-black transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full border-4 border-black" />
                      <span className="font-medium">البطاقة الائتمانية / مدى</span>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-8 h-5 bg-gray-200 rounded" />
                      <div className="w-8 h-5 bg-gray-200 rounded" />
                    </div>
                  </div>
                  <div className="border border-gray-200 rounded-xl p-4 flex items-center justify-between cursor-pointer hover:border-black transition-colors opacity-50">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full border border-gray-300" />
                      <span className="font-medium">Apple Pay</span>
                    </div>
                  </div>
                </div>
                
                <button onClick={handleBuy} className="w-full py-3 bg-black text-white rounded-xl font-bold">تأكيد الدفع ({(product.price * 1.05).toLocaleString()} ج.م)</button>
              </motion.div>
            )}

            {buyStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <h4 className="font-bold text-2xl mb-2">تم تأكيد الطلب بنجاح!</h4>
                <p className="text-gray-500 mb-8">تم حجز المبلغ بأمان. سنقوم بالتواصل مع البائع لاستلام المنتج وفحصه.</p>
                
                <div className="bg-gray-50 rounded-xl p-6 text-right mb-8">
                  <h5 className="font-bold mb-4">حالة الطلب</h5>
                  <Timeline steps={[
                    { title: "تم الدفع", isCompleted: true, isActive: false },
                    { title: "في انتظار تسليم البائع", isCompleted: false, isActive: true },
                    { title: "فحص Veya", isCompleted: false, isActive: false },
                    { title: "جاري التوصيل", isCompleted: false, isActive: false },
                  ]} />
                </div>

                <Link to="/dashboard" onClick={() => setIsBuyModalOpen(false)} className="inline-block w-full py-3 bg-gray-100 text-gray-900 rounded-xl font-bold hover:bg-gray-200 transition-colors">
                  متابعة الطلب في لوحة التحكم
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Modal>
    </div>
  );
}
