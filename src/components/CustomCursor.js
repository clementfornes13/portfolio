import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect touch device
    const checkTouch = () => {
      if (window.matchMedia("(pointer: coarse)").matches) {
        setIsTouch(true);
        return true;
      }
      return false;
    };
    if (checkTouch()) return;

    document.body.classList.add("custom-cursor-active");

    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-magnetic]")
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-magnetic]")
      ) {
        setIsHovering(false);
      }
    };

    let rafId;
    const animateRing = () => {
      const lerp = 0.15;
      ringPos.current.x += (mouse.current.x - ringPos.current.x) * lerp;
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * lerp;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x - 20}px, ${ringPos.current.y - 20}px)`;
      }
      rafId = requestAnimationFrame(animateRing);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    rafId = requestAnimationFrame(animateRing);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{ willChange: "transform" }}
      >
        <div className="w-2 h-2 rounded-full bg-accent" />
      </div>
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{ willChange: "transform" }}
      >
        <div
          className={`w-10 h-10 rounded-full border transition-all duration-300 ${
            isHovering
              ? "border-accent scale-150 bg-accent/10"
              : "border-accent/50 scale-100"
          }`}
        />
      </div>
    </>
  );
};

export default CustomCursor;
