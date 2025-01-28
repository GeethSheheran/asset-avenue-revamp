import React from "react";

const PieChart = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center relative z-10 py-16">
      <h1 className="text-white text-4xl font-bold  mb-4">Tokenomics</h1>
      <div className="relative w-full px-4 md:px-24 flex justify-center items-center">
      <div className="absolute inset-0 flex justify-center items-center">
        <img
          src="/Ellipse.png"
          alt="Background Left"
          className="absolute  w-65 z-20  right-[0%] opacity-100"
        />
      </div>
        <picture>
          <source srcSet="/pie/piemobile.svg" media="(max-width: 767px)" />
          <img
            src="/pie/pie.svg"
            alt="Pie Chart"
            className="relative w-full h-auto md:w-screen"
          />
        </picture>
      </div>
    </div>
  );
};

export default PieChart;
