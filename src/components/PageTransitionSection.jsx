import React from 'react';
import { motion } from 'framer-motion';

export default function PageTransitionSection({ children, id, className = '', style = {} }) {
  return (
    <motion.section
      id={id}
      className={className}
      style={{ ...style, position: 'relative', overflow: 'hidden' }}
      initial={{ opacity: 0, y: 60, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1]
      }}
    >
      {/* Decorative Page-Switch Curtain Flash Accent */}
      <motion.div
        initial={{ opacity: 0.8, x: '-100%' }}
        whileInView={{ opacity: 0, x: '100%' }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, transparent, var(--accent-cyan), transparent)',
          zIndex: 10,
          pointerEvents: 'none'
        }}
      />
      {children}
    </motion.section>
  );
}
