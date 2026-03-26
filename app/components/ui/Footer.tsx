import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      {/* mobile */}
      <div className="relative flex gap-4 h-100 w-full md:hidden overflow-hidden">
        <Image
          src="/images/homepage/ready-bg-mobile.jpg"
          alt="Footer Image"
          fill
          sizes="100vw"
        />
        <div className="absolute top-0 left-0 flex flex-col gap-8 items-center justify-center p-6 text-white w-full h-full ">
          <h2>Ready to make a reservation?</h2>
          <Link
            href="/booking"
            className="text-white text-lg border-2 border-white px-8 py-4 mt-4 hover:bg-white hover:text-black transition w-full text-center bg-[#9E7F66] self-center  "
          >
            BOOK A TABLE
          </Link>
        </div>
      </div>
      <div>
        <div className="bg-black text-white p-8 flex flex-col items-center gap-4">
          <h2 className="font-bold text-3xl text-center">Book a table</h2>
          <p>
            We’re open for reservations every day of the week. Book a table
            online or by calling us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
