import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck } from 'lucide-react';
import CertificateSlideshow from './CertificateSlideshow';

export default function Certificates({ isActive = true, onNavigate }) {
  return (
    <section className="purrweb-exact-slide-stage certs-slide-stage">
      <div
        className="container"
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          width: '100%',
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        {/* Section Header */}
        <motion.div
          className="purrweb-section-header"
          style={{ textAlign: 'center', marginBottom: 'clamp(8px, 1.6vh, 16px)' }}
          initial={{ opacity: 0, y: 35 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="purrweb-badge" style={{ margin: '0 auto 8px auto' }}>
            <Award size={12} style={{ color: 'var(--accent-coral)' }} />
            <span className="purrweb-badge-text">VERIFIED ACCREDITATIONS</span>
          </div>

          <h2 className="purrweb-section-title">
            Industry &amp; <span className="purrweb-serif-accent">Certifications</span>
          </h2>
          <p className="purrweb-section-subtitle" style={{ maxWidth: '640px', margin: '0 auto' }}>
            Technical credentials across Cloud Architecture, AI Systems, Full-Stack Development, and Linux.
          </p>
        </motion.div>

        {/* Interactive 3D Certificate CoverFlow Showcase */}
        <motion.div
          style={{ width: '100%' }}
          initial={{ opacity: 0, y: 50, scale: 0.96 }}
          animate={isActive ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.96 }}
          transition={{ duration: 0.85, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
        >
          <CertificateSlideshow />
        </motion.div>
      </div>
    </section>
  );
}
