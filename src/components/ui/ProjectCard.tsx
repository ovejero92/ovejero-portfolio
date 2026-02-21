'use client';

import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  // Detectar si es el proyecto de TurnosOK para mostrar iframe
  const isTurnosOK = project.liveUrl?.includes('turnosok');

  return (
    <div className="portfolio-card">
      <div className="portfolio-media">
        {isTurnosOK ? (
          <div className="portfolio-iframe-wrapper">
            <img src="/turnosOk.png" alt="TurnosOK" className="portfolio-iframe" />
          </div>
        ) : (
          <div className="portfolio-placeholder">
            <div className="placeholder-content">
              <h4>{project.title}</h4>
              <p className="placeholder-status">Proyecto en desarrollo</p>
              <div className="tech-tags">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="portfolio-info">
        <h4>{project.title}</h4>
        <p>{project.description}</p>
        <div className="portfolio-links">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-small">
              Ver Demo
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-small">
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}