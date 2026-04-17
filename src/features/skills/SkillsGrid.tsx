import { type ComponentType } from 'react';
import { motion } from 'framer-motion';
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiSharp,
  SiNodedotjs,
  SiHtml5,
  SiCss,
  SiWordpress,
  SiFigma,
  SiGit,
  SiPostgresql,
} from 'react-icons/si';
import { FiCode, FiLayout, FiTool, FiUsers } from 'react-icons/fi';
import { skills } from '../../data/portfolio';
import { Section, SectionHeading } from '../../components/ui';
import type { Skill, SkillCategory } from '../../types';

const iconMap: Record<Skill['id'], ComponentType<{ className?: string }>> = {
  javascript: SiJavascript,
  typescript: SiTypescript,
  react: SiReact,
  html5: SiHtml5,
  css3: SiCss,
  csharp: SiSharp,
  nodejs: SiNodedotjs,
  'rest-apis': FiCode,
  sql: SiPostgresql,
  git: SiGit,
  wordpress: SiWordpress,
  figma: SiFigma,
};

const categoryConfig: Record<
  SkillCategory,
  { label: string; icon: ComponentType<{ className?: string }>; color: 'terracotta' | 'amber' | 'warm' }
> = {
  frontend: { label: 'Frontend', icon: FiLayout, color: 'terracotta' },
  backend: { label: 'Backend', icon: FiCode, color: 'amber' },
  tools: { label: 'Tools', icon: FiTool, color: 'warm' },
  soft: { label: 'Soft Skills', icon: FiUsers, color: 'warm' },
};

const colorStyles = {
  terracotta: {
    bg: 'bg-terracotta-50',
    border: 'border-terracotta-200',
    icon: 'text-terracotta-500',
    bar: 'bg-terracotta-400',
    barBg: 'bg-terracotta-100',
  },
  amber: {
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    icon: 'text-amber-600',
    bar: 'bg-amber-400',
    barBg: 'bg-amber-100',
  },
  warm: {
    bg: 'bg-warm-100',
    border: 'border-warm-300',
    icon: 'text-warm-600',
    bar: 'bg-warm-500',
    barBg: 'bg-warm-200',
  },
} as const;

const grouped = skills.reduce<Record<SkillCategory, Skill[]>>(
  (acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  },
  {} as Record<SkillCategory, Skill[]>,
);

export function SkillsGrid() {
  return (
    <Section id="skills" className="bg-white" ariaLabel="Technical skills">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading subtitle="Technologies and tools I use to bring ideas to life.">
          Skills &amp; Technologies
        </SectionHeading>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(grouped).map(([category, categorySkills]) => {
            const config = categoryConfig[category as SkillCategory];
            const Icon = config.icon;
            const styles = colorStyles[config.color];

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5 }}
                className={`${styles.bg} border ${styles.border} rounded-xl p-6`}
              >
                <div className="flex items-center gap-2 mb-6">
                  <Icon className={`text-xl ${styles.icon}`} />
                  <h3 className="text-lg font-bold text-warm-800">{config.label}</h3>
                </div>

                <div className="space-y-4">
                  {categorySkills.map((skill: Skill) => {
                    const SkillIcon = iconMap[skill.id];
                    return (
                      <div key={skill.id}>
                        <div className="flex items-center gap-2 mb-1.5">
                          {SkillIcon && (
                            <SkillIcon className={`text-base ${styles.icon}`} />
                          )}
                          <span className="text-sm font-medium text-warm-700">
                            {skill.name}
                          </span>
                          <span className="text-xs text-warm-500 ml-auto">
                            {skill.proficiency}%
                          </span>
                        </div>
                        <div className={`h-1.5 ${styles.barBg} rounded-full overflow-hidden`}>
                          <motion.div
                            className={`h-full ${styles.bar} rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.proficiency}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}