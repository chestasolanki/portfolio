import React, { useState, useEffect, useRef } from 'react';

import MagnifyingHero from './components/MagnifyingHero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import ResumeModal from './components/ResumeModal';

const getInitialPage = () => {
  if (typeof window === 'undefined') return 0;
  const hash = window.location.hash.toLowerCase().replace('#', '');
  const map = { home: 0, work: 1, skills: 2, experience: 3, contact: 4 };
  return map[hash] ?? 0;
};

export default function App() {
  const [currentPage, setCurrentPage] = useState(getInitialPage);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const isTransitioning = useRef(false);
  const touchStartY = useRef(0);
  const TOTAL_PAGES = 5;

  // Handle direct navigation to page index (0: Home, 1: Work, 2: Skills, 3: Experience, 4: Contact)
  const goToPage = (pageIndex) => {
    if (pageIndex >= 0 && pageIndex < TOTAL_PAGES) {
      isTransitioning.current = true;
      setCurrentPage(pageIndex);
      const pageNames = ['home', 'work', 'skills', 'experience', 'contact'];
      window.history.replaceState(null, '', '#' + pageNames[pageIndex]);
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      setTimeout(() => {
        isTransitioning.current = false;
      }, 850);
    }
  };

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
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Full-page scroll transition on Mouse Wheel / Trackpad Gesture
  useEffect(() => {
    const handleWheel = (e) => {
      // Ignore wheel events if modal is open or already animating
      if (isResumeOpen) return;
      if (isTransitioning.current) return;
      if (Math.abs(e.deltaY) < 25) return;

      if (e.deltaY > 0) {
        // Scroll Down -> Transition to Next Page
        if (currentPage < TOTAL_PAGES - 1) {
          isTransitioning.current = true;
          setCurrentPage((prev) => prev + 1);
          setTimeout(() => {
            isTransitioning.current = false;
          }, 850);
        }
      } else if (e.deltaY < 0) {
        // Scroll Up -> Transition to Previous Page
        if (currentPage > 0) {
          isTransitioning.current = true;
          setCurrentPage((prev) => prev - 1);
          setTimeout(() => {
            isTransitioning.current = false;
          }, 850);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentPage, isResumeOpen]);

  // Touch Swipe Gesture for Mobile / Tablet
  useEffect(() => {
    const handleTouchStart = (e) => {
      if (isResumeOpen) return;
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      if (isResumeOpen) return;
      if (isTransitioning.current) return;
      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY.current - touchEndY;

      if (Math.abs(diff) < 45) return;

      if (diff > 0) {
        // Swipe Up -> Next Slide
        if (currentPage < TOTAL_PAGES - 1) {
          isTransitioning.current = true;
          setCurrentPage((prev) => prev + 1);
          setTimeout(() => {
            isTransitioning.current = false;
          }, 850);
        }
      } else {
        // Swipe Down -> Previous Slide
        if (currentPage > 0) {
          isTransitioning.current = true;
          setCurrentPage((prev) => prev - 1);
          setTimeout(() => {
            isTransitioning.current = false;
          }, 850);
        }
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentPage, isResumeOpen]);

  // Keyboard navigation (ArrowDown, ArrowUp, PageDown, PageUp)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isResumeOpen) return;
      if (isTransitioning.current) return;

      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        if (currentPage < TOTAL_PAGES - 1) {
          isTransitioning.current = true;
          setCurrentPage((prev) => prev + 1);
          setTimeout(() => {
            isTransitioning.current = false;
          }, 850);
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        if (currentPage > 0) {
          isTransitioning.current = true;
          setCurrentPage((prev) => prev - 1);
          setTimeout(() => {
            isTransitioning.current = false;
          }, 850);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, isResumeOpen]);

  return (
    <div className="purrweb-deck-viewport">
      {/* 
        Full-Page Slides Track:
        Slides transition smoothly with GPU-accelerated cubic-bezier physics
      */}
      <div
        className="purrweb-deck-track"
        style={{
          transform: `translate3d(0, -${currentPage * 100}vh, 0)`,
          transition: 'transform 0.85s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        {/* Slide 0: Home Page (Magnifying Hero) */}
        <section className="purrweb-slide-screen">
          <MagnifyingHero
            onNavigate={goToPage}
            onOpenResume={() => setIsResumeOpen(true)}
          />
        </section>

        {/* Slide 1: Work Page (Stacked Project Deck) */}
        <section className="purrweb-slide-screen">
          <Projects onNavigate={goToPage} />
        </section>

        {/* Slide 2: Skills & Credentials */}
        <section className="purrweb-slide-screen">
          <Skills onNavigate={goToPage} />
        </section>

        {/* Slide 3: Experience & Academics */}
        <section className="purrweb-slide-screen">
          <Experience onNavigate={goToPage} />
        </section>

        {/* Slide 4: Contact */}
        <section className="purrweb-slide-screen">
          <Contact
            onNavigate={goToPage}
            onOpenResume={() => setIsResumeOpen(true)}
          />
        </section>
      </div>

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
