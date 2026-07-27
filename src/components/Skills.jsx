import React, { useState } from 'react';
import { Award, Star, Code2, Terminal, Cpu, Database, Shield, Wrench, Sparkles } from 'lucide-react';
import PageTransitionSection from './PageTransitionSection';
import { MotionTitle } from './MotionText';
import { motion } from 'framer-motion';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const skillCategories = [
    {
      id: 'languages',
      name: 'Programming Languages',
      icon: <Code2 size={20} style={{ color: 'var(--accent-cyan)' }} />,
      skills: ['C++', 'JavaScript', 'Python']
    },
    {
      id: 'core',
      name: 'Core Computer Science',
      icon: <Shield size={20} style={{ color: '#10b981' }} />,
      skills: ['Data Structures & Algorithms', 'DBMS', 'Operating Systems', 'OOP']
    },
    {
      id: 'frontend',
      name: 'Frontend Development',
      icon: <Terminal size={20} style={{ color: 'var(--accent-cyan)' }} />,
      skills: ['React.js', 'Tailwind CSS', 'HTML5', 'CSS3']
    },
    {
      id: 'fullstack',
      name: 'Full Stack & APIs',
      icon: <Wrench size={20} style={{ color: 'var(--accent-purple)' }} />,
      skills: ['Node.js', 'Express.js', 'REST APIs']
    },
    {
      id: 'aiml',
      name: 'AI / Machine Learning',
      icon: <Cpu size={20} style={{ color: 'var(--accent-rose)' }} />,
      skills: ['Scikit-learn', 'PyTorch', 'NumPy', 'Pandas', 'LLMs', 'LangChain', 'RAG', 'Prompt Engineering']
    },
    {
      id: 'databases',
      name: 'Databases & Vector DBs',
      icon: <Database size={20} style={{ color: '#10b981' }} />,
      skills: ['MySQL', 'MongoDB', 'Pinecone', 'ChromaDB']
    },
    {
      id: 'tools',
      name: 'Developer Tools',
      icon: <Sparkles size={20} style={{ color: 'var(--accent-cyan)' }} />,
      skills: ['Git', 'GitHub', 'Postman', 'Linux']
    }
  ];

  const certifications = [
    {
      title: 'AWS - Machine Learning Foundations',
      issuer: 'Amazon Web Services',
      badge: 'AWS Certified'
    },
    {
      title: 'Palo Alto - Cloud Security Automation, Network Security, Operations & Configurations',
      issuer: 'Palo Alto Networks',
      badge: 'Security Certified'
    },
    {
      title: 'Red Hat - Red Hat System Administration',
      issuer: 'Red Hat Linux',
      badge: 'System Admin'
    }
  ];

  const additionalHighlights = [
    'Earned the LeetCode 100 Days Coding Badge by maintaining consistent coding practice.',
    'Solved 250+ LeetCode questions.',
    'Participated in multiple hackathons, including SIH, and served as Management Lead of the department\'s club.'
  ];

  const filteredCategories = activeTab === 'all'
    ? skillCategories
    : skillCategories.filter((cat) => cat.id === activeTab);

  return (
    <PageTransitionSection id="skills" className="section-spacing">
      <div className="container">
        
        {/* Clean Header with Motion */}
        <div style={{ marginBottom: '40px' }}>
          <div className="section-tag">
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="section-title">
            <MotionTitle>Skills & Proficiencies</MotionTitle>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: '640px', margin: 0 }}>
            Comprehensive technical knowledge sourced directly from my experience and projects.
          </p>
        </div>

        {/* Tab Filter Pills */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          marginBottom: '40px'
        }}>
          <button
            onClick={() => setActiveTab('all')}
            style={{
              padding: '8px 20px',
              borderRadius: 'var(--radius-pill)',
              border: '1px solid',
              borderColor: activeTab === 'all' ? 'var(--accent-cyan)' : 'var(--border-glass)',
              background: activeTab === 'all' ? 'rgba(6, 182, 212, 0.18)' : 'rgba(255, 255, 255, 0.03)',
              color: activeTab === 'all' ? 'var(--accent-cyan)' : 'var(--text-secondary)',
              fontFamily: 'var(--font-body)',
              fontWeight: '600',
              fontSize: '0.85rem',
              cursor: 'pointer',
              transition: 'all 0.25s ease'
            }}
          >
            All Skills
          </button>

          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              style={{
                padding: '8px 18px',
                borderRadius: 'var(--radius-pill)',
                border: '1px solid',
                borderColor: activeTab === cat.id ? 'var(--accent-cyan)' : 'var(--border-glass)',
                background: activeTab === cat.id ? 'rgba(6, 182, 212, 0.18)' : 'rgba(255, 255, 255, 0.03)',
                color: activeTab === cat.id ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                fontFamily: 'var(--font-body)',
                fontWeight: '600',
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all 0.25s ease'
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Clean Cohesive Skills Cards Grid with Framer Motion */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          marginBottom: '56px'
        }}>
          {filteredCategories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.7, delay: (idx % 3) * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                className="glass-card"
                style={{
                  padding: '28px',
                  borderRadius: 'var(--radius-md)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justify: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                    <div style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '12px',
                      background: 'rgba(6, 182, 212, 0.12)',
                      border: '1px solid var(--border-glass)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {cat.icon}
                    </div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: 'var(--text-primary)', margin: 0 }}>
                      {cat.name}
                    </h3>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        style={{
                          fontSize: '0.85rem',
                          fontFamily: 'var(--font-mono)',
                          background: 'rgba(6, 182, 212, 0.08)',
                          color: 'var(--text-primary)',
                          padding: '6px 14px',
                          borderRadius: 'var(--radius-pill)',
                          border: '1px solid var(--border-glass)',
                          transition: 'all 0.2s ease'
                        }}
                        className="clean-skill-pill"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications & Additional Highlights Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '24px',
          '@media (min-width: 992px)': { gridTemplateColumns: '1fr 1fr' }
        }} className="cert-add-grid">
          
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="glass-card" style={{ padding: '28px', borderRadius: 'var(--radius-md)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <Award size={22} style={{ color: 'var(--accent-cyan)' }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-primary)', margin: 0 }}>
                  Certifications
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {certifications.map((cert, cIdx) => (
                  <div
                    key={cIdx}
                    style={{
                      padding: '16px 20px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '10px'
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-primary)' }}>
                        {cert.title}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginTop: '2px' }}>
                        {cert.issuer}
                      </div>
                    </div>

                    <span style={{
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      background: 'rgba(6, 182, 212, 0.12)',
                      color: 'var(--accent-cyan)',
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-pill)',
                      border: '1px solid rgba(6, 182, 212, 0.25)'
                    }}>
                      {cert.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Additional Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="glass-card" style={{ padding: '28px', borderRadius: 'var(--radius-md)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <Star size={22} style={{ color: '#10b981' }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-primary)', margin: 0 }}>
                  Additional Highlights
                </h3>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {additionalHighlights.map((hl, hIdx) => (
                  <li key={hIdx} style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'flex-start', gap: '12px', lineHeight: '1.65' }}>
                    <span style={{ color: 'var(--accent-cyan)', marginTop: '2px' }}>✦</span>
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>

      </div>

      <style>{`
        .clean-skill-pill:hover {
          background: rgba(6, 182, 212, 0.18) !important;
          border-color: var(--accent-cyan) !important;
          color: var(--accent-cyan) !important;
          transform: translateY(-2px);
        }
        @media (min-width: 992px) {
          .cert-add-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </PageTransitionSection>
  );
}
