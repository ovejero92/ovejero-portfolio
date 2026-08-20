'use client';

import React, { useState, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface TechItem {
  name: string;
  icon: string;
  category: string;
  color: string;
}

const categoryColors: Record<string, string> = {
  'Frontend': '#06b6d4',
  'Backend': '#68a063',
  'Frameworks Frontend': '#dd0031',
  'Base de Datos': '#ff9800',
  'DevOps & Tools': '#8b57ca',
  'Diseño': '#f24e1e',
  'Gestión': '#0052cc',
  'Colaboración': '#611f69',
  'Agile': '#2684ff',
  'Mentoría': '#0ea5e9',
};

const techStack: TechItem[] = [
  { name: 'React', icon: 'fa-brands fa-react', category: 'Frontend', color: '#61dafb' },
  { name: 'Next.js', icon: 'fa-brands fa-neos', category: 'Frontend', color: '#000000' },
  { name: 'TypeScript', icon: 'fa-brands fa-square-js', category: 'Frontend', color: '#3178c6' },
  { name: 'JavaScript', icon: 'fa-brands fa-square-js', category: 'Frontend', color: '#f7df1e' },
  { name: 'CSS3', icon: 'fa-brands fa-css3-alt', category: 'Frontend', color: '#1572b6' },
  { name: 'HTML5', icon: 'fa-brands fa-html5', category: 'Frontend', color: '#e34c26' },
  { name: 'Sass', icon: 'fa-brands fa-sass', category: 'Frontend', color: '#cc6699' },
  { name: 'Bootstrap', icon: 'fa-brands fa-bootstrap', category: 'Frontend', color: '#7952b3' },
  { name: 'Vue.js', icon: 'fa-brands fa-vuejs', category: 'Frontend', color: '#42b883' },
  { name: 'Tailwind CSS', icon: 'fa-brands fa-css3', category: 'Frontend', color: '#06b6d4' },
  { name: 'Node.js', icon: 'fa-brands fa-node', category: 'Backend', color: '#68a063' },
  { name: 'Python', icon: 'fa-brands fa-python', category: 'Backend', color: '#3776ab' },
  { name: 'Django', icon: 'fa-solid fa-d', category: 'Backend', color: '#092e20' },
  { name: 'Spring Boot', icon: 'fa-solid fa-book', category: 'Backend', color: '#6db33f' },
  { name: 'Java', icon: 'fa-brands fa-java', category: 'Backend', color: '#f89820' },
  { name: 'Angular', icon: 'fa-brands fa-angular', category: 'Frameworks Frontend', color: '#dd0031' },
  { name: 'MySQL', icon: 'fa-solid fa-database', category: 'Base de Datos', color: '#00758f' },
  { name: 'MongoDB', icon: 'fa-brands fa-mdb', category: 'Base de Datos', color: '#13aa52' },
  { name: 'PostgreSQL', icon: 'fa-solid fa-server', category: 'Base de Datos', color: '#336791' },
  { name: 'Docker', icon: 'fa-brands fa-docker', category: 'DevOps & Tools', color: '#2496ed' },
  { name: 'Git', icon: 'fa-brands fa-git-alt', category: 'DevOps & Tools', color: '#f1502f' },
  { name: 'GitHub', icon: 'fa-brands fa-github', category: 'DevOps & Tools', color: '#181717' },
];

const pmStack: TechItem[] = [
  { name: 'Figma', icon: 'fa-brands fa-figma', category: 'Diseño', color: '#f24e1e' },
  { name: 'SVG', icon: 'fa-solid fa-bezier-curve', category: 'Diseño', color: '#ffb13b' },
  { name: 'Canva', icon: 'fa-solid fa-palette', category: 'Diseño', color: '#00c4cc' },
  { name: 'Draw.io', icon: 'fa-solid fa-diagram-project', category: 'Diseño', color: '#f08705' },
  { name: 'GitHub Org', icon: 'fa-brands fa-github', category: 'Gestión', color: '#e6edf3' },
  { name: 'GitHub Projects', icon: 'fa-solid fa-table-columns', category: 'Gestión', color: '#58a6ff' },
  { name: 'Jira', icon: 'fa-brands fa-jira', category: 'Gestión', color: '#0052cc' },
  { name: 'Trello', icon: 'fa-brands fa-trello', category: 'Gestión', color: '#0079bf' },
  { name: 'ClickUp', icon: 'fa-solid fa-list-check', category: 'Gestión', color: '#7b68ee' },
  { name: 'Notion', icon: 'fa-solid fa-n', category: 'Colaboración', color: '#ffffff' },
  { name: 'Confluence', icon: 'fa-brands fa-confluence', category: 'Colaboración', color: '#172b4d' },
  { name: 'Slack', icon: 'fa-brands fa-slack', category: 'Colaboración', color: '#e01e5a' },
  { name: 'Discord', icon: 'fa-brands fa-discord', category: 'Colaboración', color: '#5865f2' },
  { name: 'Meet', icon: 'fa-solid fa-video', category: 'Colaboración', color: '#00832d' },
  { name: 'Miro', icon: 'fa-solid fa-object-group', category: 'Agile', color: '#ffd02f' },
  { name: 'Scrum', icon: 'fa-solid fa-arrows-rotate', category: 'Agile', color: '#6c5ce7' },
  { name: 'Kanban', icon: 'fa-solid fa-table-list', category: 'Agile', color: '#00b894' },
  { name: 'User Stories', icon: 'fa-solid fa-book-open', category: 'Agile', color: '#74b9ff' },
  { name: 'Roadmap', icon: 'fa-solid fa-road', category: 'Agile', color: '#fd79a8' },
  { name: 'Mentoría', icon: 'fa-solid fa-chalkboard-user', category: 'Mentoría', color: '#0ea5e9' },
];

function TechCarousel({ items, reverse = false }: { items: TechItem[]; reverse?: boolean }) {
  const [hoveredName, setHoveredName] = useState<string | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [frozenTransform, setFrozenTransform] = useState<string | null>(null);
  const duplicatedStack = [...items, ...items, ...items];

  const handleMouseEnter = (name: string) => {
    if (carouselRef.current) {
      const computedStyle = window.getComputedStyle(carouselRef.current);
      setFrozenTransform(computedStyle.transform);
    }
    setHoveredName(name);
  };

  const handleMouseLeave = () => {
    setHoveredName(null);
    setFrozenTransform(null);
  };

  return (
    <div className={`tech-carousel-container ${hoveredName !== null ? 'paused' : ''}`}>
      <div
        ref={carouselRef}
        className={`tech-carousel ${reverse ? 'tech-carousel--reverse' : ''} ${hoveredName !== null ? 'paused' : ''}`}
        style={hoveredName !== null && frozenTransform ? { transform: frozenTransform } : undefined}
      >
        {duplicatedStack.map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className={`tech-item ${hoveredName === tech.name ? 'hovered' : ''} ${hoveredName !== null && hoveredName !== tech.name ? 'dimmed' : ''}`}
            onMouseEnter={() => handleMouseEnter(tech.name)}
            onMouseLeave={handleMouseLeave}
            style={{
              '--accent-color': tech.color,
              '--category-color': categoryColors[tech.category],
            } as React.CSSProperties}
          >
            {hoveredName === tech.name && (
              <div className="tech-category-badge" style={{ backgroundColor: categoryColors[tech.category] }}>
                {tech.category}
              </div>
            )}
            <div className="tech-icon"><i className={`${tech.icon}`}></i></div>
            <p className="tech-name">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="tech-stack-section tech-stack-section--dual">
      <div className="tech-stack-block">
        <h2 className="tech-stack-title">{t('skills.title')}</h2>
        <TechCarousel items={techStack} />
      </div>
      <div className="tech-stack-block">
        <h2 className="tech-stack-title tech-stack-title--secondary">{t('skills.pmTitle')}</h2>
        <TechCarousel items={pmStack} reverse />
      </div>
    </section>
  );
}
