import React, { useState, useEffect } from 'react';
import { Gamepad2, Play, Heart, Star, Sparkles } from 'lucide-react';

export default function GameLoadingScreen({ onStart }) {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsLoaded(true);
          return 100;
        }
        return prev + 10;
      });
    }, 120);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: '#181528',
      zIndex: 99999,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      color: '#ffffff',
      textAlign: 'center'
    }}>
      {/* Retro Gameboy Device Shell */}
      <div style={{
        background: '#2a2544',
        border: '4px solid #000000',
        borderRadius: '24px',
        padding: '36px 28px',
        boxShadow: '10px 10px 0px #000000',
        maxWidth: '480px',
        width: '100%',
        position: 'relative'
      }}>
        
        {/* Gameboy Screen Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '20px',
          fontFamily: "'Press Start 2P', monospace",
          fontSize: '0.65rem',
          color: '#facc15'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Gamepad2 size={16} style={{ color: '#ec4899' }} />
            <span>GAMEBOY COLOR</span>
          </div>
          <div style={{ display: 'flex', gap: '4px' }}>
            <Heart size={14} style={{ color: '#ef4444', fill: '#ef4444' }} />
            <Heart size={14} style={{ color: '#ef4444', fill: '#ef4444' }} />
            <Heart size={14} style={{ color: '#ef4444', fill: '#ef4444' }} />
          </div>
        </div>

        {/* Inner Screen Display */}
        <div style={{
          background: '#0f0d1b',
          border: '3px solid #000000',
          borderRadius: '12px',
          padding: '28px 20px',
          boxShadow: 'inset 0 0 20px rgba(0,0,0,0.8)',
          marginBottom: '24px'
        }}>
          <div style={{
            fontFamily: "'Press Start 2P', monospace",
            fontSize: '1rem',
            color: '#facc15',
            lineHeight: '1.5',
            marginBottom: '14px',
            textShadow: '2px 2px 0px #000000'
          }}>
            CHESTA<br />SOLANKI
          </div>

          <div style={{
            fontFamily: "'VT323', monospace",
            fontSize: '1.2rem',
            color: '#4ade80',
            marginBottom: '20px'
          }}>
            [ LEVEL 99 FULL-STACK DEVELOPER ]
          </div>

          {/* 8-Bit Progress Bar */}
          <div style={{
            background: '#231f38',
            border: '2px solid #000000',
            height: '20px',
            borderRadius: '6px',
            overflow: 'hidden',
            marginBottom: '10px',
            position: 'relative'
          }}>
            <div style={{
              width: `${progress}%`,
              height: '100%',
              background: 'linear-gradient(90deg, #ec4899, #facc15, #4ade80)',
              transition: 'width 0.12s ease-in-out'
            }} />
          </div>

          <div style={{
            fontFamily: "'VT323', monospace",
            fontSize: '1.1rem',
            color: '#c084fc'
          }}>
            LOADING GAME DATA... {progress}%
          </div>
        </div>

        {/* Start Button */}
        {isLoaded ? (
          <button
            onClick={onStart}
            className="btn-primary"
            style={{
              width: '100%',
              justifyContent: 'center',
              padding: '14px',
              fontSize: '0.85rem',
              animation: 'bounce 1s infinite'
            }}
          >
            <Play size={16} fill="#000000" />
            <span>PRESS START TO PLAY</span>
          </button>
        ) : (
          <div style={{
            fontFamily: "'Press Start 2P', monospace",
            fontSize: '0.65rem',
            color: '#94a3b8',
            padding: '12px'
          }}>
            INSERTING CARTRIDGE...
          </div>
        )}

      </div>
    </div>
  );
}
