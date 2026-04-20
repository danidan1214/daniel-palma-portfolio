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
  companyLogo?: string;
  location?: string;
  period: string;
  type: 'full-time' | 'part-time' | 'freelance';
  description?: string;
  highlights: string[];
  stack?: string[];
  roles?: ExperienceRole[];
}

export type SkillCategory = 'frontend' | 'backend' | 'tools' | 'soft';

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  icon?: string;
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
  github?: string;
}