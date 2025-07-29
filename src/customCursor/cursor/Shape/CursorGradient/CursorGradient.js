import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import "./style.scss";
import { useCursor } from '../../../hooks/useCursor';

const CursorGradient = ({
  size = 50,
  colors = ['#3B82F6', '#10B981', '#F59E0B'],
  rotationSpeed = 60, // degrees per second
  duration = 0.2,
  domEl = null, eventEl = window
}) => {
  const { cursorPosition, isClicking } = useCursor(domEl, eventEl);
  const gradientRef = useRef(null);
  const rotationRef = useRef(0);
  const lastTimeRef = useRef(performance.now());
  const speed = rotationSpeed * 180;
  const rotationSpeedRef = useRef(speed);

  // Keep rotationSpeedRef updated
  useEffect(() => {
    rotationSpeedRef.current = speed;
  }, [speed]);

  useEffect(() => {
    if (!gradientRef.current) return;

    gsap.to(gradientRef.current, {
      x: cursorPosition.x,
      y: cursorPosition.y,
      duration,
      ease: 'power2.out',
    });
  }, [cursorPosition, duration]);

  useEffect(() => {
    if (!gradientRef.current) return;

    const rotate = (now) => {
      const delta = (now - lastTimeRef.current) / 1000; // seconds
      lastTimeRef.current = now;
      // Use the latest rotationSpeed value
      rotationRef.current = (rotationRef.current + rotationSpeedRef.current * delta) % 360;

      if (gradientRef.current) {
        gsap.to(gradientRef.current, {
          background: `conic-gradient(from ${rotationRef.current}deg, ${colors.join(', ')})`,
          duration: 0,
        });
      }
      requestAnimationFrame(rotate);
    };

    const animationFrame = requestAnimationFrame(rotate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [colors]);

  useEffect(() => {
    if (!gradientRef.current) return;

    if (isClicking) {
      gsap.to(gradientRef.current, {
        scale: 1.2,
        duration: 0.3,
        ease: 'power2.out',
      });
    } else {
      gsap.to(gradientRef.current, {
        scale: 1,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)',
      });
    }
  }, [isClicking]);

  return (
    <div
      ref={gradientRef}
      className="cursor-gradient"
      style={{
        width: size,
        height: size,
        background: `conic-gradient(from 0deg, ${colors.join(', ')})`,
      }}
    />
  );
};

export default CursorGradient;