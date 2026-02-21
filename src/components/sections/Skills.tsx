'use client';

import { skills } from '@/data/skills';


export default function Skills() {
  return (
    <section id="skills" className="services">
      <div className="container-custom">
        <h2 className="heading">Stack Tecnológico</h2>
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