import React, { useState, useRef, useEffect } from "react";
import WalletConnect from "./home/Pop-up/Connect";
import { motion } from "framer-motion";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  const [isWalletPopupOpen, setIsWalletPopupOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const walletPopupRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false);
  };

  const toggleWalletPopup = () => {
    setIsWalletPopupOpen(!isWalletPopupOpen);
  };

  const handleCloseWalletPopup = () => setIsWalletPopupOpen(false);
  const handleCloseCardModal = () => setIsCardModalOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        walletPopupRef.current &&
        !walletPopupRef.current.contains(event.target)
      ) {
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
        <a href="https://assetavenue.capital/" className="flex items-center">
          <img src="logo/logo.webp" className="h-10" alt="Asset Avenue" />
        </a>

        <ul className="hidden md:flex space-x-6 text-white text-[10px] font-bold">
          {[
            { name: "HOME", link: "https://assetavenue.capital" },
            { name: "PRESALE", link: "/", highlight: true }, // Green color
            { name: "STAKING", link: "https://assetavenue.capital/stake" },
            { name: "MY HOUSE", link: "https://assetavenue.capital/house" },
            {
              name: "DASHBOARD",
              link: "https://dashboard.assetavenue.capital",
            },
            { name: "DAO", link: "https://assetavenue.capital/dao" },
          ].map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                // target="_blank"
                rel="noopener noreferrer"
                className={`md:text-[10px] hover:text-[#3FAC55] transition ${
                  item.highlight ? "text-[#3FAC55]" : "text-white"
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}

          {/* Dropdown Menu */}
          <li
            className="relative group"
            onMouseEnter={() => setIsMenuOpen(true)}
            onMouseLeave={() => setIsMenuOpen(false)}
          >
            <a
              href="#"
              className="hover:text-[#3FAC55] md:text-[10px] flex items-center"
            >
              MORE <span className="ml-1">▼</span>
            </a>

            <ul
              className={`absolute -left-20 mt-1 bg-black text-white text-[10px] font-bold space-y-2 p-2 shadow-lg rounded-lg w-64 transition-all duration-500 ease-in-out ${
                isMenuOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible translate-y-2"
              }`}
            >
              {[
                {
                  name: "PASSIVE INCOME ASSETS",
                  link: "https://assetavenue.capital/market",
                },
                {
                  name: "INVESTOR RESELL ASSETS",
                  link: "https://assetavenue.capital/resale",
                },
                {
                  name: "CONTACT US",
                  link: "https://assetavenue.capital/contact",
                },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.link}
                    // target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 hover:text-[#3FAC55] text-center transition"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </ul>

        <div className="flex items-center space-x-3 md:space-x-2">
          {/* <button
            type="button"
            className="hidden sm:block uppercase text-white bg-[#3FAC55] hover:bg-[#11823B] font-bold md:text-[11px] rounded-lg text-sm px-6 py-[14px]"
          >
            Buy & Stake Now
          </button> */}
          {/* <button
            type="button"
            onClick={toggleWalletPopup}
            className="hidden sm:block uppercase text-white bg-[#3FAC55] hover:bg-[#11823B] font-bold md:text-[11px] rounded-lg text-sm px-6 py-2"
          >
            CONNECT WALLET
            
          </button> */}
          <WalletMultiButton style={{ height: "36px" }}>
            Connect Wallet
          </WalletMultiButton>

          {/* Custom Dropdown for Language */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="bg-[#FBE279] text-black font-bold rounded-lg text-[11px] py-2.5 px-4"
            >
              {selectedLanguage}{" "}
              <span className="ml-1">{isDropdownOpen ? "▲" : "▼"}</span>
            </button>

            {isDropdownOpen && (
              <ul className="absolute top-full mt-1 bg-[#FBE279]  text-black text-[11px] font-bold space-y-1 w-full p-2 shadow-lg rounded-lg z-10">
                {[
                  { value: "EN", label: "EN 🇬🇧" },
                  { value: "ES", label: "ES 🇪🇸" },
                  { value: "FR", label: "FR 🇫🇷" },
                  { value: "AR", label: "AR 🇦🇪" },
                  { value: "DE", label: "DE 🇩🇪" },
                  { value: "IT", label: "IT 🇮🇹" },
                  { value: "PT", label: "PT 🇵🇹" },
                  { value: "RU", label: "RU 🇷🇺" },
                  { value: "ZH", label: "ZH 🇨🇳" },
                  { value: "JP", label: "JP 🇯🇵" },
                  { value: "KR", label: "KR 🇰🇷" },
                  { value: "TR", label: "TR 🇹🇷" },
                  { value: "NL", label: "NL 🇳🇱" },
                  { value: "PL", label: "PL 🇵🇱" },
                  { value: "ID", label: "ID 🇮🇩" },
                  { value: "TH", label: "TH 🇹🇭" },
                  { value: "VN", label: "VN 🇻🇳" },
                  { value: "HI", label: "HI 🇮🇳" },
                  { value: "FA", label: "FA 🇮🇷" },
                  { value: "HE", label: "HE 🇮🇱" },
                  { value: "SW", label: "SW 🇰🇪" },
                  { value: "BN", label: "BN 🇧🇩" },
                  { value: "UK", label: "UK 🇺🇦" },
                  { value: "RO", label: "RO 🇷🇴" },
                  { value: "HU", label: "HU 🇭🇺" },
                  { value: "CS", label: "CS 🇨🇿" },
                  { value: "DA", label: "DA 🇩🇰" },
                  { value: "FI", label: "FI 🇫🇮" },
                  { value: "SV", label: "SV 🇸🇪" },
                  { value: "NO", label: "NO 🇳🇴" },
                  { value: "EL", label: "EL 🇬🇷" },
                  { value: "MS", label: "MS 🇲🇾" },
                  { value: "TL", label: "TL 🇵🇭" },
                ].map((item) => (
                  <li
                    key={item.value}
                    onClick={() => handleLanguageChange(item.value)}
                    className="cursor-pointer hover:text-[#3FAC55] transition"
                  >
                    {item.label}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button
            type="button"
            onClick={toggleMenu}
            className="md:hidden p-2 text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 w-full bg-black text-white z-40 transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        } md:hidden h-screen flex flex-col items-center justify-center space-y-0`}
      >
        <button onClick={toggleMenu} className="absolute top-5 right-5 p-2">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="white"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <ul className="flex flex-col items-center space-y-4">
          {/* Logo */}
          <img src="logo/logo.webp" className="h-16 mb-2" alt="Asset Avenue" />

          {/* Navigation Links */}
          {[
            { name: "HOME", link: "https://assetavenue.capital" },
            { name: "PRESALE", link: "/", highlight: true }, // Green color
            { name: "STAKING", link: "https://assetavenue.capital/stake" },
            { name: "MY HOUSE", link: "https://assetavenue.capital/house" },
            {
              name: "DASHBOARD",
              link: "https://dashboard.assetavenue.capital",
            },
            { name: "DAO", link: "https://assetavenue.capital/dao" },
            {
              name: "PASSIVE INCOME ASSETS",
              link: "https://assetavenue.capital/market",
            },
            {
              name: "INVESTOR RESELL ASSETS",
              link: "https://assetavenue.capital/resale",
            },
            { name: "CONTACT US", link: "https://assetavenue.capital/contact" },
          ].map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                // target="_blank"
                rel="noopener noreferrer"
                className={`block text-[12px] font-bold hover:text-[#3FAC55] transition ${
                  item.highlight ? "text-[#3FAC55]" : "text-white"
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}

          {/* Connect Wallet Button */}
          <li>
            <button
              onClick={toggleWalletPopup}
              type="button"
              className="text-white uppercase bg-[#3FAC55] hover:bg-[#11823B] font-medium rounded-lg text-[12px] px-6 py-2 font-bold"
            >
              CONNECT WALLET
            </button>
          </li>
        </ul>
      </div>

      {isWalletPopupOpen && (
        <div
          // onClick={handleCloseWalletPopup}
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            ref={walletPopupRef}
            className="px-6 rounded-lg shadow-lg md:w-1/3 w-full text-center"
          >
            <button
              onClick={handleCloseWalletPopup}
              className="absolute top-[10%] right-1/3  bg-green-500 rounded-full p-2 font-base text-xl z-10 transform transition duration-300 ease-in-out hover:rotate-180"
            >
              <IoMdClose className="h-5 w-5 text-white" />
            </button>
            <WalletConnect />
          </motion.div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
