import { useState, useEffect } from "react";


const emojis = ["🎉", "🔥", "💻", "🚀"];

const useEasterEgg = (triggerWords, onActivate) => {
    const [userInput, setUserInput] = useState("");

    useEffect(() => {
        const handleKeyDown = (event) => {
            setUserInput((prev) => prev + event.key);

            for (const word in triggerWords) {
                if ((userInput + event.key).toLowerCase().includes(word)) {
                    triggerWords[word]();  // Call the corresponding function
                    setUserInput("");  // Reset input after activation
                }
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [userInput]);

    return { userInput };
};

export default useEasterEgg;
