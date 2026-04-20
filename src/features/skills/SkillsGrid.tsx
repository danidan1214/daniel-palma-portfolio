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
  SiDocker,
  SiPostgresql,
} from 'react-icons/si';
import {
  FiCode,
  FiLayout,
  FiTool,
  FiUsers,
  FiGitBranch,
  FiRefreshCw,
  FiAward,
  FiZap,
  FiTarget,
  FiMessageCircle,
  FiCompass,
  FiStar,
} from 'react-icons/fi';
import { skills } from '../../data/portfolio';
import { Section, SectionHeading } from '../../components/ui';
import type { Skill, SkillCategory, SoftSkillIcon } from '../../types';

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
  gitflow: FiGitBranch,
  docker: SiDocker,
  cicd: FiRefreshCw,
  wordpress: SiWordpress,
  figma: SiFigma,
};

const softIconMap: Record<SoftSkillIcon, ComponentType<{ className?: string }>> = {
  FiAward,
  FiZap,
  FiRefreshCw,
  FiTarget,
  FiMessageCircle,
  FiCompass,
};

const categoryConfig: Record<
  SkillCategory,
  { label: string; icon: ComponentType<{ className?: string }>; color: 'indigo' | 'blue' | 'slate' }
> = {
  frontend: { label: 'Frontend', icon: FiLayout, color: 'indigo' },
  backend: { label: 'Backend', icon: FiCode, color: 'blue' },
  tools: { label: 'Tools', icon: FiTool, color: 'slate' },
  soft: { label: 'Complementary Skills', icon: FiUsers, color: 'slate' },
};

const colorStyles = {
  indigo: {
    bg: 'bg-indigo-50 dark:bg-indigo-950/50',
    border: 'border-indigo-200 dark:border-indigo-500/30',
    icon: 'text-indigo-600 dark:text-indigo-400',
    tag: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300',
  },
  blue: {
    bg: 'bg-blue-50 dark:bg-blue-950/50',
    border: 'border-blue-200 dark:border-blue-500/30',
    icon: 'text-blue-600 dark:text-blue-400',
    tag: 'bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300',
  },
  slate: {
    bg: 'bg-slate-100 dark:bg-slate-800/50',
    border: 'border-slate-300 dark:border-slate-600',
    icon: 'text-slate-500 dark:text-slate-400',
    tag: 'bg-slate-200 text-slate-700 dark:bg-slate-700/50 dark:text-slate-300',
  },
} as const;

const technicalCategories: SkillCategory[] = ['frontend', 'backend', 'tools'];

const technicalSkills = skills.filter((s) => technicalCategories.includes(s.category));
const softSkills = skills.filter((s) => s.category === 'soft');

const grouped = technicalSkills.reduce<Record<SkillCategory, Skill[]>>(
  (acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  },
  {} as Record<SkillCategory, Skill[]>,
);

export function SkillsGrid() {
  return (
    <Section id="skills" className="bg-slate-100 dark:bg-slate-900" ariaLabel="Technical skills">
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
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{config.label}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill: Skill) => {
                    const SkillIcon = iconMap[skill.id];
                    return (
                      <span
                        key={skill.id}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium ${styles.tag}`}
                      >
                        {SkillIcon && <SkillIcon className="text-sm" />}
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        {softSkills.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="mt-10 text-center"
          >
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 inline-flex items-center gap-2">
              <FiStar className="text-indigo-600 dark:text-indigo-400" />
              Complementary Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {softSkills.map((skill) => {
                const SoftIcon = skill.icon ? softIconMap[skill.icon] : null;
                return (
                  <motion.span
                    key={skill.id}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium bg-transparent text-indigo-600 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30 cursor-default hover:shadow-lg hover:shadow-indigo-500/20 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 dark:focus-within:ring-offset-slate-900 transition-shadow"
                  >
                    {SoftIcon && <SoftIcon className="text-xs" />}
                    {skill.name}
                  </motion.span>
                );
              })}
            </div>
          </motion.div>
        )}
      </div>
    </Section>
  );
}