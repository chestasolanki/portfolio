import React from 'react';
import { motion } from 'framer-motion';

export default function PageHeader({ activePage, onNavigate }) {
  const navItems = [
    { id: 'home', label: 'CHESTA SOLANKI', colClass: 'header-brand' },
    { id: 'about', label: 'ABOUT', colClass: 'header-nav-link' },
    { id: 'work', label: 'MY WORK', colClass: 'header-nav-link' },
    { id: 'certificates', label: 'CERTIFICATES', colClass: 'header-nav-link' },
    { id: 'skills', label: 'SKILLS', colClass: 'header-nav-link' },
    { id: 'contact', label: 'CONTACT', colClass: 'header-contact-link' },
  ];

  return (
    <header className="purrweb-exact-header">
      {navItems.map((item, idx) => {
        const isActive = activePage === item.id;
        return (
          <div
            key={item.id}
            className={`header-col ${item.colClass} ${isActive ? 'is-active' : ''}`}
          >
            <button
              onClick={() => onNavigate(idx)}
              className="nav-text-btn"
              aria-label={`Go to ${item.label}`}
            >
              <span>{item.label}</span>
              {isActive && (
                <motion.span
                  layoutId="headerActiveIndicator"
                  className="header-active-bar"
                  transition={{
                    duration: 0.45,
                    ease: [0.25, 1, 0.5, 1]
                  }}
                />
              )}
            </button>
          </div>
        );
      })}
    </header>
  );
}
