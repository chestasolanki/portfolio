import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Server, Database, CreditCard, Truck, Image, Zap } from 'lucide-react';

const satellites = [
  {
    id: 'react',
    label: 'React 19',
    icon: Zap,
    color: '#38bdf8',
    glow: 'rgba(56, 189, 248, 0.35)',
    duration: 4.2,
    delay: 0,
    yRange: [-6, 6, -6],
    xRange: [-3, 3, -3]
  },
  {
    id: 'node',
    label: 'Node.js',
    icon: Server,
    color: '#22c55e',
    glow: 'rgba(34, 197, 94, 0.35)',
    duration: 4.8,
    delay: 0.6,
    yRange: [-5, 7, -5],
    xRange: [3, -3, 3]
  },
  {
    id: 'mongo',
    label: 'MongoDB',
    icon: Database,
    color: '#10b981',
    glow: 'rgba(16, 185, 129, 0.35)',
    duration: 5.2,
    delay: 1.2,
    yRange: [-7, 5, -7],
    xRange: [-2, 4, -2]
  },
  {
    id: 'razorpay',
    label: 'Razorpay',
    icon: CreditCard,
    color: '#3b82f6',
    glow: 'rgba(59, 130, 246, 0.35)',
    duration: 4.5,
    delay: 1.8,
    yRange: [-5, 5, -5],
    xRange: [2, -3, 2]
  },
  {
    id: 'delhivery',
    label: 'Delhivery',
    icon: Truck,
    color: '#f59e0b',
    glow: 'rgba(245, 158, 11, 0.35)',
    duration: 4.9,
    delay: 0.9,
    yRange: [-6, 6, -6],
    xRange: [-3, 2, -3]
  },
  {
    id: 'imagekit',
    label: 'ImageKit',
    icon: Image,
    color: '#a855f7',
    glow: 'rgba(168, 85, 247, 0.35)',
    duration: 5.4,
    delay: 1.5,
    yRange: [-4, 6, -4],
    xRange: [3, -2, 3]
  }
];

export default function FloatingSatellites() {
  return (
    <div
      className="floating-satellites-bar"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        alignItems: 'center',
        marginTop: '16px',
        marginBottom: '20px'
      }}
    >
      <div style={{
        fontSize: '11px',
        fontFamily: 'var(--font-mono)',
        textTransform: 'uppercase',
        letterSpacing: '0.12em',
        color: 'var(--text-dim)',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        marginRight: '6px'
      }}>
        <Cpu size={13} style={{ color: 'var(--accent-purple)' }} />
        <span>Stack Satellites:</span>
      </div>

      {satellites.map((sat) => {
        const Icon = sat.icon;
        return (
          <motion.div
            key={sat.id}
            animate={{
              y: sat.yRange,
              x: sat.xRange,
              rotate: [-1.5, 1.5, -1.5]
            }}
            transition={{
              duration: sat.duration,
              delay: sat.delay,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            whileHover={{
              scale: 1.12,
              y: -8,
              boxShadow: `0 8px 24px ${sat.glow}`
            }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '5px 12px',
              borderRadius: 'var(--radius-pill)',
              background: 'rgba(10, 16, 32, 0.75)',
              border: `1px solid ${sat.color}40`,
              backdropFilter: 'blur(8px)',
              cursor: 'pointer',
              userSelect: 'none',
              boxShadow: `0 2px 10px ${sat.glow}`
            }}
          >
            <div
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                background: sat.color,
                boxShadow: `0 0 8px ${sat.color}`
              }}
            />
            <Icon size={12} style={{ color: sat.color }} />
            <span
              style={{
                fontSize: '11.5px',
                fontWeight: '600',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-primary)'
              }}
            >
              {sat.label}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}
