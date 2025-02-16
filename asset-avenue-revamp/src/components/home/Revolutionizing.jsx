import React from "react";
import { motion } from "framer-motion";

const Revolutionizing = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Controls delay between cards
      },
    },
  };

  return (
    <motion.div
      className="relative bg-black text-white p-8 px-4 md:px-24 pt-28"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Main Content */}
      <div className="relative z-10">
        <motion.h1
          className="text-3xl font-helvetica md:text-[36px] leading-normal font-bold text-center mb-4"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
        >
          Revolutionizing <span className="text-[#3FAC55]">Real Estate Investment</span> With <span className="text-[#3FAC55]">Blockchain & AI</span>
        </motion.h1>
        <motion.p
          className="text-center md:text-[16px] text-gray-300 mb-8 max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2 }}
        >
          Asset Avenue transforms real estate investing by integrating blockchain and AI for a seamless, transparent experience. Fractional ownership and real-time insights make it simple to invest in premium properties worldwide, all while reducing fees and enhancing liquidity.
        </motion.p>

        {/* Animated Cards */}
        <motion.div
          className="grid gap-8 md:grid-cols-3 grid-cols-1"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {["stateOne.png", "stateTwo.png", "stateThree.png"].map((img, index) => (
            <motion.div
              key={index}
              className="relative bg-[#161D27] p-6 rounded-[30px] shadow-[0_4px_21px_-2px_#3FAC55] border border-[#3FAC55] rounded-tl-none"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="absolute -z-20 inset-0 bg-[#3FAC55] opacity-20 rounded-full w-[120%] h-[150%] top-1/6 -left-1/5 blur-3xl"></div>
              <img
                src={`./state/${img}`}
                alt="Real Estate"
                className="w-full h-40 object-cover mb-4 rounded-[20px] rounded-tl-none mx-auto"
              />
              <h2 className="text-[16px] font-bold mb-2">
                {index === 0 ? "The Problem" : index === 1 ? "Our Vision" : "The Power of $AAV"}
              </h2>
              <p className="text-gray-300 text-[16px]">
                {index === 0
                  ? "The $235 trillion real estate market remains outdated, plagued by inefficiencies, high fees, and limited access for investors. Traditional methods keep this valuable asset class suppressed and inaccessible."
                  : index === 1
                  ? "Asset Avenue leverages blockchain and AI to modernize real estate investing. With fractional ownership, transparent transactions, and real-time insights, we simplify investing and unlock global opportunities for all."
                  : "The $AAV token is your gateway to a smarter real estate market. Invest in premium properties, earn passive income, and trade assets seamlessly, all powered by $AAV ecosystem. "}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Revolutionizing;
