import { useEffect, useRef, useState } from 'react';
import './style.scss';
import { useCursor } from '../../../hooks/useCursor';
import { isSet } from '../../../utils/common';


// interface GlitchCursorProps {
//   size?: number;
//   primaryColor?: string;
//   secondaryColor?: string;
//   tertiaryColor?: string;
//   intensity?: 'low' | 'medium' | 'high';
//   speed?: 'slow' | 'medium' | 'fast';
//   trailLength?: number;
//   glitchMode?: 'digital' | 'analog' | 'cyberpunk' | 'matrix';
//   enabled?: boolean;
//   blendMode?: 'normal' | 'multiply' | 'screen' | 'overlay' | 'difference';
//   showTrail?: boolean;
//   clickEffect?: boolean;
// }


const CursorGlitch = ({
  size = 20,
  // primaryColor = '#00ff00',
  // secondaryColor = '#ff0040',
  // tertiaryColor = '#0040ff',
  primaryColor,
  secondaryColor,
  tertiaryColor,
  intensity = 'medium',
  speed = 'medium',
  tailLength = 8,
  glitchMode = 'matrix',
  enabled = true,
  blendMode = 'normal',
  showTrail = true,
  clickEffect = false,
  domEl = null, eventEl = window
}) => {
  const cursorRef = useRef(null);
  const { cursorPosition, isClicking } = useCursor(domEl, eventEl);
  const [trails, setTrails] = useState([])
  // console.log(blendMode)
  useEffect(() => {
    if (!enabled) return;
      if (showTrail) {
        setTrails(prev => {
          const newTrails = [
            { x: cursorPosition.x, y: cursorPosition.y, opacity: 1 },
            ...prev.slice(0, tailLength - 1).map((trail, index) => ({
              ...trail,
              opacity: 1 - (index + 1) / tailLength
            }))
          ];
          return newTrails;
        });
      }

  }, [cursorPosition,enabled, showTrail, tailLength]);

  if (!enabled) return null;


  const colors = {
    matrix: {
      primary: '#00ff00',
      secondary: '#40ff40',
      tertiary: '#80ff80'
    },
    digital: {
      primary: '#ff4040',
      secondary: '#40ff40',
      tertiary: '#4040ff'
    },
    cyberpunk: {
      primary: '#ff0080',
      secondary: '#00ffff',
      tertiary: '#ffff00'
    },
    analog: {
      primary: '#ffffff',
      secondary: '#ff4444',
      tertiary: '#4444ff'
    }
  }

  const cursorStyle = {
    '--bBlocks-cursor-glitch-size': `${size}px`,
    '--bBlocks-cursor-glitch-primary-color': isSet(primaryColor) ? primaryColor : colors[glitchMode].primary,
    '--bBlocks-cursor-glitch-secondary-color': isSet(secondaryColor) ? secondaryColor : colors[glitchMode].secondary,
    '--bBlocks-cursor-glitch-tertiary-color': isSet(tertiaryColor) ? tertiaryColor : colors[glitchMode].tertiary,
    '--bBlocks-cursor-glitch-blend-mode': blendMode,
    left: cursorPosition.x,
    top: cursorPosition.y,
    transform: `translate(-50%, -50%) ${isClicking && clickEffect ? 'scale(1.5)' : 'scale(1)'}`
  };

  const cursorClasses = [
    'glitch-cursor',
    `glitch-${glitchMode}`,
    `intensity-${intensity}`,
    `speed-${speed}`,
    isClicking && clickEffect ? 'clicking' : ''
  ].filter(Boolean).join(' ');


  

  return (
    <>
      {/* Trail elements */}
      {showTrail && trails.map((trail, index) => (
        <div
          key={index}
          className="glitch-cursor-trail"
          style={{
            '--bBlocks-cursor-glitch-size': `${size * (1 - index * 0.1)}px`,
            '--bBlocks-cursor-glitch-primary-color': primaryColor,
            '--bBlocks-cursor-glitch-trail-opacity': trail.opacity,
            left: trail.x,
            top: trail.y,
            transform: 'translate(-50%, -50%)',
            opacity: trail.opacity * 0.6
          }}
        />
      ))}

      {/* Main cursor */}
      <div
        ref={cursorRef}
        className={cursorClasses}
        style={cursorStyle}
      >
        <div className="cursor-core"></div>
        <div className="cursor-glitch-layer layer-1"></div>
        <div className="cursor-glitch-layer layer-2"></div>
        <div className="cursor-glitch-layer layer-3"></div>
        <div className="cursor-ring"></div>
        {glitchMode === 'matrix' && (
          <div className="matrix-particles">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="matrix-particle"></div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CursorGlitch;