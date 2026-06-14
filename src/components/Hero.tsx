import { motion } from 'framer-motion';
import { ArrowDown, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './ui/Button';

const stats = [
  { value: '30+', label: '项专利技术' },
  { value: '2000+', label: '台设备在网运行' },
  { value: '98%', label: '客户满意度' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-primary overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large faint rings */}
        <div className="absolute -top-60 -right-40 w-[700px] h-[700px] rounded-full border border-white/[0.04]" />
        <div className="absolute -top-32 -right-12 w-[500px] h-[500px] rounded-full border border-white/[0.06]" />
        {/* Dot pattern on left */}
        <div className="absolute inset-y-0 left-0 w-1/2 bg-dots text-white/4" />
        {/* Subtle gradient blobs */}
        <div className="absolute top-1/4 -left-32 w-72 h-72 bg-accent/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container-wide relative w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center pt-24 md:pt-28 pb-16">
          {/* Left: Text Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.1] text-white/80 text-sm mb-8 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              专业电力检测设备制造商
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-hero text-white mb-4"
            >
              精准检测
              <br />
              <span className="text-gold">安全可靠</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg md:text-xl text-white/50 max-w-lg mb-10 leading-relaxed"
            >
              锐意科技 — 专注对地电容电流检测设备研发与制造
              <br />
              <span className="text-white/30">Y系列 · Z系列 · 10KV / 35KV 全系覆盖</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-start gap-4 mb-14"
            >
              <Link to="/products">
                <Button variant="accent" size="lg">
                  查看产品
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </Link>
              <a href="#contact">
                <Button variant="outline-white" size="lg">
                  联系我们
                </Button>
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-8 pt-6 border-t border-white/[0.08]"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-start gap-3">
                  <div className="w-1 h-10 rounded-full bg-gold" />
                  <div>
                    <div className="text-3xl font-black text-white">{stat.value}</div>
                    <div className="text-sm text-white/35 mt-0.5">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Product Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Main image card — image NOW visible */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] border border-white/[0.08]">
              <img
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop&auto=format"
                alt="电力设备"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              {/* Subtle bottom gradient for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/15 to-transparent" />

              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="text-white/40 text-xs font-mono tracking-widest uppercase mb-2">
                  RUIYI TECHNOLOGY
                </div>
                <div className="text-2xl font-black text-white mb-2">
                  对地电容电流检测设备
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-accent text-white text-xs font-bold">
                    Y系列
                  </span>
                  <span className="px-3 py-1 rounded-full bg-primary-light text-white text-xs font-bold border border-white/20">
                    Z系列
                  </span>
                </div>
              </div>

              {/* Floating price cards — glass morphism */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-5 -left-5 glass-card rounded-2xl px-5 py-3"
              >
                <div className="text-[10px] text-text-muted uppercase tracking-wider font-semibold">Y系列 10KV</div>
                <div className="text-xl font-black text-gold-dark">¥15,800</div>
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
                className="absolute -bottom-5 -right-5 glass-card rounded-2xl px-5 py-3"
              >
                <div className="text-[10px] text-text-muted uppercase tracking-wider font-semibold">Z系列 35KV</div>
                <div className="text-xl font-black text-gold-dark">¥17,800</div>
              </motion.div>
            </div>

            {/* Decorative dots */}
            <div className="absolute -z-10 top-1/2 -right-6 w-20 h-20 opacity-15"
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
          className="flex flex-col items-center gap-2 text-white/20"
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
