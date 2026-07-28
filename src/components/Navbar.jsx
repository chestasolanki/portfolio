import React from 'react';
import { Sun, Moon } from 'lucide-react';

export default function Navbar({ theme, toggleTheme }) {
  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backgroundColor: 'var(--navbar-bg)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--border-glass)',
      transition: 'all var(--transition-normal)'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '76px'
      }}>
        {/* Brand Logo */}
        <a href="#hero" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, var(--accent-purple), var(--accent-violet))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            fontWeight: '800',
            fontFamily: 'var(--font-serif)',
            fontSize: '1.2rem',
            boxShadow: '0 0 15px var(--glow-primary)'
          }}>
            CS
          </div>
          <div>
            <span className="font-serif" style={{
              fontWeight: '700',
              fontSize: '1.2rem',
              color: 'var(--text-primary)',
              letterSpacing: '-0.01em',
              display: 'block',
              lineHeight: 1
            }}>
              CHESTA SOLANKI
            </span>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              color: 'var(--accent-purple)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase'
            }}>
              FULL-STACK DEVELOPER
            </span>
          </div>
        </a>

        {/* Navigation Anchor Links in Exact Sequence: Experience -> Skills -> Projects -> Contact */}
        <div style={{
          display: 'none',
          alignItems: 'center',
          gap: '32px'
        }} className="desktop-nav">
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-glass)',
              color: 'var(--accent-purple)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all var(--transition-fast)'
            }}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>

      <style>{`
        .nav-link {
          color: var(--text-secondary);
          text-decoration: none;
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 0.92rem;
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
          left: 0;
          width: 0%;
          height: 2px;
          background: var(--accent-purple);
          transition: width var(--transition-fast);
        }
        .nav-link:hover::after {
          width: 100%;
        }
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  );
}
