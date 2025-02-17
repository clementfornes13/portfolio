import { motion } from "framer-motion";
import background from "../images/background.jpg";
import React, { useState, useEffect } from "react";

const emojis = ["🎉", "🔥", "💻", "🚀"];
const nameText = "Junior Software Engineer";

const Hero = () => {
  const [emojiRain, setEmojiRain] = useState([]);
  const [emojiActivated, setEmojiActivated] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);

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


  return (
    <div className="text-white p-10 bg-cover bg-center bg-no-repeat h-screen flex flex-col justify-between items-center" style={{
      backgroundImage: `url(${background})`, backgroundAttachment: 'fixed'
    }}>
      <div className="w-10/12 flex flex-row justify-between mt-10">
        <div>
          <motion.h1
            className="font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text lg:text-6xl md:text-5xl text-4xl"
            initial={{ opacity: 0, y: -50, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 150, filter: 'blur(0px)' }}
            transition={{ duration: 1 }}
            onClick={handleEmojiRain}
          >
            CLEMENT FORNES
          </motion.h1>

          <motion.h2
            className="text-2xl font-bold mt-2"
            initial={{ opacity: 0, y: -50, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 150, filter: 'blur(0px)' }}
            transition={{ duration: 1 }}
          >
            <span className="text-gray-400 ml-8">{typedText.split(" ")[0]}</span> <span className="text-white">{typedText.split(" ").slice(1).join(" ")}</span>
          </motion.h2>
        </div>
      </div>
      {emojiRain.map((item) => (
        <motion.div
          key={item.id}
          className="fixed text-3xl"
          style={{ left: item.x }}
          initial={{ y: -50, opacity: 1 }}
          animate={{ y: "100vh", opacity: 0 }}
          transition={{ duration: 2 + item.delay, ease: "linear", repeat: 5 }}
        >
          {item.emoji}
        </motion.div>
      ))}

      <motion.div
        className="w-12/12 flex flex-wrap justify-center items-center text-gray-300"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div className="flex flex-col basis-1/3 md:basis-1/4 px-4" whileHover={{ scale: 1.05 }}>
          <h3 className="font-bold text-white text-lg">Graphic Design</h3>
          <p>Graphic design is an applied art and profession that uses text and graphics to communicate visually.</p>
        </motion.div>
        <motion.div className="flex flex-col basis-1/3 md:basis-1/4 px-4" whileHover={{ scale: 1.05 }}>
          <h3 className="font-bold text-white text-lg">Web Development</h3>
          <p>Web development is the work involved in developing a website for the Internet or an intranet.</p>
        </motion.div>
        <motion.div className="flex flex-col basis-1/3 md:basis-1/4 px-4" whileHover={{ scale: 1.05 }}>
          <h3 className="font-bold text-white text-lg">Photography</h3>
          <p>Photography is the art, application, and practice of creating durable images by recording light.</p>
        </motion.div>

        <motion.div
          className="flex justify-center items-center text-white cursor-pointer animate-bounce mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <span className="text-lg font-semibold">Scroll For More</span>

          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>

    </div >
  );
}



export default Hero;
