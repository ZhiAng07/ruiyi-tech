import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  overline?: string;
  light?: boolean;
  align?: 'left' | 'center';
}

export default function SectionTitle({
  title,
  subtitle,
  overline,
  light = false,
  align = 'center',
}: SectionTitleProps) {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      {/* Overline */}
      {overline && (
        <p
          className={`text-overline mb-3 ${
            light ? 'text-gold' : 'text-accent'
          }`}
        >
          {overline}
        </p>
      )}

      {/* Title */}
      <h2
        className={`text-display mb-4 ${
          light ? 'text-white' : 'text-text-primary'
        }`}
      >
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p
          className={`text-lg md:text-xl max-w-2xl ${
            align === 'center' ? 'mx-auto' : ''
          } ${light ? 'text-white/60' : 'text-text-secondary'}`}
        >
          {subtitle}
        </p>
      )}

      {/* Gold divider */}
      <div
        className={`mt-5 w-12 h-1 rounded-full bg-gold ${
          align === 'center' ? 'mx-auto' : ''
        }`}
      />
    </motion.div>
  );
}
