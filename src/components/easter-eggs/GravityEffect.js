import React, { useEffect } from "react";

const GravityEffect = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const originals = [];

    sections.forEach((section, i) => {
      originals.push(section.style.transform);
      section.style.transition = "transform 1s cubic-bezier(0.55, 0, 1, 0.45)";
      setTimeout(() => {
        const rotation = (Math.random() - 0.5) * 20;
        section.style.transform = `translateY(${window.innerHeight}px) rotate(${rotation}deg)`;
      }, i * 100);
    });

    const timer = setTimeout(() => {
      sections.forEach((section, i) => {
        section.style.transition = "transform 0.8s cubic-bezier(0, 0, 0.2, 1)";
        section.style.transform = originals[i] || "";
        setTimeout(() => { section.style.transition = ""; }, 800);
      });
    }, 2500);

    return () => {
      clearTimeout(timer);
      sections.forEach((section, i) => {
        section.style.transition = "";
        section.style.transform = originals[i] || "";
      });
    };
  }, []);

  return null;
};

export default GravityEffect;
