import React, { useState, useRef, useEffect } from "react";
import WalletConnect from "./home/Connect";
import { motion } from "framer-motion";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  const [isWalletPopupOpen, setIsWalletPopupOpen] = useState(false);
  const walletPopupRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const toggleWalletPopup = () => {
    setIsWalletPopupOpen(!isWalletPopupOpen);
  };

  const handleCloseWalletPopup = () => setIsWalletPopupOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (walletPopupRef.current && !walletPopupRef.current.contains(event.target)) {
        setIsWalletPopupOpen(false);
      }
    };

    if (isWalletPopupOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isWalletPopupOpen]);

  return (
    <nav className="bg-black fixed w-full z-50 top-0">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto py-4">
        <a href="/" className="flex items-center">
          <img src="logo/logo.webp" className="h-8" alt="Asset Avenue" />
        </a>

        <ul className="hidden md:flex space-x-6 text-white text-[10px] font-bold">
          {["HOME", "PRESALE", "STAKING", "MY HOUSE", "DASHBOARD", "DAO"].map((item) => (
            <li key={item}>
              <a href="#" className="hover:text-[#3FAC55] md:text-[11px]">{item}</a>
            </li>
          ))}
          <li className="relative group">
            <a href="#" className="hover:text-[#3FAC55] md:text-[11px] flex items-center">
              MORE <span className="ml-1">▼</span>
            </a>
            <ul className="absolute -left-12 mt-1 hidden group-hover:block bg-black text-white text-[10px] font-bold space-y-2 p-2 shadow-lg rounded-lg  w-56">
              {["PASSIVE INCOME ASSETS", "INVESTOR RESELL ASSETS", "CONTACT US"].map((item) => (
                <li key={item}>
                  <a href="#" className="block px-8 py-2 hover:text-[#3FAC55]">{item}</a>
                </li>
              ))}
            </ul>
          </li>
        </ul>

        <div className="flex items-center space-x-3 md:space-x-2">
          <button
            type="button"
            className="hidden sm:block uppercase text-white bg-[#3FAC55] hover:bg-[#11823B] font-bold md:text-[11px] rounded-lg text-sm px-6 py-2"
          >
            Buy & Stake Now
          </button>
          <button
            type="button"
            onClick={toggleWalletPopup}
            className="hidden sm:block uppercase text-white bg-[#3FAC55] hover:bg-[#11823B] font-bold md:text-[11px] rounded-lg text-sm px-6 py-2"
          >
            CONNECT WALLET
          </button>
          <select
            value={selectedLanguage}
            onChange={handleLanguageChange}
            className="bg-[#FBE279] text-black font-medium rounded-lg text-sm px-4 py-2"
          >
            <option value="EN">EN 🇬🇧</option>
            <option value="ES">ES 🇪🇸</option>
            <option value="FR">FR 🇫🇷</option>
            <option value="AR">AR 🇦🇪</option>
          </select>
          <button
            type="button"
            onClick={toggleMenu}
            className="md:hidden p-2 text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      <div className={`fixed top-0 left-0 w-full bg-black text-white z-40 transition-transform duration-500 ease-in-out ${isMenuOpen ? "translate-y-0" : "-translate-y-full"} md:hidden h-screen flex flex-col items-center justify-center space-y-6`}>
        <button onClick={toggleMenu} className="absolute top-5 right-5 p-2">
          <svg className="w-8 h-8" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <ul className="flex flex-col items-center space-y-6">
          <img src="logo/logo.webp" className="h-16 mb-12" alt="Asset Avenue" />
          {["HOME", "PRESALE", "STAKING", "MY HOUSE", "DASHBOARD", "DAO", "PASSIVE INCOME ASSETS", "INVESTOR RESELL ASSETS", "CONTACT US"].map((item) => (
            <li key={item}>
              <a href="#" className="block text-lg font-bold hover:text-[#3FAC55]">{item}</a>
            </li>
          ))}
          <li>
            <button
              onClick={toggleWalletPopup}
              type="button"
              className="text-white uppercase bg-[#3FAC55] hover:bg-[#11823B] font-medium rounded-lg text-lg px-6 py-2 font-bold"
            >
              CONNECT WALLET
            </button>
          </li>
        </ul>
      </div>

      {isWalletPopupOpen && (
        <div 
        className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
          ref={walletPopupRef} className="px-6 rounded-lg shadow-lg md:w-1/3 w-full text-center">
            <WalletConnect />
          </motion.div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
