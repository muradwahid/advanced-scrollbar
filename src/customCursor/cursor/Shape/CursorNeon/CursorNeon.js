import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import "./style.scss";
import { useCursor } from '../../../hooks/useCursor';

const CursorNeon = ({
  size = 30,
  color = '#08F7FE',
  shadowSize = 20,
  duration = 0.2,
  domEl = null, eventEl = window
}) => {
  const { cursorPosition, isClicking } = useCursor(domEl, eventEl);
  const neonRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    if (!neonRef.current || !glowRef.current) return;

    gsap.to([neonRef.current, glowRef.current], {
      x: cursorPosition.x,
      y: cursorPosition.y,
      duration,
      ease: 'power2.out',
    });
  }, [cursorPosition]);

  useEffect(() => {
    if (!neonRef.current || !glowRef.current) return;

    if (isClicking) {
      gsap.to(neonRef.current, {
        scale: 0.8,
        boxShadow: `0 0 ${shadowSize * 1.5}px ${color}, 0 0 ${shadowSize * 2}px ${color}`,
        duration: 0.2,
      });
      gsap.to(glowRef.current, {
        scale: 1.2,
        opacity: 0.8,
        duration: 0.2,
      });
    } else {
      gsap.to(neonRef.current, {
        scale: 1,
        boxShadow: `0 0 ${shadowSize}px ${color}, 0 0 ${shadowSize * 1.5}px ${color}`,
        duration: 0.4,
        ease: 'elastic.out(1, 0.3)',
      });
      gsap.to(glowRef.current, {
        scale: 1,
        opacity: 0.4,
        duration: 0.4,
      });
    }
  }, [isClicking, color, shadowSize]);

  return (
    <>
      <div
        ref={neonRef}
        className="neon-cursor"
        style={{
          width: size,
          height: size,
          backgroundColor: color,
          boxShadow: `0 0 ${shadowSize}px ${color}, 0 0 ${shadowSize * 1.5}px ${color}`,

        }}
      />
      <div
        ref={glowRef}
        className="neon-glow"
        style={{
          width: size * 3,
          height: size * 3,
          backgroundColor: color,
          opacity: 0.4,
        }}
      />
    </>
  );
};

export default CursorNeon;