import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Star, ShieldCheck } from "lucide-react";
import { Product } from "../data/mockData";
import { cn } from "../utils/cn";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const conditionColors = {
    'ممتاز': 'bg-green-100 text-green-700 border-green-200',
    'جيد جداً': 'bg-blue-100 text-blue-700 border-blue-200',
    'جيد': 'bg-yellow-100 text-yellow-700 border-yellow-200',
    'مقبول': 'bg-orange-100 text-orange-700 border-orange-200',
  };

  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
      className="group bg-white rounded-2xl border border-gray-100 overflow-hidden flex flex-col transition-all duration-300"
    >
      <Link to={`/product/${product.id}`} className="relative aspect-[4/3] overflow-hidden bg-gray-50">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <span className={cn(
            "px-2.5 py-1 rounded-full text-xs font-bold border backdrop-blur-md bg-white/90",
            conditionColors[product.condition]
          )}>
            {product.condition}
          </span>
        </div>
        <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
          <ShieldCheck className="w-3.5 h-3.5 text-gold-main" />
          <span className="text-[10px] font-bold text-gray-700">فحص Veya</span>
        </div>
      </Link>

      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <Link to={`/product/${product.id}`} className="hover:text-gold-main transition-colors">
            <h3 className="font-bold text-gray-900 line-clamp-2 leading-tight">{product.name}</h3>
          </Link>
        </div>
        
        <div className="text-sm text-gray-500 mb-4">{product.category} • {product.brand}</div>
        
        <div className="mt-auto flex items-end justify-between">
          <div>
            <p className="text-xs text-gray-500 mb-1">السعر</p>
            <p className="font-bold text-xl text-gray-900">{product.price.toLocaleString()} ج.م</p>
          </div>
          
          <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-lg">
            <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
            <span className="text-xs font-bold text-gray-700">{product.seller.rating}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
