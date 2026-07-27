import React from 'react';
import { Layout, Code2, Bot, Zap } from 'lucide-react';

export default function WhatIDo() {
  const services = [
    {
      num: '01',
      icon: <Layout size={28} style={{ color: 'var(--accent-purple)' }} />,
      title: 'WEB DESIGN & UI',
      desc: 'Pixel-perfect digital experiences combining modern magazine aesthetics, responsive layouts, micro-animations, and dynamic dark/light mode themes.',
      tags: ['Responsive UI', 'Glassmorphism', 'Design Systems']
    },
    {
      num: '02',
      icon: <Code2 size={28} style={{ color: 'var(--accent-cyan)' }} />,
      title: 'FULL-STACK WEB DEV',
      desc: 'Scalable web applications built with React.js, Node.js, Express.js, and MongoDB/MySQL. Complete state management, RESTful APIs, and secure JWT auth.',
      tags: ['MERN Stack', 'RESTful APIs', 'JWT Auth']
    },
    {
      num: '03',
      icon: <Bot size={28} style={{ color: 'var(--accent-magenta)' }} />,
      title: 'AI & ML SOLUTIONS',
      desc: 'Integrating state-of-the-art Large Language Models (Llama 3.3 70B via Groq), real-time Server-Sent Events (SSE) streaming, PyTorch, RAG, and prompt engineering.',
      tags: ['LLM Streaming', 'Groq API', 'RAG Pipelines']
    },
    {
      num: '04',
      icon: <Zap size={28} style={{ color: '#f59e0b' }} />,
      title: 'OPTIMIZATION & APIS',
      desc: 'High-performance database modeling with MongoDB Atlas and MySQL, optimized query logic, modular architecture, and developer workflow automation.',
      tags: ['Performance', 'DBMS Modeling', 'System Admin']
    }
  ];

  return (
    <section id="what-i-do" className="section-spacing" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>
            <span>WHAT I DO</span>
          </div>
          <h2 className="section-title">
            Core Expertise & <span className="text-gradient">Specializations</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Transforming complex technical requirements into elegant, high-performing software products.
          </p>
        </div>

        {/* 4 Cards Grid matching reference */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px'
        }}>
          {services.map((service, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
                minHeight: '320px'
              }}
            >
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'space-between',
                  marginBottom: '24px'
                }}>
                  <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '16px',
                    background: 'rgba(168, 85, 247, 0.1)',
                    border: '1px solid var(--border-glass)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {service.icon}
                  </div>
                  
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1.4rem',
                    fontWeight: '800',
                    color: 'var(--text-dim)'
                  }}>
                    {service.num}
                  </span>
                </div>

                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '800',
                  color: 'var(--text-primary)',
                  marginBottom: '12px',
                  letterSpacing: '-0.01em'
                }}>
                  {service.title}
                </h3>

                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.92rem',
                  lineHeight: '1.6',
                  marginBottom: '24px'
                }}>
                  {service.desc}
                </p>
              </div>

              {/* Skill Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {service.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: 'var(--accent-purple)',
                      background: 'rgba(168, 85, 247, 0.08)',
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-pill)',
                      border: '1px solid var(--border-glass)'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
