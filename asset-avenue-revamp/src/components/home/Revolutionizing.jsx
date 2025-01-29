import React from "react";
import { motion } from "framer-motion";

const Revolutionizing = () => {
  return (
    <motion.div
      className="relative bg-black text-white p-8 px-4 md:px-24 pt-28"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Images */}
      <div className="absolute inset-0 z-10 flex justify-center items-center">
        <motion.img
          src="/Ellipse.png"
          alt="Background Left"
          className="absolute left-0 w-1/2 opacity-100"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
        />
        <motion.img
          src="/Ellipse.png"
          alt="Background Right"
          className="absolute right-0 -top-1/3 w-1/2 opacity-100"
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <motion.h1
          className="text-3xl font-helvetica md:text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
        >
          Revolutionizing{" "}
          <span className="text-[#3FAC55]">Real Estate Investment</span> With{" "}
          <span className="text-[#3FAC55]">Blockchain & AI</span>
        </motion.h1>
        <motion.p
          className="text-center text-gray-300 mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2 }}
        >
          Asset Avenue transforms real estate investing by integrating
          blockchain and AI for a seamless, transparent experience. Fractional
          ownership and real-time insights make it simple to invest in premium
          properties worldwide, all while reducing fees and enhancing liquidity.
        </motion.p>

        <motion.div
          className="grid gap-8 md:grid-cols-3 grid-cols-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.5 }}
        >
          {/* Column 1 */}
          <motion.div
            className="bg-[#161D27] p-6 rounded-xl shadow-[0_4px_21px_-2px_#3FAC55] border border-[#3FAC55] rounded-tl-none"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="./state/stateOne.png"
              alt="Traditional Real Estate"
              className="w-80 h-40 object-cover mb-4 rounded-lg rounded-tl-none mx-auto"
            />
            <h2 className="text-xl font-bold mb-2">The Problem</h2>
            <p className="text-gray-300">
              The $235 trillion real estate market remains outdated, plagued by
              inefficiencies, high fees, and limited access for investors.
              Traditional methods keep this valuable asset class suppressed and
              inaccessible.
            </p>
          </motion.div>

          {/* Column 2 */}
          <motion.div
            className="bg-[#161D27] p-6 rounded-xl shadow-[0_4px_21px_-2px_#3FAC55] border border-[#3FAC55] rounded-tl-none"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="./state/stateTwo.png"
              alt="Modern Real Estate"
              className="w-80 h-40 object-cover mb-4 rounded-lg rounded-tl-none mx-auto"
            />
            <h2 className="text-xl font-bold mb-2">Our Vision</h2>
            <p className="text-gray-300">
              Asset Avenue leverages blockchain and AI to modernize real estate
              investing. With fractional ownership, transparent transactions,
              and real-time insights, we simplify investing and unlock global
              opportunities for all.
            </p>
          </motion.div>

          {/* Column 3 */}
          <motion.div
            className="bg-[#161D27] p-6 rounded-xl shadow-[0_4px_21px_-2px_#3FAC55] border border-[#3FAC55] rounded-tl-none"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="./state/stateThree.png"
              alt="AI and Real Estate"
              className="w-80 h-40 object-cover mb-4 rounded-lg rounded-tl-none mx-auto"
            />
            <h2 className="text-xl font-bold mb-2">The Power of $AAV</h2>
            <p className="text-gray-300">
              The $AAV token is your gateway to a smarter real estate market.
              Invest in premium properties, earn passive income, and trade
              assets seamlessly, all powered by the $AAV ecosystem.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Revolutionizing;
