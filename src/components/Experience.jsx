import React from 'react';
import { Calendar, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import PageTransitionSection from './PageTransitionSection';
import CinematicDeveloperBackground from './CinematicDeveloperBackground';
import TiltCard from './TiltCard';

export default function Experience() {
  const timelinePoints = [
    'Developed a full-stack e-commerce platform for luxury interior decor for Limetta using React 19, Node.js, Express.js, and MongoDB with Framer Motion animations.',
    'Integrated Razorpay for payment processing and Delhivery Logistics for order fulfillment, waybill tracking, shipping updates, and automated email receipts via Resend.',
    'Built customer portals with custom product finishes, search/filtering, cart, wishlist, product reviews, and secure JWT-based authentication.',
    'Designed an Admin Portal for real-time inventory management, order status tracking (Packed, Shipped, Out for Delivery), and cloud media storage via ImageKit API.'
  ];

  const educationList = [
    {
      school: 'GL Bajaj Institute of Technology and Management',
      degree: 'B.Tech — Information Technology',
      score: '8.13 CGPA',
      period: '2023 – 2027'
    },
    {
      school: 'Senior Secondary School (Class XII)',
      degree: 'Central Board of Secondary Education',
      score: '88.6%',
      period: '2022 – 2023'
    },
    {
      school: 'Secondary School (Class X)',
      degree: 'Central Board of Secondary Education',
      score: '87.8%',
      period: '2020 – 2021'
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
        
        {/* Section Header with Minimal 20px Gap */}
        <div style={{ marginBottom: '24px' }}>
          <div className="section-tag">
            <span>CAREER &amp; ACADEMICS</span>
          </div>
          <h2 className="section-title" style={{ margin: 0 }}>
            Experience &amp; <em>Background</em>
          </h2>
        </div>

        {/* 70% / 30% Asymmetric Grid Layout */}
        <div className="exp-70-30-grid">
          
          {/* Left Column (70%): Work Experience Card */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <div className="section-tag" style={{ marginBottom: '8px' }}>
              <span>WORK EXPERIENCE</span>
            </div>

            <TiltCard style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div
                className="premium-glass-card"
                style={{
                  padding: '36px 38px',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-glass)',
                  position: 'relative',
                  overflow: 'hidden',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                {/* Top Accent Line */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: 'linear-gradient(90deg, #38bdf8 0%, #0284c7 60%, transparent 100%)'
                }} />

                <div>
                  {/* Header Information */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '28px' }}>
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
                        fontFamily: 'var(--font-body)',
                        fontSize: '22px',
                        fontWeight: '700',
                        color: 'var(--accent-purple)',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase'
                      }}>
                        LIMETTA
                      </div>
                    </div>

                    <div className="date-badge" style={{ padding: '6px 16px', fontSize: '13px' }}>
                      <Calendar size={14} />
                      <span>June 2026 — Present</span>
                    </div>
                  </div>

                  {/* Vertical Timeline */}
                  <div style={{ position: 'relative', paddingLeft: '28px', marginTop: '12px' }}>
                    
                    {/* Continuous Vertical Timeline Line */}
                    <div style={{
                      position: 'absolute',
                      top: '8px',
                      bottom: '12px',
                      left: '8px',
                      width: '2px',
                      background: 'linear-gradient(180deg, var(--accent-purple) 0%, rgba(56, 189, 248, 0.15) 100%)'
                    }} />

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                      {timelinePoints.map((point, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: idx * 0.08 }}
                          style={{ position: 'relative' }}
                        >
                          {/* Timeline Glowing Node Bullet */}
                          <div style={{
                            position: 'absolute',
                            top: '6px',
                            left: '-28px',
                            transform: 'translateX(-50%)',
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            background: 'var(--accent-purple)',
                            boxShadow: '0 0 10px var(--accent-purple)',
                            border: '2px solid var(--bg-surface)'
                          }} />

                          <p style={{
                            fontSize: '16px',
                            color: 'var(--text-secondary)',
                            lineHeight: '1.65',
                            margin: 0,
                            fontWeight: '400'
                          }}>
                            {point}
                          </p>
                        </motion.div>
                      ))}
                    </div>

                  </div>

                </div>

              </div>
            </TiltCard>
          </motion.div>

          {/* Right Column (30%): Academic Cards */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}
          >
            <div className="section-tag" style={{ marginBottom: '8px', position: 'relative', zIndex: 1 }}>
              <span>ACADEMIC BACKGROUND</span>
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
                <TiltCard key={idx}>
                  <div
                    className="premium-glass-card"
                    style={{
                      padding: '22px 24px',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-glass)',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  >
                    {/* Subtle Accent Edge */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      bottom: 0,
                      width: '3px',
                      background: idx === 0 ? 'var(--accent-purple)' : 'var(--border-glass)'
                    }} />

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                        <GraduationCap size={15} style={{ color: 'var(--accent-purple)' }} />
                        <span>{edu.period}</span>
                      </div>

                      <span style={{
                        fontSize: '12.5px',
                        fontWeight: '700',
                        fontFamily: 'var(--font-mono)',
                        background: 'rgba(56, 189, 248, 0.16)',
                        color: 'var(--accent-purple)',
                        padding: '3px 10px',
                        borderRadius: 'var(--radius-pill)'
                      }}>
                        {edu.score}
                      </span>
                    </div>

                    <h4 style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '20px',
                      fontWeight: '600',
                      color: 'var(--text-primary)',
                      lineHeight: '1.25',
                      marginBottom: '4px'
                    }}>
                      {edu.school}
                    </h4>

                    <div style={{ fontSize: '13.5px', color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}>
                      {edu.degree}
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
        @media (min-width: 992px) {
          .exp-70-30-grid {
            grid-template-columns: 2.2fr 1fr !important;
          }
        }
      `}</style>
    </PageTransitionSection>
  );
}
