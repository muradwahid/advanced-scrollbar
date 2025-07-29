import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { useCursor } from '../../../hooks/useCursor';
import "./style.scss";

const CursorSketch = ({
  trailWidth = 3,
  color = '#111827',
  trailLength = 50,
  domEl = null
}) => {
  const { cursorPosition, isClicking } = useCursor(domEl);
  const dotRef = useRef(null);
  const canvasRef = useRef(null);
  // const [isDrawing, setIsDrawing] = useState(true);
  const pointsRef = useRef([]);

  // Initialize canvas and drawing
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set canvas to full window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Handle window resize
    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        drawPoints();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Handle cursor position changes
  useEffect(() => {
    if (!dotRef.current) return;

    gsap.to(dotRef.current, {
      x: cursorPosition.x,
      y: cursorPosition.y,
      // duration: 0.1,
      duration: 0,
      ease: 'power2.out',
    });

    // Handle drawing when clicking
    // if (isClicking && !isDrawing) {
    //   setIsDrawing(true);
    //   pointsRef.current = [];
    // } else if (!isClicking && isDrawing) {
    //   setIsDrawing(false);
    // }

    // if (isDrawing) {
    // Add point to drawing
    pointsRef.current.push({ x: cursorPosition.x, y: cursorPosition.y });

    // Limit number of points
    if (pointsRef.current.length > trailLength) {
      pointsRef.current.shift();
    }

    drawPoints();
    // }
  }, [cursorPosition, isClicking, trailLength]);

  // Draw points on canvas
  const drawPoints = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (pointsRef.current.length < 2) return;

    ctx.strokeStyle = color;
    ctx.lineWidth = trailWidth;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    ctx.beginPath();
    ctx.moveTo(pointsRef.current[0].x, pointsRef.current[0].y);

    for (let i = 1; i < pointsRef.current.length; i++) {
      // Use bezier curves for smoother lines
      if (i < pointsRef.current.length - 1) {
        const xc = (pointsRef.current[i].x + pointsRef.current[i + 1].x) / 2;
        const yc = (pointsRef.current[i].y + pointsRef.current[i + 1].y) / 2;
        ctx.quadraticCurveTo(
          pointsRef.current[i].x,
          pointsRef.current[i].y,
          xc,
          yc
        );
      } else {
        ctx.lineTo(pointsRef.current[i].x, pointsRef.current[i].y);
      }
    }

    ctx.stroke();
  };

  return (
    <>
      <canvas
        ref={canvasRef}
        className="cursor-sketch"
      />
      <div
        ref={dotRef}
        className="cursor-sketch-dot"
        style={{
          width: trailWidth * 3,
          height: trailWidth * 3,
          borderRadius: '50%',
          backgroundColor: color,
          border: 'none',
          // backgroundColor: isDrawing ? color : 'transparent',
          // border: isDrawing ? 'none' : `2px solid ${color}`,
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );
};

export default CursorSketch;