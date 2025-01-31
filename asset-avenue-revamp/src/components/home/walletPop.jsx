import React from "react";

const WalletPopup = () => {
  return (
    <div className="w-full md:w-full bg-[#05350F] p-8 rounded-[36px] rounded-tl-none shadow-[0_4px_145px_0_#56C46C9C] relative text-white text-center">
      
      {/* Header */}
      <h2 className="text-3xl md:text-[36px] font-bold mb-4">Need A Wallet</h2>
      
      {/* Description */}
      <p className="text-sm md:text-base max-w-l mx-auto mb-6">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
      </p>
      
      {/* Image */}
      <div className="flex justify-center mb-6">
        <img src="/popup/pop.png" alt="Wallet Preview" className="w-40 rounded-lg shadow-lg" />
      </div>
      
      {/* Steps */}
      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-col md:items-start md:space-x-0 mb-6">
  {["Download the Best wallet app", "Create your account", "Buy in-app with card or crypto"].map((text, index) => (
    <div key={index} className="flex items-center space-x-2 py-2 ">
      <span className="w-6 h-6 flex items-center justify-center rounded-full bg-white border border-[#22C55E] text-black text-sm">
        {index + 1}
      </span>
      <p className="text-sm">{text}</p>
    </div>
  ))}
</div>


      
      {/* Button */}
      <button className="bg-[#3FAC55] hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg text-[11px] uppercase">
        Download Best Wallet
      </button>
    </div>
  );
};

export default WalletPopup;
