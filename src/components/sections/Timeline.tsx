'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface Milestone {
  titleKey: string;
  descKey: string;
  side: 'left' | 'right';
  phase: 'top' | 'bottom';
}

const milestones: Milestone[] = [
  { titleKey: 'timeline.m1.title', descKey: 'timeline.m1.desc', side: 'left',  phase: 'top' },
  { titleKey: 'timeline.m2.title', descKey: 'timeline.m2.desc', side: 'right', phase: 'top' },
  { titleKey: 'timeline.m3.title', descKey: 'timeline.m3.desc', side: 'left',  phase: 'top' },
  { titleKey: 'timeline.m4.title', descKey: 'timeline.m4.desc', side: 'right', phase: 'bottom' },
  { titleKey: 'timeline.m5.title', descKey: 'timeline.m5.desc', side: 'left',  phase: 'bottom' },
];

export default function Timeline() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) {
            setAnimated(true);
            section.classList.add('timeline-animate');
            scheduleCardGlows();
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [animated]);

  const scheduleCardGlows = () => {
    const totalDuration = 3000; // ms — matches CSS animation duration
    const count = milestones.length;

    milestones.forEach((_, i) => {
      const delay = (totalDuration / count) * i + totalDuration / count / 2;
      setTimeout(() => {
        const card = cardRefs.current[i];
        if (card) card.classList.add('card-glow');
      }, delay);
    });
  };

  return (
    <section id="timeline" className="timeline-section" ref={sectionRef}>
      {/* Header */}
      <div className="timeline-header">
        <h2 className="timeline-heading heading">{t('timeline.title')}</h2>
        <p className="timeline-subheading">{t('timeline.subtitle')}</p>
      </div>

      {/* Divider label */}
      <div className="timeline-phase-label timeline-phase-top">
        <span>⬆ {/* Los primeros pasos */}</span>
      </div>

      {/* Timeline body */}
      <div className="timeline-wrapper">
        {/* Central line track + fill */}
        <div className="timeline-line">
          <div className="timeline-fill" ref={fillRef} />
        </div>

        {/* Cards */}
        {milestones.map((m, i) => (
          <div
            key={i}
            className={`timeline-card-wrapper timeline-card-wrapper--${m.side} ${m.phase === 'bottom' ? 'timeline-card-wrapper--bottom' : ''}`}
          >
            <div
              className={`timeline-card timeline-card--${m.side}`}
              ref={(el) => { cardRefs.current[i] = el; }}
            >
              <div className="timeline-card-dot" />
              <h3 className="timeline-card-title">{t(m.titleKey)}</h3>
              <p className="timeline-card-desc">{t(m.descKey)}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Divider label bottom */}
      <div className="timeline-phase-label timeline-phase-bottom">
        <span>⬇ {/* El presente */}</span>
      </div>
    </section>
  );
}
