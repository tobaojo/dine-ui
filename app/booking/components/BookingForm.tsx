"use client";
import { Formik, Form, Field } from "formik";
import { motion } from "framer-motion";
import { div } from "motion/react-client";

const BookingForm = () => {
  const initalValues = {
    name: "",
    email: "",
    bookingDate: "",
    bookingTime: "",
    numberOfGuests: "",
  };
  const handleSubmit = (values: typeof initalValues) => {
    console.log(values);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, translateY: [30, 0] }}
      transition={{ duration: 0.8 }}
    >
      <Formik initialValues={initalValues} onSubmit={handleSubmit}>
        <Form className="mx-auto flex w-full max-w-104 flex-col gap-5 bg-[#f4f4f4] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
          <Field
            name="name"
            placeholder="Name"
            className="w-full border-b border-[#8f8f8f] bg-transparent pb-3 text-2xl text-[#111111] outline-none placeholder:text-[#8f8f8f]"
          />
          <Field
            name="email"
            placeholder="Email"
            type="email"
            className="w-full border-b border-[#8f8f8f] bg-transparent pb-3 text-2xl text-[#111111] outline-none placeholder:text-[#8f8f8f]"
          />
          <Field
            name="bookingDate"
            placeholder="Booking Date"
            type="date"
            className="w-full border-b border-[#8f8f8f] bg-transparent pb-3 text-2xl text-[#111111] outline-none"
          />
          <Field
            name="bookingTime"
            placeholder="Booking Time"
            type="time"
            className="w-full border-b border-[#8f8f8f] bg-transparent pb-3 text-2xl text-[#111111] outline-none"
          />
          <Field
            name="numberOfGuests"
            placeholder="Number of Guests"
            type="number"
            min="1"
            className="w-full border-b border-[#8f8f8f] bg-transparent pb-3 text-2xl text-[#111111] outline-none placeholder:text-[#8f8f8f]"
          />
          <button
            type="submit"
            className="mt-3 bg-black py-4 text-sm tracking-[0.24em] text-white uppercase"
          >
            Make reservation
          </button>
        </Form>
      </Formik>
    </motion.div>
  );
};

export default BookingForm;
