'use client';

import { useRef, useEffect, useState } from 'react';
import { Project } from '@/types';
import Image from 'next/image';
import { useLanguage } from '../../context/LanguageContext';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { t, language } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const displayTitle = language === 'en' && project.titleEn ? project.titleEn : project.title;
  const displayDesc = language === 'en' && project.descriptionEn ? project.descriptionEn : project.description;


  // Soporte para campo `images` (array) o `image` (string único)
  const images: string[] = (project as any).images?.length
    ? (project as any).images
    : project.image
      ? [project.image]
      : [];

  useEffect(() => {
    if (isHovered && images.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, 1400);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (!isHovered) setCurrentImage(0);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered, images.length]);

  return (
    <div
      className="portfolio-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="portfolio-media">

        {/* CAPA DEFAULT: nombre + stack (visible cuando NO hay hover) */}
        <div className={`pc-default ${isHovered ? 'pc-hidden' : 'pc-visible'}`}>
          {/* Letras decorativas de fondo */}
          <span className="pc-bg-initials" aria-hidden="true">
            {displayTitle.split(' ').map(w => w[0]).join('').slice(0, 3).toUpperCase()}
          </span>
          <div className="pc-default-content">
            <div className="pc-tech-stack">
              {project.technologies.slice(0, 4).map((tech, idx) => (
                <span key={idx} className="pc-tech-pill">{tech}</span>
              ))}
              {project.technologies.length > 4 && (
                <span className="pc-tech-pill pc-tech-more">+{project.technologies.length - 4}</span>
              )}
            </div>
            <h3 className="pc-project-name">{displayTitle.split(' - ')[0]}</h3>
            <p className="pc-hover-hint">{language === 'en' ? 'Hover to see more →' : 'Hover para ver más →'}</p>
          </div>
        </div>

        {/* CAPA HOVER: slideshow de imágenes */}
        <div className={`pc-hover ${isHovered ? 'pc-visible' : 'pc-hidden'}`}>
          {images.length > 0 ? (
            <>
              {images.map((src, idx) => (
                <Image
                  key={idx}
                  src={src}
                  alt={`${displayTitle} - screenshot ${idx + 1}`}
                  fill
                  className={`pc-slide ${idx === currentImage ? 'pc-slide-active' : ''}`}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ))}
              {images.length > 1 && (
                <div className="pc-dots">
                  {images.map((_, idx) => (
                    <span
                      key={idx}
                      className={`pc-dot ${idx === currentImage ? 'pc-dot-active' : ''}`}
                    />
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="pc-no-images">
              <span className="pc-no-images-icon">📸</span>
              <p>Screenshots próximamente</p>
            </div>
          )}
        </div>

      </div>

      {/* INFO INFERIOR */}
      <div className="portfolio-info">
        <div>
          <h4>{displayTitle.split(' - ')[0]}</h4>
          <p>{displayDesc}</p>
        </div>
        <div className="portfolio-links">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-small"
            >
              {t('projects.viewDemo')}
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-small btn-outline"
            >
              {t('projects.viewCode')}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}