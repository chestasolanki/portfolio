import React from 'react';

/**
 * BorderBeam — Concentrated cyan laser beam running continuously along the card perimeter
 * Compatible across all modern browsers (Chrome, Safari, Firefox, Edge) using hardware-accelerated conic-gradient & mask.
 */
export default function BorderBeam({
  duration = 7,
  borderWidth = 2,
  colorFrom = '#38bdf8',
  colorHighlight = '#ffffff',
  className = ''
}) {
  return (
    <div
      className={`border-beam-container ${className}`}
      style={{
        position: 'absolute',
        inset: '-1px',
        borderRadius: 'inherit',
        pointerEvents: 'none',
        zIndex: 2,
        overflow: 'hidden',
        padding: `${borderWidth}px`,
        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        WebkitMaskComposite: 'xor',
        maskComposite: 'exclude'
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '300%',
          height: '300%',
          transformOrigin: 'center center',
          background: `conic-gradient(from 0deg, transparent 0deg, transparent 290deg, rgba(56, 189, 248, 0.15) 320deg, ${colorFrom} 345deg, ${colorHighlight} 356deg, ${colorFrom} 360deg)`,
          animation: `border-beam-spin ${duration}s linear infinite`,
          filter: 'drop-shadow(0 0 12px #38bdf8)'
        }}
      />

      <style>{`
        @keyframes border-beam-spin {
          0% {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
