import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import "./style.scss";
import { useCursor } from '../../../hooks/useCursor';
const CursorRing = ({
  size = 40,
  borderWidth = 2,
  borderColor = '#10B981',
  duration = 0.2,
  domEl = null
}) => {
  const { cursorPosition, isClicking } = useCursor(domEl);
  const ringRef = useRef(null);

  useEffect(() => {
    if (!ringRef.current) return;

    gsap.to(ringRef.current, {
      x: cursorPosition.x,
      y: cursorPosition.y,
      duration,
      ease: 'power2.out',
    });
  }, [cursorPosition]);

  useEffect(() => {
    if (!ringRef.current) return;

    if (isClicking) {
      gsap.to(ringRef.current, {
        scale: 0.8,
        duration: 0.2,
        borderWidth: borderWidth * 2,
        ease: 'power2.out',
      });
    } else {
      gsap.to(ringRef.current, {
        scale: 1,
        borderWidth,
        duration: 0.4,
        ease: 'elastic.out(1, 0.3)',
      });
    }
  }, [isClicking, borderWidth]);

  return (
    <div
      ref={ringRef}
      className="cursor-ring"
      style={{
        width: size,
        height: size,
        border: `${borderWidth}px solid ${borderColor}`,
      }}
    />
  );
};

export default CursorRing;