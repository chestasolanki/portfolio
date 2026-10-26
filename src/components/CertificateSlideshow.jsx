import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Award, Maximize2, X, CheckCircle2 } from 'lucide-react';

const certificates = [
  {
    id: 'aws-cloud',
    title: 'AWS Academy Graduate — Cloud Foundations',
    issuer: 'Amazon Web Services (AWS)',
    date: 'April 2026',
    credentialUrl: 'https://www.credly.com/go/oiUmszo7',
    image: '/certificates/aws_cloud_foundations.png',
    badge: 'AWS Training Badge',
    hours: '20 Course Hours'
  },
  {
    id: 'aws-ml',
    title: 'AWS Academy Graduate — Machine Learning Foundations',
    issuer: 'Amazon Web Services (AWS)',
    date: 'May 2026',
    credentialUrl: 'https://www.credly.com/go/UfkteQq6',
    image: '/certificates/aws_ml_foundations.png',
    badge: 'Machine Learning',
    hours: '20 Course Hours'
  },
  {
    id: 'mern-stack',
    title: 'Introduction to MERN Stack',
    issuer: 'Simplilearn SkillUp',
    date: 'October 2026',
    code: '10935484',
    image: '/certificates/mern_stack.png',
    badge: 'Full Stack Development',
    hours: 'Verified Completion'
  },
  {
    id: 'openai-academy',
    title: 'Pathway Completion Certificate: Apply AI at Work',
    issuer: 'OpenAI Academy',
    date: 'October 2026 – April 2027',
    code: '198166885',
    credentialUrl: 'https://academy.openai.com',
    image: '/certificates/openai_academy.png',
    badge: 'GenAI & Applied AI',
    hours: 'Score: 80%+'
  },
  {
    id: 'redhat-linux',
    title: 'Red Hat Training: Getting Started with Linux Fundamentals',
    issuer: 'Red Hat (RH104 - RHA Ver. 9.1)',
    date: 'April 2026',
    credentialUrl: 'https://www.credly.com/badges/fcd5de50-e304-46ad-955b-661ffe57b79a',
    image: '/certificates/redhat_linux.png',
    badge: 'Enterprise Linux',
    hours: '16 Credit Hours'
  }
];

export default function CertificateSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const total = certificates.length;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  // Auto-advance every 6 seconds with hover-pause
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex, isPaused, total]);

  const activeCert = certificates[currentIndex];

  return (
    <div
      className="certificate-slideshow-wrapper"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{
        position: 'relative',
        width: '100%',
        padding: '6px 0 10px 0',
        overflow: 'hidden'
      }}
    >
      {/* 6-Second Auto-play Progress Bar */}
      <div
        style={{
          width: '100%',
          maxWidth: '560px',
          height: '3px',
          background: 'rgba(255, 255, 255, 0.08)',
          borderRadius: '9999px',
          margin: '0 auto 16px auto',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        <motion.div
          key={currentIndex}
          initial={{ width: '0%' }}
          animate={{ width: isPaused ? '100%' : '100%' }}
          transition={{ duration: isPaused ? 0 : 6, ease: 'linear' }}
          style={{
            height: '100%',
            background: 'var(--gradient-purrweb)',
            boxShadow: '0 0 10px rgba(236, 72, 153, 0.5)'
          }}
        />
      </div>

      {/* Main 3D CoverFlow Stage */}
      <div
        className="slideshow-stage"
        style={{
          position: 'relative',
          height: 'clamp(310px, 42vh, 415px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          perspective: '1200px',
          perspectiveOrigin: 'center center'
        }}
      >
        {certificates.map((cert, index) => {
          // Calculate shortest circular difference from current index
          let diff = index - currentIndex;
          if (diff > total / 2) diff -= total;
          if (diff < -total / 2) diff += total;

          const isActive = diff === 0;
          const isLeft = diff === -1;
          const isRight = diff === 1;
          const isVisible = Math.abs(diff) <= 1;

          // Compute 3D translation, scale, and blur
          let xOffset = 0;
          let scale = 0.65;
          let blur = 10;
          let opacity = 0;
          let zIndex = 1;
          let rotateY = 0;

          if (isActive) {
            xOffset = 0;
            scale = 1.05;
            blur = 0;
            opacity = 1;
            zIndex = 10;
            rotateY = 0;
          } else if (isLeft) {
            xOffset = -54; // percentage
            scale = 0.82;
            blur = 5;
            opacity = 0.5;
            zIndex = 5;
            rotateY = 12;
          } else if (isRight) {
            xOffset = 54; // percentage
            scale = 0.82;
            blur = 5;
            opacity = 0.5;
            zIndex = 5;
            rotateY = -12;
          } else if (diff < -1) {
            xOffset = -100;
            scale = 0.6;
            blur = 12;
            opacity = 0;
            zIndex = 1;
          } else if (diff > 1) {
            xOffset = 100;
            scale = 0.6;
            blur = 12;
            opacity = 0;
            zIndex = 1;
          }

          return (
            <motion.div
              key={cert.id}
              animate={{
                x: `${xOffset}%`,
                scale,
                rotateY,
                opacity,
                zIndex
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1]
              }}
              onClick={() => {
                if (isActive) {
                  setSelectedImage(cert);
                } else {
                  setCurrentIndex(index);
                }
              }}
              style={{
                position: 'absolute',
                width: 'min(86vw, 530px)',
                cursor: isActive ? 'zoom-in' : 'pointer',
                filter: `blur(${blur}px)`,
                transformStyle: 'preserve-3d',
                willChange: 'transform, filter, opacity',
                userSelect: 'none'
              }}
            >
              <div
                style={{
                  position: 'relative',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  background: 'rgba(10, 16, 32, 0.85)',
                  border: 'none',
                  boxShadow: isActive
                    ? '0 24px 60px rgba(0, 0, 0, 0.9), 0 0 35px rgba(236, 72, 153, 0.25)'
                    : '0 12px 30px rgba(0, 0, 0, 0.6)',
                  transition: 'box-shadow 0.3s ease'
                }}
              >
                {/* Certificate Image Frame */}
                <div style={{ position: 'relative', width: '100%', aspectRatio: '1.414 / 1', overflow: 'hidden' }}>
                  <img
                    src={cert.image}
                    alt={cert.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      display: 'block',
                      background: '#ffffff'
                    }}
                    loading="lazy"
                  />

                  {/* Active Magnify Hint Overlay */}
                  {isActive && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '12px',
                        right: '12px',
                        background: 'rgba(0, 0, 0, 0.65)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        backdropFilter: 'blur(8px)',
                        borderRadius: '50%',
                        width: '34px',
                        height: '34px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ffffff'
                      }}
                    >
                      <Maximize2 size={16} />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Controls: Previous & Next Arrows */}
      <button
        onClick={handlePrev}
        aria-label="Previous Certificate"
        style={{
          position: 'absolute',
          left: 'clamp(8px, 3vw, 24px)',
          top: '46%',
          transform: 'translateY(-50%)',
          width: '46px',
          height: '46px',
          borderRadius: '50%',
          background: 'rgba(8, 14, 28, 0.85)',
          border: 'none',
          color: 'var(--text-primary)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(10px)',
          zIndex: 20,
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6)',
          transition: 'all 0.25s ease'
        }}
      >
        <ChevronLeft size={22} />
      </button>

      <button
        onClick={handleNext}
        aria-label="Next Certificate"
        style={{
          position: 'absolute',
          right: 'clamp(8px, 3vw, 24px)',
          top: '46%',
          transform: 'translateY(-50%)',
          width: '46px',
          height: '46px',
          borderRadius: '50%',
          background: 'rgba(8, 14, 28, 0.85)',
          border: 'none',
          color: 'var(--text-primary)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(10px)',
          zIndex: 20,
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6)',
          transition: 'all 0.25s ease'
        }}
      >
        <ChevronRight size={22} />
      </button>

      {/* Active Certificate Info Display & Action Links */}
      <div
        style={{
          marginTop: '32px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '5px',
          position: 'relative',
          zIndex: 10
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCert.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <span
                style={{
                  fontSize: '11px',
                  fontFamily: 'var(--font-mono)',
                  padding: '3px 10px',
                  borderRadius: 'var(--radius-pill)',
                  background: 'rgba(236, 72, 153, 0.15)',
                  color: 'var(--accent-pink)',
                  border: 'none',
                  fontWeight: '600'
                }}
              >
                {activeCert.badge}
              </span>
              <span style={{ fontSize: '12px', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                {activeCert.hours}
              </span>
            </div>

            <h4
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(18px, 2.2vw, 24px)',
                fontWeight: '600',
                color: 'var(--text-primary)',
                margin: 0,
                lineHeight: '1.2'
              }}
            >
              {activeCert.title}
            </h4>

            <div
              style={{
                fontSize: '12.5px',
                color: 'var(--text-secondary)',
                fontFamily: 'var(--font-body)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                flexWrap: 'wrap',
                justifyContent: 'center'
              }}
            >
              <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>{activeCert.issuer}</span>
              <span>•</span>
              <span style={{ color: 'var(--text-dim)' }}>{activeCert.date}</span>
              {activeCert.code && (
                <>
                  <span>•</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent-coral)' }}>
                    Code: {activeCert.code}
                  </span>
                </>
              )}
            </div>

            {/* External Credential & Lightbox Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '4px' }}>
              {activeCert.credentialUrl && (
                <a
                  href={activeCert.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '12px',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--accent-pink)',
                    textDecoration: 'none',
                    padding: '4px 12px',
                    borderRadius: 'var(--radius-pill)',
                    background: 'rgba(236, 72, 153, 0.1)',
                    border: 'none',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <ExternalLink size={12} />
                  <span>Verify Credential</span>
                </a>
              )}

              <button
                onClick={() => setSelectedImage(activeCert)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '12px',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-secondary)',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '4px 10px'
                }}
              >
                <Maximize2 size={12} />
                <span>Fullscreen</span>
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Pagination Dots */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '10px' }}>
          {certificates.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to certificate ${idx + 1}`}
              style={{
                width: idx === currentIndex ? '26px' : '8px',
                height: '8px',
                borderRadius: 'var(--radius-pill)',
                background: idx === currentIndex ? 'var(--accent-purple)' : 'rgba(255, 255, 255, 0.2)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: idx === currentIndex ? '0 0 10px var(--accent-purple)' : 'none',
                padding: 0
              }}
            />
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0, 0, 0, 0.94)',
              backdropFilter: 'blur(14px)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px'
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: 'relative',
                maxWidth: '920px',
                width: '100%',
                maxHeight: '90vh',
                background: '#0a1020',
                borderRadius: '16px',
                border: '1px solid rgba(56, 189, 248, 0.4)',
                boxShadow: '0 25px 70px rgba(0, 0, 0, 0.95)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '14px 20px',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                  background: '#060a14'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Award size={16} style={{ color: 'var(--accent-purple)' }} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: '700', color: '#ffffff' }}>
                    {selectedImage.title}
                  </span>
                </div>

                <button
                  onClick={() => setSelectedImage(null)}
                  style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '50%',
                    width: '32px',
                    height: '32px',
                    color: '#ffffff',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <X size={16} />
                </button>
              </div>

              <div style={{ padding: '16px', overflowY: 'auto', background: '#0b1326', display: 'flex', justifyContent: 'center' }}>
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '75vh',
                    objectFit: 'contain',
                    borderRadius: '8px',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.7)'
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
