import { useCallback, useEffect, useRef, useState } from "react";

export const useSmoothScroll = (options = {}) => {
  const { scrollSpeed = 60, mouseScrollStep = 40 } = options;
  const [isWheel, setIsWheel] = useState(true);
  const animationFrameId = useRef();
  const targetScroll = useRef(0);
  const currentScroll = useRef(0);
  const isScrolling = useRef(false);

  const animate = useCallback(() => {
    if (isScrolling.current) {
      const difference = targetScroll.current - currentScroll.current;
      currentScroll.current += difference / (scrollSpeed / 10);

      window.scrollTo(0, currentScroll.current);

      if (Math.abs(difference) < 0.5) {
        currentScroll.current = targetScroll.current;
        window.scrollTo(0, currentScroll.current);
        isScrolling.current = false;
      }
    }

    animationFrameId.current = requestAnimationFrame(animate);
  }, [scrollSpeed]);


  let wheelId;

  const handleWheel = useCallback((e) => {
    e.preventDefault();
    setIsWheel(false)
    // Calculate scroll amount based on mouseScrollStep
    const delta = Math.sign(e.deltaY) * mouseScrollStep;

    // Update target position
    targetScroll.current += delta;

    // Keep within document bounds
    // targetScroll.current = Math.max(
    //   0,
    //   Math.min(
    //     targetScroll.current,
    //     document.body.scrollHeight - window.innerHeight
    //   )
    // );
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    targetScroll.current = Math.max(
      0,
      Math.min(targetScroll.current, maxScroll)
    );

    if (!isScrolling.current) {
      isScrolling.current = true;
    }



    wheelId = setTimeout(() => {
      setIsWheel(true);
    }, 500);

  }, [mouseScrollStep]);

  const handleScroll = useCallback((e) => {
    if (isScrolling.current) {
      e.preventDefault();
      window.scrollTo(0, currentScroll.current);
    }
  }, []);

  useEffect(() => {
    // Initialize scroll positions
    targetScroll.current = window.pageYOffset;
    currentScroll.current = window.pageYOffset;

    // Start animation loop
    animationFrameId.current = requestAnimationFrame(animate);

    // Add event listeners
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleScroll, { passive: false });

    return () => {
      // Cleanup
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
      isScrolling.current = false;
      clearTimeout(wheelId);
    };
  }, [animate, handleWheel, handleScroll]);

  // Optional: Expose methods if needed
  return {
    isWheel,
    scrollTo: (position) => {
      targetScroll.current = position;
      isScrolling.current = true;
    },
    getCurrentScroll: () => currentScroll.current
  };
};