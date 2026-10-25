import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, Pause, ExternalLink, Code2, Sparkles, Terminal } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const progressRef = useRef(null);
  const SLIDE_DURATION = 6500; // 6.5s per slide

  const projects = [
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
      live: 'https://github.com/chestasolanki/CareerPilot',
      accentColor: '#00e5ff',
      illustrationType: 'pipeline'
    },
    {
      id: 'prepai',
      category: 'FULL-STACK INTELLIGENCE',
      nextCategory: 'GENERATIVE AI STREAMING',
      title: 'PrepAI',
      tagline: 'Interactive Full-Stack AI Mock Interviewer',
      domain: 'REACT / NODE / MYSQL / APIS',
      description:
        'Full-stack AI mock interview application with dynamic technical question generation, real-time candidate evaluation algorithms, analytics dashboards, and normalized relational schema on MySQL.',
      stack: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'REST APIs', 'Tailwind CSS'],
      github: 'https://github.com/chestasolanki/prep-ai',
      live: 'https://github.com/chestasolanki/prep-ai',
      accentColor: '#e5a93c',
      illustrationType: 'analytics'
    },
    {
      id: 'craftly',
      category: 'GENERATIVE AI STREAMING',
      nextCategory: 'AI DOCUMENT PIPELINE',
      title: 'Craftly',
      tagline: 'Prompt-to-Website Engine via Real-Time LLM',
      domain: 'GROQ API / LLAMA 3.3 / SSE',
      description:
        'Transforms natural language prompts into live, functional multi-file web applications using Llama 3.3 70B via Groq API. Leverages Server-Sent Events (SSE) for instant, streaming code execution.',
      stack: ['Groq API', 'Llama 3.3 70B', 'SSE Streaming', 'Node.js', 'Express', 'HTML/CSS/JS'],
      github: 'https://github.com/chestasolanki/craftly',
      live: 'https://github.com/chestasolanki/craftly',
      accentColor: '#ec4899',
      illustrationType: 'code'
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
    <section id="work" className="purrweb-exact-work-stage">
      
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
        <div className="work-left-editorial">
          <h2 className="work-editorial-statement">
            I am Chesta Solanki,<br />
            i engineer <span className="work-cyan-accent">intelligent</span><br />
            yet resilient &amp; high<br />
            performance systems for<br />
            the cloud, AI and web
          </h2>

          <div className="work-meta-domain">
            <div className="domain-line">FULL-STACK &amp; AI / CLOUD /</div>
            <div className="domain-line">DISTRIBUTED SYSTEMS</div>
          </div>
        </div>

        {/* Right Column: Stacked Project Cards Deck */}
        <div className="work-right-deck">
          
          {/* Peeking Background Card 1 (Top Stack) */}
          <div className="stack-card card-back-1">
            <div className="stack-card-title">
              <span>GENERATIVE AI STREAMING</span>
            </div>
          </div>

          {/* Peeking Background Card 2 (Middle Stack) */}
          <div className="stack-card card-back-2">
            <div className="stack-card-title">
              <span>FULL-STACK INTELLIGENCE</span>
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
                  href={currentProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="card-arrow-circle-btn"
                  title="View Source on GitHub"
                >
                  <ArrowRight size={18} />
                </a>
              </div>

              {/* Card Body: Stylized Architectural Illustration */}
              <div className="card-illustration-frame">
                {currentProject.illustrationType === 'pipeline' && (
                  <svg className="project-svg-art" viewBox="0 0 540 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Stylized Artisan Drawing Matching Purrweb Illustration Vibe */}
                    {/* Dark Canvas & Warm Golden Hand / Nodes */}
                    <g transform="translate(40, 20)">
                      {/* Architectural Blueprint Grids */}
                      <path d="M20 260 L480 260" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" strokeDasharray="4 4" />
                      <path d="M20 180 L480 180" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
                      
                      {/* Stylized Golden Artisan Hand holding Stylus / Code Beam */}
                      <path
                        d="M60 260 C60 210, 80 160, 110 130 C125 115, 150 110, 160 130 C170 150, 160 180, 150 200 L120 260 Z"
                        fill="#e5a93c"
                      />
                      <path
                        d="M110 130 C120 90, 140 60, 160 50 C175 40, 195 55, 185 80 L160 130 Z"
                        fill="#e5a93c"
                      />
                      <path
                        d="M150 80 L230 40 L245 55 L165 95 Z"
                        fill="#ffffff"
                        stroke="#07090e"
                        strokeWidth="2"
                      />
                      {/* Stylus Nib */}
                      <polygon points="245,55 270,42 258,68" fill="#00e5ff" />

                      {/* Glowing Cyan Document / Intelligence Terminal Basket */}
                      <g transform="translate(260, 50)">
                        <rect x="0" y="0" width="190" height="180" rx="14" fill="#07090e" stroke="#00e5ff" strokeWidth="2.5" />
                        <circle cx="28" cy="28" r="8" fill="#e5a93c" />
                        <line x1="48" y1="28" x2="160" y2="28" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                        <line x1="28" y1="56" x2="160" y2="56" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" />
                        <line x1="28" y1="80" x2="140" y2="80" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" />
                        <line x1="28" y1="104" x2="150" y2="104" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" />

                        {/* Animated Neural Flow Arc */}
                        <path
                          d="M28 138 Q95 110 162 142"
                          stroke="#00e5ff"
                          strokeWidth="2.5"
                          fill="none"
                        />
                        <circle cx="95" cy="124" r="5" fill="#ffffff" />
                      </g>
                    </g>
                  </svg>
                )}

                {currentProject.illustrationType === 'analytics' && (
                  <svg className="project-svg-art" viewBox="0 0 540 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(40, 20)">
                      {/* Analytics Mesh Grid */}
                      <rect x="20" y="30" width="440" height="220" rx="16" fill="#07090e" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                      
                      {/* Golden Waveform Pulse */}
                      <path
                        d="M40 150 Q100 80 160 160 T280 120 T380 180 T440 130"
                        stroke="#e5a93c"
                        strokeWidth="3.5"
                        fill="none"
                      />

                      {/* Cyan Target Radar Circle */}
                      <circle cx="280" cy="120" r="38" stroke="#00e5ff" strokeWidth="2" strokeDasharray="5 5" />
                      <circle cx="280" cy="120" r="14" fill="#00e5ff" fillOpacity="0.25" stroke="#00e5ff" strokeWidth="2" />
                      <circle cx="280" cy="120" r="4" fill="#ffffff" />

                      {/* Live Interview Metric Indicators */}
                      <rect x="50" y="55" width="100" height="24" rx="12" fill="rgba(229, 169, 60, 0.15)" stroke="#e5a93c" strokeWidth="1" />
                      <text x="65" y="71" fill="#e5a93c" fontSize="11" fontFamily="monospace" fontWeight="bold">SCORE 94%</text>

                      <rect x="170" y="55" width="110" height="24" rx="12" fill="rgba(0, 229, 255, 0.15)" stroke="#00e5ff" strokeWidth="1" />
                      <text x="183" y="71" fill="#00e5ff" fontSize="11" fontFamily="monospace" fontWeight="bold">MYSQL 200 OK</text>
                    </g>
                  </svg>
                )}

                {currentProject.illustrationType === 'code' && (
                  <svg className="project-svg-art" viewBox="0 0 540 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(40, 20)">
                      <rect x="20" y="20" width="440" height="230" rx="16" fill="#07090e" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                      
                      {/* Code Brackets in Golden Ochre */}
                      <text x="50" y="90" fill="#e5a93c" fontSize="48" fontFamily="monospace" fontWeight="bold">&lt;/&gt;</text>

                      {/* Streaming SSE Wave */}
                      <path
                        d="M170 80 C230 40, 270 130, 340 85 C390 50, 410 110, 440 90"
                        stroke="#ec4899"
                        strokeWidth="3.5"
                        fill="none"
                      />

                      {/* Synthesized Live DOM Window */}
                      <g transform="translate(160, 110)">
                        <rect x="0" y="0" width="280" height="120" rx="10" fill="#0a0f1d" stroke="#00e5ff" strokeWidth="2" />
                        <line x1="20" y1="30" x2="160" y2="30" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                        <line x1="20" y1="55" x2="220" y2="55" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" />
                        <line x1="20" y1="78" x2="190" y2="78" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" />
                        <circle cx="240" cy="30" r="6" fill="#10b981" />
                      </g>
                    </g>
                  </svg>
                )}
              </div>

              {/* Card Meta & Links Footer */}
              <div className="card-info-footer">
                <div className="info-title-group">
                  <h4 className="info-title">{currentProject.title}</h4>
                  <p className="info-desc">{currentProject.description}</p>
                </div>

                <div className="info-actions">
                  <a
                    href={currentProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="info-action-btn"
                  >
                    <GithubIcon size={14} />
                    <span>Source Code</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>

      </div>

      {/* =========================================================================
          BOTTOM PLAYER CONTROLS
          Play/Pause Button + Pink/Magenta Glowing Progress Bar + Dots
          Matching the exact playback bar in the Purrweb Dribbble reference
          ========================================================================= */}
      <div className="work-player-bar">
        
        {/* Play / Pause Toggle Button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="player-play-btn"
          aria-label={isPlaying ? 'Pause auto slide' : 'Play auto slide'}
        >
          {isPlaying ? <Pause size={18} fill="#07090e" /> : <Play size={18} fill="#07090e" style={{ marginLeft: '2px' }} />}
        </button>

        {/* Long Progress Bar Track with Magenta Gradient Glow */}
        <div className="player-track-container">
          <div className="player-track-bg">
            <motion.div
              key={`${activeSlide}-${isPlaying}`}
              initial={{ width: '0%' }}
              animate={{ width: isPlaying ? '100%' : '100%' }}
              transition={{ duration: isPlaying ? SLIDE_DURATION / 1000 : 0, ease: 'linear' }}
              className="player-track-progress"
            />
          </div>

          {/* 3 Pagination Indicator Dots */}
          <div className="player-dots-group">
            {projects.map((proj, idx) => {
              const isActive = activeSlide === idx;
              return (
                <button
                  key={proj.id}
                  onClick={() => setActiveSlide(idx)}
                  className={`player-dot-btn ${isActive ? 'is-active' : ''}`}
                  aria-label={`Jump to slide ${idx + 1}`}
                >
                  <span className="dot-inner" />
                </button>
              );
            })}
          </div>
        </div>

      </div>

    </section>
  );
}
