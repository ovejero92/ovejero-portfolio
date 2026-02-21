'use client';

import { projects } from '@/data/projects';
import ProjectCard from '../ui/ProjectCard';

export default function Projects() {
  // Solo mostrar los 3 primeros proyectos
  const displayProjects = projects.slice(0, 3);

  return (
    <section id="projects" className="portfolio">
      <h2 className="portfolio-title">Proyectos Destacados</h2>
      <div className="portfolio-grid">
        {displayProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
