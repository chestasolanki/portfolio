import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Lock, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';

export const ALL_PROJECTS = [
  {
    id: 'limetta',
    num: '01',
    category: 'FOUNDING PRODUCT DEVELOPMENT',
    title: 'Limetta',
    tagline: 'Luxury Interior Home Decor & E-Commerce Web Platform',
    description:
      'Spearheaded the technical architecture and end-to-end development of Limetta’s flagship luxury interior decor e-commerce platform, scaling it from concept to live production. Engineered Razorpay payment checkout, Delhivery logistics automation, Resend transactional notification workflows, and real-time order lifecycle tracking.',
    stack: ['React 19', 'Node.js', 'Express.js', 'MongoDB', 'Razorpay', 'Delhivery Logistics', 'Resend API', 'ImageKit CDN'],
    live: 'https://www.limetta.in',
    displayUrl: 'limetta.in',
    image: '/limetta_experience.png',
    accentColor: '#00e5ff'
  },
  {
    id: 'careerpilot',
    num: '02',
    category: 'AI DOCUMENT PIPELINE',
    title: 'CareerPilot',
    tagline: 'AI Interview Preparation & Skill Gap Platform',
    description:
      'Engineered an AI platform that parses candidate resumes (PDF), calculates job description match scores, detects skill deficits, and generates personalized multi-day preparation plans with Gemini API.',
    stack: ['React 19', 'Node.js', 'Express', 'MongoDB', 'Gemini API', 'PDF-Parse', 'JWT'],
    github: 'https://github.com/chestasolanki/CareerPilot',
    live: 'https://careerrpilot.vercel.app/',
    displayUrl: 'careerrpilot.vercel.app',
    image: '/project_careerpilot.png',
    accentColor: '#818cf8'
  },
  {
    id: 'codemesh',
    num: '03',
    category: 'REAL-TIME DISTRIBUTED SYSTEMS',
    title: 'CodeMesh',
    tagline: 'Real-Time Collaborative Code Editor & Compiler',
    description:
      'Built a real-time collaborative coding platform using React, Monaco Editor, and Socket.io with conflict-free document sync via Yjs CRDTs, live avatar presence, in-room chat, and a sandboxed C++ (g++) execution engine containerized with Docker for AWS ECR/ECS.',
    stack: ['React.js', 'Node.js', 'Express 5', 'Monaco Editor', 'Yjs (CRDTs)', 'Socket.io', 'C++ (g++)', 'Docker', 'AWS ECS'],
    github: 'https://github.com/chestasolanki/CodeMesh',
    live: 'https://codemesh-rwl8.onrender.com/',
    displayUrl: 'codemesh-rwl8.onrender.com',
    image: '/project_codemesh.png',
    accentColor: '#00e5ff'
  },
  {
    id: 'what2cook',
    num: '04',
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
  }
];

export default function Projects({
  isActive = true,
  activeProject = 0,
  onSelectProject,
  onNavigate
}) {
  const currentProject = ALL_PROJECTS[activeProject] || ALL_PROJECTS[0];

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
        {/* Section Header: Pure Clean Heading without badges or subtitle paras */}
        <motion.div
          className="purrweb-section-header"
          style={{ textAlign: 'center', marginBottom: 'clamp(14px, 2.2vh, 26px)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="purrweb-section-title" style={{ margin: 0 }}>
            My <span className="purrweb-serif-accent">Work</span>
          </h2>
        </motion.div>

        {/* Dynamic Project Stage: One screenshot on whole screen with description, then other then other on scroll */}
        <div className="work-stage-viewport">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject.id}
              className="work-single-project-grid"
              initial={{ opacity: 0, y: 35, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -35, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Left Column: Project Details & Action Buttons */}
              <div className="proj-details-col">
                <div className="proj-meta-header">
                  <span className="proj-step-badge">
                    {currentProject.num} / 04
                  </span>
                  <span className="proj-category-tag">
                    {currentProject.category}
                  </span>
                </div>

                <h3 className="proj-title-headline">
                  {currentProject.title}
                </h3>

                <p className="proj-tagline-text">
                  {currentProject.tagline}
                </p>

                <p className="proj-description-body">
                  {currentProject.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="proj-tech-pill-list">
                  {currentProject.stack.map((tech, idx) => (
                    <span key={idx} className="proj-tech-item">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Live and GitHub CTA Actions */}
                <div className="proj-actions-group">
                  {currentProject.live && (
                    <a
                      href={currentProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="proj-btn-primary"
                      title={`Open ${currentProject.title} Live Application`}
                    >
                      <Globe size={15} />
                      <span>Visit Live Platform</span>
                      <ArrowUpRight size={14} />
                    </a>
                  )}

                  {currentProject.github && (
                    <a
                      href={currentProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="proj-btn-secondary"
                      title={`View ${currentProject.title} Source Code on GitHub`}
                    >
                      <GithubIcon size={15} />
                      <span>Source Code</span>
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>

                {/* Bottom Step Indicator & Scroll Hint */}
                <div className="proj-stepper-footer">
                  <div className="proj-stepper-dots-row">
                    {ALL_PROJECTS.map((proj, pIdx) => {
                      const isCurrent = activeProject === pIdx;
                      return (
                        <button
                          key={proj.id}
                          onClick={() => onSelectProject && onSelectProject(pIdx)}
                          className={`proj-step-dot ${isCurrent ? 'is-active' : ''}`}
                          title={`Jump to ${proj.num}: ${proj.title}`}
                          aria-label={`Jump to project ${proj.num}: ${proj.title}`}
                        >
                          <span className="step-dot-num">{proj.num}</span>
                          <span className="step-dot-bar" />
                        </button>
                      );
                    })}
                  </div>

                  <span className="proj-scroll-hint-text">
                    {activeProject < ALL_PROJECTS.length - 1
                      ? 'Scroll down for next project ↓'
                      : 'Scroll down for Certifications ↓'}
                  </span>
                </div>
              </div>

              {/* Right Column: One prominent high-res screenshot on whole screen inside browser frame */}
              <div className="proj-picture-col">
                <a
                  href={currentProject.live || currentProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="proj-browser-window-frame"
                  title={`Open live platform: ${currentProject.displayUrl || currentProject.title}`}
                >
                  {/* Browser Topbar Header */}
                  <div className="proj-browser-topbar">
                    <div className="browser-dots-group">
                      <span className="dot dot-close" />
                      <span className="dot dot-minimize" />
                      <span className="dot dot-maximize" />
                    </div>

                    <div className="browser-address-pill">
                      <Lock size={10} className="ssl-lock-icon" />
                      <span className="address-url-text">https://{currentProject.displayUrl}</span>
                    </div>

                    <div className="browser-live-badge">
                      <span
                        className="pulse-dot-live"
                        style={{
                          backgroundColor: currentProject.accentColor || '#10b981',
                          color: currentProject.accentColor || '#10b981'
                        }}
                      />
                      <span className="live-status-word">LIVE</span>
                    </div>
                  </div>

                  {/* Browser Viewport with Single High-Res Screenshot */}
                  <div className="proj-browser-viewport">
                    <img
                      src={currentProject.image}
                      alt={`${currentProject.title} live platform screenshot`}
                      className="proj-live-screenshot-img"
                      loading="lazy"
                    />

                    {/* Interactive Floating Hover Pill */}
                    <div className="proj-hover-view-pill">
                      <span>Click to visit {currentProject.displayUrl}</span>
                      <ArrowUpRight size={13} />
                    </div>
                  </div>
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
