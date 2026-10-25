import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, Sparkles, CheckCircle2, ArrowUpRight } from 'lucide-react';
import PageHeader from './PageHeader';

export default function Experience({ onNavigate }) {
  const limettaHighlights = [
    'Engineered the production full-stack e-commerce web platform for Limetta (luxury interior decor) leveraging React 19, Node.js, Express.js, and MongoDB with fluid Framer Motion animations.',
    'Architected payment and fulfillment pipelines by integrating Razorpay for checkout transactions and Delhivery Logistics for automated waybill generation and real-time tracking.',
    'Built automated customer notification workflows via Resend API for transactional receipts and shipping status dispatches.',
    'Constructed comprehensive customer experience: product customization filters, cart, wishlist, customer reviews, and secure JWT-based authentication.',
    'Designed and implemented an Admin Portal featuring live order lifecycle management (Packed, Shipped, Out for Delivery, Delivered) and cloud asset storage with ImageKit API.'
  ];

  const educationList = [
    {
      institution: 'GL Bajaj Institute of Technology and Management',
      degree: 'B.Tech — Information Technology',
      score: '8.13 CGPA',
      period: '2023 – 2027',
      status: 'Current'
    },
    {
      institution: 'Senior Secondary School (Class XII)',
      degree: 'Central Board of Secondary Education (CBSE)',
      score: '88.6%',
      period: '2022 – 2023',
      status: 'Completed'
    },
    {
      institution: 'Secondary School (Class X)',
      degree: 'Central Board of Secondary Education (CBSE)',
      score: '87.8%',
      period: '2020 – 2021',
      status: 'Completed'
    }
  ];

  return (
    <section id="experience" className="purrweb-exact-slide-stage">
      {/* Top Navigation Bar: Non-fixed, unique to Experience Page */}
      <PageHeader activePage="experience" onNavigate={onNavigate} />

      <div className="container" style={{ maxWidth: '1320px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        {/* Section Header */}
        <div className="purrweb-section-header">
          <div className="purrweb-badge">
            <Sparkles size={12} style={{ color: 'var(--accent-cyan)' }} />
            <span className="purrweb-badge-text">CAREER JOURNEY</span>
          </div>
          <h2 className="purrweb-section-title">
            Experience &amp; <span className="purrweb-serif-accent">Background</span>
          </h2>
          <p className="purrweb-section-subtitle">
            Industry development experience and strong academic foundations in Information Technology.
          </p>
        </div>

        {/* Open Editorial Asymmetric Dual Layout */}
        <div className="purrweb-exp-grid">
          
          {/* Left Column: Industry Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="exp-column"
          >
            <div className="exp-column-header">
              <Briefcase size={16} style={{ color: 'var(--accent-violet)' }} />
              <span>INDUSTRY EXPERIENCE</span>
            </div>

            <div className="exp-timeline-block">
              <div className="exp-role-heading">
                <h3 className="role-title">Founding Product Developer</h3>
                <div className="role-meta">
                  <span className="role-company">Limetta</span>
                  <span className="meta-dot">•</span>
                  <span className="role-type">Full-Stack Engineering</span>
                  <span className="meta-dot">•</span>
                  <span className="role-date">Recent</span>
                </div>
              </div>

              <p className="exp-intro-text">
                Spearheaded the technical architecture and end-to-end development of Limetta’s flagship
                e-commerce platform, taking it from zero to production deployment.
              </p>

              <ul className="exp-bullets">
                {limettaHighlights.map((point, idx) => (
                  <li key={idx} className="bullet-row">
                    <span className="bullet-icon">▹</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="exp-tech-stack">
                <span className="stack-tag">React 19</span>
                <span className="stack-tag">Node.js</span>
                <span className="stack-tag">Express.js</span>
                <span className="stack-tag">MongoDB</span>
                <span className="stack-tag">Razorpay</span>
                <span className="stack-tag">Delhivery API</span>
                <span className="stack-tag">Resend</span>
                <span className="stack-tag">ImageKit</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Academic Milestones */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="edu-column"
          >
            <div className="exp-column-header">
              <GraduationCap size={16} style={{ color: 'var(--accent-coral)' }} />
              <span>ACADEMIC BACKGROUND</span>
            </div>

            <div className="edu-list">
              {educationList.map((edu, idx) => (
                <div key={idx} className="edu-card-item">
                  <div className="edu-item-top">
                    <span className="edu-period">
                      <Calendar size={12} />
                      <span>{edu.period}</span>
                    </span>
                    <span className="edu-score-badge">{edu.score}</span>
                  </div>

                  <h4 className="edu-institution">{edu.institution}</h4>
                  <div className="edu-degree">{edu.degree}</div>
                </div>
              ))}
            </div>

            {/* Quick Summary Pill */}
            <div className="edu-summary-pill">
              <CheckCircle2 size={15} style={{ color: '#4ade80' }} />
              <div>
                <strong>Strong Foundation in Computer Science:</strong>
                <span> Algorithms, System Design, Database Normalization &amp; Distributed Systems.</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
