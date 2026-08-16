'use client';

import { projectsPM } from '@/data/projectsPM';
import { useLanguage } from '../../context/LanguageContext';
import ProjectCardPM from '../ui/ProjectCardPM';

export default function ProjectsPM() {
  const { t } = useLanguage();
  const displayProjectsPM = projectsPM.slice(0, 3);

  return (
    <section id="projects" className="portfolio">
      <h2 className="portfolio-title">{t('projectsPM.title')}</h2>
      <div className="portfolio-grid">
        {displayProjectsPM.map((projectPM) => (
          <ProjectCardPM key={projectPM.id} project={projectPM} />
        ))}
      </div>
    </section>
  );
}
