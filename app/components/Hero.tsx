import Image from "next/image";
import Link from "next/link";
export const Hero = () => {
  return (
    <>
      {/* desktop */}
      <div className="relative hidden h-screen w-full md:block">
        <Image
          src="/images/homepage/hero-bg-desktop.jpg"
          alt="Hero Image"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold bg-black bg-opacity-50 p-4 rounded">
            Welcome to Our Website
          </h1>
        </div>
      </div>
      {/* mobile */}
      <div className="relative h-screen w-full md:hidden">
        <Image
          src="/images/homepage/hero-bg-mobile.jpg"
          alt="Hero Image"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col gap-8 items-center text-center">
            <Image
              src="/images/logo.svg"
              alt="Hero Text"
              width={100}
              height={100}
              className="object-contain"
            />
            <h1 className="text-white text-4xl font-extralight mt-4 w-60">
              Exquisite dining since 1989
            </h1>
            <p className="text-white text-lg mt-2 leading-relaxed w-90">
              Experience our seasonal menu in beautiful country surroundings.
              Eat the freshest produce from the comfort of our farmhouse.
            </p>
            <Link
              href="/booking"
              className="text-white text-lg border-2 border-white px-8 py-4 mt-4 hover:bg-white hover:text-black transition w-[80%] text-center "
            >
              BOOK A TABLE
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
