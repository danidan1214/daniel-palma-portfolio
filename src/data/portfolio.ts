import type { Experience, Skill, Certification, ContactInfo } from '../types';

export const experiences: Experience[] = [
  {
    id: 'independent',
    role: 'Programador Full Stack',
    company: 'Profesional Independiente',
    period: 'Feb 2025 — Present',
    type: 'freelance',
    description: 'Developing end-to-end web solutions for independent clients.',
    highlights: [
      'Building full stack applications with React and C# for diverse client needs.',
      'Managing projects from requirements gathering through deployment.',
    ],
    stack: ['React', 'C#', 'Node.js', 'TypeScript', 'SQL'],
  },
  {
    id: 'funiber',
    role: '',
    company: 'Fundación Universitaria Iberoamericana (FUNIBER)',
    location: 'Guayaquil, Ecuador',
    period: 'May 2023 — Feb 2026',
    type: 'full-time',
    highlights: [],
    roles: [
      {
        role: 'Frontend Developer',
        period: 'Jul 2024 — Feb 2026',
        description:
          'Natural transition into frontend development after consolidating experience in HTML/CSS, automation, and UX.',
        highlights: [
          'Developed reusable React components, integrating REST APIs and optimizing load times by up to 25%.',
          'Implemented responsive, maintainable interfaces using JavaScript, modern CSS, and reusable design patterns.',
          'Refactored legacy modules to improve readability, accessibility, and performance.',
          'Contributed to technical documentation, standardizing styles and component structure.',
          'Supported migration from legacy platforms to modern, efficient interfaces.',
          'Brought a UX/UI perspective based on prior experience in layout and digital communication design.',
        ],
        stack: ['React', 'JavaScript', 'CSS3', 'REST APIs', 'WordPress', 'Git'],
      },
      {
        role: 'Marketing Automation Developer',
        period: 'May 2023 — Jun 2024',
        description:
          'Entered the technology area from the Advertising Deliveries team, applying technical fundamentals for template creation, data management, and digital campaign automation.',
        highlights: [
          'Built 120+ responsive HTML templates for email marketing with 99% correct rendering across Outlook, Gmail, and Apple Mail.',
          'Implemented semantic HTML, modular CSS, and responsive design best practices, reducing visual errors by 40%.',
          'Managed and segmented customer/lead databases, increasing campaign effectiveness by 18%.',
          'Automated operational workflows and SMTP configurations, reducing manual tasks by 30%.',
          'Collaborated with design and product teams for visual consistency across digital communications.',
          'Performed frontend adjustments on WordPress sites, optimizing load times and cross-browser compatibility.',
        ],
        stack: ['HTML5', 'CSS3', 'JavaScript', 'React', 'REST APIs', 'WordPress', 'Git'],
      },
    ],
  },
  {
    id: 'coinary',
    role: 'Customer Success',
    company: 'Coinary LTD',
    location: 'Argentina — Remote',
    period: 'Feb 2022 — Jan 2023',
    type: 'full-time',
    description:
      'Integrated management, analysis, and communication skills to optimize the client experience in a high-volume digital environment while studying Business Administration.',
    highlights: [
      'Managed 1,500+ client interactions with a satisfaction rate above 92% and SLA-compliant response times.',
      'Improved support flows, reducing average resolution time by 20% through better classification and documentation.',
      'Resolved 85% of tickets without escalation through complex query management.',
      'Collaborated with product, tech support, and operations teams to channel recurring feedback, reducing repeat incidents by 15%.',
      'Proposed communication adjustments that increased active client retention by 8%.',
      'Documented usage patterns and behaviors that served as input for roadmap and UX improvements.',
    ],
  },
];

export const skills: Skill[] = [
  { id: 'react', name: 'React.js', category: 'frontend' },
  { id: 'typescript', name: 'TypeScript', category: 'frontend' },
  { id: 'javascript', name: 'JavaScript', category: 'frontend' },
  { id: 'html5', name: 'HTML5', category: 'frontend' },
  { id: 'css3', name: 'CSS3', category: 'frontend' },
  { id: 'csharp', name: 'C#', category: 'backend' },
  { id: 'nodejs', name: 'Node.js', category: 'backend' },
  { id: 'rest-apis', name: 'REST APIs', category: 'backend' },
  { id: 'sql', name: 'SQL', category: 'backend' },
  { id: 'git', name: 'Git', category: 'tools' },
  { id: 'gitflow', name: 'GitFlow', category: 'tools' },
  { id: 'docker', name: 'Docker', category: 'tools' },
  { id: 'cicd', name: 'CI/CD', category: 'tools' },
  { id: 'wordpress', name: 'WordPress', category: 'tools' },
  { id: 'figma', name: 'Figma', category: 'tools' },
  { id: 'tech-leadership', name: 'Technical Leadership', category: 'soft', icon: 'FiAward' },
  { id: 'problem-solving', name: 'Problem Solving', category: 'soft', icon: 'FiZap' },
  { id: 'agile', name: 'Agile Methodologies (Scrum)', category: 'soft', icon: 'FiRefreshCw' },
  { id: 'project-mgmt', name: 'Project Management', category: 'soft', icon: 'FiTarget' },
  { id: 'communication', name: 'Effective Communication', category: 'soft', icon: 'FiMessageCircle' },
  { id: 'adaptability', name: 'Adaptability', category: 'soft', icon: 'FiCompass' },
];

export const certifications: Certification[] = [
  {
    id: 'meta-fullstack',
    title: 'Meta Full-Stack Engineer Certificate',
    issuer: 'Meta',
    date: 'Oct 2024',
    skills: ['JavaScript', 'React.js', 'Node.js', 'C#'],
    url: 'https://www.credly.com/badges/5f51c5dd-f7cb-4cfa-ab68-a99d6e374bc0/linked_in_profile',
  },
  {
    id: 'meta-frontend',
    title: 'Meta Front-End Developer Certificate',
    issuer: 'Meta',
    date: 'Sep 2024',
    skills: ['JavaScript', 'React.js'],
    url: 'https://www.credly.com/badges/1613713f-4d69-4db5-98f0-ebbc886e9c7f/linked_in_profile',
  },
  {
    id: 'meta-backend',
    title: 'Meta Back-End Developer Certificate',
    issuer: 'Meta',
    date: 'Sep 2024',
    skills: ['JavaScript', 'Node.js'],
    url: 'https://www.credly.com/badges/08f93420-ac4a-483c-8b14-37e8c67178cf/linked_in_profile',
  },
];

export const contact: ContactInfo = {
  email: 'danieljpm554@gmail.com',
  linkedin: 'https://www.linkedin.com/in/daniel-palma-795621327/',
  github: 'https://github.com/danidan1214',
};