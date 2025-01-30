import React from "react";
import { motion } from "framer-motion";

const HowToBuy = () => {
  return (
    <div className="relative bg-black text-white flex flex-col items-center pt-24 px-6 md:px-24 overflow-hidden">
      {/* Background Images - Hidden on mobile */}
      {/* <div className="absolute inset-0 flex justify-center items-center sm:block hidden">
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
      </div> */}
      <div className="absolute left-1/6 z-10 top-1/2 -translate-y-1/2 lg:w-full w-full h-[400px] lg:h-[400px] bg-[#3FAC55] rounded-full blur-3xl opacity-20"></div>

      {/* Animated Title */}
      <motion.h1
        className="text-[36px] font-helvetica font-bold mb-2 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        How To Buy
      </motion.h1>

      {/* Animated Paragraph */}
      <motion.p
        className="mb-12 text-center text-[12px] md:text-[20px]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        The Contract Address:{" "}
        <span className="font-mono">
          0fHK5q6vvBy6r7rBQJhynxJYiUoYzoC5D9XcCkvtS6
        </span>
      </motion.p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full">
        {/* Card 1 */}
        <motion.div
          className="bg-[#161D27]/80 rounded-2xl border-4 border-[#3FAC55] rounded-tl-none shadow-[0_4px_21px_-2px_#3FAC55] p-6 py-16 relative w-full max-w-sm"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="absolute -left-3 top-16 bg-no-repeat bg-cover w-12 h-12"
            style={{ backgroundImage: `url('/lable.png')` }}
          >
            <span className="flex justify-center items-center h-full w-full text-xl font-bold">
              01
            </span>
          </div>
          <div className="flex items-center justify-center mb-4">
            <img src="logo/phantom.png" alt="Phantom" className="w-16 h-16 mr-4" />
            <img src="logo/metamask.webp" alt="Metamask" className="w-16 h-16" />
          </div>
          <h2 className="text-xl text-center font-semibold mb-2">
            Get a wallet
          </h2>
          <p className="text-sm text-center">
            You’re gonna need a wallet to hold your $AAV. We recommend Phantom
            Solana and Metamask for otherchains.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="bg-[#161D27]/80 rounded-2xl border-4 border-[#3FAC55] py-16 rounded-tl-none shadow-[0_4px_21px_-2px_#3FAC55] p-6 relative w-full max-w-sm"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="absolute -left-3 top-16 bg-no-repeat bg-cover w-12 h-12"
            style={{ backgroundImage: `url('/lable.png')` }}
          >
            <span className="flex justify-center items-center h-full w-full text-xl font-bold">
              02
            </span>
          </div>
          <div className="flex items-center justify-center mb-4">
            <img src="logo/solana.png" alt="Solana" className="w-16 h-16" />
          </div>
          <h2 className="text-xl text-center font-semibold mb-2">
            Fund Wallet
          </h2>
          <p className="text-sm text-center">
            Buy and send some SOL, ETH, USDT or BNB to pay for your $AAV tokens.
            Send a little extra for gas fees.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="bg-[#161D27]/80 rounded-2xl border-4 py-16 border-[#3FAC55] rounded-tl-none shadow-[0_4px_21px_-2px_#3FAC55] p-6 relative w-full max-w-sm"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="absolute -left-3 top-16 bg-no-repeat bg-cover w-12 h-12"
            style={{ backgroundImage: `url('/lable.png')` }}
          >
            <span className="flex justify-center items-center h-full w-full text-xl font-bold">
              03
            </span>
          </div>
          <div className="flex items-center justify-center mb-4">
            <img src="logo/asset.png" alt="Stake" className="w-16 h-16" />
          </div>
          <h2 className="text-xl text-center font-semibold mb-2">
            Buy & Stake
          </h2>
          <p className="text-sm text-center">
            To purchase $AAV, connect your wallet to the site, select a payment
            method, and confirm the transaction.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default HowToBuy;
