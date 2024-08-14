import { Helmet } from "react-helmet";

/* Components */
import Contact from "../components/Contact";
import Booking from "../components/Booking";

export default function ContactUs() {
  return (
    <>
      <Helmet>
        <title>Contact Us - Videophics</title>
      </Helmet>
      <div className="container mx-auto max-w-[1300px] pb-12">
          <section
            id="booking"
            className="_booking-section py-12 md:py-[6rem] bg-violet-500 dark:bg-gray-950/50 flex flex-col justify-center items-center rounded-lg my-12"
          >
            <Booking />
          </section>
        <div className="grid md:grid-cols-2 gap-10 py-20">
          <Contact />
        </div>
      </div>
    </>
  );
}
