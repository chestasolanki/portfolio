import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import RevealOnScroll from './RevealOnScroll';
import CinematicDeveloperBackground from './CinematicDeveloperBackground';
import TiltCard from './TiltCard';

export default function Contact({ onOpenResume }) {
  const [copiedField, setCopiedField] = useState(null);

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <footer id="contact" className="section-spacing" style={{ position: 'relative', overflow: 'hidden', borderTop: '1px solid var(--border-glass)' }}>
      {/* Cinematic Background Layer */}
      <CinematicDeveloperBackground />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Massive CTA Card: "Let's talk about your project" */}
        <RevealOnScroll>
          <TiltCard intensity={8} style={{ marginBottom: '60px' }}>
            <div className="glass-card" style={{
              padding: 'clamp(32px, 6vw, 64px)',
              borderRadius: 'var(--radius-lg)',
              background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.12) 0%, rgba(6, 182, 212, 0.12) 100%)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div className="section-tag" style={{ justifyContent: 'center', marginBottom: '16px' }}>
                <span>GET IN TOUCH</span>
              </div>

              <h2
                className="font-serif"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2.2rem, 5vw, 4.2rem)',
                  fontWeight: '400',
                  letterSpacing: '-0.02em',
                  lineHeight: '1.08',
                  color: 'var(--text-primary)',
                  marginBottom: '20px'
                }}
              >
                Let's talk about<br />
                <span style={{ color: 'var(--accent-purple)', textShadow: '0 0 25px rgba(56, 189, 248, 0.4)' }}>
                  your <em>project</em> &amp; <em>opportunities</em>
                </span>
              </h2>

              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '1.15rem',
                maxWidth: '600px',
                margin: '0 auto 36px auto',
                lineHeight: '1.6'
              }}>
                Currently open for Full-Stack Developer roles, software engineering opportunities, and technical collaborations.
              </p>

              {/* Quick Contact Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
                <a
                  href="mailto:chestasolanki664@gmail.com"
                  className="btn-primary"
                  style={{ padding: '14px 32px', fontSize: '1rem' }}
                >
                  <Mail size={18} />
                  <span>Send Email</span>
                </a>

                <button
                  onClick={onOpenResume}
                  className="btn-secondary"
                  style={{ padding: '14px 28px', fontSize: '1rem', background: 'rgba(56, 189, 248, 0.15)', borderColor: '#38bdf8' }}
                >
                  <span>Watch Resume</span>
                  <ArrowUpRight size={18} />
                </button>
              </div>
            </div>
          </TiltCard>
        </RevealOnScroll>

        {/* Detailed Contact Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          marginBottom: '60px'
        }}>
          {/* Direct Email Card */}
          <TiltCard>
            <div className="glass-card" style={{ padding: '28px', height: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(56, 189, 248, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38bdf8' }}>
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Direct Email</div>
                  <div style={{ fontWeight: '700', fontSize: '1rem', color: 'var(--text-primary)' }}>chestasolanki664@gmail.com</div>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard('chestasolanki664@gmail.com', 'email')}
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-glass)',
                  color: 'var(--text-primary)',
                  fontSize: '0.88rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  transition: 'all var(--transition-fast)'
                }}
              >
                {copiedField === 'email' ? <Check size={16} style={{ color: '#38bdf8' }} /> : <Copy size={16} />}
                <span>{copiedField === 'email' ? 'Email Copied!' : 'Copy Email Address'}</span>
              </button>
            </div>
          </TiltCard>

          {/* Social Profiles Card (LinkedIn, GitHub) */}
          <TiltCard>
            <div className="glass-card" style={{ padding: '28px', height: '100%' }}>
              <div style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '12px' }}>Professional Profiles</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <a
                  href="https://linkedin.com/in/chestasolanki1/"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    flex: 1,
                    minWidth: '120px',
                    padding: '10px 12px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-glass)',
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    fontWeight: '600',
                    fontSize: '0.88rem'
                  }}
                >
                  <LinkedinIcon size={16} />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://github.com/chestasolanki"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    flex: 1,
                    minWidth: '120px',
                    padding: '10px 12px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-glass)',
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    fontWeight: '600',
                    fontSize: '0.88rem'
                  }}
                >
                  <GithubIcon size={16} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </TiltCard>
        </div>

        {/* Footer Sub-Bar */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '32px',
          borderTop: '1px solid var(--border-glass)',
          fontSize: '0.88rem',
          color: 'var(--text-muted)'
        }}>
          <div>
            © {new Date().getFullYear()} <strong style={{ color: 'var(--text-primary)' }}>CHESTA SOLANKI</strong>. Built with React &amp; Tailwind CSS.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>Designed &amp; Developed with</span>
            <Heart size={14} style={{ color: '#ef4444', fill: '#ef4444' }} />
          </div>
        </div>

      </div>
    </footer>
  );
}
