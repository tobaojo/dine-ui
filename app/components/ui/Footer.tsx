import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      {/* mobile */}
      <div className="relative flex min-h-[22rem] w-full gap-4 overflow-hidden md:hidden mobile-section--tight">
        <Image
          src="/images/homepage/ready-bg-mobile.jpg"
          alt="Footer Image"
          fill
          sizes="100vw"
        />
        <div className="absolute top-0 left-0 flex h-full w-full flex-col items-center justify-center gap-6 px-6 text-center text-white">
          <h2 className="text-4xl font-bold leading-relaxed">
            Ready to make a reservation?
          </h2>
          <Link
            href="/booking"
            className="mx-auto w-[80%] border-2 border-white px-8 py-5 text-center text-lg text-white transition hover:bg-white hover:text-black"
          >
            BOOK A TABLE
          </Link>
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center gap-7 bg-black px-8 py-12 text-white">
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={100}
            height={100}
            className="object-contain"
          />
          <div className="flex flex-col items-center gap-2 text-md leading-relaxed tracking-wide">
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
