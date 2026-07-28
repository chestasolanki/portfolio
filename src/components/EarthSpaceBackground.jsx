import React from 'react';
import earthImg from '../assets/hd_earth_space.png';

export default function EarthSpaceBackground() {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      pointerEvents: 'none',
      zIndex: 0,
      overflow: 'hidden',
      backgroundColor: '#030206'
    }}>
      {/* Slow Moving HD Earth Sphere Background */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: 'min(90vw, 750px)',
        height: 'min(90vw, 750px)',
        transform: 'translate(-50%, -50%)',
        borderRadius: '50%',
        animation: 'slowRotateEarth 140s linear infinite, floatEarth 18s ease-in-out infinite alternate',
        filter: 'drop-shadow(0 0 70px rgba(0, 240, 255, 0.35))',
        opacity: 0.85
      }}>
        <img
          src={earthImg}
          alt="HD Earth in Deep Space"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '50%'
          }}
        />

        {/* Luminous Atmosphere Glow Ring */}
        <div style={{
          position: 'absolute',
          inset: '-2px',
          borderRadius: '50%',
          boxShadow: 'inset 0 0 50px rgba(0, 240, 255, 0.4), 0 0 80px rgba(0, 240, 255, 0.3)',
          pointerEvents: 'none'
        }} />
      </div>

      {/* Deep Space Radial Vignette Overlay for Crisp Content Readability */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at center, rgba(3, 2, 6, 0.35) 0%, rgba(3, 2, 6, 0.85) 75%, rgba(3, 2, 6, 0.98) 100%)'
      }} />

      <style>{`
        @keyframes slowRotateEarth {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes floatEarth {
          0% { transform: translate(-50%, -52%) scale(0.98); }
          100% { transform: translate(-50%, -48%) scale(1.03); }
        }
      `}</style>
    </div>
  );
}
