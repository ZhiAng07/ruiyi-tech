import { motion } from 'framer-motion';
import { ArrowDown, Zap, Shield, Award, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './ui/Button';

const stats = [
  { icon: Shield, value: '10+', label: '年技术积累' },
  { icon: Zap, value: '2000+', label: '台设备在网运行' },
  { icon: Award, value: '98%', label: '客户满意度' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-brand-blue overflow-hidden">
      {/* Geometric decorative shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full border border-white/5" />
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full border border-white/5" />
        <div className="absolute top-1/3 -left-32 w-64 h-64 bg-brand-red/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-yellow/8 rounded-full blur-3xl" />
        <div className="absolute top-20 right-1/3 w-4 h-4 bg-brand-yellow/30 rounded-full" />
        <div className="absolute bottom-1/3 right-1/2 w-2 h-2 bg-white/30 rounded-full" />
      </div>

      <div className="container-wide relative w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center pt-24 md:pt-28 pb-16">
          {/* Left: Text Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/8 border border-white/15 text-white/90 text-sm mb-8 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse" />
              专业电力检测设备制造商
            </motion.div>

            {/* Title - Nanfu style oversized */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-giant text-white mb-4"
            >
              精准检测
              <br />
              <span className="text-brand-yellow">安全可靠</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg md:text-xl text-white/60 max-w-lg mb-10 leading-relaxed"
            >
              锐易科技 — 专注对地电容电流检测设备研发与制造
              <br />
              <span className="text-white/40">Y系列 · Z系列 · 10KV / 35KV 全系覆盖</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-start gap-4 mb-16"
            >
              <Link to="/products">
                <Button variant="primary" size="lg" className="!px-10 !py-4 !text-lg !rounded-xl">
                  查看产品
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </Link>
              <a href="#contact">
                <Button variant="outline" size="lg" className="!px-10 !py-4 !text-lg !rounded-xl">
                  联系我们
                </Button>
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-10"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="flex items-baseline gap-1">
                    <stat.icon className="w-4 h-4 text-brand-yellow" />
                    <span className="text-3xl font-black text-white">{stat.value}</span>
                  </div>
                  <div className="text-sm text-white/40 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: AI-style Product Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Main image card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-gradient-to-br from-slate-800 to-slate-900">
              {/* Unsplash tech image via img */}
              <img
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop&auto=format"
                alt="电力设备"
                className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/80 via-brand-blue/40 to-transparent" />

              {/* Content on image */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="text-white/40 text-xs font-mono tracking-widest uppercase mb-2">
                  RUIYI TECHNOLOGY
                </div>
                <div className="text-2xl font-black text-white mb-2">
                  对地电容电流检测设备
                </div>
                <div className="flex gap-3">
                  <span className="px-3 py-1 rounded-full bg-brand-red text-white text-xs font-bold">
                    Y系列
                  </span>
                  <span className="px-3 py-1 rounded-full bg-brand-blue text-white text-xs font-bold">
                    Z系列
                  </span>
                </div>
              </div>

              {/* Floating price cards */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -left-6 bg-white rounded-2xl px-5 py-3 shadow-xl"
              >
                <div className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Y系列 10KV</div>
                <div className="text-xl font-black text-brand-red">¥15,800</div>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl px-5 py-3 shadow-xl"
              >
                <div className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Z系列 35KV</div>
                <div className="text-xl font-black text-brand-blue">¥17,800</div>
              </motion.div>
            </div>

            {/* Decorative dots pattern */}
            <div className="absolute -z-10 top-1/2 -right-8 w-24 h-24 opacity-20"
              style={{
                backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)',
                backgroundSize: '12px 12px',
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/30"
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
