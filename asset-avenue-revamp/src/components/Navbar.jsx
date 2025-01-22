import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black dark:bg-black fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6">
        <a
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://assetavenue.capital/images/logo.webp"
            className="h-8"
            alt="Asset Avenue"
          />
         
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-white bg-[#3FAC55] hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-[#3FAC55] dark:hover:bg-[#3FAC55] dark:focus:ring-green-800"
          >
            Get started
          </button>
          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-[#3FAC55] focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h5M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between ${
            isMenuOpen ? "block" : "hidden"
          } w-full h-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-800 md:space-x-2 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-black dark:bg-black md:dark:bg-black dark:border-gray-700 text-sm md:text-base text-white">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white text-xs ml-3 bg-[#3FAC55] rounded md:bg-transparent md:text-[#3FAC55] md:p-0 md:dark:text-[#3FAC55]"
                aria-current="page"
              >
                SEED SALE
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white text-xs ml-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#3FAC55] md:p-0 md:dark:hover:text-[#3FAC55] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white text-xs ml-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#3FAC55] md:p-0 md:dark:hover:text-[#3FAC55] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                PASSIVE INCOME ASSET
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white rounded text-xs ml-3 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#3FAC55] md:p-0 md:dark:hover:text-[#3FAC55] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                INVESTOR RESALE ASSET
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white text-xs ml-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#3FAC55] md:p-0 md:dark:hover:text-[#3FAC55] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                MY HOUSE
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white text-xs ml-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#3FAC55] md:p-0 md:dark:hover:text-[#3FAC55] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                STAKING
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white text-xs ml-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#3FAC55] md:p-0 md:dark:hover:text-[#3FAC55] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
               CONTACT US
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white text-xs ml-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#3FAC55] md:p-0 md:dark:hover:text-[#3FAC55] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
               DASHBOARD
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white text-xs ml-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#3FAC55] md:p-0 md:dark:hover:text-[#3FAC55] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
               DAO
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
