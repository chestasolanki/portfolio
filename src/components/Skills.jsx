import React from 'react';
import { motion } from 'framer-motion';
import { Award, Sparkles, Terminal, Code2, Database, Brain, Cpu, Wrench } from 'lucide-react';
import CertificateSlideshow from './CertificateSlideshow';

export default function Skills() {
  const skillClusters = [
    {
      icon: Terminal,
      title: 'Programming Languages',
      skills: ['C++', 'JavaScript (ES2024)', 'Python 3', 'TypeScript'],
      accent: 'var(--accent-violet)'
    },
    {
      icon: Code2,
      title: 'Frontend Architecture',
      skills: ['React 19', 'Monaco Editor', 'HTML5 & Modern CSS3', 'Tailwind CSS', 'Framer Motion', 'Responsive UI'],
      accent: 'var(--accent-pink)'
    },
    {
      icon: Cpu,
      title: 'Backend & Distributed Systems',
      skills: ['Node.js', 'Express 5', 'Socket.io', 'Yjs (CRDTs)', 'RESTful APIs', 'Server-Sent Events (SSE)', 'JWT Auth'],
      accent: 'var(--accent-cyan)'
    },
    {
      icon: Database,
      title: 'Databases & Cloud Infrastructure',
      skills: ['Docker (Multi-Stage)', 'AWS ECR/ECS', 'MySQL Relational DB', 'MongoDB NoSQL', 'AWS Cloud (EC2, S3)'],
      accent: 'var(--accent-coral)'
    },
    {
      icon: Brain,
      title: 'Generative AI & Machine Learning',
      skills: ['LLM Orchestration', 'Groq API (Llama 3.3)', 'Gemini API', 'Prompt Engineering', 'RAG Architectures', 'Supervised ML'],
      accent: 'var(--accent-pink)'
    },
    {
      icon: Wrench,
      title: 'DevOps, Tools & Operating Systems',
      skills: ['Git & GitHub', 'Postman API Testing', 'Red Hat Enterprise Linux', 'Vite & Webpack', 'Linux CLI Bash'],
      accent: 'var(--accent-violet)'
    }
  ];

  return (
    <section id="skills" className="purrweb-section">
      <div className="container" style={{ maxWidth: '1320px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div className="purrweb-section-header">
          <div className="purrweb-badge">
            <Sparkles size={12} style={{ color: 'var(--accent-violet)' }} />
            <span className="purrweb-badge-text">TECHNICAL EXPERTISE</span>
          </div>
          <h2 className="purrweb-section-title">
            Skills &amp; <span className="purrweb-serif-accent">Capabilities</span>
          </h2>
          <p className="purrweb-section-subtitle">
            A comprehensive spectrum of full-stack software development, generative AI integrations, and cloud infrastructure.
          </p>
        </div>

        {/* Clean, Open Skill Clusters Grid (Borderless) */}
        <div className="purrweb-skills-grid">
          {skillClusters.map((cluster, idx) => {
            const Icon = cluster.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="purrweb-skill-cluster"
              >
                <div className="cluster-header">
                  <div className="cluster-icon-wrap" style={{ color: cluster.accent }}>
                    <Icon size={18} />
                  </div>
                  <h3 className="cluster-title">{cluster.title}</h3>
                </div>

                <div className="cluster-pills-wrap">
                  {cluster.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="purrweb-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* =========================================================================
            VERIFIED CREDENTIALS & CERTIFICATES SLIDESHOW
            3D Center-Zoom Coverflow with 6-second auto-cycle and image preview
            ========================================================================= */}
        <div style={{ marginTop: '90px' }}>
          <div className="purrweb-section-header" style={{ marginBottom: '24px', textAlign: 'left' }}>
            <div className="purrweb-badge" style={{ marginBottom: '12px' }}>
              <Award size={12} style={{ color: 'var(--accent-coral)' }} />
              <span className="purrweb-badge-text">INDUSTRY CREDENTIALS</span>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px'
            }}>
              <h3 className="purrweb-section-title" style={{ fontSize: 'clamp(1.8rem, 3.4vw, 2.6rem)', margin: 0 }}>
                Verified <span className="purrweb-serif-accent">Certificates</span>
              </h3>
              <span className="purrweb-meta-text">
                Auto-advancing every 6s • Click to inspect full certificate
              </span>
            </div>
          </div>

          {/* Interactive Certificate Slideshow */}
          <CertificateSlideshow />
        </div>

      </div>
    </section>
  );
}
