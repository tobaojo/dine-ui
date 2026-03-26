import Image from "next/image";

export const Features = () => {
  return (
    <div>
      {/* desktop */}
      <div className="relative hidden h-screen w-full md:block"></div>
      {/* mobile */}
      <div className="relative w-full overflow-hidden pb-16 md:hidden mobile-section">
        <div className="mx-auto flex max-w-md flex-col items-center gap-8 px-6 leading-relaxed">
          <div className="w-full overflow-hidden">
            <Image
              src="/images/homepage/enjoyable-place-mobile.jpg"
              alt="Enjoyable Place"
              sizes="100vw"
              height={900}
              width={1000}
              className="mx-auto  self-center shadow-xl"
            />
          </div>
          <Image
            src="/images/patterns/pattern-divide.svg"
            height={100}
            width={100}
            alt="divide"
          />
          <h2 className="w-70 text-center text-3xl font-bold text-slate-700">
            Enjoyable place for all the family
          </h2>
          <p className="text-center">
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
            className="mx-auto mt-4 self-center shadow-xl"
          />
          <Image
            src="/images/patterns/pattern-divide.svg"
            height={100}
            width={100}
            alt="divide"
          />
          <h2 className="w-70 text-center text-3xl font-bold text-slate-800">
            The most locally sourced food
          </h2>
          <p className="text-center">
            All our ingredients come directly from our farm or local fishery. So
            you can be sure that you’re eating the freshest, most sustainable
            food.
          </p>
        </div>
      </div>
    </div>
  );
};
