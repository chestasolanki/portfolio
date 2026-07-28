import React from 'react';
import PageTransitionSection from './PageTransitionSection';
import { MotionTitle } from './MotionText';
import { motion } from 'framer-motion';

export default function Projects() {
  const projectList = [
    {
      id: 'craftly',
      title: 'Craftly',
      subtitle: 'AI-Powered Website Generation Platform',
      description: 'Developed an AI-powered website generation platform that transforms natural language prompts into fully functional websites using Large Language Models (LLMs). Implemented prompt engineering, real-time LLM response streaming with Server-Sent Events (SSE), automated code generation, file creation, and live preview deployment to enable an end-to-end AI-driven website generation workflow.',
      tools: ['LLMs', 'Prompt Engineering', 'Node.js', 'Express.js', 'REST APIs', 'Server-Sent Events (SSE)', 'HTML', 'CSS', 'JavaScript']
    },
    {
      id: 'prepai',
      title: 'PrepAI',
      subtitle: 'AI Interview Preparation Platform',
      description: 'Built a full-stack AI interview preparation platform using React.js, Node.js, Express.js, and MySQL with authentication, analytics dashboards, company-wise preparation tracking, interview workflows, and performance tracking. Implemented secure backend architecture and optimized database operations for scalable and efficient performance.',
      tools: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'REST APIs', 'Tailwind CSS']
    }
  ];

  return (
    <PageTransitionSection id="projects" className="section-spacing">
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: '28px' }}>
          <div className="section-tag">
            <span>FEATURED WORK</span>
          </div>
          <div>
            <h2 className="section-title" style={{ margin: 0 }}>
              <MotionTitle>Featured Projects</MotionTitle>
            </h2>
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }}>
          {projectList.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.75, delay: idx * 0.12 }}
            >
              <div
                className="glass-card"
                style={{
                  padding: '24px 28px',
                  borderRadius: 'var(--radius-lg)'
                }}
              >
                <div>
                  <div style={{ marginBottom: '12px' }}>
                    <h3 className="card-title" style={{ fontSize: '22px' }}>
                      {project.title}
                    </h3>
                    <div className="card-subtitle" style={{ fontSize: '14px', marginTop: '2px' }}>
                      {project.subtitle}
                    </div>
                  </div>

                  <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '13.5px',
                    lineHeight: '1.65',
                    marginBottom: '18px',
                    fontWeight: '400'
                  }}>
                    {project.description}
                  </p>

                  {/* Tools Used */}
                  <div>
                    <div style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      color: 'var(--text-muted)',
                      marginBottom: '8px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em'
                    }}>
                      Tools Used:
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {project.tools.map((tool, tIdx) => (
                        <span
                          key={tIdx}
                          style={{
                            fontSize: '11.5px',
                            fontFamily: 'var(--font-mono)',
                            background: 'rgba(168, 85, 247, 0.12)',
                            color: '#A855F7',
                            padding: '4px 12px',
                            borderRadius: 'var(--radius-pill)',
                            border: '1px solid var(--border-glass)'
                          }}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </PageTransitionSection>
  );
}
