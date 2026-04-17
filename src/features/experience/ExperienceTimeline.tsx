import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';
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
    <Section id="experience" className="bg-cream-50" ariaLabel="Professional experience">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading subtitle="My professional journey building web solutions and driving results.">
          Experience
        </SectionHeading>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-warm-200" />

          {experiences.map((exp, index) => (
            <TimelineItem key={exp.id} experience={exp} index={index} />
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
      className={`relative flex items-start mb-8 md:mb-12 ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      } flex-row`}
    >
      <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-terracotta-500 rounded-full border-4 border-cream-100 -translate-x-1/2 z-10 mt-6" />

      <div className={`ml-12 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
        <div className="bg-cream-50 border border-warm-200 rounded-xl p-6 hover:shadow-lg hover:border-warm-300 transition-all">
          <div className="flex items-start justify-between mb-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-terracotta-600 bg-terracotta-50 px-2.5 py-1 rounded-full">
              <FiBriefcase className="text-sm" />
              {typeLabels[exp.type]}
            </span>
          </div>

          <h3 className="text-xl font-bold text-warm-900 mb-1">{exp.role}</h3>
          <p className="text-warm-600 font-medium mb-3">{exp.company}</p>

          <div className="flex flex-wrap items-center gap-3 text-sm text-warm-500 mb-4">
            <span className="inline-flex items-center gap-1">
              <FiCalendar className="text-amber-500" />
              {exp.period}
            </span>
            {exp.location && (
              <span className="inline-flex items-center gap-1">
                <FiMapPin className="text-amber-500" />
                {exp.location}
              </span>
            )}
          </div>

          {exp.description && (
            <p className="text-warm-600 text-sm mb-4 leading-relaxed">{exp.description}</p>
          )}

          <ul className="space-y-2 mb-4">
            {exp.highlights.slice(0, 4).map((highlight, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-warm-700">
                <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-1.5 shrink-0" />
                {highlight}
              </li>
            ))}
          </ul>

          {exp.stack && (
            <div className="flex flex-wrap gap-1.5">
              {exp.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-medium bg-warm-100 text-warm-600 px-2 py-0.5 rounded"
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