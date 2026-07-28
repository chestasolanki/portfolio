import React from 'react';

export default function CinematicDeveloperBackground() {
  return (
    <div className="cinematic-bg-wrapper">
      {/* 1. DIAGONAL FLOWING VIVID AMBIENT LIGHT CLOUDS */}
      <div
        className="cinematic-cloud-blue"
        style={{
          position: 'absolute',
          top: '-10%',
          left: '-5%',
          width: '750px',
          height: '750px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.45) 0%, rgba(2, 132, 199, 0.2) 50%, transparent 80%)',
          filter: 'blur(120px)',
          pointerEvents: 'none',
          zIndex: 0,
          animation: 'diagonalCloudFlow 22s ease-in-out infinite alternate'
        }}
      />

      <div
        className="cinematic-cloud-purple"
        style={{
          position: 'absolute',
          bottom: '-10%',
          right: '-5%',
          width: '800px',
          height: '800px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(124, 58, 237, 0.18) 50%, transparent 80%)',
          filter: 'blur(130px)',
          pointerEvents: 'none',
          zIndex: 0,
          animation: 'diagonalCloudFlowReverse 26s ease-in-out infinite alternate'
        }}
      />

      {/* 2. HIGH-VISIBILITY ENGINEERING GRID OVERLAY */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(rgba(56, 189, 248, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.12) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
          pointerEvents: 'none',
          zIndex: 0,
          opacity: 0.7
        }}
      />

      {/* 3. VIVID TECHNICAL BLUEPRINT TEXTURES */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 0,
          opacity: 0.22,
          fontFamily: 'var(--font-mono)',
          fontSize: '12px',
          color: '#38bdf8',
          lineHeight: '1.9',
          padding: '30px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px',
          userSelect: 'none'
        }}
      >
        {/* Sketch 1: API & Microservice Flow */}
        <div style={{ background: 'rgba(56, 189, 248, 0.05)', padding: '16px', borderRadius: '8px', border: '1px dashed rgba(56, 189, 248, 0.2)' }}>
          <div style={{ fontWeight: '700', color: '#7dd3fc', marginBottom: '4px' }}>// ARCHITECTURE BLUEPRINT</div>
          <div>GET /api/v1/data ➔ AuthGuard</div>
          <div>│   ├── RateLimiter [OK]</div>
          <div>│   ├── JWT.verifyToken(bearer)</div>
          <div>└── DB.Query("SELECT * FROM models")</div>
          <div>    ├── QueryExecutionTime: 1.2ms</div>
          <div>    └── Return JSON 200 OK</div>
        </div>

        {/* Sketch 2: Database Schema & Entity Blueprint */}
        <div style={{ background: 'rgba(56, 189, 248, 0.05)', padding: '16px', borderRadius: '8px', border: '1px dashed rgba(56, 189, 248, 0.2)' }}>
          <div style={{ fontWeight: '700', color: '#7dd3fc', marginBottom: '4px' }}>// DATABASE SCHEMA</div>
          <div>TABLE SystemEntity &#123;</div>
          <div>  id: UUID [PRIMARY KEY],</div>
          <div>  role: VARCHAR = "Full-Stack Dev",</div>
          <div>  stack: ARRAY["React", "Node"],</div>
          <div>  status: ENUM("ACTIVE", "DEPLOYED")</div>
          <div>&#125;;</div>
        </div>

        {/* Sketch 3: React Component Wireframe Architecture */}
        <div style={{ background: 'rgba(56, 189, 248, 0.05)', padding: '16px', borderRadius: '8px', border: '1px dashed rgba(56, 189, 248, 0.2)' }}>
          <div style={{ fontWeight: '700', color: '#7dd3fc', marginBottom: '4px' }}>// COMPONENT TREE</div>
          <div>&lt;AppContainer&gt;</div>
          <div>  &lt;GlassNavbar floating /&gt;</div>
          <div>  &lt;InteractiveGraph /&gt;</div>
          <div>  &lt;ProjectGrid cards=&#123;2&#125; /&gt;</div>
          <div>&lt;/AppContainer&gt;</div>
        </div>
      </div>

      {/* 4. HIGH-GLOW DRIFTING DATA PACKET PARTICLES */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        {[...Array(8)].map((_, pIdx) => (
          <div
            key={pIdx}
            style={{
              position: 'absolute',
              top: `${10 + pIdx * 12}%`,
              left: `${8 + pIdx * 12}%`,
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#38bdf8',
              boxShadow: '0 0 14px #38bdf8, 0 0 24px #38bdf8',
              opacity: 0.85,
              animation: `dataPacketDrift ${12 + pIdx * 2.5}s linear infinite`
            }}
          />
        ))}
      </div>

      {/* 5. GENTLE VIGNETTE OVERLAY */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at center, transparent 35%, rgba(0, 0, 0, 0.75) 100%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
    </div>
  );
}
