import React, { useRef } from "react";
import { motion } from "framer-motion";

const MagneticButton = ({ children, className = "", strength = 0.3, ...props }) => {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0px, 0px)";
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: "transform 0.3s cubic-bezier(0.33, 1, 0.68, 1)", willChange: "transform" }}
      data-magnetic
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default MagneticButton;
