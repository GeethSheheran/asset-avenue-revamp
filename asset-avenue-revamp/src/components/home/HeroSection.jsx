import React from "react";
import { motion } from "framer-motion";
import ImageSlider from "./ImageSlider";

const HeroSection = () => {
  return (
    <div className="relative bg-black text-white min-h-screen flex flex-col md:flex-row items-center justify-center py-24 px-4 md:px-24 overflow-hidden">
      {/* Background Video */}
      <video className="absolute top-0 left-0 w-full h-full object-cover opacity-50" autoPlay loop muted>
        <source src="video/bars.mp4" type="video/mp4" />
      </video>

      {/* Image Below Video */}
      <img 
        src="hero/left hero.png" 
        alt="Image Below Video"
        className="absolute top-2 left-1/2 transform -translate-x-1/2 mb-8 w-4/5 md:w-3/5 z-20"
      />

      {/* Center Image Over Video */}
      <img 
        src="hero/centerImg.png" 
        alt="Center Graphic" 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-1/5 md:w-1/4" 
      />
      
      {/* Content */}
      <div className="relative z-20 flex w-full max-w-7xl flex-col md:flex-row">
        {/* Left Section */}
        <div className="w-full md:w-2/3 mt-16 items-center justify-center space-y-6 text-center md:text-left">
          <h1 className="text-6xl md:text-[90px] font-bold">Asset Avenue <br/><span className="text-[#22C55E]">Presale</span></h1>
          <p className="text-lg md:text-xl font-light">Redefining Real Estate with Blockchain</p>
          {/* Image Slider */}
          <div className="flex items-center justify-center md:justify-start space-x-8 ">
           <ImageSlider/>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/3 bg-[#003000] p-6 md:p-8 rounded-2xl shadow-[0_4px_145px_0_#56C46C9C] mt-10 md:mt-0 relative md:ml-auto">
          <h2 className="text-3xl md:text-[40px] text-center font-semibold mb-4">BUY $AAV TOKEN PRESALE!</h2>
          <p className="text-sm text-center bg-gradient-to-r from-yellow-400 to-yellow-600 py-1 w-full rounded-lg inline-block mb-4">
            Price will increase gradually.
          </p>

          {/* Countdown Timer */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-lg font-medium mb-6 border border-[#22C55E] border-[4px] rounded-xl rounded-tl-none p-4">
            <div>
              <span>Days</span>
              <p className="text-2xl font-bold">01</p>
            </div>
            <div>
              <span>Hours</span>
              <p className="text-2xl font-bold">21</p>
            </div>
            <div>
              <span>Minutes</span>
              <p className="text-2xl font-bold">49</p>
            </div>
            <div>
              <span>Seconds</span>
              <p className="text-2xl font-bold">18</p>
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
          <div className="relative flex flex-col md:flex-row justify-between space-y-4 md:space-x-4 z-10">
            <div className="relative w-full md:w-1/2">
              <img src="/hero/buycard.png" alt="Visa" className="absolute inset-0 w-full h-full object-contain opacity-30 z-0" />
              <button className="relative z-10 bg-[#3FAC55] hover:bg-green-600 text-white py-2 px-4 rounded-lg w-full">
                Buy With Card
              </button>
            </div>
            <div className="relative w-full md:w-1/2">
              <img src="/crypto-logo.png" alt="Crypto" className="absolute inset-0 w-full h-full object-contain opacity-30 z-0" />
              <button className="relative z-10 bg-[#958648] hover:bg-[#FBE279] text-white py-2 px-4 rounded-lg w-full">
                Buy With Crypto
              </button>
            </div>
          </div>

          <p className="text-xs text-center mt-6">Don't have a wallet?</p>

          {/* Centered Image */}
          <div className="flex justify-center mt-4">
            <img src="/logo/contract.png" alt="Auditor Logo" className="w-1/3 sm:w-1/4 h-auto object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
