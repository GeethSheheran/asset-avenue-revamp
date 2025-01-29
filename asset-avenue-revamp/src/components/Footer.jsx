import React from "react";

const Footer = () => {
  return (
    <footer className="flex w-full flex-col justify-between text-white gap-y-10 z-10 bg-black px-24 pt-10 pb-20 sm:flex-row">
      <div className="flex w-full flex-col items-center sm:w-fit text-white">
        <img src="logo/logo.webp" alt="logo" className="mb-2 w-36" />
        <p className="mb-px text-xs">Asset Avenue Pille tn 7/5-13</p>
        <p className="mb-px text-xs">10135 Kesklinna linnaosa</p>
        <p className="mb-px text-xs">Tallin, Harju maakond</p>
        <p className="mb-px text-xs">Estonia</p>
      </div>
      <div className="flex gap-x-10">
        <div className="flex flex-col">
          <div className="mb-2 flex gap-x-2">
            <img src="logo/telegram.svg" alt="telegram" className="w-6" />
            <img src="logo/twitter.svg" alt="twitter" className="w-6" />
          </div>
          <p className="mb-1 text-xs">Whitepaper</p>
          <p className="text-xs">Privacy and Legal Terms</p>
        </div>
        <div className="flex flex-col">
          <h3 className="mb-2 font-semibold">Navigation</h3>
          <p className="mb-1 text-xs">Home</p>
          <p className="mb-1 text-xs">Passive Income Assets</p>
          <p className="mb-1 text-xs">Investor Resale Hub</p>
          <p className="mb-1 text-xs">My House</p>
          <p className="mb-1 text-xs">Staking</p>
          <p className="mb-1 text-xs">Contact Us</p>
          <p className="mb-1 text-xs">Dashboard</p>
          <p className="mb-1 text-xs">DAO</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
