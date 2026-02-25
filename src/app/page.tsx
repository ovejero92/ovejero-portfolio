'use client';

import Navbar from '@/components/ui/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import TechStack from '@/components/sections/TechStack';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <div style={{
      height: '100vh',
      overflowY: 'scroll',
      scrollSnapType: 'y mandatory',
      position: 'relative',
      zIndex: 0           
    }}>
      <Navbar />
      <main >
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
