/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { investSol, getPresaleInfo } from "../../utils/presale.ts";
import { buyAndStakeTokens, getStakingInfo } from "../../utils/presale.ts";
import { toast } from "react-toastify";
import TransactionHash from "./alert/TransactionHash.jsx";

const PresalePopupForm = ({ translations }) => {
  const { publicKey, connected, wallet } = useWallet();
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("SOL");
  const [bestReceive, setBestReceive] = useState(null);
  const [error, setError] = useState("");
  const [presaleData, setPresaleData] = useState("");
  const [isSuccessShow, setIsSuccessShow] = useState(false);
  const [stakingData, setStakingData] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleBuy = async () => {
    if (!connected) {
      toast.error("Please connect your wallet first.");
      return;
    }
    if (currency == "SOL") {
      if (!amount || parseFloat(amount) < 0.5 || parseFloat(amount) > 200) {
        toast.error("Investment must be between 0.5 SOL and 200 SOL.");
        return;
      }
    } else {
      if (!amount || parseFloat(amount) < 100 || parseFloat(amount) > 20_000) {
        toast.error("Investment must be between 100 USDC and 20,000 USDC.");
        return;
      }
    }
    const tx = await investSol(
      publicKey,
      wallet.adapter,
      parseFloat(amount),
      currency
    );
    if (tx) {
      setIsSuccessShow(true);
    } else {
      toast.error("Investment failed.");
    }
  };

  const handleBuyAndStake = async () => {
    if (!connected) {
      toast.error("Please connect your wallet first.");
      return;
    }
    if (currency == "SOL") {
      if (!amount || parseFloat(amount) < 0.5 || parseFloat(amount) > 200) {
        toast.error("Investment must be between 0.5 SOL and 200 SOL.");
        return;
      }
    } else {
      if (!amount || parseFloat(amount) < 100 || parseFloat(amount) > 20_000) {
        toast.error("Investment must be between 100 USDC and 20,000 USDC.");
        return;
      }
    }
    const tx = await buyAndStakeTokens(
      publicKey,
      wallet.adapter,
      amount,
      currency
    );
    if (tx) {
      setIsSuccessShow(true);
    } else {
      toast.error("Staking failed.");
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
      setPresaleData(presaleData);
      setStakingData(stakingData);
    };
    fetchData();
  }, []);

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
    <div className="relative pt-4 flex flex-col space-y-4 z-10">
      {isSuccessShow && (
        <TransactionHash
          onClose={() => setIsSuccessShow(false)}
          rewards={Math.floor(
            (5_000_000 / (Number(stakingData?.totalTokensStaked) / 1e5)) * 100
          )}
        />
      )}

      <div className="flex items-center space-x-2">
        <input
          type="number"
          placeholder={`${currency} amount to spend`}
          className="p-2 rounded-[10px] text-black text-sm border focus:border-green-900 focus:ring-1 focus:ring-green-500 outline-none flex-1"
          value={amount}
          onChange={(e) => setAmountAndBestRecieve(e)}
        />

        <div className="relative w-[100px]">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="p-2 w-[100px] rounded-[10px] border text-black text-sm bg-white focus:border-green-900 focus:ring-1 focus:ring-green-500 outline-none flex items-center"
          >
            <img
              src={`/logo/${currency === "SOL" ? "solana" : "usdc"}.png`}
              alt="SOL"
              className="w-5 h-5 mr-2"
            />
            {currency}
            <span className="ml-4">▼</span>
          </button>
          {isDropdownOpen && (
            <ul className="absolute mt-1 w-full bg-white border text-black text-sm rounded-[10px] shadow-lg z-20">
              <li
                className="p-2 hover:bg-gray-100 rounded-[10px] hover:rounded-b-none text-sm cursor-pointer flex items-center"
                onClick={() => setCurrencyState("SOL")}
              >
                <img
                  src="/logo/solana.png"
                  alt="SOL"
                  className="w-5 h-5 mr-2"
                />
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
          placeholder="AAV you will receive"
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
        {"BUY & STAKE FOR " +
          Math.floor(
            (5_000_000 / (Number(stakingData?.totalTokensStaked) / 1e5)) * 100
          ) +
          " % Rewards" || "STAKE FOR 509% REWARDS"}
      </button>

      <button
        onClick={handleBuy}
        className="uppercase z-10 font-bold bg-[#3FAC55] text-[12px] hover:bg-[#11823B] text-white py-3 px-4 rounded-[10px] w-full"
      >
        {translations?.buyWithCard || "BUY $AAV"}
      </button>
    </div>
  );
};

export default PresalePopupForm;
