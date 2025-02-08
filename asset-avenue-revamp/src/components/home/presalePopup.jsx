import React, { useState, useEffect } from "react";
import WalletPopup from "./walletPop";
import { motion } from "framer-motion";
import Buywithcard from "./buywithcard";
import { useWallet } from "@solana/wallet-adapter-react";
import { investSol, getPresaleInfo } from "../../utils/presale.ts";
import { buyAndStakeTokens, getStakingInfo } from "../../utils/presale.ts";

const PresalePopup = ({ translations, onClose }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [progress, setProgress] = useState(0);
  const [isWalletPopupOpen, setIsWalletPopupOpen] = useState(false);
  const { publicKey, connected, wallet } = useWallet();
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("SOL");
  const [startTime, setStartTime] = useState("");
  const [isCardPopupOpen, setIsCardPopupOpen] = useState(false);
  const [bestReceive, setBestReceive] = useState(0);
  const [error, setError] = useState("");
  const [presaleData, setPresaleData] = useState("");
  const SOL_PRICE = 210;
  const [stakingData, setStakingData] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleBuy = async () => {
    if (!connected) {
      alert("Please connect your wallet first.");
      return;
    }
    if (currency == "SOL") {
      if (!amount || parseFloat(amount) < 0.5 || parseFloat(amount) > 200) {
        alert("Investment must be between 0.5 SOL and 200 SOL.");
        return;
      }
    } else {
      if (!amount || parseFloat(amount) < 100 || parseFloat(amount) > 20_000) {
        alert("Investment must be between 100 USDC and 20,000 USDC.");
        return;
      }
    }
    const tx = await investSol(publicKey, wallet.adapter, parseFloat(amount), currency);
    if (tx) {
      alert(`Investment successful! Transaction ID: ${tx}`);
    } else {
      alert("Investment failed.");
    }
  };

  const handleBuyAndStake = async () => {
    if (!connected) {
      alert("Please connect your wallet first.");
      return;
    }
    if (currency == "SOL") {
      if (!amount || parseFloat(amount) < 0.5 || parseFloat(amount) > 200) {
        alert("Investment must be between 0.5 SOL and 200 SOL.");
        return;
      }
    } else {
      if (!amount || parseFloat(amount) < 100 || parseFloat(amount) > 20_000) {
        alert("Investment must be between 100 USDC and 20,000 USDC.");
        return;
      }
    }
    const tx = await buyAndStakeTokens(publicKey, wallet.adapter, amount, currency);
    if (tx) {
      alert(`Staking successful! Transaction ID: ${tx}`);
    } else {
      alert("Staking failed.");
    }
  };

  useEffect(() => {
    if (connected) {
      fetchPresaleData();
    }
  }, [connected]);

  const fetchPresaleData = async () => {
    const data = await getPresaleInfo(publicKey);
    const stakingData = await getStakingInfo(publicKey);
    if (data) {
      setPresaleData(data);
    }
    if (stakingData) {
      setStakingData(stakingData);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const presaleData = await getPresaleInfo(publicKey);
      const stakingData = await getStakingInfo(publicKey);
      const maxSOL = 10;
      let totalRaised = Number(Number(presaleData.solAmountRaised) / 1e9) + Number(Number(presaleData.usdcAmountRaised) / 1e6 / SOL_PRICE);
      const progressValue = (totalRaised / maxSOL) * 100;
      setProgress(progressValue);
      setPresaleData(presaleData);
      setStakingData(stakingData);
    };
    fetchData();
  }, []);

  const targetDate = new Date("2025-12-31T00:00:00Z");

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;
    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      setTimeLeft({ days, hours, minutes, seconds });
    } else {
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    }
  };

  useEffect(() => {
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, []);

  const openCardPopup = () => {
    setIsCardPopupOpen(true);
  };

  const setAmountAndBestRecieve = (e) => {
    setAmount(e.target.value);
    let rate = 0;
    if (currency == "SOL") {
      rate = Number(presaleData?.pricePerTokenInSol) / 1e9;
    } else {
      rate = Number(presaleData?.pricePerTokenInUsdc) / 1e6;
    }
    setBestReceive(Number(e.target.value) / rate);
  };

  const setCurrencyState = (currency) => {
    setCurrency(currency);
    setBestReceive(0);
    setAmount(0);
    setIsDropdownOpen(false);
  };

  return (
    <>
      {!isWalletPopupOpen && !isCardPopupOpen ? (
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
              TOTAL SOL RAISED: {Number(presaleData.solAmountRaised) / 1e9} SOL ($
              {(Number(presaleData.solAmountRaised) / 1e9 * SOL_PRICE).toFixed(2)})
            </span>
          </div>

          <div className="relative flex items-center justify-center mb-1 z-10">
            <hr className="absolute w-1/6 left-0 border-t border-white" />
            <p className="z-10 px-2 text-xs md:text-[12px]">
              {"1 AAV = " + Number(presaleData?.pricePerTokenInSol) / 1e9 + " SOL"}
            </p>
            <hr className="absolute w-1/6 right-0 border-t border-white" />
          </div>

          <div className="relative pt-4 flex flex-col space-y-4 z-10">
            <div className="flex items-center space-x-2">
              <input
                type="number"
                placeholder={`${currency} Amount to spend`}
                className="p-2 rounded-[10px] text-black text-sm border focus:border-green-900 focus:ring-1 focus:ring-green-500 outline-none flex-1"
                value={amount}
                onChange={(e) => setAmountAndBestRecieve(e)}
              />

              <div className="relative w-[100px]">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="p-2 w-[100px] rounded-[10px] border text-black text-sm bg-white focus:border-green-900 focus:ring-1 focus:ring-green-500 outline-none flex items-center"
                >
                  {currency}
                  <span className="ml-8">▼</span>
                </button>
                {isDropdownOpen && (
                  <ul className="absolute mt-1 w-full bg-white border text-black text-sm rounded-[10px] shadow-lg z-20">
                    <li
                      className="p-2 hover:bg-gray-100 rounded-[10px] hover:rounded-b-none text-sm cursor-pointer flex items-center"
                      onClick={() => setCurrencyState("SOL")}
                    >
                      <img src="/logo/solana.png" alt="SOL" className="w-5 h-5 mr-2" />
                      SOL
                    </li>
                    <li
                      className="p-2 hover:bg-gray-100 cursor-pointer rounded-[10px] hover:rounded-t-none text-sm flex items-center"
                      onClick={() => setCurrencyState("USD")}
                    >
                      <img src="/logo/usdc.png" alt="USDC" className="w-5 h-5 mr-2" />
                      USDC
                    </li>
                  </ul>
                )}
              </div>
            </div>

            <div className="relative">
             
              <input
                type="number"
                placeholder="Best you receive"
                className="p-2 rounded-[10px] text-black text-sm border focus:border-green-900 focus:ring-1 focus:ring-green-500 outline-none w-full"
                value={bestReceive}
                readOnly
              />
               <img
                src="/logo/asset.png" // Replace with your token image path
                alt="Token"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5"
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              onClick={handleBuyAndStake}
              className="uppercase z-10 text-black text-[12px] font-bold py-3 px-6 rounded-[10px] w-full bg-gradient-to-br from-[#958648] to-[#FBE279] hover:opacity-80 disabled:opacity-50"
            >
              {"STAKE FOR " + Math.floor(50_000 / (Number(stakingData?.totalTokensStaked) / 1e5) * 100) + " % Rewards" || "STAKE FOR 509% REWARDS"}
            </button>

            <button
              onClick={handleBuy}
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
            <span onClick={openCardPopup} className="cursor-pointer text-[#B8934D]">
              CLICK HERE
            </span>
          </p>
        </div>
      ) : isWalletPopupOpen ? (
        <div
          className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-80 z-50"
          onClick={() => setIsWalletPopupOpen(false)}
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
              className="absolute top-[10%] right-1/3 text-white font-base text-xl hover:rotate-180 transform transition duration-300 ease-in-out"
            >
              X
            </button>
            <WalletPopup onClose={() => setIsWalletPopupOpen(false)} />
          </motion.div>
        </div>
      ) : (
        <div
          className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-80 z-50"
          onClick={() => setIsCardPopupOpen(false)}
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
              onClick={() => setIsCardPopupOpen(false)}
              className="absolute top-[10%] right-1/3 text-white font-base text-xl hover:rotate-180 transform transition duration-300 ease-in-out"
            >
              X
            </button>
            <Buywithcard onClose={() => setIsCardPopupOpen(false)} />
          </motion.div>
        </div>
      )}
    </>
  );
};

export default PresalePopup;