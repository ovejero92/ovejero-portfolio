'use client';

import { useRef, useEffect, useState } from 'react';
import { Project } from '@/types';
import Image from 'next/image';
import { useLanguage } from '../../context/LanguageContext';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCardPM({ project }: ProjectCardProps) {
  const { t, language } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);
  const [isTapped, setIsTapped] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const displayTitle = language === 'en' && project.titleEn ? project.titleEn : project.title;
  const displayDesc = language === 'en' && project.descriptionEn ? project.descriptionEn : project.description;
  const isExpanded = isHovered || isTapped;

  const images: string[] = (project as { images?: string[] }).images?.length
    ? (project as { images?: string[] }).images!
    : project.image
      ? [project.image]
      : [];

  useEffect(() => {
    if (isExpanded && images.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, 1400);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (!isExpanded) setCurrentImage(0);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isExpanded, images.length]);

  const handleCardClick = () => {
    if (images.length === 0) return;
    setIsTapped((prev) => !prev);
  };

  const hintText = language === 'en'
    ? (isTapped ? 'Tap to close ←' : 'Tap to see more →')
    : (isTapped ? 'Tocá para cerrar ←' : 'Tocá para ver más →');

  return (
    <div
      className="portfolio-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsTapped(false);
      }}
      onClick={handleCardClick}
      role={images.length > 0 ? 'button' : undefined}
      tabIndex={images.length > 0 ? 0 : undefined}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleCardClick();
        }
      }}
    >
      <div className="portfolio-media">
        <div className={`pc-default ${isExpanded ? 'pc-hidden' : 'pc-visible'}`}>
          <span className="pc-bg-initials" aria-hidden="true">
            {displayTitle.split(' ').map((w) => w[0]).join('').slice(0, 3).toUpperCase()}
          </span>
          <div className="pc-default-content">
            <div className="pc-tech-stack">
              {project.technologies.filter(Boolean).slice(0, 4).map((tech, idx) => (
                <span key={idx} className="pc-tech-pill">{tech}</span>
              ))}
              {project.technologies.filter(Boolean).length > 4 && (
                <span className="pc-tech-pill pc-tech-more">
                  +{project.technologies.filter(Boolean).length - 4}
                </span>
              )}
            </div>
            <h3 className="pc-project-name">{displayTitle.split(' — ')[0].split(' - ')[0]}</h3>
            <p className="pc-hover-hint pc-hover-hint--desktop">
              {language === 'en' ? 'Hover to see more →' : 'Hover para ver más →'}
            </p>
            <p className="pc-hover-hint pc-hover-hint--mobile">{hintText}</p>
          </div>
        </div>

        <div className={`pc-hover ${isExpanded ? 'pc-visible' : 'pc-hidden'}`}>
          {images.length > 0 ? (
            <>
              {images.map((src, idx) => (
                <Image
                  key={idx}
                  src={src}
                  alt={`${displayTitle} - screenshot ${idx + 1}`}
                  fill
                  className={`pc-slide ${idx === currentImage ? 'pc-slide-active' : ''}`}
                  sizes="(max-width: 576px) 88vw, 33vw"
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
              <p>{language === 'en' ? 'Screenshots coming soon' : 'Screenshots próximamente'}</p>
            </div>
          )}
        </div>
      </div>

      <div className="portfolio-info">
        <div className="portfolio-info-text">
          <h4>{displayTitle.split(' — ')[0].split(' - ')[0]}</h4>
          <p>{displayDesc}</p>
        </div>
        <div className="portfolio-links">
          {project.liveUrl && project.liveUrl !== '#' && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-small"
              onClick={(e) => e.stopPropagation()}
            >
              {t('projectsPM.viewDemo')}
            </a>
          )}
          {project.liveUrl === '#' && (
            <span className="btn-small btn-small--placeholder" onClick={(e) => e.stopPropagation()}>
              {t('projectsPM.viewDemo')}
            </span>
          )}
          {project.githubUrl && project.githubUrl !== '#' && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-small btn-outline"
              onClick={(e) => e.stopPropagation()}
            >
              {t('projectsPM.viewCode')}
            </a>
          )}
          {project.githubUrl === '#' && (
            <span className="btn-small btn-outline btn-small--placeholder" onClick={(e) => e.stopPropagation()}>
              {t('projectsPM.viewCode')}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
