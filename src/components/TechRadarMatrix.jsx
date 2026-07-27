import React, { useState } from 'react';
import { Cpu, ShieldCheck, Zap, Database, Code, Activity } from 'lucide-react';

export default function TechRadarMatrix() {
  const [selectedNode, setSelectedNode] = useState(0);

  const techNodes = [
    {
      id: 'mern',
      title: 'MERN & Full-Stack',
      icon: <Code size={18} style={{ color: '#10b981' }} />,
      desc: 'React.js, Node.js, Express.js, MongoDB Atlas with JWT & RBAC Auth.',
      stat: '100% Verified',
      color: '#10b981'
    },
    {
      id: 'ai',
      title: 'AI & LLM Architecture',
      icon: <Cpu size={18} style={{ color: 'var(--accent-cyan)' }} />,
      desc: 'Large Language Models (LLMs), Real-time SSE Response Streaming, RAG, PyTorch.',
      stat: 'LLMs & SSE Live',
      color: 'var(--accent-cyan)'
    },
    {
      id: 'db',
      title: 'Databases & Vector DBs',
      icon: <Database size={18} style={{ color: 'var(--accent-purple)' }} />,
      desc: 'MySQL, MongoDB, Pinecone Vector DB, ChromaDB schema modeling.',
      stat: 'Multi-Database',
      color: 'var(--accent-purple)'
    },
    {
      id: 'algo',
      title: 'C++ & Problem Solving',
      icon: <Zap size={18} style={{ color: '#f59e0b' }} />,
      desc: 'Data Structures, Algorithms, OOP, Operating Systems, DBMS.',
      stat: '250+ Solved',
      color: '#f59e0b'
    }
  ];

  return (
    <div
      className="glass-card"
      style={{
        padding: '24px',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--border-glass-hover)',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7), 0 0 35px rgba(6, 182, 212, 0.2)',
        width: '100%',
        maxWidth: '460px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* HUD Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '20px',
        borderBottom: '1px solid var(--border-glass)',
        paddingBottom: '12px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Activity size={16} style={{ color: '#10b981', animation: 'pulse 1.5s infinite' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-primary)', letterSpacing: '0.1em' }}>
            HOLOGRAPHIC TECH RADAR
          </span>
        </div>

        <span style={{
          fontSize: '0.68rem',
          fontFamily: 'var(--font-mono)',
          background: 'rgba(16, 185, 129, 0.15)',
          color: '#10b981',
          padding: '2px 10px',
          borderRadius: 'var(--radius-pill)',
          border: '1px solid rgba(16, 185, 129, 0.3)'
        }}>
          HUD v2.4 ONLINE
        </span>
      </div>

      {/* Radar Target Circle Sweep */}
      <div style={{
        position: 'relative',
        width: '140px',
        height: '140px',
        margin: '0 auto 24px auto',
        borderRadius: '50%',
        border: '1px solid rgba(6, 182, 212, 0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)',
        boxShadow: '0 0 25px rgba(6, 182, 212, 0.2)'
      }}>
        <div style={{ width: '90px', height: '90px', borderRadius: '50%', border: '1px dashed rgba(16, 185, 129, 0.4)' }} />
        <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid rgba(168, 85, 247, 0.4)' }} />

        <div style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          background: 'conic-gradient(from 0deg, transparent 0deg, transparent 270deg, rgba(16, 185, 129, 0.35) 360deg)',
          animation: 'spinRadar 4s linear infinite',
          pointerEvents: 'none'
        }} />

        <div style={{
          position: 'absolute',
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          background: '#10b981',
          boxShadow: '0 0 15px #10b981'
        }} />
      </div>

      {/* Interactive Tech Nodes Selector */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '16px' }}>
        {techNodes.map((node, idx) => (
          <button
            key={node.id}
            onClick={() => setSelectedNode(idx)}
            style={{
              padding: '10px 12px',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid',
              borderColor: selectedNode === idx ? node.color : 'var(--border-glass)',
              background: selectedNode === idx ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.02)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.25s ease',
              textAlign: 'left'
            }}
          >
            {node.icon}
            <span style={{ fontSize: '0.78rem', fontWeight: '700', color: selectedNode === idx ? 'var(--text-primary)' : 'var(--text-muted)' }}>
              {node.title}
            </span>
          </button>
        ))}
      </div>

      {/* Selected Node Telemetry Card */}
      <div style={{
        padding: '14px 16px',
        borderRadius: 'var(--radius-sm)',
        background: 'rgba(6, 5, 11, 0.75)',
        border: `1px solid ${techNodes[selectedNode].color}`,
        boxShadow: `0 0 15px ${techNodes[selectedNode].color}25`
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: '700', color: techNodes[selectedNode].color }}>
            {techNodes[selectedNode].title}
          </span>
          <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
            {techNodes[selectedNode].stat}
          </span>
        </div>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.5' }}>
          {techNodes[selectedNode].desc}
        </p>
      </div>

      <style>{`
        @keyframes spinRadar {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
