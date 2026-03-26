import { Carosel } from "./Carosel";
import Link from "next/link";
export const Gathering = () => {
  return (
    <div>
      <div className="relative hidden h-screen w-full md:block"></div>
      <div className="relative flex w-full flex-col gap-6 overflow-hidden md:hidden mobile-section--tight">
        <Carosel />
        <Link
          href="/booking"
          className="mx-auto w-[80%] bg-black px-8 py-5 text-center text-lg text-white transition hover:bg-white hover:text-black"
        >
          BOOK A TABLE
        </Link>
      </div>
    </div>
  );
};
