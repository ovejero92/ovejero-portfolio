'use client';

import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  const [revealed, setRevealed] = useState(false);

  return (
    <section
      id="about"
      className={`about${revealed ? ' is-revealed' : ''}`}
    >
      <div className="about-img">
        <img src="/avatar.jpeg" alt="Gustavo Ovejero" />
        <button
          type="button"
          className="about-reveal-toggle"
          aria-expanded={revealed}
          aria-controls="about-descripcion"
          onClick={() => setRevealed((open) => !open)}
        >
          <span className="about-reveal-hint">
            {revealed ? t('about.tapClose') : t('about.tapHint')}
          </span>
        </button>
      </div>
      <div className="about-content">
        <h2 className="heading">{t('about.title')}</h2>
        <div id="about-descripcion" className="descripcion">
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
        <p className="about-goal">
          <i className="fa-solid fa-bullseye fa-icon-inline" aria-hidden="true" />
          {t('about.p5')}
        </p>
        </div>
      </div>
    </section>
  );
}
