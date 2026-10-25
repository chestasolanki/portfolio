import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Server, CreditCard, Truck, Activity, CheckCircle2, ChevronRight, Terminal } from 'lucide-react';

const pipelineNodes = [
  {
    id: 'client',
    title: 'Client / React 19',
    role: 'Storefront & Framer Motion',
    badge: 'UI Engine',
    icon: Monitor,
    color: '#38bdf8',
    payload: {
      status: 200,
      event: 'ORDER_INITIATED',
      framework: 'React 19 + Framer Motion',
      storefront: 'Limetta Luxury Decor',
      cart_hash: 'c81b3f_synced',
      fps: '60 FPS (Hardware Accel)'
    }
  },
  {
    id: 'node',
    title: 'Node/Express Engine',
    role: 'Microservice API & MongoDB',
    badge: 'Core Backend',
    icon: Server,
    color: '#22c55e',
    payload: {
      status: 200,
      route: 'POST /api/v1/orders/checkout',
      runtime: 'Node.js 22 LTS + Express.js',
      database: 'MongoDB Atlas (Cluster0)',
      latency: '34ms',
      auth: 'JWT (HMAC-SHA256 valid)'
    }
  },
  {
    id: 'razorpay',
    title: 'Razorpay',
    role: 'Payment Gateway Webhook',
    badge: 'Settlement',
    icon: CreditCard,
    color: '#60a5fa',
    payload: {
      status: 200,
      gateway: 'Razorpay API',
      payment_id: 'pay_NLx9281a7b',
      amount: '₹18,450.00 INR',
      webhook: 'payment.captured',
      receipt: 'Automated email via Resend'
    }
  },
  {
    id: 'delhivery',
    title: 'Delhivery Logistics',
    role: 'Order Fulfillment & Dispatch',
    badge: 'Logistics',
    icon: Truck,
    color: '#34d399',
    payload: {
      status: 200,
      tracking_id: 'DLH_9921',
      waybill: 'generated',
      courier: 'Delhivery Surface Express',
      dispatch_status: 'Out for Delivery',
      eta: 'Next Business Day'
    }
  }
];

export default function LiveSystemPipeline() {
  const [hoveredNode, setHoveredNode] = useState(null);
  const [activePin, setActivePin] = useState('delhivery'); // default inspects Delhivery

  const currentNode = pipelineNodes.find((n) => n.id === (hoveredNode || activePin)) || pipelineNodes[3];

  return (
    <div
      className="live-system-pipeline-container"
      style={{
        position: 'relative',
        background: 'rgba(7, 12, 24, 0.7)',
        border: '1px solid rgba(56, 189, 248, 0.28)',
        borderRadius: 'var(--radius-md)',
        padding: '22px 20px',
        marginTop: '22px',
        marginBottom: '26px',
        backdropFilter: 'blur(12px)',
        overflow: 'hidden'
      }}
    >
      {/* Background Circuit Grid Lines */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(56, 189, 248, 0.08) 1px, transparent 1px)',
          backgroundSize: '18px 18px',
          pointerEvents: 'none'
        }}
      />

      {/* Top Telemetry Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '10px',
        marginBottom: '20px',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: '#38bdf8',
            boxShadow: '0 0 10px #38bdf8',
            animation: 'pulse 1.8s infinite'
          }} />
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            fontWeight: '700',
            letterSpacing: '0.12em',
            color: 'var(--accent-purple)',
            textTransform: 'uppercase'
          }}>
            Live System Pipeline
          </span>
          <span style={{
            fontSize: '11px',
            padding: '2px 8px',
            borderRadius: 'var(--radius-pill)',
            background: 'rgba(56, 189, 248, 0.14)',
            color: '#7dd3fc',
            fontFamily: 'var(--font-mono)'
          }}>
            Interactive Micro-Architecture
          </span>
        </div>

        <div style={{
          fontSize: '11.5px',
          color: 'var(--text-muted)',
          fontFamily: 'var(--font-mono)',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          <Activity size={13} style={{ color: '#22c55e' }} />
          <span>Status: 99.98% Wire Health</span>
        </div>
      </div>

      {/* Desktop / Tablet Flow Diagram */}
      <div className="pipeline-flow-wrapper" style={{ position: 'relative', zIndex: 1 }}>
        <div
          className="pipeline-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '14px',
            position: 'relative'
          }}
        >
          {pipelineNodes.map((node, index) => {
            const Icon = node.icon;
            const isHovered = hoveredNode === node.id;
            const isSelected = (hoveredNode || activePin) === node.id;

            return (
              <motion.div
                key={node.id}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                onClick={() => setActivePin(node.id)}
                whileHover={{ scale: 1.03, y: -3 }}
                transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                style={{
                  position: 'relative',
                  background: isSelected
                    ? 'linear-gradient(135deg, rgba(14, 26, 52, 0.95) 0%, rgba(56, 189, 248, 0.22) 100%)'
                    : 'rgba(11, 18, 36, 0.65)',
                  border: isSelected
                    ? `1.5px solid ${node.color}`
                    : '1px solid rgba(56, 189, 248, 0.2)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '14px',
                  cursor: 'pointer',
                  boxShadow: isSelected
                    ? `0 8px 30px ${node.color}35`
                    : '0 4px 15px rgba(0, 0, 0, 0.4)',
                  transition: 'all 0.25s ease'
                }}
              >
                {/* Node Status Pill */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '10px'
                }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: `${node.color}18`,
                    border: `1px solid ${node.color}45`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Icon size={16} style={{ color: node.color }} />
                  </div>

                  <span style={{
                    fontSize: '10px',
                    fontFamily: 'var(--font-mono)',
                    textTransform: 'uppercase',
                    color: node.color,
                    background: `${node.color}15`,
                    padding: '2px 7px',
                    borderRadius: 'var(--radius-pill)',
                    fontWeight: '600',
                    border: `1px solid ${node.color}30`
                  }}>
                    {node.badge}
                  </span>
                </div>

                <div style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '13.5px',
                  fontWeight: '700',
                  color: 'var(--text-primary)',
                  marginBottom: '3px'
                }}>
                  {node.title}
                </div>

                <div style={{
                  fontSize: '11px',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.3'
                }}>
                  {node.role}
                </div>

                {/* Arrow indicator between nodes on larger displays */}
                {index < pipelineNodes.length - 1 && (
                  <div
                    className="pipeline-arrow-indicator"
                    style={{
                      position: 'absolute',
                      right: '-12px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      zIndex: 3,
                      display: 'none'
                    }}
                  >
                    <ChevronRight size={16} style={{ color: 'var(--accent-purple)' }} />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Continuous Animated Circuit Bus Line */}
        <div style={{
          position: 'relative',
          height: '14px',
          margin: '12px 0 16px 0',
          display: 'flex',
          alignItems: 'center'
        }}>
          {/* Base bus wire */}
          <div style={{
            position: 'absolute',
            left: '4%',
            right: '4%',
            height: '2px',
            background: 'linear-gradient(90deg, #38bdf8 0%, #22c55e 35%, #60a5fa 70%, #34d399 100%)',
            opacity: 0.4
          }} />

          {/* SVG Animated Laser Pulse traveling along wire */}
          <svg
            style={{
              position: 'absolute',
              left: '4%',
              width: '92%',
              height: '14px',
              overflow: 'visible'
            }}
          >
            <defs>
              <filter id="pulse-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Traveling Photon 1 */}
            <motion.circle
              r="4"
              fill="#ffffff"
              filter="url(#pulse-glow)"
              animate={{
                cx: ['0%', '100%']
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              cy="7"
            />

            {/* Traveling Photon 2 (delayed) */}
            <motion.circle
              r="3.5"
              fill="#38bdf8"
              filter="url(#pulse-glow)"
              animate={{
                cx: ['0%', '100%']
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1.4
              }}
              cy="7"
            />
          </svg>
        </div>
      </div>

      {/* Mini Terminal Popover HUD (Shows Simulated Live Payload) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentNode.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          style={{
            background: 'rgba(3, 7, 18, 0.92)',
            border: `1px solid ${currentNode.color}65`,
            borderRadius: 'var(--radius-sm)',
            padding: '14px 18px',
            position: 'relative',
            zIndex: 2,
            boxShadow: `0 8px 30px ${currentNode.color}25`
          }}
        >
          {/* Terminal Title Bar */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '10px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            paddingBottom: '8px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Terminal size={14} style={{ color: currentNode.color }} />
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                color: 'var(--text-primary)',
                fontWeight: '700'
              }}>
                SIMULATED LIVE PAYLOAD // [{currentNode.title.toUpperCase()}]
              </span>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: '#34d399'
            }}>
              <CheckCircle2 size={12} />
              <span>status: 200 OK</span>
            </div>
          </div>

          {/* Terminal Body Content */}
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            lineHeight: '1.6',
            color: '#e2e8f0',
            overflowX: 'auto'
          }}>
            {currentNode.id === 'delhivery' ? (
              <div>
                <span style={{ color: '#38bdf8' }}>status</span>: <span style={{ color: '#34d399' }}>200</span> |{' '}
                <span style={{ color: '#38bdf8' }}>tracking_id</span>: <span style={{ color: '#fef08a' }}>"DLH_9921"</span> |{' '}
                <span style={{ color: '#38bdf8' }}>waybill</span>: <span style={{ color: '#a7f3d0' }}>"generated"</span>
                <div style={{ marginTop: '4px', color: '#94a3b8', fontSize: '11px' }}>
                  $ courier: "Delhivery Surface Express" | dispatch_status: "Out for Delivery" | eta: "Next Day Delivery"
                </div>
              </div>
            ) : (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {Object.entries(currentNode.payload).map(([k, v]) => (
                  <span key={k} style={{ marginRight: '10px' }}>
                    <span style={{ color: '#38bdf8' }}>{k}</span>:{' '}
                    <span style={{ color: typeof v === 'number' ? '#34d399' : '#fef08a' }}>
                      {typeof v === 'string' ? `"${v}"` : String(v)}
                    </span>
                  </span>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      <style>{`
        @media (min-width: 900px) {
          .pipeline-arrow-indicator {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
}
