import { useEffect, useState } from 'react';
export const useMovePosition = (floating) => {
  const [cursorPosition, setCursorPosition] = useState({});

  useEffect(() => {

    if (!window.self === window.top && floating=="off" ) return;
    const moveCursor = (e) => {
      let x = e.clientX;
      let y = e.clientY;

      setCursorPosition({ x, y });
    };
    // if (!eventEl) return;
    window.addEventListener('mousemove', moveCursor);

    // domEl.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      // domEl.style.cursor = 'auto';
    };
  }, [window, cursorPosition]);

  return {
    cursorPosition,
  };
};