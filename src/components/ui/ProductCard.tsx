import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingCart, Zap } from 'lucide-react';
import type { Product } from '../../data/products';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addItem } = useCart();
  const isY = product.series === 'Y';

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
      whileHover={{ y: -8 }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500"
    >
      {/* Series Badge */}
      <div
        className={`absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-white text-sm font-bold ${
          isY ? 'bg-brand-red' : 'bg-brand-blue'
        }`}
      >
        {product.series}系列
      </div>

      {/* Product Image Placeholder */}
      <div
        className="relative h-48 md:h-56 flex items-center justify-center overflow-hidden"
        style={{ background: product.image }}
      >
        <Zap className="w-16 h-16 text-white/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <span className="text-sm opacity-80">{product.series}系列</span>
          <span className="ml-2 text-2xl font-black">{product.kv}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 md:p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 mb-4">{product.kv} 额定电压</p>

        {/* Price - Yellow Highlight (Nanfu style) */}
        <div className="flex items-baseline gap-1 mb-4">
          <span className="text-sm text-gray-400">¥</span>
          <span className="text-3xl font-black text-brand-yellow">
            {product.price.toLocaleString()}
          </span>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Link
            to={`/products/${product.id}`}
            className="flex-1 text-center py-2.5 rounded-lg border-2 border-gray-200 text-gray-700 font-semibold text-sm hover:border-brand-blue hover:text-brand-blue transition-colors"
          >
            了解详情
          </Link>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => addItem(product)}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-white font-semibold text-sm cursor-pointer transition-colors ${
              isY ? 'bg-brand-red hover:bg-red-700' : 'bg-brand-blue hover:bg-blue-800'
            }`}
          >
            <ShoppingCart className="w-4 h-4" />
            购买
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
