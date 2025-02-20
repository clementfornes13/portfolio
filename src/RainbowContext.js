// RainbowContext.js
import React, { createContext, useState } from "react";
import useEasterEgg from "./components/useEasterEgg";

export const RainbowContext = createContext();

const RainbowProvider = ({ children }) => {
    const [rainbowMode, setRainbowMode] = useState(false);
    const [showFunFacts, setShowFunFacts] = useState(false);

    useEasterEgg({
        clement: () => setShowFunFacts((prev) => !prev),
        rainbow: () => setRainbowMode((prev) => !prev),
    });

    return (
        <RainbowContext.Provider value={{ rainbowMode, showFunFacts }}>
            {children}
        </RainbowContext.Provider>
    );
};

export default RainbowProvider;