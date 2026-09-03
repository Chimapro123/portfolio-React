import { useEffect, useRef } from "react";

function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;

    let dotX = 0;
    let dotY = 0;

    let ringX = 0;
    let ringY = 0;

    const moveMouse = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const animate = () => {
      // Small dot follows quickly
      dotX += (mouseX - dotX) * 0.2;
      dotY += (mouseY - dotY) * 0.2;

      // Ring follows more slowly
      ringX += (mouseX - ringX) * 0.1;
      ringY += (mouseY - ringY) * 0.1;

      if (dotRef.current) {
        dotRef.current.style.left = `${dotX}px`;
        dotRef.current.style.top = `${dotY}px`;
      }

      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`;
        ringRef.current.style.top = `${ringY}px`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", moveMouse);

    animate();

    return () => {
      window.removeEventListener("mousemove", moveMouse);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring"></div>
      <div ref={dotRef} className="cursor-dot"></div>
    </>
  );
}

export default Cursor;