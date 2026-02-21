'use client';


export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container-custom" style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h2 className="heading">Vamos a conectar</h2>
        <p style={{ textAlign: 'center', fontSize: '1.2rem', marginBottom: '2rem' }}>
          Estoy siempre disponible para nuevos proyectos o colaboraciones. Contáctame y hablemos.
        </p>
        <form className="contact-form" action="https://formspree.io/f/xaykqvwb" method="POST">
          <div className="input-box">
            <input type="text" name="name" placeholder="Nombre" required />
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <textarea name="message" rows={6} placeholder="Mensaje" required></textarea>
          <button type="submit" className="btn">Enviar</button>
        </form>
        <p style={{ textAlign: 'center', fontSize: '1rem', color: '#6b7280' }}>
          También puedes escribirme directamente a <a href="mailto:ovejero.gustavo92@gmail.com" style={{ color: '#0ef' }}>ovejero.gustavo92@gmail.com</a>
        </p>
      </div>
    </section>
  );
}
