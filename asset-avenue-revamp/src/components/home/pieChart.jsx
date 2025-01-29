import React from "react";
import { motion } from "framer-motion";

const PieChart = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center relative z-10 py-16">
      {/* Topic Header Animation */}
      <motion.h1
        className="text-white font-helvetica text-[50px] font-bold mb-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        Tokenomics
      </motion.h1>

      {/* Pie Chart Section */}
      <div className="relative w-full px-4 md:px-24 flex justify-center items-center">
        <div className="absolute inset-0 flex justify-center items-center">
          <img
            src="/Ellipse.png"
            alt="Background Left"
            className="absolute w-65 z-20 right-[0%] opacity-100"
          />
        </div>

        {/* Pie Chart Animation */}
        <motion.div
          className="relative w-full h-auto md:w-screen"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <picture>
            <source srcSet="/pie/piemobile.svg" media="(max-width: 767px)" />
            <img
              src="/pie/pie.svg"
              alt="Pie Chart"
              className="relative w-full h-auto md:w-screen"
            />
          </picture>
        </motion.div>
      </div>
    </div>
  );
};

export default PieChart;
