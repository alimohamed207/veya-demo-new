import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ShieldCheck, ArrowLeft } from "lucide-react";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-bg-light pt-16 pb-32">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-gold-light via-gold-main to-gold-dark blur-3xl rounded-full mix-blend-multiply" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Left Mascot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            delay: 0.5 
          }}
          className="hidden lg:block absolute top-10 left-0 xl:-left-10 w-72 h-72 z-20 pointer-events-none"
        >
          <motion.img 
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            src="/mascot.png" 
            alt="Veya Mascot" 
            className="w-full h-full object-contain drop-shadow-2xl"
          />
        </motion.div>

        {/* Right Mascot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            delay: 0.6 
          }}
          className="hidden lg:block absolute top-10 right-0 xl:-right-10 w-72 h-72 z-20 pointer-events-none"
        >
          <motion.img 
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
            src="/mascot2.png" 
            alt="Veya Mascot" 
            className="w-full h-full object-contain drop-shadow-2xl"
          />
        </motion.div>

        <div className="text-center max-w-3xl mx-auto relative z-30">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-600 mb-8 shadow-sm"
          >
            <ShieldCheck className="w-4 h-4 text-gold-main" />
            <span>منصة آمنة 100% للبائع والمشتري</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-tight"
          >
            اشتري لابات مستعملة{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-main to-gold-dark">
              بدون خوف من النصب
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Veya تحمي البائع والمشتري من خلال الدفع المعلق (Escrow) وفحص المنتج أثناء التوصيل لضمان مطابقة المواصفات.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/marketplace"
              className="w-full sm:w-auto px-8 py-4 bg-black text-white rounded-full font-medium text-lg hover:bg-gray-800 transition-all hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              تصفح المنتجات
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <Link to="/sell" className="w-full sm:w-auto px-8 py-4 bg-white text-black border border-gray-200 rounded-full font-medium text-lg hover:bg-gray-50 transition-all hover:shadow-sm flex items-center justify-center">
              بيع منتجك
            </Link>
          </motion.div>
        </div>

        {/* Floating Mockups */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-20 relative mx-auto max-w-5xl"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white p-2">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2000"
              alt="Veya Platform"
              className="w-full h-auto rounded-xl"
            />
            
            {/* Overlay UI Elements to simulate app */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-10 right-10 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-xl border border-white/20 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">تم فحص المنتج</p>
                <p className="text-xs text-gray-500">مطابق للمواصفات 100%</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 left-10 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-xl border border-white/20 flex items-center gap-4"
            >
               <div className="w-12 h-12 rounded-full bg-gold-light/20 flex items-center justify-center">
                <span className="text-gold-dark font-bold">Escrow</span>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">المبلغ معلق بأمان</p>
                <p className="text-xs text-gray-500">حتى استلام المشتري</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
