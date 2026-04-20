export interface ExperienceRole {
  role: string;
  period: string;
  description?: string;
  highlights: string[];
  stack?: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  type: 'full-time' | 'part-time' | 'freelance';
  description?: string;
  highlights?: string[];
  stack?: string[];
  roles?: ExperienceRole[];
}

export type SkillCategory = 'frontend' | 'backend' | 'tools' | 'soft';

export type SoftSkillIcon = 'FiAward' | 'FiZap' | 'FiRefreshCw' | 'FiTarget' | 'FiMessageCircle' | 'FiCompass';

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  icon?: SoftSkillIcon;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  skills: string[];
  url: string;
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
  linkedinLabel: string;
  githubLabel: string;
}

export interface HeroData {
  name: string;
  titles: string[];
  subtitle: string;
  description: string;
}