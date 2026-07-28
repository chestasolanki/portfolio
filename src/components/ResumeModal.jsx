import React from 'react';
import { X, Mail, Globe, Code2, Download, ExternalLink } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ padding: '0', overflow: 'hidden' }}
      >
        {/* Modal Top Control Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '14px 20px',
          background: 'var(--bg-card)',
          borderBottom: '1px solid var(--border-glass)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="pulse-dot" />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--text-primary)', fontWeight: '700' }}>
              Chesta_Solanki_Resume.pdf
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <a
              href="/Chesta_Solanki_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
              style={{ padding: '6px 14px', fontSize: '12px' }}
            >
              <ExternalLink size={13} />
              <span>Open in New Tab</span>
            </a>

            <a
              href="/Chesta_Solanki_Resume.pdf"
              download="Chesta_Solanki_Resume.pdf"
              className="btn-primary"
              style={{ padding: '6px 14px', fontSize: '12px' }}
            >
              <Download size={13} />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-glass)',
                borderRadius: '50%',
                width: '30px',
                height: '30px',
                color: 'var(--text-primary)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Printable Resume Canvas */}
        <div style={{ padding: '32px 36px', background: 'var(--bg-surface)' }}>
          
          {/* Header */}
          <div style={{
            borderBottom: '2px solid var(--border-glass)',
            paddingBottom: '20px',
            marginBottom: '24px'
          }}>
            <h1 className="font-serif" style={{ fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '4px' }}>
              CHESTA SOLANKI
            </h1>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: '#38bdf8', fontWeight: '700', marginBottom: '14px' }}>
              Full-Stack Developer
            </div>

            {/* Contact Details */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '14px',
              fontSize: '13px',
              color: 'var(--text-secondary)'
            }}>
              <a href="mailto:chestasolanki664@gmail.com" style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Mail size={13} style={{ color: '#38bdf8' }} />
                <span>chestasolanki664@gmail.com</span>
              </a>

              <a href="https://linkedin.com/in/chestasolanki1/" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Globe size={13} style={{ color: '#38bdf8' }} />
                <span>linkedin.com/in/chestasolanki1/</span>
              </a>

              <a href="https://github.com/chestasolanki" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Code2 size={13} style={{ color: '#38bdf8' }} />
                <span>github.com/chestasolanki</span>
              </a>
            </div>
          </div>

          {/* Education Section */}
          <div style={{ marginBottom: '24px' }}>
            <h2 style={{ fontSize: '14px', color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px', fontFamily: 'var(--font-body)', fontWeight: '600' }}>
              EDUCATION
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ background: 'var(--bg-card)', padding: '14px 18px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-glass)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', fontWeight: '700', fontSize: '14px' }}>
                  <span>GL Bajaj Institute of Technology and Management</span>
                  <span style={{ color: '#38bdf8' }}>CGPA: 8.13</span>
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '2px' }}>
                  Bachelor of Technology (B.Tech) - Information Technology (2022 - 2026)
                </div>
              </div>

              <div style={{ background: 'var(--bg-card)', padding: '12px 18px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-glass)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', fontWeight: '700', fontSize: '13.5px' }}>
                  <span>Senior Secondary School (Class XII) — CBSE</span>
                  <span style={{ color: '#38bdf8' }}>88.6%</span>
                </div>
              </div>

              <div style={{ background: 'var(--bg-card)', padding: '12px 18px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-glass)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', fontWeight: '700', fontSize: '13.5px' }}>
                  <span>Secondary School (Class X) — CBSE</span>
                  <span style={{ color: '#38bdf8' }}>87.8%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div style={{ marginBottom: '24px' }}>
            <h2 style={{ fontSize: '14px', color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px', fontFamily: 'var(--font-body)', fontWeight: '600' }}>
              WORK EXPERIENCE
            </h2>
            <div style={{ background: 'var(--bg-card)', padding: '18px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-glass)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', fontWeight: '700', fontSize: '14.5px', marginBottom: '2px' }}>
                <span>Software Developer Intern</span>
                <span style={{ fontSize: '12.5px', color: 'var(--text-muted)', fontWeight: '400' }}>June 2026 – Present</span>
              </div>
              <div style={{ fontSize: '13.5px', color: '#38bdf8', fontWeight: '600', marginBottom: '10px' }}>
                LIMETTA
              </div>
              <ul style={{ paddingLeft: '18px', fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                <li>Developed and maintained a production-ready web application using React.js, Node.js, Express.js, and REST APIs.</li>
                <li>Built responsive, reusable UI components and implemented modern frontend best practices.</li>
                <li>Designed and integrated backend APIs, authentication, and database operations to support core business features.</li>
                <li>Collaborated with the founder and team to translate business requirements into scalable technical solutions.</li>
                <li>Improved application performance, fixed bugs, and optimized the user experience across devices.</li>
              </ul>
            </div>
          </div>

          {/* Projects Section */}
          <div style={{ marginBottom: '24px' }}>
            <h2 style={{ fontSize: '14px', color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px', fontFamily: 'var(--font-body)', fontWeight: '600' }}>
              FEATURED PROJECTS
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ background: 'var(--bg-card)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-glass)' }}>
                <div style={{ fontWeight: '700', fontSize: '14px' }}>Craftly — AI-Powered Website Generation Platform</div>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: '6px 0', lineHeight: '1.55' }}>
                  Developed an AI-powered website generation platform transforming natural language prompts into functional websites using LLMs with real-time SSE streaming.
                </p>
                <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: '#38bdf8' }}>
                  Tools: LLMs, Prompt Engineering, Node.js, Express.js, REST APIs, SSE, HTML, CSS, JS
                </div>
              </div>

              <div style={{ background: 'var(--bg-card)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-glass)' }}>
                <div style={{ fontWeight: '700', fontSize: '14px' }}>PrepAI — AI Interview Preparation Platform</div>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: '6px 0', lineHeight: '1.55' }}>
                  Built a full-stack AI interview preparation platform using React.js, Node.js, Express.js, and MySQL with authentication, analytics dashboards, and interview workflows.
                </p>
                <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: '#38bdf8' }}>
                  Tools: React.js, Node.js, Express.js, MySQL, REST APIs, Tailwind CSS
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills & Certifications */}
          <div>
            <h2 style={{ fontSize: '14px', color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px', fontFamily: 'var(--font-body)', fontWeight: '600' }}>
              CERTIFICATIONS &amp; SKILLS
            </h2>
            <div style={{ background: 'var(--bg-card)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-glass)', fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.65' }}>
              <div style={{ marginBottom: '8px' }}>
                <strong style={{ color: '#38bdf8' }}>Certifications:</strong>
                <ul style={{ paddingLeft: '18px', marginTop: '4px' }}>
                  <li><strong>AWS</strong> – Machine Learning Foundations</li>
                  <li><strong>Palo Alto</strong> – Cloud Security Automation, Network Security, Operations &amp; Configurations</li>
                  <li><strong>Red Hat</strong> – Red Hat System Administration</li>
                  <li><strong>Coursera / DeepLearning.AI</strong> – Supervised Machine Learning: Regression and Classification</li>
                  <li><strong>Udemy</strong> – Complete C++ STL</li>
                </ul>
              </div>

              <div><strong>Programming Languages:</strong> C++, JavaScript, Python</div>
              <div><strong>Frontend Development:</strong> React.js, HTML5, CSS3, Tailwind CSS, Responsive Design</div>
              <div><strong>Backend Development:</strong> Node.js, Express.js, RESTful APIs, SSE, Authentication &amp; Authorization</div>
              <div><strong>Databases:</strong> MySQL, MongoDB, Database Optimization</div>
              <div><strong>AI &amp; ML Integrations:</strong> LLMs, RAG, Prompt Engineering, Server-Sent Events (SSE)</div>
              <div><strong>Developer Tools &amp; OS:</strong> Git, GitHub, Postman, Linux, VS Code</div>
              <div><strong>Core Computer Science:</strong> Data Structures &amp; Algorithms, Object-Oriented Programming (OOP), Operating Systems, DBMS, Computer Networks</div>
              <div style={{ marginTop: '6px', color: '#38bdf8' }}>
                <strong>Coding Profiles:</strong> LeetCode (250+ Problems Solved)
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
