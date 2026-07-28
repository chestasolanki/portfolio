import React from 'react';
import { Code, Terminal, Cpu, Database } from 'lucide-react';

export default function WhatIDo() {
  const services = [
    {
      icon: <Code size={24} style={{ color: 'var(--accent-cyan)' }} />,
      title: 'Full-Stack Web Development',
      desc: 'Building responsive, scalable web applications with React.js, Node.js, Express.js, and MongoDB.',
      tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB']
    },
    {
      icon: <Cpu size={24} style={{ color: 'var(--accent-rose)' }} />,
      title: 'AI & LLM Integration',
      desc: 'Integrating Large Language Models (LLMs), real-time Server-Sent Events (SSE) streaming, PyTorch, RAG, and prompt engineering.',
      tags: ['LLM Streaming', 'RAG Pipelines']
    }
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
      {services.map((srv, idx) => (
        <div key={idx} className="glass-card" style={{ padding: '24px', borderRadius: 'var(--radius-md)' }}>
          <div style={{ marginBottom: '14px' }}>{srv.icon}</div>
          <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '8px' }}>
            {srv.title}
          </h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '16px' }}>
            {srv.desc}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {srv.tags.map((tag, tIdx) => (
              <span key={tIdx} style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', background: 'rgba(6, 182, 212, 0.1)', color: 'var(--accent-cyan)', padding: '3px 10px', borderRadius: 'var(--radius-pill)' }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
