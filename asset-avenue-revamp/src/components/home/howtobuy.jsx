import React, { useState } from 'react';
import styles from './howtobuy.module.css';

const HowToBuy = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleStepClick = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={`${styles.container} bg-[#161D27] p-8 rounded-lg shadow-md`}>
      <h2 className="text-2xl font-bold text-center text-white mb-6">How To Buy</h2>
      <div className="grid grid-cols-3 gap-6">
        <div
          className={`${styles.stepContainer} ${
            activeStep === 0 ? styles.activeStep : ''
          } border-4 border-[#3FAC55] rounded-lg p-6 relative`}
          onClick={() => handleStepClick(0)}
        >
          <div className="absolute top-0 right-0 m-4 bg-gradient-to-r from-[#FBE279] to-[#B8934D] rounded-full w-8 h-8 flex justify-center items-center">
            <p className="text-white font-bold">01</p>
          </div>
          <h3 className="text-white font-bold">Get a Wallet</h3>
          <p className="text-center text-gray-400">
            You're gonna need a wallet to hold your SAAV. There are lots of great
            ones that are compatible! We recommend Phantom for Solana and
            Metamask for other chains.
          </p>
          <img
            src="/wallet.png" // Replace with the actual path to your image
            alt="Wallet Image"
            className="mx-auto mt-4" // Center the image
            width={50}
            height={50}
          />
        </div>

        <div
          className={`${styles.stepContainer} ${
            activeStep === 1 ? styles.activeStep : ''
          } border-4 border-[#3FAC55] rounded-lg p-6 relative`}
          onClick={() => handleStepClick(1)}
        >
          <div className="absolute top-2 left-[-40] m-4 bg-gradient-to-r from-[#FBE279] to-[#B8934D] rounded-full w-8 h-8 flex justify-center items-center">
            <p className="text-white font-bold">02</p>
          </div>
          <h3 className="text-white font-bold">Fund Wallet</h3>
          <p className="text-center text-gray-400">
            Buy and send some SOL, ETH, USDT or BNB to pay for your $AAV tokens.
            Send a little extra to pay for gas fees. If you don't understand,
            please use our card payment instead.
          </p>
          <img
            src="/wallet.png" // Replace with the actual path to your image
            alt="Wallet Image"
            className="mx-auto mt-4" // Center the image
            width={50}
            height={50}
          />
        </div>

        <div
          className={`${styles.stepContainer} ${
            activeStep === 2 ? styles.activeStep : ''
          } border-4 border-[#3FAC55] rounded-lg p-6 relative`}
          onClick={() => handleStepClick(2)}
        >
          <div className="absolute left-0 right-0 m-4 bg-gradient-to-r from-[#FBE279] to-[#B8934D] rounded-full w-8 h-8 flex justify-center items-center">
            <p className="text-white font-bold">03</p>
          </div>
          <h3 className="text-white font-bold">Buy & Stake</h3>
          <p className="text-center text-gray-400">
            To purchase SAAV, connect your wallet to the site. Select payment
            method and amount to buy. Confirm the transaction. Stake your SAAV to
            earn huge rewards right away.
          </p>
          <img
            src="/wallet.png" // Replace with the actual path to your image
            alt="Wallet Image"
            className="mx-auto mt-4" // Center the image
            width={50}
            height={50}
          />
        </div>
      </div>
    </div>
  );
};

export default HowToBuy;