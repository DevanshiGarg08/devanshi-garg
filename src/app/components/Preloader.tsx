"use client"; // Required for Framer Motion

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

export default function Preloader({
  setLoading,
}: {
  setLoading: (value: boolean) => void;
}) {
  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, [setLoading]);

  return (
    <AnimatePresence>
      <motion.div
        key="preloader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 1 } }}
        className="fixed top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center text-beige z-50"
      >
        {/* Loading Text */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          className="text-3xl font-light"
        >
          <span className="mr-3 font-poppins">D E V A N S H I</span>{" "}
          <span className="font-poppins"> G A R G</span>
        </motion.h1>

        {/* Loader Bar */}
        <motion.div
          initial={{ width: "0%" }}
          animate={{
            width: "100%",
            transition: { duration: 2.5, ease: "easeInOut" },
          }}
          className="h-1 bg-beige mt-4 rounded-lg"
          style={{ maxWidth: "200px" }}
        />
      </motion.div>
    </AnimatePresence>
  );
}
