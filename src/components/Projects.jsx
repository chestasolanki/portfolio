import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, Code2, Sparkles, Terminal, Lock, Globe } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects({ onNavigate }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const SLIDE_DURATION = 6500; // 6.5s per slide

  // Rotating intro transition words (Fast rhythm)
  const introWords = ['intelligent', 'adaptive', 'meaningful', 'dynamic'];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % introWords.length);
    }, 1500);
    return () => clearInterval(timer);
  }, [introWords.length]);

  const projects = [
    {
      id: 'codemesh',
      category: 'REAL-TIME DISTRIBUTED SYSTEMS',
      nextCategory: 'AI DOCUMENT PIPELINE',
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
      accentColor: '#00e5ff'
    },
    {
      id: 'careerpilot',
      category: 'AI DOCUMENT PIPELINE',
      nextCategory: 'FULL-STACK INTELLIGENCE',
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
      accentColor: '#818cf8'
    },
    {
      id: 'what2cook',
      category: 'FULL-STACK INTELLIGENCE',
      nextCategory: 'GENERATIVE AI STREAMING',
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
      accentColor: '#10b981'
    },
    {
      id: 'craftly',
      category: 'GENERATIVE AI STREAMING',
      nextCategory: 'REAL-TIME DISTRIBUTED SYSTEMS',
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
      accentColor: '#ec4899'
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
    <section className="purrweb-exact-work-stage">
      {/* =========================================================================
          BACKGROUND VIBRANT GRADIENT MESH
          Turquoise/cyan, violet, magenta aura matching the Purrweb Work screenshot
          ========================================================================= */}
      <div className="work-atmosphere" aria-hidden="true">
        <div className="work-glow glow-cyan-teal" />
        <div className="work-glow glow-amber-warm" />
        <div className="work-glow glow-magenta" />
        <div className="work-grain" />
      </div>

      {/* =========================================================================
          MAIN WORK STAGE CONTAINER
          Two Column Layout:
          Left: Bold Editorial Headline Statement ("I am Chesta Solanki...")
          Right: Stacked Project Cards Deck with Illustration
          ========================================================================= */}
      <div className="work-content-container">
        
        {/* Left Column: Personal Statement & Domain */}
        <motion.div
          className="work-left-editorial"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="work-editorial-statement">
            I am Chesta Solanki,<br />
            crafting{' '}
            <span className="rotating-word-slot" style={{ display: 'inline-block', position: 'relative' }}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIndex}
                  initial={{ opacity: 0, y: 12, filter: 'blur(3px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -12, filter: 'blur(3px)' }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  className="work-cyan-accent"
                  style={{ display: 'inline-block' }}
                >
                  {introWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span><br />
            digital experiences<br />
            at the intersection<br />
            of AI &amp; engineering.
          </h2>

          <div className="work-meta-domain">
            <div className="domain-line">FULL-STACK &amp; AI / CLOUD /</div>
            <div className="domain-line">DISTRIBUTED SYSTEMS</div>
          </div>
        </motion.div>

        {/* Right Column: Stacked Project Cards Deck */}
        <motion.div
          className="work-right-deck"
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
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
              {/* Card Header: Category + Divider Line + Next Category + Arrow Button */}
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
                  title={currentProject.live && currentProject.live !== currentProject.github ? `Open ${currentProject.title} Live App` : "View Source on GitHub"}
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
                      <span>Visit Live Platform</span>
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
                  {currentProject.live && currentProject.live !== currentProject.github && (
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
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Minimal Project Transition Indicator Dots */}
          <div className="deck-dots-indicator">
            {projects.map((proj, idx) => {
              const isActive = activeSlide === idx;
              return (
                <button
                  key={proj.id}
                  onClick={() => setActiveSlide(idx)}
                  className={`deck-dot ${isActive ? 'is-active' : ''}`}
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

    </section>
  );
}
