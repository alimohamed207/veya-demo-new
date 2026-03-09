import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Package, ShoppingBag, ClipboardCheck, CheckCircle2, AlertCircle } from "lucide-react";
import { Timeline } from "../components/Timeline";
import { cn } from "../utils/cn";

export function Dashboard() {
  const [activeTab, setActiveTab] = useState<'buyer' | 'seller' | 'inspector'>('buyer');

  return (
    <div className="min-h-screen bg-bg-light py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">لوحة التحكم (نسخة تجريبية)</h1>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {[
            { id: 'buyer', label: 'المشتري', icon: <ShoppingBag className="w-4 h-4" /> },
            { id: 'seller', label: 'البائع', icon: <Package className="w-4 h-4" /> },
            { id: 'inspector', label: 'الفاحص (Veya)', icon: <ClipboardCheck className="w-4 h-4" /> },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-colors whitespace-nowrap",
                activeTab === tab.id 
                  ? "bg-black text-white" 
                  : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
              )}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'buyer' && (
            <motion.div
              key="buyer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
                  <div>
                    <h3 className="font-bold text-lg">طلب #10492</h3>
                    <p className="text-sm text-gray-500">MacBook Pro M1 2020</p>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-bold">
                    قيد الفحص
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-4">تتبع الطلب</h4>
                    <Timeline steps={[
                      { title: "تم الدفع", description: "تم حجز المبلغ في Escrow", isCompleted: true, isActive: false },
                      { title: "استلام من البائع", description: "تم استلام المنتج من البائع", isCompleted: true, isActive: false },
                      { title: "فحص Veya", description: "جاري فحص المنتج ومطابقته", isCompleted: false, isActive: true },
                      { title: "جاري التوصيل", isCompleted: false, isActive: false },
                      { title: "تم التسليم", isCompleted: false, isActive: false },
                    ]} />
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-bold text-gray-900 mb-4">تفاصيل الدفع</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">حالة الدفع</span>
                        <span className="font-bold text-green-600 flex items-center gap-1"><CheckCircle2 className="w-4 h-4"/> معلق (آمن)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">المبلغ الإجمالي</span>
                        <span className="font-bold">3,675 ج.م</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'seller' && (
            <motion.div
              key="seller"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <p className="text-sm text-gray-500 mb-1">الأرباح المعلقة</p>
                  <p className="text-2xl font-bold text-gray-900">3,500 <span className="text-sm font-normal">ج.م</span></p>
                  <p className="text-xs text-gold-dark mt-2 flex items-center gap-1"><AlertCircle className="w-3 h-3"/> سيتم تحويلها بعد استلام المشتري</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <p className="text-sm text-gray-500 mb-1">المنتجات النشطة</p>
                  <p className="text-2xl font-bold text-gray-900">2</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <p className="text-sm text-gray-500 mb-1">التقييم</p>
                  <p className="text-2xl font-bold text-gray-900">4.8 <span className="text-sm font-normal text-gray-500">/ 5</span></p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-lg mb-6">منتجاتي</h3>
                <div className="border border-gray-100 rounded-xl overflow-hidden">
                  <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-gray-50">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-200 rounded-lg" />
                      <div>
                        <p className="font-bold text-gray-900">MacBook Pro M1 2020</p>
                        <p className="text-sm text-gray-500">3,500 ج.م</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-bold">
                      مباع (قيد الفحص)
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-200 rounded-lg" />
                      <div>
                        <p className="font-bold text-gray-900">AirPods Pro Gen 2</p>
                        <p className="text-sm text-gray-500">600 ج.م</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-bold">
                      نشط
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'inspector' && (
            <motion.div
              key="inspector"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
                  <div>
                    <h3 className="font-bold text-lg">مهمة فحص #10492</h3>
                    <p className="text-sm text-gray-500">MacBook Pro M1 2020</p>
                  </div>
                  <button className="px-4 py-2 bg-black text-white rounded-xl text-sm font-bold">
                    اعتماد الفحص
                  </button>
                </div>

                <div className="space-y-4">
                  {[
                    "تشغيل الجهاز والتأكد من عمله",
                    "فحص الشاشة (لا يوجد بيكسلات ميتة)",
                    "مطابقة المواصفات (الرام، التخزين، المعالج)",
                    "فحص المنافذ (USB-C, Audio)",
                    "اختبار الكيبورد والتراكباد",
                    "التأكد من الملحقات المرفقة (شاحن، كابل)"
                  ].map((task, i) => (
                    <label key={i} className="flex items-center gap-3 p-4 border border-gray-100 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
                      <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-gold-main focus:ring-gold-main" />
                      <span className="font-medium text-gray-700">{task}</span>
                    </label>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
