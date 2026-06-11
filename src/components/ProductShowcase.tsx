import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { getProductsBySeries } from '../data/products';
import { useCart } from '../context/CartContext';
import SectionTitle from './ui/SectionTitle';

const seriesInfo = {
  Y: {
    name: 'Y系列',
    badge: '旗舰系列',
    color: 'accent',
    gradient: 'from-red-600 to-red-800',
    desc: '高性能旗舰方案，适合对测量精度和稳定性有严苛要求的电力系统。',
  },
  Z: {
    name: 'Z系列',
    badge: '精英系列',
    color: 'primary',
    gradient: 'from-blue-700 to-blue-900',
    desc: '高性价比专业方案，在保证核心性能的同时大幅降低采购成本。',
  },
};

/**
 * CSS device illustration for product cards in the showcase.
 */
function DeviceIllustration({ seriesColor }: { seriesColor: string }) {
  const isRed = seriesColor === 'accent';
  const glowColor = isRed ? '#DC2626' : '#1E3A5F';
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="device-body w-24 h-32 flex flex-col items-center justify-center">
        <div className="device-screen w-16 h-12 flex flex-col items-center justify-center gap-1">
          <div className="device-trace w-8" />
          <div className="device-trace w-5" />
        </div>
        <div
          className="w-1.5 h-1.5 rounded-full mt-2"
          style={{ backgroundColor: glowColor, boxShadow: `0 0 5px ${glowColor}` }}
        />
      </div>
      <div
        className="absolute w-16 h-16 rounded-full blur-2xl opacity-15"
        style={{ backgroundColor: glowColor }}
      />
    </div>
  );
}

export default function ProductShowcase() {
  const [activeSeries, setActiveSeries] = useState<'Y' | 'Z'>('Y');
  const { addItem } = useCart();
  const displayedProducts = getProductsBySeries(activeSeries);
  const info = seriesInfo[activeSeries];

  return (
    <section id="products" className="section-padding bg-white">
      <div className="container-wide">
        <SectionTitle
          overline="Products"
          title="产品系列"
          subtitle="两大系列 · 四款型号 · 满足不同电压等级与预算需求"
        />

        {/* Series Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-2xl bg-surface-alt p-1.5 border border-border">
            {(Object.keys(seriesInfo) as Array<'Y' | 'Z'>).map((s) => (
              <button
                key={s}
                onClick={() => setActiveSeries(s)}
                className={`relative px-8 py-3 rounded-xl text-base font-bold transition-all cursor-pointer ${
                  activeSeries === s
                    ? 'text-text-primary'
                    : 'text-text-muted hover:text-text-secondary'
                }`}
              >
                {activeSeries === s && (
                  <motion.div
                    layoutId="seriesTab"
                    className="absolute inset-0 bg-white rounded-xl shadow-md border border-border-light"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {seriesInfo[s].name}
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                      activeSeries === s
                        ? s === 'Y'
                          ? 'bg-red-50 text-accent'
                          : 'bg-blue-50 text-primary'
                        : 'bg-surface text-text-muted'
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
          key={activeSeries + '-desc'}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-text-secondary mb-12 max-w-xl mx-auto"
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
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {displayedProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden border border-border-light shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-400"
              >
                {/* Top: Device Illustration */}
                <div className="relative h-48 bg-surface-alt flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-grid-fine opacity-50" />
                  <DeviceIllustration seriesColor={info.color} />
                  <span className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-white/90 text-xs font-bold text-text-secondary shadow-sm backdrop-blur-sm">
                    {product.kv}
                  </span>
                </div>

                {/* Bottom: Content */}
                <div className="p-6">
                  <h3 className="font-bold text-text-primary text-base mb-3">
                    {product.name}
                  </h3>

                  {/* Feature pills */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {product.features.slice(0, 3).map((f, j) => (
                      <span
                        key={j}
                        className="flex items-center gap-1 text-xs text-text-secondary bg-surface-alt px-2.5 py-1 rounded-lg"
                      >
                        <Check className="w-3 h-3 text-green-500 shrink-0" />
                        {f.length > 16 ? f.slice(0, 16) + '...' : f}
                      </span>
                    ))}
                  </div>

                  {/* Price + Actions */}
                  <div className="flex items-end justify-between">
                    <div className="bg-gold-light/60 rounded-xl px-4 py-2.5">
                      <div className="text-[10px] text-text-muted uppercase tracking-wider">售价</div>
                      <div className="flex items-baseline gap-0.5">
                        <span className="text-sm text-text-muted">¥</span>
                        <span className="text-2xl font-black text-gold-dark">
                          {product.price.toLocaleString()}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Link
                        to={`/products/${product.id}`}
                        className="px-4 py-2.5 rounded-xl border border-border text-text-secondary text-xs font-semibold hover:border-primary hover:text-primary transition-colors"
                      >
                        详情
                      </Link>
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => addItem(product)}
                        className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-white text-xs font-semibold cursor-pointer transition-colors bg-primary hover:bg-primary-light"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                        </svg>
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
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-primary text-white font-bold text-base hover:bg-primary-light transition-all shadow-lg shadow-primary/15 hover:shadow-xl"
          >
            查看全部产品
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
