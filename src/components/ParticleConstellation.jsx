import React, { useEffect, useRef } from 'react';

export default function ParticleConstellation() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const handleResize = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Particle colors matching the reference image: Emerald green, neon violet, electric cyan, amber gold
    const colors = ['#10b981', '#a855f7', '#06b6d4', '#f59e0b', '#ec4899', '#3b82f6'];

    const particles = Array.from({ length: 90 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 2.5 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: Math.random() * 0.7 + 0.3
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw particle connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < 90) {
            const lineAlpha = (1 - dist / 90) * 0.15;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(16, 185, 129, ${lineAlpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Render glowing particle dots
      for (let pt of particles) {
        pt.x += pt.vx;
        pt.y += pt.vy;

        if (pt.x < 0 || pt.x > canvas.width) pt.vx *= -1;
        if (pt.y < 0 || pt.y > canvas.height) pt.vy *= -1;

        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pt.size, 0, Math.PI * 2);
        ctx.fillStyle = pt.color;
        ctx.shadowColor = pt.color;
        ctx.shadowBlur = 8;
        ctx.globalAlpha = pt.alpha;
        ctx.fill();
        ctx.globalAlpha = 1.0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.85
      }}
    />
  );
}
