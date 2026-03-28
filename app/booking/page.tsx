import Image from "next/image";
import BookingForm from "./components/BookingForm";
import Footer from "../components/ui/Footer";

const BookingPage = () => {
  return (
    <div className="bg-[#f6f6f6]">
      {/* mobile */}
      <div className="relative w-full pb-16 md:hidden">
        <div className="relative h-92 w-full overflow-hidden">
          <Image
            src="/images/booking/hero-bg-mobile.jpg"
            alt="Booking Hero Image"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="relative z-10 mx-auto flex h-full w-full max-w-lg flex-col gap-7 px-6 pt-10 text-center">
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={100}
              height={100}
              className="mx-auto object-contain"
            />
            <h1 className="text-4xl font-thin text-white">Reservations</h1>
            <p className="mx-auto max-w-sm font-thin leading-relaxed text-white">
              We can&apos;t wait to host you. If you have any special
              requirement please feel free to call the nuumber below. We&apos;ll
              be more than happy to help you.
            </p>
          </div>
        </div>
        <div className="relative z-20 -mt-16 px-6">
          <BookingForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookingPage;
