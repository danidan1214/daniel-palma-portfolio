import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { contact } from '../../data/portfolio';

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      aria-label="Introduction"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cream-100 via-cream-50 to-warm-100" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-amber-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-terracotta-200/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-terracotta-500 font-medium tracking-wide uppercase text-sm mb-4"
        >
          Full Stack Developer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-warm-900 mb-6 leading-tight"
        >
          Daniel Palma
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-warm-600 mb-4 leading-relaxed max-w-2xl mx-auto"
        >
          Building modern web experiences with{' '}
          <span className="text-terracotta-500 font-semibold">React</span> &{' '}
          <span className="text-amber-600 font-semibold">C#</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-warm-500 text-lg mb-10 max-w-xl mx-auto"
        >
          Crafting responsive interfaces, scalable APIs, and end-to-end solutions
          that connect people with technology.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#experience"
            className="px-8 py-3 bg-terracotta-500 text-white rounded-lg font-medium hover:bg-terracotta-600 transition-colors shadow-lg shadow-terracotta-500/25"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-warm-300 text-warm-700 rounded-lg font-medium hover:bg-warm-100 hover:border-warm-400 transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center justify-center gap-6 mt-12"
        >
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-warm-400 hover:text-terracotta-500 transition-colors text-2xl"
          >
            <FiLinkedin />
          </a>
          <a
            href={`mailto:${contact.email}`}
            aria-label="Send email"
            className="text-warm-400 hover:text-terracotta-500 transition-colors text-2xl"
          >
            <FiMail />
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-warm-400 hover:text-terracotta-500 transition-colors text-2xl"
          >
            <FiGithub />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#experience" aria-label="Scroll to experience">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-warm-400 rounded-full flex justify-center pt-2"
          >
            <div className="w-1.5 h-1.5 bg-warm-400 rounded-full" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}