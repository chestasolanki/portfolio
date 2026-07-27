import React from 'react';
import { motion } from 'framer-motion';

export function MotionTitle({ children, className = '', style = {}, delay = 0 }) {
  const text = typeof children === 'string' ? children : '';

  if (!text) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
        className={className}
        style={style}
      >
        {children}
      </motion.div>
    );
  }

  const words = text.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: delay }
    })
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      filter: 'blur(8px)',
      rotateX: -20
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      rotateX: 0,
      transition: {
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={className}
      style={{ ...style, display: 'inline-block', perspective: '1000px' }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={childVariants}
          style={{ display: 'inline-block', marginRight: '0.28em', willChange: 'transform, opacity, filter' }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}

export function MotionParagraph({ children, className = '', style = {}, delay = 0.2 }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 25, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.p>
  );
}
