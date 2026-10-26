import React from 'react';
import { motion } from 'framer-motion';
import CertificateSlideshow from './CertificateSlideshow';

export default function Certificates({
  isActive = true,
  activeCertificate = 0,
  onSelectCertificate,
  onNavigate
}) {
  return (
    <section className="purrweb-exact-slide-stage certs-slide-stage">
      {/* Background Vibrant Atmospheric Mesh */}
      <div className="work-atmosphere" aria-hidden="true">
        <div className="work-glow glow-cyan-teal" />
        <div className="work-glow glow-amber-warm" />
        <div className="work-glow glow-magenta" />
        <div className="work-grain" />
      </div>

      <div
        className="container"
        style={{
          maxWidth: '1440px',
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
          style={{ textAlign: 'center', marginBottom: 'clamp(14px, 2.4vh, 24px)' }}
          initial={{ opacity: 0, y: 35 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="purrweb-section-title" style={{ margin: 0 }}>
            Certifications
          </h2>
        </motion.div>

        {/* Interactive 3D Certificate CoverFlow Showcase */}
        <motion.div
          style={{ width: '100%' }}
          initial={{ opacity: 0, y: 50, scale: 0.96 }}
          animate={isActive ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.96 }}
          transition={{ duration: 0.85, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
        >
          <CertificateSlideshow
            isActive={isActive}
            currentIndex={activeCertificate}
            onSelectIndex={onSelectCertificate}
          />
        </motion.div>
      </div>
    </section>
  );
}
