import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Layout,
  Server,
  Brain,
  Database,
  Wrench,
  Sparkles
} from 'lucide-react';

// 3D Metallic/Glossy Pushpin Vector
function PushPin({ color = '#00e5ff' }) {
  return (
    <div className="pinned-thumbtack-wrapper" aria-hidden="true">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="thumbtack-svg">
        {/* Soft realistic shadow cast on the card */}
        <ellipse cx="16" cy="22" rx="9" ry="4" fill="rgba(0, 0, 0, 0.6)" filter="blur(2px)" />
        {/* Needle metal shaft */}
        <path d="M16 18 L16 23" stroke="#cbd5e1" strokeWidth="2.2" strokeLinecap="round" />
        {/* Pin base ring shadow */}
        <ellipse cx="16" cy="16" rx="7" ry="2.5" fill="rgba(0, 0, 0, 0.35)" />
        {/* Pin circular 3D head */}
        <circle cx="16" cy="12" r="8" fill={color} />
        {/* Inner specular ring */}
        <circle cx="16" cy="12" r="6.2" fill="none" stroke="rgba(255, 255, 255, 0.45)" strokeWidth="1" />
        {/* Specular 3D light reflection */}
        <ellipse cx="13.5" cy="9.2" rx="3.5" ry="2" fill="rgba(255, 255, 255, 0.85)" />
        {/* Core shiny center dot */}
        <circle cx="16" cy="12" r="2.2" fill="rgba(255, 255, 255, 0.95)" />
      </svg>
    </div>
  );
}

export default function Skills({ isActive = true, onNavigate }) {
  // Exact 6 categories and skills specified by the user
  const skillCategories = [
    {
      id: 'languages',
      num: '01',
      title: 'Programming Languages',
      badge: 'CORE SYNTAX & LOGIC',
      skills: ['C++', 'JavaScript', 'Python', 'SQL'],
      icon: Code2,
      pinColor: '#10b981', // Emerald green pin
      glowColor: 'rgba(16, 185, 129, 0.35)',
      tilt: -1.8
    },
    {
      id: 'frontend',
      num: '02',
      title: 'Frontend',
      badge: 'INTERACTIVE UI & STATE',
      skills: ['React.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'SCSS'],
      icon: Layout,
      pinColor: '#ec4899', // Hot pink pin
      glowColor: 'rgba(236, 72, 153, 0.35)',
      tilt: 1.4
    },
    {
      id: 'backend',
      num: '03',
      title: 'Backend',
      badge: 'SERVER RUNTIMES & APIS',
      skills: ['Node.js', 'Express.js', 'REST APIs'],
      icon: Server,
      pinColor: '#00e5ff', // Electric cyan pin
      glowColor: 'rgba(0, 229, 255, 0.35)',
      tilt: -1.2
    },
    {
      id: 'ai',
      num: '04',
      title: 'Artificial Intelligence',
      badge: 'LLMS & VECTOR PIPELINES',
      skills: ['LLMs', 'LangChain', 'RAG', 'Prompt Engineering', 'Embeddings', 'Vector Databases'],
      icon: Brain,
      pinColor: '#a855f7', // Vivid purple pin
      glowColor: 'rgba(168, 85, 247, 0.35)',
      tilt: 1.7
    },
    {
      id: 'databases',
      num: '05',
      title: 'Databases',
      badge: 'RELATIONAL & DOCUMENT DB',
      skills: ['MySQL', 'MongoDB'],
      icon: Database,
      pinColor: '#eab308', // Amber gold pin
      glowColor: 'rgba(234, 179, 8, 0.35)',
      tilt: -1.5
    },
    {
      id: 'tools',
      num: '06',
      title: 'Developer Tools',
      badge: 'DEVOPS & CONTAINERIZATION',
      skills: ['Git', 'GitHub', 'Postman', 'Docker', 'AWS'],
      icon: Wrench,
      pinColor: '#38bdf8', // Sky blue pin
      glowColor: 'rgba(56, 189, 248, 0.35)',
      tilt: 1.5
    }
  ];

  return (
    <section className="purrweb-exact-slide-stage skills-slide-stage">
      {/* Background Vibrant Atmospheric Mesh */}
      <div className="work-atmosphere" aria-hidden="true">
        <div className="work-glow glow-cyan-teal" />
        <div className="work-glow glow-amber-warm" />
        <div className="work-glow glow-magenta" />
        <div className="work-grain" />
      </div>

      <div className="pinned-board-container">
        
        {/* Section Header: Named exactly "Technical Skills" */}
        <motion.div
          className="purrweb-section-header"
          style={{ textAlign: 'center', marginBottom: 'clamp(14px, 2.4vh, 28px)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2
            className="purrweb-section-title"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(2.2rem, 3.6vw, 3.2rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              margin: 0
            }}
          >
            Technical <span className="purrweb-serif-accent">Skills</span>
          </h2>
        </motion.div>

        {/* 
          Background Winding Thread / Dotted Connector Path
          Matching the playful cheatsheet graphic from the user reference
        */}
        <svg className="pinned-connecting-path" viewBox="0 0 1200 480" fill="none" preserveAspectRatio="none">
          <path
            d="M 100 80 Q 400 40, 600 90 T 1100 80 Q 1150 250, 1000 320 T 100 360"
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth="2"
            strokeDasharray="8 8"
          />
        </svg>

        {/* 6 Pinned Cards Grid (3x2 on desktop, zoomed and expanded across the viewport) */}
        <div className="pinned-cards-grid">
          {skillCategories.map((category, idx) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.id}
                className="pinned-skill-card"
                style={{
                  '--pin-color': category.pinColor,
                  '--card-glow': category.glowColor,
                  '--default-tilt': `${category.tilt}deg`
                }}
                initial={{ opacity: 0, y: 55, rotate: 0 }}
                animate={
                  isActive
                    ? { opacity: 1, y: 0, rotate: category.tilt }
                    : { opacity: 0, y: 55, rotate: 0 }
                }
                transition={{
                  duration: 0.85,
                  delay: 0.32 + idx * 0.07,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{
                  y: -10,
                  rotate: 0,
                  scale: 1.02,
                  transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] }
                }}
              >
                {/* 3D Realistic Pushpin */}
                <PushPin color={category.pinColor} />

                {/* Top Header Row: Number Badge & Category Icon */}
                <div className="pinned-card-header">
                  <span className="pinned-card-number">{category.num}</span>
                  <div className="pinned-card-icon-frame">
                    <IconComponent size={22} style={{ color: category.pinColor }} />
                  </div>
                </div>

                {/* Category Title & Badge */}
                <div className="pinned-card-title-group">
                  <h3 className="pinned-card-title">{category.title}</h3>
                  <span className="pinned-card-badge">{category.badge}</span>
                </div>

                {/* Skills Pills Flow */}
                <div className="pinned-skills-list">
                  {category.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="pinned-skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
