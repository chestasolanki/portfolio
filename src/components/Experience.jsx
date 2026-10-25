import React from 'react';
import { Calendar, GraduationCap, GitCommit, Award, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import PageTransitionSection from './PageTransitionSection';
import CinematicDeveloperBackground from './CinematicDeveloperBackground';
import TiltCard from './TiltCard';
import BorderBeam from './experience/BorderBeam';
import FloatingSatellites from './experience/FloatingSatellites';
import LiveSystemPipeline from './experience/LiveSystemPipeline';
import TerminalInspector from './experience/TerminalInspector';
import GitBranchTree from './experience/GitBranchTree';

export default function Experience() {
  const educationList = [
    {
      school: 'GL Bajaj Institute of Technology and Management',
      degree: 'B.Tech — Information Technology',
      score: '8.13 CGPA',
      period: '2023 – 2027',
      commitHash: 'commit 4d92a11',
      badge: 'Current Degree',
      highlights: 'Data Structures, Web Engineering, DBMS, AI Systems'
    },
    {
      school: 'Senior Secondary School (Class XII)',
      degree: 'Central Board of Secondary Education',
      score: '88.6%',
      period: '2022 – 2023',
      commitHash: 'commit 1e7a902',
      badge: 'CBSE XII Board',
      highlights: 'Physics, Chemistry, Mathematics & Computer Science'
    },
    {
      school: 'Secondary School (Class X)',
      degree: 'Central Board of Secondary Education',
      score: '87.8%',
      period: '2020 – 2021',
      commitHash: 'commit a29f430',
      badge: 'CBSE X Board',
      highlights: 'Foundational Sciences & Mathematics Distinction'
    }
  ];

  return (
    <PageTransitionSection
      id="experience"
      className="section-spacing"
      style={{
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Reusable Cinematic Developer Background (Hidden in Light Mode) */}
      <CinematicDeveloperBackground />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div style={{ marginBottom: '22px' }}>
          <div className="section-tag">
            <span>CAREER &amp; ACADEMICS</span>
          </div>
          <h2 className="section-title" style={{ margin: 0 }}>
            Experience &amp; <em>Background</em>
          </h2>
        </div>

        {/* Concept 3: The "Git Commit / Branching" Dual Timeline Visual */}
        <GitBranchTree />

        {/* 70% / 30% Asymmetric Grid Layout */}
        <div className="exp-70-30-grid">
          
          {/* Left Column (70%): Work Experience Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <div className="section-tag" style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <GitCommit size={13} style={{ color: 'var(--accent-purple)' }} />
              <span>INDUSTRY WORK EXPERIENCE // BRANCH: FEAT/EXPERIENCE</span>
            </div>

            {/* Concept 2: 3D Perspective Tilt Card */}
            <TiltCard intensity={8} style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div
                className="premium-glass-card"
                style={{
                  padding: 'clamp(24px, 3.5vw, 36px)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid rgba(56, 189, 248, 0.35)',
                  position: 'relative',
                  overflow: 'hidden',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'var(--bg-card)',
                  boxShadow: '0 25px 60px rgba(0, 0, 0, 0.85), inset 0 1px 1px rgba(255, 255, 255, 0.25)',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                {/* Concept 2: Concentrated Cyan Laser Border Beam */}
                <BorderBeam duration={7} borderWidth={2} colorFrom="#38bdf8" colorHighlight="#ffffff" />

                {/* Subtle Ambient Background Flare */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-60px',
                    right: '-60px',
                    width: '320px',
                    height: '320px',
                    background: 'radial-gradient(circle, rgba(56, 189, 248, 0.18) 0%, transparent 70%)',
                    pointerEvents: 'none',
                    zIndex: 0
                  }}
                />

                <div style={{ position: 'relative', zIndex: 1 }}>
                  
                  {/* Header Information: Role & Company */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    gap: '16px',
                    marginBottom: '16px'
                  }}>
                    <div>
                      <h3 style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: 'clamp(28px, 3.2vw, 38px)',
                        fontWeight: '600',
                        color: 'var(--text-primary)',
                        lineHeight: '1.1',
                        marginBottom: '6px'
                      }}>
                        Founding Product Developer
                      </h3>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        flexWrap: 'wrap'
                      }}>
                        <div style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '22px',
                          fontWeight: '700',
                          color: 'var(--accent-purple)',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase'
                        }}>
                          LIMETTA
                        </div>
                        <span style={{
                          fontSize: '11px',
                          fontFamily: 'var(--font-mono)',
                          padding: '3px 10px',
                          borderRadius: 'var(--radius-pill)',
                          background: 'rgba(56, 189, 248, 0.14)',
                          color: '#7dd3fc',
                          border: '1px solid rgba(56, 189, 248, 0.3)'
                        }}>
                          commit c81b3f9
                        </span>
                      </div>
                    </div>

                    <div className="date-badge" style={{ padding: '6px 16px', fontSize: '13px' }}>
                      <Calendar size={14} />
                      <span>June 2026 — Present</span>
                    </div>
                  </div>

                  {/* Concept 2: Floating Satellites (React, Node, Mongo, Razorpay, Delhivery, ImageKit) */}
                  <FloatingSatellites />

                  {/* Concept 1: The "Live System Pipeline" (Interactive Micro-Architecture Diagram) */}
                  <LiveSystemPipeline />

                  {/* Concept 4: Hover-Triggered "Terminal Inspector" (Hacker Decode + Live Admin Mockup) */}
                  <TerminalInspector />

                </div>

              </div>
            </TiltCard>
          </motion.div>

          {/* Right Column (30%): Academic Cards with Commit Milestone Aesthetic */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}
          >
            <div className="section-tag" style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px', position: 'relative', zIndex: 1 }}>
              <BookOpen size={13} style={{ color: '#7dd3fc' }} />
              <span>ACADEMIC MILESTONES // BRANCH: FEAT/ACADEMICS</span>
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              flex: 1,
              justifyContent: 'space-between',
              position: 'relative',
              zIndex: 1
            }}>
              {educationList.map((edu, idx) => (
                <TiltCard key={idx} intensity={6}>
                  <div
                    className="premium-glass-card"
                    style={{
                      padding: '22px 24px',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid rgba(56, 189, 248, 0.22)',
                      position: 'relative',
                      overflow: 'hidden',
                      background: 'var(--bg-card)',
                      transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6)'
                    }}
                  >
                    {/* Glowing Left Accent Edge */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      bottom: 0,
                      width: '3.5px',
                      background: idx === 0 ? 'linear-gradient(180deg, #38bdf8 0%, #0284c7 100%)' : 'rgba(56, 189, 248, 0.3)'
                    }} />

                    {/* Commit & Date Bar */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', flexWrap: 'wrap', gap: '6px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                        <GitCommit size={13} style={{ color: 'var(--accent-purple)' }} />
                        <span>{edu.commitHash}</span>
                      </div>

                      <span style={{
                        fontSize: '12px',
                        fontWeight: '700',
                        fontFamily: 'var(--font-mono)',
                        background: 'rgba(56, 189, 248, 0.16)',
                        color: 'var(--accent-purple)',
                        padding: '3px 10px',
                        borderRadius: 'var(--radius-pill)',
                        border: '1px solid rgba(56, 189, 248, 0.3)'
                      }}>
                        {edu.score}
                      </span>
                    </div>

                    <h4 style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '19px',
                      fontWeight: '600',
                      color: 'var(--text-primary)',
                      lineHeight: '1.25',
                      marginBottom: '4px'
                    }}>
                      {edu.school}
                    </h4>

                    <div style={{ fontSize: '13px', color: '#38bdf8', fontFamily: 'var(--font-body)', fontWeight: '500', marginBottom: '6px' }}>
                      {edu.degree}
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '8px', marginTop: '6px' }}>
                      <span>{edu.period}</span>
                      <span style={{ color: 'var(--text-muted)' }}>{edu.badge}</span>
                    </div>
                  </div>
                </TiltCard>
              ))}
            </div>

          </motion.div>

        </div>

      </div>

      <style>{`
        .exp-70-30-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
          align-items: stretch;
        }
        .premium-glass-card {
          background: var(--bg-card);
        }
        @media (min-width: 1024px) {
          .exp-70-30-grid {
            grid-template-columns: 2.2fr 1fr !important;
          }
        }
      `}</style>
    </PageTransitionSection>
  );
}
