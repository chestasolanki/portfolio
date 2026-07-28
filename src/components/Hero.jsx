import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import PageTransitionSection from './PageTransitionSection';

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
        padding: '140px 0 80px 0',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}
    >
      {/* 3 PRECISE GRADIENT BLOBS */}
      <div className="blob-top-left" />
      <div className="blob-bottom-right" />

      {/* FULLY SPREAD VOLUMETRIC ILLUMINATED MIST CLOUD */}
      <div
        className="volumetric-mist-cloud-behind-name"
        style={{
          position: 'absolute',
          top: '32%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '150vw',
          height: '750px',
          pointerEvents: 'none',
          zIndex: 0,
          opacity: 0.65,
          filter: 'blur(180px)',
          background: 'radial-gradient(ellipse 100% 70% at 50% 45%, rgba(139, 92, 246, 0.4) 0%, rgba(56, 189, 248, 0.45) 30%, rgba(182, 168, 255, 0.35) 55%, rgba(2, 132, 199, 0.2) 80%, transparent 100%)',
          animation: 'mistSpreadFlow 26s ease-in-out infinite alternate'
        }}
      />

      <div
        className="volumetric-mist-wave-secondary"
        style={{
          position: 'absolute',
          top: '36%',
          left: '48%',
          transform: 'translate(-50%, -50%)',
          width: '130vw',
          height: '650px',
          pointerEvents: 'none',
          zIndex: 0,
          opacity: 0.5,
          filter: 'blur(200px)',
          background: 'radial-gradient(ellipse 90% 60% at 48% 50%, rgba(56, 189, 248, 0.45) 0%, rgba(139, 92, 246, 0.35) 45%, rgba(182, 168, 255, 0.2) 80%, transparent 100%)',
          animation: 'mistWaveDrift 28s ease-in-out infinite alternate'
        }}
      />

      {/* SUBTLE FLOATING HERO CONTAINER */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1100px',
          margin: '0 auto',
          animation: 'heroFloatSubtle 9s ease-in-out infinite alternate'
        }}
      >
        
        {/* 1. Badge: AVAILABLE FOR OPPORTUNITIES */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '28px' }}
        >
          <div className="glass-pill" style={{ padding: '7px 20px', fontSize: '13.5px' }}>
            <span className="pulse-dot" />
            <span>AVAILABLE FOR OPPORTUNITIES</span>
          </div>
        </motion.div>

        {/* 2. GIANT HERO NAME (FOCAL POINT): CHESTA / SOLANKI (Slightly Reduced Font Weight 500) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: '24px', position: 'relative' }}
        >
          <h1 className="giant-hero-title">
            <span style={{ display: 'block', color: 'var(--text-primary)', fontWeight: '500' }}>CHESTA</span>
            <span className="hero-name-shine" style={{ display: 'block', color: 'var(--accent-purple)', fontWeight: '500', textShadow: '0 0 35px rgba(56, 189, 248, 0.4)' }}>
              SOLANKI
            </span>
          </h1>
        </motion.div>

        {/* 3. Role Tag: FULL-STACK ENGINEER */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(15px, 2.2vw, 22px)',
            color: 'var(--accent-purple)',
            letterSpacing: '0.25em',
            marginBottom: '24px',
            textTransform: 'uppercase',
            fontWeight: '600'
          }}
        >
          &gt;_ FULL-STACK ENGINEER
        </motion.div>

        {/* 4. Terminal Typewriter: > Building Products_ */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '17px',
            color: '#4ade80',
            fontWeight: '700',
            marginBottom: '28px',
            display: 'inline-block',
            background: 'rgba(74, 222, 128, 0.08)',
            padding: '10px 24px',
            borderRadius: 'var(--radius-pill)',
            border: '1px solid rgba(74, 222, 128, 0.25)'
          }}
        >
          &gt; {typedText}
        </motion.div>

        {/* 5. Description Paragraph (MAX 500-550px WIDE) */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          style={{
            fontSize: '16px',
            color: 'var(--text-secondary)',
            maxWidth: '520px',
            margin: '0 auto 34px auto',
            lineHeight: '1.75',
            fontWeight: '400'
          }}
        >
          Building scalable web applications, AI-powered experiences, and modern digital products with a focus on performance, design, and user experience.
        </motion.p>

        {/* 6. Refined Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px', marginBottom: '36px' }}
        >
          <a
            href="mailto:chestasolanki664@gmail.com"
            className="btn-primary"
            style={{ padding: '10px 24px', fontSize: '14px' }}
          >
            <span>Get in Touch</span>
            <ArrowUpRight size={15} />
          </a>

          <a
            href="#projects"
            className="btn-secondary"
            style={{ padding: '10px 22px', fontSize: '14px' }}
          >
            <span>View Projects</span>
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
            justifyContent: 'center',
            gap: '16px',
            marginBottom: '36px'
          }}
        >
          <div style={{ padding: '10px 20px', borderRadius: 'var(--radius-pill)', background: 'var(--bg-card)', border: '1px solid var(--border-glass)' }}>
            <span style={{ fontSize: '15px', fontWeight: '800', color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>250+ </span>
            <span style={{ fontSize: '13px', color: 'var(--accent-purple)', fontFamily: 'var(--font-mono)' }}>LeetCode</span>
          </div>

          <div style={{ padding: '10px 20px', borderRadius: 'var(--radius-pill)', background: 'var(--bg-card)', border: '1px solid var(--border-glass)' }}>
            <span style={{ fontSize: '15px', fontWeight: '800', color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>8.13 </span>
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>CGPA</span>
          </div>

          <div style={{ padding: '10px 20px', borderRadius: 'var(--radius-pill)', background: 'var(--bg-card)', border: '1px solid var(--border-glass)' }}>
            <span style={{ fontSize: '15px', fontWeight: '800', color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>Full Stack </span>
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>React/Node</span>
          </div>

          <div style={{ padding: '10px 20px', borderRadius: 'var(--radius-pill)', background: 'var(--bg-card)', border: '1px solid var(--border-glass)' }}>
            <span style={{ fontSize: '15px', fontWeight: '800', color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>AI / ML </span>
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>LLMs</span>
          </div>
        </motion.div>

        {/* 8. Scroll Down Indicator */}
        <motion.a
          href="#experience"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '6px',
            color: 'var(--text-muted)',
            textDecoration: 'none',
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            letterSpacing: '0.12em',
            marginTop: '8px'
          }}
        >
          <span>SCROLL DOWN FOR DETAILS</span>
          <ChevronDown size={18} style={{ color: 'var(--accent-purple)' }} />
        </motion.a>

      </div>

      <style>{`
        @keyframes heroFloatSubtle {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-10px); }
        }
        @keyframes mistSpreadFlow {
          0% { transform: translate(-55%, -52%) scale(0.95); }
          100% { transform: translate(-45%, -48%) scale(1.08); }
        }
        @keyframes mistWaveDrift {
          0% { transform: translate(-45%, -48%) scale(1.04); }
          100% { transform: translate(-55%, -52%) scale(0.96); }
        }
      `}</style>
    </PageTransitionSection>
  );
}
