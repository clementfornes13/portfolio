import React, { useEffect } from "react";

const RetroOverlay = () => {
  useEffect(() => {
    document.body.style.fontFamily = "'Courier New', monospace";
    document.body.style.imageRendering = "pixelated";
    return () => {
      document.body.style.fontFamily = "";
      document.body.style.imageRendering = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[997] pointer-events-none overflow-hidden">
      {/* CRT scanlines */}
      <div
        className="absolute inset-0"
        style={{
          background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)",
        }}
      />
      {/* CRT curvature vignette */}
      <div
        className="absolute inset-0"
        style={{
          boxShadow: "inset 0 0 120px 40px rgba(0,0,0,0.5)",
        }}
      />
      {/* Chromatic aberration feel */}
      <div
        className="absolute inset-0 mix-blend-screen opacity-10"
        style={{
          background: "linear-gradient(90deg, rgba(255,0,0,0.3), transparent 33%, rgba(0,255,0,0.3) 33%, transparent 66%, rgba(0,0,255,0.3) 66%)",
        }}
      />
    </div>
  );
};

export default RetroOverlay;
