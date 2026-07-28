import React, { useState } from 'react';
import { Globe, Cpu, Terminal, Layers, Database, Sparkles, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function InteractiveTechCube() {
  const [hoveredNode, setHoveredNode] = useState(null);

  // Skill nodes with linked projects
  const skillNodes = [
    {
      id: 'react',
      name: 'React.js',
      category: 'Frontend',
      icon: Globe,
      x: 20,
      y: 22,
      projects: ['PrepAI (AI Interview Platform)', 'Portfolio UI'],
      desc: 'Interactive UI, Component Architecture & State'
    },
    {
      id: 'node',
      name: 'Node.js',
      category: 'Backend',
      icon: Cpu,
      x: 80,
      y: 22,
      projects: ['Craftly (AI Gen)', 'PrepAI Backend'],
      desc: 'Asynchronous Event-Driven Backend Server'
    },
    {
      id: 'cpp',
      name: 'C++',
      category: 'Core & DSA',
      icon: Terminal,
      x: 18,
      y: 78,
      projects: ['250+ LeetCode Solved', 'STL Optimization'],
      desc: 'Data Structures, Algorithms & High Performance'
    },
    {
      id: 'llm',
      name: 'LLMs & RAG',
      category: 'AI / ML',
      icon: Sparkles,
      x: 82,
      y: 78,
      projects: ['Craftly (Website Generator)', 'AI Response Streaming'],
      desc: 'Prompt Engineering & Real-time LLM Workflows'
    },
    {
      id: 'express',
      name: 'Express.js',
      category: 'REST APIs',
      icon: Layers,
      x: 50,
      y: 12,
      projects: ['Craftly Server', 'PrepAI REST API'],
      desc: 'Routing, SSE Streaming & Middleware'
    },
    {
      id: 'db',
      name: 'MySQL & DB',
      category: 'Database',
      icon: Database,
      x: 50,
      y: 88,
      projects: ['PrepAI Analytics', 'User Auth Schema'],
      desc: 'Relational Schemas & Query Optimization'
    }
  ];

  const centerNode = { x: 50, y: 50, label: 'CHESTA ENGINE' };

  return (
    <div
      className="glass-card"
      style={{
        padding: '32px 24px',
        height: '100%',
        minHeight: '460px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        background: 'var(--bg-card)',
        border: '1px solid var(--border-glass-hover)',
        boxShadow: 'var(--glow-card)'
      }}
    >
      {/* Header Label */}
      <div style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '10px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span className="pulse-dot" />
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.74rem',
            color: 'var(--accent-purple)',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            fontWeight: '700'
          }}>
            INTERACTIVE KNOWLEDGE GRAPH
          </span>
        </div>

        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.68rem',
          color: 'var(--text-muted)'
        }}>
          [ HOVER NODES TO EXPAND ]
        </div>
      </div>

      {/* Interactive SVG Knowledge Graph Canvas */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '320px',
        margin: '10px 0'
      }}>
        {/* SVG Connecting Network Lines */}
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
          {skillNodes.map((node) => {
            const isHovered = hoveredNode?.id === node.id;
            return (
              <g key={node.id}>
                {/* Static Base Line */}
                <line
                  x1={`${centerNode.x}%`}
                  y1={`${centerNode.y}%`}
                  x2={`${node.x}%`}
                  y2={`${node.y}%`}
                  stroke={isHovered ? 'var(--accent-purple)' : 'rgba(56, 189, 248, 0.35)'}
                  strokeWidth={isHovered ? '2.5' : '1.5'}
                  strokeDasharray={isHovered ? '4 4' : 'none'}
                  style={{
                    transition: 'all 0.3s ease',
                    filter: isHovered ? 'drop-shadow(0 0 8px var(--accent-purple))' : 'none'
                  }}
                />

                {/* Animated Pulsing Beam on Hover */}
                {isHovered && (
                  <circle r="4" fill="var(--accent-magenta)">
                    <animateMotion
                      path={`M ${centerNode.x * 3.2} ${centerNode.y * 3.2} L ${node.x * 3.2} ${node.y * 3.2}`}
                      dur="1.2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                )}
              </g>
            );
          })}
        </svg>

        {/* Central Core Developer Node */}
        <div style={{
          position: 'absolute',
          top: `${centerNode.y}%`,
          left: `${centerNode.x}%`,
          transform: 'translate(-50%, -50%)',
          width: '76px',
          height: '76px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #0284c7 0%, #38bdf8 100%)',
          border: '2px solid #ffffff',
          boxShadow: '0 0 30px rgba(56, 189, 248, 0.7), inset 0 0 15px rgba(255, 255, 255, 0.4)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 5
        }}>
          <Zap size={22} style={{ color: '#ffffff' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', fontWeight: '800', color: '#ffffff', letterSpacing: '0.08em', marginTop: '2px' }}>
            CHESTA
          </span>
        </div>

        {/* Orbiting Skill Nodes (HIGH CONTRAST & LEGIBILITY IN BOTH LIGHT & DARK MODES) */}
        {skillNodes.map((node) => {
          const IconComp = node.icon;
          const isHovered = hoveredNode?.id === node.id;

          return (
            <motion.div
              key={node.id}
              onMouseEnter={() => setHoveredNode(node)}
              onMouseLeave={() => setHoveredNode(null)}
              animate={{
                scale: isHovered ? 1.2 : 1,
                zIndex: isHovered ? 20 : 10
              }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              style={{
                position: 'absolute',
                top: `${node.y}%`,
                left: `${node.x}%`,
                transform: 'translate(-50%, -50%)',
                cursor: 'pointer'
              }}
            >
              <div
                className="skill-node-pill"
                style={{
                  padding: isHovered ? '9px 16px' : '7px 14px',
                  borderRadius: 'var(--radius-pill)',
                  border: isHovered ? '2px solid #38bdf8' : '1px solid var(--border-glass)',
                  boxShadow: isHovered ? '0 0 25px rgba(56, 189, 248, 0.7)' : '0 4px 15px rgba(0, 0, 0, 0.2)',
                  backdropFilter: 'blur(12px)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.2s ease'
                }}
              >
                <IconComp size={15} style={{ color: isHovered ? '#ffffff' : 'var(--accent-purple)' }} />
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '13px',
                  fontWeight: '700',
                  letterSpacing: '0.02em'
                }}>
                  {node.name}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Interactive Tooltip Callout Bar */}
      <div style={{ width: '100%', minHeight: '68px' }}>
        <AnimatePresence mode="wait">
          {hoveredNode ? (
            <motion.div
              key={hoveredNode.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '12px',
                background: 'rgba(56, 189, 248, 0.14)',
                border: '1px solid var(--border-glass-hover)',
                boxShadow: '0 4px 20px rgba(56, 189, 248, 0.25)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '13.5px', fontWeight: '800', color: 'var(--text-primary)' }}>
                  {hoveredNode.name} — <span style={{ color: 'var(--accent-purple)' }}>{hoveredNode.category}</span>
                </span>
                <span style={{ fontSize: '11px', color: 'var(--accent-purple)', fontFamily: 'var(--font-mono)', fontWeight: '700' }}>
                  ACTIVE NODE
                </span>
              </div>

              <div style={{ fontSize: '12.5px', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                {hoveredNode.desc}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px' }}>
                <span style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontWeight: '600' }}>USED IN:</span>
                {hoveredNode.projects.map((proj, pIdx) => (
                  <span
                    key={pIdx}
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '11.5px',
                      fontWeight: '600',
                      background: 'rgba(56, 189, 248, 0.18)',
                      color: 'var(--text-primary)',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      border: '1px solid var(--border-glass)'
                    }}
                  >
                    {proj}
                  </span>
                ))}
              </div>
            </motion.div>
          ) : (
            <div style={{
              width: '100%',
              padding: '12px 16px',
              borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px dashed var(--border-glass)',
              textAlign: 'center',
              color: 'var(--text-muted)',
              fontSize: '12.5px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}>
              <Sparkles size={14} style={{ color: 'var(--accent-purple)' }} />
              <span>Hover any skill node above to reveal linked projects &amp; architecture details</span>
            </div>
          )}
        </AnimatePresence>
      </div>

      <style>{`
        .skill-node-pill {
          background: #0f172a;
          color: #ffffff;
        }
        [data-theme="light"] .skill-node-pill {
          background: #ffffff;
          color: #0f172a;
          border: 1px solid rgba(2, 132, 199, 0.4) !important;
          box-shadow: 0 4px 15px rgba(2, 132, 199, 0.25) !important;
        }
        [data-theme="light"] .skill-node-pill:hover {
          background: #0284c7 !important;
          color: #ffffff !important;
        }
      `}</style>
    </div>
  );
}
