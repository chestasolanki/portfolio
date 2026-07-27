import React, { useState } from 'react';
import { X, Printer, Copy, Check, Download, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyText = () => {
    const text = `
CHESTA SOLANKI
Full-Stack Developer | Noida, India
Email: chestasolanki664@gmail.com | Phone: +91-7455042260
LinkedIn: linkedin.com/in/chestasolanki1/ | GitHub: github.com/chestasolanki

EDUCATION:
- B.Tech in Information Technology | GL Bajaj Institute of Technology and Management (2023 - 2027) | CGPA: 8.13
- Senior Secondary School (XIIth) | CBSE (2022 - 2023) | Percentage: 88.6%
- Secondary School (Xth) | CBSE (2020 - 2021) | Percentage: 87.8%

WORK EXPERIENCE:
Full-Stack Developer Intern | Limetta (Jul 2026 - Present)
- Developed a full-stack MERN e-commerce platform for premium interior decor products.
- Built customer and admin portals with JWT-based authentication and role-based access control.
- Developed RESTful APIs for products, categories, cart, wishlist, orders, and user management using Node.js, Express.js, and MongoDB.
- Implemented an admin dashboard for product, inventory and order management with dynamic order status tracking.
- Integrated MongoDB Atlas with the React frontend using secure REST APIs.

PROJECTS:
Craftly - AI Website Generation Platform (GitHub: github.com/chestasolanki/Craftly)
- AI-powered website generation platform transforming natural language prompts into functional websites using Llama 3.3 70B.
- Tech: Llama 3.3 70B, Prompt Engineering, Node.js, Express.js, REST APIs, SSE, HTML, CSS, JS.

PrepAI - AI Interview Preparation Platform (GitHub: github.com/chestasolanki/PrepAI)
- Full-stack AI interview preparation platform with analytics, preparation tracking, and interview workflows.
- Tech: React.js, Node.js, Express.js, MySQL, REST APIs, Tailwind CSS.

SKILLS:
- Languages: C++, JavaScript, Python
- Core CS: Data Structures & Algorithms, DBMS, Operating Systems, OOP
- Frontend: React.js, Tailwind CSS, HTML5, CSS3
- Full Stack & APIs: Node.js, Express.js, REST APIs
- AI / ML: Scikit-learn, PyTorch, NumPy, Pandas, LLMs, LangChain, RAG, Prompt Engineering
- Databases: MySQL, MongoDB, Pinecone, ChromaDB
- Developer Tools: Git, GitHub, Postman, Linux

CERTIFICATIONS:
- AWS - Machine Learning Foundations
- Palo Alto - Cloud Security Automation, Network Security, Operations & Configurations
- Red Hat - Red Hat System Administration

HIGHLIGHTS:
- LeetCode 100 Days Coding Badge (250+ solved)
- SIH Hackathon Participant & Department Club Management Lead
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ padding: '36px' }}>
        
        {/* Header Controls */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', borderBottom: '1px solid var(--border-glass)', paddingBottom: '16px' }}>
          <div>
            <span className="glass-pill">RESUME DOCUMENT</span>
            <h2 className="font-serif" style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '6px', margin: 0 }}>
              Chesta Solanki — Curriculum Vitae
            </h2>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              onClick={handleCopyText}
              className="btn-secondary"
              style={{ padding: '8px 14px', fontSize: '0.8rem' }}
            >
              {copied ? <Check size={14} style={{ color: '#10b981' }} /> : <Copy size={14} />}
              <span>{copied ? 'Copied!' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="btn-primary"
              style={{ padding: '8px 16px', fontSize: '0.8rem' }}
            >
              <Printer size={14} />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-glass)',
                color: 'var(--text-primary)',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div style={{ color: 'var(--text-primary)', lineHeight: '1.65', fontSize: '0.92rem' }}>
          
          {/* Header Contact Block */}
          <div style={{ textAlign: 'center', marginBottom: '28px', borderBottom: '1px dashed var(--border-glass)', paddingBottom: '20px' }}>
            <h1 className="font-serif" style={{ fontSize: '2.2rem', fontWeight: '800', letterSpacing: '-0.02em', margin: 0 }}>
              CHESTA SOLANKI
            </h1>
            <div style={{ color: 'var(--accent-cyan)', fontWeight: '600', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', margin: '4px 0 12px 0' }}>
              Full-Stack Developer
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '16px', color: 'var(--text-muted)', fontSize: '0.84rem' }}>
              <span>chestasolanki664@gmail.com</span>
              <span>•</span>
              <span>+91-7455042260</span>
              <span>•</span>
              <span>Noida, India</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '10px' }}>
              <a href="https://linkedin.com/in/chestasolanki1/" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-cyan)', textDecoration: 'none', fontSize: '0.84rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <LinkedinIcon size={14} /> linkedin.com/in/chestasolanki1/
              </a>
              <a href="https://github.com/chestasolanki" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-cyan)', textDecoration: 'none', fontSize: '0.84rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <GithubIcon size={14} /> github.com/chestasolanki
              </a>
            </div>
          </div>

          {/* Education */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '700', borderBottom: '1px solid var(--accent-cyan)', paddingBottom: '4px', marginBottom: '12px', color: 'var(--accent-cyan)' }}>
              EDUCATION
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <div>
                  <strong>GL Bajaj Institute of Technology and Management</strong> — <i>B.Tech in Information Technology</i>
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>2023 – 2027 | CGPA: 8.13</div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <div>
                  <strong>Senior Secondary School (XIIth)</strong> — <i>CBSE</i>
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>2022 – 2023 | 88.6%</div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <div>
                  <strong>Secondary School (Xth)</strong> — <i>CBSE</i>
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>2020 – 2021 | 87.8%</div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '700', borderBottom: '1px solid var(--accent-cyan)', paddingBottom: '4px', marginBottom: '12px', color: 'var(--accent-cyan)' }}>
              WORK EXPERIENCE
            </h3>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '6px' }}>
              <strong>Limetta — <i>Full-Stack Developer Intern</i></strong>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>Jul 2026 – Present</span>
            </div>
            
            <ul style={{ paddingLeft: '20px', margin: 0, display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <li>Developed a full-stack MERN e-commerce platform for premium interior decor products.</li>
              <li>Built customer and admin portals with JWT-based authentication and role-based access control.</li>
              <li>Developed RESTful APIs for products, categories, cart, wishlist, orders, and user management using Node.js, Express.js, and MongoDB.</li>
              <li>Implemented an admin dashboard for product, inventory and order management with dynamic order status tracking.</li>
              <li>Integrated MongoDB Atlas with the React frontend using secure REST APIs.</li>
            </ul>
          </div>

          {/* Projects */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '700', borderBottom: '1px solid var(--accent-cyan)', paddingBottom: '4px', marginBottom: '12px', color: 'var(--accent-cyan)' }}>
              PROJECTS
            </h3>

            <div style={{ marginBottom: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <strong>Craftly — <i>AI Website Generation Platform</i></strong>
                <a href="https://github.com/chestasolanki/Craftly" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-cyan)', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: '0.82rem' }}>
                  github.com/chestasolanki/Craftly
                </a>
              </div>
              <ul style={{ paddingLeft: '20px', margin: '4px 0 0 0' }}>
                <li>Developed an AI-powered website generation platform that transforms natural language prompts into fully functional websites using the Llama 3.3 70B Large Language Model. Implemented prompt engineering, real-time LLM response streaming with Server-Sent Events (SSE), automated code generation, file creation, and live preview deployment.</li>
                <li style={{ fontStyle: 'italic', fontSize: '0.85rem', marginTop: '2px' }}>Tools Used: Llama 3.3 70B, Prompt Engineering, Node.js, Express.js, REST APIs, SSE, HTML, CSS, JavaScript.</li>
              </ul>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <strong>PrepAI — <i>AI Interview Preparation Platform</i></strong>
                <a href="https://github.com/chestasolanki/PrepAI" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-cyan)', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: '0.82rem' }}>
                  github.com/chestasolanki/PrepAI
                </a>
              </div>
              <ul style={{ paddingLeft: '20px', margin: '4px 0 0 0' }}>
                <li>Built a full-stack AI interview preparation platform using React.js, Node.js, Express.js, and MySQL with authentication, analytics dashboards, company-wise preparation tracking, interview workflows, and performance tracking.</li>
                <li style={{ fontStyle: 'italic', fontSize: '0.85rem', marginTop: '2px' }}>Tools Used: React.js, Node.js, Express.js, MySQL, REST APIs, Tailwind CSS.</li>
              </ul>
            </div>
          </div>

          {/* Technical Skills */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '700', borderBottom: '1px solid var(--accent-cyan)', paddingBottom: '4px', marginBottom: '12px', color: 'var(--accent-cyan)' }}>
              TECHNICAL SKILLS
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '8px', fontSize: '0.88rem' }}>
              <div><strong>Languages:</strong> C++, JavaScript, Python</div>
              <div><strong>Core CS:</strong> DSA, DBMS, OS, OOP</div>
              <div><strong>Frontend:</strong> React.js, Tailwind CSS, HTML5/CSS3</div>
              <div><strong>Full Stack:</strong> Node.js, Express.js, REST APIs</div>
              <div><strong>AI / ML:</strong> PyTorch, Scikit-learn, LLMs, LangChain, RAG</div>
              <div><strong>Databases:</strong> MySQL, MongoDB, Pinecone, ChromaDB</div>
              <div><strong>Tools:</strong> Git, GitHub, Postman, Linux</div>
            </div>
          </div>

          {/* Certifications & Achievements */}
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '700', borderBottom: '1px solid var(--accent-cyan)', paddingBottom: '4px', marginBottom: '12px', color: 'var(--accent-cyan)' }}>
              CERTIFICATIONS & ACHIEVEMENTS
            </h3>
            
            <ul style={{ paddingLeft: '20px', margin: 0, display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.88rem' }}>
              <li>AWS Certified — Machine Learning Foundations</li>
              <li>Palo Alto Certified — Cloud Security Automation, Network Security, Operations & Configurations</li>
              <li>Red Hat Certified — Red Hat System Administration</li>
              <li>LeetCode 100 Days Badge (250+ solved) & Department Management Lead</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}
