'use client';


export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-img">
        <img src="/avatar.jpeg" alt="Gustavo Ovejero" />
      </div>
      <div className="about-content">
        <h2 className="heading">Sobre Mí</h2>
        <h3>Apasionado por la tecnología</h3>
        <p>
          Soy desarrollador Full Stack e Instructor en tecnologías web, con experiencia en la construcción de aplicaciones escalables y arquitecturas robustas.
        </p>
        <p>
          Trabajo principalmente con Java (Spring Boot), Django, React, Next.js y Angular, desarrollando APIs seguras y eficientes junto a interfaces modernas y optimizadas.
        </p>
        <p>
         Me enfoco en escribir código limpio, mantenible y orientado a resolver problemas reales.
        </p>
        <p>
          Además de desarrollar, formo nuevos programadores en tecnologías como JavaScript, React y Backend, lo que me permite mantener una base técnica sólida y actualizada constantemente.
        </p>
        <p>
         🎯 Mi objetivo es crear soluciones con impacto real, combinando buenas prácticas, arquitectura clara y visión de producto.
        </p>
      </div>
    </section>
  );
}