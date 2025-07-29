import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import "./style.scss";
import { useCursor } from '../../../hooks/useCursor';
const CursorGlow= ({
  size = 50,
  innerSize = 10,
  color = '#F97316',
  pulseSpeed = 1.5,
  duration = 0.2,
  domEl = null, eventEl = window
}) => {
  const { cursorPosition, isClicking } = useCursor(domEl, eventEl);
  const outerRef = useRef(null);
  const innerRef = useRef(null);
  const pulseTimelineRef = useRef(null);

  // Handle cursor position updates
  useEffect(() => {
    if (!outerRef.current || !innerRef.current) return;

    gsap.to([outerRef.current, innerRef.current], {
      x: cursorPosition.x,
      y: cursorPosition.y,
      duration,
      ease: 'power2.out',
    });
  }, [cursorPosition]);

  // Create pulse animation
  useEffect(() => {
    if (!outerRef.current) return;

    // Create pulse timeline
    pulseTimelineRef.current = gsap.timeline({
      repeat: -1,
      yoyo: true,
    });

    pulseTimelineRef.current.to(outerRef.current, {
      scale: 1.2,
      opacity: 0.6,
      duration: pulseSpeed,
      ease: 'sine.inOut',
    }).to(outerRef.current, {
      scale: 1,
      opacity: 0.2,
      duration: pulseSpeed,
      ease: 'sine.inOut',
    });

    return () => {
      if (pulseTimelineRef.current) {
        pulseTimelineRef.current.kill();
      }
    };
  }, [pulseSpeed]);

  // Handle click state
  useEffect(() => {
    if (!innerRef.current || !outerRef.current || !pulseTimelineRef.current) return;

    if (isClicking) {
      // Pause the pulse animation
      pulseTimelineRef.current.pause();
      
      // Expand the glow when clicking
      gsap.to(outerRef.current, {
        scale: 1.5,
        opacity: 0.8,
        duration: 0.3,
        ease: 'power2.out',
      });
      
      gsap.to(innerRef.current, {
        scale: 1.2,
        duration: 0.2,
        ease: 'power2.out',
      });
    } else {
      // Resume the pulse animation
      pulseTimelineRef.current.play();
      
      gsap.to(outerRef.current, {
        scale: 1,
        opacity: 0.2,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)',
      });
      
      gsap.to(innerRef.current, {
        scale: 1,
        duration: 0.4,
        ease: 'elastic.out(1, 0.3)',
      });
    }
  }, [isClicking]);

  return (
    <>
      <div
        ref={outerRef}
        className="cursor-glow-outer"
        style={{
          width: size,
          height: size,
          borderRadius: '50%',
          backgroundColor: color,
          opacity: 0.2,
        }}
      />
      <div
        ref={innerRef}
        className="cursor-glow-inner"
        style={{
          width: innerSize,
          height: innerSize,
          backgroundColor: color,
          boxShadow: `0 0 10px ${color}`,
        }}
      />
    </>
  );
};

export default CursorGlow;