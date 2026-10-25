import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import MagnifyingHero from './components/MagnifyingHero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import ResumeModal from './components/ResumeModal';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('cs_purrweb_theme');
    return savedTheme || 'dark';
  });

  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('cs_purrweb_theme', theme);
  }, [theme]);

  // Ultra-smooth Lenis scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.6,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.1
    });

    lenis.on('scroll', ScrollTrigger.update);

    const updateLenis = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(updateLenis);
    };
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="purrweb-app">
      {/* Floating Purrweb Minimal Navbar */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Portfolio Sections */}
      <main>
        {/* Signature Purrweb Hero with Interactive Magnifying Glass & Vibrant Gradient Aura */}
        <MagnifyingHero onOpenResume={() => setIsResumeOpen(true)} />

        {/* Selected Work (Featured Projects) */}
        <Projects />

        {/* Technical Skills & Verified Credentials Slideshow */}
        <Skills />

        {/* Career & Academic Journey */}
        <Experience />

        {/* Contact & Footer */}
        <Contact onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Embedded PDF Resume Modal Drawer */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}
