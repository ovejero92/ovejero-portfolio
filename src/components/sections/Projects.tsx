'use client';

import { projects } from '@/data/projects';
import ProjectCard from '../ui/ProjectCard';
import { useLanguage } from '../../context/LanguageContext';

export default function Projects() {
  const { t } = useLanguage();
  const displayProjects = projects.slice(0, 3);

  return (
    <section id="projects" className="portfolio">
      <h2 className="portfolio-title">{t('projects.title')}</h2>
      <div className="portfolio-grid">
        {displayProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
