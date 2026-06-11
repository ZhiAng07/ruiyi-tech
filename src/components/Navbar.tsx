import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, Zap } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Button from './ui/Button';

const navLinks = [
  { label: '首页', path: '/' },
  { label: '产品中心', path: '/products' },
  { label: '关于我们', path: '/#about' },
  { label: '联系我们', path: '/#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalCount } = useCart();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === '/';
  const isTransparent = !scrolled && isHome;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
          ? 'bg-transparent'
          : 'bg-white/80 backdrop-blur-xl shadow-sm border-b border-border-light'
      }`}
    >
      {/* Gradient overlay for text readability when transparent */}
      {isTransparent && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 to-transparent pointer-events-none" />
      )}

      <div className="container-wide relative">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span
              className={`text-xl font-black tracking-tight ${
                isTransparent ? 'text-white' : 'text-text-primary'
              }`}
            >
              锐易科技
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-sm font-semibold transition-colors hover:text-accent ${
                    isTransparent
                      ? isActive ? 'text-white' : 'text-white/80'
                      : isActive ? 'text-accent' : 'text-text-secondary'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="navDot"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <Link
              to="/cart"
              className={`relative p-2 rounded-xl transition-colors ${
                isTransparent
                  ? 'text-white/80 hover:bg-white/10'
                  : 'text-text-secondary hover:bg-surface-alt'
              }`}
            >
              <ShoppingCart className="w-5 h-5" />
              {totalCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-white text-xs font-bold rounded-full flex items-center justify-center"
                >
                  {totalCount}
                </motion.span>
              )}
            </Link>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2 rounded-xl ${
                isTransparent ? 'text-white' : 'text-text-secondary'
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-border-light overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`py-2 text-base font-semibold ${
                    location.pathname === link.path
                      ? 'text-accent'
                      : 'text-text-secondary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a href="#contact">
                <Button variant="accent" size="sm" className="w-full">
                  立即咨询
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
