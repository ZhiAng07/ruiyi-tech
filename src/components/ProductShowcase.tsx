import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingCart, Zap, ArrowRight } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import SectionTitle from './ui/SectionTitle';

export default function ProductShowcase() {
  const { addItem } = useCart();

  return (
    <section id="products" className="section-padding section-red">
      <div className="container-wide">
        <SectionTitle
          title="产品系列"
          subtitle="两大系列 · 四款型号 · 满足不同电压等级与预算需求"
          light
        />

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg card-glow"
            >
              {/* Color top bar */}
              <div
                className="h-2"
                style={{
                  background:
                    product.series === 'Y'
                      ? 'linear-gradient(90deg, #DC2626, #FBBF24)'
                      : 'linear-gradient(90deg, #1E3A5F, #3B82F6)',
                }}
              />

              <div className="p-6">
                {/* Series + KV badges */}
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-white text-xs font-bold ${
                      product.series === 'Y' ? 'bg-brand-red' : 'bg-brand-blue'
                    }`}
                  >
                    {product.series}系列
                  </span>
                  <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-bold">
                    {product.kv}
                  </span>
                </div>

                <h3 className="font-bold text-gray-900 mb-4 text-sm leading-snug line-clamp-2 min-h-[2.5rem]">
                  {product.name}
                </h3>

                {/* Price - Nanfu Yellow */}
                <div className="mb-5">
                  <div className="text-xs text-gray-400 mb-0.5">售价</div>
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-base text-gray-400">¥</span>
                    <span className="text-3xl font-black text-brand-yellow">
                      {product.price.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Key features */}
                <ul className="space-y-1.5 mb-6 text-xs text-gray-500">
                  {product.features.slice(0, 3).map((f, j) => (
                    <li key={j} className="flex items-start gap-1.5">
                      <Zap className="w-3 h-3 text-brand-yellow mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-2">
                  <Link
                    to={`/products/${product.id}`}
                    className="flex-1 text-center py-2.5 rounded-lg border border-gray-200 text-gray-600 text-xs font-semibold hover:border-brand-red hover:text-brand-red transition-colors"
                  >
                    详情
                  </Link>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => addItem(product)}
                    className="flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-gray-900 text-white text-xs font-semibold hover:bg-gray-800 transition-colors cursor-pointer"
                  >
                    <ShoppingCart className="w-3.5 h-3.5" />
                    购买
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-white text-brand-red font-bold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
          >
            查看全部产品
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
