import React, { useEffect, useRef, useState } from 'react';

/**
 * SkillsKnowledgeGraph
 * Spacious, clutter-free, interactive Knowledge Graph:
 * - Category hub nodes with expandable orbital skill rings.
 * - Interactive Category Filter Pills to isolate individual skill domains.
 * - Generous node spacing & line clearance.
 * - Smooth physics floating animations.
 * - Full Dark Mode & Light Mode support.
 */
export default function SkillsKnowledgeGraph() {
  const canvasRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('ALL'); // 'ALL' or cat.id
  const [hoveredNode, setHoveredNode] = useState(null);

  const categoriesData = [
    { id: 'cat-lang', label: 'Languages', color: '#38bdf8', skills: ['C++', 'JavaScript', 'Python'] },
    { id: 'cat-front', label: 'Frontend', color: '#06b6d4', skills: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive UI'] },
    { id: 'cat-back', label: 'Backend', color: '#a855f7', skills: ['Node.js', 'Express.js', 'RESTful APIs', 'SSE Events', 'Auth & JWT'] },
    { id: 'cat-db', label: 'Database & Cloud', color: '#3b82f6', skills: ['MySQL', 'MongoDB', 'AWS', 'Database Design', 'Query Optimization'] },
    { id: 'cat-ai', label: 'AI & ML', color: '#10b981', skills: ['LLMs', 'Prompt Engineering', 'RAG Concepts', 'Supervised ML'] },
    { id: 'cat-tools', label: 'DevTools & OS', color: '#f59e0b', skills: ['Git', 'GitHub', 'Postman', 'Linux', 'VS Code'] },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = canvas.parentElement.clientWidth);
    let height = (canvas.height = Math.max(560, Math.min(720, window.innerHeight * 0.68)));

    function handleResize() {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = Math.max(560, Math.min(720, window.innerHeight * 0.68));
      initNodes();
    }
    window.addEventListener('resize', handleResize);

    let nodes = [];
    let edges = [];

    function initNodes() {
      nodes = [];
      edges = [];

      const centerX = width / 2;
      const centerY = height / 2;

      // Central Core Node
      const coreNode = {
        id: 'core',
        label: 'Chesta Solanki',
        x: centerX,
        y: centerY,
        radius: 36,
        color: '#38bdf8',
        isCore: true,
        type: 'core',
      };
      nodes.push(coreNode);

      // Filter categories based on active selection
      const visibleCats = activeCategory === 'ALL'
        ? categoriesData
        : categoriesData.filter((c) => c.id === activeCategory);

      const catCount = visibleCats.length;
      // Generous orbital radius around center
      const catRadius = Math.min(width, height) * (catCount === 1 ? 0.22 : 0.32);

      visibleCats.forEach((cat, cIdx) => {
        const angle = (cIdx / catCount) * Math.PI * 2 - Math.PI / 2;
        const catX = centerX + Math.cos(angle) * catRadius;
        const catY = centerY + Math.sin(angle) * catRadius;

        const catNode = {
          id: cat.id,
          label: cat.label,
          x: catX,
          y: catY,
          originX: catX,
          originY: catY,
          radius: 28,
          color: cat.color,
          type: 'hub',
          skillsCount: cat.skills.length,
        };
        nodes.push(catNode);

        edges.push({ source: coreNode, target: catNode, color: cat.color });

        // Branch out skill leaf nodes with generous orbital spacing
        const skillCount = cat.skills.length;
        const orbitRadius = catCount === 1 ? 140 : 105;
        const angleSpread = catCount === 1 ? (Math.PI * 1.8) / skillCount : 0.75;
        const startAngle = catCount === 1 ? 0 : angle - ((skillCount - 1) * angleSpread) / 2;

        cat.skills.forEach((skillLabel, sIdx) => {
          const sAngle = startAngle + sIdx * angleSpread;
          const skillX = catX + Math.cos(sAngle) * orbitRadius;
          const skillY = catY + Math.sin(sAngle) * orbitRadius;

          const skillNode = {
            id: `${cat.id}-skill-${sIdx}`,
            label: skillLabel,
            x: skillX,
            y: skillY,
            originX: skillX,
            originY: skillY,
            radius: 16,
            color: cat.color,
            type: 'leaf',
            parentCat: cat.label,
          };
          nodes.push(skillNode);

          edges.push({ source: catNode, target: skillNode, color: cat.color });
        });
      });
    }

    initNodes();

    // Mouse Interactions
    let draggedNode = null;

    function getCanvasPos(e) {
      const rect = canvas.getBoundingClientRect();
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    }

    function onMouseMove(e) {
      const pos = getCanvasPos(e);

      if (draggedNode) {
        draggedNode.x = pos.x;
        draggedNode.y = pos.y;
        return;
      }

      let found = null;
      for (let n of nodes) {
        const dx = n.x - pos.x;
        const dy = n.y - pos.y;
        if (dx * dx + dy * dy < (n.radius + 8) * (n.radius + 8)) {
          found = n;
          break;
        }
      }
      setHoveredNode(found);
      canvas.style.cursor = found ? 'pointer' : 'default';
    }

    function onMouseDown(e) {
      const pos = getCanvasPos(e);
      for (let n of nodes) {
        const dx = n.x - pos.x;
        const dy = n.y - pos.y;
        if (dx * dx + dy * dy < (n.radius + 8) * (n.radius + 8)) {
          draggedNode = n;
          break;
        }
      }
    }

    function onMouseUp() {
      draggedNode = null;
    }

    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    // Animation Loop
    let animId;
    let pulseOffset = 0;

    function animate() {
      const isLightMode = document.documentElement.getAttribute('data-theme') === 'light';
      ctx.clearRect(0, 0, width, height);

      pulseOffset += 0.015;

      // Gentle floating physics
      nodes.forEach((n) => {
        if (n !== draggedNode && !n.isCore) {
          n.x += Math.sin(pulseOffset + n.radius) * 0.25;
          n.y += Math.cos(pulseOffset + n.radius) * 0.25;
        }
      });

      const activeNode = hoveredNode || draggedNode;

      // Draw Edges
      edges.forEach((edge) => {
        const { source, target, color } = edge;
        const isConnected = activeNode && (activeNode === source || activeNode === target);

        ctx.beginPath();
        ctx.moveTo(source.x, source.y);
        ctx.lineTo(target.x, target.y);

        if (isConnected) {
          ctx.strokeStyle = color;
          ctx.lineWidth = 3.5;
          ctx.shadowColor = color;
          ctx.shadowBlur = 14;
        } else if (activeNode) {
          ctx.strokeStyle = isLightMode ? 'rgba(203, 213, 225, 0.2)' : 'rgba(255, 255, 255, 0.04)';
          ctx.lineWidth = 1;
          ctx.shadowBlur = 0;
        } else {
          ctx.strokeStyle = isLightMode ? 'rgba(2, 132, 199, 0.22)' : 'rgba(56, 189, 248, 0.2)';
          ctx.lineWidth = source.isCore ? 2.2 : 1.4;
          ctx.shadowBlur = 0;
        }
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Animated Energy Pulse Dot
        const t = (pulseOffset * 0.7 + source.radius * 0.05) % 1;
        const px = source.x + (target.x - source.x) * t;
        const py = source.y + (target.y - source.y) * t;

        ctx.beginPath();
        ctx.arc(px, py, isConnected ? 4 : 2.5, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.shadowColor = color;
        ctx.shadowBlur = isConnected ? 12 : 5;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw Nodes
      nodes.forEach((n) => {
        const isHovered = activeNode === n;
        const isConnectedToHovered =
          activeNode &&
          edges.some(
            (e) => (e.source === activeNode && e.target === n) || (e.target === activeNode && e.source === n)
          );

        const currentRadius = isHovered ? n.radius * 1.15 : n.radius;

        // Outer Glow Circle
        if (isHovered || isConnectedToHovered || n.isCore) {
          ctx.beginPath();
          ctx.arc(n.x, n.y, currentRadius + 7, 0, Math.PI * 2);
          ctx.fillStyle = isLightMode ? 'rgba(2, 132, 199, 0.14)' : 'rgba(56, 189, 248, 0.2)';
          ctx.fill();
        }

        // Node Fill
        ctx.beginPath();
        ctx.arc(n.x, n.y, currentRadius, 0, Math.PI * 2);

        if (n.isCore) {
          ctx.fillStyle = isLightMode ? '#0284c7' : '#38bdf8';
          ctx.shadowColor = '#38bdf8';
          ctx.shadowBlur = 22;
        } else if (n.type === 'hub') {
          ctx.fillStyle = isLightMode ? '#ffffff' : '#0d1322';
          ctx.shadowColor = n.color;
          ctx.shadowBlur = isHovered ? 18 : 10;
        } else {
          ctx.fillStyle = isLightMode ? '#ffffff' : '#070a12';
          ctx.shadowColor = n.color;
          ctx.shadowBlur = isHovered ? 14 : 0;
        }
        ctx.fill();

        // Node Border Ring
        ctx.lineWidth = n.isCore ? 3.5 : n.type === 'hub' ? 2.8 : 1.8;
        ctx.strokeStyle = n.color;
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Node Typography & Label
        ctx.font = n.isCore
          ? '600 14px Inter, sans-serif'
          : n.type === 'hub'
          ? '600 13px Inter, sans-serif'
          : '500 12px "JetBrains Mono", monospace';

        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        if (n.isCore) {
          ctx.fillStyle = '#ffffff';
          ctx.fillText(n.label, n.x, n.y);
        } else if (n.type === 'hub') {
          ctx.fillStyle = isLightMode ? '#0f172a' : '#ffffff';
          ctx.fillText(n.label, n.x, n.y);
        } else {
          ctx.fillStyle = isHovered
            ? n.color
            : isLightMode
            ? '#1e293b'
            : '#e2e8f0';
          ctx.fillText(n.label, n.x, n.y);
        }
      });

      animId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('resize', handleResize);
    };
  }, [activeCategory]);

  return (
    <div style={{ position: 'relative', width: '100%', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>

      {/* Interactive Category Filter Pills bar to keep graph spacious */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '8px',
          padding: '14px 18px',
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-glass)',
          borderBottom: 'none',
          borderTopLeftRadius: 'var(--radius-lg)',
          borderTopRightRadius: 'var(--radius-lg)',
        }}
      >
        <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', marginRight: '6px' }}>
          FOCUS DOMAIN:
        </span>

        <button
          onClick={() => setActiveCategory('ALL')}
          style={{
            padding: '6px 14px',
            borderRadius: 'var(--radius-pill)',
            border: activeCategory === 'ALL' ? '1px solid var(--accent-purple)' : '1px solid var(--border-glass)',
            background: activeCategory === 'ALL' ? 'var(--accent-purple)' : 'transparent',
            color: activeCategory === 'ALL' ? '#ffffff' : 'var(--text-secondary)',
            fontSize: '12.5px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
        >
          All Domains
        </button>

        {categoriesData.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                padding: '6px 14px',
                borderRadius: 'var(--radius-pill)',
                border: `1px solid ${isActive ? cat.color : 'var(--border-glass)'}`,
                background: isActive ? `${cat.color}22` : 'transparent',
                color: isActive ? cat.color : 'var(--text-secondary)',
                fontSize: '12.5px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Knowledge Graph Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          display: 'block',
          width: '100%',
          background: 'var(--bg-card)',
          borderBottomLeftRadius: 'var(--radius-lg)',
          borderBottomRightRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-glass)',
          boxShadow: 'var(--glow-card)',
        }}
      />

      {/* Hover Detail Card Tooltip */}
      {hoveredNode && (
        <div
          style={{
            position: 'absolute',
            bottom: '16px',
            left: '16px',
            padding: '10px 18px',
            borderRadius: 'var(--radius-md)',
            background: 'var(--bg-surface)',
            border: `1px solid ${hoveredNode.color}`,
            boxShadow: `0 10px 30px ${hoveredNode.color}33`,
            fontFamily: 'var(--font-body)',
            fontSize: '13px',
            color: 'var(--text-primary)',
            backdropFilter: 'blur(12px)',
            pointerEvents: 'none',
            zIndex: 10,
          }}
        >
          <div style={{ fontWeight: '700', color: hoveredNode.color, fontSize: '14px', marginBottom: '2px' }}>
            {hoveredNode.label}
          </div>
          <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
            {hoveredNode.isCore
              ? 'Core Engineering Architecture'
              : hoveredNode.type === 'hub'
              ? `Category Cluster • ${hoveredNode.skillsCount} Skills`
              : `Skill Node • ${hoveredNode.parentCat}`}
          </div>
        </div>
      )}
    </div>
  );
}
