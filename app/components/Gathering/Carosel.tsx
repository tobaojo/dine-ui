"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Carosel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    {
      src: "/images/homepage/family-gathering-mobile.jpg",
      alt: "Family gatherings",
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
      <div className="relative mx-auto w-full max-w-md px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, translateY: 30 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: -30 }}
            transition={{ duration: 0.5 }}
            layout
            className="relative w-full overflow-hidden"
          >
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              height={350}
              width={500}
              className="mb-8 shadow-xl/30"
            />
          </motion.div>
        </AnimatePresence>
        <AnimatePresence>
          <div className="my-4 flex flex-col justify-center gap-4">
            {images.map((image, index) => (
              <motion.button
                key={index}
                onClick={() => handleChangeImage(index)}
                className={`uppercase text-xl font-semibold tracking-wide text-gray-400 hover:text-gray-700 focus:outline-none ${currentIndex === index ? "text-gray-700" : "text-gray-400"}`}
                initial={{ opacity: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                whileInView={{ opacity: 1, translateY: [30, 0] }}
                viewport={{ once: true }}
              >
                {image.alt}
                {currentIndex === index && (
                  <div className="w-[15%] h-px bg-[#9E7F66] mt-2 mx-auto"></div>
                )}
              </motion.button>
            ))}
          </div>
        </AnimatePresence>
        <AnimatePresence mode="wait">
          {currentIndex === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-opacity-50 p-4 text-center text-gray-800"
            >
              <h2 className="my-4 text-4xl font-bold">Family Gathering</h2>
              <p className="mt-2 text-lg leading-relaxed text-slate-700">
                we love catering for your family events. So please let us know
                how we can help make your event special.
              </p>
            </motion.div>
          )}
          {currentIndex === 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-opacity-50 p-4 text-center text-gray-800"
            >
              <h2 className="my-4 text-4xl font-bold">Special Events</h2>
              <p className="mt-2 text-lg leading-relaxed text-slate-700">
                whether it&apos;s a corporate event, a wedding, or any other
                special occasion, we are here to make it memorable.
              </p>
            </motion.div>
          )}
          {currentIndex === 2 && (
            <motion.div
              initial={{ opacity: 0 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-opacity-50 p-4 text-center text-gray-800"
            >
              <h2 className="my-4 text-4xl font-bold">Social Events</h2>
              <p className="mt-2 text-lg leading-relaxed text-slate-700">
                we cater to a variety of social events, ensuring a memorable
                experience for you and your guests.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
