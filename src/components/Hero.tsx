import { motion } from 'framer-motion';
import { ArrowDown, Zap, Shield, Award } from 'lucide-react';
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
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-red/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 pt-20 md:pt-24">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm mb-6"
            >
              <Zap className="w-4 h-4 text-brand-yellow" />
              专业电力检测设备制造商
            </motion.div>

            {/* Title - Nanfu style oversized */}
            <h1 className="text-giant text-white mb-2">
              精准检测
              <br />
              <span className="text-brand-yellow">安全可靠</span>
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg md:text-xl text-white/70 max-w-xl mx-auto lg:mx-0 mb-8"
            >
              锐易科技 — 专注对地电容电流检测设备研发与制造
              <br />
              Y系列 · Z系列 · 10KV/35KV 全系覆盖
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <Link to="/products">
                <Button variant="primary" size="lg">
                  查看产品
                  <Zap className="w-5 h-5" />
                </Button>
              </Link>
              <a href="#contact">
                <Button variant="outline" size="lg">
                  联系我们
                </Button>
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap justify-center lg:justify-start gap-8 mt-12"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon className="w-6 h-6 text-brand-yellow mx-auto mb-2" />
                  <div className="text-2xl font-black text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Product Visual Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl bg-gradient-to-br from-brand-red/40 to-brand-yellow/20 border border-white/20 flex items-center justify-center backdrop-blur-sm">
              <Zap className="w-32 h-32 text-white/20" />
              {/* Floating price tags */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -left-4 bg-white rounded-xl px-4 py-2 shadow-lg"
              >
                <span className="text-xs text-gray-500">Y系列 10KV</span>
                <div className="text-lg font-black text-brand-red">
                  ¥15,800
                </div>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-4 -right-4 bg-white rounded-xl px-4 py-2 shadow-lg"
              >
                <span className="text-xs text-gray-500">Z系列 10KV</span>
                <div className="text-lg font-black text-brand-blue">
                  ¥13,800
                </div>
              </motion.div>
            </div>
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
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-white/50"
        >
          <ArrowDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
