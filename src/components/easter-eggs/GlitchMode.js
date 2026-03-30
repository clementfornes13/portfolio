import { useEffect } from "react";

const GlitchMode = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.id = "glitch-easter-egg";
    style.textContent = `
      @keyframes glitch-anim {
        0% { clip-path: inset(40% 0 61% 0); transform: translate(-2px, 2px); }
        10% { clip-path: inset(92% 0 1% 0); transform: translate(1px, -1px); }
        20% { clip-path: inset(43% 0 1% 0); transform: translate(-1px, 3px); }
        30% { clip-path: inset(25% 0 58% 0); transform: translate(3px, 1px); }
        40% { clip-path: inset(54% 0 7% 0); transform: translate(-3px, -2px); }
        50% { clip-path: inset(58% 0 43% 0); transform: translate(2px, 0px); }
        60% { clip-path: inset(70% 0 7% 0); transform: translate(-1px, -3px); }
        70% { clip-path: inset(27% 0 40% 0); transform: translate(3px, 2px); }
        80% { clip-path: inset(75% 0 20% 0); transform: translate(-2px, 1px); }
        90% { clip-path: inset(8% 0 52% 0); transform: translate(1px, -2px); }
        100% { clip-path: inset(18% 0 37% 0); transform: translate(-1px, 3px); }
      }
      @keyframes glitch-skew {
        0% { transform: skew(0deg); }
        20% { transform: skew(-2deg); }
        40% { transform: skew(0.5deg); }
        60% { transform: skew(-0.3deg); }
        80% { transform: skew(1deg); }
        100% { transform: skew(0deg); }
      }
      @keyframes glitch-flash {
        0%, 90%, 100% { opacity: 0; }
        5% { opacity: 0.1; }
      }
      .glitch-active {
        animation: glitch-skew 0.5s ease-in-out infinite alternate;
      }
      .glitch-active::before,
      .glitch-active::after {
        content: '';
        position: fixed;
        top: 0; left: 0; right: 0; bottom: 0;
        pointer-events: none;
        z-index: 9998;
      }
      .glitch-active::before {
        background: rgba(124, 58, 237, 0.03);
        animation: glitch-flash 0.3s linear infinite;
      }
      .glitch-active h1, .glitch-active h2, .glitch-active h3 {
        text-shadow: 2px 0 #7c3aed, -2px 0 #ec4899;
        animation: glitch-anim 0.3s linear infinite alternate;
      }
      .glitch-active img {
        filter: saturate(1.5) hue-rotate(10deg);
        animation: glitch-anim 0.4s linear infinite alternate;
      }
    `;
    document.head.appendChild(style);
    document.body.classList.add("glitch-active");

    return () => {
      document.body.classList.remove("glitch-active");
      style.remove();
    };
  }, []);

  return null;
};

export default GlitchMode;
