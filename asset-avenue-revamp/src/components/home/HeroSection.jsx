import React, { useState, useEffect } from "react";
import ImageSlider from "./ImageSlider";
import TokenPresalePopup from "./presalePopup";
import PresalePopup from "./presalePopup";
import WalletPopup from "./walletPop";
import { motion } from "framer-motion";
import Buywithcard from "./buywithcard";
import { getPresaleInfo, getStakingInfo } from "../../utils/presale.ts";
import { useWallet } from "@solana/wallet-adapter-react";
import { IoMdClose } from "react-icons/io";

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const { publicKey, connected } = useWallet();

  const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal visibility
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);
  const [isCardModal2Open, setIsCardModal2Open] = useState(false);
  const [progress, setProgress] = useState(0);
  const [totalSOLRaised, setTotalSOLRaised] = useState(0.000414747); // Initial SOL raised value
  const SOL_PRICE = 210; // Fixed SOL price in USD
  const [presaleData, setPresaleData] = useState("");
  const [stakingData, setStakingData] = useState("");

  useEffect(() => {
    if (connected) {
      fetchPresaleData();
    }
  }, [connected]);

  const fetchPresaleData = async () => {
    const data = await getPresaleInfo(publicKey);
    const stakingData = await getStakingInfo(publicKey);
    console.log(Number(data.solAmountRaised));
    if (data) {
      setPresaleData(data);
    }
    if (stakingData) {
      setStakingData(stakingData);
    }
    console.log(stakingData);
  };

  const defaultText = {
    presaleButton: "BUY $AAV TOKEN PRESALE!",
    priceInfo: "Price will increase gradually.",
    priceInfo2: "304% Staking Rewards",
    countdown: {
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
    },
    minBuy: "Min buy: 0.5 SOL",
    maxBuy: "Max buy: 200 SOL",
    totalSOL: "TOTAL USD RAISED: 0,000414747 SOL",
    price: "1 AAV = 0.000368664 SOL",
    buyWithCard: "Buy With Card",
    buyWithCrypto: "Buy With Crypto",
    dontHaveWallet: "Don't have a wallet?",
  };

  // Target date for the countdown (set this to your desired date)
  const targetDate = new Date("2025-12-31T00:00:00Z");

  // Function to calculate the time remaining
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
      // Handle the case when the countdown has finished
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    }
  };

  // Update the countdown every second
  useEffect(() => {
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  // Calculate progress based on total SOL raised
  useEffect(() => {
    // Simulate fetching total SOL raised (replace with real logic)
    const fetchTotalSOLRaised = async () => {
      // Example: Fetch total SOL raised from an API or contract
      // const response = await fetchTotalSOLFromAPI();
      // setTotalSOLRaised(response.totalSOL);

      // For now, we'll use a static value or increment it for demonstration
      setTotalSOLRaised(Number(presaleData.solAmountRaised) / 1e9); // Replace with dynamic value
    };

    fetchTotalSOLRaised();
  }, []);

  // Calculate progress bar value based on total SOL raised
  useEffect(async () => {
    const presaleData = await getPresaleInfo(publicKey);
    const maxSOL = 10; // Example: Maximum SOL to be raised (adjust as needed)
    let totalRaised =
      Number(Number(presaleData.solAmountRaised) / 1e9) +
      Number(Number(presaleData.usdcAmountRaised) / 1e6 / SOL_PRICE);
    console.log("totalRaised", totalRaised);
    const progressValue = (totalRaised / maxSOL) * 100;

    const stakingData = await getStakingInfo(publicKey);

    setProgress(progressValue);
    setStakingData(stakingData);
    setPresaleData(presaleData);
  }, []);

  // Function to handle modal close
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Function to handle modal open
  const handleOpenModal = () => {
    if (!connected) {
      alert("Please connect your wallet first.");
      return;
    }
    setIsModalOpen(true);
  };

  const handleOpenCardModal = () => setIsCardModalOpen(true);
  const handleCloseCardModal = () => setIsCardModalOpen(false);

  const handleOpenCardModal2 = () => setIsCardModal2Open(true);
  const handleCloseCardModal2 = () => setIsCardModal2Open(false);

  return (
    <div className="relative bg-black text-white min-h-screen flex flex-col md:flex-row items-center justify-center py-16 px-4 md:px-24 overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
        autoPlay
        loop
        muted
      >
        <source src="video/bars.mp4" type="video/mp4" />
      </video>

      <img
        src="hero/left hero.png"
        alt="Image Below Video"
        className="absolute top-2 left-1/3 transform -translate-x-1/2 mb-8 w-[90%] sm:w-[80%] md:w-4/5 z-20 "
      />

      <img
        src="hero/token.png"
        alt="Center Graphic"
        className="absolute top-[44%] right-[42%] transform -translate-x-1/2 -translate-y-1/2 z-10 w-3/5 sm:w-2/5 md:w-[180px] hidden sm:block animate-floating"
      />

      <img
        src="hero/token.png"
        alt="Center Graphic"
        className="absolute top-[74%] right-[40%] transform -translate-x-1/2 -translate-y-1/2 z-10 w-1/2 sm:w-2/5 md:w-[70px] hidden sm:block animate-floating"
      />
      <img
        src="hero/token.png"
        alt="Center Graphic"
        className="absolute top-[30%] right-[38%] transform -translate-x-1/2 -translate-y-1/2 z-10 w-1/2 sm:w-2/5 md:w-[70px] hidden sm:block animate-floating"
      />
      <img
        src="hero/side1.png"
        alt="Center Graphic"
        className="absolute top-[0%] right-[0%] z-10 w-1/2 h-100vh sm:w-2/5 md:w-[auto] hidden sm:block"
      />
      <img
        src="hero/side2.png"
        alt="Center Graphic"
        className="absolute top-[0%] left-[0%] z-10 w-1/2 h-100vh sm:w-2/5 md:w-[auto] hidden sm:block"
      />

      <div className="relative z-20 flex flex-col md:flex-row w-full max-w-7xl">
        <div className="w-full md:w-2/3 mt-16 items-center justify-center space-y-6 text-center md:pt-28 md:text-left">
          <h1 className="text-[40px] font-helvetica sm:text-6xl md:text-[64px] font-bold">
            Asset Avenue <br />
            <span className="text-[#22C55E] md:text-[64px]">Presale</span>
          </h1>
          <p className="text-lg md:text-[20px] font-light">
            Redefining Real Estate with Blockchain & Ai
          </p>
          <div className="flex items-center justify-center md:justify-start space-x-8 md:pt-16">
            <ImageSlider />
          </div>
        </div>

        <div className="w-full md:w-1/3 mt-0 md:mt-16  ">
          <div className="flex justify-center items-center ">
            <p className="text-sm md:text-[24px] text-center shadow-[0_2px_85px_#56C46C9C]  bg-gradient-to-l from-[#B8934D] to-[#FBE279] p-3 w-4/5 text-white italic font-bold rounded-[20px] rounded-tl-none inline-block mb-4 z-10 relative ">
              {Math.floor(
                (50_000 / (Number(stakingData?.totalTokensStaked) / 1e5)) * 100
              )}{" "}
              % Staking Rewards
            </p>
          </div>
          <div className="bg-gradient-to-l from-[#05350F] to-[#05350F] p-8 rounded-[36px] rounded-tl-none shadow-[0_4px_145px_0_#56C46C9C] relative md:ml-auto">
            <img
              src="hero/widget.png"
              alt="Card Background"
              className="absolute top-0 right-0 w-full h-full object-cover rounded-[36px] z-0"
            />

            <h2 className="text-3xl md:text-[32px] text-center font-helvetica font-semibold mb-4  z-10 relative">
              BUY $AAV
              <br />
              TOKEN PRESALE!
            </h2>

            <div className="text-center font-medium mb-6 border border-[#22C55E] border-[4px] rounded-[30px] rounded-tl-none pb-2 z-10 relative">
              <p className="text-sm md:text-[16px] text-center bg-gradient-to-l from-[#B8934D] to-[#FBE279] py-2 w-full text-black rounded-[20px] rounded-tl-none inline-block mb-0 z-10 relative">
                {defaultText.priceInfo}
              </p>
              <div className="grid grid-cols-4  gap-4 px-4 ">
                <div>
                  <span className="font-thin text-[12px]">
                    {defaultText.countdown.days}
                  </span>
                  <p className="text-2xl font-bold">{timeLeft.days}</p>
                </div>
                <div>
                  <span className="font-thin text-[12px]">
                    {defaultText.countdown.hours}
                  </span>
                  <p className="text-2xl font-bold">{timeLeft.hours}</p>
                </div>
                <div>
                  <span className="font-thin text-[12px]">
                    {defaultText.countdown.minutes}
                  </span>
                  <p className="text-2xl font-bold">{timeLeft.minutes}</p>
                </div>

                <div>
                  <span className="font-thin text-[12px]">
                    {defaultText.countdown.seconds}
                  </span>
                  <p className="text-2xl font-bold">{timeLeft.seconds}</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center text-[16px] font-bold md:text-sm mb-3 z-10 relative">
              <span>
                TOTAL SOL RAISED: {Number(presaleData.solAmountRaised) / 1e9}{" "}
                SOL ($
                {(
                  (Number(presaleData.solAmountRaised) / 1e9) *
                  SOL_PRICE
                ).toFixed(2)}
                )
              </span>
            </div>
            <div className="flex justify-center text-[16px] font-bold md:text-sm mb-3 z-10 relative">
              <span>
                TOTAL USDC RAISED: {Number(presaleData.usdcAmountRaised) / 1e6}{" "}
                USDC
              </span>
            </div>
            <div className="relative w-full bg-white rounded-full h-2.5 mb-3">
              <div
                className="bg-[#22C55E] h-2.5 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-[16px] md:text-sm mb-3 z-10 relative">
              <span>{defaultText.minBuy}</span>
              <span>{defaultText.maxBuy}</span>
            </div>
            <div className="flex justify-between text-[16px] md:text-sm mb-3 z-10 relative">
              <span>Min buy: 100 USDC</span>
              <span>Max buy: 20,000 USDC</span>
            </div>

            <div className="relative flex items-center justify-center mb-3 z-10">
              <hr className="absolute w-1/6 left-0 border-t border-white" />
              <p className="z-10 px-2 text-[16px] md:text-sm">
                {"1 AAV = " +
                  Number(presaleData?.pricePerTokenInSol) / 1e9 +
                  " SOL"}
              </p>

              <hr className="absolute w-1/6 right-0 border-t border-white" />
            </div>
            <div className="relative flex items-center justify-center mb-3 z-10">
              <hr className="absolute w-1/6 left-0 border-t border-white" />
              <p className="z-10 px-2 text-xs md:text-[12px]">

              {"1 AAV = " + Number(presaleData?.pricePerTokenInUsdc)/1e6 + " USDC" }
               </p>
              
              <hr className="absolute w-1/6 right-0 border-t border-white" />
            </div>

            <div className="relative pt-4 flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4 z-10 relative">
              <div className="relative w-full  md:w-1/2">
                <img
                  src="/hero/1.png"
                  alt="Visa"
                  className="absolute top-[-30px] -left-10 -md:left-[100px] right-0 w-full h-[30px] object-contain z-0 hidden sm:block"
                />
                <button
                  onClick={handleOpenCardModal2} // Trigger modal on click
                  className="relative uppercase z-10 font-bold md:text-[11px] bg-[#3FAC55] hover:bg-[#11823B] text-white py-3 px-4 rounded-[10px] w-full"
                >
                  {defaultText.buyWithCard}
                </button>
              </div>
              <div className="relative w-full md:w-1/2">
                <img
                  src="hero/3.png"
                  alt="Crypto"
                  className="absolute top-[-25px] md:left-[40px]  left-10 right-0 w-full h-[30px] object-contain z-0 hidden sm:block"
                />
                <button
                  onClick={handleOpenModal} // Trigger modal on click
                  className="relative uppercase z-10  md:text-[11px] text-black font-bold py-3 px-6 rounded-[10px] w-full bg-gradient-to-br from-[#958648] to-[#FBE279] hover:opacity-80"
                  style={{
                    background:
                      "linear-gradient(212.98deg, #958648 -92.97%, #FBE279 187.71%)",
                  }}
                >
                  {defaultText.buyWithCrypto}
                </button>
              </div>
            </div>

            <p
              onClick={handleOpenCardModal} // Trigger modal on click
              className="text-[12px] text-center underline font-thin mt-6 z-10 relative cursor-pointer"
            >
              {defaultText.dontHaveWallet}
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
          </div>
        </div>
      </div>

      {/* Modal Component */}
      {isModalOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={handleCloseModal} // Close modal on background click
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="p-8 rounded-xl w-full md:w-1/3 relative flex flex-col"
            onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside the modal
          >
            {/* Close button */}
            <button
              onClick={handleCloseModal}
              className="bg-green-500 rounded-full p-2 self-end -me-10 font-base text-xl z-10 transform transition duration-300 ease-in-out hover:rotate-180"
            >
              <IoMdClose className="h-5 w-5 text-white" />
            </button>

            <PresalePopup
              onClose={handleCloseModal}
              isWalletPopupOpen={isCardModalOpen}
              setIsWalletPopupOpen={setIsCardModalOpen}
              isCardPopupOpen={isCardModal2Open}
              setIsCardPopupOpen={setIsCardModal2Open}
            />
            <div className="flex justify-center space-x-4 mt-4">
              {/* You can add other content here if necessary */}
            </div>
          </motion.div>
        </div>
      )}

      {isCardModalOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={handleCloseCardModal}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className=" p-8 rounded-xl w-full md:w-1/3 flex flex-col"
            onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside the modal
          >
            <button
              onClick={handleCloseCardModal}
              className="bg-green-500 rounded-full p-2 self-end -me-10 font-base text-xl z-10 transform transition duration-300 ease-in-out hover:rotate-180"
            >
              <IoMdClose className="h-5 w-5 text-white" />
            </button>
            <WalletPopup />
          </motion.div>
        </div>
      )}

      {isCardModal2Open && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={handleCloseCardModal2}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="p-8 rounded-xl w-full md:w-1/3 flex flex-col"
            onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside the modal
          >
            <button
              onClick={handleCloseCardModal2}
              className="bg-green-500 rounded-full p-2 self-end -me-10 font-base text-xl z-10 transform transition duration-300 ease-in-out hover:rotate-180"
            >
              <IoMdClose className="h-5 w-5 text-white" />
            </button>
            <Buywithcard
              onClose={handleCloseCardModal2}
              isWalletPopupOpen={isCardModalOpen}
              setIsWalletPopupOpen={setIsCardModalOpen}
              isCryptoOpen={isModalOpen}
              setIsCryptoOpen={setIsModalOpen}
            />
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
