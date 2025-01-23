import React from "react";

const InvestingMode = () => {
  const cards = [
    {
      title: "Crypto",
      description: "Invest in Real Estate worldwide without exchanging your crypto into fiat money.",
      icon: "./house.png", // Replace with your actual path
    },
    {
      title: "Security",
      description: "Enjoy the highest security through blockchain technology and DAO governance.",
      icon: "./house.png", // Replace with your actual path
    },
    {
      title: "Transferability",
      description: "Easily transfer your assets to anyone you choose.",
      icon: "./house.png", // Replace with your actual path
    },
    {
      title: "Liquidity",
      description: "Buy and sell your shares in Real Estate Assets with ease.",
      icon: "./house.png", // Replace with your actual path
    },
    {
      title: "AI",
      description: "Analyze worldwide Real Estate deals and markets with AI.",
      icon: "./house.png", // Replace with your actual path
    },
  ];

  return (
    <div className="bg-black text-white py-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">
        Real Estate Investing Made Easy on the Blockchain
      </h2>
      <div className="grid grid-cols-1 xl:px-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 justify-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[#161D27] border border-gray-700 rounded-2xl shadow-md shadow-[#FAFAFA5E] p-6 text-center flex flex-col items-center transform transition-transform hover:-translate-y-5 hover:shadow-lg hover:shadow-[#3FAC55]"
          >
            <img
              src={card.icon}
              alt={card.title}
              className="w-20 h-20 mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-sm">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvestingMode;
