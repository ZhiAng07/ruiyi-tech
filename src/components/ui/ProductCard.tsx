import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import type { Product } from '../../data/products';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
  index?: number;
}

/**
 * CSS device illustration — replaces the generic Zap icon.
 * Renders a stylized "instrument enclosure" with a display panel and gold reading line.
 */
function DeviceIllustration({ isY }: { isY: boolean }) {
  const accentColor = isY ? '#DC2626' : '#1E3A5F';
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Device body */}
      <div className="device-body w-28 h-36 flex flex-col items-center justify-center">
        {/* Screen bezel */}
        <div className="device-screen w-20 h-16 flex flex-col items-center justify-center gap-1.5">
          {/* Gold reading trace */}
          <div className="device-trace w-10" />
          <div className="device-trace w-6" />
          <div className="device-trace w-8" />
        </div>
        {/* Indicator LED */}
        <div
          className="w-2 h-2 rounded-full mt-2"
          style={{ backgroundColor: accentColor, boxShadow: `0 0 6px ${accentColor}` }}
        />
      </div>
      {/* Subtle glow behind device */}
      <div
        className="absolute w-20 h-20 rounded-full blur-2xl opacity-20"
        style={{ backgroundColor: accentColor }}
      />
    </div>
  );
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addItem } = useCart();
  const isY = product.series === 'Y';

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      className="group relative bg-white rounded-3xl overflow-hidden border border-border-light shadow-lg hover:shadow-2xl transition-all duration-400"
    >
      {/* Top: Device Illustration Area */}
      <div className="relative h-52 bg-surface-alt flex items-center justify-center overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-grid-fine opacity-60" />
        <DeviceIllustration isY={isY} />

        {/* KV badge — top left */}
        <span className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-white/90 text-xs font-bold text-text-secondary shadow-sm backdrop-blur-sm">
          {product.kv}
        </span>
      </div>

      {/* Bottom: Content */}
      <div className="p-5 md:p-6">
        {/* Series badge */}
        <span
          className={`inline-flex px-2.5 py-1 rounded-full text-xs font-bold mb-3 ${
            isY
              ? 'bg-red-50 text-accent'
              : 'bg-blue-50 text-primary'
          }`}
        >
          {product.series}系列
        </span>

        {/* Product name */}
        <h3 className="text-base font-bold text-text-primary mb-1 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-sm text-text-muted mb-4">{product.kv} 额定电压</p>

        {/* Price — Gold highlight with amber background */}
        <div className="bg-gold-light/60 rounded-xl px-4 py-3 mb-4 flex items-baseline gap-0.5">
          <span className="text-sm text-text-muted">¥</span>
          <span className="text-2xl font-black text-gold-dark">
            {product.price.toLocaleString()}
          </span>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Link
            to={`/products/${product.id}`}
            className="flex-1 text-center py-2.5 rounded-xl border border-border text-text-secondary font-semibold text-sm hover:border-primary hover:text-primary transition-colors"
          >
            了解详情
          </Link>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => addItem(product)}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-primary text-white font-semibold text-sm cursor-pointer hover:bg-primary-light transition-colors"
          >
            <ShoppingCart className="w-4 h-4" />
            购买
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
