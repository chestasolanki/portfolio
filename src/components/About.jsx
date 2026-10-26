import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Terminal, Code2, Globe, ArrowUpRight, Cpu } from 'lucide-react';

export default function About({ isActive = true, onNavigate }) {
  // Rotating intro transition words
  const introWords = ['intelligent', 'adaptive', 'meaningful', 'dynamic'];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % introWords.length);
    }, 1500);
    return () => clearInterval(timer);
  }, [introWords.length]);

  return (
    <section className="purrweb-exact-slide-stage about-slide-stage">
      {/* Background Vibrant Gradient Mesh Atmosphere */}
      <div className="work-atmosphere" aria-hidden="true">
        <div className="work-glow glow-cyan-teal" />
        <div className="work-glow glow-amber-warm" />
        <div className="work-glow glow-magenta" />
        <div className="work-grain" />
      </div>

      <div className="about-content-inner">
        {/* Top Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
          transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: 'clamp(14px, 2.2vh, 24px)' }}
        >
          <div className="purrweb-badge">
            <Sparkles size={12} style={{ color: 'var(--accent-cyan)' }} />
            <span className="purrweb-badge-text">ABOUT // ENGINEERING PHILOSOPHY</span>
          </div>
        </motion.div>

        {/* Editorial Statement with Fast Rotating Word Transitions */}
        <motion.div
          className="about-statement-wrapper"
          initial={{ opacity: 0, y: 40 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="about-editorial-headline">
            I am Chesta Solanki,<br />
            crafting{' '}
            <span className="rotating-word-slot" style={{ display: 'inline-block', position: 'relative' }}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIndex}
                  initial={{ opacity: 0, y: 14, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -14, filter: 'blur(4px)' }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  className="work-cyan-accent"
                  style={{ display: 'inline-block' }}
                >
                  {introWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span><br />
            digital experiences<br />
            at the intersection<br />
            of AI &amp; engineering.
          </h1>
        </motion.div>

        {/* Two-Column Supporting Narrative & Quick Facts */}
        <motion.div
          className="about-narrative-grid"
          initial={{ opacity: 0, y: 45 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 45 }}
          transition={{ duration: 0.85, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Left Column: Narrative Story & CTA */}
          <div className="about-bio-column">
            <p className="about-bio-lead">
              Full-stack software engineer based in Noida, specializing in high-throughput web platforms, real-time distributed systems, and generative AI integrations.
            </p>
            <p className="about-bio-body">
              Spearheaded the technical architecture of Limetta's e-commerce platform from concept to live production deployment with real-world users, automated payment pipelines, and real-time logistics. Passionate about building resilient distributed architectures with clean, human-centric design.
            </p>

            <div className="about-actions-row">
              <button
                onClick={() => onNavigate && onNavigate(2)}
                className="about-cta-btn"
                title="Navigate to My Work"
              >
                <span>Explore My Work</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>

          {/* Right Column: Key Accreditations & Core Matrix */}
          <div className="about-facts-column">
            <div className="about-fact-card">
              <div className="fact-label">CORE DOMAIN</div>
              <div className="fact-value">Full-Stack &amp; AI / Cloud Systems</div>
              <div className="fact-detail">React 19 • Node.js • Express • MongoDB • Docker • AWS</div>
            </div>

            <div className="about-fact-card">
              <div className="fact-label">PRODUCTION RECORD</div>
              <div className="fact-value">Founding Product Developer</div>
              <div className="fact-detail">Live luxury interior decor platform architecture at Limetta</div>
            </div>

            <div className="about-fact-card">
              <div className="fact-label">ACADEMIC &amp; ALGORITHMIC FOUNDATION</div>
              <div className="fact-value">B.Tech IT (8.13 CGPA) • 250+ LeetCode</div>
              <div className="fact-detail">GL Bajaj Institute of Technology &amp; Management</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
