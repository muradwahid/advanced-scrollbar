import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { useCursor } from '../../hooks/useCursor';

const CursorVideo = ({
  size = 80,
  videoUrl = 'https://assets.codepen.io/3685267/res-flower.mp4',
}) => {
  const { cursorPosition, isClicking } = useCursor();
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.to(containerRef.current, {
      x: cursorPosition.x,
      y: cursorPosition.y,
      duration: 0.2,
      ease: 'power2.out',
    });
  }, [cursorPosition]);

  useEffect(() => {
    if (!containerRef.current || !videoRef.current) return;

    const handleVideoLoad = () => {
      setVideoLoaded(true);
    };

    videoRef.current.addEventListener('loadeddata', handleVideoLoad);

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('loadeddata', handleVideoLoad);
      }
    };
  }, []);

  useEffect(() => {
    if (!videoRef.current || !videoLoaded) return;

    if (isClicking) {
      // Play video when clicking
      videoRef.current.play();
      
      gsap.to(containerRef.current, {
        scale: 1.2,
        duration: 0.3,
        ease: 'power2.out',
      });
    } else {
      // Pause video when not clicking
      videoRef.current.pause();
      
      gsap.to(containerRef.current, {
        scale: 1,
        duration: 0.4,
        ease: 'elastic.out(1, 0.3)',
      });
    }
  }, [isClicking, videoLoaded]);

  return (
    <div
      ref={containerRef}
      className="cursor-video-container"
      style={{
        width: size,
        height: size,
        opacity: videoLoaded ? 1 : 0,
      }}
    >
      <video
        ref={videoRef}
        className="cursor-video"
        src={videoUrl}
        loop
        muted
        playsInline
      />
    </div>
  );
};

export default CursorVideo;