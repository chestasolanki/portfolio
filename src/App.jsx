import React, { useState, useEffect, useRef } from 'react';

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
  const isTransitioning = useRef(false);
  const touchStartY = useRef(0);
  const wheelAccumulator = useRef(0);
  const wheelTimer = useRef(null);
  const TOTAL_PAGES = 5;
  const pageNames = ['home', 'work', 'skills', 'experience', 'contact'];

  // Smooth, slow, luxurious page transition curve
  const TRANSITION_DURATION_MS = 1250; // 1.25 seconds for smooth glide
  const TRANSITION_EASE = 'cubic-bezier(0.65, 0, 0.15, 1)'; // Silky ease-in-out curve

  // Direct navigation to page index
  const goToPage = (pageInput) => {
    let pageIndex;
    if (typeof pageInput === 'number') {
      pageIndex = pageInput;
    } else {
      const pageId = String(pageInput).toLowerCase().replace('#', '');
      pageIndex = pageNames.indexOf(pageId);
    }

    if (pageIndex >= 0 && pageIndex < TOTAL_PAGES && pageIndex !== currentPage) {
      isTransitioning.current = true;
      setCurrentPage(pageIndex);
      window.history.replaceState(null, '', '#' + pageNames[pageIndex]);
      setTimeout(() => {
        isTransitioning.current = false;
      }, TRANSITION_DURATION_MS);
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
  }, [currentPage]);

  // Full-page scroll transition on Mouse Wheel / Trackpad Gesture
  useEffect(() => {
    const handleWheel = (e) => {
      if (isResumeOpen) return;
      if (isTransitioning.current) return;

      // Accumulate delta to filter out trackpad micro-jitter
      wheelAccumulator.current += e.deltaY;
      clearTimeout(wheelTimer.current);
      wheelTimer.current = setTimeout(() => {
        wheelAccumulator.current = 0;
      }, 180);

      const THRESHOLD = 30; // Clean, intentional scroll threshold

      if (wheelAccumulator.current > THRESHOLD) {
        // Scroll Down -> Transition to Next Page
        if (currentPage < TOTAL_PAGES - 1) {
          isTransitioning.current = true;
          wheelAccumulator.current = 0;
          const next = currentPage + 1;
          setCurrentPage(next);
          window.history.replaceState(null, '', '#' + pageNames[next]);
          setTimeout(() => {
            isTransitioning.current = false;
          }, TRANSITION_DURATION_MS);
        }
      } else if (wheelAccumulator.current < -THRESHOLD) {
        // Scroll Up -> Transition to Previous Page
        if (currentPage > 0) {
          isTransitioning.current = true;
          wheelAccumulator.current = 0;
          const prev = currentPage - 1;
          setCurrentPage(prev);
          window.history.replaceState(null, '', '#' + pageNames[prev]);
          setTimeout(() => {
            isTransitioning.current = false;
          }, TRANSITION_DURATION_MS);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => {
      window.removeEventListener('wheel', handleWheel);
      clearTimeout(wheelTimer.current);
    };
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
          const next = currentPage + 1;
          setCurrentPage(next);
          window.history.replaceState(null, '', '#' + pageNames[next]);
          setTimeout(() => {
            isTransitioning.current = false;
          }, TRANSITION_DURATION_MS);
        }
      } else {
        // Swipe Down -> Previous Slide
        if (currentPage > 0) {
          isTransitioning.current = true;
          const prev = currentPage - 1;
          setCurrentPage(prev);
          window.history.replaceState(null, '', '#' + pageNames[prev]);
          setTimeout(() => {
            isTransitioning.current = false;
          }, TRANSITION_DURATION_MS);
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
          const next = currentPage + 1;
          setCurrentPage(next);
          window.history.replaceState(null, '', '#' + pageNames[next]);
          setTimeout(() => {
            isTransitioning.current = false;
          }, TRANSITION_DURATION_MS);
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        if (currentPage > 0) {
          isTransitioning.current = true;
          const prev = currentPage - 1;
          setCurrentPage(prev);
          window.history.replaceState(null, '', '#' + pageNames[prev]);
          setTimeout(() => {
            isTransitioning.current = false;
          }, TRANSITION_DURATION_MS);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, isResumeOpen]);

  return (
    <div className="purrweb-deck-viewport">
      {/* 
        Persistent Fixed Navbar:
        Floats firmly anchored at the top with no separating line.
        Active cyan underline indicator glides across tabs.
      */}
      <PageHeader
        activePage={pageNames[currentPage]}
        onNavigate={goToPage}
      />

      {/* 
        Full-Page Presentation Slides Track:
        When scrolling, the entire page glides with luxurious 1.25s cubic-bezier physics.
        Internal components enter smoothly right as the page arrives.
      */}
      <div
        className="purrweb-deck-track"
        style={{
          transform: `translate3d(0, -${currentPage * 100}vh, 0)`,
          transition: `transform ${TRANSITION_DURATION_MS}ms ${TRANSITION_EASE}`,
          willChange: 'transform'
        }}
      >
        {/* Slide 0: Home Page (Magnifying Hero) */}
        <section id="home" className="purrweb-slide-screen">
          <MagnifyingHero
            isActive={currentPage === 0}
            onNavigate={goToPage}
            onOpenResume={() => setIsResumeOpen(true)}
          />
        </section>

        {/* Slide 1: Work Page (Stacked Project Deck) */}
        <section id="work" className="purrweb-slide-screen">
          <Projects
            isActive={currentPage === 1}
            onNavigate={goToPage}
          />
        </section>

        {/* Slide 2: Skills & Credentials */}
        <section id="skills" className="purrweb-slide-screen">
          <Skills
            isActive={currentPage === 2}
            onNavigate={goToPage}
          />
        </section>

        {/* Slide 3: Experience & Academics */}
        <section id="experience" className="purrweb-slide-screen">
          <Experience
            isActive={currentPage === 3}
            onNavigate={goToPage}
          />
        </section>

        {/* Slide 4: Contact */}
        <section id="contact" className="purrweb-slide-screen">
          <Contact
            isActive={currentPage === 4}
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
