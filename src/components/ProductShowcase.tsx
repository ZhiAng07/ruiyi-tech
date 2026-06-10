import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingCart, Zap, ArrowRight, Check } from 'lucide-react';
import { getProductsBySeries } from '../data/products';
import { useCart } from '../context/CartContext';
import SectionTitle from './ui/SectionTitle';

const seriesInfo = {
  Y: {
    name: 'Y系列',
    badge: '旗舰系列',
    color: 'brand-red',
    gradient: 'from-red-600 to-red-800',
    desc: '高性能旗舰方案，适合对测量精度和稳定性有严苛要求的电力系统。',
  },
  Z: {
    name: 'Z系列',
    badge: '精英系列',
    color: 'brand-blue',
    gradient: 'from-blue-700 to-blue-900',
    desc: '高性价比专业方案，在保证核心性能的同时大幅降低采购成本。',
  },
};

export default function ProductShowcase() {
  const [activeSeries, setActiveSeries] = useState<'Y' | 'Z'>('Y');
  const { addItem } = useCart();
  const displayedProducts = getProductsBySeries(activeSeries);
  const info = seriesInfo[activeSeries];

  return (
    <section id="products" className="section-padding section-red">
      <div className="container-wide">
        <SectionTitle
          title="产品系列"
          subtitle="两大系列 · 四款型号 · 满足不同电压等级与预算需求"
          light
        />

        {/* Series Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-2xl bg-white/10 p-1.5 backdrop-blur-sm">
            {(Object.keys(seriesInfo) as Array<'Y' | 'Z'>).map((s) => (
              <button
                key={s}
                onClick={() => setActiveSeries(s)}
                className={`relative px-8 py-3 rounded-xl text-base font-bold transition-all cursor-pointer ${
                  activeSeries === s
                    ? 'text-gray-900'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {activeSeries === s && (
                  <motion.div
                    layoutId="seriesTab"
                    className="absolute inset-0 bg-white rounded-xl shadow-lg"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {seriesInfo[s].name}
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full ${
                      activeSeries === s
                        ? s === 'Y' ? 'bg-red-100 text-brand-red' : 'bg-blue-100 text-brand-blue'
                        : 'bg-white/20 text-white'
                    }`}
                  >
                    {seriesInfo[s].badge}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Series Description */}
        <motion.p
          key={activeSeries}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-white/60 mb-12 max-w-xl mx-auto"
        >
          {info.desc}
        </motion.p>

        {/* Product Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSeries}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {displayedProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl card-glow flex flex-col md:flex-row"
              >
                {/* Product Visual */}
                <div
                  className="relative md:w-48 shrink-0 flex items-center justify-center p-8"
                  style={{ background: product.image }}
                >
                  <div className="text-center text-white">
                    <Zap className="w-12 h-12 mx-auto mb-3 text-white/30" />
                    <div className="text-2xl font-black">{product.kv}</div>
                    <div className="text-xs text-white/60 mt-1">{product.series}系列</div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-gray-900 text-base mb-3">
                      {product.name}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.features.slice(0, 3).map((f, j) => (
                        <span
                          key={j}
                          className="flex items-center gap-1 text-xs text-gray-500 bg-gray-50 px-2.5 py-1 rounded-lg"
                        >
                          <Check className="w-3 h-3 text-green-500" />
                          {f.length > 18 ? f.slice(0, 18) + '...' : f}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-[10px] text-gray-400 uppercase tracking-wider">售价</div>
                      <div className="flex items-baseline gap-0.5">
                        <span className="text-sm text-gray-400">¥</span>
                        <span className="text-2xl font-black text-brand-yellow">
                          {product.price.toLocaleString()}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Link
                        to={`/products/${product.id}`}
                        className="px-4 py-2.5 rounded-xl border border-gray-200 text-gray-600 text-xs font-semibold hover:border-brand-red hover:text-brand-red transition-colors"
                      >
                        详情
                      </Link>
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => addItem(product)}
                        className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-white text-xs font-semibold cursor-pointer transition-opacity hover:opacity-90 ${
                          activeSeries === 'Y' ? 'bg-brand-red' : 'bg-brand-blue'
                        }`}
                      >
                        <ShoppingCart className="w-3.5 h-3.5" />
                        购买
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

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
