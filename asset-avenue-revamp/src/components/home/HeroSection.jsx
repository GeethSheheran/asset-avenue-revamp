import React, { useState, useEffect } from "react";
import ImageSlider from "./ImageSlider";
import axios from "axios";
import TokenPresalePopup from "./presalePopup";
import PresalePopup from "./presalePopup";
import WalletPopup from "./walletPop";
import { motion } from "framer-motion";

const HeroSection = ({ language }) => {
  const [translations, setTranslations] = useState({});
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal visibility
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);

  const API_KEY = "YOUR_GOOGLE_API_KEY"; // Replace with your Google API key
  const API_URL = "https://translation.googleapis.com/language/translate/v2";

  const defaultText = {
    presaleButton: "BUY $AAV TOKEN PRESALE!",
    priceInfo: "Price will increase gradually.",
    priceInfo2: "304% Staking Rewards",
    countdown: {
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
    },
    minBuy: "Min buy: 0.5 SOL",
    maxBuy: "Max buy: 200 SOL",
    totalSOL: "TOTAL SOL RAISED: 0,000414747 SOL",
    price: "1 AAV = 0.000368664 SOL",
    buyWithCard: "Buy With Card",
    buyWithCrypto: "Buy With Crypto",
    dontHaveWallet: "Don't have a wallet?",
  };

  // Target date for the countdown (set this to your desired date)
  const targetDate = new Date("2025-12-31T00:00:00Z");

  // Function to calculate the time remaining
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    } else {
      // Handle the case when the countdown has finished
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    }
  };

  // Update the countdown every second
  useEffect(() => {
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  // Function to translate text using Google Translate API
  const translateText = async (text, targetLang) => {
    try {
      const response = await axios.post(API_URL, {
        q: text,
        target: targetLang,
        key: API_KEY,
      });
      return response.data.data.translations[0].translatedText;
    } catch (error) {
      console.error("Error translating text:", error);
      return text; // Fallback to original text if translation fails
    }
  };
  useEffect(() => {
    setProgress(30); // Simulate progress update, replace with real logic
  }, []);

  // Fetch translations for all the required text
  useEffect(() => {
    const fetchTranslations = async () => {
      const translated = {};
      for (const [key, value] of Object.entries(defaultText)) {
        if (typeof value === "object") {
          translated[key] = {};
          for (const [subKey, subValue] of Object.entries(value)) {
            translated[key][subKey] = await translateText(subValue, language);
          }
        } else {
          translated[key] = await translateText(value, language);
        }
      }
      setTranslations(translated);
    };

    fetchTranslations();
  }, [language]);

  // Function to handle modal close
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Function to handle modal open
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleOpenCardModal = () => setIsCardModalOpen(true);
  const handleCloseCardModal = () => setIsCardModalOpen(false);
  const [progress, setProgress] = useState(0);
  

  return (
    <div className="relative bg-black text-white min-h-screen flex flex-col md:flex-row items-center justify-center py-16 px-4 md:px-24 overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
        autoPlay
        loop
        muted
      >
        <source src="video/bars.mp4" type="video/mp4" />
      </video>

      <img
        src="hero/left hero.png"
        alt="Image Below Video"
        className="absolute top-2 left-1/2 transform -translate-x-1/2 mb-8 w-[90%] sm:w-[80%] md:w-4/5 z-20 "
      />

      <img
        src="hero/token.png"
        alt="Center Graphic"
        className="absolute top-2/5 right-[45%] transform -translate-x-1/2 -translate-y-1/2 z-10 w-3/5 sm:w-2/5 md:w-[200px] hidden sm:block animate-floating"
      />

      <img
        src="hero/token.png"
        alt="Center Graphic"
        className="absolute top-[70%] right-[40%] transform -translate-x-1/2 -translate-y-1/2 z-10 w-1/2 sm:w-2/5 md:w-[80px] hidden sm:block animate-floating"
      />
      <img
        src="hero/token.png"
        alt="Center Graphic"
        className="absolute top-[22%] right-[38%] transform -translate-x-1/2 -translate-y-1/2 z-10 w-1/2 sm:w-2/5 md:w-[80px] hidden sm:block animate-floating"
      />

      <div className="relative z-20 flex flex-col md:flex-row w-full max-w-7xl">
        <div className="w-full md:w-2/3 mt-16 items-center justify-center space-y-6 text-center md:pt-16 md:text-left">
          <h1 className="text-[40px] font-helvetica sm:text-6xl md:text-[60px] font-bold">
            Asset Avenue <br />
            <span className="text-[#22C55E] md:text-[60px]">Presale</span>
          </h1>
          <p className="text-lg md:text-[24px] font-light">
            Redefining Real Estate with Blockchain
          </p>
          <div className="flex items-center justify-center md:justify-start space-x-8 pt-16">
            <ImageSlider />
          </div>
        </div>

        <div className="w-full md:w-1/3 mt-0 md:mt-16 ">
          <div className="flex justify-center items-center ">
            <p className="text-sm md:text-[20px] text-center shadow-[0_2px_85px_#56C46C9C]  bg-gradient-to-l from-[#B8934D] to-[#FBE279] p-3 w-4/5 text-white italic font-bold rounded-[20px] rounded-tl-none inline-block mb-8 z-10 relative ">
              {translations.priceInfo2 || "304% Staking Rewards"}
            </p>
          </div>
          <div className="bg-gradient-to-l from-[#05350F] to-[#05350F] p-8 rounded-[36px] rounded-tl-none shadow-[0_4px_145px_0_#56C46C9C] relative md:ml-auto">
            <img
              src="hero/widget.png"
              alt="Card Background"
              className="absolute top-0 right-0 w-full h-full object-cover rounded-[36px] z-0"
            />

            <h2 className="text-3xl md:text-[36px] text-center font-helvetica font-semibold mb-4  z-10 relative">
             BUY $AAV<br/>TOKEN PRESALE!
            </h2>
            

            <div className="text-center font-medium mb-6 border border-[#22C55E] border-[4px] rounded-[30px] rounded-tl-none p-0 z-10 relative">
              <p className="text-sm md:text-base text-center bg-gradient-to-l from-[#B8934D] to-[#FBE279] py-2 w-full text-black rounded-[20px] rounded-tl-none inline-block mb-0 z-10 relative">
                {translations.priceInfo || "Price will increase gradually."}
              </p>
              <div className="grid grid-cols-4  gap-4 px-4 ">
                <div>
                  <span className="font-thin text-sm">
                    {translations.countdown?.days || "Days"}
                  </span>
                  <p className="text-2xl font-bold">{timeLeft.days}</p>
                </div>
                <div>
                  <span className="font-thin text-sm">
                    {translations.countdown?.hours || "Hours"}
                  </span>
                  <p className="text-2xl font-bold">{timeLeft.hours}</p>
                </div>
                <div>
                  <span className="font-thin text-sm">
                    {translations.countdown?.minutes || "Minutes"}
                  </span>
                  <p className="text-2xl font-bold">{timeLeft.minutes}</p>
                </div>

                <div>
                  <span className="font-thin text-sm">
                    {translations.countdown?.seconds || "Seconds"}
                  </span>
                  <p className="text-2xl font-bold">{timeLeft.seconds}</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center text-xs font-bold md:text-sm mb-3 z-10 relative">
              <span>
                {translations.totalSOL || "TOTAL SOL RAISED: 0,000414747 SOL"}
              </span>
            </div>
            <div className="relative w-full bg-white rounded-full h-2.5 mb-3">
            <div
              className="bg-[#22C55E] h-2.5 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
            <div className="flex justify-between text-xs md:text-sm mb-3 z-10 relative">
              <span>{translations.minBuy || "Min buy: 0.5 SOL"}</span>
              <span>{translations.maxBuy || "Max buy: 200 SOL"}</span>
            </div>
            
         
            <div className="relative flex items-center justify-center mb-3 z-10">
              <hr className="absolute w-1/6 left-0 border-t border-white" />
              <p className="z-10 px-2 text-xs md:text-sm">
                {translations.price || "1 AAV = 0.000368664 SOL"}
              </p>
              <hr className="absolute w-1/6 right-0 border-t border-white" />
            </div>

            <div className="relative pt-4 flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4 z-10 relative">
              <div className="relative w-full  md:w-1/2">
                <img
                  src="/hero/1.png"
                  alt="Visa"
                  className="absolute top-[-30px] -left-10 -md:left-[100px] right-0 w-full h-[30px] object-contain z-0 hidden sm:block"
                />
                <button className="relative uppercase z-10 font-bold md:text-[11px] bg-[#3FAC55] hover:bg-[#11823B] text-white py-3 px-4 rounded-[10px] w-full">
                  {translations.buyWithCard || "Buy With Card"}
                </button>
              </div>
              <div className="relative w-full md:w-1/2">
                <img
                  src="hero/2.png"
                  alt="Crypto"
                  className="absolute top-[-30px] md:left-[30px]  left-10 right-0 w-full h-[30px] object-contain z-0 hidden sm:block"
                />
                <button
                  onClick={handleOpenModal} // Trigger modal on click
                  className="relative uppercase z-10  md:text-[11px] text-black font-bold py-3 px-6 rounded-[10px] w-full bg-gradient-to-br from-[#958648] to-[#FBE279] hover:opacity-80"
                  style={{
                    background:
                      "linear-gradient(212.98deg, #958648 -92.97%, #FBE279 187.71%)",
                  }}
                >
                  {translations.buyWithCrypto || "Buy With Crypto"}
                </button>
              </div>
            </div>

            <p
              onClick={handleOpenCardModal} // Trigger modal on click
              className="text-xs text-center underline font-thin mt-6 z-10 relative cursor-pointer"
            >
              {translations.dontHaveWallet || "Don't have a wallet?"}
            </p>

            <div className="flex justify-center mt-4 z-10 relative">
              <img
                src="/logo/contract.png"
                alt="Auditor Logo"
                className="w-[150px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Modal Component */}
      {isModalOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={handleCloseModal}
        >
          <div
            className=" p-8 rounded-xl w-full md:w-1/3"
            onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside the modal
          >
            <PresalePopup />
            <div className="flex justify-center space-x-4 mt-4">
              {/* <button
                className="bg-[#22C55E] text-white py-2 px-4 rounded-md"
                onClick={handleCloseModal}
              >
                Close
              </button> */}
            </div>
          </div>
        </div>
      )}
      {isCardModalOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={handleCloseCardModal}
        >
          <div
            className=" p-8 rounded-xl w-full md:w-1/3"
            onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside the modal
          >
            <WalletPopup />
            <div className="flex justify-center space-x-4 mt-4">
              {/* <button
                className="bg-[#22C55E] text-white py-2 px-4 rounded-md"
                onClick={handleCloseModal}
              >
                Close
              </button> */}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default HeroSection;
