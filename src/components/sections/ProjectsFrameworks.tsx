'use client';

import { projectsFrameworks } from '@/data/projectsFrameworks';
import ProjectCard from '../ui/ProjectCard';
import { useLanguage } from '../../context/LanguageContext';

export default function ProjectsFrameworks() {
  const { t } = useLanguage();

  return (
    <section id="projects-frameworks" className="portfolio portfolio--frameworks">
      <h2 className="portfolio-title">{t('projectsFrameworks.title')}</h2>
      <p className="portfolio-subtitle">{t('projectsFrameworks.subtitle')}</p>
      <div className="portfolio-grid portfolio-grid--scroll">
        {projectsFrameworks.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
