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
      <div className="relative min-h-[100svh] w-full md:hidden">
        <Image
          src="/images/homepage/hero-bg-mobile.jpg"
          alt="Hero Image"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center px-6 py-10">
          <div className="flex flex-col items-center gap-6 text-center">
            <Image
              src="/images/logo.svg"
              alt="Hero Text"
              width={100}
              height={100}
              className="object-contain"
            />
            <h1 className="w-60 text-4xl font-extralight text-white">
              Exquisite dining since 1989
            </h1>
            <p className="max-w-[22rem] text-lg leading-relaxed text-white">
              Experience our seasonal menu in beautiful country surroundings.
              Eat the freshest produce from the comfort of our farmhouse.
            </p>
            <Link
              href="/booking"
              className="mt-2 w-[80%] border-2 border-white px-8 py-4 text-center text-lg text-white transition hover:bg-white hover:text-black"
            >
              BOOK A TABLE
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
