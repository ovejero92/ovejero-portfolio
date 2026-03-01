'use client';

import { skills } from '@/data/skills';
import { useLanguage } from '../../context/LanguageContext';

export default function Skills() {
  const { t } = useLanguage();
  return (
    <section id="skills" className="services">
      <div className="container-custom">
        <h2 className="heading">{t('skills.title')}</h2>
        <div className="services-container">
          {skills.map((s) => (
            <div key={s.name} className="services-box">
              {s.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}