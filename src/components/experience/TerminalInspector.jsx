import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Shield, Package, Truck, CreditCard, Layers, Eye, RefreshCw, CheckCircle2, Box } from 'lucide-react';

const CHARS = '!@#$%^&*()_+-=[]{}|;:,.<>?/0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function useScrambleText(targetText, speed = 25) {
  const [displayText, setDisplayText] = useState(targetText);

  useEffect(() => {
    let iteration = 0;
    let interval = null;

    interval = setInterval(() => {
      setDisplayText((prev) =>
        targetText
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) {
              return targetText[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('')
      );

      if (iteration >= targetText.length) {
        clearInterval(interval);
      }
      iteration += 1 / 2;
    }, speed);

    return () => clearInterval(interval);
  }, [targetText, speed]);

  return displayText;
}

const experiencePoints = [
  {
    id: 'ecommerce',
    title: 'Full-Stack E-Commerce & Decor Architecture',
    summary:
      'Developed a full-stack e-commerce platform for luxury interior decor for Limetta using React 19, Node.js, Express.js, and MongoDB with Framer Motion animations.',
    tag: 'ARCHITECTURE',
    color: '#38bdf8',
    icon: Layers,
    stats: {
      fps: '60 FPS Transitions',
      database: 'MongoDB Atlas',
      render: 'React 19 SSR/Hydrated',
      queryTime: '8ms Avg Latency'
    }
  },
  {
    id: 'logistics',
    title: 'Razorpay Payment & Delhivery Logistics Pipeline',
    summary:
      'Integrated Razorpay for payment processing and Delhivery Logistics for order fulfillment, waybill tracking, shipping updates, and automated email receipts via Resend.',
    tag: 'LOGISTICS & PAYMENTS',
    color: '#34d399',
    icon: Truck,
    stats: {
      gateway: 'Razorpay Auto-Capture',
      logistics: 'Delhivery Surface Express',
      waybill: 'DLH_9921_IN (Generated)',
      email: 'Resend Webhooks 200 OK'
    }
  },
  {
    id: 'customer',
    title: 'Customer Portals & Custom Product Finishes',
    summary:
      'Built customer portals with custom product finishes, search/filtering, cart, wishlist, product reviews, and secure JWT-based authentication.',
    tag: 'CUSTOMER EXPERIENCE',
    color: '#60a5fa',
    icon: Shield,
    stats: {
      auth: 'JWT (HMAC-SHA256)',
      finishes: 'Multi-finish Color & Material Sync',
      cartState: 'Local + Server Synced',
      security: 'HttpOnly Cookie Guard'
    }
  },
  {
    id: 'admin',
    title: 'Designed an Admin Portal (Inventory & Order State Machine)',
    summary:
      'Designed an Admin Portal for real-time inventory management, order status tracking (Packed, Shipped, Out for Delivery), and cloud media storage via ImageKit API.',
    tag: 'ADMIN CONSOLE',
    color: '#f59e0b',
    icon: Package,
    stats: {
      inventory: '142 Items Live In Stock',
      pipeline: 'Packed → Shipped → Out for Delivery',
      mediaCDN: 'ImageKit Cloud API',
      realtimeSync: 'Active Socket / REST Sync'
    }
  }
];

export default function TerminalInspector() {
  const [activeId, setActiveId] = useState('admin');
  const activeItem = experiencePoints.find((p) => p.id === activeId) || experiencePoints[3];
  const scrambledHeader = useScrambleText(`INSPECT // ${activeItem.tag} :: ${activeItem.title}`, 20);

  return (
    <div className="terminal-inspector-layout" style={{ marginTop: '24px' }}>
      
      {/* 2-Column Responsive Layout: Left = Interactive Points, Right = Dynamic Terminal Inspector Preview */}
      <div className="inspector-grid" style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '24px',
        alignItems: 'stretch'
      }}>
        
        {/* Left: Interactive Achievements List with onMouseEnter */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div style={{
            fontSize: '11.5px',
            fontFamily: 'var(--font-mono)',
            textTransform: 'uppercase',
            letterSpacing: '0.14em',
            color: 'var(--text-muted)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '4px'
          }}>
            <Eye size={13} style={{ color: 'var(--accent-purple)' }} />
            <span>Interactive Milestones (Hover to Inspect Telemetry):</span>
          </div>

          {experiencePoints.map((point) => {
            const Icon = point.icon;
            const isActive = activeId === point.id;

            return (
              <motion.div
                key={point.id}
                onMouseEnter={() => setActiveId(point.id)}
                onClick={() => setActiveId(point.id)}
                whileHover={{ x: 6 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                style={{
                  padding: '16px 18px',
                  borderRadius: 'var(--radius-sm)',
                  background: isActive
                    ? 'linear-gradient(135deg, rgba(14, 25, 48, 0.95) 0%, rgba(56, 189, 248, 0.16) 100%)'
                    : 'rgba(10, 16, 32, 0.55)',
                  border: isActive
                    ? `1.5px solid ${point.color}`
                    : '1px solid rgba(56, 189, 248, 0.18)',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: isActive ? `0 8px 25px ${point.color}20` : 'none',
                  transition: 'all 0.25s ease'
                }}
              >
                {/* Active indicator bar */}
                {isActive && (
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    width: '3.5px',
                    background: point.color,
                    boxShadow: `0 0 10px ${point.color}`
                  }} />
                )}

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '6px',
                    background: `${point.color}15`,
                    border: `1px solid ${point.color}40`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}>
                    <Icon size={15} style={{ color: point.color }} />
                  </div>

                  <div style={{ flex: 1 }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      gap: '6px',
                      marginBottom: '4px'
                    }}>
                      <span style={{
                        fontSize: '13.5px',
                        fontWeight: '700',
                        color: isActive ? '#ffffff' : 'var(--text-primary)',
                        fontFamily: 'var(--font-body)'
                      }}>
                        {point.title}
                      </span>
                      <span style={{
                        fontSize: '10px',
                        fontFamily: 'var(--font-mono)',
                        padding: '2px 6px',
                        borderRadius: '4px',
                        background: `${point.color}18`,
                        color: point.color,
                        border: `1px solid ${point.color}35`
                      }}>
                        {point.tag}
                      </span>
                    </div>

                    <p style={{
                      fontSize: '13px',
                      color: 'var(--text-secondary)',
                      lineHeight: '1.55',
                      margin: 0
                    }}>
                      {point.summary}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Right: Dedicated Hacker Terminal Inspector Window */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            className="terminal-hud-card"
            style={{
              flex: 1,
              background: '#040814',
              border: `1px solid ${activeItem.color}50`,
              borderRadius: 'var(--radius-md)',
              boxShadow: `0 12px 35px rgba(0, 0, 0, 0.8), 0 0 20px ${activeItem.color}20`,
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {/* Terminal Window Header Bar with Traffic Lights */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px 16px',
              background: 'rgba(10, 18, 36, 0.95)',
              borderBottom: '1px solid rgba(56, 189, 248, 0.2)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
                <span style={{
                  marginLeft: '8px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: 'var(--text-secondary)'
                }}>
                  terminal://limetta-inspector.sh
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#38bdf8' }}>
                <RefreshCw size={11} className="spin-slow" />
                <span>LIVE FEED</span>
              </div>
            </div>

            {/* Hacker Scramble Subheader */}
            <div style={{
              padding: '10px 16px',
              background: 'rgba(5, 12, 28, 0.85)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
              fontFamily: 'var(--font-mono)',
              fontSize: '11.5px',
              color: activeItem.color,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}>
              $ {scrambledHeader}
            </div>

            {/* Terminal Body with Interactive Mockup */}
            <div style={{ padding: '18px 20px', flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              
              {/* Dynamic Mockup View: Admin Portal, Logistics, E-Commerce, or Customer */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.id}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                  style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '14px' }}
                >
                  {/* Specialized Live Mockup Display for Admin Portal */}
                  {activeItem.id === 'admin' && (
                    <div style={{
                      background: 'rgba(15, 23, 42, 0.75)',
                      border: '1px solid rgba(245, 158, 11, 0.35)',
                      borderRadius: '8px',
                      padding: '14px'
                    }}>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        fontSize: '11px',
                        fontFamily: 'var(--font-mono)',
                        color: '#f59e0b',
                        marginBottom: '10px'
                      }}>
                        <span>● LIVE ADMIN PIPELINE STATE</span>
                        <span>SOCKET: CONNECTED</span>
                      </div>

                      {/* Multi-stage order status tracking simulation */}
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '6px',
                        marginBottom: '12px'
                      }}>
                        <div style={{
                          flex: 1,
                          padding: '8px',
                          borderRadius: '6px',
                          background: 'rgba(34, 197, 94, 0.15)',
                          border: '1px solid #22c55e',
                          textAlign: 'center',
                          fontSize: '11px',
                          color: '#86efac',
                          fontFamily: 'var(--font-mono)'
                        }}>
                          ✓ Packed
                        </div>
                        <span style={{ color: 'var(--text-dim)' }}>→</span>
                        <div style={{
                          flex: 1,
                          padding: '8px',
                          borderRadius: '6px',
                          background: 'rgba(56, 189, 248, 0.15)',
                          border: '1px solid #38bdf8',
                          textAlign: 'center',
                          fontSize: '11px',
                          color: '#7dd3fc',
                          fontFamily: 'var(--font-mono)'
                        }}>
                          ✓ Shipped
                        </div>
                        <span style={{ color: 'var(--text-dim)' }}>→</span>
                        <div style={{
                          flex: 1.2,
                          padding: '8px',
                          borderRadius: '6px',
                          background: 'rgba(245, 158, 11, 0.25)',
                          border: '1.5px solid #f59e0b',
                          textAlign: 'center',
                          fontSize: '11px',
                          fontWeight: '700',
                          color: '#fef08a',
                          fontFamily: 'var(--font-mono)',
                          boxShadow: '0 0 14px rgba(245, 158, 11, 0.35)'
                        }}>
                          ● Out for Delivery
                        </div>
                      </div>

                      {/* Inventory count metric */}
                      <div style={{
                        fontSize: '11.5px',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--text-secondary)',
                        lineHeight: '1.6'
                      }}>
                        <div>$ ImageKit CDN: <span style={{ color: '#a855f7' }}>428 assets synced (WebP / AVIF)</span></div>
                        <div>$ Inventory: <span style={{ color: '#22c55e' }}>142 items in stock</span> | Backorders: <span style={{ color: '#86efac' }}>0</span></div>
                        <div>$ Live Revenue Tracker: <span style={{ color: '#fef08a' }}>₹3,42,800 total settled</span></div>
                      </div>
                    </div>
                  )}

                  {/* Specialized Live Mockup Display for Logistics */}
                  {activeItem.id === 'logistics' && (
                    <div style={{
                      background: 'rgba(15, 23, 42, 0.75)',
                      border: '1px solid rgba(52, 211, 153, 0.35)',
                      borderRadius: '8px',
                      padding: '14px'
                    }}>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        fontSize: '11px',
                        fontFamily: 'var(--font-mono)',
                        color: '#34d399',
                        marginBottom: '8px'
                      }}>
                        <span>● LOGISTICS &amp; SETTLEMENT STREAM</span>
                        <span>DELHIVERY V2 API</span>
                      </div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11.5px', color: '#e2e8f0', lineHeight: '1.6' }}>
                        <div>$ tracking_id: <span style={{ color: '#fef08a' }}>"DLH_9921"</span></div>
                        <div>$ waybill_status: <span style={{ color: '#86efac' }}>"GENERATED &amp; SCANNED"</span></div>
                        <div>$ razorpay_payment_id: <span style={{ color: '#60a5fa' }}>"pay_NLx9281a7b" (Captured)</span></div>
                        <div>$ dispatch_courier: <span style={{ color: '#38bdf8' }}>"Delhivery Surface Express"</span></div>
                        <div>$ automated_receipt: <span style={{ color: '#a7f3d0' }}>"Resend API webhook 200 OK"</span></div>
                      </div>
                    </div>
                  )}

                  {/* Specialized Live Mockup Display for Customer Experience */}
                  {activeItem.id === 'customer' && (
                    <div style={{
                      background: 'rgba(15, 23, 42, 0.75)',
                      border: '1px solid rgba(96, 165, 250, 0.35)',
                      borderRadius: '8px',
                      padding: '14px'
                    }}>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        fontSize: '11px',
                        fontFamily: 'var(--font-mono)',
                        color: '#60a5fa',
                        marginBottom: '8px'
                      }}>
                        <span>● CUSTOMER SESSION STATE</span>
                        <span>JWT AUTHENTICATED</span>
                      </div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11.5px', color: '#e2e8f0', lineHeight: '1.6' }}>
                        <div>$ auth_token: <span style={{ color: '#86efac' }}>"Bearer eyJhbGciOiJIUzI1Ni..." (Valid)</span></div>
                        <div>$ finish_selected: <span style={{ color: '#fef08a' }}>"Brushed Brass / Obsidian Black"</span></div>
                        <div>$ cart_items: <span style={{ color: '#38bdf8' }}>2 luxury items (Synced to DB)</span></div>
                        <div>$ wishlist_sync: <span style={{ color: '#a7f3d0' }}>Instantaneous localStorage + Server</span></div>
                      </div>
                    </div>
                  )}

                  {/* Specialized Live Mockup Display for E-Commerce */}
                  {activeItem.id === 'ecommerce' && (
                    <div style={{
                      background: 'rgba(15, 23, 42, 0.75)',
                      border: '1px solid rgba(56, 189, 248, 0.35)',
                      borderRadius: '8px',
                      padding: '14px'
                    }}>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        fontSize: '11px',
                        fontFamily: 'var(--font-mono)',
                        color: '#38bdf8',
                        marginBottom: '8px'
                      }}>
                        <span>● ARCHITECTURE BENCHMARK</span>
                        <span>REACT 19 + NODE 22</span>
                      </div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11.5px', color: '#e2e8f0', lineHeight: '1.6' }}>
                        <div>$ framework: <span style={{ color: '#38bdf8' }}>"React 19 with Concurrent Rendering"</span></div>
                        <div>$ animations: <span style={{ color: '#a855f7' }}>"Framer Motion (60 FPS smooth)"</span></div>
                        <div>$ db_cluster: <span style={{ color: '#22c55e' }}>"MongoDB Atlas 3-replica replicaSet"</span></div>
                        <div>$ avg_response_time: <span style={{ color: '#86efac' }}>"8ms read / 34ms write"</span></div>
                      </div>
                    </div>
                  )}

                  {/* Telemetry Metric Grid */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '10px'
                  }}>
                    {Object.entries(activeItem.stats).map(([k, v]) => (
                      <div
                        key={k}
                        style={{
                          background: 'rgba(10, 18, 36, 0.6)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          borderRadius: '6px',
                          padding: '8px 10px'
                        }}
                      >
                        <div style={{
                          fontSize: '10px',
                          fontFamily: 'var(--font-mono)',
                          textTransform: 'uppercase',
                          color: 'var(--text-dim)'
                        }}>
                          {k}
                        </div>
                        <div style={{
                          fontSize: '12px',
                          fontWeight: '600',
                          fontFamily: 'var(--font-mono)',
                          color: '#e2e8f0',
                          marginTop: '2px'
                        }}>
                          {v}
                        </div>
                      </div>
                    ))}
                  </div>

                </motion.div>
              </AnimatePresence>

            </div>

            {/* Terminal Footer */}
            <div style={{
              padding: '8px 16px',
              background: 'rgba(5, 10, 22, 0.95)',
              borderTop: '1px solid rgba(255, 255, 255, 0.06)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '11px',
              fontFamily: 'var(--font-mono)',
              color: 'var(--text-dim)'
            }}>
              <span>Limetta E-Commerce Engine</span>
              <span style={{ color: '#34d399' }}>● SYSTEM OPTIMAL</span>
            </div>

          </div>
        </div>

      </div>

      <style>{`
        @media (min-width: 992px) {
          .inspector-grid {
            grid-template-columns: 1.15fr 0.95fr !important;
          }
        }
        .spin-slow {
          animation: spin 6s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
