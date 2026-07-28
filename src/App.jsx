import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ResumeModal from './components/ResumeModal';
import DrawingCanvas from './components/DrawingCanvas';

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

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="portfolio-app" data-theme={theme}>
      {/* Layer 2: Interactive Custom Drawing Cursor Canvas */}
      <DrawingCanvas />

      {/* Layer 3: Sticky Navbar */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
      />
      
      {/* Layer 1: Main Content Sections in Exact User Sequence: Experience -> Skills -> Projects */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
      </main>

      {/* Contact Section */}
      <Contact onOpenResume={() => setIsResumeOpen(true)} />

      {/* Layer 4: Interactive Resume Document Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
