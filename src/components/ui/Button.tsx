import { motion } from 'framer-motion';
import type { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'accent' | 'primary' | 'secondary' | 'outline' | 'outline-white' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
}

const variants = {
  accent:
    'bg-accent text-white hover:bg-accent-hover shadow-lg shadow-red-500/20',
  primary:
    'bg-primary text-white hover:bg-primary-light shadow-lg shadow-primary/15',
  secondary:
    'bg-white text-primary border border-border hover:border-primary hover:text-primary shadow-sm',
  outline:
    'border-2 border-accent text-accent hover:bg-accent hover:text-white',
  'outline-white':
    'border-2 border-white/40 text-white hover:bg-white/10',
  ghost:
    'text-white/80 hover:text-white hover:bg-white/10',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-7 py-3 text-base',
  lg: 'px-10 py-4 text-lg',
};

export default function Button({
  children,
  variant = 'accent',
  size = 'md',
  href,
  className = '',
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 font-bold rounded-xl transition-all duration-200 cursor-pointer active:scale-[0.97] ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={classes}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      {...(props as React.ComponentProps<typeof motion.button>)}
    >
      {children}
    </motion.button>
  );
}
