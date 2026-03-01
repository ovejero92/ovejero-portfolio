'use client';
import AnimatedText from '../ui/AnimatedText';
import { useLanguage } from '../../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  const specialties = t('hero.specialties');

  const ramsinaSymbols = 'フルスタックおよびデオゲームプログラマ'//'ܟܠ ܒܪܢܫܐ ܒܪܝܠܗ ܚܐܪܐ ܘܒܪܒܪ ܓܘ ܐܝܩܪܐ ܘܙܕܩܐ'
    .split('')
    .filter(c => c !== ' ');

  return (
    <section id="home" className="home">
      <div className="home-content">
        <h3>{t('hero.welcome')}</h3>
        <h1>
          {t('hero.greeting')}<span>Gustavo Ovejero</span>
        </h1>
        <p>
          {t('hero.specialty')}{' '}
          <AnimatedText
            words={specialties}
            symbols={ramsinaSymbols}
            className="ramsina-regular"
          />
        </p>
        <div className="btn-group">
          <a href="#projects" className="btn">
            {t('hero.projectsBtn')}
          </a>
          <a href="/CVGustavoJavierOvejero.pdf" target='_blanck' className="btn">
            {t('hero.cvBtn')}
          </a>
        </div>
        <div className="social-media">
          <a href="https://github.com/ovejero92"><i className='bx bxl-github'></i></a>
          <a href="https://www.linkedin.com/in/gustavo-ovejero/"><i className='bx bxl-linkedin'></i></a>
        </div>
      </div>
      <div className="home-img">
        <div className="circle">
          <img src="/perfil.webp" alt="Avatar de Gustavo Ovejero" className="img-perfil" />
        </div>
      </div>
    </section>
  );
}