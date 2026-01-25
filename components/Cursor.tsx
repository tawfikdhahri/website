"use client";
import { useEffect, useRef } from "react";

const DOTS_COUNT = 8; // number of trailing dots
const MAIN_SIZE = 20; // main circle size
const DOT_SIZE = 12; // trailing dots size

export default function CursorTrail() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const dots = useRef<{ x: number; y: number }[]>([]);
  const requestRef = useRef<number>();

  // Initialize dots
  useEffect(() => {
    dots.current = Array.from({ length: DOTS_COUNT }, () => ({ x: 0, y: 0 }));
  }, []);

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animate dots
  useEffect(() => {
    const animate = () => {
      dots.current.forEach((dot, i) => {
        const target = i === 0 ? mouse.current : dots.current[i - 1];
        dot.x += (target.x - dot.x) * 0.2; // smoothing factor
        dot.y += (target.y - dot.y) * 0.2;
      });

      if (containerRef.current) {
        dots.current.forEach((dot, i) => {
          const el = containerRef.current!.children[i] as HTMLDivElement;
          el.style.transform = `translate3d(${dot.x}px, ${dot.y}px, 0)`;
        });
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(requestRef.current!);
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed top-0 left-0 z-50"
    >
      {/* Main cursor circle */}
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-primaryAccent/40 border border-primaryAccent shadow-lg"
        style={{
          width: `${MAIN_SIZE}px`,
          height: `${MAIN_SIZE}px`,
        }}
      />
      {/* Trailing dots */}
      {Array.from({ length: DOTS_COUNT }).map((_, i) => (
        <div
          key={i}
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-primaryAccent"
          style={{
            width: `${DOT_SIZE}px`,
            height: `${DOT_SIZE}px`,
            opacity: 1 - (i + 1) / DOTS_COUNT, // fade out tail
            transition: "transform 0.1s ease-out",
          }}
        />
      ))}
    </div>
  );
}
