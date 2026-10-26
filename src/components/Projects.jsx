import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, Sparkles, Lock, Globe, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects({ isActive = true, onNavigate }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const SLIDE_DURATION = 6500; // 6.5s per slide

  const projects = [
    {
      id: 'limetta',
      num: '01',
      category: 'FOUNDING PRODUCT DEVELOPMENT',
      nextCategory: 'REAL-TIME DISTRIBUTED SYSTEMS',
      title: 'Limetta',
      tagline: 'Flagship Luxury E-Commerce & Full-Stack Platform',
      domain: 'REACT 19 / NODE.JS / EXPRESS / MONGODB / RAZORPAY / DELHIVERY',
      description:
        'Spearheaded the technical architecture and end-to-end development of Limetta’s flagship luxury interior decor e-commerce platform. Engineered Razorpay payments, Delhivery logistics automation, Resend transactional workflows, and live order lifecycle management.',
      stack: ['React 19', 'Node.js', 'Express.js', 'MongoDB', 'Razorpay', 'Delhivery Logistics', 'Resend API', 'ImageKit CDN'],
      live: 'https://www.limetta.in',
      displayUrl: 'limetta.in',
      image: '/limetta_experience.png',
      accentColor: '#00e5ff',
      status: 'Live in Production'
    },
    {
      id: 'codemesh',
      num: '02',
      category: 'REAL-TIME DISTRIBUTED SYSTEMS',
      nextCategory: 'FULL-STACK INTELLIGENCE',
      title: 'CodeMesh',
      tagline: 'Real-Time Collaborative Code Editor & Compiler',
      domain: 'REACT / MONACO / YJS CRDTS / DOCKER',
      description:
        'Built a real-time collaborative coding platform using React, Monaco Editor, and Socket.io with conflict-free document sync via Yjs CRDTs, live avatar presence, in-room chat, and a sandboxed C++ (g++) execution engine containerized with Docker for AWS ECR/ECS.',
      stack: ['React.js', 'Node.js', 'Express 5', 'Monaco Editor', 'Yjs (CRDTs)', 'Socket.io', 'C++ (g++)', 'Docker', 'AWS ECS'],
      github: 'https://github.com/chestasolanki/CodeMesh',
      live: 'https://codemesh-rwl8.onrender.com/',
      displayUrl: 'codemesh-rwl8.onrender.com',
      image: '/project_codemesh.png',
      accentColor: '#00e5ff',
      status: 'Dockerized Platform'
    },
    {
      id: 'what2cook',
      num: '03',
      category: 'FULL-STACK INTELLIGENCE',
      nextCategory: 'AI DOCUMENT PIPELINE',
      title: 'What2Cook',
      tagline: 'AI Culinary Assistant & Smart Recipe Engine',
      domain: 'REACT.JS / NODE.JS / GEMINI AI / REST API',
      description:
        'AI-powered culinary platform that transforms available pantry ingredients into tailored recipes with dynamic step-by-step instructions, nutritional calculations, dietary filtering, and real-time Gemini generation.',
      stack: ['React.js', 'Node.js', 'Express.js', 'Gemini AI', 'Tailwind CSS', 'Vercel'],
      github: 'https://github.com/chestasolanki/What2Cook',
      live: 'https://what2-cook-sage.vercel.app/',
      displayUrl: 'what2-cook-sage.vercel.app',
      image: '/project_what2cook.png',
      accentColor: '#10b981',
      status: 'Active Deployment'
    },
    {
      id: 'careerpilot',
      num: '04',
      category: 'AI DOCUMENT PIPELINE',
      nextCategory: 'GENERATIVE AI STREAMING',
      title: 'CareerPilot',
      tagline: 'AI Interview Preparation & Skill Gap Platform',
      domain: 'AI / RESUME PARSING / LLM',
      description:
        'Engineered an AI platform that parses candidate resumes (PDF), calculates job description match scores, detects skill deficits, and generates personalized multi-day preparation plans with Gemini API.',
      stack: ['React 19', 'Node.js', 'Express', 'MongoDB', 'Gemini API', 'PDF-Parse', 'JWT'],
      github: 'https://github.com/chestasolanki/CareerPilot',
      live: 'https://careerrpilot.vercel.app/',
      displayUrl: 'careerrpilot.vercel.app',
      image: '/project_careerpilot.png',
      accentColor: '#818cf8',
      status: 'AI Platform'
    },
    {
      id: 'craftly',
      num: '05',
      category: 'GENERATIVE AI STREAMING',
      nextCategory: 'FOUNDING PRODUCT DEVELOPMENT',
      title: 'Craftly',
      tagline: 'Prompt-to-Website Engine via Real-Time LLM',
      domain: 'GROQ API / LLAMA 3.3 / SSE',
      description:
        'Transforms natural language prompts into live, functional multi-file web applications using Llama 3.3 70B via Groq API. Leverages Server-Sent Events (SSE) for instant, streaming code execution.',
      stack: ['Groq API', 'Llama 3.3 70B', 'SSE Streaming', 'Node.js', 'Express', 'HTML/CSS/JS'],
      github: 'https://github.com/chestasolanki/craftly',
      live: 'https://craftly-6yyh.vercel.app/',
      displayUrl: 'craftly-6yyh.vercel.app',
      image: '/project_craftly.png',
      accentColor: '#ec4899',
      status: 'Real-time Streaming'
    }
  ];

  const total = projects.length;

  // Auto-advance slides with pause support
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % total);
    }, SLIDE_DURATION);

    return () => clearInterval(interval);
  }, [isPlaying, activeSlide, total]);

  const currentProject = projects[activeSlide];

  return (
    <section className="purrweb-exact-work-stage my-work-slide-stage">
      {/* Background Vibrant Gradient Mesh */}
      <div className="work-atmosphere" aria-hidden="true">
        <div className="work-glow glow-cyan-teal" />
        <div className="work-glow glow-amber-warm" />
        <div className="work-glow glow-magenta" />
        <div className="work-grain" />
      </div>

      <div className="my-work-content-container">
        {/* Section Header: Explicitly titled "My Work" */}
        <motion.div
          className="purrweb-section-header"
          style={{ textAlign: 'center', marginBottom: 'clamp(12px, 1.8vh, 20px)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="purrweb-badge" style={{ margin: '0 auto 8px auto' }}>
            <Sparkles size={12} style={{ color: 'var(--accent-cyan)' }} />
            <span className="purrweb-badge-text">FEATURED ARCHITECTURES</span>
          </div>
          <h2 className="purrweb-section-title">
            My <span className="purrweb-serif-accent">Work</span>
          </h2>
          <p className="purrweb-section-subtitle" style={{ maxWidth: '640px', margin: '0 auto' }}>
            Production e-commerce architecture, real-time distributed editors, and generative AI systems.
          </p>
        </motion.div>

        {/* Two-Column Showcase: Left Project Selector + Right Interactive Stack Deck */}
        <div className="my-work-grid">
          
          {/* Left Column: Interactive Project Index Selector */}
          <motion.div
            className="my-work-index-col"
            initial={{ opacity: 0, x: -30 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.85, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="my-work-nav-list">
              {projects.map((proj, idx) => {
                const isCurrent = activeSlide === idx;
                return (
                  <button
                    key={proj.id}
                    onClick={() => setActiveSlide(idx)}
                    className={`my-work-nav-item ${isCurrent ? 'is-active' : ''}`}
                    style={{
                      '--proj-accent': proj.accentColor
                    }}
                  >
                    <div className="nav-item-top">
                      <span className="nav-item-num">{proj.num}</span>
                      <span className="nav-item-category">{proj.category}</span>
                    </div>
                    <div className="nav-item-title-row">
                      <h4 className="nav-item-title">{proj.title}</h4>
                      <span className="nav-item-status">{proj.status}</span>
                    </div>
                    <div className="nav-item-tags">
                      {proj.stack.slice(0, 3).join(' • ')}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Bottom Meta Domain Line */}
            <div className="work-meta-domain" style={{ marginTop: '16px' }}>
              <div className="domain-line">FULL-STACK &amp; AI / CLOUD /</div>
              <div className="domain-line">DISTRIBUTED SYSTEMS</div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Stacked Project Cards Deck */}
          <motion.div
            className="work-right-deck"
            initial={{ opacity: 0, y: 50, scale: 0.96 }}
            animate={isActive ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.96 }}
            transition={{ duration: 0.85, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => setIsPlaying(false)}
            onMouseLeave={() => setIsPlaying(true)}
          >
            {/* Peeking Background Card 1 (Top Stack) */}
            <div
              onClick={() => setActiveSlide((activeSlide + 2) % total)}
              className="stack-card card-back-1"
              style={{ cursor: 'pointer' }}
              title={`Switch to ${projects[(activeSlide + 2) % total].title}`}
            >
              <div className="stack-card-title">
                <span>{projects[(activeSlide + 2) % total].category}</span>
              </div>
            </div>

            {/* Peeking Background Card 2 (Middle Stack) */}
            <div
              onClick={() => setActiveSlide((activeSlide + 1) % total)}
              className="stack-card card-back-2"
              style={{ cursor: 'pointer' }}
              title={`Switch to ${projects[(activeSlide + 1) % total].title}`}
            >
              <div className="stack-card-title">
                <span>{projects[(activeSlide + 1) % total].category}</span>
              </div>
            </div>

            {/* Active Foreground Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject.id}
                initial={{ opacity: 0, y: 15, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.98 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="stack-card-foreground"
              >
                {/* Card Header: Category + Next Category Tab + External Link */}
                <div className="card-header-bar">
                  <div className="category-group">
                    <h3 className="category-title">{currentProject.category}</h3>
                    <div className="category-divider-line" />
                    <button
                      onClick={() => setActiveSlide((prev) => (prev + 1) % total)}
                      className="next-category-tab"
                    >
                      <span>{currentProject.nextCategory}</span>
                    </button>
                  </div>

                  <a
                    href={currentProject.live || currentProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="card-arrow-circle-btn"
                    title={currentProject.live ? `Open ${currentProject.title} Live App` : "View Source on GitHub"}
                  >
                    <ArrowRight size={18} />
                  </a>
                </div>

                {/* Card Body: Live Site Photo in Browser Window Mockup */}
                <div className="card-illustration-frame project-photo-frame">
                  <a
                    href={currentProject.live || currentProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-browser-window"
                    title={`Open live site: ${currentProject.displayUrl || currentProject.title}`}
                  >
                    {/* Browser Window Header */}
                    <div className="project-browser-topbar">
                      <div className="project-window-dots">
                        <span className="dot dot-close" />
                        <span className="dot dot-minimize" />
                        <span className="dot dot-maximize" />
                      </div>

                      <div className="project-address-pill">
                        <Lock size={10} className="ssl-lock-icon" />
                        <span className="project-address-text">{currentProject.displayUrl}</span>
                      </div>

                      <div className="project-live-indicator">
                        <span
                          className="pulse-dot-live"
                          style={{
                            backgroundColor: currentProject.accentColor || '#10b981',
                            color: currentProject.accentColor || '#10b981'
                          }}
                        />
                        <span className="live-label">LIVE</span>
                      </div>
                    </div>

                    {/* Screenshot Viewport */}
                    <div className="project-screenshot-viewport">
                      <img
                        src={currentProject.image}
                        alt={`${currentProject.title} live website screenshot`}
                        className="project-screenshot-img"
                        loading="lazy"
                      />

                      {/* Interactive Hover Pill */}
                      <div className="project-photo-hover-pill">
                        <span>Visit Live Platform ({currentProject.displayUrl})</span>
                        <ExternalLink size={12} />
                      </div>
                    </div>
                  </a>
                </div>

                {/* Card Meta & Links Footer */}
                <div className="card-info-footer">
                  <div className="info-title-group">
                    <h4 className="info-title">{currentProject.title}</h4>
                    <p className="info-desc">{currentProject.description}</p>
                  </div>

                  <div className="info-actions">
                    {currentProject.live && (
                      <a
                        href={currentProject.live}
                        target="_blank"
                        rel="noreferrer"
                        className="info-action-btn live-demo-btn"
                        title={`Open ${currentProject.title} Live Application`}
                      >
                        <Sparkles size={13} style={{ color: currentProject.accentColor || '#10b981' }} />
                        <span>Live App</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
                    {currentProject.github && (
                      <a
                        href={currentProject.github}
                        target="_blank"
                        rel="noreferrer"
                        className="info-action-btn"
                        title="View Source on GitHub"
                      >
                        <GithubIcon size={14} />
                        <span>Source Code</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>

            {/* Minimal Project Transition Indicator Dots */}
            <div className="deck-dots-indicator">
              {projects.map((proj, idx) => {
                const isActiveDot = activeSlide === idx;
                return (
                  <button
                    key={proj.id}
                    onClick={() => setActiveSlide(idx)}
                    className={`deck-dot ${isActiveDot ? 'is-active' : ''}`}
                    aria-label={`Jump to project ${idx + 1}: ${proj.title}`}
                    title={`${proj.title} • ${proj.category}`}
                  >
                    <span className="deck-dot-pill" />
                  </button>
                );
              })}
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
