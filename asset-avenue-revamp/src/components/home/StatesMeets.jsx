import React from "react";

const StatesMeets = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 lg:px-24 gap-4 py-12 bg-black text-white relative">
      {/* Background Radial Gradient */}
      <div className="absolute left-1/6 top-1/2 -translate-y-1/2 lg:w-1/2 w-full h-[400px] lg:h-[700px] bg-[#3FAC55] rounded-full blur-3xl opacity-20"></div>

      {/* Left Column */}
      <div className="relative lg:w-1/2 w-full mb-8 lg:mb-0 flex flex-col items-center lg:items-start">
        <h1 className="text-4xl font-bold mb-4 font-helvetica text-center lg:text-left">
          Asset Avenue <span className="text-[#16A34A]">DAO</span>
        </h1>
        <p className="text-lg mb-6 text-center lg:text-left">
          Facilitating worldwide real estate transactions with cryptocurrency,
          ensuring the highest level of security and complete transparency in
          ownership and investment opportunities through blockchain technology.
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg text-center lg:text-left">
          <li>NFT Property Rights</li>
          <li>Staking for Governance</li>
          <li>Smart Contract Payouts</li>
          <li>Decentralized Decisions</li>
          <li>Legal Compliance</li>
        </ul>
        <button className="mt-6 px-6 py-2 bg-[#16A34A] text-white font-semibold rounded-[10px] hover:bg-green-600 transition self-center lg:self-end">
          ACCESS DAO
        </button>
      </div>

      {/* Right Column */}
      <div className="lg:w-1/2 w-full flex justify-center">
        <video
          src="/public/world.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full aspect-square rounded-lg shadow-lg mb-4"
        />
      </div>
    </div>
  );
};

export default StatesMeets;
