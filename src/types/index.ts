export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
  icon?: string;
}