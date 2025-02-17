import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";

const Disclaimer = ({ setDisclaimer, handleShowWertDisclaimer }) => {
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
              onClick={() => {
                setDisclaimer(false);
              }}
              className="absolute -right-4 -top-4 bg-[#3FAC55] rounded-full p-2 transform transition duration-300 ease-in-out hover:rotate-180"
            >
              <IoMdClose className="h-5 w-5 text-white" />
            </button>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-[#3FAC55] rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-12 h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              <h2 className="text-2xl font-bold text-white mb-4">Disclaimer</h2>

              <p className="text-gray-300 text-center mb-2">
                Redirecting to the Wert payment gateway.
              </p>
              <p className="text-gray-300 text-center mb-6">
                Buy USDC and receive AAV directly in your wallet.
              </p>

              <button
                onClick={() => {
                  handleShowWertDisclaimer();
                }}
                className="w-full bg-[#3FAC55] hover:bg-[#11823B] text-white font-bold py-3 px-6 rounded-lg text-sm uppercase transition-colors mt-6"
              >
                I Understand
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Disclaimer;
