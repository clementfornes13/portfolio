import { useState, useEffect } from "react";

const useEasterEgg = (triggerWords) => {
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Skip modifier/special keys for word matching
      if (event.key.length > 1 && !event.key.match(/^[0-9]$/)) return;

      const newInput = (userInput + event.key).slice(-30);
      setUserInput(newInput);

      for (const word in triggerWords) {
        if (newInput.toLowerCase().includes(word.toLowerCase())) {
          triggerWords[word]();
          setUserInput("");
          break;
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [userInput, triggerWords]);

  return { userInput };
};

export default useEasterEgg;
