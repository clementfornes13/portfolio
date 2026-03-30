import React, { createContext, useState, useEffect, useCallback, useContext } from "react";
import useEasterEgg from "./components/useEasterEgg";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });
  const [rainbowMode, setRainbowMode] = useState(false);
  const [showFunFacts, setShowFunFacts] = useState(false);
  const [activeEasterEggs, setActiveEasterEggs] = useState(new Set());
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  const triggerEasterEgg = useCallback((id, duration) => {
    setActiveEasterEggs((prev) => new Set([...prev, id]));
    if (duration) {
      setTimeout(() => {
        setActiveEasterEggs((prev) => {
          const next = new Set(prev);
          next.delete(id);
          return next;
        });
      }, duration);
    }
  }, []);

  const showToast = useCallback((message, duration = 4000) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), duration);
  }, []);

  // Easter eggs — type these words anywhere on the page
  useEasterEgg({
    // "rainbow" → psychedelic fluid cursor mode
    rainbow: () => {
      setRainbowMode((prev) => !prev);
      showToast(rainbowMode ? "Rainbow mode off" : "Rainbow mode activated!");
    },
    // "matrix" → Matrix digital rain
    matrix: () => {
      showToast("Wake up, Neo...");
      triggerEasterEgg("matrix", 8000);
    },
    // "stars" → night sky with shooting stars
    stars: () => {
      showToast("Look up...");
      triggerEasterEgg("nightsky", 10000);
    },
    // "hire" → confetti
    hire: () => {
      showToast("Let's talk!");
      triggerEasterEgg("confetti", 5000);
    },
    // "glitch" → glitch distortion
    glitch: () => {
      showToast("R3AL1TY.exe has stopped working");
      triggerEasterEgg("glitch", 5000);
    },
    // "gravity" → everything falls
    gravity: () => {
      showToast("Oops...");
      triggerEasterEgg("gravity", 4000);
    },
    // "42" → hitchhiker's guide
    "42": () => showToast("The answer to life, the universe, and everything."),
  });

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        rainbowMode,
        showFunFacts,
        activeEasterEggs,
        triggerEasterEgg,
        toastMessage,
        showToast,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext };
export default ThemeProvider;
