import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Code2, Sparkles, Cpu, Layers, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AnimatedHolographicLaptop() {
  const [rotateX, setRotateX] = useState(-12);
  const [rotateY, setRotateY] = useState(18);
  const [typedCode, setTypedCode] = useState('');
  const [terminalLogs, setTerminalLogs] = useState([
    'GET /api/v1/auth 200 OK - 14ms',
    '[SSE] Real-time stream connected',
    '[LLM] Prompt tokenizing initialized...'
  ]);

  const containerRef = useRef(null);
  const codeString = `class Developer {\n  constructor() {\n    this.name = 'Chesta Solanki';\n    this.role = 'Full-Stack Developer';\n    this.stack = ['React', 'Node', 'C++'];\n  }\n  async buildPlatform() {\n    return await LLM.streamResponse();\n  }\n}`;

  // Typing effect loop
  useEffect(() => {
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex <= codeString.length) {
        setTypedCode(codeString.slice(0, charIndex));
        charIndex++;
      } else {
        setTimeout(() => {
          charIndex = 0;
        }, 2500);
      }
    }, 45);

    return () => clearInterval(typingInterval);
  }, []);

  // Scrolling terminal logs loop
  useEffect(() => {
    const logsPool = [
      '[BUILD] Vite bundled client (247ms)',
      '[DATABASE] MySQL query executed - 0.4ms',
      '[AI] RAG embeddings retrieved',
      '[SSE] Streaming chunk delivered',
      '[SYSTEM] All services online 100%'
    ];
    let poolIndex = 0;
    const logInterval = setInterval(() => {
      setTerminalLogs((prev) => {
        const nextLogs = [...prev.slice(1), logsPool[poolIndex % logsPool.length]];
        poolIndex++;
        return nextLogs;
      });
    }, 2200);

    return () => clearInterval(logInterval);
  }, []);

  // Interactive mouse tilt reaction
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setRotateY(x * 0.08 + 18);
    setRotateX(-y * 0.08 - 12);
  };

  const handleMouseLeave = () => {
    setRotateX(-12);
    setRotateY(18);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        maxWidth: '820px',
        height: '520px',
        perspective: '1200px',
        pointerEvents: 'auto',
        zIndex: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* 3D Levitating Laptop Chassis */}
      <div
        style={{
          width: '580px',
          position: 'relative',
          transformStyle: 'preserve-3d',
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: 'transform 0.15s ease-out',
          animation: 'levitateLaptop 14s ease-in-out infinite alternate'
        }}
      >
        
        {/* Floating Holographic Ambient Glow Sphere */}
        <div style={{
          position: 'absolute',
          top: '-40px',
          left: '-40px',
          right: '-40px',
          bottom: '-40px',
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.35) 0%, rgba(192, 132, 252, 0.12) 55%, transparent 75%)',
          filter: 'blur(35px)',
          pointerEvents: 'none'
        }} />

        {/* 1. LAPTOP SCREEN (LID) */}
        <div style={{
          width: '100%',
          height: '340px',
          background: '#090710',
          border: '3px solid rgba(168, 85, 247, 0.8)',
          borderRadius: '16px 16px 4px 4px',
          boxShadow: '0 0 35px rgba(168, 85, 247, 0.5), inset 0 0 20px rgba(168, 85, 247, 0.2)',
          padding: '12px',
          position: 'relative',
          overflow: 'hidden',
          backdropFilter: 'blur(16px)'
        }}>
          
          {/* Top Notch & Camera */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '120px',
            height: '14px',
            background: '#040307',
            borderRadius: '0 0 8px 8px',
            border: '1px solid rgba(168, 85, 247, 0.4)',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px'
          }}>
            <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#a855f7' }} />
            <div style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#4ade80' }} />
          </div>

          {/* Screen Inner Display Grid */}
          <div style={{
            width: '100%',
            height: '100%',
            background: 'rgba(5, 4, 10, 0.92)',
            borderRadius: '10px',
            padding: '16px 14px',
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '12px',
            position: 'relative'
          }}>
            
            {/* Left Window: VS Code Live Typist */}
            <div style={{
              background: '#0e0b18',
              border: '1px solid var(--border-glass)',
              borderRadius: '8px',
              padding: '10px 12px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.74rem',
              color: '#ffffff',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px', borderBottom: '1px solid var(--border-glass)', paddingBottom: '4px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Code2 size={12} style={{ color: '#a855f7' }} />
                  <span style={{ fontSize: '0.68rem', color: 'var(--accent-purple)' }}>App.jsx</span>
                </div>
                <div style={{ display: 'flex', gap: '4px' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ef4444' }} />
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#facc15' }} />
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80' }} />
                </div>
              </div>

              <pre style={{
                margin: 0,
                color: '#c084fc',
                whiteSpace: 'pre-wrap',
                lineHeight: '1.45',
                fontSize: '0.7rem'
              }}>
                {typedCode}
                <span className="pulse-dot" style={{ width: '5px', height: '10px', borderRadius: 0, marginLeft: '2px', background: '#a855f7' }} />
              </pre>
            </div>

            {/* Right Window: Live Terminal & AI Neural Network */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              
              {/* Terminal Logs */}
              <div style={{
                background: '#090712',
                border: '1px solid var(--border-glass)',
                borderRadius: '8px',
                padding: '10px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                flex: 1
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px', color: '#4ade80' }}>
                  <Terminal size={12} />
                  <span>TERMINAL LOGS</span>
                </div>
                {terminalLogs.map((log, idx) => (
                  <div key={idx} style={{ color: idx === terminalLogs.length - 1 ? '#a855f7' : 'var(--text-muted)', marginBottom: '3px', whiteSpace: 'nowrap', overflow: 'hidden' }}>
                    &gt; {log}
                  </div>
                ))}
              </div>

              {/* AI Neural Activity Monitor */}
              <div style={{
                background: '#0d0a18',
                border: '1px solid var(--border-glass)',
                borderRadius: '8px',
                padding: '8px 10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Activity size={13} style={{ color: '#a855f7', animation: 'pulse 1.5s infinite' }} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.66rem', color: '#ffffff' }}>AI RAG SYSTEM</span>
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.66rem', color: '#4ade80' }}>99.8% ONLINE</span>
              </div>

            </div>

          </div>

        </div>

        {/* 2. LAPTOP HINGE */}
        <div style={{
          width: '180px',
          height: '8px',
          background: '#040307',
          border: '1px solid rgba(168, 85, 247, 0.6)',
          margin: '0 auto',
          borderRadius: '0 0 4px 4px'
        }} />

        {/* 3. LAPTOP KEYBOARD BASE */}
        <div style={{
          width: '620px',
          height: '140px',
          background: 'linear-gradient(180deg, #110e1f 0%, #06050b 100%)',
          border: '3px solid rgba(168, 85, 247, 0.8)',
          borderRadius: '4px 4px 20px 20px',
          boxShadow: '0 20px 45px rgba(0, 0, 0, 0.9), 0 0 30px rgba(168, 85, 247, 0.4)',
          margin: '-2px 0 0 -20px',
          padding: '12px 24px',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          
          {/* Glowing Translucent Keyboard Keys Matrix */}
          <div style={{
            width: '100%',
            height: '70px',
            background: 'rgba(168, 85, 247, 0.06)',
            border: '1px solid rgba(168, 85, 247, 0.3)',
            borderRadius: '6px',
            display: 'grid',
            gridTemplateRows: 'repeat(4, 1fr)',
            gap: '2px',
            padding: '4px'
          }}>
            {[0, 1, 2, 3].map((row) => (
              <div key={row} style={{ display: 'flex', gap: '3px', justifyContent: 'center' }}>
                {[...Array(14)].map((_, col) => (
                  <div
                    key={col}
                    style={{
                      flex: 1,
                      background: 'rgba(168, 85, 247, 0.15)',
                      border: '1px solid rgba(168, 85, 247, 0.4)',
                      borderRadius: '2px',
                      boxShadow: '0 0 6px rgba(168, 85, 247, 0.3)'
                    }}
                  />
                ))}
              </div>
            ))}
          </div>

          {/* Trackpad */}
          <div style={{
            width: '120px',
            height: '36px',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(168, 85, 247, 0.4)',
            borderRadius: '6px',
            marginBottom: '4px'
          }} />

        </div>

      </div>

      {/* Floating Holographic Code Cards Orbiting around Laptop */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '40px',
          right: '20px',
          background: 'rgba(11, 9, 20, 0.88)',
          border: '1px solid var(--border-glass-hover)',
          borderRadius: '12px',
          padding: '8px 14px',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 0 20px rgba(168, 85, 247, 0.4)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}
      >
        <Sparkles size={14} style={{ color: '#a855f7' }} />
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#ffffff' }}>
          FULL-STACK ARCHITECTURE
        </span>
      </motion.div>

      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: '50px',
          left: '20px',
          background: 'rgba(11, 9, 20, 0.88)',
          border: '1px solid var(--border-glass-hover)',
          borderRadius: '12px',
          padding: '8px 14px',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 0 20px rgba(168, 85, 247, 0.4)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}
      >
        <Cpu size={14} style={{ color: '#c084fc' }} />
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#ffffff' }}>
          LIVE API STREAMING
        </span>
      </motion.div>

      <style>{`
        @keyframes levitateLaptop {
          0% { transform: rotateX(-12deg) rotateY(18deg) translateY(0px); }
          50% { transform: rotateX(-8deg) rotateY(22deg) translateY(-18px); }
          100% { transform: rotateX(-12deg) rotateY(18deg) translateY(0px); }
        }
      `}</style>
    </div>
  );
}
