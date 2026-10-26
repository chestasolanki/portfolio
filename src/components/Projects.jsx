import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';

export const ALL_PROJECTS = [
  {
    id: 'limetta',
    num: '01',
    clientLabel: 'CLIENT',
    clientName: 'Limetta Luxury Decor',
    category: 'FOUNDING PRODUCT DEVELOPMENT',
    title: 'Limetta',
    tagline: 'Luxury Interior Home Decor & E-Commerce Web Platform',
    description:
      'Spearheaded the technical architecture and end-to-end development of Limetta’s flagship luxury interior decor e-commerce platform, scaling it from concept to live production. Engineered Razorpay payment checkout, Delhivery logistics automation, Resend transactional notification workflows, and real-time order lifecycle tracking.',
    stack: ['React 19', 'Node.js', 'Express.js', 'MongoDB', 'Razorpay', 'Delhivery', 'Resend API'],
    live: 'https://www.limetta.in',
    displayUrl: 'limetta.in',
    image: '/limetta_experience.png',
    accentColor: '#00e5ff'
  },
  {
    id: 'codemesh',
    num: '02',
    clientLabel: 'CLIENT',
    clientName: 'CodeMesh Real-Time IDE',
    category: 'REAL-TIME DISTRIBUTED SYSTEMS',
    title: 'CodeMesh',
    tagline: 'Real-Time Collaborative Code Editor & Compiler',
    description:
      'Built a real-time collaborative coding platform using React, Monaco Editor, and Socket.io with conflict-free document sync via Yjs CRDTs, live avatar presence, in-room chat, and a sandboxed C++ (g++) execution engine containerized with Docker for AWS ECR/ECS.',
    stack: ['React.js', 'Monaco Editor', 'Yjs (CRDTs)', 'Socket.io', 'Docker', 'AWS ECS'],
    github: 'https://github.com/chestasolanki/CodeMesh',
    live: 'https://codemesh-rwl8.onrender.com/',
    displayUrl: 'codemesh-rwl8.onrender.com',
    image: '/project_codemesh.png',
    accentColor: '#00e5ff'
  },
  {
    id: 'what2cook',
    num: '03',
    clientLabel: 'CLIENT',
    clientName: 'What2Cook Culinary AI',
    category: 'FULL-STACK INTELLIGENCE',
    title: 'What2Cook',
    tagline: 'AI Culinary Assistant & Smart Recipe Engine',
    description:
      'AI-powered culinary platform that transforms available pantry ingredients into tailored recipes with dynamic step-by-step instructions, nutritional calculations, dietary filtering, and real-time Gemini generation.',
    stack: ['React.js', 'Node.js', 'Express.js', 'Gemini AI', 'Tailwind CSS', 'Vercel'],
    github: 'https://github.com/chestasolanki/What2Cook',
    live: 'https://what2-cook-sage.vercel.app/',
    displayUrl: 'what2-cook-sage.vercel.app',
    image: '/project_what2cook.png',
    accentColor: '#10b981'
  },
  {
    id: 'careerpilot',
    num: '04',
    clientLabel: 'CLIENT',
    clientName: 'CareerPilot AI Coach',
    category: 'AI DOCUMENT PIPELINE',
    title: 'CareerPilot',
    tagline: 'AI Interview Preparation & Skill Gap Platform',
    description:
      'Engineered an AI platform that parses candidate resumes (PDF), calculates job description match scores, detects skill deficits, and generates personalized multi-day preparation plans with Gemini API.',
    stack: ['React 19', 'Node.js', 'Express', 'MongoDB', 'Gemini API', 'PDF-Parse'],
    github: 'https://github.com/chestasolanki/CareerPilot',
    live: 'https://careerrpilot.vercel.app/',
    displayUrl: 'careerrpilot.vercel.app',
    image: '/project_careerpilot.png',
    accentColor: '#818cf8'
  },
  {
    id: 'craftly',
    num: '05',
    clientLabel: 'CLIENT',
    clientName: 'Craftly AI Engine',
    category: 'GENERATIVE AI STREAMING',
    title: 'Craftly',
    tagline: 'Prompt-to-Website Engine via Real-Time LLM',
    description:
      'Transforms natural language prompts into live, functional multi-file web applications using Llama 3.3 70B via Groq API. Leverages Server-Sent Events (SSE) for instant, streaming code execution.',
    stack: ['Groq API', 'Llama 3.3 70B', 'SSE Streaming', 'Node.js', 'Express'],
    github: 'https://github.com/chestasolanki/craftly',
    live: 'https://craftly-6yyh.vercel.app/',
    displayUrl: 'craftly-6yyh.vercel.app',
    image: '/project_craftly.png',
    accentColor: '#ec4899'
  }
];

function ProjectCardItem({ project, isExpanded, onToggle }) {
  return (
    <div
      className={`pinterest-project-card ${isExpanded ? 'is-expanded' : 'is-collapsed'}`}
      onClick={onToggle}
    >
      {/* Top Header Row (Always Visible) */}
      <div className="card-top-row">
        <div className="card-top-left">
          <span className="card-number">{project.num}</span>
          <div className="card-meta">
            <span className="card-client-label">{project.clientLabel || 'CLIENT'}</span>
            <span className="card-title-text">{project.clientName || project.title}</span>
          </div>
        </div>

        <div className="card-top-actions">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="card-pill-btn card-pill-ghost"
              onClick={(e) => e.stopPropagation()}
              title={`View ${project.title} GitHub Source Code`}
            >
              <GithubIcon size={12} />
              <span>CODE</span>
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="card-pill-btn card-pill-live"
              onClick={(e) => e.stopPropagation()}
              title={`Open ${project.title} Live Application`}
            >
              <span>LIVE PROJECT</span>
              <ArrowUpRight size={12} />
            </a>
          )}
        </div>
      </div>

      {/* Expanded Bento Image Showcase */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
            className="card-expanded-body"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="card-bento-container">
              {/* Left Large Showcase Image */}
              <div className="bento-panel bento-main">
                <img
                  src={project.image}
                  alt={`${project.title} primary showcase`}
                  className="bento-img bento-img-main"
                  loading="lazy"
                />
                <div className="bento-badge-live">
                  <span
                    className="bento-pulse-dot"
                    style={{ backgroundColor: project.accentColor || '#10b981' }}
                  />
                  <span>https://{project.displayUrl}</span>
                </div>
              </div>

              {/* Right Stacked Panels (2 Images) */}
              <div className="bento-side-col">
                <div className="bento-panel bento-top">
                  <img
                    src={project.image}
                    alt={`${project.title} detail view 1`}
                    className="bento-img bento-img-top"
                    loading="lazy"
                  />
                  <span className="bento-tag-chip">{project.category}</span>
                </div>
                <div className="bento-panel bento-bottom">
                  <img
                    src={project.image}
                    alt={`${project.title} detail view 2`}
                    className="bento-img bento-img-bottom"
                    loading="lazy"
                  />
                  <span className="bento-tag-chip">{project.tagline}</span>
                </div>
              </div>
            </div>

            {/* Bottom Info Bar inside Card */}
            <div className="card-footer-info">
              <div className="card-footer-tags">
                {project.stack.map((t, i) => (
                  <span key={i} className="card-tech-tag">
                    {t}
                  </span>
                ))}
              </div>
              <div className="card-footer-stepper">
                <span className="card-index-count">{project.num} / 05</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Projects({
  isActive = true,
  activeProject = 0,
  onSelectProject,
  onNavigate
}) {
  return (
    <section className="purrweb-exact-slide-stage work-showcase-slide-stage">
      {/* Background Vibrant Gradient Mesh Atmosphere */}
      <div className="work-atmosphere" aria-hidden="true">
        <div className="work-glow glow-cyan-teal" />
        <div className="work-glow glow-amber-warm" />
        <div className="work-glow glow-magenta" />
        <div className="work-grain" />
      </div>

      <div className="work-showcase-container">
        {/* Section Header: PROJECTS (with stylish MY WORK pill) */}
        <motion.div
          className="purrweb-section-header"
          style={{ textAlign: 'center', marginBottom: 'clamp(10px, 1.6vh, 18px)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="purrweb-badge" style={{ margin: '0 auto 6px auto' }}>
            <Sparkles size={11} style={{ color: 'var(--accent-cyan)' }} />
            <span className="purrweb-badge-text">MY WORK</span>
          </div>

          <h2 className="projects-pinterest-title">
            PROJECTS
          </h2>
        </motion.div>

        {/* Stacked Interactive Accordion Cards Exactly Matching Pinterest Layout */}
        <div className="pinterest-projects-stack">
          {ALL_PROJECTS.map((project, idx) => {
            const isExpanded = activeProject === idx;
            return (
              <ProjectCardItem
                key={project.id}
                project={project}
                isExpanded={isExpanded}
                onToggle={() => onSelectProject && onSelectProject(idx)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
