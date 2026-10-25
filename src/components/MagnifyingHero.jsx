import React, { useState, useEffect, useRef } from 'react';

export default function MagnifyingHero({ onOpenResume }) {
  const heroRef = useRef(null);
  const lensRef = useRef(null);
  const zoomRedRef = useRef(null);
  const zoomCyanRef = useRef(null);
  const zoomYellowRef = useRef(null);
  const zoomMainRef = useRef(null);

  // Optical configuration matching Purrweb reference
  const LENS_DIAMETER = 210;
  const LENS_RADIUS = LENS_DIAMETER / 2;
  const ZOOM_SCALE = 1.82;

  // Pointer position & physics state
  const mousePos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const isHovered = useRef(false);
  const animFrameId = useRef(null);
  const ambientAngle = useRef(0);

  const [containerSize, setContainerSize] = useState({ width: 1400, height: 900 });

  // Measure container and set initial lens position right over the focal letters
  useEffect(() => {
    const updateSize = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setContainerSize({ width: rect.width, height: rect.height });

        // Position initial lens over the lower word ("engineer"), matching the Dribbble screenshot
        if (currentPos.current.x === 0 && currentPos.current.y === 0) {
          const initX = rect.width * 0.58;
          const initY = rect.height * 0.64;
          mousePos.current = { x: initX, y: initY };
          currentPos.current = { x: initX, y: initY };
        }
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Butter-smooth physics loop with Chromatic Aberration translation
  useEffect(() => {
    const loop = () => {
      // Gentle ambient drift when idle
      if (!isHovered.current && heroRef.current) {
        ambientAngle.current += 0.012;
        const rect = heroRef.current.getBoundingClientRect();
        const focalX = rect.width * 0.58;
        const focalY = rect.height * 0.64;
        mousePos.current.x = focalX + Math.cos(ambientAngle.current) * 35;
        mousePos.current.y = focalY + Math.sin(ambientAngle.current * 1.4) * 22;
      }

      // Smooth lerp damping
      currentPos.current.x += (mousePos.current.x - currentPos.current.x) * 0.14;
      currentPos.current.y += (mousePos.current.y - currentPos.current.y) * 0.14;

      const lx = currentPos.current.x;
      const ly = currentPos.current.y;

      if (lensRef.current) {
        lensRef.current.style.transform = `translate3d(${lx - LENS_RADIUS}px, ${ly - LENS_RADIUS}px, 0)`;

        // Base magnification translation
        const tx = -lx * ZOOM_SCALE + LENS_RADIUS;
        const ty = -ly * ZOOM_SCALE + LENS_RADIUS;

        // Apply optical chromatic offsets
        if (zoomMainRef.current) {
          zoomMainRef.current.style.transform = `translate3d(${tx}px, ${ty}px, 0) scale(${ZOOM_SCALE})`;
        }
        if (zoomRedRef.current) {
          zoomRedRef.current.style.transform = `translate3d(${tx - 4}px, ${ty - 1}px, 0) scale(${ZOOM_SCALE * 1.015})`;
        }
        if (zoomCyanRef.current) {
          zoomCyanRef.current.style.transform = `translate3d(${tx + 4}px, ${ty + 1}px, 0) scale(${ZOOM_SCALE * 0.985})`;
        }
        if (zoomYellowRef.current) {
          zoomYellowRef.current.style.transform = `translate3d(${tx - 2}px, ${ty - 3}px, 0) scale(${ZOOM_SCALE * 1.008})`;
        }
      }

      animFrameId.current = requestAnimationFrame(loop);
    };

    animFrameId.current = requestAnimationFrame(loop);
    return () => {
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [containerSize]);

  const handlePointerMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = Math.max(LENS_RADIUS, Math.min(e.clientX - rect.left, rect.width - LENS_RADIUS));
    const y = Math.max(LENS_RADIUS, Math.min(e.clientY - rect.top, rect.height - LENS_RADIUS));
    mousePos.current = { x, y };
    isHovered.current = true;
  };

  const handlePointerLeave = () => {
    isHovered.current = false;
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="exact-purrweb-hero"
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: '680px',
        overflow: 'hidden',
        background: '#07090e',
        color: '#ffffff',
        cursor: 'default',
        userSelect: 'none'
      }}
    >
      {/* =========================================================================
          ATMOSPHERIC DEEP OCEANIC BLUE LIGHTING & GRAIN
          Matching Purrweb's dark, smoky, velvety oceanic ambiance
          ========================================================================= */}
      <div className="purrweb-atmosphere" aria-hidden="true">
        {/* Main deep oceanic radial glow on center/right */}
        <div className="atmosphere-glow glow-ocean" />
        {/* Subtle secondary glow on lower left */}
        <div className="atmosphere-glow glow-teal" />
        {/* Film grain noise overlay */}
        <div className="atmosphere-grain" />
      </div>

      {/* =========================================================================
          TOP NAVIGATION BAR (Exact Typography & Spacing)
          CHESTA SOLANKI   |   WORK   |   RESUME   |   CONTACT
          ========================================================================= */}
      <header className="purrweb-exact-header">
        <div className="header-col header-brand">
          <a href="#hero">CHESTA SOLANKI</a>
        </div>

        <nav className="header-col header-nav-link">
          <a href="#work">WORK</a>
        </nav>

        <div className="header-col header-nav-link">
          <button onClick={onOpenResume} className="nav-text-btn">
            RESUME
          </button>
        </div>

        <div className="header-col header-contact-link">
          <a href="#contact">CONTACT</a>
        </div>
      </header>

      {/* =========================================================================
          MASSIVE HERO TYPOGRAPHY: Software Engineer
          "Software" (white sans) + "full-stack" (golden serif italic)
                     "engineer" (white sans)
          ========================================================================= */}
      <div className="purrweb-center-stage">
        <div className="exact-hero-typography">
          
          {/* Top Line: "Software" + Golden Serif Italic Accent "full-stack" */}
          <div className="hero-top-row">
            <span className="word-software">Software</span>
            <span className="word-accent">full-stack</span>
          </div>

          {/* Bottom Line: "engineer" sitting tucked underneath */}
          <div className="hero-bottom-row">
            <span className="word-engineer">engineer</span>
          </div>

        </div>
      </div>

      {/* =========================================================================
          BOTTOM METADATA & SCROLL INDICATOR
          Left Col 1: Scope & Availability
          Left Col 2: Location & Academic Pedigree
          Right: Delicate vertical scroll line and arrow
          ========================================================================= */}
      <footer className="purrweb-exact-footer">
        
        {/* Left Metadata Columns */}
        <div className="footer-meta-group">
          
          {/* Column 1: Core Domain & Availability */}
          <div className="meta-block">
            <div className="meta-line">FULL-STACK &amp; AI / CLOUD</div>
            <div className="meta-line">/ ARCHITECTURE</div>
            <div className="meta-spacer" />
            <div className="meta-line">CURRENTLY AVAILABLE</div>
            <div className="meta-line">FOR OPPORTUNITIES</div>
            <div className="meta-line">GLOBAL &amp; REMOTE</div>
          </div>

          {/* Column 2: Location & Academic Pedigree */}
          <div className="meta-block">
            <div className="meta-line">BASED</div>
            <div className="meta-line">IN INDIA</div>
            <div className="meta-spacer" />
            <div className="meta-line">B.TECH IT (8.13 CGPA)</div>
            <div className="meta-line">FOUNDING DEV @ LIMETTA</div>
          </div>

        </div>

        {/* Right: Scroll Down Indicator Arrow */}
        <a href="#work" className="footer-scroll-down" aria-label="Scroll to featured work">
          <span className="scroll-stem" />
          <span className="scroll-arrow">↓</span>
        </a>

      </footer>

      {/* =========================================================================
          INTERACTIVE CHROMATIC MAGNIFYING GLASS LENS OVERLAY
          Circular floating optic with RGB aberration, refraction & magnification
          ========================================================================= */}
      <div
        ref={lensRef}
        className="exact-lens-rig"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: `${LENS_DIAMETER}px`,
          height: `${LENS_DIAMETER}px`,
          pointerEvents: 'none',
          zIndex: 30,
          willChange: 'transform'
        }}
      >
        <div className="exact-lens-circle">
          
          {/* Specular Edge Refraction Arc */}
          <div className="exact-lens-rim-highlight" />

          {/* Magnified Optical Layers with Chromatic Aberration */}
          <div className="exact-lens-viewport">
            
            {/* Layer 1: Red / Orange Chromatic Fringing */}
            <div
              ref={zoomRedRef}
              className="lens-chroma-layer chroma-red"
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
              <div className="purrweb-center-stage">
                <div className="exact-hero-typography">
                  <div className="hero-top-row">
                    <span className="word-software">Software</span>
                    <span className="word-accent">full-stack</span>
                  </div>
                  <div className="hero-bottom-row">
                    <span className="word-engineer">engineer</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Layer 2: Yellow / Amber Chromatic Dispersion */}
            <div
              ref={zoomYellowRef}
              className="lens-chroma-layer chroma-yellow"
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
              <div className="purrweb-center-stage">
                <div className="exact-hero-typography">
                  <div className="hero-top-row">
                    <span className="word-software">Software</span>
                    <span className="word-accent">full-stack</span>
                  </div>
                  <div className="hero-bottom-row">
                    <span className="word-engineer">engineer</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Layer 3: Cyan / Electric Blue Chromatic Fringing */}
            <div
              ref={zoomCyanRef}
              className="lens-chroma-layer chroma-cyan"
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
              <div className="purrweb-center-stage">
                <div className="exact-hero-typography">
                  <div className="hero-top-row">
                    <span className="word-software">Software</span>
                    <span className="word-accent">full-stack</span>
                  </div>
                  <div className="hero-bottom-row">
                    <span className="word-engineer">engineer</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Layer 4: Sharp Crisp Base Layer */}
            <div
              ref={zoomMainRef}
              className="lens-chroma-layer chroma-main"
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
              <div className="purrweb-center-stage">
                <div className="exact-hero-typography">
                  <div className="hero-top-row">
                    <span className="word-software">Software</span>
                    <span className="word-accent">full-stack</span>
                  </div>
                  <div className="hero-bottom-row">
                    <span className="word-engineer">engineer</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Subtle Outer Lens Perimeter Glow */}
          <div className="exact-lens-inner-shadow" />
        </div>
      </div>

    </section>
  );
}
