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
}

export type SkillCategory = 'frontend' | 'backend' | 'tools' | 'soft';

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  proficiency: number;
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