import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight, Globe, Lock, ExternalLink, Zap } from 'lucide-react';

export default function Experience({ isActive = true, onNavigate }) {
  return (
    <section className="purrweb-exact-slide-stage">
      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 10 }}>
        
        {/* Section Header */}
        <motion.div
          className="purrweb-section-header"
          style={{ textAlign: 'center', marginBottom: 'clamp(20px, 3vh, 32px)' }}
          initial={{ opacity: 0, y: 40 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.75, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="purrweb-badge" style={{ margin: '0 auto 12px auto' }}>
            <Sparkles size={12} style={{ color: 'var(--accent-cyan)' }} />
            <span className="purrweb-badge-text">PRODUCTION RECORD</span>
          </div>
          <h2 className="purrweb-section-title">
            Industry &amp; <span className="purrweb-serif-accent">Production Experience</span>
          </h2>
          <p className="purrweb-section-subtitle" style={{ maxWidth: '640px', margin: '0 auto' }}>
            Founding full-stack product engineering, cloud deployment, and live customer-facing systems.
          </p>
        </motion.div>

        {/* Centered Zoomed-in Live Website Browser Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 70, scale: 0.94 }}
          animate={isActive ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 70, scale: 0.94 }}
          transition={{ duration: 0.9, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
          className="exp-centered-showcase"
        >
          {/* Top Bar Action Line */}
          <div className="exp-showcase-meta-bar">
            <div className="showcase-meta-left">
              <Globe size={15} style={{ color: 'var(--accent-cyan)' }} />
              <span className="meta-site-tag">LIMETTA • FOUNDING PRODUCT DEVELOPMENT</span>
              <span className="live-status-pill">
                <span className="live-pulse-dot" /> Live in Production
              </span>
            </div>

            <a
              href="https://www.limetta.in"
              target="_blank"
              rel="noopener noreferrer"
              className="exp-visit-link"
              title="Open Limetta production platform in new tab"
            >
              <span>Visit Live Platform (limetta.in)</span>
              <ArrowUpRight size={13} />
            </a>
          </div>

          {/* Browser Mockup Window */}
          <div className="exp-browser-window exp-browser-window-zoomed">
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
              className="exp-screenshot-wrap exp-screenshot-wrap-zoomed"
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
                <span className="metric-val">React 19 • Node.js • Express • MongoDB</span>
              </div>
              <div className="footer-metric">
                <span className="metric-label">Checkout &amp; Fulfillment</span>
                <span className="metric-val">Razorpay Webhooks • Delhivery Logistics</span>
              </div>
              <div className="footer-metric">
                <span className="metric-label">Notifications &amp; Assets</span>
                <span className="metric-val">Resend API • ImageKit Cloud CDN</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

