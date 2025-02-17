import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

const InfoBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.3 }}
      className="hidden md:block fixed top-0 left-0 right-0 z-[99999] bg-[#05350F] shadow-[0_4px_145px_0_#56C46C9C] border-b-2 border-[#3FAC55]"
    >
      <div className="relative">
        <img
          src="hero/widget.png"
          alt="Background Pattern"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
        />
        <div className="max-w-7xl mx-auto px-4 py-6 relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="animate-spin h-4 w-4 border-2 border-[#3FAC55] border-t-transparent rounded-full mr-3" />
              <p className="text-white text-sm">
                Please keep the payment window open until the transaction is
                pending to view your AAV transfer status
              </p>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="text-white hover:text-[#3FAC55] transform transition duration-300 ease-in-out hover:rotate-180"
            >
              <IoMdClose className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default InfoBar;
