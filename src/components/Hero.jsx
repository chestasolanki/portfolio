import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ParticleConstellation from './ParticleConstellation';
import PageTransitionSection from './PageTransitionSection';
import TechRadarMatrix from './TechRadarMatrix';

export default function Hero() {
  return (
    <PageTransitionSection id="hero" style={{ padding: '60px 0 80px 0' }}>
      <ParticleConstellation />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Two-Column Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '40px',
          alignItems: 'center',
          '@media (min-width: 992px)': { gridTemplateColumns: '1.15fr 0.85fr' }
        }} className="hero-cyber-grid">
          
          {/* Left Column: Hero Copy */}
          <div>
            {/* System Access Tagline */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center', marginBottom: '18px' }}
            >
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                letterSpacing: '0.12em',
                color: 'var(--accent-cyan)',
                textTransform: 'uppercase',
                fontWeight: '600'
              }}>
                SYSTEM ACCESS GRANTED // USER: CHESTA SOLANKI
              </span>
            </motion.div>

            {/* Compact Headline ">_ Hey, I am Chesta Solanki|" */}
            <div style={{ marginBottom: '16px' }}>
              <h1 style={{
                fontSize: 'clamp(2rem, 4.2vw, 3.2rem)',
                fontWeight: '800',
                lineHeight: '1.15',
                letterSpacing: '-0.02em',
                color: 'var(--text-primary)',
                margin: 0
              }}>
                &gt;_ Hey, I am{' '}
                <span style={{ color: '#10b981', textShadow: '0 0 20px rgba(16, 185, 129, 0.4)' }}>
                  Chesta Solanki
                </span>
                <span style={{ color: '#10b981', animation: 'pulse 1.2s infinite' }}>|</span>
              </h1>
            </div>

            {/* Subtitle Paragraph */}
            <p style={{
              fontSize: '0.96rem',
              color: 'var(--text-secondary)',
              maxWidth: '540px',
              marginBottom: '26px',
              lineHeight: '1.65',
              fontWeight: '400'
            }}>
              Curious mind and full-stack developer based in Noida. Exploring digital frontiers, building scalable web platforms, RESTful APIs, and AI integrations.
            </p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '32px' }}
            >
              <a
                href="mailto:chestasolanki664@gmail.com"
                className="btn-primary"
                style={{
                  padding: '10px 22px',
                  fontSize: '0.85rem',
                  background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
                  boxShadow: '0 4px 16px rgba(16, 185, 129, 0.35)'
                }}
              >
                <span>CONTACT ME</span>
                <ArrowUpRight size={15} />
              </a>

              <a
                href="#projects"
                className="btn-secondary"
                style={{ padding: '10px 20px', fontSize: '0.85rem' }}
              >
                <span>View Projects</span>
              </a>
            </motion.div>

            {/* Focus & Tech Stack Quick Pills */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}
            >
              <div className="glass-card" style={{ padding: '10px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-glass)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.66rem', color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '2px' }}>
                  FOCUS
                </div>
                <div style={{ fontSize: '0.82rem', fontWeight: '700', color: 'var(--text-primary)' }}>
                  Full-Stack MERN & REST APIs
                </div>
              </div>

              <div className="glass-card" style={{ padding: '10px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-glass)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.66rem', color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '2px' }}>
                  TECH STACK
                </div>
                <div style={{ fontSize: '0.82rem', fontWeight: '700', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                  C++ • JS • Python • React • Node
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Tech Radar HUD Widget */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <TechRadarMatrix />
          </motion.div>

        </div>

        {/* Resume Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
            gap: '14px',
            paddingTop: '32px',
            marginTop: '40px',
            borderTop: '1px solid var(--border-glass)'
          }}
        >
          <div className="glass-card" style={{ padding: '16px', borderRadius: 'var(--radius-sm)' }}>
            <div style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
              8.13 <span style={{ fontSize: '0.8rem', color: '#10b981' }}>CGPA</span>
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '2px' }}>B.Tech IT (GL Bajaj)</div>
          </div>

          <div className="glass-card" style={{ padding: '16px', borderRadius: 'var(--radius-sm)' }}>
            <div style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
              250+
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '2px' }}>LeetCode Solved</div>
          </div>

          <div className="glass-card" style={{ padding: '16px', borderRadius: 'var(--radius-sm)' }}>
            <div style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
              Full Stack
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '2px' }}>React, Node & Express</div>
          </div>

          <div className="glass-card" style={{ padding: '16px', borderRadius: 'var(--radius-sm)' }}>
            <div style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
              AI / ML
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '2px' }}>LLMs, RAG & SSE</div>
          </div>
        </motion.div>

      </div>

      <style>{`
        @media (min-width: 992px) {
          .hero-cyber-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </PageTransitionSection>
  );
}
