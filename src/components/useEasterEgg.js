import { useState, useEffect, useRef } from "react";

const useEasterEgg = (triggerWords) => {
    const [userInput, setUserInput] = useState("");
    const inputRef = useRef("");

    useEffect(() => {
        const handleKeyDown = (event) => {
            inputRef.current += event.key;
            inputRef.current = inputRef.current.slice(-30); // keep only the last 30 chars

            for (const word in triggerWords) {
                if (inputRef.current.toLowerCase().includes(word.toLowerCase())) {
                    triggerWords[word]();
                    inputRef.current = ""; // reset after trigger
                    break;
                }
            }

            setUserInput(inputRef.current);
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [triggerWords]);

    return { userInput };
};

export default useEasterEgg;