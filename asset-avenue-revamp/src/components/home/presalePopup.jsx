/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import {  getPresaleInfo } from "../../utils/presale.ts";
import { getStakingInfo } from "../../utils/presale.ts";
import PresalePopupForm from "./presalePopupForm'.jsx";

const PresalePopup = ({
  translations,
  onClose,
  isWalletPopupOpen,
  setIsWalletPopupOpen,
  isCardPopupOpen,
  setIsCardPopupOpen,
}) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [progress, setProgress] = useState(0);
  const { publicKey, connected, wallet } = useWallet();
  const [presaleData, setPresaleData] = useState("");
  const SOL_PRICE = 210;
  const [stakingData, setStakingData] = useState("");

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
      const maxUsd = 10_000;
      let totalRaised =
        Number(Number(presaleData.solAmountRaised) / 1e9) * SOL_PRICE +
        Number(Number(presaleData.usdcAmountRaised) / 1e6);
      const progressValue = (totalRaised / maxUsd) * 100;
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
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
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
    onClose();
  };

  const openWalletPopup = () => {
    setIsWalletPopupOpen(true);
    onClose();
  };


  return (
    <div className="w-full md:w-full rounded-tl-none bg-gradient-to-l from-[#05350F] to-[#05350F] px-8 py-6 rounded-[36px] shadow-[0_4px_145px_0_#56C46C9C] mt-0 relative md:ml-auto">
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
          {((Number(presaleData.solAmountRaised) / 1e9) * SOL_PRICE).toFixed(2)}
          )
        </span>
      </div>

      <div className="relative flex items-center justify-center mb-1 z-10">
        <hr className="absolute w-1/6 left-0 border-t border-white" />
        <p className="z-10 px-2 text-xs md:text-[12px]">
          {"1 AAV = " + Number(presaleData?.pricePerTokenInSol) / 1e9 + " SOL"}
        </p>
        <hr className="absolute w-1/6 right-0 border-t border-white" />
      </div>

      <PresalePopupForm />

      <p
        onClick={openWalletPopup}
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
        Want to pay with Card Instead?{" "}
        <span onClick={openCardPopup} className="cursor-pointer text-[#B8934D]">
          CLICK HERE
        </span>
      </p>
    </div>
  );
};

export default PresalePopup;
