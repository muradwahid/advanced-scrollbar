import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import "./style.scss";
import { useCursor } from '../../../hooks/useCursor';

const CursorMagnetic = ({
  size = 40,
  borderWidth = 2,
  borderColor = '#F59E0B',
  backgroundColor = '#f59e0b1a',
  targetedEl = 'button, a, textarea, select, [role="button"], [type="submit"]',
  domEl = null, eventEl = window
}) => {
  const { cursorPosition, isClicking } = useCursor(domEl, eventEl);
  const cursorRef = useRef(null);
  const [hoveredElement, setHoveredElement] = useState(null);

  useEffect(() => {
    const handleMouseOver = (e) => {
      // if (e.target && e.target.closest(targetedEl)) {
      //   setHoveredElement(e.target);
      //   console.log(e.target.closest(targetedEl))
      // } else {
      //   setHoveredElement(null);
      // }
      const target = e.target.closest(targetedEl);
      setHoveredElement(target || null);
    };

    domEl.addEventListener('mouseover', handleMouseOver);
    return () => {
      domEl.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  useEffect(() => {
    if (!cursorRef.current) return;

    if (hoveredElement) {
      const rect = hoveredElement.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      gsap.to(cursorRef.current, {
        x: centerX,
        y: centerY,
        width: rect.width + 20,
        height: rect.height + 20,
        borderRadius: '8px',
        duration: 0.4,
        ease: 'elastic.out(1, 0.6)',
      });
    } else {
      gsap.to(cursorRef.current, {
        x: cursorPosition.x,
        y: cursorPosition.y,
        width: size,
        height: size,
        borderRadius: '50%',
        duration: 0.2,
        ease: 'power2.out',
      });
    }
  }, [cursorPosition, hoveredElement, size]);

  useEffect(() => {
    if (!cursorRef.current) return;

    if (isClicking) {
      gsap.to(cursorRef.current, {
        scale: 0.9,
        duration: 0.2,
        ease: 'power2.out',
      });
    } else {
      gsap.to(cursorRef.current, {
        scale: 1,
        duration: 0.3,
        ease: 'elastic.out(1, 0.3)',
      });
    }
  }, [isClicking]);

  return (
    <div
      ref={cursorRef}
      className="magnetic-cursor"
      style={{
        width: size,
        height: size,
        border: `${borderWidth}px solid ${borderColor}`,
        backgroundColor,
      }}
    />
  );
};

export default CursorMagnetic;