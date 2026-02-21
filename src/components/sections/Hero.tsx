'use client';
import AnimatedText from '../ui/AnimatedText';

export default function Hero() {
  const specialties = [
    'Frontend Developer',
    'Backend Developer',
    'Unity Game Developer',
    'Python Developer',
    'Java Developer',
  ];

  const ramsinaSymbols = 'フルスタックおよびデオゲームプログラマ'//'ܟܠ ܒܪܢܫܐ ܒܪܝܠܗ ܚܐܪܐ ܘܒܪܒܪ ܓܘ ܐܝܩܪܐ ܘܙܕܩܐ'
    .split('')
    .filter(c => c !== ' ');

  return (
    <section id="home" className="home">
      <div className="home-content">
        <h3>👋 Bienvenido a mi Portafolio</h3>
        <h1>
          Hola, soy <span>Gustavo Ovejero</span>
        </h1>
        <p>
          Me especializo en{' '}
          <AnimatedText
            words={specialties}
            symbols={ramsinaSymbols}
            className="ramsina-regular"
          />
        </p>
        <div className="btn-group">
          <a href="#projects" className="btn">
            🚀 Ver Proyectos
          </a>
          <a href="/CVGustavoJavierOvejero.pdf" target='_blanck' className="btn">
            Descargar CV
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