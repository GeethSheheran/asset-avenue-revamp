import React from "react";

const WalletConnect = () => {
  return (
    <div className="w-full md:w-full bg-gradient-to-l from-[#05350F] to-[#05350F] p-8 rounded-[36px] rounded-tl-none shadow-[0_4px_145px_0_#56C46C9C] mt-0 md:mt-16 relative md:ml-auto">
      <img
        src="hero/widget.png"
        alt="Card Background"
        className="absolute top-0 right-0 w-full h-full object-cover rounded-[36px] z-0"
      />
      <h2 className="text-white text-2xl font-bold text-center mb-4">
        Connect A Wallet
      </h2>
      <p className="text-gray-300 text-sm text-center mb-4">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </p> <p className="text-gray-300 text-sm text-center mb-4">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </p>
      
      <div className="space-y-3">
        <button className="flex items-center justify-between w-full bg-[#3FAC55] text-white font-semibold py-3 px-8 rounded-lg">
          Phantom
          <img src="popup/image 65.png" alt="Phantom" className="w-8 h-8" />
        </button>
        <button className="flex items-center justify-between w-full bg-[#3FAC55] text-white font-semibold py-3 px-8 rounded-lg">
          Solflare
          <img src="popup/image 66.png" alt="Solflare" className="w-8 h-8" />
        </button>
        <button className="flex items-center justify-between w-full bg-[#3FAC55] text-white font-semibold py-3 px-8 rounded-lg">
          Jupiter
          <img src="popup/image 67.png" alt="Jupiter" className="w-8 h-8" />
        </button>
        <button className="flex items-center justify-between w-full bg-[#3FAC55] text-white font-semibold py-3 px-8 rounded-lg">
          Coinbase Wallet
          <img src="popup/image 68.png" alt="Coinbase" className="w-8 h-8" />
        </button>
        <button className="flex items-center justify-between w-full bg-[#3FAC55] text-white font-semibold py-3 px-8 rounded-lg">
          Trust Wallet
          <img src="popup/image 69.png" alt="Trust Wallet" className="w-8 h-8" />
        </button>
      </div>

      <button className="mt-4 w-full border border-[#FBE279] text-[#FBE279] font-semibold py-3 px-4 rounded-lg flex items-center justify-center">
        <img src="popup/Mask group.png" alt="Wallet" className="w-5 h-5 mr-2" />
        I don’t have a wallet
      </button>
      <div className="flex justify-center mt-4 z-10 relative">
        <img
          src="/logo/contract.png"
          alt="Auditor Logo"
          className="w-1/3 h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default WalletConnect;
