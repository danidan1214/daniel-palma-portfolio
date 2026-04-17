import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionHeadingProps {
  children: ReactNode;
  subtitle?: string;
}

export function SectionHeading({ children, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5 }}
      className="text-center mb-8"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-warm-900 mb-3">{children}</h2>
      {subtitle && <p className="text-warm-500 text-lg max-w-2xl mx-auto">{subtitle}</p>}
    </motion.div>
  );
}