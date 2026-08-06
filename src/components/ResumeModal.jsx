import React from 'react';
import { X, Download, ExternalLink } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          padding: '0',
          display: 'flex',
          flexDirection: 'column',
          height: '90vh',
          maxHeight: '90vh',
          width: '100%',
          maxWidth: '960px',
          overflow: 'hidden',
          borderRadius: 'var(--radius-lg)'
        }}
      >
        {/* Modal Top Control Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '14px 20px',
          background: 'var(--bg-card)',
          borderBottom: '1px solid var(--border-glass)',
          flexShrink: 0,
          zIndex: 10
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="pulse-dot" />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--text-primary)', fontWeight: '700' }}>
              Chesta_Solanki_Resume.pdf
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <a
              href="/Chesta_Solanki_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
              style={{ padding: '6px 14px', fontSize: '12px' }}
            >
              <ExternalLink size={13} />
              <span>Open in New Tab</span>
            </a>

            <a
              href="/Chesta_Solanki_Resume.pdf"
              download="Chesta_Solanki_Resume.pdf"
              className="btn-primary"
              style={{ padding: '6px 14px', fontSize: '12px' }}
            >
              <Download size={13} />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-glass)',
                borderRadius: '50%',
                width: '30px',
                height: '30px',
                color: 'var(--text-primary)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Embedded PDF Resume Viewer */}
        <div style={{ flex: 1, width: '100%', height: 'calc(100% - 60px)', background: '#0b1329' }}>
          <iframe
            src="/Chesta_Solanki_Resume.pdf"
            title="Chesta Solanki Resume PDF"
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              display: 'block'
            }}
          />
        </div>
      </div>
    </div>
  );
}
