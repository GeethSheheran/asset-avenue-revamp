import React from "react";
import { motion } from "framer-motion";

const InvestingMode = () => {
  const cards = [
    {
      title: "Crypto",
      description: "Invest in Real Estate worldwide without exchanging your crypto into fiat money.",
      icon: "./investing/iconOne.png",
    },
    {
      title: "Security",
      description: "Enjoy the highest security through blockchain technology and DAO governance.",
      icon: "./investing/iconTwo.png",
    },
    {
      title: "Transferability",
      description: "Easily transfer your assets to anyone you choose.",
      icon: "./investing/iconThree.png",
    },
    {
      title: "Liquidity",
      description: "Buy and sell your shares in Real Estate Assets with ease.",
      icon: "./investing/iconFour.png",
    },
    {
      title: "AI",
      description: "Analyze worldwide Real Estate deals and markets with AI.",
      icon: "./investing/iconOne.png",
    },
  ];

  return (
    <div className="relative bg-black text-white py-20 px-4 overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/Ellipse.png"
          alt="Decorative Background Left"
          className="absolute left-0 top-1/4 w-1/2 opacity-30"
        />
        <img
          src="/Ellipse.png"
          alt="Decorative Background Right"
          className="absolute right-0 bottom-1/4 w-1/2 opacity-30"
        />
      </div>

      {/* Cards Section */}
      <div className="relative grid grid-cols-1 xl:px-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 justify-center">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="bg-[#161D27] border border-gray-700 rounded-xl shadow-md shadow-[#FAFAFA5E] p-6 text-center flex flex-col items-center transform transition-transform hover:-translate-y-5 hover:shadow-lg hover:shadow-[#3FAC55]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <img
              src={card.icon}
              alt={`Icon for ${card.title}`}
              className="w-16 h-16 mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-sm text-gray-300">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default InvestingMode;
