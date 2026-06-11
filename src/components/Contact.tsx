import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';
import Button from './ui/Button';

const contactInfo = [
  { icon: MapPin, title: '公司地址', content: '安徽省合肥市包河区包河大道56号' },
  { icon: Phone, title: '联系电话', content: '0551-6288-6688' },
  { icon: Mail, title: '电子邮箱', content: 'contact@ruiyitech.com' },
  { icon: Clock, title: '工作时间', content: '周一至周五 8:30 - 17:30' },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-surface-alt">
      <div className="container-wide">
        <SectionTitle
          overline="Contact"
          title="联系我们"
          subtitle="期待与您合作，为您提供专业的产品与服务"
        />

        <div className="grid lg:grid-cols-2 gap-16 mt-4">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-primary rounded-3xl p-8 md:p-10 text-white h-full">
              <h3 className="text-2xl font-bold mb-8">锐易科技</h3>

              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-white/[0.08] flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <div className="text-white/50 text-sm">{item.title}</div>
                      <div className="text-white font-semibold">{item.content}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative map area */}
              <div className="mt-8 h-40 rounded-2xl bg-white/[0.04] flex items-center justify-center border border-white/[0.06]">
                <div className="text-center">
                  <MapPin className="w-10 h-10 mx-auto mb-3 text-gold/30" />
                  <span className="text-white/30 text-sm">合肥市包河区</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-text-primary mb-2">
              快速询价
            </h3>
            <p className="text-text-secondary mb-8">
              填写以下信息，我们将在1个工作日内与您联系
            </p>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-2">
                  您的姓名
                </label>
                <input
                  type="text"
                  placeholder="请输入姓名"
                  className="w-full px-5 py-3.5 rounded-2xl border border-border bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-text-primary placeholder:text-text-muted"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-2">
                  联系电话
                </label>
                <input
                  type="tel"
                  placeholder="请输入电话"
                  className="w-full px-5 py-3.5 rounded-2xl border border-border bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-text-primary placeholder:text-text-muted"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-2">
                  感兴趣的产品
                </label>
                <select className="w-full px-5 py-3.5 rounded-2xl border border-border bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-text-primary appearance-none cursor-pointer">
                  <option>请选择产品系列</option>
                  <option>Y系列 10KV</option>
                  <option>Y系列 35KV</option>
                  <option>Z系列 10KV</option>
                  <option>Z系列 35KV</option>
                  <option>其他 / 咨询</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-2">
                  留言内容
                </label>
                <textarea
                  rows={3}
                  placeholder="请描述您的需求..."
                  className="w-full px-5 py-3.5 rounded-2xl border border-border bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all resize-none text-text-primary placeholder:text-text-muted"
                />
              </div>
              <Button
                variant="primary"
                size="lg"
                className="w-full"
                onClick={() => alert('感谢您的咨询！我们将尽快与您联系。')}
              >
                <Send className="w-4 h-4" />
                提交咨询
              </Button>

              {/* Trust badge */}
              <p className="text-center text-text-muted text-xs flex items-center justify-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                您的信息将严格保密，仅用于业务联系
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
