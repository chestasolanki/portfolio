import React from 'react';
import { Calendar, CheckCircle2 } from 'lucide-react';
import PageTransitionSection from './PageTransitionSection';
import { MotionTitle } from './MotionText';
import { motion } from 'framer-motion';

export default function Experience() {
  const points = [
    'Developed a full-stack MERN e-commerce platform for premium interior decor products.',
    'Built customer and admin portals with JWT-based authentication and role-based access control.',
    'Developed RESTful APIs for products, categories, cart, wishlist, orders, and user management using Node.js, Express.js, and MongoDB.',
    'Implemented an admin dashboard for product, inventory and order management with dynamic order status tracking.',
    'Integrated MongoDB Atlas with the React frontend using secure REST APIs.'
  ];

  const educationList = [
    {
      school: 'GL Bajaj Institute of Technology and Management',
      degree: 'B.Tech Information Technology',
      score: '8.13 CGPA',
      period: '2023 – 2027'
    },
    {
      school: 'Senior Secondary School - XIIth',
      degree: 'Central Board of Secondary Education',
      score: '88.6%',
      period: '2022 – 2023'
    },
    {
      school: 'Secondary School - Xth',
      degree: 'Central Board of Secondary Education',
      score: '87.8%',
      period: '2020 – 2021'
    }
  ];

  return (
    <PageTransitionSection id="experience" className="section-spacing">
      <div className="container">
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '60px',
          '@media (min-width: 992px)': { gridTemplateColumns: '1.2fr 0.8fr' }
        }} className="exp-edu-grid">
          
          {/* Left: Experience */}
          <div>
            <div className="section-tag">
              <span>EXPERIENCE</span>
            </div>
            <h2 className="section-title">
              <MotionTitle>Work Experience</MotionTitle>
            </h2>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="glass-card" style={{
                padding: '32px',
                borderLeft: '4px solid var(--accent-cyan)',
                borderRadius: 'var(--radius-lg)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '20px' }}>
                  <div>
                    <h3 className="font-serif" style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-primary)', margin: 0 }}>
                      Limetta
                    </h3>
                    <div style={{ fontSize: '1.05rem', color: 'var(--accent-cyan)', fontWeight: '600', marginTop: '2px' }}>
                      Full-Stack Developer
                    </div>
                  </div>

                  <div style={{
                    background: 'rgba(6, 182, 212, 0.15)',
                    border: '1px solid var(--border-glass)',
                    padding: '6px 14px',
                    borderRadius: 'var(--radius-pill)',
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--accent-cyan)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    <Calendar size={13} />
                    <span>Jul 2026 – Present</span>
                  </div>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {points.map((pt, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}
                    >
                      <CheckCircle2 size={16} style={{ color: 'var(--accent-cyan)', flexShrink: 0, marginTop: '4px' }} />
                      <span>{pt}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Right: Education */}
          <div>
            <div className="section-tag">
              <span>EDUCATION</span>
            </div>
            <h2 className="section-title">
              <MotionTitle>Academic Background</MotionTitle>
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {educationList.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.75, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="glass-card" style={{ padding: '24px', borderRadius: 'var(--radius-md)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--accent-cyan)' }}>
                        {edu.period}
                      </span>
                      <span style={{
                        fontSize: '0.8rem',
                        fontWeight: '700',
                        background: 'rgba(16, 185, 129, 0.15)',
                        color: '#10b981',
                        padding: '3px 10px',
                        borderRadius: 'var(--radius-pill)',
                        border: '1px solid rgba(16, 185, 129, 0.3)'
                      }}>
                        {edu.score}
                      </span>
                    </div>

                    <h3 className="font-serif" style={{ fontSize: '1.15rem', fontWeight: '700', color: 'var(--text-primary)', margin: '0 0 4px 0' }}>
                      {edu.school}
                    </h3>

                    <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                      {edu.degree}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 992px) {
          .exp-edu-grid {
            grid-template-columns: 1.2fr 0.85fr !important;
          }
        }
      `}</style>
    </PageTransitionSection>
  );
}
