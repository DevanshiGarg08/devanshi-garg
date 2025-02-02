"use client";

import { motion } from "framer-motion";

export default function AnimatedButton({ text }: { text: string }) {
  return (
    <motion.button
      className="relative flex items-center px-6 py-2 text-lg font-semibold text-black transition-all ease-in-out overflow-hidden"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {/* Expanding Background */}
      <motion.div
        className="absolute inset-0 bg-white/60 rounded-full"
        variants={{
          rest: { width: "40px", borderRadius: "50%" },
          hover: { width: "100%", borderRadius: "30px" },
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />

      {/* Text */}
      <span className="relative z-10">{text}</span>

      {/* Arrow */}
      <motion.span
        className="relative z-10 ml-3"
        variants={{
          rest: { x: 0 },
          hover: { x: 8 },
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        →
      </motion.span>
    </motion.button>
  );
}
