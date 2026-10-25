import React from 'react';
import { Calendar, GraduationCap, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import PageTransitionSection from './PageTransitionSection';
import CinematicDeveloperBackground from './CinematicDeveloperBackground';

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
        
        {/* Section Header */}
        <div style={{ marginBottom: '40px' }}>
          <div className="section-tag">
            <span>CAREER &amp; ACADEMICS</span>
          </div>
          <h2 className="section-title" style={{ margin: 0 }}>
            Experience &amp; <em>Background</em>
          </h2>
        </div>

        {/* Open, Borderless Asymmetric Dual Layout */}
        <div className="exp-open-layout">
          
          {/* Left Column: Work Experience (Open Timeline) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <div className="section-tag" style={{ marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Briefcase size={13} style={{ color: 'var(--accent-purple)' }} />
              <span>INDUSTRY EXPERIENCE</span>
            </div>

            {/* Role, Company & Date Line */}
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(32px, 3.6vw, 44px)',
                fontWeight: '600',
                color: 'var(--text-primary)',
                lineHeight: '1.1',
                marginBottom: '8px',
                letterSpacing: '-0.01em'
              }}>
                Founding Product Developer
              </h3>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px',
                borderBottom: '1px solid rgba(56, 189, 248, 0.15)',
                paddingBottom: '16px'
              }}>
                <div style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '24px',
                  fontWeight: '700',
                  color: 'var(--accent-purple)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase'
                }}>
                  LIMETTA
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '13.5px',
                  color: 'var(--text-secondary)',
                  fontFamily: 'var(--font-mono)'
                }}>
                  <Calendar size={14} style={{ color: 'var(--accent-purple)' }} />
                  <span>June 2026 — Present</span>
                </div>
              </div>
            </div>

            {/* Open Vertical Timeline */}
            <div style={{ position: 'relative', paddingLeft: '32px', marginTop: '8px' }}>
              
              {/* Continuous Glowing Vertical Line */}
              <div style={{
                position: 'absolute',
                top: '8px',
                bottom: '12px',
                left: '10px',
                width: '2px',
                background: 'linear-gradient(180deg, var(--accent-purple) 0%, rgba(56, 189, 248, 0.25) 75%, transparent 100%)'
              }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '26px' }}>
                {timelinePoints.map((point, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    style={{ position: 'relative' }}
                  >
                    {/* Glowing Bullet Node */}
                    <div style={{
                      position: 'absolute',
                      top: '6px',
                      left: '-32px',
                      transform: 'translateX(-50%)',
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      background: 'var(--accent-purple)',
                      boxShadow: '0 0 12px var(--accent-purple)',
                      border: '2px solid var(--bg-main)'
                    }} />

                    <p style={{
                      fontSize: '16.5px',
                      color: 'var(--text-secondary)',
                      lineHeight: '1.7',
                      margin: 0,
                      fontWeight: '400'
                    }}>
                      {point}
                    </p>
                  </motion.div>
                ))}
              </div>

            </div>
          </motion.div>

          {/* Right Column: Academic Background (Open Timeline) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <div className="section-tag" style={{ marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <GraduationCap size={14} style={{ color: 'var(--accent-purple)' }} />
              <span>EDUCATION</span>
            </div>

            {/* Academic Items (Open, Clean, Boxless) */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '28px',
              marginTop: '4px'
            }}>
              {educationList.map((edu, idx) => (
                <div
                  key={idx}
                  style={{
                    position: 'relative',
                    paddingBottom: idx !== educationList.length - 1 ? '24px' : '0',
                    borderBottom: idx !== educationList.length - 1 ? '1px solid rgba(255, 255, 255, 0.08)' : 'none'
                  }}
                >
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    flexWrap: 'wrap',
                    gap: '8px',
                    marginBottom: '6px'
                  }}>
                    <span style={{
                      fontSize: '12.5px',
                      color: 'var(--accent-purple)',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: '600'
                    }}>
                      {edu.period}
                    </span>

                    <span style={{
                      fontSize: '13px',
                      fontWeight: '700',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-primary)',
                      background: 'rgba(56, 189, 248, 0.12)',
                      padding: '2px 9px',
                      borderRadius: 'var(--radius-pill)',
                      border: '1px solid rgba(56, 189, 248, 0.25)'
                    }}>
                      {edu.score}
                    </span>
                  </div>

                  <h4 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '22px',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    lineHeight: '1.25',
                    marginBottom: '6px'
                  }}>
                    {edu.school}
                  </h4>

                  <div style={{
                    fontSize: '14px',
                    color: 'var(--text-secondary)',
                    fontFamily: 'var(--font-body)',
                    lineHeight: '1.5'
                  }}>
                    {edu.degree}
                  </div>
                </div>
              ))}
            </div>

          </motion.div>

        </div>

      </div>

      <style>{`
        .exp-open-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
          align-items: start;
        }
        @media (min-width: 992px) {
          .exp-open-layout {
            grid-template-columns: 1.8fr 1.1fr !important;
            gap: 64px !important;
          }
        }
      `}</style>
    </PageTransitionSection>
  );
}
