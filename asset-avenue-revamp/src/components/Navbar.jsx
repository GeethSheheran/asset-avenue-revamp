import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <nav className="bg-black fixed w-full z-50 top-0">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto py-4">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src="logo/logo.webp" className="h-8" alt="Asset Avenue" />
        </a>

        {/* Desktop Menu - Always Visible */}
        <ul className="hidden md:flex space-x-3 text-white text-[10px] font-bold">
          <li><a href="#" className="hover:text-[#3FAC55]">SEED SALE</a></li>
          <li><a href="#" className="hover:text-[#3FAC55]">HOME</a></li>
          <li><a href="#" className="hover:text-[#3FAC55]">PASSIVE INCOME ASSET</a></li>
          <li><a href="#" className="hover:text-[#3FAC55]">INVESTOR RESALE ASSET</a></li>
          <li><a href="#" className="hover:text-[#3FAC55]">MY HOUSE</a></li>
          <li><a href="#" className="hover:text-[#3FAC55]">STAKING</a></li>
          <li><a href="#" className="hover:text-[#3FAC55]">CONTACT US</a></li>
          <li><a href="#" className="hover:text-[#3FAC55]">DASHBOARD</a></li>
          <li><a href="#" className="hover:text-[#3FAC55]">DAO</a></li>
        </ul>

        {/* Right Side - Language Selector & Buttons */}
        <div className="flex items-center space-x-3 md:space-x-4">
        <button
            type="button"
            className="hidden sm:block text-white bg-[#3FAC55] hover:bg-[#11823B] font-bold  rounded-lg text-sm px-6 py-2"
          >
            Buy & Stake Now
          </button>
          <button
            type="button"
            className="hidden sm:block text-white bg-[#3FAC55] hover:bg-[#11823B] font-bold  rounded-lg text-sm px-6 py-2"
          >
            CONNECT WALLET
          </button>
          <select
            value={selectedLanguage}
            onChange={handleLanguageChange}
            className="bg-[#FBE279] text-black font-medium rounded-lg text-sm px-4 py-2 " 
          >
            <option value="EN">EN 🇬🇧</option>
            <option value="ES">ES 🇪🇸</option>
            <option value="FR">FR 🇫🇷</option>
            <option value="AR">AR 🇦🇪</option>
          </select>
          

          {/* Mobile Menu Button */}
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

      {/* Mobile Menu - Drops Down with Motion */}
      <div className={`fixed top-0 left-0 w-full bg-black text-white z-40 transition-transform duration-500 ease-in-out ${
        isMenuOpen ? "translate-y-0" : "-translate-y-full"
      } md:hidden h-screen flex flex-col items-center justify-center space-y-6`}>
        {/* Close Button */}
        <button onClick={toggleMenu} className="absolute top-5 right-5 p-2">
          <svg className="w-8 h-8" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <ul className="flex flex-col items-center space-y-6">
        <img src="logo/logo.webp" className="h-16 mb-12" alt="Asset Avenue" />
          <li><a href="#" className="block text-lg font-bold hover:text-[#3FAC55]">SEED SALE</a></li>
          <li><a href="#" className="block text-lg font-bold hover:text-[#3FAC55]">HOME</a></li>
          <li><a href="#" className="block text-lg font-bold hover:text-[#3FAC55]">PASSIVE INCOME ASSET</a></li>
          <li><a href="#" className="block text-lg font-bold hover:text-[#3FAC55]">INVESTOR RESALE ASSET</a></li>
          <li><a href="#" className="block text-lg font-bold hover:text-[#3FAC55]">MY HOUSE</a></li>
          <li><a href="#" className="block text-lg font-bold hover:text-[#3FAC55]">STAKING</a></li>
          <li><a href="#" className="block text-lg font-bold hover:text-[#3FAC55]">CONTACT US</a></li>
          <li><a href="#" className="block text-lg font-bold hover:text-[#3FAC55]">DASHBOARD</a></li>
          <li><a href="#" className="block text-lg font-bold hover:text-[#3FAC55]">DAO</a></li>
          <li>
            <button
              type="button"
              className="text-white bg-[#3FAC55] hover:bg-[#11823B] font-medium rounded-lg text-lg px-6 py-2 font-bold "
            >
              CONNECT WALLET
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
