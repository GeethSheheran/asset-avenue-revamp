import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const ImageSlider = () => {
  const images = [
    { src: "logo/logo1.png", alt: "Binance" },
    { src: "logo/logo2.png", alt: "Solana" },
    { src: "logo/logo3.png", alt: "Techopedia" },
    { src: "logo/logo4.png", alt: "Ethereum" },
    { src: "logo/logo5.png", alt: "Polygon" },
  ];

  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let start = 0;

    const animate = () => {
      start -= 1; // Adjust speed by changing this value
      if (Math.abs(start) >= slider.scrollWidth / 2) {
        start = 0;
      }
      slider.style.transform = `translateX(${start}px)`;
      requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animate);
  }, []);

  return (
    <div className="overflow-hidden w-full md:w-1/2 flex justify-start mt-4 md:mt-16 pb-16">
      <div ref={sliderRef} className="flex" style={{ width: "max-content" }}>
        {images.concat(images).map((image, index) => (
          <div key={index} className="flex-none w-1/3 flex justify-center">
            <img
              src={image.src}
              alt={image.alt}
              className="w-28 h-8"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
