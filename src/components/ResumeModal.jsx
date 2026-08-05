import React from 'react';
import { X, Mail, Globe, Code2, Download, ExternalLink, MapPin, Phone } from 'lucide-react';

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
            <h1 className="font-italic" style={{ fontSize: '2.2rem', color: 'var(--text-primary)', marginBottom: '6px', fontStyle: 'italic', fontWeight: '500', letterSpacing: '0.02em' }}>
              Chesta Solanki
            </h1>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent-purple)', fontWeight: '500', marginBottom: '14px' }}>
              Full-Stack &amp; AI Engineer
            </div>

            {/* Contact Details */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '14px',
              fontSize: '13px',
              color: 'var(--text-secondary)'
            }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <MapPin size={13} style={{ color: '#38bdf8' }} />
                <span>Greater Noida</span>
              </span>

              <a href="mailto:chestasolanki664@gmail.com" style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Mail size={13} style={{ color: '#38bdf8' }} />
                <span>chestasolanki664@gmail.com</span>
              </a>

              <a href="tel:+917455042260" style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Phone size={13} style={{ color: '#38bdf8' }} />
                <span>+91-7455042260</span>
              </a>

              <a href="https://chestasolanki.tech" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Globe size={13} style={{ color: '#38bdf8' }} />
                <span>chestasolanki.tech</span>
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
                  Bachelor of Technology (B.Tech) — Information Technology (2023 – 2027)
                </div>
              </div>

              <div style={{ background: 'var(--bg-card)', padding: '12px 18px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-glass)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', fontWeight: '700', fontSize: '13.5px' }}>
                  <span>Senior Secondary School (Class XII) — CBSE</span>
                  <span style={{ color: '#38bdf8' }}>88.6% (2022 – 2023)</span>
                </div>
              </div>

              <div style={{ background: 'var(--bg-card)', padding: '12px 18px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-glass)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', fontWeight: '700', fontSize: '13.5px' }}>
                  <span>Secondary School (Class X) — CBSE</span>
                  <span style={{ color: '#38bdf8' }}>87.8% (2020 – 2021)</span>
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
                <span>Freelance Full-Stack Developer</span>
              </div>
              <div style={{ fontSize: '13.5px', color: '#38bdf8', fontWeight: '600', marginBottom: '10px' }}>
                LIMETTA
              </div>
              <ul style={{ paddingLeft: '18px', fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                <li>Developed a full-stack e-commerce platform for luxury interior decor for Limetta using React 19, Node.js, Express.js, and MongoDB with Framer Motion animations.</li>
                <li>Integrated Razorpay for payment processing and Delhivery Logistics for order fulfillment, waybill tracking, shipping updates, and automated email receipts via Resend.</li>
                <li>Built customer portals with custom product finishes, search/filtering, cart, wishlist, product reviews, and secure JWT-based authentication.</li>
                <li>Designed an Admin Portal for real-time inventory management, order status tracking (Packed, Shipped, Out for Delivery), and cloud media storage via ImageKit API.</li>
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
                  Developed an AI website generation platform that turns natural language prompts into functional websites using Llama 3.3 70B via the Groq API, with a structured pipeline producing consistent, multi-file HTML/CSS/JS output. Implemented real-time LLM streaming with Server-Sent Events (SSE) and automated backend file creation for a live preview.
                </p>
                <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: '#38bdf8' }}>
                  Tools: Groq API, Llama 3.3 70B, Prompt Engineering, Node.js, Express.js, REST APIs, SSE, HTML/CSS/JS
                </div>
              </div>

              <div style={{ background: 'var(--bg-card)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-glass)' }}>
                <div style={{ fontWeight: '700', fontSize: '14px' }}>PrepAI — AI Interview Preparation Platform</div>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: '6px 0', lineHeight: '1.55' }}>
                  Built a full-stack AI interview preparation platform using React.js, Node.js, Express.js, and MySQL with authentication and role-based access. Built analytics dashboards visualizing performance trends, topic-wise strengths/weaknesses, and company-wise coverage on a normalized, query-optimized MySQL schema.
                </p>
                <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: '#38bdf8' }}>
                  Tools: React.js, Node.js, Express.js, MySQL, REST APIs, Tailwind CSS
                </div>
              </div>

              <div style={{ background: 'var(--bg-card)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-glass)' }}>
                <div style={{ fontWeight: '700', fontSize: '14px' }}>ResumeMatch — GenAI Resume &amp; JD Matching Platform</div>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: '6px 0', lineHeight: '1.55' }}>
                  Built a full-stack GenAI platform comparing a candidate's resume against a JD, returning a quantified match score and skill-gap breakdown. Designed a document ingestion pipeline parsing resumes/JDs (PDF/DOCX) using vector embeddings for semantic matching beyond keywords, integrating an LLM for human-readable feedback.
                </p>
                <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: '#38bdf8' }}>
                  Tools: React.js, Node.js, Express.js, LLMs, LangChain, Vector DB, Prompt Engineering, REST APIs
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
                  <li><strong>Palo Alto</strong> – Cloud Security Automation &amp; Network Security Operations</li>
                  <li><strong>Red Hat</strong> – Red Hat System Administration</li>
                </ul>
              </div>

              <div><strong>Programming Languages:</strong> C++, JavaScript, Python</div>
              <div><strong>Frontend:</strong> React.js, Tailwind CSS, HTML5, CSS3</div>
              <div><strong>Full Stack Development:</strong> Node.js, Express.js, REST APIs</div>
              <div><strong>AI / ML:</strong> Scikit-learn, PyTorch, NumPy, Pandas, LLMs, LangChain, RAG, Prompt Engineering</div>
              <div><strong>Databases:</strong> MySQL, MongoDB, Redis, Pinecone, ChromaDB</div>
              <div><strong>Developer Tools:</strong> Git, GitHub, Postman, Linux</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
