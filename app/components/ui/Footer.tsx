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
        <div className="absolute top-0 left-0 flex flex-col gap-8 items-center justify-center p-6 text-white w-full h-full text-center">
          <h2 className="text-4xl font-bold my-1 leading-relaxed">
            Ready to make a reservation?
          </h2>
          <Link
            href="/booking"
            className="text-white text-lg border-2 border-white px-8 py-6 mt-4 hover:bg-white hover:text-black transition w-[80%] text-center mx-auto "
          >
            BOOK A TABLE
          </Link>
        </div>
      </div>
      <div>
        <div className="bg-black text-white p-8 flex flex-col items-center gap-7">
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={100}
            height={100}
            className="object-contain"
          />
          <div className="flex flex-col items-center gap-2 text-md leading-loose tracking-wide">
            <p>Marthwaithe, Sedbergh Cumbria</p>
            <p>+44 123 456 789</p>
            <p>Open Times</p>
            <p>Mon - Fri: 10:00 AM - 10:00 PM</p>
            <p>Sat - Sun: 12:00 PM - 11:30 PM</p>
            <p>© 2024 Dine. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
