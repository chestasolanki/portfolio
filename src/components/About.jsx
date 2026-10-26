import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

      <div className="about-pure-container">
        {/* Left Side: Pure Editorial Statement */}
        <motion.div
          className="about-statement-col"
          initial={{ opacity: 0, x: -40 }}
          animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
          transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
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

        {/* Right Side: Circular Photo Frame */}
        <motion.div
          className="about-photo-col"
          initial={{ opacity: 0, scale: 0.88, x: 40 }}
          animate={isActive ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.88, x: 40 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="about-circle-wrapper">
            <div className="about-circle-glow-ring" aria-hidden="true" />
            <div className="about-circle-frame">
              <img
                src="/chesta_portrait.jpg"
                alt="Chesta Solanki"
                className="about-portrait-img"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
