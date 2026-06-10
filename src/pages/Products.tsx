import { useState } from 'react';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import ProductCard from '../components/ui/ProductCard';
import SectionTitle from '../components/ui/SectionTitle';
import Footer from '../components/Footer';

export default function Products() {
  const [seriesFilter, setSeriesFilter] = useState<'all' | 'Y' | 'Z'>('all');
  const [kvFilter, setKvFilter] = useState<'all' | '10KV' | '35KV'>('all');

  const filtered = products.filter((p) => {
    if (seriesFilter !== 'all' && p.series !== seriesFilter) return false;
    if (kvFilter !== 'all' && p.kv !== kvFilter) return false;
    return true;
  });

  return (
    <>
      <section className="pt-24 md:pt-32 pb-20 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <SectionTitle
            title="产品中心"
            subtitle="两大系列，四款型号 — 总有一款适合您"
          />

          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            {/* Series filter */}
            <div className="flex rounded-xl bg-white border border-gray-200 p-1">
              {([
                { value: 'all', label: '全部' },
                { value: 'Y', label: 'Y系列' },
                { value: 'Z', label: 'Z系列' },
              ] as const).map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setSeriesFilter(opt.value)}
                  className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                    seriesFilter === opt.value
                      ? 'bg-brand-red text-white shadow'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            {/* KV filter */}
            <div className="flex rounded-xl bg-white border border-gray-200 p-1">
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
                      ? 'bg-brand-blue text-white shadow'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          {filtered.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 text-gray-400"
            >
              没有找到匹配的产品
            </motion.div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
