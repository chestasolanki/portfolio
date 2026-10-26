import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Sparkles, Layers } from 'lucide-react';
import CertificateSlideshow from './CertificateSlideshow';
import {
  HtmlIcon,
  CssIcon,
  SassIcon,
  JsIcon,
  ReactIcon,
  GithubSkillIcon,
  NodeIcon,
  FirebaseIcon,
  MongoIcon,
  DockerIcon,
  CppIcon,
  PythonIcon,
  TsIcon,
  TailwindIcon,
  ExpressIcon,
  MysqlIcon,
  AwsIcon,
  GeminiIcon
} from './TechIcons';

export default function Skills({ isActive = true, onNavigate }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const allSkills = [
    { id: 'html', name: 'HTML', icon: HtmlIcon, category: 'frontend', color: '#E44D26' },
    { id: 'css', name: 'CSS', icon: CssIcon, category: 'frontend', color: '#1572B6' },
    { id: 'sass', name: 'SASS', icon: SassIcon, category: 'frontend', color: '#CF649A' },
    { id: 'js', name: 'JAVASCRIPT', icon: JsIcon, category: 'frontend', color: '#F7DF1E' },
    { id: 'react', name: 'REACT JS', icon: ReactIcon, category: 'frontend', color: '#61DAFB' },
    { id: 'github', name: 'GITHUB', icon: GithubSkillIcon, category: 'devops', color: '#FFFFFF' },
    { id: 'node', name: 'NODE JS', icon: NodeIcon, category: 'backend', color: '#539E43' },
    { id: 'firebase', name: 'FIREBASE', icon: FirebaseIcon, category: 'backend', color: '#FFA000' },
    { id: 'mongodb', name: 'MONGODB', icon: MongoIcon, category: 'backend', color: '#47A248' },
    { id: 'docker', name: 'DOCKERS', icon: DockerIcon, category: 'devops', color: '#2496ED' },
    { id: 'cpp', name: 'C++', icon: CppIcon, category: 'core', color: '#00599C' },
    { id: 'python', name: 'PYTHON', icon: PythonIcon, category: 'core', color: '#3776AB' },
    { id: 'ts', name: 'TYPESCRIPT', icon: TsIcon, category: 'frontend', color: '#3178C6' },
    { id: 'tailwind', name: 'TAILWIND', icon: TailwindIcon, category: 'frontend', color: '#38BDF8' },
    { id: 'express', name: 'EXPRESS JS', icon: ExpressIcon, category: 'backend', color: '#00E5FF' },
    { id: 'mysql', name: 'MYSQL', icon: MysqlIcon, category: 'backend', color: '#00758F' },
    { id: 'aws', name: 'AWS', icon: AwsIcon, category: 'devops', color: '#FF9900' },
    { id: 'gemini', name: 'GEMINI AI', icon: GeminiIcon, category: 'core', color: '#9B72CF' }
  ];

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend & DB' },
    { id: 'devops', label: 'Cloud & DevOps' },
    { id: 'core', label: 'AI & Core' }
  ];

  const filteredSkills = activeCategory === 'all'
    ? allSkills
    : allSkills.filter(s => s.category === activeCategory);

  return (
    <section className="purrweb-exact-slide-stage">
      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        {/* Section Header */}
        <motion.div
          className="purrweb-section-header"
          style={{ textAlign: 'center', marginBottom: '16px' }}
          initial={{ opacity: 0, y: 40 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.75, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="purrweb-badge" style={{ margin: '0 auto 10px auto' }}>
            <Sparkles size={12} style={{ color: 'var(--accent-violet)' }} />
            <span className="purrweb-badge-text">TECHNICAL EXPERTISE</span>
          </div>
          <h2 className="purrweb-section-title" style={{ fontSize: 'clamp(2rem, 3.2vw, 2.6rem)', marginBottom: '6px' }}>
            Skills &amp; <span className="purrweb-serif-accent">Capabilities</span>
          </h2>
          <p className="purrweb-section-subtitle" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '0.95rem' }}>
            A comprehensive spectrum of full-stack engineering, cloud infrastructure, and generative AI.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div
          className="skills-category-filters"
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`skill-filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Visual Skills Cards Grid */}
        <motion.div
          layout
          className="skills-cards-grid"
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
          animate={isActive ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.98 }}
          transition={{ duration: 0.85, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, idx) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={skill.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 12 }}
                  transition={{ duration: 0.25, delay: idx * 0.015 }}
                  className="tech-tile-card"
                  style={{ '--tile-glow': skill.color }}
                >
                  <div className="tech-tile-icon-wrap">
                    <IconComponent size={42} />
                  </div>
                  <span className="tech-tile-name">{skill.name}</span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* =========================================================================
            VERIFIED CREDENTIALS & CERTIFICATES SLIDESHOW
            3D Center-Zoom Coverflow with auto-cycle and image preview
            ========================================================================= */}
        <motion.div
          style={{ marginTop: 'clamp(28px, 4vh, 48px)' }}
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.85, delay: 0.52, ease: [0.16, 1, 0.3, 1] }}
        >
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
              
            </div>
          </div>

          {/* Interactive Certificate Slideshow */}
          <CertificateSlideshow />
        </motion.div>

      </div>
    </section>
  );
}
