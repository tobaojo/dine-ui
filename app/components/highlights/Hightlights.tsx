import Image from "next/image";
import HightlightItem from "./HightlightItem";

export const Hightlights = () => {
  const highlights = [
    {
      imageSrc: "/images/homepage/salmon-mobile.jpg",
      title: "Seared salmon filet",
      description:
        "our locally sourced salmon is seared to perfection, ensuring a rich and flavorful experience.",
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
    <div className="bg-[#111111] py-32">
      {/* desktop */}
      <div className="relative hidden h-screen w-full md:block"></div>
      {/* mobile */}
      <div className="relative flex flex-col gap-4 min-h-[200vh] w-full md:hidden overflow-hidden">
        <Image
          src="/images/patterns/pattern-divide.svg"
          alt="Seasonal Menu"
          sizes="100vw"
          height={200}
          width={200}
          className="self-center mx-auto shadow-xl"
        />
        <div className="flex flex-col gap-8 items-center justify-center p-6">
          <h2 className="font-bold text-3xl text-center text-white">
            A few highlights from our menu
          </h2>
          <p className="text-white text-center">
            We cater for all dietary requirements, but here’s a glimpse at some
            of our diner’s favourites. Our menu is revamped every season. We
            take inspiration from the incredible produce that surrounds us, to
            create mouth-watering dishes that will make you want to come back
            for more.
          </p>
        </div>
        <div className="flex flex-col gap-8 items-center justify-center p-6">
          {highlights.map((highlight, index) => (
            <HightlightItem
              key={index}
              title={highlight.title}
              description={highlight.description}
              imageSrc={highlight.imageSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
