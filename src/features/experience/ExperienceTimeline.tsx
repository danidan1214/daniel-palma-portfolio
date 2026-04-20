import { Fragment, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiChevronDown, FiMapPin } from 'react-icons/fi';
import { experiences } from '../../data/portfolio';
import { Section, SectionHeading } from '../../components/ui';
import type { Experience } from '../../types';

const typeLabels: Record<Experience['type'], string> = {
  'full-time': 'Full-time',
  'part-time': 'Part-time',
  freelance: 'Freelance',
};

export function ExperienceTimeline() {
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setExpandedCardId(prev => (prev === id ? null : id));
  };

  return (
    <Section id="experience" className="bg-slate-50 dark:bg-slate-950" ariaLabel="Professional experience">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading subtitle="My professional journey building web solutions and driving results.">
          Experience
        </SectionHeading>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-slate-300 dark:bg-slate-700 hidden md:block" />

          {experiences.map((exp, index) => (
            <Fragment key={exp.id}>
              {exp.roles ? (
                <GroupedTimelineItem
                  experience={exp}
                  index={index}
                  isExpanded={expandedCardId === exp.id}
                  onToggle={() => handleToggle(exp.id)}
                />
              ) : (
                <TimelineItem
                  experience={exp}
                  index={index}
                  isExpanded={expandedCardId === exp.id}
                  onToggle={() => handleToggle(exp.id)}
                />
              )}
              {index < experiences.length - 1 && (
                <div className="md:hidden flex justify-center py-4" aria-hidden="true">
                  <div className="w-0.5 h-6 bg-slate-300 dark:bg-slate-700 rounded-full" />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </Section>
  );
}

interface TimelineItemProps {
  experience: (typeof experiences)[number];
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}

function TimelineItem({ experience: exp, index, isExpanded, onToggle }: TimelineItemProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`relative flex items-start mb-0 md:mb-12 w-full ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      } flex-row`}
    >
      <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-indigo-500 rounded-full border-4 border-slate-300 dark:border-slate-800 -translate-x-1/2 z-10 mt-6 hidden md:block" />

      <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
        <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl p-6 hover:shadow-lg hover:shadow-indigo-500/10 dark:hover:shadow-indigo-500/10 hover:border-indigo-400 dark:hover:border-indigo-500/50 transition-all">
          {/* Mobile: clickable header */}
          <button
            onClick={onToggle}
            className="md:hidden w-full text-left flex items-start justify-between gap-3"
          >
            <div className="min-w-0">
              <div className="flex items-start justify-between mb-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-full">
                  <FiBriefcase className="text-sm" />
                  {typeLabels[exp.type]}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{exp.role}</h3>
              <p className="text-slate-600 dark:text-slate-300 font-medium mb-2">{exp.company}</p>
              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                <span className="inline-flex items-center gap-1">
                  <FiCalendar className="text-blue-500 dark:text-blue-400" />
                  {exp.period}
                </span>
                {exp.location && (
                  <span className="inline-flex items-center gap-1">
                    <FiMapPin className="text-blue-500 dark:text-blue-400" />
                    {exp.location}
                  </span>
                )}
              </div>
            </div>
            <FiChevronDown
              className={`text-slate-500 dark:text-slate-400 shrink-0 mt-1 transition-transform duration-300 ${
                isExpanded ? 'rotate-180' : ''
              }`}
              size={20}
            />
          </button>

          {/* Desktop: always-visible header */}
          <div className="hidden md:block">
            <div className="flex items-start justify-between mb-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-full">
                <FiBriefcase className="text-sm" />
                {typeLabels[exp.type]}
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{exp.role}</h3>
            <p className="text-slate-600 dark:text-slate-300 font-medium mb-3">{exp.company}</p>
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400 mb-4">
              <span className="inline-flex items-center gap-1">
                <FiCalendar className="text-blue-500 dark:text-blue-400" />
                {exp.period}
              </span>
              {exp.location && (
                <span className="inline-flex items-center gap-1">
                  <FiMapPin className="text-blue-500 dark:text-blue-400" />
                  {exp.location}
                </span>
              )}
            </div>
          </div>

          {/* Collapsible content (mobile: accordion, desktop: always visible) */}
          <AnimatePresence initial={false}>
            {(isExpanded || typeof window !== 'undefined' && window.innerWidth >= 768) && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden md:!h-auto md:!opacity-100"
              >
                <div className="md:hidden pt-4">
                  {exp.description && (
                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 leading-relaxed">{exp.description}</p>
                  )}
                  <ul className="space-y-2 mb-4">
                    {exp.highlights.slice(0, 4).map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  {exp.stack && (
                    <div className="flex flex-wrap gap-1.5">
                      {exp.stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-medium bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Desktop: always-visible content (rendered separately to avoid animation artifacts) */}
          <div className="hidden md:block">
            {exp.description && (
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 leading-relaxed">{exp.description}</p>
            )}
            <ul className="space-y-2 mb-4">
              {exp.highlights.slice(0, 4).map((highlight, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 shrink-0" />
                  {highlight}
                </li>
              ))}
            </ul>
            {exp.stack && (
              <div className="flex flex-wrap gap-1.5">
                {exp.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

interface GroupedTimelineItemProps {
  experience: (typeof experiences)[number];
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}

function GroupedTimelineItem({ experience: exp, index, isExpanded, onToggle }: GroupedTimelineItemProps) {
  const isEven = index % 2 === 0;
  const [expandedPhase, setExpandedPhase] = useState<number>(0);

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`relative flex items-start mb-0 md:mb-12 w-full ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      } flex-row`}
    >
      <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-indigo-500 rounded-full border-4 border-slate-300 dark:border-slate-800 -translate-x-1/2 z-10 mt-6 hidden md:block" />

      <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
        <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl p-6 hover:shadow-lg hover:shadow-indigo-500/10 dark:hover:shadow-indigo-500/10 hover:border-indigo-400 dark:hover:border-indigo-500/50 transition-all">
          {/* Mobile: clickable header */}
          <button
            onClick={onToggle}
            className="md:hidden w-full text-left flex items-start justify-between gap-3"
          >
            <div className="min-w-0">
              <div className="flex items-start justify-between mb-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-full">
                  <FiBriefcase className="text-sm" />
                  {typeLabels[exp.type]}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{exp.company}</h3>
              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                <span className="inline-flex items-center gap-1">
                  <FiCalendar className="text-blue-500 dark:text-blue-400" />
                  {exp.period}
                </span>
                {exp.location && (
                  <span className="inline-flex items-center gap-1">
                    <FiMapPin className="text-blue-500 dark:text-blue-400" />
                    {exp.location}
                  </span>
                )}
              </div>
            </div>
            <FiChevronDown
              className={`text-slate-500 dark:text-slate-400 shrink-0 mt-1 transition-transform duration-300 ${
                isExpanded ? 'rotate-180' : ''
              }`}
              size={20}
            />
          </button>

          {/* Desktop: always-visible header */}
          <div className="hidden md:block">
            <div className="flex items-start justify-between mb-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-full">
                <FiBriefcase className="text-sm" />
                {typeLabels[exp.type]}
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{exp.company}</h3>
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400 mb-5">
              <span className="inline-flex items-center gap-1">
                <FiCalendar className="text-blue-500 dark:text-blue-400" />
                {exp.period}
              </span>
              {exp.location && (
                <span className="inline-flex items-center gap-1">
                  <FiMapPin className="text-blue-500 dark:text-blue-400" />
                  {exp.location}
                </span>
              )}
            </div>
          </div>

          {/* Mobile: collapsible role phases */}
          <AnimatePresence initial={false}>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden md:hidden"
              >
                {exp.roles && (
                  <div className="relative pl-0 border-l-0 border-indigo-200 dark:border-indigo-500/30 space-y-0 pt-4">
                    {exp.roles!.map((role, roleIndex) => {
                      const isPhaseExpanded = expandedPhase === roleIndex;
                      const isLast = roleIndex === exp.roles!.length - 1;

                      return (
                        <div key={roleIndex} className="relative">
                          <button
                            onClick={() => setExpandedPhase(isPhaseExpanded ? -1 : roleIndex)}
                            className="w-full flex items-start justify-between py-3 text-left group"
                          >
                            <div className="flex items-start gap-2 min-w-0">
                              <span
                                className={`block md:hidden w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 transition-colors ${
                                  isPhaseExpanded ? 'bg-indigo-400' : 'bg-slate-300 dark:bg-slate-500'
                                }`}
                              />
                              <span
                                className={`font-semibold text-sm pl-0 transition-colors ${
                                  isPhaseExpanded ? 'text-indigo-600 dark:text-indigo-300' : 'text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white'
                                }`}
                              >
                                {role.role}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 shrink-0 ml-auto">
                              <span className="text-xs text-slate-400 dark:text-slate-500 whitespace-nowrap">{role.period}</span>
                              <FiChevronDown
                                className={`text-slate-500 dark:text-slate-400 transition-transform shrink-0 ${isPhaseExpanded ? 'rotate-180' : ''}`}
                                size={14}
                              />
                            </div>
                          </button>

                          <AnimatePresence>
                            {isPhaseExpanded && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className={`pb-5 ${!isLast ? 'mb-1' : ''}`}>
                                  {role.description && (
                                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-3 leading-relaxed">{role.description}</p>
                                  )}
                                  <ul className="space-y-2 mb-3">
                                    {role.highlights.map((highlight, i) => (
                                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 shrink-0" />
                                        {highlight}
                                      </li>
                                    ))}
                                  </ul>
                                  {role.stack && (
                                    <div className="flex flex-wrap gap-1.5">
                                      {role.stack.map((tech) => (
                                        <span
                                          key={tech}
                                          className="text-xs font-medium bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded"
                                        >
                                          {tech}
                                        </span>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Desktop: always-visible role phases */}
          {exp.roles && (
            <div className="hidden md:block relative pl-5 border-l-2 border-indigo-200 dark:border-indigo-500/30 space-y-0">
              {exp.roles!.map((role, roleIndex) => {
                const isPhaseExpanded = expandedPhase === roleIndex;
                const isLast = roleIndex === exp.roles!.length - 1;

                return (
                  <div key={roleIndex} className="relative">
                    <span
                      className={`absolute -left-[calc(0.625rem+1px)] top-4 w-2.5 h-2.5 rounded-full border-2 transition-colors ${
                        isPhaseExpanded
                          ? 'bg-indigo-400 border-indigo-400'
                          : 'bg-slate-200 dark:bg-slate-800 border-slate-400 dark:border-slate-500'
                      }`}
                    />
                    <button
                      onClick={() => setExpandedPhase(isPhaseExpanded ? -1 : roleIndex)}
                      className="w-full flex items-start justify-between py-3 text-left group"
                    >
                      <div className="flex items-start gap-2 min-w-0">
                        <span
                          className={`font-semibold text-sm pl-2 transition-colors ${
                            isPhaseExpanded ? 'text-indigo-600 dark:text-indigo-300' : 'text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white'
                          }`}
                        >
                          {role.role}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 shrink-0 ml-3">
                        <span className="text-xs text-slate-400 dark:text-slate-500 whitespace-nowrap">{role.period}</span>
                        <FiChevronDown
                          className={`text-slate-500 dark:text-slate-400 transition-transform shrink-0 ${isPhaseExpanded ? 'rotate-180' : ''}`}
                          size={14}
                        />
                      </div>
                    </button>

                    <AnimatePresence>
                      {isPhaseExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className={`pb-5 ${!isLast ? 'mb-1' : ''}`}>
                            {role.description && (
                              <p className="text-slate-600 dark:text-slate-300 text-sm mb-3 leading-relaxed">{role.description}</p>
                            )}
                            <ul className="space-y-2 mb-3">
                              {role.highlights.map((highlight, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 shrink-0" />
                                  {highlight}
                                </li>
                              ))}
                            </ul>
                            {role.stack && (
                              <div className="flex flex-wrap gap-1.5">
                                {role.stack.map((tech) => (
                                  <span
                                    key={tech}
                                    className="text-xs font-medium bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}