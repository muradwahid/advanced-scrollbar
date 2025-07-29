import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import "./style.scss";
import { useCursor } from '../../../hooks/useCursor';

const CursorImage = ({
  url = '',
  size = 80,
  rounded = "8px",
  domEl = null, eventEl = window
}) => {
  const { cursorPosition, isClicking } = useCursor(domEl, eventEl);
  const imageRef = useRef(null);

  useEffect(() => {
    if (!imageRef.current) return;

    gsap.to(imageRef.current, {
      x: cursorPosition.x,
      y: cursorPosition.y,
      duration: 0.2,
      ease: 'power2.out',
    });
  }, [cursorPosition]);

  useEffect(() => {
    if (!imageRef.current) return;

    if (isClicking) {
      gsap.to(imageRef.current, {
        scale: 1.2,
        rotation: 5,
        duration: 0.3,
        ease: 'power2.out',
      });
    } else {
      gsap.to(imageRef.current, {
        scale: 1,
        rotation: 0,
        duration: 0.4,
        ease: 'elastic.out(1, 0.3)',
      });
    }
  }, [isClicking]);

  return (
    <div
      ref={imageRef}
      className="cursor-image"
      style={{
        width: size,
        height: size,
        backgroundImage: `url(${url})`,
        borderRadius:rounded
      }}
    />
  );
};

export default CursorImage;