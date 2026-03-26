import Image from "next/image";

export const Features = () => {
  return (
    <div>
      {/* desktop */}
      <div className="relative hidden h-screen w-full md:block"></div>
      {/* mobile */}
      <div className="relative flex gap-4 min-h-[170vh] w-full md:hidden overflow-hidden">
        <div className="absolute -top-20 flex flex-col gap-8 items-center justify-center p-6">
          <Image
            src="/images/homepage/enjoyable-place-mobile.jpg"
            alt="Enjoyable Place"
            sizes="100vw"
            height={900}
            width={1000}
            className="self-center mx-auto shadow-xl"
          />
          <Image
            src="/images/patterns/pattern-divide.svg"
            height={100}
            width={100}
            alt="divide"
          />
          <h2 className="font-bold text-3xl text-center">
            Enjoyable place for all the family
          </h2>
          <p>
            Our relaxed surroundings makes dining with us a delightful
            experience for everyone. We can even arrange a tour of the farm
            before your meal.
          </p>

          <Image
            src="/images/homepage/locally-sourced-mobile.jpg"
            alt="Locally Sourced"
            sizes="100vw"
            height={900}
            width={1000}
            className="self-center mx-auto shadow-xl"
          />
          <Image
            src="/images/patterns/pattern-divide.svg"
            height={100}
            width={100}
            alt="divide"
          />
          <h2 className="font-bold text-3xl text-center">
            The most locally sourced food
          </h2>
          <p>
            All our ingredients come directly from our farm or local fishery. So
            you can be sure that you’re eating the freshest, most sustainable
            food.
          </p>
        </div>
      </div>
    </div>
  );
};
