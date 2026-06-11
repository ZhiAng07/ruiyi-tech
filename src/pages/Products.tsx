import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingCart, Check, ArrowRight } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import SectionTitle from '../components/ui/SectionTitle';
import Footer from '../components/Footer';

function DeviceIllustration({ isY, size = 'md' }: { isY: boolean; size?: 'sm' | 'md' }) {
  const accentColor = isY ? '#DC2626' : '#1E3A5F';
  const dims = size === 'sm'
    ? { body: 'w-20 h-28', screen: 'w-14 h-10', trace: ['w-7', 'w-4', 'w-5'], led: 'w-1.5 h-1.5', glow: 'w-14 h-14' }
    : { body: 'w-28 h-36', screen: 'w-20 h-16', trace: ['w-10', 'w-6', 'w-8'], led: 'w-2 h-2', glow: 'w-20 h-20' };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className={`device-body ${dims.body} flex flex-col items-center justify-center`}>
        <div className={`device-screen ${dims.screen} flex flex-col items-center justify-center gap-1.5`}>
          <div className={`device-trace ${dims.trace[0]}`} />
          <div className={`device-trace ${dims.trace[1]}`} />
          <div className={`device-trace ${dims.trace[2]}`} />
        </div>
        <div
          className={`${dims.led} rounded-full mt-2`}
          style={{ backgroundColor: accentColor, boxShadow: `0 0 6px ${accentColor}` }}
        />
      </div>
      <div
        className={`absolute ${dims.glow} rounded-full blur-2xl opacity-15`}
        style={{ backgroundColor: accentColor }}
      />
    </div>
  );
}

export default function Products() {
  const [seriesFilter, setSeriesFilter] = useState<'all' | 'Y' | 'Z'>('all');
  const [kvFilter, setKvFilter] = useState<'all' | '10KV' | '35KV'>('all');
  const { addItem } = useCart();

  const filtered = products.filter((p) => {
    if (seriesFilter !== 'all' && p.series !== seriesFilter) return false;
    if (kvFilter !== 'all' && p.kv !== kvFilter) return false;
    return true;
  });

  const filterActive = seriesFilter !== 'all' || kvFilter !== 'all';

  return (
    <>
      <section className="pt-24 md:pt-32 pb-20 bg-surface-alt min-h-screen">
        <div className="container-wide">
          <SectionTitle
            overline="Products"
            title="产品中心"
            subtitle="两大系列，四款型号 — 总有一款适合您"
          />

          {/* Filters + Results summary */}
          <div className="flex flex-col items-center gap-4 mb-10">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {/* Series filter */}
              <div className="flex rounded-xl bg-white border border-border p-1 shadow-sm">
                {([
                  { value: 'all', label: '全部系列' },
                  { value: 'Y', label: 'Y系列' },
                  { value: 'Z', label: 'Z系列' },
                ] as const).map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setSeriesFilter(opt.value)}
                    className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                      seriesFilter === opt.value
                        ? 'bg-primary text-white shadow-md'
                        : 'text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>

              {/* KV filter */}
              <div className="flex rounded-xl bg-white border border-border p-1 shadow-sm">
                {([
                  { value: 'all', label: '全部电压' },
                  { value: '10KV', label: '10KV' },
                  { value: '35KV', label: '35KV' },
                ] as const).map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setKvFilter(opt.value)}
                    className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                      kvFilter === opt.value
                        ? 'bg-primary text-white shadow-md'
                        : 'text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>

              {/* Reset */}
              {filterActive && (
                <button
                  onClick={() => { setSeriesFilter('all'); setKvFilter('all'); }}
                  className="text-sm text-accent font-semibold hover:underline cursor-pointer"
                >
                  清除筛选
                </button>
              )}
            </div>

            {/* Result count */}
            <p className="text-sm text-text-muted">
              共 <span className="font-bold text-text-primary">{filtered.length}</span> 款产品
            </p>
          </div>

          {/* Product Row List */}
          {filtered.length > 0 ? (
            <div className="space-y-5 max-w-4xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${seriesFilter}-${kvFilter}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-5"
                >
                  {filtered.map((product, i) => {
                    const isY = product.series === 'Y';
                    return (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.4 }}
                        whileHover={{ y: -3 }}
                        className="group bg-white rounded-3xl border border-border-light shadow-md hover:shadow-xl transition-all duration-400 overflow-hidden"
                      >
                        <div className="flex flex-col md:flex-row">
                          {/* Left: Device illustration */}
                          <div
                            className="relative md:w-56 shrink-0 bg-surface-alt flex items-center justify-center p-8 overflow-hidden"
                          >
                            <div className="absolute inset-0 bg-grid-fine opacity-50" />
                            <DeviceIllustration isY={isY} />

                            {/* Series badge on device */}
                            <span
                              className={`absolute top-4 left-4 px-2.5 py-1 rounded-full text-xs font-bold text-white ${
                                isY ? 'bg-accent' : 'bg-primary'
                              }`}
                            >
                              {product.series}系列
                            </span>
                          </div>

                          {/* Middle: Product info */}
                          <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                            <div className="flex items-start gap-3 mb-2">
                              <div>
                                <Link
                                  to={`/products/${product.id}`}
                                  className="text-lg font-bold text-text-primary hover:text-primary transition-colors"
                                >
                                  {product.name}
                                </Link>
                                <div className="flex items-center gap-2 mt-1.5">
                                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                    isY
                                      ? 'bg-red-50 text-accent'
                                      : 'bg-blue-50 text-primary'
                                  }`}>
                                    {product.kv} 额定电压
                                  </span>
                                  <span className="text-xs text-text-muted">{product.specs['测量精度']}</span>
                                </div>
                              </div>
                            </div>

                            {/* Feature pills */}
                            <div className="flex flex-wrap gap-2 mt-3">
                              {product.features.slice(0, 4).map((f, j) => (
                                <span
                                  key={j}
                                  className="flex items-center gap-1 text-xs text-text-secondary bg-surface-alt px-2.5 py-1 rounded-lg"
                                >
                                  <Check className="w-3 h-3 text-green-500 shrink-0" />
                                  {f}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Right: Price + Actions */}
                          <div className="md:w-56 shrink-0 p-6 md:p-8 flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-border-light bg-surface-alt/50">
                            {/* Price */}
                            <div className="text-center mb-4">
                              <div className="text-xs text-text-muted uppercase tracking-wider mb-1">售价</div>
                              <div className="flex items-baseline justify-center gap-0.5">
                                <span className="text-base text-text-muted">¥</span>
                                <span className="text-3xl font-black text-gold-dark">
                                  {product.price.toLocaleString()}
                                </span>
                              </div>
                            </div>

                            {/* Action buttons */}
                            <div className="flex flex-col gap-2 w-full">
                              <Link
                                to={`/products/${product.id}`}
                                className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-border text-text-secondary text-sm font-semibold hover:border-primary hover:text-primary transition-colors"
                              >
                                查看详情
                                <ArrowRight className="w-3.5 h-3.5" />
                              </Link>
                              <motion.button
                                whileTap={{ scale: 0.97 }}
                                onClick={() => addItem(product)}
                                className={`flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-white text-sm font-semibold cursor-pointer transition-colors ${
                                  isY
                                    ? 'bg-accent hover:bg-accent-hover shadow-lg shadow-red-500/15'
                                    : 'bg-primary hover:bg-primary-light shadow-lg shadow-primary/15'
                                }`}
                              >
                                <ShoppingCart className="w-4 h-4" />
                                加入购物车
                              </motion.button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-5xl mb-4">📦</div>
              <p className="text-text-muted text-lg mb-4">没有找到匹配的产品</p>
              <button
                onClick={() => { setSeriesFilter('all'); setKvFilter('all'); }}
                className="px-6 py-2.5 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary-light transition-colors cursor-pointer"
              >
                重置筛选
              </button>
            </motion.div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
