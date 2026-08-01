import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import PageTransitionSection from './PageTransitionSection';
import RobotCompanion from './RobotCompanion';

export default function Hero() {
  const phrases = [
    'Building Products_',
    'Solving Problems_',
    'Shipping Code_',
    'Learning AI_'
  ];

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Dynamic Typewriter & Deleting Loop
  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && typedText.length < currentPhrase.length) {
        setTypedText(currentPhrase.slice(0, typedText.length + 1));
      } else if (!isDeleting && typedText.length === currentPhrase.length) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && typedText.length > 0) {
        setTypedText(currentPhrase.slice(0, typedText.length - 1));
      } else if (isDeleting && typedText.length === 0) {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, phraseIndex]);

  return (
    <PageTransitionSection
      id="hero"
      style={{
        minHeight: '100vh',
        padding: '130px 5vw 80px 5vw',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        background: 'var(--bg-main)',
        overflow: 'hidden',
        transition: 'background-color 0.35s ease',
      }}
    >
      {/* ULTRA BRIGHT ELECTRIC BLUE VOLUMETRIC GLOW BEHIND ROBOT */}
      <div
        className="hero-robot-glow"
        style={{
          position: 'absolute',
          top: '50%',
          right: '2%',
          transform: 'translateY(-50%)',
          width: '780px',
          height: '780px',
          pointerEvents: 'none',
          zIndex: 0,
          opacity: 0.92,
          filter: 'blur(100px)',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.95) 0%, rgba(14, 165, 233, 0.75) 30%, rgba(2, 132, 199, 0.45) 55%, rgba(125, 211, 252, 0.2) 75%, transparent 85%)',
        }}
      />

      {/* INNER INTENSE NEON BLUE CORE GLOW */}
      <div
        className="hero-robot-core-glow"
        style={{
          position: 'absolute',
          top: '50%',
          right: '8%',
          transform: 'translateY(-50%)',
          width: '460px',
          height: '460px',
          pointerEvents: 'none',
          zIndex: 0,
          opacity: 0.85,
          filter: 'blur(70px)',
          background: 'radial-gradient(circle, rgba(186, 230, 253, 0.95) 0%, rgba(56, 189, 248, 0.85) 40%, transparent 70%)',
        }}
      />

      {/* Main Two-Column Row */}
      <div
        className="hero-row"
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '40px',
        }}
      >
        {/* ---------------- LEFT: Text Content ---------------- */}
        <div style={{ textAlign: 'left', maxWidth: '640px', flex: '1 1 480px' }}>

          {/* 1. Badge: AVAILABLE FOR OPPORTUNITIES */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            style={{ marginBottom: '24px' }}
          >
            <div className="glass-pill" style={{ padding: '7px 20px', fontSize: '11.5px', letterSpacing: '0.22em', textTransform: 'uppercase', display: 'inline-flex' }}>
              <span className="pulse-dot" />
              <span>AVAILABLE FOR OPPORTUNITIES</span>
            </div>
          </motion.div>

          {/* 2. GIANT HERO NAME WITH LIMETTA LUXURY SERIF & ITALIC ACCENT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{ marginBottom: '20px', position: 'relative' }}
          >
            <h1 className="giant-hero-title" style={{ textAlign: 'left', lineHeight: '0.96' }}>
              <span
                className="font-italic"
                style={{
                  display: 'block',
                  color: 'var(--text-primary)',
                  fontStyle: 'italic',
                  fontWeight: '500',
                  letterSpacing: '0.01em'
                }}
              >
                Chesta
              </span>
              <span
                className="hero-name-shine font-italic"
                style={{
                  display: 'block',
                  color: 'var(--accent-purple)',
                  fontStyle: 'italic',
                  fontWeight: '500',
                  letterSpacing: '0.01em',
                  textShadow: '0 0 45px rgba(56, 189, 248, 0.6)'
                }}
              >
                Solanki
              </span>
            </h1>
          </motion.div>

          {/* 3. Role Tag: FULL-STACK ENGINEER */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(14px, 1.8vw, 18px)',
              color: 'var(--accent-purple)',
              letterSpacing: '0.22em',
              marginBottom: '20px',
              textTransform: 'uppercase',
              fontWeight: '500'
            }}
          >
            Full-Stack &amp; AI Engineer
          </motion.div>

          {/* 4. Dynamic Terminal Typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '15px',
              color: '#4ade80',
              fontWeight: '600',
              marginBottom: '22px',
              display: 'inline-block',
              background: 'rgba(74, 222, 128, 0.08)',
              padding: '8px 20px',
              borderRadius: 'var(--radius-pill)',
              border: '1px solid rgba(74, 222, 128, 0.25)'
            }}
          >
            &gt; {typedText}
          </motion.div>

          {/* 5. Description Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            style={{
              fontSize: '15.5px',
              color: 'var(--text-secondary)',
              maxWidth: '520px',
              marginBottom: '30px',
              lineHeight: '1.75',
              fontWeight: '400'
            }}
          >
            Crafting <em>timeless</em> web applications, AI-powered systems, and <em>modern</em> digital experiences built with performance, beauty, and precision.
          </motion.p>

          {/* 6. Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '32px' }}
          >
            <a
              href="mailto:chestasolanki664@gmail.com"
              className="btn-primary"
              style={{ padding: '12px 28px', fontSize: '13px', letterSpacing: '0.14em', textTransform: 'uppercase' }}
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight size={15} />
            </a>

            <a
              href="#projects"
              className="btn-secondary"
              style={{ padding: '12px 26px', fontSize: '13px', letterSpacing: '0.14em', textTransform: 'uppercase' }}
            >
              <span>VIEW PROJECTS</span>
            </a>
          </motion.div>

          {/* 7. Metrics Grid Pills */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              marginBottom: '24px'
            }}
          >
            <div style={{ padding: '8px 18px', borderRadius: 'var(--radius-pill)', background: 'var(--bg-card)', border: '1px solid var(--border-glass)' }}>
              <span style={{ fontSize: '14.5px', fontWeight: '800', color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>250+ </span>
              <span style={{ fontSize: '13px', color: 'var(--accent-purple)', fontFamily: 'var(--font-mono)' }}>LeetCode</span>
            </div>

            <div style={{ padding: '8px 18px', borderRadius: 'var(--radius-pill)', background: 'var(--bg-card)', border: '1px solid var(--border-glass)' }}>
              <span style={{ fontSize: '14.5px', fontWeight: '800', color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>8.13 </span>
              <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>CGPA</span>
            </div>

            <div style={{ padding: '8px 18px', borderRadius: 'var(--radius-pill)', background: 'var(--bg-card)', border: '1px solid var(--border-glass)' }}>
              <span style={{ fontSize: '14.5px', fontWeight: '800', color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>Full Stack </span>
              <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>React/Node</span>
            </div>

            <div style={{ padding: '8px 18px', borderRadius: 'var(--radius-pill)', background: 'var(--bg-card)', border: '1px solid var(--border-glass)' }}>
              <span style={{ fontSize: '14.5px', fontWeight: '800', color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>AI / ML </span>
              <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>LLMs</span>
            </div>
          </motion.div>

          {/* 8. Scroll Down Indicator */}
          <motion.a
            href="#experience"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--text-dim)',
              textDecoration: 'none',
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              letterSpacing: '0.12em',
            }}
          >
            <span>SCROLL DOWN FOR DETAILS</span>
            <ChevronDown size={16} style={{ color: 'var(--accent-purple)' }} />
          </motion.a>
        </div>

        {/* ---------------- RIGHT: 3D Robot Companion ---------------- */}
        <div className="hero-robot-col">
          <RobotCompanion />
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-row {
            flex-direction: column;
            text-align: center;
          }
          .hero-row > div:first-child {
            text-align: center !important;
            max-width: 100% !important;
          }
          .hero-robot-col {
            width: 100% !important;
            max-width: 360px;
            height: 420px !important;
          }
        }
        .hero-robot-col {
          flex: 0 0 auto;
          width: 440px;
          height: 520px;
          position: relative;
        }
      `}</style>
    </PageTransitionSection>
  );
}
