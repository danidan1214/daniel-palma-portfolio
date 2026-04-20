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
  return (
    <Section id="experience" className="bg-slate-950" ariaLabel="Professional experience">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading subtitle="My professional journey building web solutions and driving results.">
          Experience
        </SectionHeading>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-slate-700 hidden md:block" />

          {experiences.map((exp, index) => (
            <Fragment key={exp.id}>
              {exp.roles ? (
                <GroupedTimelineItem experience={exp} index={index} />
              ) : (
                <TimelineItem experience={exp} index={index} />
              )}
              {index < experiences.length - 1 && (
                <div className="md:hidden flex justify-center py-4" aria-hidden="true">
                  <div className="w-0.5 h-6 bg-slate-700 rounded-full" />
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
}

function TimelineItem({ experience: exp, index }: TimelineItemProps) {
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
      <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-indigo-500 rounded-full border-4 border-slate-800 -translate-x-1/2 z-10 mt-6 hidden md:block" />

      <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
        <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-6 hover:shadow-lg hover:shadow-indigo-500/10 hover:border-indigo-500/50 transition-all">
          <div className="flex items-start justify-between mb-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-full">
              <FiBriefcase className="text-sm" />
              {typeLabels[exp.type]}
            </span>
          </div>

          <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
          <p className="text-slate-300 font-medium mb-3">{exp.company}</p>

          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400 mb-4">
            <span className="inline-flex items-center gap-1">
              <FiCalendar className="text-blue-400" />
              {exp.period}
            </span>
            {exp.location && (
              <span className="inline-flex items-center gap-1">
                <FiMapPin className="text-blue-400" />
                {exp.location}
              </span>
            )}
          </div>

          {exp.description && (
            <p className="text-slate-300 text-sm mb-4 leading-relaxed">{exp.description}</p>
          )}

          <ul className="space-y-2 mb-4">
            {exp.highlights.slice(0, 4).map((highlight, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
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
                  className="text-xs font-medium bg-slate-800 text-slate-300 px-2 py-0.5 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

interface GroupedTimelineItemProps {
  experience: (typeof experiences)[number];
  index: number;
}

function GroupedTimelineItem({ experience: exp, index }: GroupedTimelineItemProps) {
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
      <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-indigo-500 rounded-full border-4 border-slate-800 -translate-x-1/2 z-10 mt-6 hidden md:block" />

      <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
        <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-6 hover:shadow-lg hover:shadow-indigo-500/10 hover:border-indigo-500/50 transition-all">
          {/* Company header */}
          <div className="flex items-start justify-between mb-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-full">
              <FiBriefcase className="text-sm" />
              {typeLabels[exp.type]}
            </span>
          </div>

          <h3 className="text-xl font-bold text-white mb-1">{exp.company}</h3>

          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400 mb-5">
            <span className="inline-flex items-center gap-1">
              <FiCalendar className="text-blue-400" />
              {exp.period}
            </span>
            {exp.location && (
              <span className="inline-flex items-center gap-1">
                <FiMapPin className="text-blue-400" />
                {exp.location}
              </span>
            )}
          </div>

          {/* Role phases */}
          {exp.roles && (
            <div className="relative pl-0 md:pl-5 border-l-0 md:border-l-2 border-indigo-500/30 space-y-0">
              {exp.roles.map((role, roleIndex) => {
                const isExpanded = expandedPhase === roleIndex;
                const isLast = roleIndex === exp.roles.length - 1;

                return (
                  <div key={roleIndex} className="relative">
                    {/* Phase dot on the connector line (desktop only) */}
                    <span
                      className={`absolute -left-[calc(0.625rem+1px)] md:-left-[calc(0.625rem+1px)] top-4 w-2.5 h-2.5 rounded-full border-2 transition-colors hidden md:block ${
                        isExpanded
                          ? 'bg-indigo-400 border-indigo-400'
                          : 'bg-slate-800 border-slate-500'
                      }`}
                    />

                    <button
                      onClick={() => setExpandedPhase(isExpanded ? -1 : roleIndex)}
                      className="w-full flex items-start justify-between py-3 text-left group"
                    >
                      <div className="flex items-start gap-2 min-w-0">
                        {/* Mobile dot (inline flex child) */}
                        <span
                          className={`block md:hidden w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 transition-colors ${
                            isExpanded
                              ? 'bg-indigo-400'
                              : 'bg-slate-500'
                          }`}
                        />
                        <span
                          className={`font-semibold text-sm pl-0 md:pl-2 transition-colors ${
                            isExpanded ? 'text-indigo-300' : 'text-slate-300 group-hover:text-white'
                          }`}
                        >
                          {role.role}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 shrink-0 ml-auto md:ml-3">
                        <span className="text-xs text-slate-500 whitespace-nowrap">{role.period}</span>
                        <FiChevronDown
                          className={`text-slate-400 transition-transform shrink-0 ${isExpanded ? 'rotate-180' : ''}`}
                          size={14}
                        />
                      </div>
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className={`pb-5 ${!isLast ? 'mb-1' : ''}`}>
                            {role.description && (
                              <p className="text-slate-300 text-sm mb-3 leading-relaxed">{role.description}</p>
                            )}

                            <ul className="space-y-2 mb-3">
                              {role.highlights.map((highlight, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
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
                                    className="text-xs font-medium bg-slate-800 text-slate-300 px-2 py-0.5 rounded"
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