import React from 'react';

const StatesMeets = () => {
  const data = [
    {
      title: "Fractionalized investing",
      description: "Invest in Real Estate Assets Alongside Experts and receive passive income in fiat or crypto.",
      imageSrc: "./house1.png", 
    },
    {
      title: "Artificial intelligence",
      description: "Analyze deals and markets worldwide, recognize trends and shifts earlier, comprehensive neighborhood insights.",
      imageSrc: "./house2.png", 
    },
    {
      title: "Real Estate Purchases",
      description: "Buy your own Real Estate worldwide without exchanging your crypto into fiat money.",
      imageSrc: "./house3.png", 
    },
  ];

  return (
    <div className="bg-black text-white py-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">
        Real Estate meets Blockchain and AI
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
        <div className="flex justify-center">
          <video 
            src="./world.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-auto max-w-md object-contain rounded-lg" 
          />
        </div>
        <div className="grid grid-cols-1 gap-4 xl:pr-20">
          {data.map((item, index) => (
            <div 
              key={index} 
              className="bg-[#161D27] border border-gray-700 rounded-lg shadow-md p-6 flex items-center transform transition-transform hover:-translate-y-1 hover:shadow-m hover:shadow-[#3FAC55]"
            >
              <img 
                src={item.imageSrc} 
                alt={item.title} 
                className="w-12 h-12 mr-4 object-contain" 
              />
              <div>
                <h3 className="text-xl xl:text-left text-center font-semibold">{item.title}</h3>
                <p className="text-sm mt-2 xl:text-left text-center">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Media Query for Mobile Centering */}
      <style jsx>{`
        @media only screen and (max-width: 768px) {
          .grid.grid-cols-1.gap-4.pr-20 {
            justify-items: center;
          }
        }
      `}</style>
    </div>
  );
};

export default StatesMeets;