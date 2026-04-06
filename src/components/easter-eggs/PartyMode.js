import React from "react";

const PartyMode = () => (
  <>
    <div className="fixed inset-0 z-[997] pointer-events-none animate-party-bg opacity-20" />
    <div className="fixed top-4 right-16 z-[998] text-5xl animate-spin-slow pointer-events-none">
      🪩
    </div>
    <style>{`
      @keyframes party-bg {
        0% { background-color: #ff0000; }
        16% { background-color: #ff8800; }
        33% { background-color: #ffff00; }
        50% { background-color: #00ff00; }
        66% { background-color: #0088ff; }
        83% { background-color: #8800ff; }
        100% { background-color: #ff0000; }
      }
      .animate-party-bg { animation: party-bg 1s linear infinite; }
      .animate-spin-slow { animation: spin 2s linear infinite; }
      @keyframes spin { to { transform: rotate(360deg); } }
    `}</style>
  </>
);

export default PartyMode;
