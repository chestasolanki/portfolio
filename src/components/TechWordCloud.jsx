import React, { useEffect, useRef } from 'react';

export default function TechWordCloud() {
  const skills = [
    { name: 'JavaScript', size: '1.6rem', color: '#f7df1e', bold: true },
    { name: 'React.js', size: '1.5rem', color: '#61dafb', bold: true },
    { name: 'Node.js', size: '1.4rem', color: '#68a063', bold: true },
    { name: 'Express.js', size: '1.2rem', color: '#ffffff' },
    { name: 'C++', size: '1.3rem', color: '#00599c', bold: true },
    { name: 'Python', size: '1.4rem', color: '#3776ab', bold: true },
    { name: 'MongoDB', size: '1.3rem', color: '#47a248' },
    { name: 'MySQL', size: '1.3rem', color: '#00758f' },
    { name: 'Tailwind CSS', size: '1.2rem', color: '#38bdf8' },
    { name: 'HTML5', size: '1.1rem', color: '#e34f26' },
    { name: 'CSS3', size: '1.1rem', color: '#1572b6' },
    { name: 'RAG', size: '1.3rem', color: '#10b981', bold: true },
    { name: 'LLMs', size: '1.3rem', color: '#a855f7', bold: true },
    { name: 'PyTorch', size: '1.2rem', color: '#ee4c2c' },
    { name: 'Scikit-learn', size: '1.1rem', color: '#f7931e' },
    { name: 'Git', size: '1.1rem', color: '#f05032' },
    { name: 'GitHub', size: '1.1rem', color: '#ffffff' },
    { name: 'Postman', size: '1.1rem', color: '#ff6c37' },
    { name: 'Linux', size: '1.1rem', color: '#fcc624' },
    { name: 'Pinecone', size: '1.1rem', color: '#10b981' },
    { name: 'ChromaDB', size: '1.1rem', color: '#ec4899' },
    { name: 'LangChain', size: '1.2rem', color: '#06b6d4' },
    { name: 'DSA', size: '1.2rem', color: '#a855f7' }
  ];

  return (
    <div style={{
      position: 'relative',
      padding: '36px',
      borderRadius: 'var(--radius-lg)',
      background: 'rgba(18, 14, 28, 0.7)',
      backdropFilter: 'blur(16px)',
      border: '1px solid var(--border-glass)',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '14px',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '300px'
    }}>
      {skills.map((skill, idx) => (
        <span
          key={idx}
          style={{
            fontSize: skill.size,
            fontWeight: skill.bold ? '800' : '500',
            color: skill.color,
            fontFamily: skill.bold ? 'var(--font-body)' : 'var(--font-mono)',
            padding: '6px 14px',
            borderRadius: 'var(--radius-pill)',
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            cursor: 'default',
            transition: 'transform 0.3s ease, background 0.3s ease, border-color 0.3s ease',
            userSelect: 'none'
          }}
          className="word-cloud-item"
        >
          {skill.name}
        </span>
      ))}

      <style>{`
        .word-cloud-item:hover {
          transform: scale(1.15) translateY(-4px);
          background: rgba(16, 185, 129, 0.15) !important;
          border-color: #10b981 !important;
          box-shadow: 0 0 20px rgba(16, 185, 129, 0.3);
        }
      `}</style>
    </div>
  );
}
