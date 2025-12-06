import { useEffect, useRef, useState } from "react";

const getInitialPosition = () => {
  if (typeof window === "undefined") {
    return { x: 0, y: 0 };
  }
  return { x: window.innerWidth / 2, y: window.innerHeight / 2 };
};

/**
 * Ambient glow that trails the mouse pointer using a smoothed animation.
 */
const CursorGlow = () => {
  const glowRef = useRef(null);
  const rafRef = useRef(null);
  const positionRef = useRef(getInitialPosition());
  const targetRef = useRef(positionRef.current);
  const [enabled, setEnabled] = useState(() => {
    if (typeof window === "undefined") return false;
    return !window.matchMedia("(pointer: coarse)").matches;
  });

  useEffect(() => {
    const media = window.matchMedia("(pointer: coarse)");
    const handleChange = () => setEnabled(!media.matches);
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (!enabled) {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      return;
    }

    const animate = () => {
      const glow = glowRef.current;
      if (!glow) return;
      const { x, y } = positionRef.current;
      const target = targetRef.current;
      const nextX = x + (target.x - x) * 0.15;
      const nextY = y + (target.y - y) * 0.15;
      positionRef.current = { x: nextX, y: nextY };
      glow.style.transform = `translate3d(${nextX - 250}px, ${
        nextY - 250
      }px, 0)`;
      rafRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (event) => {
      targetRef.current = { x: event.clientX, y: event.clientY };
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    rafRef.current = requestAnimationFrame(() => animate());

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  return <div className="cursor-glow" ref={glowRef} aria-hidden />;
};

export default CursorGlow;
