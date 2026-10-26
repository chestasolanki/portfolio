import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

import MagnifyingHero from './components/MagnifyingHero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import ResumeModal from './components/ResumeModal';
import PageHeader from './components/PageHeader';

const getInitialPage = () => {
  if (typeof window === 'undefined') return 0;
  const hash = window.location.hash.toLowerCase().replace('#', '');
  const map = { home: 0, work: 1, skills: 2, experience: 3, contact: 4 };
  return map[hash] ?? 0;
};

export default function App() {
  const [currentPage, setCurrentPage] = useState(getInitialPage);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const lenisRef = useRef(null);
  const isProgrammaticScroll = useRef(false);
  const pageNames = ['home', 'work', 'skills', 'experience', 'contact'];

  // Initialize Lenis butter-smooth momentum scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });
    lenisRef.current = lenis;

    let animationFrameId;
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Lock scrolling when ResumeModal is open
  useEffect(() => {
    if (isResumeOpen) {
      lenisRef.current?.stop();
      document.body.style.overflow = 'hidden';
    } else {
      lenisRef.current?.start();
      document.body.style.overflow = '';
    }
  }, [isResumeOpen]);

  // Navigate smoothly to target section
  const goToPage = (pageInput) => {
    let pageIndex;
    let pageId;

    if (typeof pageInput === 'number') {
      pageIndex = pageInput;
      pageId = pageNames[pageInput];
    } else {
      pageId = String(pageInput).toLowerCase().replace('#', '');
      pageIndex = pageNames.indexOf(pageId);
    }

    if (pageIndex >= 0 && pageIndex < pageNames.length) {
      setCurrentPage(pageIndex);
      window.history.replaceState(null, '', '#' + pageId);

      const target = document.getElementById(pageId);
      if (target) {
        isProgrammaticScroll.current = true;
        if (lenisRef.current) {
          lenisRef.current.scrollTo(target, {
            offset: 0,
            duration: 1.25,
            onComplete: () => {
              setTimeout(() => {
                isProgrammaticScroll.current = false;
              }, 50);
            }
          });
        } else {
          target.scrollIntoView({ behavior: 'smooth' });
          setTimeout(() => {
            isProgrammaticScroll.current = false;
          }, 800);
        }
      }
    }
  };

  // Scroll spy to keep activePage state in sync with scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (isResumeOpen) return;
      if (isProgrammaticScroll.current) return;

      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      // If user reached near bottom of page, highlight Contact
      if (scrollY + windowHeight >= fullHeight - 80) {
        setCurrentPage(4);
        window.history.replaceState(null, '', '#contact');
        return;
      }

      // Check sections from bottom to top
      const triggerY = scrollY + windowHeight * 0.35;
      for (let i = pageNames.length - 1; i >= 0; i--) {
        const el = document.getElementById(pageNames[i]);
        if (el && triggerY >= el.offsetTop) {
          setCurrentPage(i);
          window.history.replaceState(null, '', '#' + pageNames[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    if (lenisRef.current) {
      lenisRef.current.on('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (lenisRef.current) {
        lenisRef.current.off('scroll', handleScroll);
      }
    };
  }, [isResumeOpen]);

  // Sync with initial URL hash and external hash navigation
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase().replace('#', '');
      const map = { home: 0, work: 1, skills: 2, experience: 3, contact: 4 };
      if (hash in map) {
        goToPage(map[hash]);
      }
    };
    window.addEventListener('hashchange', handleHash);
    if (window.location.hash) {
      setTimeout(handleHash, 250);
    }
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Keyboard navigation (ArrowDown, ArrowUp, PageDown, PageUp)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isResumeOpen) return;

      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        if (currentPage < pageNames.length - 1) {
          e.preventDefault();
          goToPage(currentPage + 1);
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        if (currentPage > 0) {
          e.preventDefault();
          goToPage(currentPage - 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, isResumeOpen]);

  return (
    <div className="purrweb-continuous-container">
      {/* 
        Fixed Persistent Navbar:
        Stays firmly anchored at the top across all pages.
        Active underline indicator smoothly tracks current section.
      */}
      <PageHeader
        activePage={pageNames[currentPage]}
        onNavigate={goToPage}
      />

      {/* Section 0: Home Page (Magnifying Hero) */}
      <section id="home" className="purrweb-flow-section">
        <MagnifyingHero
          onNavigate={goToPage}
          onOpenResume={() => setIsResumeOpen(true)}
        />
      </section>

      {/* Section 1: Work Page (Stacked Project Deck) */}
      <section id="work" className="purrweb-flow-section">
        <Projects onNavigate={goToPage} />
      </section>

      {/* Section 2: Skills & Credentials */}
      <section id="skills" className="purrweb-flow-section">
        <Skills onNavigate={goToPage} />
      </section>

      {/* Section 3: Experience & Academics */}
      <section id="experience" className="purrweb-flow-section">
        <Experience onNavigate={goToPage} />
      </section>

      {/* Section 4: Contact */}
      <section id="contact" className="purrweb-flow-section">
        <Contact
          onNavigate={goToPage}
          onOpenResume={() => setIsResumeOpen(true)}
        />
      </section>

      {/* Subtle Right Edge Slide Navigation Dots */}
      <div className="purrweb-edge-pagination" aria-label="Page navigation">
        {[0, 1, 2, 3, 4].map((idx) => {
          const isActive = currentPage === idx;
          const pageLabels = ['Home', 'Work', 'Skills', 'Experience', 'Contact'];
          return (
            <button
              key={idx}
              onClick={() => goToPage(idx)}
              className={`edge-dot-btn ${isActive ? 'is-active' : ''}`}
              aria-label={`Go to ${pageLabels[idx]}`}
              title={pageLabels[idx]}
            >
              <span className="edge-dot-pill" />
            </button>
          );
        })}
      </div>

      {/* Embedded PDF Resume Modal Drawer */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}
