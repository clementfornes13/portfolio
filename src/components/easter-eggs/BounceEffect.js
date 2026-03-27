import { useEffect } from "react";

const BounceEffect = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.id = "bounce-easter-egg";
    style.textContent = `
      @keyframes ee-bounce {
        0%, 100% { transform: translateY(0); }
        25% { transform: translateY(-8px); }
        50% { transform: translateY(0); }
        75% { transform: translateY(-4px); }
      }
      .bounce-active section > div > * {
        animation: ee-bounce 0.6s ease-in-out infinite;
      }
      .bounce-active section > div > *:nth-child(2n) {
        animation-delay: 0.1s;
      }
      .bounce-active section > div > *:nth-child(3n) {
        animation-delay: 0.2s;
      }
      .bounce-active section > div > *:nth-child(4n) {
        animation-delay: 0.3s;
      }
    `;
    document.head.appendChild(style);
    document.body.classList.add("bounce-active");

    return () => {
      document.body.classList.remove("bounce-active");
      style.remove();
    };
  }, []);

  return null;
};

export default BounceEffect;
