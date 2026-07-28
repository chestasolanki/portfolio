import React from 'react';
import { Sun, Moon } from 'lucide-react';

export default function Navbar({ theme, toggleTheme }) {
  return (
    <nav style={{
      position: 'fixed',
      top: '18px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 100,
      width: 'min(900px, 92vw)',
      background: 'var(--navbar-bg)',
      backdropFilter: 'blur(18px)',
      WebkitBackdropFilter: 'blur(18px)',
      border: '1px solid var(--navbar-border)',
      borderTop: '1px solid var(--border-glass-top)',
      borderRadius: '9999px',
      boxShadow: '0 15px 35px rgba(0, 0, 0, 0.15)',
      padding: '8px 24px',
      transition: 'all var(--transition-normal)'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '46px'
      }}>
        {/* Brand Logo */}
        <a href="#hero" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '34px',
            height: '34px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #0284c7 0%, #38bdf8 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            fontWeight: '800',
            fontFamily: 'var(--font-serif)',
            fontSize: '1rem',
            boxShadow: '0 0 14px rgba(56, 189, 248, 0.4)'
          }}>
            CS
          </div>
          <span className="font-serif" style={{
            fontWeight: '700',
            fontSize: '1.1rem',
            color: 'var(--navbar-text)',
            letterSpacing: '-0.01em'
          }}>
            CHESTA
          </span>
        </a>

        {/* Floating Nav Items */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '28px'
        }} className="desktop-nav">
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>

        {/* Theme Toggle Button */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              background: 'rgba(2, 132, 199, 0.1)',
              border: '1px solid var(--border-glass)',
              color: 'var(--accent-purple)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all var(--transition-fast)'
            }}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </div>

      <style>{`
        .nav-link {
          color: var(--text-secondary);
          text-decoration: none;
          font-family: var(--font-body);
          font-weight: 500;
          font-size: 0.9rem;
          transition: color var(--transition-fast);
          position: relative;
        }
        .nav-link:hover {
          color: var(--accent-purple);
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%);
          width: 0%;
          height: 2px;
          background: var(--accent-purple);
          transition: width var(--transition-fast);
          border-radius: 2px;
        }
        .nav-link:hover::after {
          width: 80%;
        }
        @media (max-width: 767px) {
          .desktop-nav {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
}
