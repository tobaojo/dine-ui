import { Carosel } from "./Carosel";
import Link from "next/link";
export const Gathering = () => {
  return (
    <div>
      <div className="relative hidden h-screen w-full md:block"></div>
      <div className="relative flex flex-col gap-4 min-h-[130vh] w-full md:hidden overflow-hidden">
        <Carosel />
        <Link
          href="/booking"
          className="text-white text-lg border-2 border-white px-8 py-6 mt-4 hover:bg-white hover:text-black transition w-[80%] text-center mx-auto bg-black"
        >
          BOOK A TABLE
        </Link>
      </div>
    </div>
  );
};
