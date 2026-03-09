import { useState } from "react";
import { motion } from "motion/react";
import { ProductCard } from "../components/ProductCard";
import { mockProducts, ProductCategory } from "../data/mockData";
import { Filter, Search } from "lucide-react";
import { cn } from "../utils/cn";

export function Marketplace() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'الكل'>('الكل');
  const [searchQuery, setSearchQuery] = useState("");

  const categories: (ProductCategory | 'الكل')[] = [
    'الكل',
    'لابتوبات',
    'شاشات',
    'كيبوردات',
    'ماوس',
    'إكسسوارات',
    'أجهزة إلكترونية مستعملة'
  ];

  const filteredProducts = mockProducts.filter(product => {
    const matchesCategory = selectedCategory === 'الكل' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.brand.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-bg-light py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Sidebar Filters */}
          <div className="w-full md:w-64 shrink-0">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 sticky top-24">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-100">
                <Filter className="w-5 h-5 text-gray-500" />
                <h2 className="font-bold text-lg">الفلاتر</h2>
              </div>
              
              <div className="mb-6">
                <h3 className="font-bold text-sm text-gray-900 mb-3">الفئة</h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={cn(
                        "block w-full text-right px-3 py-2 rounded-lg text-sm transition-colors",
                        selectedCategory === category 
                          ? "bg-gold-light/20 text-gold-dark font-bold" 
                          : "text-gray-600 hover:bg-gray-50"
                      )}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
              <h1 className="text-2xl font-bold text-gray-900">السوق</h1>
              
              <div className="relative w-full sm:w-72">
                <input
                  type="text"
                  placeholder="ابحث عن منتج، ماركة..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gold-main/50 focus:border-gold-main bg-white"
                />
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product, i) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
                <p className="text-gray-500 text-lg">لم يتم العثور على منتجات مطابقة للبحث.</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
