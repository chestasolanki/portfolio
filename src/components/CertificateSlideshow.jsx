import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

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
  const total = certificates.length;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  // Auto-advance every 4 seconds with hover-pause
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 4000);

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
      {/* 4-Second Auto-play Progress Bar */}
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
          transition={{ duration: isPaused ? 0 : 4, ease: 'linear' }}
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
                if (!isActive) {
                  setCurrentIndex(index);
                }
              }}
              style={{
                position: 'absolute',
                width: 'min(86vw, 530px)',
                cursor: isActive ? 'default' : 'pointer',
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
                  fontFamily: 'var(--font-sans)',
                  padding: '3px 10px',
                  borderRadius: 'var(--radius-pill)',
                  background: 'rgba(236, 72, 153, 0.15)',
                  color: 'var(--accent-pink)',
                  border: 'none',
                  fontWeight: '600',
                  letterSpacing: '0.02em'
                }}
              >
                {activeCert.badge}
              </span>
              <span style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.65)', fontFamily: 'var(--font-sans)' }}>
                {activeCert.hours}
              </span>
            </div>

            <h4
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(18px, 2.2vw, 24px)',
                fontWeight: '600',
                color: '#ffffff',
                margin: 0,
                lineHeight: '1.25',
                letterSpacing: '-0.02em'
              }}
            >
              {activeCert.title}
            </h4>

            <div
              style={{
                fontSize: '13px',
                color: 'rgba(255, 255, 255, 0.72)',
                fontFamily: 'var(--font-sans)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                flexWrap: 'wrap',
                justifyContent: 'center',
                letterSpacing: '-0.01em',
                marginTop: '2px'
              }}
            >
              <span style={{ color: '#ffffff', fontWeight: '500' }}>{activeCert.issuer}</span>
              <span style={{ color: 'rgba(255, 255, 255, 0.35)' }}>•</span>
              <span>{activeCert.date}</span>
              {activeCert.code && (
                <>
                  <span style={{ color: 'rgba(255, 255, 255, 0.35)' }}>•</span>
                  <span style={{ color: 'var(--accent-coral)', fontWeight: '500' }}>
                    Code: {activeCert.code}
                  </span>
                </>
              )}
            </div>

            {/* External Credential Link */}
            {activeCert.credentialUrl && (
              <div style={{ marginTop: '6px' }}>
                <a
                  href={activeCert.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '12.5px',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: '500',
                    color: 'var(--accent-pink)',
                    textDecoration: 'none',
                    padding: '5px 14px',
                    borderRadius: 'var(--radius-pill)',
                    background: 'rgba(236, 72, 153, 0.12)',
                    border: '1px solid rgba(236, 72, 153, 0.25)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <ExternalLink size={13} />
                  <span>Verify Credential</span>
                </a>
              </div>
            )}
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
    </div>
  );
}
