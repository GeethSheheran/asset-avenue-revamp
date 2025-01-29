import React, { useState, useEffect } from "react";
import ImageSlider from "./ImageSlider";
import axios from "axios";

const HeroSection = ({ language }) => {
  // State for translations
  const [translations, setTranslations] = useState({});

  // Google Translate API Configuration
  const API_KEY = "YOUR_GOOGLE_API_KEY"; // Replace with your Google API key
  const API_URL = "https://translation.googleapis.com/language/translate/v2";

  // Default text content for translation
  const defaultText = {
    presaleButton: "BUY $AAV TOKEN PRESALE!",
    priceInfo: "Price will increase gradually.",
    countdown: {
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
    },
    minBuy: "Min buy: 0.5 SOL",
    maxBuy: "Max buy: 200 SOL",
    price: "1 AAV = 0.000368664 SOL",
    buyWithCard: "Buy With Card",
    buyWithCrypto: "Buy With Crypto",
    dontHaveWallet: "Don't have a wallet?",
  };

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

  return (
    <div className="relative bg-black text-white min-h-screen flex flex-col md:flex-row items-center justify-center py-16 px-4 md:px-24 overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
        autoPlay
        loop
        muted
      >
        <source src="video/bars.mp4" type="video/mp4" />
      </video>

      {/* Image Below Video */}
      <img
        src="hero/left hero.png"
        alt="Image Below Video"
        className="absolute top-2 left-1/2 transform -translate-x-1/2 mb-8 w-[90%] sm:w-[80%] md:w-4/5 z-20 "
      />

      {/* Center Image Over Video */}
      <img
        src="hero/centerImg.png"
        alt="Center Graphic"
        className="absolute top-1/2 right-1/4 transform -translate-x-1/2 -translate-y-1/2 z-10 w-3/5 sm:w-2/5 md:w-[250px] hidden sm:block"
      />

      {/* Content */}
      <div className="relative z-20 flex flex-col md:flex-row w-full max-w-7xl">
        {/* Left Section */}
        <div className="w-full md:w-2/3 mt-16 items-center justify-center space-y-6 text-center md:text-left">
          <h1 className="text-[40px] font-helvetica sm:text-6xl md:text-[90px] font-bold">
            Asset Avenue <br />
            <span className="text-[#22C55E]">Presale</span>
          </h1>
          <p className="text-lg md:text-[32px] font-light">
            Redefining Real Estate with Blockchain
          </p>
          {/* Image Slider */}
          <div className="flex items-center justify-center md:justify-start space-x-8">
            <ImageSlider />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/3 bg-[#003000] p-8 rounded-[36px] rounded-tl-none shadow-[0_4px_145px_0_#56C46C9C] mt-10 md:mt-0 relative md:ml-auto">
          <h2 className="text-3xl md:text-[36px] text-center font-helvetica font-semibold mb-4">
            {translations.presaleButton || "BUY $AAV TOKEN PRESALE!"}
          </h2>
          <p className="text-sm md:text-base text-center bg-gradient-to-l from-[#B8934D] to-[#FBE279] py-1 w-full rounded-lg inline-block mb-4">
            {translations.priceInfo || "Price will increase gradually."}
          </p>

          {/* Countdown Timer */}
          <div className="grid grid-cols-4 gap-4 text-center font-medium mb-6 border border-[#22C55E] border-[4px] rounded-[30px] rounded-tl-none p-4">
            <div>
              <span className="font-thin text-sm">{translations.countdown?.days || "Days"}</span>
              <p className="text-2xl font-bold">01</p>
            </div>
            <div>
              <span className="font-thin text-sm">{translations.countdown?.hours || "Hours"}</span>
              <p className="text-2xl font-bold">21</p>
            </div>
            <div>
              <span className="font-thin text-sm">{translations.countdown?.minutes || "Minutes"}</span>
              <p className="text-2xl font-bold">49</p>
            </div>
            <div>
              <span className="font-thin text-sm">{translations.countdown?.seconds || "Seconds"}</span>
              <p className="text-2xl font-bold">18</p>
            </div>
          </div>

          <div className="flex justify-between text-xs md:text-sm mb-6">
            <span>{translations.minBuy || "Min buy: 0.5 SOL"}</span>
            <span>{translations.maxBuy || "Max buy: 200 SOL"}</span>
          </div>
          <div className="relative flex items-center justify-center mb-6">
            <hr className="absolute w-1/4 left-0 border-t border-gray-600" />
            <p className="z-10 bg-[#003000] px-2 text-xs md:text-sm">
              {translations.price || "1 AAV = 0.000368664 SOL"}
            </p>
            <hr className="absolute w-1/4 right-0 border-t border-gray-600" />
          </div>

          {/* Buttons */}
          <div className="relative pt-4 flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4 z-10">
            <div className="relative w-full  md:w-1/2">
              {/* Image Above Button */}
              <img
                src="/hero/1.png"
                alt="Visa"
                className="absolute top-[-30px] -left-6 right-0 w-full h-[30px] object-contain z-0 hidden sm:block"
              />
              <button className="relative z-10 bg-[#3FAC55] hover:bg-[#11823B] text-white py-2 px-4 rounded-[10px] w-full">
                {translations.buyWithCard || "Buy With Card"}
              </button>
            </div>
            <div className="relative w-full md:w-1/2">
              {/* Image Above Button */}
              <img
                src="hero/2.png"
                alt="Crypto"
                className="absolute top-[-30px] md:left-10 lg:left-6 right-0 w-full h-[30px] object-contain z-0 hidden sm:block"
              />
              <button
                className="relative z-10 text-black py-2 px-4 rounded-[10px] w-full bg-gradient-to-br from-[#958648] to-[#FBE279] hover:opacity-80"
                style={{
                  background:
                    "linear-gradient(212.98deg, #958648 -92.97%, #FBE279 187.71%)",
                }}
              >
                {translations.buyWithCrypto || "Buy With Crypto"}
              </button>
            </div>
          </div>

          <p className="text-xs text-center mt-6">
            {translations.dontHaveWallet || "Don't have a wallet?"}
          </p>

          {/* Centered Image */}
          <div className="flex justify-center mt-4">
            <img
              src="/logo/contract.png"
              alt="Auditor Logo"
              className="w-1/3 h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
