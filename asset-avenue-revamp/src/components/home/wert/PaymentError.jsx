import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";

const PaymentError = ({ onClose, onTryAgain }) => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
    if (onClose) onClose();
  };

  const handleTryAgain = () => {
    if (onTryAgain) onTryAgain();
    handleClose();
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="w-full max-w-md mx-4"
      >
        <div className="bg-[#05350F] p-8 rounded-[36px] rounded-tl-none shadow-[0_4px_145px_0_#56C46C9C] relative">
          <img
            src="hero/widget.png"
            alt="Background Pattern"
            className="absolute top-0 left-0 w-full h-full object-cover rounded-[36px] opacity-50 z-0"
          />

          <div className="relative z-10">
            <button
              onClick={handleClose}
              className="absolute -right-4 -top-4 bg-[#3FAC55] rounded-full p-2 transform transition duration-300 ease-in-out hover:rotate-180"
            >
              <IoMdClose className="h-5 w-5 text-white" />
            </button>

            <div className="flex flex-col items-center">
              <img
                src="/hero/worn.webp"
                alt="Error Icon"
                className="w-20 h-20 mb-6"
              />

              <h2 className="text-2xl font-bold text-white mb-4">
                Payment Failed
              </h2>

              <p className="text-gray-300 text-center mb-6">
                We were unable to process your payment at this time. Please try
                again or use a different card.
              </p>

              <div className="flex flex-col w-full gap-4">
                <button
                  onClick={handleTryAgain}
                  className="w-full bg-[#3FAC55] hover:bg-[#11823B] text-white font-bold py-3 px-6 rounded-lg text-sm uppercase transition-colors"
                >
                  Try Again
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PaymentError;
