import React from "react";
import { motion } from "framer-motion";

const Toast = ({ message }) => (
  <motion.div
    className="fixed bottom-6 left-1/2 z-[999] -translate-x-1/2 bg-surface-dark dark:bg-white text-white dark:text-surface-dark text-sm px-5 py-3 rounded-full shadow-lg shadow-accent/20 border border-accent/20"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
  >
    {message}
  </motion.div>
);

export default Toast;
