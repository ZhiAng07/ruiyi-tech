import { motion } from 'framer-motion';
import { Building2, MapPin, TrendingUp, Users, Factory } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useCountUp } from '../hooks/useCountUp';

const achievements = [
  { icon: TrendingUp, value: 2000, suffix: '+', label: '设备交付' },
  { icon: Users, value: 500, suffix: '+', label: '合作客户' },
  { icon: Factory, value: 15, suffix: '年', label: '行业经验' },
];

function StatItem({ icon: Icon, value, suffix, label }: (typeof achievements)[0]) {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();
  const count = useCountUp(value, isVisible);

  return (
    <div ref={ref} className="text-center">
      <Icon className="w-8 h-8 text-brand-yellow mx-auto mb-3" />
      <div className="text-4xl md:text-5xl font-black text-white">
        {count.toLocaleString()}
        <span className="text-brand-yellow">{suffix}</span>
      </div>
      <div className="text-white/60 mt-1 text-sm">{label}</div>
    </div>
  );
}

export default function CompanyIntro() {
  return (
    <section id="about" className="py-20 md:py-28 section-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <SectionTitle
          title="关于锐易科技"
          subtitle="深耕电力检测领域，以技术创新驱动行业发展"
          light
        />

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-8">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              以科技之力，护电网安全
            </h3>
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>
                锐易科技成立于2011年，总部位于安徽省合肥市，是一家专注于电力系统对地电容电流检测设备研发、制造与销售的高新技术企业。
              </p>
              <p>
                公司拥有一支由电力系统专家、高级工程师组成的核心研发团队，先后攻克了高精度电容电流传感、自适应补偿算法、高压绝缘设计等多项关键技术，累计获得国家专利30余项。
              </p>
              <p>
                目前，锐易科技的产品已广泛应用于国家电网、南方电网及各大电力工程公司，覆盖全国28个省市区，累计交付设备超过2000台，以稳定可靠的品质赢得了客户的一致好评。
              </p>
              <p>
                我们始终秉持"精准检测，安全可靠"的企业理念，致力于成为电力检测领域的一流品牌，为电网安全运行保驾护航。
              </p>
            </div>

            {/* Company Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                <MapPin className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-semibold text-sm">公司地址</div>
                  <div className="text-white/60 text-sm">安徽省合肥市包河区包河大道56号</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                <Building2 className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-semibold text-sm">联系方式</div>
                  <div className="text-white/60 text-sm">0551-6288-6688</div>
                  <div className="text-white/60 text-sm">contact@ruiyitech.com</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Image visual + Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Visual placeholder */}
            <div className="relative mb-12 rounded-2xl overflow-hidden bg-gradient-to-br from-brand-blue to-brand-red p-8 aspect-video flex items-center justify-center">
              <Building2 className="w-24 h-24 text-white/15" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                <div className="text-white font-black text-xl">锐易科技</div>
                <div className="text-white/70 text-sm">RUIYI TECHNOLOGY</div>
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
