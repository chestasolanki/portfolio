import React, { useState } from 'react';
import { Mail, Phone, Send, Copy, Check, ArrowUpRight, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import RevealOnScroll from './RevealOnScroll';

export default function Contact({ onOpenResume }) {
  const [copiedField, setCopiedField] = useState(null);

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <footer id="contact" className="section-spacing" style={{ position: 'relative', borderTop: '1px solid var(--border-glass)' }}>
      <div className="container">
        
        {/* Massive CTA Card matching reference image: "Let's talk about your project" */}
        <RevealOnScroll>
          <div className="glass-card" style={{
            padding: 'clamp(32px, 6vw, 64px)',
            borderRadius: 'var(--radius-lg)',
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.12) 0%, rgba(6, 182, 212, 0.12) 100%)',
            marginBottom: '60px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div className="section-tag" style={{ justifyContent: 'center', marginBottom: '16px' }}>
              <span>GET IN TOUCH</span>
            </div>

            <h2 style={{
              fontSize: 'clamp(2.2rem, 5vw, 4.2rem)',
              fontWeight: '800',
              letterSpacing: '-0.02em',
              lineHeight: '1.05',
              color: 'var(--text-primary)',
              marginBottom: '20px'
            }}>
              Let's talk about<br />
              <span style={{ color: '#10b981', textShadow: '0 0 25px rgba(16, 185, 129, 0.4)' }}>your project & opportunities</span>
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
                style={{
                  padding: '14px 32px',
                  fontSize: '1rem',
                  background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
                  boxShadow: '0 4px 20px rgba(16, 185, 129, 0.35)'
                }}
              >
                <Mail size={18} />
                <span>Contact us</span>
                <Send size={16} />
              </a>

              <button
                onClick={onOpenResume}
                className="btn-secondary"
                style={{ padding: '14px 28px', fontSize: '1rem' }}
              >
                <span>Watch Resume</span>
                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        </RevealOnScroll>

        {/* Contact Links Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '20px',
          marginBottom: '60px'
        }}>
          
          {/* Email Box */}
          <RevealOnScroll delay={0}>
            <div className="glass-card" style={{ padding: '24px', borderRadius: 'var(--radius-md)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#10b981' }}>
                  <Mail size={20} />
                  <span style={{ fontWeight: '700', fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}>EMAIL</span>
                </div>
                <button
                  onClick={() => copyToClipboard('chestasolanki664@gmail.com', 'email')}
                  style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
                  title="Copy email"
                >
                  {copiedField === 'email' ? <Check size={16} style={{ color: '#10b981' }} /> : <Copy size={16} />}
                </button>
              </div>
              <a
                href="mailto:chestasolanki664@gmail.com"
                style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: '700', fontSize: '0.90rem', wordBreak: 'break-all' }}
              >
                chestasolanki664@gmail.com
              </a>
            </div>
          </RevealOnScroll>

          {/* Phone Box */}
          <RevealOnScroll delay={100}>
            <div className="glass-card" style={{ padding: '24px', borderRadius: 'var(--radius-md)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#06b6d4' }}>
                  <Phone size={20} />
                  <span style={{ fontWeight: '700', fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}>PHONE</span>
                </div>
                <button
                  onClick={() => copyToClipboard('+91-7455042260', 'phone')}
                  style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
                  title="Copy phone"
                >
                  {copiedField === 'phone' ? <Check size={16} style={{ color: '#10b981' }} /> : <Copy size={16} />}
                </button>
              </div>
              <a
                href="tel:+917455042260"
                style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: '700', fontSize: '0.9rem' }}
              >
                +91-7455042260
              </a>
            </div>
          </RevealOnScroll>

          {/* LinkedIn Box */}
          <RevealOnScroll delay={200}>
            <div className="glass-card" style={{ padding: '24px', borderRadius: 'var(--radius-md)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#0a66c2' }}>
                  <LinkedinIcon size={20} />
                  <span style={{ fontWeight: '700', fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}>LINKEDIN</span>
                </div>
                <ArrowUpRight size={16} style={{ color: 'var(--text-muted)' }} />
              </div>
              <a
                href="https://linkedin.com/in/chestasolanki1/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: '700', fontSize: '0.90rem' }}
              >
                linkedin.com/in/chestasolanki1
              </a>
            </div>
          </RevealOnScroll>

          {/* GitHub Box */}
          <RevealOnScroll delay={300}>
            <div className="glass-card" style={{ padding: '24px', borderRadius: 'var(--radius-md)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-primary)' }}>
                  <GithubIcon size={20} />
                  <span style={{ fontWeight: '700', fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}>GITHUB</span>
                </div>
                <ArrowUpRight size={16} style={{ color: 'var(--text-muted)' }} />
              </div>
              <a
                href="https://github.com/chestasolanki"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: '700', fontSize: '0.90rem' }}
              >
                github.com/chestasolanki
              </a>
            </div>
          </RevealOnScroll>

        </div>

        {/* Bottom Credits */}
        <div style={{
          display: 'flex',
          justify: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          paddingTop: '32px',
          borderTop: '1px solid var(--border-subtle)',
          color: 'var(--text-muted)',
          fontSize: '0.85rem'
        }}>
          <div>
            © {new Date().getFullYear()} <strong>Chesta Solanki</strong>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>Crafted with</span>
            <Heart size={14} style={{ color: '#10b981', fill: '#10b981' }} />
            <span>using React & Modern CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
