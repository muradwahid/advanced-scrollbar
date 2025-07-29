import gsap from 'gsap';
import  { useEffect, useRef } from 'react';
import "./style.scss";
import { useCursor } from '../../../hooks/useCursor';
import { prefix } from '../../../utils/data';
const CursorElastic = ({
  size = 40,
  color = '#EF4444',
  elasticity = 0.6,
  duration = 0.5,
  innerDuration = 0.1,
  borderWidth = "2px",
  domEl = null, eventEl = window
}) => {
  const { cursorPosition, isClicking } = useCursor(domEl, eventEl);
  const mainRef = useRef(null);
  const followerRef = useRef(null);
  const lastPositionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!mainRef.current || !followerRef.current) return;

    // Update main cursor immediately
    gsap.to(mainRef.current, {
      x: cursorPosition.x,
      y: cursorPosition.y,
      duration:innerDuration,
      ease: 'power1.out',
    });

    // Follower with delay for elastic effect
    gsap.to(followerRef.current, {
      x: cursorPosition.x,
      y: cursorPosition.y,
      duration,
      ease: `elastic.out(1, ${elasticity})`,
    });

    // Calculate velocity for size change
    const dx = cursorPosition.x - lastPositionRef.current.x;
    const dy = cursorPosition.y - lastPositionRef.current.y;
    const velocity = Math.sqrt(dx * dx + dy * dy);

    if (velocity > 5) {
      gsap.to(followerRef.current, {
        width: size * 1.5,
        height: size * 0.8,
        duration: 0.2,
      });
    } else {
      gsap.to(followerRef.current, {
        width: size,
        height: size,
        duration: 0.8,
        ease: 'elastic.out(1, 0.3)',
      });
    }

    lastPositionRef.current = { x: cursorPosition.x, y: cursorPosition.y };
  }, [cursorPosition, size, elasticity]);

  useEffect(() => {
    if (!mainRef.current || !followerRef.current) return;

    if (isClicking) {
      gsap.to(mainRef.current, {
        scale: 0.8,
        duration: 0.2,
      });
      gsap.to(followerRef.current, {
        scale: 1.2,
        duration: 0.3,
      });
    } else {
      gsap.to([mainRef.current, followerRef.current], {
        scale: 1,
        duration: 0.4,
        ease: 'elastic.out(1, 0.3)',
      });
    }
  }, [isClicking]);

  return (
    <>
      <div
        ref={mainRef}
        className={`${prefix}-elastic-cursor`}
        style={{
          width: size * 0.3,
          height: size * 0.3,
          backgroundColor: color,
        }}
      />
      <div
        ref={followerRef}
        className={`${prefix}-elastic-cursor-follower`}
        style={{
          width: size,
          height: size,
          border: `${borderWidth} solid ${color}`,
        }}
      />
    </>
  );
};

export default CursorElastic;