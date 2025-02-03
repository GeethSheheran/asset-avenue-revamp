import React, { useState } from "react";

const WornPopup = ({ onClose }) => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
    if (onClose) onClose();
  };

  if (!visible) return null;

  return (
    <div className="w-full md:w-full bg-[#1A1A1A] p-8 rounded-[36px] shadow-lg relative text-white text-center">
      <h2 className="text-3xl font-bold mb-4">Worn Popup</h2>
      <p className="text-sm md:text-[16px] max-w-lg mx-auto mb-6">
        This is the second popup that appears after the first one closes.
      </p>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg text-[11px] uppercase"
        onClick={handleClose}
      >
        Close
      </button>
    </div>
  );
};

export default WornPopup;
