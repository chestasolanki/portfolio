import React, { useState, useEffect } from 'react';
import { Sun, Moon, ArrowUpRight, FileText } from 'lucide-react';

export default function Navbar({ theme, toggleTheme, onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`purrweb-header ${scrolled ? 'is-scrolled' : ''}`}
      style={{
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'min(1180px, 92vw)',
        zIndex: 100,
        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      <div className="purrweb-nav-pill">
        
        {/* Brand Monogram */}
        <a href="#hero" className="purrweb-nav-brand">
          <div className="brand-avatar">CS</div>
          <div className="brand-text">
            <span className="brand-name">Chesta Solanki</span>
            <span className="brand-dot" />
            <span className="brand-role">Engineer</span>
          </div>
        </a>

        {/* Center Nav Links */}
        <nav className="purrweb-nav-links">
          <a href="#projects" className="nav-item">
            <span>Work</span>
          </a>
          <a href="#skills" className="nav-item">
            <span>Skills</span>
          </a>
          <a href="#experience" className="nav-item">
            <span>Experience</span>
          </a>
          <a href="#contact" className="nav-item">
            <span>Contact</span>
          </a>
        </nav>

        {/* Right Actions: Resume Button & Theme Toggle */}
        <div className="purrweb-nav-actions">
          <button onClick={onOpenResume} className="nav-resume-btn" title="View Full Resume PDF">
            <FileText size={14} />
            <span>Resume</span>
            <ArrowUpRight size={13} />
          </button>

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="nav-theme-toggle"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>
        </div>

      </div>
    </header>
  );
}
