import { useState, useEffect } from "react";
import WornPopup from "./WornPopup"; // Import WornPopup

const AnotherPopup = ({ onClose }) => {
  const [visible, setVisible] = useState(true);
  const [showWornPopup, setShowWornPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setShowWornPopup(true);
      if (onClose) onClose();
    }, 500);

    return () => clearTimeout(timer);
  }, [onClose]);

  const handleClose = () => {
    setVisible(false);
    setShowWornPopup(true); // Show the next popup when clicking the button
  };

  if (showWornPopup) return <WornPopup />;
  if (!visible) return null;

  return (
    <div className="w-full md:w-full bg-[#05350F] p-8 rounded-[36px] rounded-tl-none shadow-[0_4px_145px_0_#56C46C9C] relative text-white text-center">
      <img
        src="hero/widget.png"
        alt="Card Background"
        className="absolute top-0 left-0 w-full h-full object-cover rounded-[36px] z-0"
      />
      <h2 className="text-3xl md:text-[36px] font-bold mb-4">Wert Widget</h2>
      <div className="flex justify-center mb-6">
        <img
          src="/logo/asset.png"
          alt="Wallet Preview"
          className="w-20 rounded-lg shadow-lg"
        />
      </div>
      <p className="text-sm md:text-[16px] font-base max-w-l mx-auto mb-6">
        Please wait while we are initializing the <br /> wert widget
      </p>
    </div>
  );
};

export default AnotherPopup;
