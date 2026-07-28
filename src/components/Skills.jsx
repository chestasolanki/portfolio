import React, { useState } from 'react';
import PageTransitionSection from './PageTransitionSection';
import { MotionTitle } from './MotionText';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Layout, Server, Database, Brain, Wrench, BookOpen, Award, CheckCircle2 } from 'lucide-react';
import InteractiveTechCube from './InteractiveTechCube';
import CinematicDeveloperBackground from './CinematicDeveloperBackground';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('languages');

  const categories = [
    { id: 'languages', name: 'Languages', icon: Code },
    { id: 'frontend', name: 'Frontend', icon: Layout },
    { id: 'backend', name: 'Backend', icon: Server },
    { id: 'database', name: 'Databases', icon: Database },
    { id: 'ai', name: 'AI & ML', icon: Brain },
    { id: 'tools', name: 'Dev Tools', icon: Wrench },
    { id: 'core', name: 'Core CS', icon: BookOpen }
  ];

  const skillData = {
    languages: [
      { name: 'C++', level: 'Proficient', desc: 'Data Structures, Algorithms & STL' },
      { name: 'JavaScript', level: 'Proficient', desc: 'ES6+, Async/Await & DOM' },
      { name: 'Python', level: 'Intermediate', desc: 'AI Scripting & Data Processing' }
    ],
    frontend: [
      { name: 'React.js', level: 'Proficient', desc: 'Hooks, State Management & SPA' },
      { name: 'HTML5 & CSS3', level: 'Proficient', desc: 'Semantic Layouts & Styling' },
      { name: 'Tailwind CSS', level: 'Proficient', desc: 'Utility-first Responsive UI' },
      { name: 'Responsive Design', level: 'Proficient', desc: 'Cross-device Adaptability' }
    ],
    backend: [
      { name: 'Node.js', level: 'Proficient', desc: 'Asynchronous Event Runtime' },
      { name: 'Express.js', level: 'Proficient', desc: 'RESTful API Routing & Middleware' },
      { name: 'RESTful APIs', level: 'Proficient', desc: 'Secure Client-Server Endpoints' },
      { name: 'Server-Sent Events (SSE)', level: 'Proficient', desc: 'Real-time Streaming Data' },
      { name: 'Authentication', level: 'Proficient', desc: 'JWT & Session Security' }
    ],
    database: [
      { name: 'MySQL', level: 'Proficient', desc: 'Relational Schemas & SQL Queries' },
      { name: 'MongoDB', level: 'Proficient', desc: 'NoSQL Document Store' },
      { name: 'DB Optimization', level: 'Proficient', desc: 'Query Execution & Indexing' }
    ],
    ai: [
      { name: 'Large Language Models (LLMs)', level: 'Proficient', desc: 'Generative AI Integrations' },
      { name: 'Retrieval-Augmented Generation (RAG)', level: 'Proficient', desc: 'Context-Aware AI Workflows' },
      { name: 'Prompt Engineering', level: 'Proficient', desc: 'Instruction Design & Fine-tuning' },
      { name: 'Server-Sent Events (SSE)', level: 'Proficient', desc: 'Real-time AI Stream Generation' }
    ],
    tools: [
      { name: 'Git & GitHub', level: 'Proficient', desc: 'Version Control & Collaboration' },
      { name: 'Postman', level: 'Proficient', desc: 'API Testing & Documentation' },
      { name: 'Linux', level: 'Proficient', desc: 'CLI Navigation & Environment Setup' },
      { name: 'VS Code', level: 'Proficient', desc: 'Development & Debugging' }
    ],
    core: [
      { name: 'Data Structures & Algorithms', level: 'Proficient', desc: '250+ LeetCode Solved' },
      { name: 'Object-Oriented Programming (OOP)', level: 'Proficient', desc: 'Abstraction & Encapsulation' },
      { name: 'Operating Systems', level: 'Proficient', desc: 'Process & Memory Management' },
      { name: 'DBMS', level: 'Proficient', desc: 'Database Management Systems' },
      { name: 'Computer Networks', level: 'Proficient', desc: 'TCP/IP & HTTP Protocols' }
    ]
  };

  const certifications = [
    {
      title: 'AWS – Machine Learning Foundations',
      issuer: 'Amazon Web Services (AWS)',
      date: '2024'
    },
    {
      title: 'Palo Alto – Cloud Security Automation, Network Security, Operations & Configurations',
      issuer: 'Palo Alto Networks',
      date: '2024'
    },
    {
      title: 'Red Hat – Red Hat System Administration',
      issuer: 'Red Hat',
      date: '2024'
    },
    {
      title: 'Supervised Machine Learning: Regression and Classification',
      issuer: 'Coursera / DeepLearning.AI',
      date: '2024'
    },
    {
      title: 'Complete C++ STL',
      issuer: 'Udemy',
      date: '2024'
    }
  ];

  return (
    <PageTransitionSection id="skills" className="section-spacing" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Cinematic Background Layer */}
      <CinematicDeveloperBackground />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div style={{ marginBottom: '36px' }}>
          <div className="section-tag">
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <div>
            <h2 className="section-title" style={{ margin: 0 }}>
              <MotionTitle>Technical Skills</MotionTitle>
            </h2>
          </div>
        </div>

        {/* 1. Interactive Knowledge Graph Widget */}
        <div style={{ marginBottom: '48px' }}>
          <InteractiveTechCube />
        </div>

        {/* 2. Categorized Glassmorphic Skills Tabs */}
        <div>
          {/* Category Tabs Bar */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '28px',
            background: 'var(--bg-card)',
            padding: '8px',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-glass)'
          }}>
            {categories.map((cat) => {
              const IconComp = cat.icon;
              const isActive = activeTab === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  style={{
                    background: isActive ? 'linear-gradient(135deg, #0284c7 0%, #38bdf8 100%)' : 'transparent',
                    color: isActive ? '#ffffff' : 'var(--text-secondary)',
                    border: 'none',
                    borderRadius: 'var(--radius-sm)',
                    padding: '10px 18px',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    fontFamily: 'var(--font-body)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all var(--transition-fast)',
                    boxShadow: isActive ? '0 4px 15px rgba(56, 189, 248, 0.4)' : 'none'
                  }}
                >
                  <IconComp size={15} />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active Category Skills Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                gap: '16px'
              }}
            >
              {skillData[activeTab]?.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="glass-card"
                  style={{
                    padding: '18px 20px',
                    borderRadius: 'var(--radius-sm)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <span style={{ fontWeight: '700', fontSize: '0.98rem', color: 'var(--text-primary)' }}>
                      {skill.name}
                    </span>
                    <span style={{
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      color: '#38bdf8',
                      background: 'rgba(56, 189, 248, 0.12)',
                      padding: '2px 8px',
                      borderRadius: 'var(--radius-pill)',
                      border: '1px solid var(--border-glass)'
                    }}>
                      {skill.level}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.45' }}>
                    {skill.desc}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Certifications Card Footer */}
          <div style={{ marginTop: '36px' }}>
            <div className="glass-card" style={{ padding: '28px 32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <Award size={22} style={{ color: '#38bdf8' }} />
                <span className="font-serif" style={{ fontSize: '1.3rem', fontWeight: '700', color: 'var(--text-primary)' }}>
                  Certifications &amp; Professional Credentials
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                {certifications.map((cert, cIdx) => (
                  <div key={cIdx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={18} style={{ color: '#38bdf8', marginTop: '3px', flexShrink: 0 }} />
                    <div>
                      <div style={{ fontSize: '0.94rem', fontWeight: '700', color: 'var(--text-primary)', lineHeight: '1.4' }}>
                        {cert.title}
                      </div>
                      <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                        {cert.issuer} • {cert.date}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </PageTransitionSection>
  );
}
