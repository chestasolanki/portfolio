import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GitBranch, GitCommit, GitFork, ArrowDown, Sparkles } from 'lucide-react';

export default function GitBranchTree() {
  const [hoveredCommit, setHoveredCommit] = useState(null);

  const commits = [
    {
      id: 'genesis',
      hash: 'init 8f2a10c',
      branch: 'main',
      message: 'genesis: initial commit of developer journey',
      color: '#38bdf8'
    },
    {
      id: 'experience',
      hash: 'commit c81b3f9',
      branch: 'feat/experience',
      message: 'feat(limetta): founding product developer e-commerce platform',
      color: '#38bdf8'
    },
    {
      id: 'academics',
      hash: 'commit 4d92a11',
      branch: 'feat/academics',
      message: 'feat(gl-bajaj): b.tech information technology 8.13 cgpa',
      color: '#7dd3fc'
    }
  ];

  return (
    <div
      className="git-branch-tree-container"
      style={{
        position: 'relative',
        marginBottom: '28px',
        padding: '16px 20px',
        background: 'linear-gradient(180deg, rgba(8, 15, 30, 0.85) 0%, rgba(3, 7, 18, 0.6) 100%)',
        border: '1px solid rgba(56, 189, 248, 0.25)',
        borderRadius: 'var(--radius-md)',
        backdropFilter: 'blur(10px)',
        overflow: 'hidden'
      }}
    >
      {/* Background Subtle Git Graph Mesh */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(56, 189, 248, 0.08) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          pointerEvents: 'none'
        }}
      />

      {/* Git Tree Header Control Bar */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '12px',
        position: 'relative',
        zIndex: 2,
        marginBottom: '14px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '28px',
            height: '28px',
            borderRadius: '6px',
            background: 'rgba(56, 189, 248, 0.15)',
            border: '1px solid rgba(56, 189, 248, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--accent-purple)'
          }}>
            <GitBranch size={16} />
          </div>

          <div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '13px',
              fontWeight: '700',
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <span>git tree // dual branch architecture</span>
            </div>
            <div style={{ fontSize: '11px', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
              origin/main splits into parallel industry &amp; academic paths
            </div>
          </div>
        </div>

        {/* Git Command Branch Badges */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 10px',
              borderRadius: 'var(--radius-pill)',
              background: 'rgba(56, 189, 248, 0.12)',
              border: '1px solid rgba(56, 189, 248, 0.35)',
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: '#38bdf8'
            }}
          >
            <GitFork size={12} />
            <span>git checkout -b feat/experience</span>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 10px',
              borderRadius: 'var(--radius-pill)',
              background: 'rgba(125, 211, 252, 0.1)',
              border: '1px solid rgba(125, 211, 252, 0.3)',
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: '#7dd3fc'
            }}
          >
            <GitFork size={12} />
            <span>git checkout -b feat/academics</span>
          </motion.div>
        </div>
      </div>

      {/* Interactive SVG Branching Diagram */}
      <div style={{ position: 'relative', width: '100%', height: '70px', zIndex: 2 }}>
        <svg
          viewBox="0 0 1000 70"
          preserveAspectRatio="none"
          style={{ width: '100%', height: '100%', overflow: 'visible' }}
        >
          <defs>
            <filter id="git-glow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <linearGradient id="trunk-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>

            <linearGradient id="branch-left-grad" x1="50%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>

            <linearGradient id="branch-right-grad" x1="50%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#7dd3fc" />
            </linearGradient>
          </defs>

          {/* Center Root Trunk */}
          <motion.line
            x1="500"
            y1="4"
            x2="500"
            y2="28"
            stroke="url(#trunk-grad)"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          />

          {/* Left Branch: Splitting to Work Experience (x: 500 -> 180) */}
          <motion.path
            d="M 500 28 C 450 55, 300 64, 180 64"
            fill="none"
            stroke="url(#branch-left-grad)"
            strokeWidth="2.5"
            strokeDasharray="4 2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Right Branch: Splitting to Academics (x: 500 -> 820) */}
          <motion.path
            d="M 500 28 C 550 55, 700 64, 820 64"
            fill="none"
            stroke="url(#branch-right-grad)"
            strokeWidth="2.5"
            strokeDasharray="4 2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          />
        </svg>

        {/* Root Genesis Commit Node (Center Top) */}
        <div
          onMouseEnter={() => setHoveredCommit(commits[0])}
          onMouseLeave={() => setHoveredCommit(null)}
          style={{
            position: 'absolute',
            top: '0px',
            left: '50%',
            transform: 'translateX(-50%)',
            cursor: 'pointer',
            zIndex: 4
          }}
        >
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Pulsing Ripple Wave */}
            <motion.div
              animate={{ scale: [1, 2.2, 1], opacity: [0.8, 0, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                position: 'absolute',
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                background: '#38bdf8'
              }}
            />
            <div
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: '#ffffff',
                border: '3px solid #38bdf8',
                boxShadow: '0 0 10px #38bdf8'
              }}
            />
          </div>
        </div>

        {/* Left Branch Commit Node (Work Experience) */}
        <div
          onMouseEnter={() => setHoveredCommit(commits[1])}
          onMouseLeave={() => setHoveredCommit(null)}
          style={{
            position: 'absolute',
            bottom: '2px',
            left: '18%',
            transform: 'translateX(-50%)',
            cursor: 'pointer',
            zIndex: 4
          }}
        >
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <motion.div
              animate={{ scale: [1, 1.8, 1], opacity: [0.7, 0, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, delay: 0.4 }}
              style={{
                position: 'absolute',
                left: '-2px',
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                background: '#38bdf8'
              }}
            />
            <div
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: '#38bdf8',
                boxShadow: '0 0 12px #38bdf8',
                border: '2px solid #ffffff'
              }}
            />
            <span style={{
              fontSize: '11px',
              fontFamily: 'var(--font-mono)',
              fontWeight: '700',
              color: '#38bdf8',
              background: 'rgba(5, 12, 28, 0.85)',
              padding: '2px 8px',
              borderRadius: '4px',
              border: '1px solid rgba(56, 189, 248, 0.3)'
            }}>
              commit c81b3f9 [limetta]
            </span>
          </div>
        </div>

        {/* Right Branch Commit Node (Academics) */}
        <div
          onMouseEnter={() => setHoveredCommit(commits[2])}
          onMouseLeave={() => setHoveredCommit(null)}
          style={{
            position: 'absolute',
            bottom: '2px',
            right: '18%',
            transform: 'translateX(50%)',
            cursor: 'pointer',
            zIndex: 4
          }}
        >
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{
              fontSize: '11px',
              fontFamily: 'var(--font-mono)',
              fontWeight: '700',
              color: '#7dd3fc',
              background: 'rgba(5, 12, 28, 0.85)',
              padding: '2px 8px',
              borderRadius: '4px',
              border: '1px solid rgba(125, 211, 252, 0.3)'
            }}>
              commit 4d92a11 [gl-bajaj]
            </span>
            <div
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: '#7dd3fc',
                boxShadow: '0 0 12px #7dd3fc',
                border: '2px solid #ffffff'
              }}
            />
            <motion.div
              animate={{ scale: [1, 1.8, 1], opacity: [0.7, 0, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, delay: 0.8 }}
              style={{
                position: 'absolute',
                right: '-2px',
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                background: '#7dd3fc'
              }}
            />
          </div>
        </div>
      </div>

      {/* Floating Hover Commit Details Tooltip */}
      <AnimatePresence>
        {hoveredCommit && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.2 }}
            style={{
              marginTop: '8px',
              padding: '8px 14px',
              borderRadius: '6px',
              background: 'rgba(3, 7, 18, 0.95)',
              border: `1px solid ${hoveredCommit.color}55`,
              fontFamily: 'var(--font-mono)',
              fontSize: '11.5px',
              color: '#e2e8f0',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              position: 'relative',
              zIndex: 3
            }}
          >
            <GitCommit size={14} style={{ color: hoveredCommit.color }} />
            <span style={{ color: hoveredCommit.color, fontWeight: '700' }}>
              {hoveredCommit.hash}
            </span>
            <span>[{hoveredCommit.branch}]:</span>
            <span style={{ color: '#94a3b8' }}>{hoveredCommit.message}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
