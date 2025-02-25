"use client";
import React from "react";
import { motion } from "framer-motion";

// Animation variants for the loading spinner
const spinnerVariants = {
  animate: {
    rotate: 360,
    transition: { duration: 1, repeat: Infinity, ease: "linear" },
  },
};

const Loading = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-zinc-900/80 backdrop-blur-md flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="w-16 h-16 border-4 border-t-transparent border-white rounded-full"
        variants={spinnerVariants}
        animate="animate"
      />
    </motion.div>
  );
};

export default Loading;