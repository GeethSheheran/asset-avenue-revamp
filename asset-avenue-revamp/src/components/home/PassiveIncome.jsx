import React from 'react';

const projects = [
  {
    id: 1,
    title: "Coliving Apartment Collection Barcelona",
    location: "Barcelona (Spain)",
    price: "1,770,500",
    available: 3541,
    pricePerShare: 500,
    apr: 8.5,
    sold: 0,
    image: "/available/one.png",
  },
  {
    id: 2,
    title: "Prime apartment",
    location: "Panama (Panama)",
    price: "negotiating",
    available: 0,
    pricePerShare: 0,
    apr: 0,
    sold: 0,
    image: "/available/two.png",
  },
  {
    id: 3,
    title: "Luxury Apartment with Ocean View",
    location: "Miami Beach (USA)",
    price: "negotiating",
    available: 0,
    pricePerShare: 0,
    apr: 0,
    sold: 0,
    image: "/available/three.png",
  },
];

const PassiveIncome = () => {
  return (
    <div className="bg-black text-white py-10 xl:px-24 px-4">
      <h1 className="text-center text-3xl md:text-4xl font-bold mb-8">
        Available <span className="text-[#3FAC55]">Passive Income</span> Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#3FAC55]  rounded-tl-none text-black rounded-[70px] shadow-md overflow-hidden"
          >
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover rounded-[70px]  rounded-tl-none border-8 border-[#000000]"
              />
              <span className="absolute top-4 rounded-xl left-4 bg-black text-white text-xs font-bold px-2 py-1 rounded">
                UPCOMING
              </span>
            </div>
            <div className="p-4">
              <h2 className="font-semibold text-white text-lg mb-2 text-center">{project.title}</h2>
              <p className="text-sm text-white mb-4  text-center">{project.location}</p>
              <div className="grid grid-cols-4 gap-2 text-sm mb-4 text-center">
                <div>
                  <p className="font-bold text-white">Price:</p>
                  <p className='font-bold text-lg'>{project.price} </p>
                  <p className='text-white'>USDT</p>
                </div>
                <div>
                  <p className="font-bold text-white">Available:</p>
                  <p className='font-bold text-lg'>{project.available} </p>
                  <p className='text-white'>SHARES</p>
                </div>
                <div>
                  <p className="font-bold text-white">Price/Share:</p>
                  <p className='font-bold text-lg'>{project.pricePerShare} </p>
                  <p className='text-white'>USDT</p>
                </div>
                <div>
                  <p className="font-bold text-white">APR:</p>
                  <p className='font-bold text-lg'>{project.apr} </p>
                  <p className='text-white'>PERCENT</p>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-6 flex items-center justify-center relative">
                <div
                  className="bg-[green-500] w-full h-8 rounded text-[#3FAC55] text-xs flex items-center justify-center"
                  style={{ width: `${project.sold}%` }}
                >
                  {project.sold}%
                </div>
              </div>
              <p className="text-center text-sm font-semibold text-black mt-4">
                Coming Soon
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="bg-[#3FAC55] text-white px-6 py-2 rounded-xl hover:bg-green-600">
          BUY SHARES
        </button>
      </div>
    </div>
  );
};

export default PassiveIncome;
