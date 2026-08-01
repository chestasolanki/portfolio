import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Network, LayoutGrid } from 'lucide-react';
import PageTransitionSection from './PageTransitionSection';
import CinematicDeveloperBackground from './CinematicDeveloperBackground';
import TiltCard from './TiltCard';
import SkillsKnowledgeGraph from './SkillsKnowledgeGraph';

export default function Skills() {
  const [viewMode, setViewMode] = useState('graph'); // 'graph' | 'cards'

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['C++', 'JavaScript', 'Python']
    },
    {
      title: 'Frontend Development',
      skills: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive UI']
    },
    {
      title: 'Backend Development',
      skills: ['Node.js', 'Express.js', 'RESTful APIs', 'SSE (Server-Sent Events)', 'Auth & JWT']
    },
    {
      title: 'Databases & Cloud',
      skills: ['MySQL', 'MongoDB', 'AWS', 'Database Design', 'Query Optimization']
    },
    {
      title: 'AI & ML Integrations',
      skills: ['LLMs', 'Prompt Engineering', 'RAG Concepts', 'Supervised Learning']
    },
    {
      title: 'Developer Tools & OS',
      skills: ['Git', 'GitHub', 'Postman', 'Linux']
    }
  ];

  const certifications = [
    { title: 'AWS – Machine Learning Foundations', issuer: 'Amazon Web Services' },
    { title: 'AWS – Cloud Foundations', issuer: 'Amazon Web Services' },
    { title: 'Palo Alto – Cloud Security Automation', issuer: 'Palo Alto Networks' },
    { title: 'Palo Alto – Operations & Configurations', issuer: 'Palo Alto Networks' },
    { title: 'Red Hat – System Administration', issuer: 'Red Hat' },
    
  ];

  return (
    <PageTransitionSection
      id="skills"
      className="section-spacing"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Reusable Cinematic Developer Background */}
      <CinematicDeveloperBackground />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header with View Toggle */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '20px',
            marginBottom: '32px'
          }}
        >
          <div>
            <div className="section-tag">
              <span>TECHNICAL PROFICIENCY</span>
            </div>
            <h2 className="section-title" style={{ margin: 0 }}>
              Skills &amp; <em>Knowledge Graph</em>
            </h2>
          </div>

          {/* Interactive View Mode Selector */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px',
              borderRadius: 'var(--radius-pill)',
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-glass)',
              boxShadow: 'var(--glow-card)'
            }}
          >
            <button
              onClick={() => setViewMode('graph')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 18px',
                borderRadius: 'var(--radius-pill)',
                border: 'none',
                background: viewMode === 'graph' ? 'var(--accent-purple)' : 'transparent',
                color: viewMode === 'graph' ? '#ffffff' : 'var(--text-secondary)',
                fontWeight: '600',
                fontSize: '13.5px',
                cursor: 'pointer',
                transition: 'all 0.25s ease'
              }}
            >
              <Network size={16} />
              <span>Knowledge Graph</span>
            </button>

            <button
              onClick={() => setViewMode('cards')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 18px',
                borderRadius: 'var(--radius-pill)',
                border: 'none',
                background: viewMode === 'cards' ? 'var(--accent-purple)' : 'transparent',
                color: viewMode === 'cards' ? '#ffffff' : 'var(--text-secondary)',
                fontWeight: '600',
                fontSize: '13.5px',
                cursor: 'pointer',
                transition: 'all 0.25s ease'
              }}
            >
              <LayoutGrid size={16} />
              <span>Category Cards</span>
            </button>
          </div>
        </div>

        {/* 1. KNOWLEDGE GRAPH VIEW */}
        {viewMode === 'graph' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: '56px' }}
          >
            <SkillsKnowledgeGraph />
          </motion.div>
        )}

        {/* 2. CATEGORY CARDS VIEW */}
        {viewMode === 'cards' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
              marginBottom: '56px'
            }}
          >
            {skillCategories.map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
              >
                <TiltCard style={{ height: '100%' }}>
                  <div
                    className="glass-card"
                    style={{
                      padding: '28px',
                      borderRadius: 'var(--radius-md)',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justify: 'space-between',
                      border: '1px solid var(--border-glass)',
                      transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  >
                    <div>
                      <h3 style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '20px',
                        fontWeight: '600',
                        color: 'var(--text-primary)',
                        marginBottom: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}>
                        <span style={{ color: 'var(--accent-purple)' }}>&gt;</span>
                        <span>{cat.title}</span>
                      </h3>

                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        {cat.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            style={{
                              fontSize: '13px',
                              fontFamily: 'var(--font-mono)',
                              color: 'var(--text-primary)',
                              background: 'rgba(56, 189, 248, 0.1)',
                              border: '1px solid var(--border-glass)',
                              padding: '5px 12px',
                              borderRadius: 'var(--radius-pill)'
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Certifications Subsection */}
        <div>
          <div className="section-tag" style={{ marginBottom: '16px' }}>
            <span>VERIFIED CREDENTIALS</span>
          </div>

          <h3 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.8rem',
            color: 'var(--text-primary)',
            marginBottom: '24px'
          }}>
            Certifications &amp; Achievements
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '16px'
          }}>
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
              >
                <TiltCard>
                  <div
                    className="glass-card"
                    style={{
                      padding: '20px 22px',
                      borderRadius: 'var(--radius-sm)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      border: '1px solid var(--border-glass)'
                    }}
                  >
                    <div style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      background: 'rgba(56, 189, 248, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-purple)',
                      flexShrink: 0
                    }}>
                      <Award size={20} />
                    </div>

                    <div>
                      <div style={{ fontWeight: '600', fontSize: '14.5px', color: 'var(--text-primary)', lineHeight: '1.3' }}>
                        {cert.title}
                      </div>
                      <div style={{ fontSize: '12.5px', color: 'var(--text-secondary)', marginTop: '2px' }}>
                        {cert.issuer}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </PageTransitionSection>
  );
}
