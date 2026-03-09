import { useState } from "react";
import { motion } from "motion/react";
import { Upload, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export function SellProduct() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-bg-light py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl p-12 shadow-sm border border-gray-100"
          >
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="w-12 h-12 text-green-500" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">تم إضافة منتجك بنجاح!</h2>
            <p className="text-gray-500 mb-8 text-lg">
              منتجك الآن معروض في السوق. سنقوم بإعلامك فور قيام أحد المشترين بالطلب.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/dashboard"
                className="px-8 py-4 bg-black text-white rounded-xl font-bold hover:bg-gray-800 transition-colors"
              >
                الذهاب للوحة التحكم
              </Link>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setStep(1);
                }}
                className="px-8 py-4 bg-gray-100 text-gray-900 rounded-xl font-bold hover:bg-gray-200 transition-colors"
              >
                إضافة منتج آخر
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-light py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">بيع منتجك</h1>
          <p className="text-gray-500">اعرض جهازك للبيع بأمان وبدون عمولات خفية.</p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Progress Steps */}
          <div className="flex border-b border-gray-100">
            {['المعلومات الأساسية', 'الصور والتفاصيل', 'السعر والنشر'].map((label, i) => (
              <div 
                key={i} 
                className={`flex-1 py-4 text-center text-sm font-bold transition-colors ${
                  step >= i + 1 ? 'text-gold-dark border-b-2 border-gold-main bg-gold-light/5' : 'text-gray-400'
                }`}
              >
                {i + 1}. {label}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="p-8">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">اسم المنتج</label>
                    <input type="text" required placeholder="مثال: MacBook Pro M1 2020" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gold-main focus:border-transparent outline-none transition-all" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">الفئة</label>
                      <select required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gold-main focus:border-transparent outline-none transition-all bg-white">
                        <option value="">اختر الفئة</option>
                        <option value="لابتوبات">لابتوبات</option>
                        <option value="شاشات">شاشات</option>
                        <option value="كيبوردات">كيبوردات</option>
                        <option value="ماوس">ماوس</option>
                        <option value="إكسسوارات">إكسسوارات</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">الماركة</label>
                      <input type="text" required placeholder="مثال: Apple" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gold-main focus:border-transparent outline-none transition-all" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">حالة المنتج</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {['ممتاز', 'جيد جداً', 'جيد', 'مقبول'].map(condition => (
                        <label key={condition} className="cursor-pointer">
                          <input type="radio" name="condition" className="peer sr-only" required />
                          <div className="text-center px-4 py-3 rounded-xl border border-gray-200 peer-checked:border-gold-main peer-checked:bg-gold-light/10 peer-checked:text-gold-dark font-medium transition-all">
                            {condition}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">صور المنتج</label>
                    <div className="border-2 border-dashed border-gray-200 rounded-2xl p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer">
                      <Upload className="w-10 h-10 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 font-medium mb-1">اضغط لرفع الصور أو اسحبها هنا</p>
                      <p className="text-sm text-gray-400">JPG, PNG (الحد الأقصى 5MB)</p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">وصف المنتج</label>
                    <textarea required rows={4} placeholder="اكتب وصفاً دقيقاً لحالة المنتج وأي عيوب إن وجدت..." className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gold-main focus:border-transparent outline-none transition-all resize-none"></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">الملحقات المشمولة (اختياري)</label>
                    <input type="text" placeholder="مثال: الشاحن الأصلي، الكرتون..." className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gold-main focus:border-transparent outline-none transition-all" />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">السعر المطلوب (ج.م)</label>
                    <div className="relative">
                      <input type="number" required placeholder="0" className="w-full px-4 py-4 text-2xl font-bold rounded-xl border border-gray-200 focus:ring-2 focus:ring-gold-main focus:border-transparent outline-none transition-all" />
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">ج.م</span>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 flex gap-4">
                    <ShieldCheck className="w-8 h-8 text-blue-500 shrink-0" />
                    <div>
                      <h4 className="font-bold text-blue-900 mb-2">حماية البائع من Veya</h4>
                      <p className="text-sm text-blue-800 leading-relaxed">
                        عند قيام المشتري بالطلب، سيتم حجز المبلغ لدينا. لن نطلب منك تسليم المنتج إلا بعد التأكد من استلام المبلغ بالكامل.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>

            <div className="mt-10 pt-6 border-t border-gray-100 flex justify-between items-center">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="px-6 py-3 text-gray-600 font-bold hover:bg-gray-50 rounded-xl transition-colors"
                >
                  السابق
                </button>
              ) : <div></div>}

              {step < 3 ? (
                <button
                  type="button"
                  onClick={() => setStep(step + 1)}
                  className="px-8 py-3 bg-black text-white rounded-xl font-bold hover:bg-gray-800 transition-colors flex items-center gap-2"
                >
                  التالي
                  <ArrowRight className="w-4 h-4 rotate-180" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-8 py-3 bg-gold-main text-white rounded-xl font-bold hover:bg-gold-dark transition-colors shadow-lg shadow-gold-main/20"
                >
                  نشر المنتج
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
