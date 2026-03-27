import React, { useEffect, useState } from "react";

const COLORS = ["#6366f1", "#ec4899", "#f59e0b", "#10b981", "#3b82f6", "#ef4444", "#8b5cf6"];

const randomBetween = (a, b) => a + Math.random() * (b - a);

const Confetti = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const p = Array.from({ length: 150 }, (_, i) => ({
      id: i,
      x: randomBetween(20, 80),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      delay: Math.random() * 0.5,
      rotation: randomBetween(0, 360),
      drift: randomBetween(-30, 30),
      size: randomBetween(6, 12),
    }));
    setParticles(p);
  }, []);

  return (
    <div className="fixed inset-0 z-[998] pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute"
          style={{
            left: `${p.x}%`,
            top: "-10px",
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            borderRadius: Math.random() > 0.5 ? "50%" : "2px",
            animation: `confetti-fall ${randomBetween(2, 4)}s ease-out ${p.delay}s forwards`,
            transform: `rotate(${p.rotation}deg)`,
            "--drift": `${p.drift}vw`,
          }}
        />
      ))}
      <style>{`
        @keyframes confetti-fall {
          0% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) translateX(var(--drift)) rotate(720deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default Confetti;
