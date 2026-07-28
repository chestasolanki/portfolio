import React from 'react';
import PageTransitionSection from './PageTransitionSection';
import ParticleConstellation from './ParticleConstellation';
import Pure3DLaptop from './Pure3DLaptop';

export default function Hero() {
  return (
    <PageTransitionSection id="hero" style={{ padding: '40px 0 80px 0', position: 'relative', overflow: 'hidden' }}>
      
      {/* Particle Constellation Stars */}
      <ParticleConstellation />

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1000px', textAlign: 'center' }}>
        
        {/* 100% PURE CODE 3D LEVITATING LAPTOP CENTERPIECE */}
        <Pure3DLaptop />

      </div>
    </PageTransitionSection>
  );
}
