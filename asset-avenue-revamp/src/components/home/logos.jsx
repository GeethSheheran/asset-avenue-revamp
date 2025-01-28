import React from 'react';

const Logos = () => {
  return (
    <div
      className="bg-cover bg-center w-full h-[40vh] md:h-[20vh] flex items-center justify-center"
      style={{ backgroundImage: `url(/background.png)` }}
    >
      <div className="flex flex-col sm:flex-row sm:space-x-16 space-y-6 sm:space-y-0">
        <img src="/logo/logo1.png" alt="Logo 1" className="w-32 mx-auto sm:mx-0" />
        <img src="/logo/logo2.png" alt="Logo 2" className="w-32 mx-auto sm:mx-0" />
        <img src="/logo/logo3.png" alt="Logo 3" className="w-32 mx-auto sm:mx-0" />
        <img src="/logo/logo4.png" alt="Logo 4" className="w-32 mx-auto sm:mx-0" />
      </div>
    </div>
  );
};

export default Logos;
