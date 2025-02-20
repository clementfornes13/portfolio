import { motion, AnimatePresence } from "framer-motion";
import background from "../images/background.jpg";
import React, { useState, useEffect } from "react";
import FancyText from "./FancyText";
import useEasterEgg from "./useEasterEgg";
const emojis = ["🎉", "🔥", "💻", "🚀"];
const nameText = "Junior Software Engineer";

const Hero = () => {
  const [emojiRain, setEmojiRain] = useState([]);
  const [emojiActivated, setEmojiActivated] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [showFunFacts, setShowFunFacts] = useState(false);
  const [rainbowMode, setRainbowMode] = useState(false);

  const handleEmojiRain = () => {
    if (!emojiActivated) {
      setEmojiActivated(true);
      const newEmojis = Array.from({ length: 30 }, () => ({
        id: Math.random(),
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        x: Math.random() * window.innerWidth,
        delay: Math.random() * 2,
      }));
      setEmojiRain(newEmojis);
    }
  };

  useEffect(() => {
    if (typingIndex < nameText.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + nameText[typingIndex]);
        setTypingIndex((prev) => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [typingIndex]);

  useEasterEgg({
    clement: () => setShowFunFacts((prev) => !prev),
    rainbow: () => setRainbowMode((prev) => !prev),
  });

  return (
    <div id="home" className="text-white p-10 bg-cover bg-center bg-no-repeat h-screen flex flex-col justify-between items-center" style={{
      backgroundImage: `url(${background})`, backgroundAttachment: 'fixed'
    }}>
      <div className="w-10/12 flex flex-row justify-between lg:mt-10 md:mt-8 mt-6">
        <div>
          <motion.h1
            className={`font-extrabold lg:text-6xl md:text-5xl text-4xl ${rainbowMode
              ? ""
              : "bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text"
              }`}
            initial={{ opacity: 0, y: -50, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 150, filter: "blur(0px)" }}
            transition={{ duration: 1 }}
            onClick={handleEmojiRain}
          >
            {rainbowMode ? (
              <FancyText
                gradient={{ from: "#F858E0", to: "#77156C", type: "linear" }}
                animateTo={{ from: "#6DEDD0", to: "#7AE23A" }}
                animateDuration={2000}
              >
                CLEMENT FORNES
              </FancyText>
            ) : (
              "CLEMENT FORNES"
            )}
          </motion.h1>

          <motion.h2
            className="font-bold lg:mt-2 md:mt-1 mt-0"
            initial={{ opacity: 0, y: -50, filter: 'blur(10px)' }}
            animate={{
              opacity: 1, y: 150, filter: 'blur(0px)',

            }}
            transition={{ duration: 1 }}
          >
            {rainbowMode ? (
              <FancyText
                gradient={{ from: "#F858E0", to: "#77156C", type: "linear" }}
                animateTo={{ from: "#6DEDD0", to: "#7AE23A" }}
                animateDuration={2000}
              >
                <span className="lg:text-2xl md:text-xl text-lg">
                  {typedText.split(" ")[0]}
                </span>
                <span className="mr-1">
                </span>
                <span className="lg:text-2xl md:text-xl text-lg">
                  {typedText.split(" ").slice(1).join(" ")}
                </span>
              </FancyText>
            ) : (
              <React.Fragment>
                <span className="lg:text-2xl md:text-xl text-lg text-gray-400">
                  {typedText.split(" ")[0]}
                </span>
                <span className="mr-1">
                </span>
                <span className="lg:text-2xl md:text-xl text-lg text-white">
                  {typedText.split(" ").slice(1).join(" ")}
                </span>
              </React.Fragment>
            )}
          </motion.h2>
        </div>
      </div>
      {
        emojiRain.map((item) => (
          <motion.div
            key={item.id}
            className="fixed lg:text-2xl md:text-xl text-lg"
            style={{ left: item.x }}
            initial={{ y: -50, opacity: 1 }}
            animate={{ y: "100vh", opacity: 0 }}
            transition={{ duration: 2 + item.delay, ease: "linear", repeat: 5 }}
          >
            {item.emoji}
          </motion.div>
        ))
      }

      <motion.div
        className="w-12/12 flex flex-wrap justify-center items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <AnimatePresence mode="wait">
          {showFunFacts ? (
            <>
              <motion.div
                key="debugging"
                className="flex flex-col px-4 lg:w-1/4 md:w-1/2 w-full"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                exit={{ opacity: 0, y: 30 }}
                whileHover={{ scale: 1.05 }}
              >
                {rainbowMode ? (
                  <FancyText
                    gradient={{ from: "#F858E0", to: "#77156C", type: "linear" }}
                    animateTo={{ from: "#6DEDD0", to: "#7AE23A" }}
                    animateDuration={2000}
                  >
                    <h3 className="font-bold lg:text-2xl md:text-xl text-lg">Debugging</h3>
                    <h4 className="lg:text-base md:text-sm text-xs">
                      90% of coding is debugging. The other 10% is writing bugs you’ll debug later.
                    </h4>
                  </FancyText>
                ) : (
                  <React.Fragment>
                    <h3 className="font-bold text-white lg:text-2xl md:text-xl text-lg">Debugging</h3>
                    <h4 className="text-gray-300 lg:text-base md:text-sm text-xs">
                      90% of coding is debugging. The other 10% is writing bugs you’ll debug later.
                    </h4>
                  </React.Fragment>
                )}

              </motion.div>
              <motion.div
                key="stack-overflow"
                className="flex flex-col  px-4 lg:w-1/4 md:w-1/2 w-full"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                exit={{ opacity: 0, y: 30 }}
                whileHover={{ scale: 1.05 }}>
                {rainbowMode ? (
                  <FancyText
                    gradient={{ from: "#F858E0", to: "#77156C", type: "linear" }}
                    animateTo={{ from: "#6DEDD0", to: "#7AE23A" }}
                    animateDuration={2000}
                  >
                    <h3 className="font-bold lg:text-2xl md:text-xl text-lg">Stack Overflow</h3>
                    <h4 className="lg:text-base md:text-sm text-xs">
                      Every junior dev’s secret weapon: Asking the same question 10 different ways until you find the right answer.
                    </h4>
                  </FancyText>
                ) : (
                  <React.Fragment>
                    <h3 className="font-bold text-white lg:text-2xl md:text-xl text-lg">Stack Overflow</h3>
                    <h4 className="text-gray-300 lg:text-base md:text-sm text-xs">
                      Every junior dev’s secret weapon: Asking the same question 10 different ways until you find the right answer.
                    </h4>
                  </React.Fragment>
                )}
              </motion.div>
              <motion.div
                key="version-control"
                className="flex flex-col px-4 lg:w-1/4 md:w-1/2 w-full"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                exit={{ opacity: 0, y: 30 }}
                whileHover={{ scale: 1.05 }}>
                {rainbowMode ? (
                  <FancyText
                    gradient={{ from: "#F858E0", to: "#77156C", type: "linear" }}
                    animateTo={{ from: "#6DEDD0", to: "#7AE23A" }}
                    animateDuration={2000}
                  >
                    <h3 className="font-bold lg:text-2xl md:text-xl text-lg">Version Control</h3>
                    <h4 className="lg:text-base md:text-sm text-xs">
                      Git commit messages go from "fix bug" to "final fix" to "really final fix" to "I hope this works."
                    </h4>
                  </FancyText>
                ) : (
                  <React.Fragment>
                    <h3 className="font-bold text-white lg:text-2xl md:text-xl text-lg">Version Control</h3>
                    <h4 className="text-gray-300 lg:text-base md:text-sm text-xs">
                      Git commit messages go from "fix bug" to "final fix" to "really final fix" to "I hope this works."
                    </h4>
                  </React.Fragment>
                )}
              </motion.div>
            </>
          ) : (
            <>
              <motion.div
                key="problem-solving"
                className="flex flex-col px-4 lg:w-1/4 md:w-1/2 w-full"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                exit={{ opacity: 0, y: 30 }}
                whileHover={{ scale: 1.05 }}>
                {rainbowMode ? (
                  <FancyText
                    gradient={{ from: "#F858E0", to: "#77156C", type: "linear" }}
                    animateTo={{ from: "#6DEDD0", to: "#7AE23A" }}
                    animateDuration={2000}
                  >
                    <h3 className="font-bold lg:text-2xl md:text-xl text-lg">Problem Solving</h3>
                    <h4 className="lg:text-base md:text-sm text-xs">
                      Software engineering is less about knowing all the answers and more about knowing how to find them efficiently.
                    </h4>
                  </FancyText>
                ) : (
                  <React.Fragment>
                    <h3 className="font-bold text-white lg:text-2xl md:text-xl text-lg">Problem Solving</h3>
                    <h4 className="text-gray-300 lg:text-base md:text-sm text-xs">
                      Software engineering is less about knowing all the answers and more about knowing how to find them efficiently.
                    </h4>
                  </React.Fragment>
                )}
              </motion.div>
              <motion.div
                key="continuous-learning"
                className="flex flex-col px-4 lg:w-1/4 md:w-1/2 w-full"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                exit={{ opacity: 0, y: 30 }}
                whileHover={{ scale: 1.05 }}>
                {rainbowMode ? (
                  <FancyText
                    gradient={{ from: "#F858E0", to: "#77156C", type: "linear" }}
                    animateTo={{ from: "#6DEDD0", to: "#7AE23A" }}
                    animateDuration={2000}
                  >
                    <h3 className="font-bold lg:text-2xl md:text-xl text-lg">Continuous Learning</h3>
                    <h4 className="lg:text-base md:text-sm text-xs">
                      Technology evolves rapidly—staying adaptable and always learning is key to growth in the industry.
                    </h4>
                  </FancyText>
                ) : (
                  <React.Fragment>
                    <h3 className="font-bold text-white lg:text-2xl md:text-xl text-lg">Continuous Learning</h3>
                    <h4 className="text-gray-300 lg:text-base md:text-sm text-xs">
                      Technology evolves rapidly—staying adaptable and always learning is key to growth in the industry.
                    </h4>
                  </React.Fragment>
                )}
              </motion.div>
              <motion.div
                key="code-quality"
                className="flex flex-col px-4 lg:w-1/4 md:w-1/2 w-full"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                exit={{ opacity: 0, y: 30 }}
                whileHover={{ scale: 1.05 }}>
                {rainbowMode ? (
                  <FancyText
                    gradient={{ from: "#F858E0", to: "#77156C", type: "linear" }}
                    animateTo={{ from: "#6DEDD0", to: "#7AE23A" }}
                    animateDuration={2000}
                  >
                    <h3 className="font-bold lg:text-2xl md:text-xl text-lg">Code Quality</h3>
                    <h4 className="lg:text-base md:text-sm text-xs">
                      Writing maintainable, well-documented code is just as important as writing code that works.
                    </h4>
                  </FancyText>
                ) : (
                  <React.Fragment>
                    <h3 className="font-bold text-white lg:text-2xl md:text-xl text-lg">Code Quality</h3>
                    <h4 className="text-gray-300 lg:text-base md:text-sm text-xs">
                      Writing maintainable, well-documented code is just as important as writing code that works.
                    </h4>
                  </React.Fragment>
                )}
              </motion.div>
            </>
          )}
        </AnimatePresence>
        <motion.div
          className="flex justify-center items-center cursor-pointer animate-bounce mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          onClick={() => {
            const aboutMeSection = document.getElementById("about-me");
            if (aboutMeSection) {
              const yOffset = aboutMeSection.getBoundingClientRect().top + window.scrollY;
              window.scrollTo({ top: yOffset, behavior: "smooth" });
            } else {
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
            }
          }}
        >
          {rainbowMode ? (
            <FancyText
              gradient={{ from: "#F858E0", to: "#77156C", type: "linear" }}
              animateTo={{ from: "#6DEDD0", to: "#7AE23A" }}
              animateDuration={2000}
            >
              <motion.span
                className="font-semibold lg:text-lg md:text-base text-sm"
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                Scroll For More
                <motion.span
                  className="animate-bounce ml-2"
                  animate={{
                    color: ["#ff0000", "#ff7f00", "#ffff00", "#00ff00", "#0000ff", "#4b0082", "#8b00ff"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  👇
                </motion.span>
              </motion.span>
            </FancyText>
          ) : (
            <motion.span
              className="font-semibold lg:text-lg md:text-base text-sm"
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              Scroll For More
              <motion.span
                className="animate-bounce ml-2"
                animate={{
                  color: ["#ff0000", "#ff7f00", "#ffff00", "#00ff00", "#0000ff", "#4b0082", "#8b00ff"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                👇
              </motion.span>
            </motion.span>
          )}

        </motion.div>
      </motion.div>


    </div >

  );
}



export default Hero;
