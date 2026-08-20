'use client';

import { useLanguage } from '../../context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="contact">
      <div className="contact-inner">
        <h2 className="contact-title heading">{t('contact.title')}</h2>
        <p className="contact-subtitle">{t('contact.subtitle')}</p>

        <form
          className="contact-form"
          action="https://formspree.io/f/xaykqvwb"
          method="POST"
        >
          <div className="input-box">
            <input
              type="text"
              name="name"
              placeholder={t('contact.namePlaceholder')}
              required
            />
            <input
              type="email"
              name="email"
              placeholder={t('contact.emailPlaceholder')}
              required
            />
          </div>
          <textarea
            name="message"
            rows={5}
            placeholder={t('contact.messagePlaceholder')}
            required
          />
          <button type="submit" className="btn contact-submit">
            <i className="fa-solid fa-paper-plane fa-icon-inline" aria-hidden="true" />
            {t('contact.sendBtn')}
          </button>
        </form>

        <p className="contact-direct">
          {t('contact.directText')}{' '}
          <a href="mailto:ovejero.gustavo92@gmail.com">ovejero.gustavo92@gmail.com</a>
        </p>
      </div>

      <footer className="footer contact-footer">
        <div className="container-custom contact-footer-inner">
          <p className="derechos">{t('contact.rights')}</p>
          <a href="#home" className="btn contact-back-top">
            <i className="fa-solid fa-arrow-up fa-icon-inline" aria-hidden="true" />
            {t('contact.backTop')}
          </a>
        </div>
      </footer>
    </section>
  );
}
