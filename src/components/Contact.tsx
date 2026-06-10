import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';
import Button from './ui/Button';

const contactInfo = [
  {
    icon: MapPin,
    title: '公司地址',
    content: '安徽省合肥市包河区包河大道56号',
  },
  {
    icon: Phone,
    title: '联系电话',
    content: '0551-6288-6688',
  },
  {
    icon: Mail,
    title: '电子邮箱',
    content: 'contact@ruiyitech.com',
  },
  {
    icon: Clock,
    title: '工作时间',
    content: '周一至周五 8:30 - 17:30',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <SectionTitle
          title="联系我们"
          subtitle="期待与您合作，为您提供专业的产品与服务"
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mt-8">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-brand-blue rounded-2xl p-8 md:p-10 text-white h-full">
              <h3 className="text-2xl font-bold mb-8">锐易科技</h3>

              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-brand-yellow" />
                    </div>
                    <div>
                      <div className="text-white/60 text-sm">{item.title}</div>
                      <div className="text-white font-semibold">{item.content}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="mt-8 h-40 rounded-xl bg-white/10 flex items-center justify-center border border-white/10">
                <div className="text-center text-white/40">
                  <MapPin className="w-8 h-8 mx-auto mb-2" />
                  <span className="text-sm">合肥市包河区</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Quick contact form (static, no backend) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              快速询价
            </h3>
            <p className="text-gray-500 mb-8">
              填写以下信息，我们将在1个工作日内与您联系
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  您的姓名
                </label>
                <input
                  type="text"
                  placeholder="请输入姓名"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  联系电话
                </label>
                <input
                  type="tel"
                  placeholder="请输入电话"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  感兴趣的产品
                </label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all bg-white">
                  <option>请选择产品系列</option>
                  <option>Y系列 10KV</option>
                  <option>Y系列 35KV</option>
                  <option>Z系列 10KV</option>
                  <option>Z系列 35KV</option>
                  <option>其他 / 咨询</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  留言内容
                </label>
                <textarea
                  rows={3}
                  placeholder="请描述您的需求..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all resize-none"
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
