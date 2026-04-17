import type { Variants } from 'framer-motion';

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const fadeUpTransition = (delay = 0) => ({
  initial: 'hidden' as const,
  animate: 'visible' as const,
  variants: fadeUp,
  transition: { duration: 0.5, delay },
});