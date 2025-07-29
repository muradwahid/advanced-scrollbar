import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import "./style.scss";
import { useCursor } from '../../../hooks/useCursor';

const CursorPixelated = ({
  size = 60,
  pixelSize = 6,
  // color = '#0EA5E9',
  color ='linear-gradient(135deg, #fecda5 0%, #fe2d2d 50%, #6b003e 100%)',
  duration = 0.15,
  domEl = null
}) => {
  const { cursorPosition, isClicking } = useCursor(domEl);
  const containerRef = useRef(null);
  
  useEffect(() => {
    if (!containerRef.current) return;

    gsap.to(containerRef.current, {
      x: cursorPosition.x,
      y: cursorPosition.y,
      duration,
      ease: 'power2.out',
    });
  }, [cursorPosition]);
  
  useEffect(() => {
    if (!containerRef.current) return;

    if (isClicking) {
      gsap.to(containerRef.current, {
        scale: 0.8,
        duration: 0.2,
        ease: 'power2.out',
      });
    } else {
      gsap.to(containerRef.current, {
        scale: 1,
        duration: 0.4,
        ease: 'elastic.out(1, 0.3)',
      });
    }
  }, [isClicking]);

  // Generate pixel grid
  const pixelCount = Math.ceil(size / pixelSize);
  const pixels = [];
  
  for (let y = 0; y < pixelCount; y++) {
    for (let x = 0; x < pixelCount; x++) {
      const distance = Math.sqrt(
        Math.pow(x - pixelCount / 2, 2) + Math.pow(y - pixelCount / 2, 2)
      );
      
      // Only add pixels within the circular area
      if (distance <= pixelCount / 2) {
        pixels.push(
          <div
            key={`${x}-${y}`}
            style={{
              position: 'absolute',
              left: x * pixelSize,
              top: y * pixelSize,
              width: pixelSize,
              height: pixelSize,
              background: color,
              opacity: isClicking ? 1 - distance / (pixelCount / 2) * 0.3 : 1,
            }}
          />
        );
      }
    }
  }

  return (
    <div
      ref={containerRef}
      className="cursor-pixelated"
      style={{
        width: size,
        height: size,
      }}
    >
      {pixels}
    </div>
  );
};

export default CursorPixelated;