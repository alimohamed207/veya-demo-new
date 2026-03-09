export type ProductCondition = 'ممتاز' | 'جيد جداً' | 'جيد' | 'مقبول';
export type ProductCategory = 'لابتوبات' | 'شاشات' | 'كيبوردات' | 'ماوس' | 'إكسسوارات' | 'أجهزة إلكترونية مستعملة';

export interface Product {
  id: string;
  name: string;
  price: number;
  condition: ProductCondition;
  images: string[];
  category: ProductCategory;
  brand: string;
  seller: {
    name: string;
    rating: number;
    reviews: number;
  };
  description: string;
  specs: Record<string, string>;
  accessoriesIncluded: string[];
}

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'MacBook Pro M1 2020',
    price: 48000,
    condition: 'ممتاز',
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&q=80&w=1000'
    ],
    category: 'لابتوبات',
    brand: 'Apple',
    seller: {
      name: 'أحمد محمد',
      rating: 4.8,
      reviews: 124
    },
    description: 'جهاز ماك بوك برو استخدام خفيف جداً، البطارية بحالة ممتازة (95%). لا يوجد أي خدوش على الشاشة أو الهيكل.',
    specs: {
      'المعالج': 'Apple M1',
      'الرام': '8GB',
      'التخزين': '256GB SSD',
      'الشاشة': '13.3 inch Retina'
    },
    accessoriesIncluded: ['الشاحن الأصلي', 'الكرتون', 'كابل USB-C']
  },
  {
    id: '2',
    name: 'Dell XPS 13 9310',
    price: 24499,
    condition: 'جيد جداً',
    images: [
      'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=1000'
    ],
    category: 'لابتوبات',
    brand: 'Dell',
    seller: {
      name: 'سارة خالد',
      rating: 4.5,
      reviews: 89
    },
    description: 'لابتوب ديل XPS 13 نحيف وخفيف، مناسب للعمل والدراسة. يوجد خدش بسيط في الأسفل لا يؤثر على الاستخدام.',
    specs: {
      'المعالج': 'Intel Core i7 11th Gen',
      'الرام': '16GB',
      'التخزين': '512GB NVMe',
      'الشاشة': '13.4 inch FHD+'
    },
    accessoriesIncluded: ['الشاحن الأصلي']
  },
  {
    id: '3',
    name: 'Lenovo ThinkPad X1 Carbon',
    price: 54000,
    condition: 'ممتاز',
    images: [
      'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=1000'
    ],
    category: 'لابتوبات',
    brand: 'Lenovo',
    seller: {
      name: 'مؤسسة التقنية',
      rating: 4.9,
      reviews: 342
    },
    description: 'لابتوب أعمال من الدرجة الأولى، كيبورد مريح جداً وبطارية تدوم طويلاً.',
    specs: {
      'المعالج': 'Intel Core i7 10th Gen',
      'الرام': '16GB',
      'التخزين': '1TB SSD',
      'الشاشة': '14 inch 4K'
    },
    accessoriesIncluded: ['الشاحن الأصلي', 'شنطة حماية']
  },
  {
    id: '4',
    name: 'Logitech MX Master 3',
    price: 250,
    condition: 'جيد',
    images: [
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=1000'
    ],
    category: 'ماوس',
    brand: 'Logitech',
    seller: {
      name: 'عمر عبدالله',
      rating: 4.2,
      reviews: 15
    },
    description: 'ماوس احترافي للإنتاجية، يعمل بشكل ممتاز. يوجد بعض آثار الاستخدام على المطاط.',
    specs: {
      'التوصيل': 'Bluetooth / USB Receiver',
      'البطارية': 'قابلة للشحن (USB-C)',
      'الأزرار': '7 أزرار قابلة للتخصيص'
    },
    accessoriesIncluded: ['كابل الشحن', 'USB Receiver']
  },
  {
    id: '5',
    name: 'Keychron K2 Mechanical Keyboard',
    price: 800,
    condition: 'ممتاز',
    images: [
      'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=1000'
    ],
    category: 'كيبوردات',
    brand: 'Keychron',
    seller: {
      name: 'خالد التقني',
      rating: 4.7,
      reviews: 56
    },
    description: 'كيبورد ميكانيكي لاسلكي بحجم 75%، سويتشات بنية (Brown Switches). استخدام شهرين فقط.',
    specs: {
      'النوع': 'ميكانيكي',
      'السويتش': 'Gateron Brown',
      'التوصيل': 'Bluetooth / سلكي',
      'الإضاءة': 'RGB'
    },
    accessoriesIncluded: ['الكرتون', 'كابل USB-C', 'أداة نزع الأزرار', 'أزرار إضافية للماك/ويندوز']
  },
  {
    id: '6',
    name: 'LG 27 inch 4K Monitor',
    price: 5500,
    condition: 'جيد جداً',
    images: [
      'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=1000'
    ],
    category: 'شاشات',
    brand: 'LG',
    seller: {
      name: 'ياسر علي',
      rating: 4.6,
      reviews: 42
    },
    description: 'شاشة ممتازة للتصميم والبرمجة، ألوان دقيقة جداً. لا يوجد بيكسلات ميتة.',
    specs: {
      'الدقة': '4K (3840x2160)',
      'اللوحة': 'IPS',
      'التردد': '60Hz',
      'المنافذ': 'HDMI, DisplayPort, USB-C'
    },
    accessoriesIncluded: ['كابل الطاقة', 'كابل HDMI', 'كابل USB-C']
  }
];
