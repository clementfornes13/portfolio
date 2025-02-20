import { motion } from "framer-motion";
import React from "react";

const FancyText = ({ children, gradient, animateTo, animateDuration = 2000 }) => {
    return (
        <motion.span
            initial={{ backgroundImage: `linear-gradient(to right, ${gradient.from}, ${gradient.to})` }}
            animate={
                animateTo
                    ? {
                        backgroundImage: [
                            `linear-gradient(to right, ${gradient.from}, ${gradient.to})`,
                            `linear-gradient(to right, ${animateTo.from}, ${animateTo.to})`,
                        ],
                    }
                    : {}
            }
            transition={animateTo ? { duration: animateDuration / 1000, repeat: Infinity, repeatType: "reverse" } : {}}
            className="bg-clip-text text-transparent"
            style={{
                backgroundImage: `linear-gradient(to right, ${gradient.from}, ${gradient.to})`,
                WebkitBackgroundClip: "text",
                display: "inline-block",
            }}
        >
            {children}
        </motion.span>
    );
};

export default FancyText;
