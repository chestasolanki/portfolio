import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ResumeModal from './components/ResumeModal';
import DrawingCanvas from './components/DrawingCanvas';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('cs_portfolio_theme');
    return savedTheme || 'dark';
  });

  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('cs_portfolio_theme', theme);
  }, [theme]);

  // Initialize Lenis Ultra-Smooth Slow Presentation Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.2,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.75,
      touchMultiplier: 1.2
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="app-container">
      {/* Interactive Light Blue Drawing Canvas */}
      <DrawingCanvas />

      {/* Floating Glass Pill Navbar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Page Sections */}
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Contact onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Resume Viewer Modal Drawer */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}
