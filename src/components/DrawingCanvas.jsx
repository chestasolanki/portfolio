import React, { useEffect, useRef } from 'react';

export default function DrawingCanvas() {
  const canvasRef = useRef(null);
  const cursorRef = useRef(null);
  const pointsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const addPoint = (x, y) => {
      pointsRef.current.push({
        x,
        y,
        age: 0,
        maxAge: 75,
        size: Math.random() * 2.5 + 2
      });
    };

    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
      addPoint(e.clientX, e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const points = pointsRef.current;
      for (let i = 0; i < points.length; i++) {
        const pt = points[i];
        pt.age += 1;

        if (pt.age >= pt.maxAge) {
          points.splice(i, 1);
          i--;
          continue;
        }

        const alpha = 1 - pt.age / pt.maxAge;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pt.size * alpha, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${alpha * 0.75})`;
        ctx.shadowColor = '#38bdf8';
        ctx.shadowBlur = 14;
        ctx.fill();

        if (i > 0) {
          const prevPt = points[i - 1];
          const dist = Math.hypot(pt.x - prevPt.x, pt.y - prevPt.y);
          if (dist < 40) {
            ctx.beginPath();
            ctx.moveTo(prevPt.x, prevPt.y);
            ctx.lineTo(pt.x, pt.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha * 0.45})`;
            ctx.lineWidth = pt.size * alpha;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="drawing-container">
      <canvas
        ref={canvasRef}
        className="drawing-canvas-element"
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 2,
          opacity: 0.95
        }}
      />

      {/* Light Blue Ring Cursor Pointer */}
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          top: -12,
          left: -12,
          width: 24,
          height: 24,
          borderRadius: '50%',
          border: '2px solid #38bdf8',
          background: 'rgba(56, 189, 248, 0.25)',
          boxShadow: '0 0 20px #38bdf8, inset 0 0 8px rgba(56, 189, 248, 0.5)',
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'transform 0.04s ease-out',
          willChange: 'transform',
          display: 'none'
        }}
        className="custom-cursor"
      >
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 5,
          height: 5,
          borderRadius: '50%',
          background: '#38bdf8',
          boxShadow: '0 0 8px #38bdf8'
        }} />
      </div>

      <style>{`
        @media (min-width: 768px) {
          .custom-cursor {
            display: block !important;
          }
        }
        @media (max-width: 767px) {
          .drawing-container,
          .drawing-canvas-element,
          .custom-cursor {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
