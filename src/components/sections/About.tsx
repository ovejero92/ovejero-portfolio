'use client';

import { useLanguage } from '../../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  return (
    <section id="about" className="about">
      <div className="about-img">
        <img src="/avatar.jpeg" alt="Gustavo Ovejero" />
      </div>
      <div className="about-content">
        <h2 className="heading">{t('about.title')}</h2>
        <h3>{t('about.subtitle')}</h3>
        <p>
          {t('about.p1')}
        </p>
        <p>
          {t('about.p2')}
        </p>
        <p>
          {t('about.p3')}
        </p>
        <p>
          {t('about.p4')}
        </p>
        <p>
          {t('about.p5')}
        </p>
      </div>
    </section>
  );
}