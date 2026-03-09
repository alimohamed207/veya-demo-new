import { motion } from "motion/react";
import { Hero } from "../components/Hero";
import { ProductCard } from "../components/ProductCard";
import { mockProducts } from "../data/mockData";
import { ShieldCheck, Truck, CreditCard, ArrowLeft, Star, Zap, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";

export function Home() {
  const featuredProducts = mockProducts.slice(0, 4);

  return (
    <div className="min-h-screen">
      <Hero />

      {/* Brand Marquee */}
      <div className="bg-white border-y border-gray-100 py-8 overflow-hidden flex whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex items-center gap-16 px-8"
        >
          {['Apple', 'Dell', 'Lenovo', 'HP', 'Asus', 'Logitech', 'Samsung', 'Sony', 'Apple', 'Dell', 'Lenovo', 'HP', 'Asus', 'Logitech', 'Samsung', 'Sony'].map((brand, i) => (
            <span key={i} className="text-2xl font-bold text-gray-300 uppercase tracking-wider">{brand}</span>
          ))}
        </motion.div>
      </div>

      {/* Modern Bento Grid - How it works */}
      <section className="py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold-dark font-bold tracking-wider text-sm uppercase mb-2 block"
            >
              كيف نعمل
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              تجربة شراء آمنة ومضمونة
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold-light/10 rounded-full blur-3xl -mr-20 -mt-20 transition-transform group-hover:scale-150 duration-700" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center mb-6">
                  <CreditCard className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">الدفع المعلق (Escrow)</h3>
                <p className="text-gray-500 text-lg max-w-md">
                  أموالك في أمان. نقوم بحجز المبلغ ولا يتم تحويله للبائع إلا بعد استلامك للمنتج والتأكد من مطابقته للمواصفات.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm relative overflow-hidden group"
            >
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-100/50 rounded-full blur-2xl -ml-10 -mb-10 transition-transform group-hover:scale-150 duration-700" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                  <ShieldCheck className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">فحص شامل</h3>
                <p className="text-gray-500">
                  فريقنا المختص يقوم بفحص كل جهاز قبل تسليمه لضمان الجودة.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm relative overflow-hidden group"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-green-50/50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-6">
                  <RefreshCw className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">استرجاع سهل</h3>
                <p className="text-gray-500">
                  إذا لم يطابق المنتج الوصف، يمكنك استرجاعه واسترداد أموالك فوراً.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-2 bg-black rounded-3xl p-8 relative overflow-hidden group text-white"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gold-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                    <Zap className="w-7 h-7 text-gold-light" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">بيع جهازك القديم اليوم</h3>
                  <p className="text-gray-400 text-lg max-w-md">
                    اعرض جهازك للبيع في دقائق، واستفد من شبكة واسعة من المشترين الجادين.
                  </p>
                </div>
                <Link to="/sell" className="shrink-0 px-8 py-4 bg-white text-black rounded-xl font-bold hover:bg-gray-100 transition-colors">
                  ابدأ البيع الآن
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">أحدث المنتجات</h2>
              <p className="text-gray-500">أجهزة مفحوصة ومضمونة بأسعار ممتازة</p>
            </div>
            <Link
              to="/marketplace"
              className="hidden sm:flex items-center gap-2 text-gold-dark font-medium hover:text-gold-main transition-colors group"
            >
              عرض الكل
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 text-center sm:hidden">
            <Link
              to="/marketplace"
              className="inline-flex items-center gap-2 text-gold-dark font-medium hover:text-gold-main transition-colors"
            >
              عرض الكل
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
