import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative bg-black text-white min-h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-24 overflow-hidden">
      {/* Background Video */}
      <video className="absolute top-0 left-0 w-full h-full object-cover opacity-50" autoPlay loop muted>
        <source src="/background-video.mp4" type="video/mp4" />
      </video>

      {/* Center Image Over Video */}
      <img 
        src="hero//centerImg.png" 
        alt="Center Graphic" 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-1/5" 
      />

      {/* Content */}
      <div className="relative z-20 flex w-full max-w-7xl">
        {/* Left Section */}
        <div className="w-full md:w-2/3 mt-24 items-center justify-center space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold">Asset Avenue <br/><span className="text-[#22C55E]">Presale</span></h1>
          <p className="text-lg md:text-xl font-light">Redefining Real Estate with Blockchain</p>
          {/* Image Slider */}
          <div className="flex items-center justify-center md:justify-start space-x-8 mt-6 pt-16">
            <motion.img
              src="logo/logo1.png"
              alt="Binance"
              className="w-28 h-8"
              whileHover={{ scale: 1.1 }}
            />
            <motion.img
              src="logo/logo2.png"
              alt="Solana"
              className="w-28 h-8"
              whileHover={{ scale: 1.1 }}
            />
            <motion.img
              src="logo/logo3.png"
              alt="Techopedia"
              className="w-28 h-8"
              whileHover={{ scale: 1.1 }}
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/3 bg-[#003000] p-8 rounded-2xl shadow-[0_4px_145px_0_#56C46C9C] mt-10 md:mt-0 relative md:ml-auto">
          <h2 className="text-[40px] text-center font-semibold mb-4">BUY $AAV TOKEN PRESALE!</h2>
          <p className="text-[sm] text-center bg-gradient-to-r from-yellow-400 to-yellow-600 py-1 w-full rounded-lg inline-block mb-4">
            Price will increase gradually.
          </p>

          {/* Countdown Timer */}
          <div className="grid grid-cols-4 gap-4 text-center text-lg font-medium mb-6 border border-[#22C55E] border-[4px] rounded-xl rounded-tl-none p-4">
            <div>
              <p className="text-2xl font-bold">01</p>
              <span>Days</span>
            </div>
            <div>
              <p className="text-2xl font-bold">21</p>
              <span>Hours</span>
            </div>
            <div>
              <p className="text-2xl font-bold">49</p>
              <span>Minutes</span>
            </div>
            <div>
              <p className="text-2xl font-bold">18</p>
              <span>Seconds</span>
            </div>
          </div>

          <div className="flex justify-between text-sm mb-2">
            <span>Min buy: 0.5 SOL</span>
            <span>Max buy: 200 SOL</span>
          </div>
          <div className="relative flex items-center justify-center mb-6">
            <hr className="absolute w-1/4 left-0 border-t border-gray-600" />
            <p className="z-10 bg-[#003000] px-2">1 AAV = 0.000368664 SOL</p>
            <hr className="absolute w-1/4 right-0 border-t border-gray-600" />
          </div>

          {/* Buttons */}
          <div className="relative flex flex-row justify-between space-x-4 z-10">
            <div className="relative w-1/2">
              <img src="/hero/buycard.png" alt="Visa" className="absolute inset-0 w-full h-full object-contain opacity-30 z-0" />
              <button className="relative z-10 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg w-full">
                Buy With Card
              </button>
            </div>
            <div className="relative w-1/2">
              <img src="/crypto-logo.png" alt="Crypto" className="absolute inset-0 w-full h-full object-contain opacity-30 z-0" />
              <button className="relative z-10 bg-green-800 hover:bg-green-900 text-white py-2 px-4 rounded-lg w-full">
                Buy With Crypto
              </button>
            </div>
          </div>

          <p className="text-xs text-center mt-6">Audited by CONTRACT WOLF</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
