'use client';

import { projectsPM } from '@/data/projectsPM';
import { useLanguage } from '../../context/LanguageContext';
import ProjectCardPM from '../ui/ProjectCardPM';

export default function ProjectsPM() {
  const { t } = useLanguage();

  return (
    <section id="projects-pm" className="portfolio portfolio--teams">
      <h2 className="portfolio-title">{t('projectsPM.title')}</h2>
      <p className="portfolio-subtitle">{t('projectsPM.subtitle')}</p>
      <div className="portfolio-grid portfolio-grid--teams">
        {projectsPM.map((project) => (
          <ProjectCardPM key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
