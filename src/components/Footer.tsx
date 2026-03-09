import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="Veya Logo" className="w-10 h-10 object-contain" />
              <span className="font-bold text-xl tracking-tight">ڤيا ماركت</span>
            </Link>
            <p className="text-gray-500 max-w-sm">
              منصة آمنة لبيع وشراء الأجهزة الإلكترونية المستعملة مع ضمان الدفع المعلق وفحص المنتجات.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li><Link to="/marketplace" className="text-gray-500 hover:text-gold-main">السوق</Link></li>
              <li><Link to="/dashboard" className="text-gray-500 hover:text-gold-main">لوحة التحكم</Link></li>
              <li><a href="#" className="text-gray-500 hover:text-gold-main">كيف نعمل</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-4">قانوني</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-gold-main">الشروط والأحكام</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gold-main">سياسة الخصوصية</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gold-main">سياسة الاسترجاع</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-100 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Veya Market. جميع الحقوق محفوظة. (نسخة تجريبية)
        </div>
      </div>
    </footer>
  );
}
