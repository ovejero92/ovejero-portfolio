'use client';

import Navbar from '@/components/ui/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Timeline from '@/components/sections/Timeline';
import TechStack from '@/components/sections/TechStack';
import Projects from '@/components/sections/Projects';
import ProjectsFrameworks from '@/components/sections/ProjectsFrameworks';
import Contact from '@/components/sections/Contact';
import ProjectsPM from '@/components/sections/ProjectsPM';

export default function Home() {
  return (
    <div style={{
      height: '100vh',
      minHeight: '100svh',
      overflowX: 'hidden',
      overflowY: 'scroll',
      scrollSnapType: 'y mandatory',
      WebkitOverflowScrolling: 'touch',
      position: 'relative',
      zIndex: 0,
      maxWidth: '100%',
    }}>
      <Navbar />
      <main >
        <Hero />
        <About />
        <Timeline />
        <TechStack />
        <Projects />
        <ProjectsFrameworks />
        <ProjectsPM />
        <Contact />
      </main>
    </div>
  );
}
