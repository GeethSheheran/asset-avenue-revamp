import React from 'react';

const Revolutionizing = () => {
  return (
    <div className="bg-black text-white p-8 px-24 pt-28">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Revolutionizing <span className="text-[#3FAC55]">Real Estate Investment</span> With <span className="text-[#3FAC55]">Blockchain & AI</span>
      </h1>
      <p className="text-center text-gray-300 mb-8 max-w-3xl mx-auto">
        Asset Avenue transforms real estate investing by integrating blockchain and AI for a seamless, transparent experience. Fractional ownership and real-time insights make it simple to invest in premium properties worldwide, all while reducing fees and enhancing liquidity.
      </p>
      <div className="grid gap-8 md:grid-cols-3  ">
        {/* Column 1 */}
        <div className="bg-[#161D27]  p-6 rounded-xl shadow-[0_4px_6px_-1px_#22C55E,0_2px_4px_-2px_#22C55E] border border-[#3FAC55] rounded-tl-none">
          <img
            src="./state/stateOne.png"
            alt="Traditional Real Estate"
            className="w-80  h-40 object-cover mb-4 rounded-lg rounded-tl-none mx-auto"
          />
          <h2 className="text-xl font-bold mb-2">The Problem</h2>
          <p className="text-gray-300">
            The $235 trillion real estate market remains outdated, plagued by inefficiencies, high fees, and limited access for investors. Traditional methods keep this valuable asset class suppressed and inaccessible.
          </p>
        </div>

        {/* Column 2 */}
        <div className="bg-[#161D27] p-6 rounded-xl shadow-[0_4px_6px_-1px_#22C55E,0_2px_4px_-2px_#22C55E] border border-[#3FAC55] rounded-tl-none">
          <img
            src="./state/stateTwo.png"
            alt="Modern Real Estate"
            className="w-80 h-40 object-cover mb-4 rounded-lg rounded-tl-none mx-auto"
          />
          <h2 className="text-xl font-bold mb-2">Our Vision</h2>
          <p className="text-gray-300">
            Asset Avenue leverages blockchain and AI to modernize real estate investing. With fractional ownership, transparent transactions, and real-time insights, we simplify investing and unlock global opportunities for all.
          </p>
        </div>

        {/* Column 3 */}
        <div className="bg-[#161D27] p-6 rounded-xl shadow-[0_4px_6px_-1px_#22C55E,0_2px_4px_-2px_#22C55E] border border-[#3FAC55] rounded-tl-none">
          <img
            src="./state/stateThree.png"
            alt="AI and Real Estate"
            className="w-80 h-40 object-cover mb-4 rounded-lg rounded-tl-none mx-auto"
          />
          <h2 className="text-xl font-bold mb-2">The Power of $AAV</h2>
          <p className="text-gray-300">
            The $AAV token is your gateway to a smarter real estate market. Invest in premium properties, earn passive income, and trade assets seamlessly, all powered by the $AAV ecosystem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Revolutionizing;
