import React, { useState, useEffect } from "react";
import WalletPopup from "./walletPop";
import { motion } from "framer-motion";
import Buywithcard from "./buywithcard";
import AnotherPopup from "./AnotherPopup";
import { IoMdClose } from "react-icons/io";

const PresalePopup = ({ translations, onClose }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [progress, setProgress] = useState(0);
  const [isWalletPopupOpen, setIsWalletPopupOpen] = useState(false);
  const [isCardPopupOpen, setIsCardPopupOpen] = useState(false);
  const [isAnotherPopupOpen, setIsAnotherPopupOpen] = useState(false);
  const [usdAmount, setUsdAmount] = useState("");
  const [bestReceive, setBestReceive] = useState("");
  const [error, setError] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("SOL");

  const handleStake = () => {
    if (!usdAmount || !bestReceive) {
      setError("Please fill in both fields.");
      return;
    }
    // Handle stake logic here
  };

  useEffect(() => {
    const targetDate = new Date("2025-08-01T00:00:00");
    const startDate = new Date("2025-01-01T00:00:00");

    const updateCountdown = () => {
      const currentTime = new Date();
      const diff = targetDate - currentTime;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setProgress(100);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      const totalDuration = targetDate - startDate;
      const elapsedTime = currentTime - startDate;

      // Start progress from 75% and add the remaining 25% based on elapsed time
      const progressPercentage = 75 + (elapsedTime / totalDuration) * 25;
      setProgress(progressPercentage);
    };

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(interval);
  }, []);

  const openCardPopup = () => {
    setIsCardPopupOpen(true);
  };

  const openAnotherPopup = () => {
    setIsAnotherPopupOpen(true); // Function to open the new popup
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  return (
    <>
      {!isWalletPopupOpen && !isCardPopupOpen && !isAnotherPopupOpen ? (
        <div className="w-full md:w-full rounded-tl-none bg-gradient-to-l from-[#05350F] to-[#05350F] px-8 py-6 rounded-[36px] shadow-[0_4px_145px_0_#56C46C9C] mt-0 md:mt-16 relative md:ml-auto">
          <img
            src="hero/widget.png"
            alt="Card Background"
            className="absolute top-0 right-0 w-full h-full object-cover rounded-[36px] z-0"
          />

          <h2 className="text-3xl md:text-[36px] text-center font-helvetica font-semibold mb-4 relative z-10">
            {translations?.presaleButton || "BUY $AAV TOKEN PRESALE!"}
          </h2>

          <div className="border border-[#22C55E] border-[4px] rounded-[25px] rounded-tl-none">
            <p className="text-sm md:text-[16px] text-center bg-gradient-to-l from-[#B8934D] to-[#FBE279] py-2 text-black rounded-[50px] inline-block mb-0 w-full rounded-tl-none relative z-10">
              {translations?.priceInfo || "Price will increase gradually."}
            </p>
            <div className="grid grid-cols-4 gap-4 text-center font-medium p-4 relative z-10">
              {["days", "hours", "minutes", "seconds"].map((unit) => (
                <div key={unit}>
                  <span className="font-thin text-sm">
                    {translations?.countdown?.[unit] || unit}
                  </span>
                  <p className="text-2xl font-bold">{timeLeft[unit]}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative my-6">
            <div className="w-full bg-gray-300 rounded-full h-2.5">
              <div
                className="bg-[#00FFA3] h-2.5 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="flex justify-between text-xs md:text-[12px] mb-3 relative z-10">
            <span>{translations?.minBuy || "Min buy: 0.5 SOL"}</span>
            <span>{translations?.maxBuy || "Max buy: 200 SOL"}</span>
          </div>

          <div className="flex justify-center font-bold py-1 text-xs md:text-[16px] mb-3 relative z-10">
            <span>
              {translations?.totalSOL || "TOTAL SOL RAISED: 24.317$ / 25.318$"}
            </span>
          </div>

          <div className="relative flex items-center justify-center mb-3 z-10">
            <hr className="absolute w-1/6 left-0 border-t border-white" />
            <p className="z-10 px-2 text-xs md:text-[12px]">
              {translations?.price || "1 AAV = 0.000368664 SOL"}
            </p>
            <hr className="absolute w-1/6 right-0 border-t border-white" />
          </div>

          <div className="relative pt-4 flex flex-col space-y-4 z-10">
            <div className="flex items-center space-x-2">
              <input
                type="number"
                placeholder="Amount to spend"
                className="p-2 rounded-[10px] text-black text-sm border focus:border-green-900 focus:ring-1 focus:ring-green-500 outline-none flex-1"
                value={usdAmount}
                onChange={(e) => setUsdAmount(e.target.value)}
              />
            </div>

            <div className="relative w-full">
              <input
                type="number"
                placeholder="AAV you receive"
                className="w-full p-2 pr-10 rounded-[10px] text-black text-sm border focus:border-green-900 focus:ring-1 focus:ring-green-500 outline-none"
                value={bestReceive}
                onChange={(e) => setBestReceive(e.target.value)}
              />
              <img
                src="/logo/asset.png"
                alt="icon"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              onClick={handleStake}
              disabled={!usdAmount || !bestReceive}
              className="uppercase z-10 text-black text-[12px] font-bold py-3 px-6 rounded-[10px] w-full bg-gradient-to-br from-[#958648] to-[#FBE279] hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {translations?.buyWithCrypto || "STAKE FOR 509% REWARDS"}
            </button>

            <button
              onClick={openAnotherPopup}
              className="uppercase z-10 font-bold bg-[#3FAC55] text-[12px] hover:bg-[#11823B] text-white py-3 px-4 rounded-[10px] w-full"
            >
              {translations?.buyWithCard || "BUY $AAV"}
            </button>
          </div>

          <p
            onClick={() => setIsWalletPopupOpen(true)}
            className="text-[11px] underline font-thin text-center mt-6 cursor-pointer z-10 relative"
          >
            {translations?.dontHaveWallet || "Don't have a wallet?"}
          </p>

          <div className="flex justify-center mt-4 z-10 relative">
            <a
              href="https://contractwolf.io/projects/asset-avenue"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/logo/contract.png"
                alt="Auditor Logo"
                className="w-[150px] h-auto object-contain"
              />
            </a>
          </div>
          <p className="text-[11px] uppercase font-thin text-center z-10 relative">
            Want to pay with Crypto Instead?{" "}
            <span
              onClick={openCardPopup}
              className="cursor-pointer text-[#B8934D]"
            >
              CLICK HERE
            </span>
          </p>
        </div>
      ) : isWalletPopupOpen ? (
        <div
          className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-80 z-50"
          // onClick={() => setIsWalletPopupOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="p-8 rounded-xl w-full md:w-1/3"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsWalletPopupOpen(false)}
              className="absolute top-[10%] right-1/3  bg-green-500 rounded-full p-2 font-base text-xl hover:rotate-180 transform transition duration-300 ease-in-out"
            >
               <IoMdClose className="h-5 w-5 text-white" />
            </button>
            <WalletPopup onClose={() => setIsWalletPopupOpen(false)} />
          </motion.div>
        </div>
      ) : isAnotherPopupOpen ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
        >
          <AnotherPopup onClose={() => setIsAnotherPopupOpen(false)} />
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
        >
          <Buywithcard onClose={() => setIsCardPopupOpen(false)} />
        </motion.div>
      )}
    </>
  );
};

export default PresalePopup;
