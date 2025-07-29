import gsap from "gsap";
import { useEffect, useRef } from "react";
import "./style.scss";

const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;

export default function BlobCursor({
  blobType = "circle",
  fillColor = "#00f0ff",
  blobSize = 125,
  domEl = null, eventEl = window, rect = { left: 0, top: 0 }
}) {
  const trailRefs = [useRef(null), useRef(null), useRef(null)];
  const pos = useRef({ x: 0, y: 0 });

  const trailPos = [
    useRef({ x: 0, y: 0 }),
    useRef({ x: 0, y: 0 }),
    useRef({ x: 0, y: 0 }),
  ];

  // Calculate blob sizes
  const blobSizes = [
    Math.round(blobSize * 0.4),
    blobSize,
    Math.round(blobSize * 0.6),
  ];

  // Use rect for relative positioning
  const handleMove = (e) => {
    let x = e.clientX || (e.touches && e.touches[0].clientX);
    let y = e.clientY || (e.touches && e.touches[0].clientY);
    if (rect.left && rect.top) {
      x = x - rect.left;
      y = y - rect.top;
    }
    pos.current = { x, y };
  };

  useEffect(() => {
    if (!eventEl) return;
    eventEl.addEventListener("mousemove", handleMove);
    eventEl.addEventListener("touchmove", handleMove);
    return () => {
      eventEl.removeEventListener("mousemove", handleMove);
      eventEl.removeEventListener("touchmove", handleMove);
    };
  }, [eventEl, rect]);

  useEffect(() => {
    // Animation loop
    const updateTrail = () => {
      // First element follows quickly
      gsap.to(trailPos[0].current, {
        x: pos.current.x,
        y: pos.current.y,
        duration: 0.1,
        ease: "power1.out",
      });

      // Other elements follow more slowly
      for (let i = 1; i < 3; i++) {
        gsap.to(trailPos[i].current, {
          x: trailPos[i - 1].current.x,
          y: trailPos[i - 1].current.y,
          duration: 0.5,
          ease: "power2.out",
        });
      }

      // Update DOM
      trailRefs.forEach((ref, i) => {
        if (ref.current) {
          ref.current.style.transform = trans(
            trailPos[i].current.x,
            trailPos[i].current.y
          );
        }
      });

      requestAnimationFrame(updateTrail);
    };

    const animationId = requestAnimationFrame(updateTrail);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <>
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <filter id="bBlocks-cursor-blob">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
          <feColorMatrix
            in="blur"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 35 -10"
          />
        </filter>
      </svg>
      <div
        className="bBlocks-blob-cursor-main"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: rect?.width ? rect.width : "100%",
          height: rect?.height ? rect.height : "100%",
          pointerEvents: "none",
        }}
        ref={domEl}
      >
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            ref={trailRefs[index]}
            style={{
              position: "absolute",
              willChange: "transform",
              borderRadius: blobType === "circle" ? "50%" : "0%",
              backgroundColor: fillColor,
              opacity: 0.6,
              width: `${blobSizes[index] || 60}px`,
              height: `${blobSizes[index] || 60}px`,
            }}
          />
        ))}
      </div>
    </>
  );
}