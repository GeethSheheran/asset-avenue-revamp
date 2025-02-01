import React from "react";

const Footer = () => {
  return (
    <footer className="flex w-full flex-col justify-between text-white gap-y-10 z-10 bg-black px-24 pt-10 pb-20 sm:flex-row">
      {/* Logo & Address Section */}
      <div className="flex w-full flex-col items-center sm:w-fit text-white">
        <img src="logo/logo.webp" alt="logo" className="mb-2 w-36" />
        <p className="mb-px text-xs">Asset Avenue Pille tn 7/5-13</p>
        <p className="mb-px text-xs">10135 Kesklinna linnaosa</p>
        <p className="mb-px text-xs">Tallin, Harju maakond</p>
        <p className="mb-px text-xs">Estonia</p>
      </div>

      {/* Social Links & Legal */}
      <div className="flex gap-x-10">
        <div className="flex flex-col">
          <div className="mb-2 flex gap-x-2">
            <a href="https://t.co/0K1F4zG6md" target="_blank" rel="noopener noreferrer">
              <img src="logo/telegram.svg" alt="telegram" className="w-6" />
            </a>
            <a href="https://x.com/asset_avenue" target="_blank" rel="noopener noreferrer">
              <img src="logo/twitter.svg" alt="twitter" className="w-6" />
            </a>
          </div>
          <a href="https://assetavenue.gitbook.io/presale-whitepaper" target="_blank" rel="noopener noreferrer" className="mb-1 text-xs hover:text-[#3FAC55]">
            Whitepaper
          </a>
          <a href="https://assetavenue.gitbook.io/legaltermsprivacysettings" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-[#3FAC55]">
            Privacy and Legal Terms
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col">
          <h3 className="mb-2 font-semibold">Navigation</h3>
          {[
            { name: "Home", link: "https://assetavenue.capital" },
            { name: "Passive Income Assets", link: "https://assetavenue.capital/market" },
            { name: "Investor Resale Hub", link: "https://assetavenue.capital/resale" },
            { name: "My House", link: "https://assetavenue.capital/house" },
            { name: "Staking", link: "https://assetavenue.capital/stake" },
            { name: "Contact Us", link: "https://assetavenue.capital/contact" },
            { name: "Dashboard", link: "https://dashboard.assetavenue.capital" },
            { name: "DAO", link: "https://assetavenue.capital/dao" },
          ].map((item) => (
            <a key={item.name} href={item.link} target="_blank" rel="noopener noreferrer" className="mb-1 text-xs hover:text-[#3FAC55] transition">
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
