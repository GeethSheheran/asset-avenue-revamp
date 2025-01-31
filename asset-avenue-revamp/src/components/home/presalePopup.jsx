import React, { useState, useEffect } from "react";

const PresalePopup = ({ translations, handleOpenModal }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const targetDate = new Date("2025-02-01T00:00:00"); // Example target date for presale end
    const interval = setInterval(() => {
      const currentTime = new Date();
      const diff = targetDate - currentTime;

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setProgress(100);
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });

        const totalDuration = targetDate - new Date("2025-01-01T00:00:00"); // Example presale start date
        const progressPercentage = Math.floor(
          ((currentTime - new Date("2025-01-01T00:00:00")) / totalDuration) *
            100
        );
        setProgress(progressPercentage);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full md:w-full bg-gradient-to-l rounded-tl-none from-[#05350F] to-[#05350F] p-8 rounded-[36px] rounded-tl-none shadow-[0_4px_145px_0_#56C46C9C] mt-0 md:mt-16 relative md:ml-auto">
      <img
        src="hero/widget.png"
        alt="Card Background"
        className="absolute top-0 right-0 w-full h-full object-cover rounded-[36px] z-0"
      />

      <h2 className="text-3xl md:text-[36px] text-center font-helvetica font-semibold mb-4 z-10 relative">
        {translations?.presaleButton || "BUY $AAV TOKEN PRESALE!"}
      </h2>

      {/* Countdown & Price will increase gradually in same border */}
      <div className="border border-[#22C55E] border-[4px] rounded-[25px] rounded-tl-none">
        <p className="text-sm md:text-base text-center bg-gradient-to-l from-[#B8934D] to-[#FBE279] py-2 w-full text-black rounded-[50px] rounded-tl-none inline-block mb-0 z-10 relative">
          {translations?.priceInfo || "Price will increase gradually."}
        </p>
        <div className="grid grid-cols-4 gap-4 text-center font-medium   p-4 z-10 relative">
          <div>
            <span className="font-thin text-sm">
              {translations?.countdown?.days || "Days"}
            </span>
            <p className="text-2xl font-bold">{timeLeft?.days}</p>
          </div>
          <div>
            <span className="font-thin text-sm">
              {translations?.countdown?.hours || "Hours"}
            </span>
            <p className="text-2xl font-bold">{timeLeft?.hours}</p>
          </div>
          <div>
            <span className="font-thin text-sm">
              {translations?.countdown?.minutes || "Minutes"}
            </span>
            <p className="text-2xl font-bold">{timeLeft?.minutes}</p>
          </div>
          <div>
            <span className="font-thin text-sm">
              {translations?.countdown?.seconds || "Seconds"}
            </span>
            <p className="text-2xl font-bold">{timeLeft?.seconds}</p>
          </div>
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

      <div className="flex justify-between text-xs md:text-sm mb-6 z-10 relative">
        <span>{translations?.minBuy || "Min buy: 0.5 SOL"}</span>
        <span>{translations?.maxBuy || "Max buy: 200 SOL"}</span>
      </div>

      <div className="flex justify-center text-xs md:text-sm mb-6 z-10 relative">
        <span>
          {translations?.totalSOL || "TOTAL SOL RAISED: 0,000414747 SOL"}
        </span>
      </div>

      <div className="relative flex items-center justify-center mb-6 z-10">
        <hr className="absolute w-1/6 left-0 border-t border-white" />
        <p className="z-10 px-2 text-xs md:text-sm">
          {translations?.price || "1 AAV = 0.000368664 SOL"}
        </p>
        <hr className="absolute w-1/6 right-0 border-t border-white" />
      </div>

      {/* Buttons in vertical layout */}
      <div className="relative pt-4 flex flex-col justify-between space-y-4 z-10 relative">
        <div className="relative w-full md:w-full">
          <button
            onClick={handleOpenModal} // Trigger modal on click
            className="relative uppercase z-10 md:text-[11px] text-black font-bold py-3 px-6 rounded-[10px] w-full bg-gradient-to-br from-[#958648] to-[#FBE279] hover:opacity-80"
            style={{
              background:
                "linear-gradient(212.98deg, #958648 -92.97%, #FBE279 187.71%)",
            }}
          >
            {translations?.buyWithCrypto || "STAKE FOR 509% REWARDS"}
          </button>
        </div>
        <div className="relative w-full md:w-full">
          <button className="relative uppercase z-10 font-bold md:text-[11px] bg-[#3FAC55] hover:bg-[#11823B] text-white py-3 px-4 rounded-[10px] w-full">
            {translations?.buyWithCard || "bUY $aAV"}
          </button>
        </div>
      </div>

      <p className="text-xs text-center mt-6 z-10 relative">
        {translations?.dontHaveWallet || "Don't have a wallet?"}
      </p>

      <div className="flex justify-center mt-4 z-10 relative">
        <img
          src="/logo/contract.png"
          alt="Auditor Logo"
          className="w-1/3 h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default PresalePopup;
