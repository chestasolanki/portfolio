import React, { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

export default function TechTerminalWidget() {
  const [lines, setLines] = useState([]);

  const terminalSequence = [
    { text: '$ initializing developer scan...', color: 'var(--text-muted)' },
    { text: '$ loading Chesta Solanki tech stack...', color: 'var(--text-muted)' },
    { text: '$ languages: C++, JavaScript, Python', color: '#10b981' },
    { text: '$ frontend: React.js, Tailwind CSS, HTML5/CSS3', color: 'var(--accent-cyan)' },
    { text: '$ backend: Node.js, Express.js, REST APIs', color: 'var(--accent-cyan)' },
    { text: '$ databases: MongoDB Atlas, MySQL', color: 'var(--accent-purple)' },
    { text: '$ ai/ml: LLMs, LangChain, RAG, PyTorch', color: '#f59e0b' },
    { text: '$ status: verified & ready for opportunities', color: '#10b981', bold: true }
  ];

  useEffect(() => {
    let currentIdx = 0;
    const interval = setInterval(() => {
      if (currentIdx < terminalSequence.length) {
        setLines((prev) => [...prev, terminalSequence[currentIdx]]);
        currentIdx++;
      } else {
        clearInterval(interval);
      }
    }, 450);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="glass-card"
      style={{
        padding: '0',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--border-glass-hover)',
        boxShadow: '0 20px 45px rgba(0, 0, 0, 0.7), 0 0 30px rgba(16, 185, 129, 0.15)',
        overflow: 'hidden',
        fontFamily: 'var(--font-mono)',
        width: '100%',
        maxWidth: '460px'
      }}
    >
      <div style={{
        padding: '10px 16px',
        background: 'rgba(15, 12, 24, 0.95)',
        borderBottom: '1px solid var(--border-glass)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444', display: 'inline-block' }} />
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b', display: 'inline-block' }} />
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
        </div>

        <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Terminal size={12} style={{ color: '#10b981' }} />
          <span>tech_stack.sh</span>
        </div>

        <div style={{ fontSize: '0.68rem', color: '#10b981', background: 'rgba(16, 185, 129, 0.15)', padding: '2px 8px', borderRadius: 'var(--radius-pill)' }}>
          LIVE
        </div>
      </div>

      <div style={{
        padding: '20px',
        fontSize: '0.82rem',
        lineHeight: '1.7',
        minHeight: '230px',
        background: 'rgba(6, 5, 11, 0.9)',
        display: 'flex',
        flexDirection: 'column',
        gap: '6px'
      }}>
        {lines.map((line, idx) => (
          <div
            key={idx}
            style={{
              color: line.color,
              fontWeight: line.bold ? '700' : '400',
              animation: 'fadeIn 0.3s ease'
            }}
          >
            {line.text}
          </div>
        ))}
        {lines.length < terminalSequence.length && (
          <div style={{ color: '#10b981', animation: 'pulse 1s infinite' }}>
            &gt; scanning...
          </div>
        )}
      </div>
    </div>
  );
}
