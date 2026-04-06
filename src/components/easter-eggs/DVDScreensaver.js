import React, { useEffect, useRef, useState } from "react";

const COLORS = ["#6366f1", "#ec4899", "#10b981", "#f59e0b", "#3b82f6", "#ef4444"];

const DVDScreensaver = () => {
  const [pos, setPos] = useState({ x: 100, y: 100 });
  const [color, setColor] = useState(COLORS[0]);
  const vel = useRef({ dx: 2, dy: 2 });
  const animRef = useRef(null);

  useEffect(() => {
    const w = window.innerWidth - 80;
    const h = window.innerHeight - 40;

    const tick = () => {
      setPos((prev) => {
        let { x, y } = prev;
        x += vel.current.dx;
        y += vel.current.dy;

        let bounced = false;
        if (x <= 0 || x >= w) { vel.current.dx *= -1; bounced = true; }
        if (y <= 0 || y >= h) { vel.current.dy *= -1; bounced = true; }
        if (bounced) setColor(COLORS[Math.floor(Math.random() * COLORS.length)]);

        return { x: Math.max(0, Math.min(w, x)), y: Math.max(0, Math.min(h, y)) };
      });
      animRef.current = requestAnimationFrame(tick);
    };

    animRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <div className="fixed inset-0 z-[998] pointer-events-none">
      <div
        className="absolute text-4xl font-bold transition-colors duration-200"
        style={{ left: pos.x, top: pos.y, color }}
      >
        CF
      </div>
    </div>
  );
};

export default DVDScreensaver;
