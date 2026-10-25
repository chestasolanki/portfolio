import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Sparkles, ArrowUpRight, Globe, Lock, ShieldCheck, ExternalLink, Zap } from 'lucide-react';
import PageHeader from './PageHeader';

export default function Experience({ onNavigate }) {
  const limettaHighlights = [
    'Engineered the production full-stack e-commerce web platform for Limetta (luxury interior decor) leveraging React 19, Node.js, Express.js, and MongoDB with fluid Framer Motion animations.',
    'Architected payment and fulfillment pipelines by integrating Razorpay for checkout transactions and Delhivery Logistics for automated waybill generation and real-time tracking.',
    'Built automated customer notification workflows via Resend API for transactional receipts and shipping status dispatches.',
    'Constructed comprehensive customer experience: product customization filters, cart, wishlist, customer reviews, and secure JWT-based authentication.',
    'Designed and implemented an Admin Portal featuring live order lifecycle management (Packed, Shipped, Out for Delivery, Delivered) and cloud asset storage with ImageKit API.'
  ];

  return (
    <section className="purrweb-exact-slide-stage">
      {/* Top Navigation Bar: Non-fixed, unique to Experience Page */}
      <PageHeader activePage="experience" onNavigate={onNavigate} />

      <div className="container" style={{ maxWidth: '1320px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        {/* Section Header */}
        <div className="purrweb-section-header">
          <div className="purrweb-badge">
            <Sparkles size={12} style={{ color: 'var(--accent-cyan)' }} />
            <span className="purrweb-badge-text">PRODUCTION RECORD</span>
          </div>
          <h2 className="purrweb-section-title">
            Industry &amp; <span className="purrweb-serif-accent">Production Experience</span>
          </h2>
          <p className="purrweb-section-subtitle">
            Founding full-stack product engineering, cloud deployment, and live customer-facing systems.
          </p>
        </div>

        {/* Editorial Asymmetric Dual Layout: Role Details + Live Website Showcase */}
        <div className="purrweb-exp-grid">
          
          {/* Left Column: Industry Experience Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="exp-column"
          >
            <div className="exp-column-header">
              <Briefcase size={16} style={{ color: 'var(--accent-gold)' }} />
              <span>FOUNDING PRODUCT DEVELOPMENT</span>
            </div>

            <div className="exp-timeline-block">
              <div className="exp-role-heading">
                <h3 className="role-title">Founding Product Developer</h3>
                <div className="role-meta">
                  <span className="role-company">Limetta</span>
                  <span className="meta-dot">•</span>
                  <span className="role-type">Full-Stack Architecture</span>
                  <span className="meta-dot">•</span>
                  <span className="role-status-badge">
                    <span className="live-pulse-dot" /> Live in Production
                  </span>
                </div>
              </div>

              <p className="exp-intro-text">
                Spearheaded the technical architecture and end-to-end development of Limetta’s flagship
                e-commerce platform, scaling it from concept to live production deployment with real-world users.
              </p>

              <ul className="exp-bullets">
                {limettaHighlights.map((point, idx) => (
                  <li key={idx} className="bullet-row">
                    <span className="bullet-icon">▹</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="exp-tech-stack">
                <span className="stack-tag">React 19</span>
                <span className="stack-tag">Node.js</span>
                <span className="stack-tag">Express.js</span>
                <span className="stack-tag">MongoDB</span>
                <span className="stack-tag">Razorpay</span>
                <span className="stack-tag">Delhivery Logistics</span>
                <span className="stack-tag">Resend</span>
                <span className="stack-tag">ImageKit CDN</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Live Experienced Website Browser Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="exp-preview-column"
          >
            <div className="exp-column-header">
              <Globe size={16} style={{ color: 'var(--accent-cyan)' }} />
              <span>PRODUCTION WEB APPLICATION</span>
              <a
                href="https://www.limetta.in"
                target="_blank"
                rel="noopener noreferrer"
                className="exp-visit-link"
              >
                <span>Visit Live Platform</span>
                <ArrowUpRight size={13} />
              </a>
            </div>

            {/* Browser Mockup Window */}
            <div className="exp-browser-window">
              {/* Browser Chrome Header */}
              <div className="exp-browser-header">
                <div className="exp-window-dots">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>

                <div className="exp-url-pill">
                  <Lock size={11} className="lock-icon" />
                  <span className="url-text">https://www.limetta.in</span>
                  <span className="ssl-badge">SSL Verified</span>
                </div>

                <div className="exp-window-actions">
                  <a
                    href="https://www.limetta.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="open-tab-btn"
                    title="Open live site in new tab"
                  >
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>

              {/* Viewport Frame with Live Website Screenshot */}
              <a
                href="https://www.limetta.in"
                target="_blank"
                rel="noopener noreferrer"
                className="exp-screenshot-wrap"
              >
                <img
                  src="/limetta_experience.png"
                  alt="Limetta - Luxury Interior Home Decor E-Commerce Platform"
                  className="exp-screenshot-img"
                  loading="lazy"
                />
                
                {/* Floating Inspection Pill */}
                <div className="exp-hover-pill">
                  <Zap size={13} style={{ color: 'var(--accent-gold)' }} />
                  <span>Click to view live site (limetta.in)</span>
                  <ArrowUpRight size={13} />
                </div>
              </a>

              {/* Engineering Metrics Strip */}
              <div className="exp-browser-footer">
                <div className="footer-metric">
                  <span className="metric-label">Architecture</span>
                  <span className="metric-val">React 19 • Node • Mongo</span>
                </div>
                <div className="footer-metric">
                  <span className="metric-label">Checkout</span>
                  <span className="metric-val">Razorpay Webhooks</span>
                </div>
                <div className="footer-metric">
                  <span className="metric-label">Fulfillment</span>
                  <span className="metric-val">Delhivery Automated Waybills</span>
                </div>
              </div>
            </div>

            {/* Architecture Highlight Card */}
            <div className="exp-system-badge">
              <ShieldCheck size={18} style={{ color: '#34d399', flexShrink: 0 }} />
              <div className="system-badge-content">
                <strong>Live E-Commerce Core &amp; Admin Dashboard:</strong>
                <span> Fully deployed with live payment webhooks, automated customer receipts, and cloud asset processing pipeline.</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

