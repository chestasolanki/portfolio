import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, Code2, Sparkles, Terminal } from 'lucide-react';
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
      live: 'https://github.com/chestasolanki/CodeMesh',
      accentColor: '#00e5ff',
      illustrationType: 'codemesh'
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
      live: 'https://github.com/chestasolanki/CareerPilot',
      accentColor: '#00e5ff',
      illustrationType: 'pipeline'
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
      live: 'https://what2-cook-sage.vercel.app',
      accentColor: '#10b981',
      illustrationType: 'what2cook'
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
        <div className="work-left-editorial">
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
        </div>

        {/* Right Column: Stacked Project Cards Deck */}
        <div
          className="work-right-deck"
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

              {/* Card Body: Stylized Architectural Illustration */}
              <div className="card-illustration-frame">
                
                {/* CodeMesh: Real-Time Collaborative Editor & Compiler Architecture */}
                {currentProject.illustrationType === 'codemesh' && (
                  <svg className="project-svg-art" viewBox="0 0 540 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(30, 16)">
                      {/* Editor Frame */}
                      <rect x="10" y="10" width="460" height="258" rx="16" fill="#07090e" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" />
                      
                      {/* Header bar of Editor with Collaborative Avatars */}
                      <line x1="10" y1="46" x2="470" y2="46" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                      <circle cx="30" cy="28" r="4.5" fill="#ef4444" />
                      <circle cx="44" cy="28" r="4.5" fill="#f59e0b" />
                      <circle cx="58" cy="28" r="4.5" fill="#10b981" />
                      <text x="78" y="32" fill="rgba(255,255,255,0.6)" fontSize="11" fontFamily="monospace" fontWeight="600">main.cpp — Yjs Shared Array CRDT</text>

                      {/* Live Presence Avatars in Top Right */}
                      <circle cx="410" cy="28" r="10" fill="#e5a93c" />
                      <text x="404" y="32" fill="#000000" fontSize="9" fontWeight="bold" fontFamily="sans-serif">CS</text>
                      <circle cx="430" cy="28" r="10" fill="#00e5ff" />
                      <text x="424" y="32" fill="#000000" fontSize="9" fontWeight="bold" fontFamily="sans-serif">P2</text>

                      {/* Editor Line Numbers & Code Lines */}
                      <g opacity="0.4" fontFamily="monospace" fontSize="10.5" fill="#64748b">
                        <text x="24" y="74">01</text>
                        <text x="24" y="96">02</text>
                        <text x="24" y="118">03</text>
                        <text x="24" y="140">04</text>
                        <text x="24" y="162">05</text>
                        <text x="24" y="184">06</text>
                      </g>
                      <line x1="44" y1="58" x2="44" y2="200" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

                      {/* C++ Code Representation with Syntax Colors */}
                      <g fontFamily="monospace" fontSize="11.5">
                        <text x="56" y="74" fill="#ec4899">#include</text>
                        <text x="116" y="74" fill="#4ade80">&lt;iostream&gt;</text>
                        <text x="195" y="74" fill="#ec4899">#include</text>
                        <text x="255" y="74" fill="#4ade80">&lt;vector&gt;</text>

                        <text x="56" y="96" fill="#00e5ff">using namespace</text>
                        <text x="160" y="96" fill="#ffffff">std;</text>

                        <text x="56" y="118" fill="#ec4899">int</text>
                        <text x="84" y="118" fill="#e5a93c">main()</text>
                        <text x="130" y="118" fill="#ffffff">&#123;</text>

                        {/* Live Multiplayer Cursor 1 (Chesta - Golden) */}
                        <text x="72" y="140" fill="#ffffff">cout &lt;&lt; </text>
                        <text x="130" y="140" fill="#4ade80">"CodeMesh Sync OK\n"</text>
                        <text x="280" y="140" fill="#ffffff">;</text>
                        <rect x="290" y="128" width="2" height="15" fill="#e5a93c" />
                        <rect x="282" y="116" width="34" height="13" rx="3" fill="#e5a93c" />
                        <text x="286" y="125" fill="#000" fontSize="7.5" fontWeight="bold">CHESTA</text>

                        {/* Live Multiplayer Cursor 2 (Peer - Cyan) */}
                        <text x="72" y="162" fill="#ec4899">return</text>
                        <text x="120" y="162" fill="#38bdf8">0</text>
                        <text x="130" y="162" fill="#ffffff">;</text>
                        <rect x="138" y="150" width="2" height="15" fill="#00e5ff" />
                        <rect x="130" y="138" width="26" height="13" rx="3" fill="#00e5ff" />
                        <text x="134" y="147" fill="#000" fontSize="7.5" fontWeight="bold">PEER</text>

                        <text x="56" y="184" fill="#ffffff">&#125;</text>
                      </g>

                      {/* Execution Output & CRDT Chips */}
                      <rect x="24" y="215" width="225" height="28" rx="8" fill="#0c1220" stroke="rgba(0,229,255,0.3)" strokeWidth="1" />
                      <circle cx="38" cy="229" r="3.5" fill="#10b981" />
                      <text x="48" y="233" fill="#00e5ff" fontSize="10" fontFamily="monospace">g++ compiled in 38ms • Docker</text>

                      <rect x="260" y="215" width="195" height="28" rx="8" fill="#0c1220" stroke="rgba(229,169,60,0.3)" strokeWidth="1" />
                      <circle cx="274" cy="229" r="3.5" fill="#e5a93c" />
                      <text x="284" y="233" fill="#e5a93c" fontSize="10" fontFamily="monospace">Yjs CRDT 0-Conflict</text>
                    </g>
                  </svg>
                )}

                {currentProject.illustrationType === 'pipeline' && (
                  <svg className="project-svg-art" viewBox="0 0 540 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(40, 20)">
                      <path d="M20 260 L480 260" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" strokeDasharray="4 4" />
                      <path d="M20 180 L480 180" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
                      
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
                      <polygon points="245,55 270,42 258,68" fill="#00e5ff" />

                      <g transform="translate(260, 50)">
                        <rect x="0" y="0" width="190" height="180" rx="14" fill="#07090e" stroke="#00e5ff" strokeWidth="2.5" />
                        <circle cx="28" cy="28" r="8" fill="#e5a93c" />
                        <line x1="48" y1="28" x2="160" y2="28" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                        <line x1="28" y1="56" x2="160" y2="56" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" />
                        <line x1="28" y1="80" x2="140" y2="80" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" />
                        <line x1="28" y1="104" x2="150" y2="104" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" />

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

                {currentProject.illustrationType === 'what2cook' && (
                  <svg className="project-svg-art" viewBox="0 0 540 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="w2c-header-grad" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="50%" stopColor="#00e5ff" />
                        <stop offset="100%" stopColor="#f59e0b" />
                      </linearGradient>
                    </defs>
                    <g transform="translate(30, 16)">
                      {/* Outer Window Frame */}
                      <rect x="10" y="10" width="460" height="258" rx="16" fill="#07090e" stroke="rgba(255,255,255,0.16)" strokeWidth="1.5" />
                      
                      {/* Browser Header Bar */}
                      <line x1="10" y1="44" x2="470" y2="44" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                      <circle cx="28" cy="27" r="4" fill="#ef4444" />
                      <circle cx="42" cy="27" r="4" fill="#f59e0b" />
                      <circle cx="56" cy="27" r="4" fill="#10b981" />
                      
                      {/* App URL pill */}
                      <rect x="76" y="18" width="220" height="18" rx="9" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                      <text x="88" y="31" fill="#10b981" fontSize="9.5" fontFamily="monospace" fontWeight="600">what2-cook-sage.vercel.app</text>
                      
                      {/* AI Status pill */}
                      <rect x="332" y="18" width="128" height="18" rx="9" fill="rgba(16,185,129,0.12)" stroke="rgba(16,185,129,0.35)" strokeWidth="1" />
                      <circle cx="344" cy="27" r="3.5" fill="#10b981" />
                      <text x="354" y="31" fill="#10b981" fontSize="9" fontFamily="monospace" fontWeight="bold">GEMINI RECIPE ENGINE</text>

                      {/* Left Column: Detected Pantry Ingredients */}
                      <g transform="translate(18, 52)">
                        <text x="4" y="12" fill="rgba(255,255,255,0.5)" fontSize="9" fontFamily="monospace" letterSpacing="0.08em" fontWeight="bold">
                          PANTRY INGREDIENTS DETECTED
                        </text>

                        {/* Row 1 chips */}
                        <g transform="translate(4, 22)">
                          <rect x="0" y="0" width="86" height="24" rx="12" fill="#0d1b15" stroke="rgba(16,185,129,0.4)" strokeWidth="1" />
                          <circle cx="12" cy="12" r="4" fill="#10b981" />
                          <text x="22" y="15.5" fill="#4ade80" fontSize="10" fontFamily="sans-serif" fontWeight="600">Avocado</text>

                          <rect x="94" y="0" width="82" height="24" rx="12" fill="#1b120f" stroke="rgba(239,68,68,0.35)" strokeWidth="1" />
                          <circle cx="106" cy="12" r="4" fill="#ef4444" />
                          <text x="116" y="15.5" fill="#f87171" fontSize="10" fontFamily="sans-serif" fontWeight="600">Tomato</text>
                        </g>

                        {/* Row 2 chips */}
                        <g transform="translate(4, 52)">
                          <rect x="0" y="0" width="76" height="24" rx="12" fill="#0d1b15" stroke="rgba(16,185,129,0.4)" strokeWidth="1" />
                          <circle cx="12" cy="12" r="4" fill="#10b981" />
                          <text x="22" y="15.5" fill="#4ade80" fontSize="10" fontFamily="sans-serif" fontWeight="600">Basil</text>

                          <rect x="84" y="0" width="76" height="24" rx="12" fill="#1b180d" stroke="rgba(245,158,11,0.35)" strokeWidth="1" />
                          <circle cx="96" cy="12" r="4" fill="#f59e0b" />
                          <text x="106" y="15.5" fill="#fcd34d" fontSize="10" fontFamily="sans-serif" fontWeight="600">Garlic</text>
                        </g>

                        {/* Row 3 chips */}
                        <g transform="translate(4, 82)">
                          <rect x="0" y="0" width="88" height="24" rx="12" fill="#1a1809" stroke="rgba(234,179,8,0.35)" strokeWidth="1" />
                          <circle cx="12" cy="12" r="4" fill="#eab308" />
                          <text x="22" y="15.5" fill="#fde047" fontSize="10" fontFamily="sans-serif" fontWeight="600">Olive Oil</text>

                          <rect x="96" y="0" width="78" height="24" rx="12" fill="#1a1410" stroke="rgba(251,146,60,0.35)" strokeWidth="1" />
                          <circle cx="108" cy="12" r="4" fill="#fb923c" />
                          <text x="118" y="15.5" fill="#fdba74" fontSize="10" fontFamily="sans-serif" fontWeight="600">Pasta</text>
                        </g>

                        {/* AI Synthesis Flow Pill */}
                        <g transform="translate(4, 116)">
                          <rect x="0" y="0" width="180" height="32" rx="8" fill="#0d1424" stroke="rgba(0,229,255,0.35)" strokeWidth="1" />
                          <text x="12" y="20" fill="#00e5ff" fontSize="9.5" fontFamily="monospace">Gemini AI • Recipe Synthesis</text>
                          <circle cx="166" cy="16" r="3.5" fill="#00e5ff" />
                        </g>

                        {/* Dietary Filter Tags */}
                        <g transform="translate(4, 158)">
                          <rect x="0" y="0" width="82" height="22" rx="6" fill="rgba(16,185,129,0.12)" stroke="rgba(16,185,129,0.3)" strokeWidth="1" />
                          <text x="8" y="15" fill="#10b981" fontSize="9" fontFamily="monospace" fontWeight="bold">VEGETARIAN</text>

                          <rect x="90" y="0" width="76" height="22" rx="6" fill="rgba(245,158,11,0.12)" stroke="rgba(245,158,11,0.3)" strokeWidth="1" />
                          <text x="98" y="15" fill="#f59e0b" fontSize="9" fontFamily="monospace" fontWeight="bold">20-MIN MEAL</text>
                        </g>
                      </g>

                      {/* Vertical Divider */}
                      <line x1="216" y1="52" x2="216" y2="252" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="3 3" />

                      {/* Right Column: High-Tech Recipe Card */}
                      <g transform="translate(228, 52)">
                        {/* Recipe Card Frame */}
                        <rect x="0" y="0" width="222" height="198" rx="12" fill="#0b101d" stroke="rgba(16,185,129,0.35)" strokeWidth="1.2" />
                        
                        {/* Header Gradient Stripe */}
                        <rect x="0" y="0" width="222" height="4" rx="2" fill="url(#w2c-header-grad)" />

                        {/* Recipe Title & Subtitle */}
                        <text x="14" y="24" fill="#ffffff" fontSize="12" fontFamily="sans-serif" fontWeight="bold">Creamy Avocado Basil Pasta</text>
                        <text x="14" y="38" fill="rgba(255,255,255,0.5)" fontSize="9" fontFamily="sans-serif">Mediterranean Fusion • 4 Servings</text>

                        {/* Nutritional & Time Metrics Pills */}
                        <g transform="translate(14, 48)">
                          <rect x="0" y="0" width="56" height="18" rx="5" fill="rgba(245,158,11,0.15)" stroke="rgba(245,158,11,0.35)" strokeWidth="1" />
                          <text x="6" y="12.5" fill="#f59e0b" fontSize="8.5" fontFamily="monospace" fontWeight="bold">⏱ 15 MIN</text>

                          <rect x="62" y="0" width="66" height="18" rx="5" fill="rgba(236,72,153,0.15)" stroke="rgba(236,72,153,0.35)" strokeWidth="1" />
                          <text x="68" y="12.5" fill="#ec4899" fontSize="8.5" fontFamily="monospace" fontWeight="bold">⚡ 410 KCAL</text>

                          <rect x="134" y="0" width="58" height="18" rx="5" fill="rgba(16,185,129,0.15)" stroke="rgba(16,185,129,0.35)" strokeWidth="1" />
                          <text x="144" y="12.5" fill="#10b981" fontSize="8.5" fontFamily="monospace" fontWeight="bold">EASY</text>
                        </g>

                        {/* Recipe Step Breakdown */}
                        <g transform="translate(14, 78)">
                          {/* Step 1 */}
                          <g transform="translate(0, 0)">
                            <circle cx="8" cy="8" r="7" fill="rgba(16,185,129,0.2)" stroke="#10b981" strokeWidth="1" />
                            <text x="5.5" y="11" fill="#10b981" fontSize="8" fontFamily="monospace" fontWeight="bold">1</text>
                            <text x="22" y="11" fill="rgba(255,255,255,0.85)" fontSize="9" fontFamily="sans-serif">Blend avocado, basil, olive oil & garlic</text>
                          </g>

                          {/* Step 2 */}
                          <g transform="translate(0, 26)">
                            <circle cx="8" cy="8" r="7" fill="rgba(0,229,255,0.2)" stroke="#00e5ff" strokeWidth="1" />
                            <text x="5.5" y="11" fill="#00e5ff" fontSize="8" fontFamily="monospace" fontWeight="bold">2</text>
                            <text x="22" y="11" fill="rgba(255,255,255,0.85)" fontSize="9" fontFamily="sans-serif">Boil pasta al dente in salted water</text>
                          </g>

                          {/* Step 3 */}
                          <g transform="translate(0, 52)">
                            <circle cx="8" cy="8" r="7" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" strokeWidth="1" />
                            <text x="5.5" y="11" fill="#f59e0b" fontSize="8" fontFamily="monospace" fontWeight="bold">3</text>
                            <text x="22" y="11" fill="rgba(255,255,255,0.85)" fontSize="9" fontFamily="sans-serif">Toss pasta in sauce & top with diced tomato</text>
                          </g>
                        </g>

                        {/* AI Match Badge Footer */}
                        <g transform="translate(14, 160)">
                          <rect x="0" y="0" width="194" height="24" rx="6" fill="rgba(16,185,129,0.12)" stroke="rgba(16,185,129,0.3)" strokeWidth="1" />
                          <circle cx="12" cy="12" r="3.5" fill="#10b981" />
                          <text x="22" y="16" fill="#10b981" fontSize="9" fontFamily="monospace" fontWeight="bold">99.4% INGREDIENT MATCH • ZERO WASTE</text>
                        </g>
                      </g>
                    </g>
                  </svg>
                )}

                {currentProject.illustrationType === 'code' && (
                  <svg className="project-svg-art" viewBox="0 0 540 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(40, 20)">
                      <rect x="20" y="20" width="440" height="230" rx="16" fill="#07090e" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                      
                      <text x="50" y="90" fill="#e5a93c" fontSize="48" fontFamily="monospace" fontWeight="bold">&lt;/&gt;</text>

                      <path
                        d="M170 80 C230 40, 270 130, 340 85 C390 50, 410 110, 440 90"
                        stroke="#ec4899"
                        strokeWidth="3.5"
                        fill="none"
                      />

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

        </div>

      </div>

    </section>
  );
}
