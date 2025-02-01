import React from "react";
import { motion } from "framer-motion"; // Import framer-motion

const StatesMeets = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 lg:px-24 gap-4 py-12 md:py-4 bg-black text-white relative">
      {/* Left Column */}
      <motion.div 
        className="relative lg:w-1/2 w-full mb-8 lg:mb-0 flex flex-col items-center lg:items-start"
        whileInView={{ opacity: 1, x: 0 }} // Trigger animation when in view
        initial={{ opacity: 0, x: -100 }} // Initial state (before the animation)
        transition={{ duration: 1 }} // Transition duration
        viewport={{ once: true }} // Animation happens once when it enters the viewport
      >
        <h1 className="md:text-[36px] text-3xl font-bold mb-4 font-helvetica text-center lg:text-left">
          Asset Avenue <span className="text-[#16A34A]">DAO</span>
        </h1>
        <p className="text-[16px] mb-6 text-center tracking-normal lg:text-left">
          Facilitating worldwide real estate transactions with cryptocurrency,
          ensuring the highest level of security and complete transparency in
          ownership and investment opportunities through blockchain technology.
        </p>
        <ul className="list-disc list-inside space-y-2 text-[16px] text-center lg:text-left">
          <li>NFT Property Rights</li>
          <li>Staking for Governance</li>
          <li>Smart Contract Payouts</li>
          <li>Decentralized Decisions</li>
          <li>Legal Compliance</li>
        </ul>
        <motion.button
          className="mt-6 uppercase px-6 py-3 bg-[#16A34A] md:text-[11px] text-white font-semibold rounded-[10px] hover:bg-[#11823B] transition self-center lg:self-end"
          whileInView={{ opacity: 1 , x:0}} // Fade-in when in view
          initial={{ opacity: 0, x: 0 }} // Initially hidden
          transition={{ duration: 1 }} // Delay for better timing
        viewport={{ once: true }} // Animation happens once when it enters the viewport

        >
          ACCESS DAO
        </motion.button>
      </motion.div>

      {/* Right Column */}
      <motion.div
        className="lg:w-[500px] w-full flex justify-center"
        whileInView={{ opacity: 1, scale: 1 }} // Fade-in and scale when in view
        initial={{ opacity: 0, scale: 0.9 }} // Start hidden and slightly scaled
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.video
          src="/video/world.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full aspect-square rounded-lg shadow-lg mb-4"
          
        />
      </motion.div>
    </div>
  );
};

export default StatesMeets;
