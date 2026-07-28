import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, ArrowUpRight, Code2 } from 'lucide-react';

export default function Pure3DLaptop() {
  const [rotateX, setRotateX] = useState(-10);
  const [rotateY, setRotateY] = useState(15);
  const [typedText, setTypedText] = useState('');
  const containerRef = useRef(null);

  const fullTypewriter = 'Building AI-powered web experiences.';

  // Typewriter effect loop
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullTypewriter.length) {
        setTypedText(fullTypewriter.slice(0, index));
        index++;
      } else {
        setTimeout(() => {
          index = 0;
        }, 3000);
      }
    }, 45);

    return () => clearInterval(interval);
  }, []);

  // Mouse tilt reaction
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setRotateY(x * 0.08 + 15);
    setRotateX(-y * 0.08 - 10);
  };

  const handleMouseLeave = () => {
    setRotateX(-10);
    setRotateY(15);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '920px',
        height: '620px',
        perspective: '1400px',
        pointerEvents: 'auto',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* 3D PURE CODE LAPTOP OBJECT */}
      <div
        style={{
          width: '780px',
          position: 'relative',
          transformStyle: 'preserve-3d',
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: 'transform 0.15s ease-out',
          animation: 'float3DLaptop 16s ease-in-out infinite alternate'
        }}
      >
        {/* Holographic Glowing Halo */}
        <div style={{
          position: 'absolute',
          top: '-60px',
          left: '-60px',
          right: '-60px',
          bottom: '-60px',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.42) 0%, rgba(125, 211, 252, 0.18) 55%, transparent 75%)',
          filter: 'blur(45px)',
          pointerEvents: 'none'
        }} />

        {/* 1. LAPTOP SCREEN (LID DISPLAY CONTAINING ENTIRE PORTFOLIO HERO CONTENT) */}
        <div style={{
          width: '100%',
          height: '460px',
          background: '#090d1a',
          border: '3px solid rgba(56, 189, 248, 0.85)',
          borderRadius: '20px 20px 4px 4px',
          boxShadow: '0 0 55px rgba(56, 189, 248, 0.65), inset 0 0 30px rgba(56, 189, 248, 0.25)',
          padding: '14px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          
          {/* Top Notch & Camera */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '140px',
            height: '16px',
            background: '#030712',
            borderRadius: '0 0 8px 8px',
            border: '1px solid rgba(56, 189, 248, 0.5)',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px'
          }}>
            <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#38bdf8' }} />
            <div style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#4ade80' }} />
          </div>

          {/* Screen Inner Portfolio Display */}
          <div style={{
            width: '100%',
            height: '100%',
            background: 'rgba(5, 10, 24, 0.96)',
            borderRadius: '14px',
            padding: '24px 28px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            overflowY: 'auto'
          }}>
            
            {/* Top Bar Status */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="pulse-dot" />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: '#38bdf8', letterSpacing: '0.12em', fontWeight: '700' }}>
                  AVAILABLE FOR OPPORTUNITIES
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: '#4ade80' }}>
                <Code2 size={13} />
                <span>FULL-STACK DEVELOPER</span>
              </div>
            </div>

            {/* Main Portfolio Headline */}
            <div>
              <h1 className="font-serif" style={{
                fontSize: 'clamp(2.2rem, 4.2vw, 3.4rem)',
                fontWeight: '500',
                color: '#ffffff',
                margin: 0,
                lineHeight: '1.05'
              }}>
                CHESTA <span style={{ color: '#38bdf8', textShadow: '0 0 30px rgba(56, 189, 248, 0.8)' }}>SOLANKI</span>
              </h1>
              
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.9rem',
                color: '#7dd3fc',
                letterSpacing: '0.12em',
                marginTop: '4px',
                textTransform: 'uppercase'
              }}>
                &gt;_ FULL-STACK DEVELOPER
              </div>
            </div>

            {/* Typewriter Line */}
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '1.02rem',
              color: '#4ade80',
              fontWeight: '700',
              background: 'rgba(74, 222, 128, 0.08)',
              padding: '8px 14px',
              borderRadius: '8px',
              border: '1px solid rgba(74, 222, 128, 0.25)'
            }}>
              &gt; {typedText}
              <span className="pulse-dot" style={{ width: '6px', height: '14px', borderRadius: 0, marginLeft: '3px', background: '#4ade80' }} />
            </div>

            {/* Bio Description */}
            <p style={{
              fontSize: '0.95rem',
              color: 'var(--text-secondary)',
              lineHeight: '1.65',
              margin: 0
            }}>
              Curious mind and full-stack developer. Building interactive digital web platforms, scalable RESTful APIs, and AI integrations.
            </p>

            {/* Action Buttons Inside Laptop Screen */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <a
                href="mailto:chestasolanki664@gmail.com"
                className="btn-primary"
                style={{ padding: '8px 20px', fontSize: '0.82rem' }}
              >
                <span>Let's get in touch</span>
                <ArrowUpRight size={14} />
              </a>

              <a
                href="#experience"
                className="btn-secondary"
                style={{ padding: '8px 18px', fontSize: '0.82rem' }}
              >
                <span>View Experience</span>
              </a>
            </div>

            {/* Stats Metrics Bar Inside Laptop Screen */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '12px',
              paddingTop: '12px',
              borderTop: '1px solid var(--border-glass)',
              fontFamily: 'var(--font-mono)'
            }}>
              <div>
                <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#ffffff' }}>
                  8.13 <span style={{ fontSize: '0.7rem', color: '#38bdf8' }}>CGPA</span>
                </div>
                <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>B.Tech IT</div>
              </div>

              <div>
                <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#ffffff' }}>250+</div>
                <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>LeetCode</div>
              </div>

              <div>
                <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#ffffff' }}>Full Stack</div>
                <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>React/Node</div>
              </div>

              <div>
                <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#ffffff' }}>AI / ML</div>
                <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>LLMs &amp; RAG</div>
              </div>
            </div>

          </div>

        </div>

        {/* 2. LAPTOP HINGE */}
        <div style={{
          width: '240px',
          height: '12px',
          background: '#030712',
          border: '1px solid rgba(56, 189, 248, 0.7)',
          margin: '0 auto',
          borderRadius: '0 0 6px 6px'
        }} />

        {/* 3. LAPTOP KEYBOARD BASE */}
        <div style={{
          width: '820px',
          height: '160px',
          background: 'linear-gradient(180deg, #0b1329 0%, #030712 100%)',
          border: '3px solid rgba(56, 189, 248, 0.85)',
          borderRadius: '4px 4px 24px 24px',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.95), 0 0 45px rgba(56, 189, 248, 0.45)',
          margin: '-2px 0 0 -20px',
          padding: '14px 32px',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          
          {/* Glowing Translucent Keyboard Keys Grid */}
          <div style={{
            width: '100%',
            height: '80px',
            background: 'rgba(56, 189, 248, 0.08)',
            border: '1px solid rgba(56, 189, 248, 0.35)',
            borderRadius: '6px',
            display: 'grid',
            gridTemplateRows: 'repeat(4, 1fr)',
            gap: '3px',
            padding: '5px'
          }}>
            {[0, 1, 2, 3].map((row) => (
              <div key={row} style={{ display: 'flex', gap: '3px', justifyContent: 'center' }}>
                {[...Array(16)].map((_, col) => (
                  <div
                    key={col}
                    style={{
                      flex: 1,
                      background: 'rgba(56, 189, 248, 0.18)',
                      border: '1px solid rgba(56, 189, 248, 0.45)',
                      borderRadius: '2px',
                      boxShadow: '0 0 6px rgba(56, 189, 248, 0.35)'
                    }}
                  />
                ))}
              </div>
            ))}
          </div>

          {/* Trackpad */}
          <div style={{
            width: '150px',
            height: '42px',
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(56, 189, 248, 0.45)',
            borderRadius: '6px',
            marginBottom: '4px'
          }} />

        </div>

      </div>

      <style>{`
        @keyframes float3DLaptop {
          0% { transform: rotateX(-10deg) rotateY(15deg) translateY(0px); }
          50% { transform: rotateX(-6deg) rotateY(19deg) translateY(-20px); }
          100% { transform: rotateX(-10deg) rotateY(15deg) translateY(0px); }
        }
      `}</style>
    </div>
  );
}
