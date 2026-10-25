import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, ArrowUpRight, Code2, Layers, Cpu } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects() {
  const [activeProject, setActiveProject] = useState(0);

  const projectsList = [
    {
      id: '01',
      title: 'CareerPilot',
      tagline: 'AI Interview Preparation & Skill Gap Platform',
      category: 'AI DOCUMENT INTELLIGENCE',
      description:
        'Architected an end-to-end AI platform that parses candidate resumes (PDF), matches them against target job descriptions, identifies critical skill deficits, and dynamically generates multi-day personalized technical and behavioral preparation roadmaps.',
      highlights: [
        'Automated PDF text parsing & gap analysis pipeline',
        'Gemini API integration for contextual interview roadmaps',
        'JWT-based secure authentication & session management',
        'Full candidate scoring with behavioral evaluation metrics'
      ],
      tags: ['React 19', 'Node.js', 'Express.js', 'MongoDB', 'Gemini API', 'PDF-Parse', 'Multer', 'JWT', 'SCSS'],
      github: 'https://github.com/chestasolanki/CareerPilot',
      live: 'https://github.com/chestasolanki/CareerPilot',
      stats: 'Multi-Day Prep Engine',
      accent: 'var(--accent-violet)'
    },
    {
      id: '02',
      title: 'PrepAI',
      tagline: 'Interactive Full-Stack AI Mock Interviewer',
      category: 'FULL-STACK INTELLIGENCE',
      description:
        'Designed an interactive AI interview platform featuring dynamic technical question generation, real-time candidate feedback loops, authentication workflows, and normalized relational analytics on MySQL.',
      highlights: [
        'Dynamic question generation tailored to candidate seniority',
        'Real-time response grading and performance feedback',
        'Normalized MySQL relational database schema for user metrics',
        'Modern responsive dashboard with tailored UI telemetry'
      ],
      tags: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'REST APIs', 'Tailwind CSS', 'JWT'],
      github: 'https://github.com/chestasolanki/prep-ai',
      live: 'https://github.com/chestasolanki/prep-ai',
      stats: 'Real-Time Evaluator',
      accent: 'var(--accent-pink)'
    },
    {
      id: '03',
      title: 'Craftly',
      tagline: 'Prompt-to-Website Engine via Real-Time LLM Streaming',
      category: 'GENERATIVE AI & STREAMING',
      description:
        'Created a prompt-driven web generator that translates natural language prompts into live, multi-file web applications using Llama 3.3 70B via Groq API, leveraging Server-Sent Events (SSE) for instant, streaming code execution.',
      highlights: [
        'Sub-second inference with Llama 3.3 70B via Groq API',
        'Real-time Server-Sent Events (SSE) streaming code execution',
        'Multi-file HTML, CSS, and JavaScript synthesis in sandbox',
        'Instant live preview iframe with dynamic DOM injection'
      ],
      tags: ['Groq API', 'Llama 3.3 70B', 'SSE Streaming', 'Node.js', 'Express.js', 'REST APIs', 'Sandbox'],
      github: 'https://github.com/chestasolanki/craftly',
      live: 'https://github.com/chestasolanki/craftly',
      stats: 'SSE Live Execution',
      accent: 'var(--accent-coral)'
    }
  ];

  return (
    <section id="projects" className="purrweb-section">
      <div className="container" style={{ maxWidth: '1320px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div className="purrweb-section-header">
          <div className="purrweb-badge">
            <Sparkles size={12} style={{ color: 'var(--accent-pink)' }} />
            <span className="purrweb-badge-text">SELECTED WORK</span>
          </div>
          <h2 className="purrweb-section-title">
            Featured <span className="purrweb-serif-accent">Projects</span> &amp; Systems
          </h2>
          <p className="purrweb-section-subtitle">
            A curated showcase of production web applications, generative AI pipelines, and distributed backends.
          </p>
        </div>

        {/* Editorial Project Showcase List (Borderless, Open Layout) */}
        <div className="purrweb-projects-list">
          {projectsList.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="purrweb-project-row"
            >
              {/* Left Column: Project Number & Info */}
              <div className="purrweb-project-info">
                <div className="project-meta-bar">
                  <span className="project-index">{project.id}</span>
                  <span className="project-category">{project.category}</span>
                  <span className="project-stat-pill">{project.stats}</span>
                </div>

                <h3 className="project-title">
                  {project.title}
                </h3>
                <h4 className="project-tagline">
                  {project.tagline}
                </h4>

                <p className="project-desc">
                  {project.description}
                </p>

                {/* Highlights List */}
                <ul className="project-highlights">
                  {project.highlights.map((item, hIdx) => (
                    <li key={hIdx}>
                      <span className="highlight-bullet">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack Tags */}
                <div className="project-tags-wrap">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="project-tech-pill">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions Row */}
                <div className="project-actions">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="purrweb-btn-primary"
                    style={{ padding: '10px 22px', fontSize: '13px' }}
                  >
                    <GithubIcon size={16} />
                    <span>View Source Code</span>
                    <ArrowUpRight size={14} />
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="purrweb-btn-secondary"
                      style={{ padding: '10px 20px', fontSize: '13px' }}
                    >
                      <span>Live Preview</span>
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column: Sleek Editorial Terminal Preview */}
              <div className="purrweb-project-preview">
                <div className="preview-terminal-window">
                  <div className="terminal-header">
                    <div className="window-dots">
                      <span className="dot dot-red" />
                      <span className="dot dot-yellow" />
                      <span className="dot dot-green" />
                    </div>
                    <div className="terminal-title">
                      <Code2 size={12} />
                      <span>{project.title.toLowerCase()}.architecture.spec</span>
                    </div>
                  </div>

                  <div className="terminal-content">
                    <div className="spec-item">
                      <span className="spec-label">MODULE:</span>
                      <span className="spec-val" style={{ color: 'var(--accent-pink)' }}>{project.title} Core v2.4</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">RUNTIME:</span>
                      <span className="spec-val">Node.js / React 19 Client</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">PIPELINE:</span>
                      <span className="spec-val" style={{ color: 'var(--accent-cyan)' }}>{project.stats}</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">INTEGRITY:</span>
                      <span className="spec-val" style={{ color: '#4ade80' }}>100% Shipped &amp; Verified</span>
                    </div>

                    <div className="terminal-code-block">
                      <div className="code-comment">// Production Architecture Highlights</div>
                      <div className="code-row">
                        <span className="c-key">&gt; deploy</span> --target production
                      </div>
                      <div className="code-row">
                        <span className="c-key">&gt; status:</span> <span style={{ color: '#4ade80' }}>ACTIVE (200 OK)</span>
                      </div>
                      <div className="code-row">
                        <span className="c-key">&gt; repository:</span> <span style={{ color: 'var(--accent-coral)' }}>{project.github.replace('https://github.com/', '')}</span>
                      </div>
                    </div>
                  </div>

                  <div className="terminal-footer">
                    <span className="footer-status">● SYSTEM HEALTHY</span>
                    <span className="footer-meta">PURRWEB ARCHITECTURE SPEC</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
