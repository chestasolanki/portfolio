import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';
import PageTransitionSection from './PageTransitionSection';
import CinematicDeveloperBackground from './CinematicDeveloperBackground';
import TiltCard from './TiltCard';

export default function Projects() {
  const projectsList = [
    {
      title: 'CareerPilot — AI Interview Preparation Platform',
      subtitle: 'Personalized AI Prep Engine',
      description: 'Built an AI-powered platform that analyzes candidate resumes (PDF), job descriptions, and self-descriptions to calculate match scores, identify skill gaps, and generate multi-day personalized prep plans with technical/behavioral guidance.',
      tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Multer', 'PDF-Parse', 'Gemini API', 'SCSS'],
      github: 'https://github.com/chestasolanki/CareerPilot',
      live: '#',
      featured: true,
      metrics: 'AI Document Pipeline'
    },
    {
      title: 'PrepAI — AI Interview Preparation Platform',
      subtitle: 'Interactive AI Mock Interviewer',
      description: 'Created a full-stack AI interview prep application with custom question generation, feedback analytics dashboards, authentication workflows, and performance tracking on a normalized MySQL schema.',
      tags: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'REST APIs', 'Tailwind CSS'],
      github: 'https://github.com/chestasolanki/prep-ai',
      live: '#',
      featured: true,
      metrics: 'Full-Stack Solution'
    },
    {
      title: 'Craftly — AI-Powered Website Generation Platform',
      subtitle: 'Prompt-to-Website Engine',
      description: 'Built an AI platform that converts natural language prompts into live functional websites using Llama 3.3 70B via Groq API. Features real-time SSE streaming for live code execution and multi-file preview.',
      tags: ['Groq API', 'Llama 3.3 70B', 'Prompt Engineering', 'Node.js', 'Express.js', 'REST APIs', 'SSE', 'HTML/CSS/JS'],
      github: 'https://github.com/chestasolanki/craftly',
      live: '#',
      featured: true,
      metrics: 'Real-time LLM Streaming'
    }
  ];

  return (
    <PageTransitionSection
      id="projects"
      className="section-spacing"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Reusable Cinematic Developer Background */}
      <CinematicDeveloperBackground />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div style={{ marginBottom: '48px' }}>
          <div className="section-tag">
            <span>FEATURED WORK</span>
          </div>
          <h2 className="section-title" style={{ margin: 0 }}>
            Featured <em>Projects</em>
          </h2>
        </div>

        {/* Projects Cards Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
          {projectsList.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.12 }}
            >
              <TiltCard intensity={10}>
                <div
                  className="glass-card"
                  style={{
                    padding: 'clamp(28px, 4vw, 42px)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-glass)',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                >
                  {/* Subtle Accent Glow Corner */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '180px',
                    height: '180px',
                    background: 'radial-gradient(circle at 100% 0%, rgba(56, 189, 248, 0.18) 0%, transparent 70%)',
                    pointerEvents: 'none'
                  }} />

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '16px' }}>
                    <div>
                      <div className="section-tag" style={{ marginBottom: '6px', fontSize: '11px' }}>
                        <Sparkles size={13} />
                        <span>{project.subtitle}</span>
                      </div>
                      <h3 style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                        fontWeight: '600',
                        color: 'var(--text-primary)',
                        lineHeight: '1.2'
                      }}>
                        {project.title}
                      </h3>
                    </div>

                    <span style={{
                      fontSize: '12px',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--accent-purple)',
                      background: 'rgba(56, 189, 248, 0.12)',
                      border: '1px solid var(--border-glass)',
                      padding: '4px 14px',
                      borderRadius: 'var(--radius-pill)'
                    }}>
                      {project.metrics}
                    </span>
                  </div>

                  <p style={{
                    fontSize: '1rem',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.65',
                    marginBottom: '24px',
                    maxWidth: '850px'
                  }}>
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        style={{
                          fontSize: '12px',
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--text-primary)',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid var(--border-glass)',
                          padding: '4px 12px',
                          borderRadius: 'var(--radius-pill)'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div style={{ display: 'flex', gap: '14px' }}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-secondary"
                      style={{ fontSize: '13px', padding: '8px 18px' }}
                    >
                      <GithubIcon size={15} />
                      <span>Repository</span>
                    </a>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>
    </PageTransitionSection>
  );
}
