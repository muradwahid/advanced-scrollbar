import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import "./style.scss";
import { useCursor } from '../../../hooks/useCursor';

const CursorSpotlight = ({ size = 150, intensity = 0.7, color = '#f00', duration = 0.2, domEl = null }) => {
  const { cursorPosition } = useCursor(domEl);
  const spotlightRef = useRef(null);
  
  useEffect(() => {
    if (!spotlightRef.current) return;

    gsap.to(spotlightRef.current, {
      x: cursorPosition.x,
      y: cursorPosition.y,
      duration,
      ease: 'power2.out',
    });
  }, [cursorPosition]);

  return (
    <div
      ref={spotlightRef}
      className="cursor-spotlight"
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, rgba(255,255,255,0) 70%)`,
        opacity: intensity,

      }}
    />
  );
};

export default CursorSpotlight;