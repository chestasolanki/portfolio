import React from 'react';

export default function PageHeader({ activePage, onNavigate }) {
  return (
    <header className="purrweb-exact-header">
      {/* Brand: CHESTA SOLANKI (Active on Home) */}
      <div className={`header-col header-brand ${activePage === 'home' ? 'is-active' : ''}`}>
        <button
          onClick={() => onNavigate(0)}
          className="nav-text-btn"
          aria-label="Go to Home"
        >
          <span>CHESTA SOLANKI</span>
          {activePage === 'home' && <span className="header-active-bar" />}
        </button>
      </div>

      {/* WORK (Active on Work) */}
      <nav className={`header-col header-nav-link ${activePage === 'work' ? 'is-active' : ''}`}>
        <button
          onClick={() => onNavigate(1)}
          className="nav-text-btn"
          aria-label="Go to Work"
        >
          <span>WORK</span>
          {activePage === 'work' && <span className="header-active-bar" />}
        </button>
      </nav>

      {/* SKILLS (Active on Skills) */}
      <div className={`header-col header-nav-link ${activePage === 'skills' ? 'is-active' : ''}`}>
        <button
          onClick={() => onNavigate(2)}
          className="nav-text-btn"
          aria-label="Go to Skills"
        >
          <span>SKILLS</span>
          {activePage === 'skills' && <span className="header-active-bar" />}
        </button>
      </div>

      {/* EXPERIENCE (Active on Experience) */}
      <div className={`header-col header-nav-link ${activePage === 'experience' ? 'is-active' : ''}`}>
        <button
          onClick={() => onNavigate(3)}
          className="nav-text-btn"
          aria-label="Go to Experience"
        >
          <span>EXPERIENCE</span>
          {activePage === 'experience' && <span className="header-active-bar" />}
        </button>
      </div>

      {/* CONTACT (Active on Contact) */}
      <div className={`header-col header-contact-link ${activePage === 'contact' ? 'is-active' : ''}`}>
        <button
          onClick={() => onNavigate(4)}
          className="nav-text-btn"
          aria-label="Go to Contact"
        >
          <span>CONTACT</span>
          {activePage === 'contact' && <span className="header-active-bar" />}
        </button>
      </div>
    </header>
  );
}
