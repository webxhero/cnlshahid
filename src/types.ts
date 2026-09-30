export interface Project {
  id: string;
  title: string;
  category: 'Agency' | 'E-commerce' | 'LMS' | 'Portfolio';
  url: string;
  displayUrl: string;
  shortDescription: string;
  fullDescription: string;
  client: string;
  location: string;
  year: string;
  role: string;
  pageSpeedScore: number;
  techStack: string[];
  keyDeliverables: string[];
  figmaUrl?: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  accentColor: string;
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  deliverables: string[];
  features: string[];
  popularFor: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  responsibilities: string[];
  technologies: string[];
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level: string;
    icon?: string;
    isCore?: boolean;
  }[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarUrl?: string;
  rating: number;
  quote: string;
  projectTitle?: string;
  category?: string;
  location?: string;
}

