import React, { useState } from "react";
import WalletPopup from "./walletPop";
import { motion } from "framer-motion";


const WalletConnect = () => {
  const [showWalletPopup, setShowWalletPopup] = useState(true);

  return (
    <>
      {showWalletPopup ? (
        <div className="w-full md:w-full bg-gradient-to-l rounded-tl-none from-[#05350F] to-[#05350F] p-8 rounded-[36px] rounded-tl-none shadow-[0_4px_145px_0_#56C46C9C] mt-0 md:mt-16 relative md:ml-auto z-10">
          {/* Background Image */}
          <img
            src="hero/widget.png"
            alt="Card Background"
            className="absolute top-0 left-0 w-full h-full object-cover rounded-[36px] z-0"
          />

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-white text-2xl font-bold text-center mb-4">
              Connect A Wallet
            </h2>
            <p className="text-gray-300 text-sm text-center mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>

            {/* Wallet Buttons */}
            <div className="space-y-3">
              {[
                { name: "Phantom", image: "popup/image 65.png" },
                { name: "Solflare", image: "popup/image 66.png" },
                { name: "Jupiter", image: "popup/image 67.png" },
                { name: "Coinbase Wallet", image: "popup/image 68.png" },
                { name: "Trust Wallet", image: "popup/image 69.png" },
              ].map((wallet, index) => (
                <button
                  key={index}
                  className="flex items-center justify-between w-full bg-[#3FAC55] text-white font-semibold py-3 px-8 rounded-lg"
                >
                  {wallet.name}
                  <img src={wallet.image} alt={wallet.name} className="w-8 h-8" />
                </button>
              ))}
            </div>

            {/* "I don’t have a wallet" Button */}
            <button
              className="mt-4 w-full border border-[#FBE279] text-[#FBE279] font-semibold py-3 px-4 rounded-lg flex items-center justify-center"
              onClick={() => setShowWalletPopup(false)} // Switch Popup
            >
              <img src="popup/Mask group.png" alt="Wallet" className="w-5 h-5 mr-2" />
              I don’t have a wallet
            </button>

            {/* Logo */}
            <div className="flex justify-center mt-4">
              <img src="/logo/contract.png" alt="Auditor Logo" className="w-1/3 h-auto object-contain" />
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full md:w-full  p-8 rounded-[36px] rounded-tl-none  mt-0 md:mt-16 relative md:ml-auto z-10">
          {/* Content */}
          <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative z-10">
            <WalletPopup/>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default WalletConnect;
