import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import "./style.scss";
import { useCursor } from '../../../hooks/useCursor';

const CursorRipple = ({
  size = 50,
  color = 'rgba(56, 189, 248, 0.6)',
  maxRipples = 5,
  duration = 0.1,
}) => {
  const { cursorPosition, isClicking } = useCursor();
  const dotRef = useRef(null);
  const [ripples, setRipples] = useState([]);
  const lastClickTime = useRef(0);
  const rippleIdCounter = useRef(0);

  useEffect(() => {
    if (!dotRef.current) return;

    gsap.to(dotRef.current, {
      x: cursorPosition.x,
      y: cursorPosition.y,
      duration,
      ease: 'power2.out',
    });
  }, [cursorPosition]);

  useEffect(() => {
    if (isClicking) {
      const now = Date.now();
      // Prevent adding ripples too frequently
      if (now - lastClickTime.current > 200) {
        lastClickTime.current = now;
        
        // Add new ripple
        const newRipple = {
          id: rippleIdCounter.current++,
          x: cursorPosition.x,
          y: cursorPosition.y,
        };
        
        setRipples(prevRipples => {
          // Keep only the most recent ripples up to maxRipples
          const updatedRipples = [...prevRipples, newRipple];
          if (updatedRipples.length > maxRipples) {
            return updatedRipples.slice(updatedRipples.length - maxRipples);
          }
          return updatedRipples;
        });
      }
    }
  }, [isClicking, cursorPosition, maxRipples]);

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-ripple-wrapper"
        style={{
          width: size / 3,
          height: size / 3,
          backgroundColor: color.replace(/[^,]+(?=\))/, '1'),
        }}
      />
      {ripples.map(ripple => (
        <RippleEffect
          key={ripple.id}
          x={ripple.x}
          y={ripple.y}
          size={size}
          color={color}
          onComplete={() => {
            setRipples(prevRipples => prevRipples.filter(r => r.id !== ripple.id));
          }}
        />
      ))}
    </>
  );
};


const RippleEffect = ({ x, y, size, color, onComplete }) => {
  const rippleRef = useRef(null);

  useEffect(() => {
    if (!rippleRef.current) return;

    // Set initial position
    gsap.set(rippleRef.current, {
      x,
      y,
      scale: 0,
      opacity: 1,
    });

    // Animate ripple effect
    gsap.to(rippleRef.current, {
      scale: 3,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
      onComplete,
    });
  }, [x, y, onComplete]);

  return (
    <div
      ref={rippleRef}
      className="cursor-ripple"
      style={{
        width: size,
        height: size,
        border: `2px solid ${color}`,
      }}
    />
  );
};

export default CursorRipple;