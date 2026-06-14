import { Link } from 'react-router-dom';
import { Zap, MapPin, Phone, Mail } from 'lucide-react';

const footerLinks = {
  产品中心: [
    { label: 'Y系列 10KV', path: '/products/y-10kv' },
    { label: 'Y系列 35KV', path: '/products/y-35kv' },
    { label: 'Z系列 10KV', path: '/products/z-10kv' },
    { label: 'Z系列 35KV', path: '/products/z-35kv' },
  ],
  快速链接: [
    { label: '首页', path: '/' },
    { label: '产品中心', path: '/products' },
    { label: '购物车', path: '/cart' },
  ],
  关于我们: [
    { label: '公司简介', path: '/#about' },
    { label: '联系我们', path: '/#contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <div className="container-wide py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-accent rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-black tracking-tight">锐意科技</span>
            </Link>
            <p className="text-white/55 text-sm leading-relaxed mb-6 max-w-sm">
              锐意科技是国内领先的对地电容电流检测设备制造商，专注Y系列、Z系列产品的研发与制造，以精准检测守护电网安全。
            </p>
            <div className="space-y-2.5 text-sm text-white/50">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold shrink-0" />
                安徽省合肥市包河区包河大道56号
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                0551-6288-6688
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                contact@ruiyitech.com
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold text-sm mb-4 text-white/80">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-white/50 link-underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <div className="container-wide py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm text-white/25">
            © 2026 锐意科技 RUIYI TECHNOLOGY. All rights reserved.
          </span>
          <div className="flex items-center gap-3">
            <span className="w-1 h-1 rounded-full bg-gold/40" />
            <span className="text-sm text-white/25">
              皖ICP备2024XXXXXXXX号-1
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
