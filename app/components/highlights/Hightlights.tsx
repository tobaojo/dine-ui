"use client";
import Image from "next/image";
import HightlightItem from "./HightlightItem";
import { motion } from "framer-motion";

export const Hightlights = () => {
  const highlights = [
    {
      imageSrc: "/images/homepage/salmon-mobile.jpg",
      title: "Seared salmon filet",
      description:
        "Our locally sourced salmon is seared to perfection, ensuring a rich and flavorful experience.",
    },
    {
      imageSrc: "/images/homepage/beef-mobile.jpg",
      title: "Rosemary filet mignon",
      description:
        "Our rosemary filet mignon is cooked to perfection, offering a tender and flavorful experience.",
    },
    {
      imageSrc: "/images/homepage/chocolate-mobile.jpg",
      title: "Summer fruit chocolate mousse",
      description:
        "Our summer fruit chocolate mousse is a delightful combination of fresh fruits and rich chocolate, perfect for a refreshing dessert experience.",
    },
  ];
  return (
    <div className="bg-[#111111] mobile-section">
      {/* desktop */}
      <div className="relative hidden h-screen w-full md:block"></div>
      {/* mobile */}
      <div className="relative mx-auto flex w-full max-w-md flex-col gap-8 px-6 leading-relaxed md:hidden">
        <Image
          src="/images/patterns/pattern-divide.svg"
          alt="Seasonal Menu"
          sizes="100vw"
          height={100}
          width={100}
          className="mx-auto self-center"
        />
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          whileInView={{ opacity: 1, translateY: [20, 0] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center gap-6"
        >
          <h2 className="w-70 text-center text-3xl font-bold text-white">
            A few highlights from our menu
          </h2>
          <p className="text-white text-center">
            We cater for all dietary requirements, but here’s a glimpse at some
            of our diner’s favourites. Our menu is revamped every season.
          </p>
        </motion.div>
        <div className="flex flex-col items-center justify-center gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              whileInView={{ opacity: 1, translateY: [30, 0] }}
              viewport={{ once: true }}
            >
              <HightlightItem
                key={index}
                title={highlight.title}
                description={highlight.description}
                imageSrc={highlight.imageSrc}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
