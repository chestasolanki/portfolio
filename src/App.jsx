import React, { useState, useEffect, useRef } from 'react';

import MagnifyingHero from './components/MagnifyingHero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import ResumeModal from './components/ResumeModal';
import PageHeader from './components/PageHeader';

const getInitialPage = () => {
  if (typeof window === 'undefined') return 0;
  const hash = window.location.hash.toLowerCase().replace('#', '');
  const map = { home: 0, about: 1, work: 2, certificates: 3, skills: 4, contact: 5 };
  return map[hash] ?? 0;
};

export default function App() {
  const [currentPage, setCurrentPage] = useState(getInitialPage);
  const [activeProject, setActiveProject] = useState(0);
  const [activeCertificate, setActiveCertificate] = useState(0);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const isTransitioning = useRef(false);
  const touchStartY = useRef(0);
  const wheelAccumulator = useRef(0);
  const wheelTimer = useRef(null);
  const TOTAL_PAGES = 6;
  const TOTAL_PROJECTS = 4;
  const TOTAL_CERTIFICATES = 5;
  const pageNames = ['home', 'about', 'work', 'certificates', 'skills', 'contact'];

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
      if (pageIndex === 2) setActiveProject(0);
      if (pageIndex === 3) setActiveCertificate(0);
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
      const map = { home: 0, about: 1, work: 2, certificates: 3, skills: 4, contact: 5 };
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

      // Accumulate delta to filter out trackpad micro-jitter (supports vertical and horizontal trackpad swipes)
      const delta = Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      wheelAccumulator.current += delta;
      clearTimeout(wheelTimer.current);
      wheelTimer.current = setTimeout(() => {
        wheelAccumulator.current = 0;
      }, 180);

      const THRESHOLD = 30; // Clean, intentional scroll threshold

      if (wheelAccumulator.current > THRESHOLD) {
        // Scroll Down -> On My Work, cycle through projects 0 -> 1 -> 2 -> 3
        if (currentPage === 2 && activeProject < TOTAL_PROJECTS - 1) {
          isTransitioning.current = true;
          wheelAccumulator.current = 0;
          setActiveProject((prev) => prev + 1);
          setTimeout(() => {
            isTransitioning.current = false;
          }, 600);
          return;
        }

        // Scroll Down -> On Certificates, cycle through certificates 0 -> 1 -> 2 -> 3 -> 4
        if (currentPage === 3 && activeCertificate < TOTAL_CERTIFICATES - 1) {
          isTransitioning.current = true;
          wheelAccumulator.current = 0;
          setActiveCertificate((prev) => prev + 1);
          setTimeout(() => {
            isTransitioning.current = false;
          }, 600);
          return;
        }

        // At end of projects or certificates or other slides, transition to next page
        if (currentPage < TOTAL_PAGES - 1) {
          isTransitioning.current = true;
          wheelAccumulator.current = 0;
          const next = currentPage + 1;
          setCurrentPage(next);
          if (next === 2) setActiveProject(0);
          if (next === 3) setActiveCertificate(0);
          window.history.replaceState(null, '', '#' + pageNames[next]);
          setTimeout(() => {
            isTransitioning.current = false;
          }, TRANSITION_DURATION_MS);
        }
      } else if (wheelAccumulator.current < -THRESHOLD) {
        // Scroll Up -> On Certificates, cycle backward through certificates
        if (currentPage === 3 && activeCertificate > 0) {
          isTransitioning.current = true;
          wheelAccumulator.current = 0;
          setActiveCertificate((prev) => prev - 1);
          setTimeout(() => {
            isTransitioning.current = false;
          }, 600);
          return;
        }

        // Scroll Up -> On My Work, cycle backward through projects
        if (currentPage === 2 && activeProject > 0) {
          isTransitioning.current = true;
          wheelAccumulator.current = 0;
          setActiveProject((prev) => prev - 1);
          setTimeout(() => {
            isTransitioning.current = false;
          }, 600);
          return;
        }

        // At start of projects or certificates or other slides, transition to previous page
        if (currentPage > 0) {
          isTransitioning.current = true;
          wheelAccumulator.current = 0;
          const prev = currentPage - 1;
          setCurrentPage(prev);
          if (prev === 2) setActiveProject(TOTAL_PROJECTS - 1);
          if (prev === 3) setActiveCertificate(TOTAL_CERTIFICATES - 1);
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
  }, [currentPage, activeProject, activeCertificate, isResumeOpen]);

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
        // Swipe Up -> Next Project or Next Certificate or Next Slide
        if (currentPage === 2 && activeProject < TOTAL_PROJECTS - 1) {
          isTransitioning.current = true;
          setActiveProject((prev) => prev + 1);
          setTimeout(() => {
            isTransitioning.current = false;
          }, 600);
          return;
        }
        if (currentPage === 3 && activeCertificate < TOTAL_CERTIFICATES - 1) {
          isTransitioning.current = true;
          setActiveCertificate((prev) => prev + 1);
          setTimeout(() => {
            isTransitioning.current = false;
          }, 600);
          return;
        }
        if (currentPage < TOTAL_PAGES - 1) {
          isTransitioning.current = true;
          const next = currentPage + 1;
          setCurrentPage(next);
          if (next === 2) setActiveProject(0);
          if (next === 3) setActiveCertificate(0);
          window.history.replaceState(null, '', '#' + pageNames[next]);
          setTimeout(() => {
            isTransitioning.current = false;
          }, TRANSITION_DURATION_MS);
        }
      } else {
        // Swipe Down -> Previous Certificate or Previous Project or Previous Slide
        if (currentPage === 3 && activeCertificate > 0) {
          isTransitioning.current = true;
          setActiveCertificate((prev) => prev - 1);
          setTimeout(() => {
            isTransitioning.current = false;
          }, 600);
          return;
        }
        if (currentPage === 2 && activeProject > 0) {
          isTransitioning.current = true;
          setActiveProject((prev) => prev - 1);
          setTimeout(() => {
            isTransitioning.current = false;
          }, 600);
          return;
        }
        if (currentPage > 0) {
          isTransitioning.current = true;
          const prev = currentPage - 1;
          setCurrentPage(prev);
          if (prev === 2) setActiveProject(TOTAL_PROJECTS - 1);
          if (prev === 3) setActiveCertificate(TOTAL_CERTIFICATES - 1);
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
  }, [currentPage, activeProject, activeCertificate, isResumeOpen]);

  // Keyboard navigation (ArrowDown, ArrowUp, PageDown, PageUp, ArrowLeft, ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isResumeOpen) return;
      if (isTransitioning.current) return;

      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        if (currentPage === 2 && activeProject < TOTAL_PROJECTS - 1) {
          isTransitioning.current = true;
          setActiveProject((prev) => prev + 1);
          setTimeout(() => {
            isTransitioning.current = false;
          }, 600);
          return;
        }
        if (currentPage === 3 && activeCertificate < TOTAL_CERTIFICATES - 1) {
          isTransitioning.current = true;
          setActiveCertificate((prev) => prev + 1);
          setTimeout(() => {
            isTransitioning.current = false;
          }, 600);
          return;
        }
        if (currentPage < TOTAL_PAGES - 1) {
          isTransitioning.current = true;
          const next = currentPage + 1;
          setCurrentPage(next);
          if (next === 2) setActiveProject(0);
          if (next === 3) setActiveCertificate(0);
          window.history.replaceState(null, '', '#' + pageNames[next]);
          setTimeout(() => {
            isTransitioning.current = false;
          }, TRANSITION_DURATION_MS);
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        if (currentPage === 3 && activeCertificate > 0) {
          isTransitioning.current = true;
          setActiveCertificate((prev) => prev - 1);
          setTimeout(() => {
            isTransitioning.current = false;
          }, 600);
          return;
        }
        if (currentPage === 2 && activeProject > 0) {
          isTransitioning.current = true;
          setActiveProject((prev) => prev - 1);
          setTimeout(() => {
            isTransitioning.current = false;
          }, 600);
          return;
        }
        if (currentPage > 0) {
          isTransitioning.current = true;
          const prev = currentPage - 1;
          setCurrentPage(prev);
          if (prev === 2) setActiveProject(TOTAL_PROJECTS - 1);
          if (prev === 3) setActiveCertificate(TOTAL_CERTIFICATES - 1);
          window.history.replaceState(null, '', '#' + pageNames[prev]);
          setTimeout(() => {
            isTransitioning.current = false;
          }, TRANSITION_DURATION_MS);
        }
      } else if (currentPage === 3 && (e.key === 'ArrowRight' || e.key === 'ArrowLeft')) {
        if (e.key === 'ArrowRight') {
          setActiveCertificate((prev) => (prev + 1) % TOTAL_CERTIFICATES);
        } else {
          setActiveCertificate((prev) => (prev - 1 + TOTAL_CERTIFICATES) % TOTAL_CERTIFICATES);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, activeProject, activeCertificate, isResumeOpen]);

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

        {/* Slide 1: About Page (Editorial Philosophy & Bio) */}
        <section id="about" className="purrweb-slide-screen">
          <About
            isActive={currentPage === 1}
            onNavigate={goToPage}
          />
        </section>

        {/* Slide 2: My Work Page */}
        <section id="work" className="purrweb-slide-screen">
          <Projects
            isActive={currentPage === 2}
            activeProject={activeProject}
            onSelectProject={(idx) => setActiveProject(idx)}
            onNavigate={goToPage}
          />
        </section>

        {/* Slide 3: Certificates (Scrolls directly here after last project) */}
        <section id="certificates" className="purrweb-slide-screen">
          <Certificates
            isActive={currentPage === 3}
            activeCertificate={activeCertificate}
            onSelectCertificate={(idx) => setActiveCertificate(idx)}
            onNavigate={goToPage}
          />
        </section>

        {/* Slide 4: Skills */}
        <section id="skills" className="purrweb-slide-screen">
          <Skills
            isActive={currentPage === 4}
            onNavigate={goToPage}
          />
        </section>

        {/* Slide 5: Contact */}
        <section id="contact" className="purrweb-slide-screen">
          <Contact
            isActive={currentPage === 5}
            onNavigate={goToPage}
            onOpenResume={() => setIsResumeOpen(true)}
          />
        </section>
      </div>

      {/* Subtle Right Edge Slide Navigation Dots */}
      <div className="purrweb-edge-pagination" aria-label="Page navigation">
        {[0, 1, 2, 3, 4, 5].map((idx) => {
          const isActive = currentPage === idx;
          const pageLabels = ['Home', 'About', 'My Work', 'Certificates', 'Skills', 'Contact'];
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
