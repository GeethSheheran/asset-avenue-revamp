import React from "react";
import { motion } from "framer-motion";

const FullPageLoader = () => {
  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center">
      {/* Background glow effect similar to other components */}
      <div className="absolute left-1/4 z-10 top-1/2 -translate-y-1/2 w-2/3 h-[400px] bg-[#3FAC55] rounded-full blur-3xl opacity-20"></div>

      {/* Logo */}
      <motion.img
        src="logo/logo.webp"
        alt="Asset Avenue"
        className="h-20 mb-8 relative z-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      {/* Loading spinner */}
      <motion.div
        className="w-16 h-16 border-4 border-[#3FAC55] border-t-transparent rounded-full relative z-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />

      {/* Loading text */}
      <motion.p
        className="mt-6 text-white font-helvetica text-lg relative z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Loading...
      </motion.p>

      {/* Progress bar */}
      <motion.div
        className="w-64 h-2 bg-[#161D27] rounded-full mt-4 overflow-hidden relative z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <motion.div
          className="h-full bg-[#3FAC55] rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </div>
  );
};

export default FullPageLoader;
