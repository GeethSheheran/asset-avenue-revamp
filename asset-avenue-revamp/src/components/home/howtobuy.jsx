import React from "react";
import { motion } from "framer-motion";

const HowToBuy = () => {
  return (
    <div className="relative bg-black text-white flex flex-col items-center pt-24 px-6 md:px-24 overflow-hidden">
      {/* Animated Title */}
      <motion.h1
        className="text-[36px] font-helvetica font-bold mb-2 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        How To Buy
      </motion.h1>

      {/* Animated Paragraph */}
      <motion.p
        className="mb-12 text-center text-[12px] md:text-[20px]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        The Contract Address:{" "}
        <span className="font-mono text-[16px]">
          0fHK5q6vvBy6r7rBQJhynxJYiUoYzoC5D9XcCkvtS6
        </span>
      </motion.p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full">
        {/* Cards Wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
          {[
            {
              id: "01",
              title: "Get a wallet",
              description:
                "You’re gonna need a wallet to hold your $AAV. There are lots of great ones that are compatible! We recommend Phantom Solana and Metamask for otherchains.",
              images: ["logo/phantom.png", "logo/metamask.webp"],
            },
            {
              id: "02",
              title: "Fund Wallet",
              description:
                "Buy and send some SOL, ETH, USDT or BNB to pay for your $AAV tokens. Send a little extra to pay for gas fees. If you don’t understand please use our card payment instead.",
              images: ["logo/solana.png"],
            },
            {
              id: "03",
              title: "Buy & Stake",
              description:
                "To purchase $AAV, connect your wallet to the site. Select payment method and amount to buy. Confirm the transaction. Stake your $AAV to earn huge rewards right away.",
              images: ["asset.png"],
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              className="bg-[#161D27]/80 rounded-2xl border-4 border-[#3FAC55] rounded-tl-none shadow-[0_4px_21px_-2px_#3FAC55] p-6 relative flex flex-col h-full"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div
                className="absolute -left-3 top-16 bg-no-repeat bg-cover w-12 h-12"
                style={{ backgroundImage: `url('/lable.png')` }}
              >
                <span className="flex justify-center items-center h-full w-full text-xl font-bold">
                  {card.id}
                </span>
              </div>

              <div className="flex items-center justify-center mb-4">
                {card.images.map((img, i) => (
                  <img key={i} src={img} alt={card.title} className="w-16 h-16 mx-2" />
                ))}
              </div>

              <h2 className="text-[18px] text-center font-semibold mb-2">
                {card.title}
              </h2>
              <p className="text-[16px] text-center flex-grow">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowToBuy;
