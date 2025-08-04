import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { useCursor } from '../../../hooks/useCursor';
import { isSet } from '../../../utils/common';
import "./style.scss";
const CursorDot = ({
  size = 12,
  color = '#3B82F6',
  duration = 0.1,
  domEl = null, eventEl = window
}) => {
  const { cursorPosition, isClicking } = useCursor(domEl, eventEl);
  const dotRef = useRef(null);

  useEffect(() => {
    if (!dotRef.current) return;

    gsap.to(dotRef.current, {
      x: cursorPosition.x,
      y: cursorPosition.y,
      duration,
      ease: 'power3.out',
    });
  }, [cursorPosition]);

  useEffect(() => {
    if (!dotRef.current) return;

    if (isClicking) {
      gsap.to(dotRef.current, {
        scale: 0.7,
        duration: 0.2,
        ease: 'power2.out',
      });
    } else {
      gsap.to(dotRef.current, {
        scale: 1,
        duration: 0.2,
        ease: 'elastic.out(1, 0.3)',
      });
    }
  }, [isClicking]);

  // useEffect(() => {
  //   if (!dotRef.current) return;
  //   console.log(`CursorDot visibility changed: ${isVisible}`);
  //   gsap.to(dotRef.current, {
  //     opacity: isVisible ? 1 : 0,
  //     duration: 0.3,
  //     ease: 'power2.out',
  //   });
  // }, [dotRef.current,isVisible]);
  const followCursorStyle = {
    ...(isSet(size) && { "--advScrollbar-cursor-dot-cursor-size": size + 'px' }),
    ...(isSet(color) && { "--advScrollbar-cursor-dot-cursor-bg": color })
  };
  return (
    <div
      ref={dotRef}
      className={`advScrollbar-cursor-dotCursor`}
      style={followCursorStyle}
    />
  );
};

export default CursorDot;