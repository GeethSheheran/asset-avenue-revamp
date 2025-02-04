import React, { useState } from "react";

const WornPopup = ({ onClose }) => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
    if (onClose) onClose();
  };

  if (!visible) return null;

  return (
    <div className="w-full md:w-full bg-[#05350F] p-8 rounded-[36px] rounded-tl-none shadow-[0_4px_145px_0_#56C46C9C] relative text-white text-center">
      <div className="flex justify-center mb-6">
        <img
          src="/hero/worn.webp"
          alt="Wallet Preview"
          className="w-16 rounded-lg shadow-lg"
        />
      </div>
      <p className="text-sm md:text-[16px] max-w-lg mx-auto mb-6">
       You Purchase was rejected
      </p>
      <button
        className="bg-red-500 w-4/5 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg text-[11px] uppercase"
        onClick={handleClose}
      >
        Try Again
      </button>
    </div>
  );
};

export default WornPopup;
