import React from "react";

const HowToBuy = () => {
  return (
    <div className="relative bg-black text-white flex flex-col items-center py-40 px-6 md:px-24 overflow-hidden">
      {/* Background Images - Hidden on mobile */}
      <div className="absolute inset-0 flex justify-center items-center sm:block hidden">
        <img
          src="/Ellipse.png"
          alt="Background Left"
          className="absolute left-0 top-16 w-1/3 opacity-100"
        />
        <img
          src="/Ellipse.png"
          alt="Background Right"
          className="absolute right-16 -top-0 w-1/3 opacity-100"
        />
      </div>

      <h1 className="text-3xl font-bold mb-8 text-center">How To Buy</h1>
      <p className="mb-6 text-center">
        The Contract Address:{" "}
        <span className="font-mono">
          0fHK5q6vvBy6r7rBQJhynxJYiUoYzoC5D9XcCkvtS6
        </span>
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full">
        {/* Card 1 */}
        <div className="bg-[#161D27]/80 rounded-2xl border-4 border-[#3FAC55] rounded-tl-none shadow-[0_4px_21px_-2px_#3FAC55] p-6 relative w-full max-w-sm">
          <div
            className="absolute -left-3 top-4 bg-no-repeat bg-cover w-12 h-12"
            style={{ backgroundImage: `url('/lable.png')` }}
          >
            <span className="flex justify-center items-center h-full w-full text-xl font-bold">
              01
            </span>
          </div>
          <div className="flex items-center justify-center mb-4">
            <img src="/phantom.png" alt="Phantom" className="w-12 h-12 mr-4" />
            <img src="/metamask.png" alt="Metamask" className="w-12 h-12" />
          </div>
          <h2 className="text-xl text-center font-semibold mb-2">
            Get a wallet
          </h2>
          <p className="text-sm text-center">
            You’re gonna need a wallet to hold your $AAV. We recommend Phantom
            Solana and Metamask for otherchains.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#161D27]/80 rounded-2xl border-4 border-[#3FAC55] rounded-tl-none shadow-[0_4px_21px_-2px_#3FAC55] p-6 relative w-full max-w-sm">
          <div
            className="absolute -left-3 top-4 bg-no-repeat bg-cover w-12 h-12"
            style={{ backgroundImage: `url('/lable.png')` }}
          >
            <span className="flex justify-center items-center h-full w-full text-xl font-bold">
              02
            </span>
          </div>
          <div className="flex items-center justify-center mb-4">
            <img src="/solana.png" alt="Solana" className="w-12 h-12" />
          </div>
          <h2 className="text-xl text-center font-semibold mb-2">
            Fund Wallet
          </h2>
          <p className="text-sm text-center">
            Buy and send some SOL, ETH, USDT or BNB to pay for your $AAV tokens.
            Send a little extra for gas fees.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#161D27]/80 rounded-2xl border-4 border-[#3FAC55] rounded-tl-none shadow-[0_4px_21px_-2px_#3FAC55] p-6 relative w-full max-w-sm">
          <div
            className="absolute -left-3 top-4 bg-no-repeat bg-cover w-12 h-12"
            style={{ backgroundImage: `url('/lable.png')` }}
          >
            <span className="flex justify-center items-center h-full w-full text-xl font-bold">
              03
            </span>
          </div>
          <div className="flex items-center justify-center mb-4">
            <img src="/stake.png" alt="Stake" className="w-12 h-12" />
          </div>
          <h2 className="text-xl text-center font-semibold mb-2">
            Buy & Stake
          </h2>
          <p className="text-sm text-center">
            To purchase $AAV, connect your wallet to the site, select a payment
            method, and confirm the transaction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowToBuy;
