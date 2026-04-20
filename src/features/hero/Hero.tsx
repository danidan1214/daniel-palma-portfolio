import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import { contact, hero } from '../../data/portfolio';
import { useTypewriter } from '../../hooks/useTypewriter';

export function Hero() {
  const { text } = useTypewriter({ words: hero.titles });

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden scroll-mt-16"
      aria-label="Introduction"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" aria-hidden="true" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-indigo-600 dark:text-indigo-400 font-medium tracking-wide uppercase text-sm mb-4 h-6"
        >
          {text}
          <span
            className="inline-block w-[2px] h-4 ml-0.5 bg-indigo-600 dark:bg-indigo-400 align-middle animate-blink"
            aria-hidden="true"
          />
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight"
        >
          {hero.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-4 leading-relaxed max-w-2xl mx-auto"
        >
          Building modern web experiences with{' '}
          <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 dark:from-indigo-400 dark:to-cyan-400 bg-clip-text text-transparent font-semibold">React</span> &{' '}
          <span className="text-blue-600 dark:text-blue-400 font-semibold">C#</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-slate-500 dark:text-slate-400 text-lg mb-10 max-w-xl mx-auto"
        >
          {hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#experience"
            className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white rounded-lg font-medium hover:from-indigo-400 hover:to-cyan-400 transition-all shadow-lg shadow-indigo-500/25"
          >
            View Experience
          </a>
          <a
            href="/cv/daniel-palma-cv.pdf"
            download
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg font-medium hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-indigo-500/50 transition-colors"
          >
            <FiDownload size={16} />
            Download CV
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg font-medium hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-indigo-500/50 transition-colors"
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
            aria-label="LinkedIn profile (opens in a new tab)"
            className="text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors text-2xl"
          >
            <FiLinkedin />
          </a>
          <a
            href={`mailto:${contact.email}`}
            aria-label="Send email"
            className="text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors text-2xl"
          >
            <FiMail />
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile (opens in a new tab)"
            className="text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors text-2xl"
          >
            <FiGithub />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        aria-hidden="true"
      >
        <a href="#experience" aria-label="Scroll to experience">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-slate-400 dark:border-slate-600 rounded-full flex justify-center pt-2"
          >
            <div className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-500 rounded-full" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}