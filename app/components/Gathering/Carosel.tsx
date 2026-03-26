"use client";
import Image from "next/image";
import { useState } from "react";

export const Carosel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    {
      src: "/images/homepage/family-gathering-mobile.jpg",
      alt: "Family gathering",
    },
    {
      src: "/images/homepage/special-events-mobile.jpg",
      alt: "Special events",
    },
    {
      src: "/images/homepage/social-events-mobile.jpg",
      alt: "Social events",
    },
  ];

  const handleChangeImage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <div className="relative w-full p-6">
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          height={350}
          width={500}
          className="shadow-xl/30"
        />
        <div className="flex flex-col justify-center gap-6 my-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => handleChangeImage(index)}
              className={`uppercase text-xl font-semibold tracking-wide text-gray-400 hover:text-gray-700 focus:outline-none ${currentIndex === index ? "text-gray-700" : "text-gray-400"}`}
            >
              {image.alt}
              {currentIndex === index && (
                <div className="w-[15%] h-px bg-[#9E7F66] mt-2 mx-auto"></div>
              )}
            </button>
          ))}
        </div>
        {currentIndex === 0 && (
          <div className=" bottom-0 left-0 right-0 bg-opacity-50 text-gray-800 p-4 text-center">
            <h2 className="text-4xl font-bold">Family Gathering</h2>
            <p className="mt-2 text-gray-500 text-lg">
              we love catering for your family events. So please let us know how
              we can help make your event special.
            </p>
          </div>
        )}
        {currentIndex === 1 && (
          <div className=" bottom-0 left-0 right-0 bg-opacity-50 text-gray-800 p-4 text-center">
            <h2 className="text-4xl font-bold">Special Events</h2>
            <p className="mt-2 text-gray-500 text-lg">
              whether it&apos;s a corporate event, a wedding, or any other
              special occasion, we are here to make it memorable.
            </p>
          </div>
        )}
        {currentIndex === 2 && (
          <div className=" bottom-0 left-0 right-0 bg-opacity-50 text-gray-800 p-4 text-center">
            <h2 className="text-4xl font-bold">Social Events</h2>
            <p className="mt-2 text-gray-500 text-lg">
              we cater to a variety of social events, ensuring a memorable
              experience for you and your guests.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
