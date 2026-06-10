import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Trash2, Minus, Plus, ArrowLeft, Zap, CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Button from '../components/ui/Button';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function Cart() {
  const { items, totalPrice, removeItem, updateQuantity, clearCart } = useCart();
  const [ordered, setOrdered] = useState(false);

  if (ordered) {
    return (
      <>
        <section className="pt-24 md:pt-32 pb-20 bg-white min-h-screen">
          <div className="max-w-lg mx-auto px-4 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
            </motion.div>
            <h1 className="text-3xl font-black text-gray-900 mb-4">下单成功！</h1>
            <p className="text-gray-500 mb-8">
              感谢您的订购！我们的销售团队将在1个工作日内与您联系，确认订单详情。
            </p>
            <div className="flex gap-3 justify-center">
              <Link to="/products">
                <Button variant="outline" className="!text-gray-700 !border-gray-300">
                  继续选购
                </Button>
              </Link>
              <Link to="/">
                <Button variant="primary">返回首页</Button>
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <section className="pt-24 md:pt-32 pb-20 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <ShoppingCart className="w-7 h-7 text-brand-blue" />
              <h1 className="text-2xl font-black text-gray-900">购物车</h1>
              <span className="text-sm text-gray-400">
                ({items.length} 件商品)
              </span>
            </div>
            <Link
              to="/products"
              className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-brand-blue transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              继续选购
            </Link>
          </div>

          {items.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20 bg-white rounded-3xl"
            >
              <ShoppingCart className="w-16 h-16 text-gray-200 mx-auto mb-4" />
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                购物车是空的
              </h2>
              <p className="text-gray-400 mb-6">快去挑选您需要的产品吧</p>
              <Link to="/products">
                <Button variant="primary">浏览产品</Button>
              </Link>
            </motion.div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                <AnimatePresence>
                  {items.map((item) => (
                    <motion.div
                      key={item.product.id}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="bg-white rounded-2xl p-5 flex gap-4 items-center"
                    >
                      {/* Product thumbnail */}
                      <div
                        className="w-20 h-20 rounded-xl shrink-0 flex items-center justify-center"
                        style={{ background: item.product.image }}
                      >
                        <Zap className="w-8 h-8 text-white/30" />
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <Link
                          to={`/products/${item.product.id}`}
                          className="font-bold text-gray-900 hover:text-brand-blue transition-colors line-clamp-1"
                        >
                          {item.product.name}
                        </Link>
                        <div className="flex items-center gap-2 mt-1">
                          <span
                            className={`px-2 py-0.5 rounded text-xs font-bold text-white ${
                              item.product.series === 'Y'
                                ? 'bg-brand-red'
                                : 'bg-brand-blue'
                            }`}
                          >
                            {item.product.series}系列
                          </span>
                          <span className="text-xs text-gray-400">
                            {item.product.kv}
                          </span>
                        </div>
                        <div className="text-brand-yellow font-black text-lg mt-1">
                          ¥{item.product.price.toLocaleString()}
                        </div>
                      </div>

                      {/* Quantity */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity - 1)
                          }
                          className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 text-gray-500 cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-10 text-center font-bold text-gray-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity + 1)
                          }
                          className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 text-gray-500 cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Subtotal & Remove */}
                      <div className="text-right">
                        <div className="font-black text-gray-900">
                          ¥
                          {(item.product.price * item.quantity).toLocaleString()}
                        </div>
                        <button
                          onClick={() => removeItem(item.product.id)}
                          className="text-gray-300 hover:text-red-500 transition-colors mt-1 cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {items.length > 0 && (
                  <button
                    onClick={clearCart}
                    className="text-sm text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
                  >
                    清空购物车
                  </button>
                )}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl p-6 sticky top-24">
                  <h3 className="font-bold text-gray-900 mb-4 text-lg">
                    订单摘要
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between text-gray-500">
                      <span>商品小计</span>
                      <span>¥{totalPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-gray-500">
                      <span>运费</span>
                      <span className="text-green-600 font-semibold">免费</span>
                    </div>
                    <div className="flex justify-between text-gray-500">
                      <span>税费</span>
                      <span>已含13%增值税</span>
                    </div>
                    <hr className="border-gray-100" />
                    <div className="flex justify-between text-lg font-black">
                      <span className="text-gray-900">合计</span>
                      <span className="text-brand-red">
                        ¥{totalPrice.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full mt-6"
                    onClick={() => setOrdered(true)}
                  >
                    提交订单
                  </Button>
                  <p className="text-xs text-gray-400 text-center mt-3">
                    提交后销售人员将与您联系确认
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
