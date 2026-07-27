import React from 'react';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';
import PageTransitionSection from './PageTransitionSection';
import { MotionTitle } from './MotionText';
import { motion } from 'framer-motion';

export default function Projects() {
  const projectList = [
    {
      id: 'craftly',
      title: 'Craftly',
      subtitle: 'AI-Powered Website Generation Platform',
      github: 'https://github.com/chestasolanki/Craftly',
      description: 'Developed an AI-powered website generation platform that transforms natural language prompts into fully functional websites using the Llama 3.3 70B Large Language Model. Implemented prompt engineering, real-time LLM response streaming with Server-Sent Events (SSE), automated code generation, file creation, and live preview deployment to enable an end-to-end AI-driven website generation workflow.',
      tools: ['Llama 3.3 70B', 'Prompt Engineering', 'Node.js', 'Express.js', 'REST APIs', 'Server-Sent Events (SSE)', 'HTML', 'CSS', 'JavaScript']
    },
    {
      id: 'prepai',
      title: 'PrepAI',
      subtitle: 'AI Interview Preparation Platform',
      github: 'https://github.com/chestasolanki/PrepAI',
      description: 'Built a full-stack AI interview preparation platform using React.js, Node.js, Express.js, and MySQL with authentication, analytics dashboards, company-wise preparation tracking, interview workflows, and performance tracking. Implemented secure backend architecture and optimized database operations for scalable and efficient performance.',
      tools: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'REST APIs', 'Tailwind CSS']
    }
  ];

  return (
    <PageTransitionSection id="projects" className="section-spacing">
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: '48px' }}>
          <div className="section-tag">
            <span>PROJECTS</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
            <h2 className="section-title" style={{ margin: 0 }}>
              <MotionTitle>Featured Projects</MotionTitle>
            </h2>
            
            <a
              href="https://github.com/chestasolanki"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <GithubIcon size={18} />
              <span>GitHub Profile</span>
            </a>
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px' }}>
          {projectList.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, rotateX: -5 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.85, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                className="glass-card"
                style={{
                  padding: '36px',
                  border: '1px solid var(--border-glass)'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
                    <div>
                      <h3 className="font-serif" style={{
                        fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                        fontWeight: '700',
                        color: 'var(--text-primary)',
                        margin: 0
                      }}>
                        {project.title}
                      </h3>
                      <div style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.9rem',
                        color: 'var(--accent-cyan)',
                        marginTop: '4px'
                      }}>
                        {project.subtitle}
                      </div>
                    </div>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                      style={{ padding: '8px 20px', fontSize: '0.88rem' }}
                    >
                      <GithubIcon size={16} />
                      <span>View Repository</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>

                  <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '1rem',
                    lineHeight: '1.7',
                    marginBottom: '24px'
                  }}>
                    {project.description}
                  </p>

                  {/* Tools Used */}
                  <div>
                    <div style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      color: 'var(--text-muted)',
                      marginBottom: '10px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em'
                    }}>
                      Tools Used:
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {project.tools.map((tool, tIdx) => (
                        <span
                          key={tIdx}
                          style={{
                            fontSize: '0.8rem',
                            fontFamily: 'var(--font-mono)',
                            background: 'rgba(6, 182, 212, 0.12)',
                            color: 'var(--accent-cyan)',
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
