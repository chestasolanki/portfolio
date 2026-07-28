import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function PageTransitionSection({ children, id, className = '', style = {} }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // Apple Keynote Cinematic Slow Camera Float Transition (Zoom, Blur, Fade, Move Upward)
    const ctx = gsap.context(() => {
      // Exit Animation (Zooms, blurs, fades out and floats upward as user scrolls past)
      gsap.fromTo(
        el,
        {
          scale: 1,
          filter: 'blur(0px)',
          opacity: 1,
          y: 0
        },
        {
          scale: 1.04,
          filter: 'blur(8px)',
          opacity: 0.15,
          y: -65,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: el,
            start: 'bottom 75%',
            end: 'bottom top',
            scrub: 2.5
          }
        }
      );

      // Entrance Animation (Slowly fades in & floats into focus from below)
      gsap.fromTo(
        el,
        {
          scale: 0.96,
          filter: 'blur(8px)',
          opacity: 0.15,
          y: 60
        },
        {
          scale: 1,
          filter: 'blur(0px)',
          opacity: 1,
          y: 0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 95%',
            end: 'top 35%',
            scrub: 2.2
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={className}
      style={{
        willChange: 'transform, opacity, filter',
        ...style
      }}
    >
      {children}
    </section>
  );
}
