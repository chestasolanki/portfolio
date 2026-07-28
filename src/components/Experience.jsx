import React from 'react';
import { Calendar, CheckCircle2 } from 'lucide-react';
import PageTransitionSection from './PageTransitionSection';
import { MotionTitle } from './MotionText';
import { motion } from 'framer-motion';

export default function Experience() {
  const points = [
    'Developed and maintained a production-ready web application using React.js, Node.js, Express.js, and REST APIs.',
    'Built responsive, reusable UI components and implemented modern frontend best practices.',
    'Designed and integrated backend APIs, authentication, and database operations to support core business features.',
    'Collaborated with the founder and team to translate business requirements into scalable technical solutions.',
    'Improved application performance, fixed bugs, and optimized the user experience across devices.'
  ];

  const educationList = [
    {
      school: 'GL Bajaj Institute of Technology and Management',
      degree: 'Bachelor of Technology (B.Tech) - Information Technology',
      score: '8.13 CGPA',
      period: '2022 – 2026'
    },
    {
      school: 'Senior Secondary School (Class XII)',
      degree: 'Central Board of Secondary Education (CBSE)',
      score: '88.6%',
      period: '2022'
    },
    {
      school: 'Secondary School (Class X)',
      degree: 'Central Board of Secondary Education (CBSE)',
      score: '87.8%',
      period: '2020'
    }
  ];

  return (
    <PageTransitionSection id="experience" className="section-spacing">
      <div className="container">
        
        {/* Equal-Height 2-Column Grid Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '28px',
          alignItems: 'stretch',
          '@media (min-width: 992px)': { gridTemplateColumns: '1fr 1fr' }
        }} className="exp-edu-grid">
          
          {/* Left: Work Experience Column */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ minHeight: '64px', marginBottom: '6px' }}>
              <div className="section-tag">
                <span>WORK EXPERIENCE</span>
              </div>
              <h2 className="section-title">
                <MotionTitle>Work Experience</MotionTitle>
              </h2>
            </div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
            >
              <div className="glass-card" style={{
                padding: '24px 26px',
                borderLeft: '3px solid #A855F7',
                borderRadius: 'var(--radius-lg)',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '18px' }}>
                    <div>
                      <h3 className="card-title">
                        Software Developer Intern
                      </h3>
                      <div className="company-name" style={{ marginTop: '2px' }}>
                        Limetta
                      </div>
                    </div>

                    <div className="date-badge">
                      <Calendar size={13} />
                      <span>June 2026 – Present</span>
                    </div>
                  </div>

                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {points.map((pt, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: idx * 0.06 }}
                        style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: '1.6' }}
                      >
                        <CheckCircle2 size={14} style={{ color: '#A855F7', flexShrink: 0, marginTop: '3px' }} />
                        <span>{pt}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Academic Background Column */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ minHeight: '64px', marginBottom: '6px' }}>
              <div className="section-tag">
                <span>ACADEMIC</span>
              </div>
              <h2 className="section-title">
                <MotionTitle>Academic Background</MotionTitle>
              </h2>
            </div>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '14px', justifyContent: 'space-between' }}>
              {educationList.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
                >
                  <div className="glass-card" style={{ padding: '18px 20px', borderRadius: 'var(--radius-md)', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                      <span className="date-badge" style={{ padding: '3px 10px', fontSize: '11.5px' }}>
                        {edu.period}
                      </span>
                      <span style={{
                        fontSize: '12px',
                        fontWeight: '700',
                        fontFamily: 'var(--font-body)',
                        background: 'rgba(168, 85, 247, 0.18)',
                        color: '#A855F7',
                        padding: '3px 10px',
                        borderRadius: 'var(--radius-pill)',
                        border: '1px solid var(--border-glass)'
                      }}>
                        {edu.score}
                      </span>
                    </div>

                    <h3 className="card-title" style={{ fontSize: '17px', margin: '3px 0' }}>
                      {edu.school}
                    </h3>

                    <div style={{ fontSize: '13px', color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>
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
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </PageTransitionSection>
  );
}
