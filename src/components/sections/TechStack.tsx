'use client';

import React, { useState, useRef } from 'react';

interface TechItem {
  name: string;
  icon: string;
  category: string;
  color: string;
}

// Mapa de colores por categoría
const categoryColors: Record<string, string> = {
  'Frontend': '#06b6d4',
  'Backend': '#68a063',
  'Frameworks Frontend': '#dd0031',
  'Base de Datos': '#ff9800',
  'DevOps & Tools': '#8b57ca',
};

const techStack: TechItem[] = [
  // Frontend
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
  
  // Backend
  { name: 'Node.js', icon: 'fa-brands fa-node', category: 'Backend', color: '#68a063' },
  { name: 'Python', icon: 'fa-brands fa-python', category: 'Backend', color: '#3776ab' },
  { name: 'Django', icon: 'fa-solid fa-d', category: 'Backend', color: '#092e20' },
  { name: 'Spring Boot', icon: 'fa-solid fa-book', category: 'Backend', color: '#6db33f' },
  { name: 'Java', icon: 'fa-brands fa-java', category: 'Backend', color: '#f89820' },
  
  // Frameworks Frontend
  { name: 'Angular', icon: 'fa-brands fa-angular', category: 'Frameworks Frontend', color: '#dd0031' },
  
  // Base de Datos
  { name: 'MySQL', icon: 'fa-solid fa-database', category: 'Base de Datos', color: '#00758f' },
  { name: 'MongoDB', icon: 'fa-brands fa-mdb', category: 'Base de Datos', color: '#13aa52' },
  { name: 'PostgreSQL', icon: 'fa-solid fa-server', category: 'Base de Datos', color: '#336791' },
  
  // DevOps & Tools
  { name: 'Docker', icon: 'fa-brands fa-docker', category: 'DevOps & Tools', color: '#2496ed' },
  { name: 'Git', icon: 'fa-brands fa-git-alt', category: 'DevOps & Tools', color: '#f1502f' },
  { name: 'GitHub', icon: 'fa-brands fa-github', category: 'DevOps & Tools', color: '#181717' },
];

export default function TechStack() {
  const [hoveredName, setHoveredName] = useState<string | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [frozenTransform, setFrozenTransform] = useState<string | null>(null);
  
  const duplicatedStack = [...techStack, ...techStack, ...techStack];

  const handleMouseEnter = (name: string) => {
    if (carouselRef.current) {
      const computedStyle = window.getComputedStyle(carouselRef.current);
      const transform = computedStyle.transform;
      setFrozenTransform(transform);
    }
    setHoveredName(name);
  };

  const handleMouseLeave = () => {
    setHoveredName(null);
    setFrozenTransform(null);
  };

  return (
    <section id="skills" className="tech-stack-section">
      <h2 className="tech-stack-title">Stack Tecnológico</h2>
      
      <div className={`tech-carousel-container ${hoveredName !== null ? 'paused' : ''}`}>
        <div 
          ref={carouselRef}
          className={`tech-carousel ${hoveredName !== null ? 'paused' : ''}`}
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
      
    </section>
  );
}

