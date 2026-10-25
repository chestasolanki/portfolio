import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight, Phone, MapPin, Sparkles, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import PageHeader from './PageHeader';

export default function Contact({ onNavigate, onOpenResume }) {
  const [copiedField, setCopiedField] = useState(null);

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <footer id="contact" className="purrweb-exact-slide-stage purrweb-contact-section">
      {/* Top Navigation Bar: Non-fixed, unique to Contact Page */}
      <PageHeader activePage="contact" onNavigate={onNavigate} />

      <div className="container" style={{ maxWidth: '1320px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        {/* =========================================================================
            GET IN TOUCH HERO CARD (The one allowed bordered/styled container)
            ========================================================================= */}
        <div className="purrweb-contact-cta-box">
          <div className="contact-cta-glow" />

          <div className="purrweb-badge" style={{ margin: '0 auto 20px auto' }}>
            <Sparkles size={12} style={{ color: 'var(--accent-coral)' }} />
            <span className="purrweb-badge-text">GET IN TOUCH</span>
          </div>

          <h2 className="contact-main-headline">
            Let's talk about your <br />
            <span className="purrweb-serif-accent purrweb-gradient-text">
              project &amp; opportunities
            </span>
          </h2>

          <p className="contact-subtext">
            Currently open for Full-Stack Developer roles, AI engineer opportunities, and high-impact technical collaborations.
            Feel free to reach out via email, phone, or LinkedIn.
          </p>

          <div className="contact-actions-row">
            <a
              href="mailto:chestasolanki664@gmail.com"
              className="purrweb-btn-primary"
              style={{ padding: '14px 32px', fontSize: '15px' }}
            >
              <Mail size={18} />
              <span>Send Email</span>
            </a>

            <button
              onClick={onOpenResume}
              className="purrweb-btn-secondary"
              style={{ padding: '14px 30px', fontSize: '15px' }}
            >
              <FileText size={18} />
              <span>Watch Resume</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>

        {/* Clean, Open Contact Details Grid (Borderless) */}
        <div className="purrweb-contact-details-grid">
          
          {/* Email Item */}
          <div className="contact-detail-item">
            <div className="detail-icon-wrap" style={{ color: 'var(--accent-violet)' }}>
              <Mail size={20} />
            </div>
            <div className="detail-content">
              <span className="detail-label">DIRECT EMAIL</span>
              <a href="mailto:chestasolanki664@gmail.com" className="detail-value">
                chestasolanki664@gmail.com
              </a>
            </div>
            <button
              onClick={() => copyToClipboard('chestasolanki664@gmail.com', 'email')}
              className="detail-copy-btn"
              title="Copy Email"
            >
              {copiedField === 'email' ? <Check size={14} style={{ color: '#4ade80' }} /> : <Copy size={14} />}
            </button>
          </div>

          {/* Phone Item */}
          <div className="contact-detail-item">
            <div className="detail-icon-wrap" style={{ color: 'var(--accent-pink)' }}>
              <Phone size={20} />
            </div>
            <div className="detail-content">
              <span className="detail-label">DIRECT PHONE</span>
              <a href="tel:+917455042260" className="detail-value">
                +91-7455042260
              </a>
            </div>
            <button
              onClick={() => copyToClipboard('+917455042260', 'phone')}
              className="detail-copy-btn"
              title="Copy Phone"
            >
              {copiedField === 'phone' ? <Check size={14} style={{ color: '#4ade80' }} /> : <Copy size={14} />}
            </button>
          </div>

          {/* Location Item */}
          <div className="contact-detail-item">
            <div className="detail-icon-wrap" style={{ color: 'var(--accent-cyan)' }}>
              <MapPin size={20} />
            </div>
            <div className="detail-content">
              <span className="detail-label">LOCATION</span>
              <span className="detail-value">India (Open to Remote &amp; Relocation)</span>
            </div>
          </div>

        </div>

        {/* Social Profiles Row */}
        <div className="purrweb-socials-row">
          <a
            href="https://github.com/chestasolanki"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <GithubIcon size={16} />
            <span>GitHub</span>
            <ArrowUpRight size={12} />
          </a>

          <a
            href="https://linkedin.com/in/chestasolanki1/"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <LinkedinIcon size={16} />
            <span>LinkedIn</span>
            <ArrowUpRight size={12} />
          </a>

          <a
            href="https://chestasolanki.tech"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <Sparkles size={14} />
            <span>chestasolanki.tech</span>
            <ArrowUpRight size={12} />
          </a>
        </div>

        {/* Clean Minimalist Footer */}
        <div className="purrweb-footer-bottom">
          <div className="footer-left">
            <div className="footer-logo">CS</div>
            <span className="footer-name">Chesta Solanki</span>
            <span className="footer-sep">•</span>
            <span className="footer-copy">© {new Date().getFullYear()} All Rights Reserved.</span>
          </div>

          <div className="footer-right">
            <span>Designed &amp; Engineered with React 19, Vite &amp; Purrweb Aesthetics</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
