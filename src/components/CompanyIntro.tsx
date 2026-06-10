import { motion } from 'framer-motion';
import { MapPin, TrendingUp, Users, Factory, Phone, CheckCircle } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useCountUp } from '../hooks/useCountUp';

const achievements = [
  { icon: TrendingUp, value: 30, suffix: '+', label: '专利技术' },
  { icon: Users, value: 2000, suffix: '+', label: '设备交付' },
  { icon: Factory, value: 28, suffix: '', label: '省市覆盖' },
];

function StatItem({ icon: Icon, value, suffix, label }: (typeof achievements)[0]) {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();
  const count = useCountUp(value, isVisible);

  return (
    <div ref={ref} className="text-center p-4 rounded-2xl bg-white/5 border border-white/5">
      <Icon className="w-7 h-7 text-brand-yellow mx-auto mb-3" />
      <div className="text-3xl md:text-4xl font-black text-white">
        {count.toLocaleString()}
        <span className="text-brand-yellow">{suffix}</span>
      </div>
      <div className="text-white/40 mt-1 text-sm">{label}</div>
    </div>
  );
}

export default function CompanyIntro() {
  return (
    <section id="about" className="section-padding section-dark bg-grid">
      <div className="container-wide">
        <SectionTitle
          title="关于锐易科技"
          subtitle="深耕电力检测领域，以技术创新驱动行业发展"
          light
        />

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mt-4">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              以科技之力，护电网安全
            </h3>
            <div className="space-y-4 text-white/65 leading-relaxed text-base">
              <p>
                锐易科技成立于<strong className="text-brand-yellow">2026年</strong>，总部位于安徽省合肥市，是一家专注于电力系统对地电容电流检测设备研发、制造与销售的高新技术企业。
              </p>
              <p>
                公司拥有一支由电力系统专家、高级工程师组成的核心研发团队，先后攻克了高精度电容电流传感、自适应补偿算法、高压绝缘设计等多项关键技术，累计获得国家专利30余项。
              </p>
              <p>
                目前，锐易科技的产品已广泛应用于国家电网、南方电网及各大电力工程公司，覆盖全国28个省市区，累计交付设备超过2000台，以稳定可靠的品质赢得了客户的一致好评。
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 gap-3 mt-8">
              {['精准检测', '安全可靠', '技术创新', '客户至上'].map((v) => (
                <div key={v} className="flex items-center gap-2 text-white/70 text-sm">
                  <CheckCircle className="w-4 h-4 text-brand-yellow" />
                  {v}
                </div>
              ))}
            </div>

            {/* Company Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-start gap-3 p-5 rounded-2xl bg-white/5 border border-white/8 hover:border-white/15 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-brand-yellow/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-brand-yellow" />
                </div>
                <div>
                  <div className="text-white/80 font-semibold text-sm mb-0.5">公司地址</div>
                  <div className="text-white/50 text-sm leading-relaxed">安徽省合肥市包河区包河大道56号</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-5 rounded-2xl bg-white/5 border border-white/8 hover:border-white/15 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-brand-yellow/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-brand-yellow" />
                </div>
                <div>
                  <div className="text-white/80 font-semibold text-sm mb-0.5">联系方式</div>
                  <div className="text-white/50 text-sm">0551-6288-6688</div>
                  <div className="text-white/50 text-sm">contact@ruiyitech.com</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Image + Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Image card */}
            <div className="relative mb-12 rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop&auto=format"
                alt="制造工厂"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-white/50 text-xs tracking-widest uppercase mb-1">RUIYI TECH</div>
                <div className="text-white font-black text-xl">锐易科技制造中心</div>
              </div>
            </div>

            {/* Stats counters */}
            <div className="grid grid-cols-3 gap-4">
              {achievements.map((a) => (
                <StatItem key={a.label} {...a} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
