import React from "react";

const StatesMeets = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-24 gap-4 py-12 bg-black text-white">
      {/* Left Column */}
      <div className="relative lg:w-1/2 mb-8 lg:mb-0 flex flex-col items-start">
        <div className="absolute inset-0 flex justify-center items-center">
          <img
            src="/Ellipse.png"
            alt="Background Left"
            className="absolute left-40 w-12vw opacity-100"
          />
        </div>
        <h1 className="text-4xl font-bold mb-4">
          Asset Avenue <span className="text-[#16A34A]">DAO</span>
        </h1>
        <p className="text-lg mb-6">
          Facilitating worldwide real estate transactions with cryptocurrency,
          ensuring the highest level of security and complete transparency in
          ownership and investment opportunities through blockchain technology.
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>NFT Property Rights</li>
          <li>Staking for Governance</li>
          <li>Smart Contract Payouts</li>
          <li>Decentralized Decisions</li>
          <li>Legal Compliance</li>
        </ul>
        <button className="mt-6 px-6 py-2 bg-[#16A34A] text-white font-semibold rounded-md hover:bg-green-600 transition self-end">
          ACCESS DAO
        </button>
      </div>

      {/* Right Column */}
      <div className="lg:w-1/2 w-full">
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
