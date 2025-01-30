import React from "react";

const WalletPopup = () => {
  return (
    <div className="w-full md:w-full bg-[#05350F] p-8 rounded-[36px] shadow-[0_4px_145px_0_#56C46C9C] relative text-white text-center">
      
      {/* Header */}
      <h2 className="text-3xl md:text-[36px] font-bold mb-4">Need A Wallet</h2>
      
      {/* Description */}
      <p className="text-sm md:text-base max-w-md mx-auto mb-6">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
      </p>
      
      {/* Image */}
      <div className="flex justify-center mb-6">
        <img src="/mnt/data/Need a wallet.png" alt="Wallet Preview" className="w-64 rounded-lg shadow-lg" />
      </div>
      
      {/* Steps */}
      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:justify-center md:space-x-6 mb-6">
        <div className="flex items-center space-x-2">
          <span className="text-green-400 text-xl">✔</span>
          <p className="text-sm">Download the Best wallet app</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-green-400 text-xl">✔</span>
          <p className="text-sm">Create your account</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-green-400 text-xl">✔</span>
          <p className="text-sm">Buy in-app with card or crypto</p>
        </div>
      </div>
      
      {/* Button */}
      <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg text-lg">
        Download Best Wallet
      </button>
    </div>
  );
};

export default WalletPopup;
