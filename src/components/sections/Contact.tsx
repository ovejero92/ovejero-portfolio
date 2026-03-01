'use client';

import { useLanguage } from '../../context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="contact">
      <div className="container-custom" style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h2 className="heading">{t('contact.title')}</h2>
        <p style={{ textAlign: 'center', fontSize: '1.7rem', marginBottom: '2rem' }}>
          {t('contact.subtitle')}
        </p>
        <form className="contact-form" action="https://formspree.io/f/xaykqvwb" method="POST">
          <div className="input-box">
            <input type="text" name="name" placeholder={t('contact.namePlaceholder')} required />
            <input type="email" name="email" placeholder={t('contact.emailPlaceholder')} required />
          </div>
          <textarea name="message" rows={6} placeholder={t('contact.messagePlaceholder')} required></textarea>
          <button type="submit" className="btn">{t('contact.sendBtn')}</button>
        </form>
        <p style={{ textAlign: 'center', fontSize: '1.7rem', color: '#6b7280', marginBottom: '2rem' }}>
          {t('contact.directText')} <a href="mailto:ovejero.gustavo92@gmail.com" style={{ color: '#0ef' }}>ovejero.gustavo92@gmail.com</a>
        </p>
      </div>
      <footer className="footer">
        <div className="container-custom">
          <p className="derechos">{t('contact.rights')}</p>
          <p><a href="#home" className="btn">{t('contact.backTop')}</a></p>
        </div>
      </footer>
    </section>
  );
}
