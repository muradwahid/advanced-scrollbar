import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import "./style.scss";
import { useCursor } from '../../../hooks/useCursor';

const CursorText = ({
  size = 80,
  backgroundColor = '#3b82f6',
  textColor = '#FFFFFF',
  cursorText = "Cursor Text",
  duration = 0.2,
  domEl = null
}) => {
  const { cursorPosition, isClicking } = useCursor(domEl);
  const textCursorRef = useRef(null);

  useEffect(() => {
    if (!textCursorRef.current) return;

    gsap.to(textCursorRef.current, {
      x: cursorPosition.x,
      y: cursorPosition.y,
      duration,
      ease: 'power2.out',
    });
  }, [cursorPosition]);

  useEffect(() => {
    if (!textCursorRef.current) return;

    if (isClicking) {
      gsap.to(textCursorRef.current, {
        scale: 0.9,
        duration: 0.2,
        ease: 'power2.out',
      });
    } else {
      gsap.to(textCursorRef.current, {
        scale: 1,
        duration: 0.3,
        ease: 'elastic.out(1, 0.3)',
      });
    }
  }, [isClicking]);

  return (
    <div
      ref={textCursorRef}
      className="cursor-text"
      style={{
        width: size+'px',
        height: size+'px',
        background:backgroundColor,
        color: textColor,
        opacity: cursorText ? 1 : 0,
      }}
    >
      {cursorText}
    </div>
  );
};

export default CursorText;