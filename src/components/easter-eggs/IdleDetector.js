import { useEffect, useState } from "react";

const IdleDetector = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    let timer;

    const reset = () => {
      setShowMessage(false);
      clearTimeout(timer);
      timer = setTimeout(() => setShowMessage(true), 60000);
    };

    const events = ["mousemove", "keydown", "scroll", "touchstart", "click"];
    events.forEach((e) => window.addEventListener(e, reset));
    reset();

    return () => {
      clearTimeout(timer);
      events.forEach((e) => window.removeEventListener(e, reset));
    };
  }, []);

  if (!showMessage) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[999] bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm px-5 py-3 rounded-lg shadow-lg animate-pulse">
      Are you still there? 👀
    </div>
  );
};

export default IdleDetector;
