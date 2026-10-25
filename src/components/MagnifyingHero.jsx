import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, ArrowDown, Sparkles, Terminal, FileText, ExternalLink, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function MagnifyingHero({ onOpenResume }) {
  const containerRef = useRef(null);
  const lensRef = useRef(null);
  const zoomContentRef = useRef(null);
  const touchHintRef = useRef(null);

  // Magnification configuration
  const LENS_DIAMETER = 220;
  const LENS_RADIUS = LENS_DIAMETER / 2;
  const ZOOM_SCALE = 1.9;

  // Pointer position & physics state using refs for zero React re-render lag
  const mousePos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const isHovered = useRef(false);
  const isInteracting = useRef(false);
  const animFrameId = useRef(null);
  const ambientAngle = useRef(0);

  const [containerSize, setContainerSize] = useState({ width: 1200, height: 800 });
  const [activeInspectTag, setActiveInspectTag] = useState('React 19 • AI Engine');

  // Measure container dimensions
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setContainerSize({ width: rect.width, height: rect.height });
        // Set initial lens position to right of headline if uninitialized
        if (currentPos.current.x === 0 && currentPos.current.y === 0) {
          const initX = Math.min(rect.width * 0.68, rect.width - LENS_RADIUS - 40);
          const initY = Math.max(rect.height * 0.42, LENS_RADIUS + 40);
          mousePos.current = { x: initX, y: initY };
          currentPos.current = { x: initX, y: initY };
        }
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Butter-smooth physics loop (RAF) - ZERO React re-renders during pointer tracking
  useEffect(() => {
    const loop = () => {
      // If user is not interacting, gently float in an ambient breathing orbit
      if (!isHovered.current && !isInteracting.current && containerRef.current) {
        ambientAngle.current += 0.015;
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.width * 0.65;
        const centerY = rect.height * 0.46;
        const radiusX = Math.min(80, rect.width * 0.1);
        const radiusY = 35;
        mousePos.current.x = centerX + Math.cos(ambientAngle.current) * radiusX;
        mousePos.current.y = centerY + Math.sin(ambientAngle.current * 1.5) * radiusY;
      }

      // Smooth lerp damping physics (0.15 factor = snappy yet silky)
      currentPos.current.x += (mousePos.current.x - currentPos.current.x) * 0.16;
      currentPos.current.y += (mousePos.current.y - currentPos.current.y) * 0.16;

      const lx = currentPos.current.x;
      const ly = currentPos.current.y;

      if (lensRef.current && zoomContentRef.current) {
        // Position physical lens
        lensRef.current.style.transform = `translate3d(${lx - LENS_RADIUS}px, ${ly - LENS_RADIUS}px, 0)`;

        // Position magnified clone content to precisely match lens center
        const tx = -lx * ZOOM_SCALE + LENS_RADIUS;
        const ty = -ly * ZOOM_SCALE + LENS_RADIUS;
        zoomContentRef.current.style.transform = `translate3d(${tx}px, ${ty}px, 0) scale(${ZOOM_SCALE})`;
      }

      animFrameId.current = requestAnimationFrame(loop);
    };

    animFrameId.current = requestAnimationFrame(loop);
    return () => {
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [containerSize]);

  // Pointer move handler with bounds constraint
  const handlePointerMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(LENS_RADIUS, Math.min(e.clientX - rect.left, rect.width - LENS_RADIUS));
    const y = Math.max(LENS_RADIUS, Math.min(e.clientY - rect.top, rect.height - LENS_RADIUS));
    mousePos.current = { x, y };
    isHovered.current = true;
    isInteracting.current = true;

    if (touchHintRef.current) {
      touchHintRef.current.style.opacity = '0';
    }
  };

  const handlePointerLeave = () => {
    isHovered.current = false;
    isInteracting.current = false;
  };

  const phrases = [
    'Building Scalable Web Products',
    'AI Workflows & LLM Integrations',
    'High-Performance UI Architectures',
    'Full-Stack JavaScript & Systems'
  ];
  const [phraseIdx, setPhraseIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIdx((prev) => (prev + 1) % phrases.length);
    }, 3800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="purrweb-hero-stage"
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        background: 'var(--bg-main)',
        padding: '140px 5vw 90px 5vw',
        cursor: 'default'
      }}
    >
      {/* =========================================================================
          PURRWEB SIGNATURE VIBRANT MESH GRADIENT AURA
          Multi-stop organic fluid mesh gradient blooming across the canvas
          ========================================================================= */}
      <div className="purrweb-mesh-container" aria-hidden="true">
        <div className="purrweb-blob blob-violet" />
        <div className="purrweb-blob blob-pink" />
        <div className="purrweb-blob blob-coral" />
        <div className="purrweb-blob blob-cyan" />
        <div className="purrweb-blob blob-indigo" />
        <div className="purrweb-noise-overlay" />
      </div>

      {/* =========================================================================
          BASE LAYER: Main Visual Content (Rendered normally)
          ========================================================================= */}
      <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '1320px', margin: '0 auto' }}>
        <div className="purrweb-hero-grid">
          
          {/* Main Editorial Headline & Introduction */}
          <div className="purrweb-hero-content">
            
            {/* Status Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ marginBottom: '28px' }}
            >
              <div className="purrweb-badge">
                <span className="purrweb-pulse-dot" />
                <span className="purrweb-badge-text">AVAILABLE FOR OPPORTUNITIES</span>
                <span className="purrweb-badge-sub">2026</span>
              </div>
            </motion.div>

            {/* Giant Purrweb Typography */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="purrweb-headline">
                <span className="purrweb-headline-line">
                  Creative <span className="purrweb-serif-accent">Engineer</span>
                </span>
                <span className="purrweb-headline-line purrweb-gradient-text">
                  &amp; Full-Stack Dev
                </span>
              </h1>
            </motion.div>

            {/* Role & Name Subheading */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                marginTop: '16px',
                marginBottom: '24px',
                flexWrap: 'wrap'
              }}
            >
              <div className="purrweb-name-tag">
                <span className="purrweb-name-label">CHESTA SOLANKI</span>
              </div>
              <div className="purrweb-ticker-pill">
                <Terminal size={13} style={{ color: 'var(--accent-coral)' }} />
                <span>{phrases[phraseIdx]}</span>
              </div>
            </motion.div>

            {/* Editorial Bio Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="purrweb-bio-paragraph"
            >
              Designing and engineering full-stack digital experiences with high visual polish,
              resilient distributed backends, and generative AI integrations. Founding developer at Limetta,
              Information Technology engineer at GL Bajaj, and passionate open-source builder.
            </motion.p>

            {/* Action Buttons Row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="purrweb-cta-row"
            >
              <a href="#projects" className="purrweb-btn-primary">
                <span>View Projects</span>
                <ArrowDown size={16} />
              </a>

              <button onClick={onOpenResume} className="purrweb-btn-secondary">
                <FileText size={16} />
                <span>Watch Resume</span>
                <ArrowUpRight size={14} />
              </button>

              <a href="#contact" className="purrweb-btn-ghost">
                <span>Get In Touch</span>
              </a>
            </motion.div>

            {/* High-Impact Stat Pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.55 }}
              className="purrweb-stats-strip"
            >
              <div className="purrweb-stat-item">
                <span className="stat-number">1+</span>
                <span className="stat-label">Yr Founding Dev (Limetta)</span>
              </div>
              <div className="stat-separator" />
              <div className="purrweb-stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">Production AI Platforms</span>
              </div>
              <div className="stat-separator" />
              <div className="purrweb-stat-item">
                <span className="stat-number">8.13</span>
                <span className="stat-label">CGPA • B.Tech IT</span>
              </div>
              <div className="stat-separator" />
              <div className="purrweb-stat-item">
                <span className="stat-number">5</span>
                <span className="stat-label">Verified Certifications</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Interactive Magnifier Feature Showcase Preview */}
          <div className="purrweb-hero-visual" aria-hidden="true">
            <div className="purrweb-interactive-card">
              <div className="card-top-bar">
                <div className="card-dots">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                </div>
                <div className="card-title-pill">
                  <Code2 size={12} />
                  <span>craft.config.ts</span>
                </div>
              </div>

              <div className="card-code-body">
                <div className="code-line"><span className="c-keyword">const</span> <span className="c-var">engineer</span> = &#123;</div>
                <div className="code-line indent"><span className="c-key">name</span>: <span className="c-str">'Chesta Solanki'</span>,</div>
                <div className="code-line indent"><span className="c-key">specialty</span>: <span className="c-str">'Full-Stack &amp; AI Systems'</span>,</div>
                <div className="code-line indent"><span className="c-key">coreStack</span>: [<span className="c-str">'React 19'</span>, <span className="c-str">'Node.js'</span>, <span className="c-str">'Express'</span>, <span className="c-str">'MongoDB'</span>],</div>
                <div className="code-line indent"><span className="c-key">aiEngine</span>: [<span className="c-str">'Groq Llama 3.3'</span>, <span className="c-str">'Gemini API'</span>, <span className="c-str">'SSE Streaming'</span>],</div>
                <div className="code-line indent"><span className="c-key">currentRole</span>: <span className="c-str">'Founding Product Dev @ Limetta'</span>,</div>
                <div className="code-line indent"><span className="c-key">passion</span>: <span className="c-str">'Interactive, high-craft web'</span>,</div>
                <div className="code-line">&#125;;</div>
              </div>

              <div className="card-footer-tags">
                <span className="tag-chip">⚡ 60fps Hardware Accelerated</span>
                <span className="tag-chip">🔍 Move pointer to inspect</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* =========================================================================
          PURRWEB SIGNATURE INTERACTIVE MAGNIFYING GLASS LENS OVERLAY
          Pointer-tracking circular glass lens with metallic brushed bezel,
          specular glint, 45-degree ergonomic handle, and real-time magnified viewport
          ========================================================================= */}
      <div
        ref={lensRef}
        className="purrweb-lens-rig"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: `${LENS_DIAMETER}px`,
          height: `${LENS_DIAMETER}px`,
          pointerEvents: 'none',
          zIndex: 40,
          willChange: 'transform'
        }}
      >
        {/* Physical 45-Degree Magnifying Glass Handle */}
        <div className="purrweb-lens-handle">
          <div className="handle-stem" />
          <div className="handle-grip" />
          <div className="handle-pommel" />
        </div>

        {/* Circular Glass Lens Container */}
        <div className="purrweb-lens-circle">
          {/* Glass Specular Reflection Highlight Arc */}
          <div className="purrweb-lens-glint" />

          {/* Precision Center Reticle / Crosshair */}
          <div className="purrweb-lens-reticle">
            <span className="reticle-h" />
            <span className="reticle-v" />
          </div>

          {/* Magnified Cloned Viewport Layer */}
          <div className="purrweb-lens-viewport">
            <div
              ref={zoomContentRef}
              className="purrweb-lens-clone"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: `${containerSize.width}px`,
                height: `${containerSize.height}px`,
                willChange: 'transform',
                transformOrigin: '0 0'
              }}
            >
              {/* Vibrant Gradient Background replicated inside lens */}
              <div className="purrweb-mesh-container" style={{ filter: 'blur(70px)', opacity: 0.95 }}>
                <div className="purrweb-blob blob-violet" />
                <div className="purrweb-blob blob-pink" />
                <div className="purrweb-blob blob-coral" />
                <div className="purrweb-blob blob-cyan" />
              </div>

              {/* Exact Replicated Content inside Magnified Scope */}
              <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '1320px', margin: '0 auto' }}>
                <div className="purrweb-hero-grid">
                  <div className="purrweb-hero-content">
                    
                    <div style={{ marginBottom: '28px' }}>
                      <div className="purrweb-badge" style={{ borderColor: 'var(--accent-coral)' }}>
                        <span className="purrweb-pulse-dot" style={{ background: 'var(--accent-coral)' }} />
                        <span className="purrweb-badge-text" style={{ color: 'var(--accent-coral)' }}>
                          INSPECTING CRAFT • 1.9X
                        </span>
                        <span className="purrweb-badge-sub">HIGH RESOLUTION</span>
                      </div>
                    </div>

                    <h1 className="purrweb-headline">
                      <span className="purrweb-headline-line">
                        Creative <span className="purrweb-serif-accent" style={{ color: 'var(--accent-pink)' }}>Engineer</span>
                      </span>
                      <span className="purrweb-headline-line purrweb-gradient-text">
                        &amp; Full-Stack Dev
                      </span>
                    </h1>

                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      marginTop: '16px',
                      marginBottom: '24px',
                      flexWrap: 'wrap'
                    }}>
                      <div className="purrweb-name-tag" style={{ background: 'rgba(236, 72, 153, 0.2)', borderColor: 'var(--accent-pink)' }}>
                        <span className="purrweb-name-label" style={{ color: '#ffffff' }}>CHESTA SOLANKI</span>
                      </div>
                      <div className="purrweb-ticker-pill" style={{ background: 'rgba(6, 182, 212, 0.2)', borderColor: 'var(--accent-cyan)' }}>
                        <Terminal size={13} style={{ color: 'var(--accent-cyan)' }} />
                        <span style={{ color: 'var(--accent-cyan)' }}>{phrases[phraseIdx]}</span>
                      </div>
                    </div>

                    <p className="purrweb-bio-paragraph" style={{ color: '#ffffff', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
                      Designing and engineering full-stack digital experiences with high visual polish,
                      resilient distributed backends, and generative AI integrations. Founding developer at Limetta,
                      Information Technology engineer at GL Bajaj, and passionate open-source builder.
                    </p>

                    <div className="purrweb-cta-row">
                      <div className="purrweb-btn-primary" style={{ background: 'var(--gradient-purrweb)' }}>
                        <span>View Projects</span>
                        <ArrowDown size={16} />
                      </div>
                      <div className="purrweb-btn-secondary">
                        <FileText size={16} />
                        <span>Watch Resume</span>
                        <ArrowUpRight size={14} />
                      </div>
                    </div>

                    <div className="purrweb-stats-strip">
                      <div className="purrweb-stat-item">
                        <span className="stat-number" style={{ color: 'var(--accent-pink)' }}>1+</span>
                        <span className="stat-label">Yr Founding Dev</span>
                      </div>
                      <div className="stat-separator" />
                      <div className="purrweb-stat-item">
                        <span className="stat-number" style={{ color: 'var(--accent-cyan)' }}>3+</span>
                        <span className="stat-label">AI Platforms</span>
                      </div>
                      <div className="stat-separator" />
                      <div className="purrweb-stat-item">
                        <span className="stat-number" style={{ color: 'var(--accent-coral)' }}>8.13</span>
                        <span className="stat-label">CGPA IT</span>
                      </div>
                    </div>

                  </div>

                  <div className="purrweb-hero-visual">
                    <div className="purrweb-interactive-card" style={{ borderColor: 'var(--accent-violet)' }}>
                      <div className="card-top-bar">
                        <div className="card-dots">
                          <span className="dot dot-red" />
                          <span className="dot dot-yellow" />
                          <span className="dot dot-green" />
                        </div>
                        <div className="card-title-pill">
                          <Code2 size={12} />
                          <span>craft.config.ts</span>
                        </div>
                      </div>
                      <div className="card-code-body">
                        <div className="code-line"><span className="c-keyword">const</span> <span className="c-var">engineer</span> = &#123;</div>
                        <div className="code-line indent"><span className="c-key">name</span>: <span className="c-str">'Chesta Solanki'</span>,</div>
                        <div className="code-line indent"><span className="c-key">specialty</span>: <span className="c-str">'Full-Stack &amp; AI Systems'</span>,</div>
                        <div className="code-line indent"><span className="c-key">coreStack</span>: [<span className="c-str">'React 19'</span>, <span className="c-str">'Node.js'</span>],</div>
                        <div className="code-line indent"><span className="c-key">aiEngine</span>: [<span className="c-str">'Groq Llama 3.3'</span>, <span className="c-str">'Gemini'</span>],</div>
                        <div className="code-line">&#125;;</div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Floating Lens Micro-HUD Pill */}
          <div className="purrweb-lens-hud">
            <span className="hud-badge">1.9X MAGNIFIED</span>
          </div>

          {/* Bottom Coordinates & Tech Tag */}
          <div className="purrweb-lens-hud-bottom">
            <span>PURRWEB LENS</span>
          </div>
        </div>
      </div>

      {/* Floating Touch / Interactive Helper Pill for Mobile */}
      <div ref={touchHintRef} className="purrweb-touch-hint">
        <Sparkles size={13} />
        <span>Move pointer or drag to inspect with magnifying glass</span>
      </div>
    </section>
  );
}
