import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, Zap, Check, ArrowLeft } from 'lucide-react';
import { getProductById } from '../data/products';
import { useCart } from '../context/CartContext';
import Button from '../components/ui/Button';
import Footer from '../components/Footer';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id ?? '');
  const { addItem } = useCart();

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">产品未找到</h1>
          <Link to="/products" className="text-brand-blue hover:underline">
            返回产品中心
          </Link>
        </div>
      </div>
    );
  }

  const isY = product.series === 'Y';

  return (
    <>
      <section className="pt-24 md:pt-32 pb-20 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Breadcrumb */}
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-brand-blue mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            返回产品中心
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left: Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div
                className="aspect-square rounded-3xl flex items-center justify-center relative overflow-hidden shadow-2xl"
                style={{ background: product.image }}
              >
                <Zap className="w-32 h-32 text-white/20" />
                {/* Floating badge */}
                <div className="absolute top-6 left-6 flex gap-2">
                  <span
                    className={`px-4 py-1.5 rounded-full text-white font-bold text-sm ${
                      isY ? 'bg-white/20' : 'bg-white/20'
                    } backdrop-blur-sm`}
                  >
                    {product.series}系列
                  </span>
                  <span className="px-4 py-1.5 rounded-full bg-white/20 text-white font-bold text-sm backdrop-blur-sm">
                    {product.kv}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right: Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
                {product.name}
              </h1>
              <p className="text-gray-500 mb-6">{product.kv} 额定电压等级</p>

              {/* Price - Nanfu style */}
              <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                <div className="text-sm text-gray-400 mb-1">产品售价</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl text-gray-400">¥</span>
                  <span className="text-5xl font-black text-brand-yellow">
                    {product.price.toLocaleString()}
                  </span>
                </div>
                <div className="text-sm text-gray-400 mt-2">
                  含13%增值税 | 全国免费配送
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Buy Button */}
              <div className="flex gap-3 mb-10">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => addItem(product)}
                >
                  <ShoppingCart className="w-5 h-5" />
                  加入购物车 - ¥{product.price.toLocaleString()}
                </Button>
                <Link to="/cart">
                  <Button variant="outline" size="lg" className="!text-gray-700 !border-gray-300">
                    去结算
                  </Button>
                </Link>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">产品特点</h3>
                <ul className="space-y-3">
                  {product.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-gray-600">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specs */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">技术参数</h3>
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(product.specs).map(([key, val]) => (
                    <div
                      key={key}
                      className="flex justify-between p-3 rounded-xl bg-gray-50"
                    >
                      <span className="text-sm text-gray-400">{key}</span>
                      <span className="text-sm font-bold text-gray-900">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
