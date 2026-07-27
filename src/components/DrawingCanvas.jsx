import React, { useEffect, useRef, useState } from 'react';
import { Trash2, Edit3, EyeOff } from 'lucide-react';

export default function DrawingCanvas() {
  const [isEnabled, setIsEnabled] = useState(true);
  const [drawCount, setDrawCount] = useState(0);

  const canvasRef = useRef(null);
  const cursorRef = useRef(null);
  const pointsRef = useRef([]);
  const isEnabledRef = useRef(true);

  useEffect(() => {
    isEnabledRef.current = isEnabled;
  }, [isEnabled]);

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
      if (!isEnabledRef.current) return;

      pointsRef.current.push({
        x,
        y,
        age: 0,
        maxAge: 85,
        size: Math.random() * 3 + 2
      });
      setDrawCount((c) => c + 1);
    };

    const handleMouseMove = (e) => {
      if (cursorRef.current && isEnabledRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
      if (isEnabledRef.current) {
        addPoint(e.clientX, e.clientY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (isEnabledRef.current) {
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
          ctx.fillStyle = `rgba(6, 182, 212, ${alpha * 0.75})`;
          ctx.shadowColor = '#06b6d4';
          ctx.shadowBlur = 14;
          ctx.fill();

          if (i > 0) {
            const prevPt = points[i - 1];
            const dist = Math.hypot(pt.x - prevPt.x, pt.y - prevPt.y);
            if (dist < 45) {
              ctx.beginPath();
              ctx.moveTo(prevPt.x, prevPt.y);
              ctx.lineTo(pt.x, pt.y);
              ctx.strokeStyle = `rgba(6, 182, 212, ${alpha * 0.45})`;
              ctx.lineWidth = pt.size * alpha;
              ctx.stroke();
            }
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

  const handleClear = () => {
    pointsRef.current = [];
    setDrawCount(0);
  };

  const toggleDrawing = () => {
    setIsEnabled((prev) => {
      const next = !prev;
      if (!next) {
        pointsRef.current = [];
        setDrawCount(0);
      }
      return next;
    });
  };

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 2,
          opacity: isEnabled ? 0.95 : 0
        }}
      />

      {/* Crystal Ring Cursor Pointer */}
      {isEnabled && (
        <div
          ref={cursorRef}
          style={{
            position: 'fixed',
            top: -12,
            left: -12,
            width: 24,
            height: 24,
            borderRadius: '50%',
            border: '1.5px solid var(--accent-cyan)',
            background: 'rgba(6, 182, 212, 0.2)',
            boxShadow: '0 0 16px var(--accent-cyan)',
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
            width: 4,
            height: 4,
            borderRadius: '50%',
            background: 'var(--accent-cyan)'
          }} />
        </div>
      )}

      {/* Floating Drawing Control Dock (Toggle + Clear) */}
      <div style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 990,
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}>
        {/* Enable / Disable Toggle Button */}
        <button
          onClick={toggleDrawing}
          className="btn-secondary"
          title={isEnabled ? "Disable Drawing Canvas" : "Enable Drawing Canvas"}
          style={{
            padding: '8px 16px',
            fontSize: '0.78rem',
            borderRadius: 'var(--radius-pill)',
            borderColor: isEnabled ? 'var(--accent-cyan)' : 'var(--border-glass)',
            color: isEnabled ? 'var(--accent-cyan)' : 'var(--text-muted)'
          }}
        >
          {isEnabled ? (
            <>
              <Edit3 size={14} style={{ color: 'var(--accent-cyan)' }} />
              <span>Drawing: ON</span>
            </>
          ) : (
            <>
              <EyeOff size={14} style={{ color: 'var(--text-muted)' }} />
              <span>Drawing: OFF</span>
            </>
          )}
        </button>

        {/* Clear Drawing Button */}
        {isEnabled && drawCount > 5 && (
          <button
            onClick={handleClear}
            className="btn-secondary"
            style={{
              padding: '8px 14px',
              fontSize: '0.78rem',
              borderRadius: 'var(--radius-pill)'
            }}
          >
            <Trash2 size={14} style={{ color: 'var(--accent-cyan)' }} />
            <span>Clear</span>
          </button>
        )}
      </div>

      <style>{`
        @media (min-width: 768px) {
          .custom-cursor {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
}
