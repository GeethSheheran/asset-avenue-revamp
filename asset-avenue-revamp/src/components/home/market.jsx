import React from 'react';
import houseImage from './house.png'; // Replace with the actual image path

const Market = () => {
  return (
    <div className="bg-black flex flex-col items-center justify-center pt-20"> 
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <img src={houseImage} alt="House" className="w-full h-auto rounded-lg" />
          </div>
          <div className="flex flex-col justify-center xl:ml-8">
            <h1 className="text-3xl font-bold mb-4 text-white text-center md:text-left">Real Estate Market And How Much Potential</h1>
            <p className="text-m mb-4 text-white text-center md:text-left">
              Invest in Real Estate Assets Alongside Experts and receive passive income in fiat or crypto.
            </p>
            <p className="text-m mb-4 text-white text-center md:text-left">
              Analyze deals and markets worldwide, recognize trends and shifts earlier, comprehensive neighborhood insights
            </p>
            <p className="text-m mb-4 text-white text-center md:text-left">
              Buy your own Real Estate worldwide without exchanging your crypto into fiat money.
            </p>
            <div className="flex flex-col xl:space-y-0 space-y-4 md:space-x-2 md:flex-row pt-12"> 
              <button className="bg-[#3FAC55] hover:bg-[#1FAC59] text-white font-base py-3 px-4 rounded-xl w-full md:w-48"> 
                Get Started
              </button>
              <button className="bg-gradient-to-r from-[#958648] to-[#FBE279] hover:bg-[#FBE279] text-white font-base py-3 px-4 rounded-xl w-full md:w-48">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;