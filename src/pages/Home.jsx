import { Helmet } from "react-helmet";
import { Link, NavLink } from "react-router-dom";

/* Components */
import Collapsible from "../components/Collapsible";
import Contact from "../components/Contact";
import Booking from "../components/Booking";
import Services from '../components/Services';
import Clients from '../components/Clients';
import { useState } from "react";

export default function Home() {
  const [isMuted, setMuted] = useState(true);

  return (
    <div id="homepage">
      <Helmet>
        <title>
          Videophics - Your Premier Branding Agency & Branding Experts
        </title>
        <meta
          name="description"
          content="Videophics is a leading branding agency dedicated to empowering your brand's growth and success. Through our expertise in emotion-driven storytelling and strategic branding, we create enduring experiences that resonate with your audience."
        />

        <script
          src="https://assets.calendly.com/assets/external/widget.js"
          type="text/javascript"
          async
        ></script>
      </Helmet>
      <section className="_hero-section relative py-10 lg:min-h-[calc(100vh-80px)] flex justify-center">
        <div className="_gradient-circle-blurred absolute top-[35vh] right-0 w-[300px] h-[200px] rounded-full bg-gradient-to-br from-primary/50 to-transparent filter blur-[100px]"></div>
        <div className="container mx-auto max-w-[1300px] flex flex-col gap-10 lg:items-center">
          <div className="flex flex-col justify-center md:items-center md:text-center z-10 max-w-[620px] lg:max-w-[750px] mx-auto lg:mx-0 md:py-10 min-h-[75vh]">
            <h1
              className="text-3xl sm:text-4xl lg:text-[2.6rem] xl:text-[3rem] font-bold mb-4 text-white sm:leading-10 lg:leading-13"
              style={{
                letterSpacing: "-0.03em",
              }}
            >
              Branding is all about{" "}
              <span className="text-gray-light">
                storytelling
              </span>. We{" "}<span className="text-gray-light">
                visualize
              </span>{" "}
              your touchy stories
            </h1>
            <p className="text-[14px] md:text-[17px] mt-4 mb-7 xl:px-10 text-silver-light leading-6 md:leading-7 font-medium">
              We bring brands and people closer. With a focus on
              emotion-driven connections, we craft experiences that resonate
              and endure.
            </p>
            <div className="mt-3 flex gap-4 md:gap-10 flex-col items-center sm:flex-row">
              <NavLink to="/about-us">
                <button
                  className="px-7 text-md md:text-[16px] md:px-8 py-4 text-white font-bold rounded-lg border-2 border-primary active:scale-95 flex gap-1 items-center justify-center w-fit min-w-[200px] hover:scale-105"
                  title="Click here to learn more"
                >
                  Learn more <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                  </svg>

                </button>
              </NavLink>
              <NavLink to="/services/">
                <button
                  className="text-sm md:text-[16px] text-white bg-transparent border-b border-blue-light pb-0.5 hover:scale-95 w-fit"
                  title="Click here to compare our plans"
                >
                  Find your service &rarr;
                </button>
              </NavLink>
            </div>
          </div>

          <div className="z-10 w-full">
            <div className="bg-gray-700 rounded-lg relative mx-auto">
              <video
                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                autoPlay
                muted={isMuted}
                controls={false}
                disablePictureInPicture
                alt="A visual representation of videophics"
                className="object-cover rounded-lg w-full"
                id="hero-video"
                style={{
                  aspectRatio: "16/9",
                }}
              />
              <button
                className="absolute top-[10px] right-[10px] bg-blue-700 text-white p-2 hover:scale-90 active:opacity-75 active:scale-95 rounded-full"
                onClick={() => {
                  document.getElementById("hero-video").muted = !isMuted;
                  setMuted(!isMuted);
                }}
              >
                {!isMuted ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="_services-section py-[4rem] md:min-h-[calc(100vh-80px)]">
        <div className="container mx-auto max-w-[1300px]">
          <Services />
          <div className="_unique-features pt-[10rem] flex flex-col gap-12">
            <div className="min-h-[40vh] flex flex-col justify-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-[600] text-white leading-10 text-center mb-2">
                Why Choose Us?
              </h1>
              <p className="text-sm md:text-md lg:text-xl text-gray-400 leading-6 md:leading-7 text-center mt-3 mb-[4rem]">
                What makes us different from others in the industry.
              </p>
              <div className="grid-flow-col gap-5 relative">
                {[{ title: "Organic Reach", icon: "organic.png" }, { title: "Emotional Connection", icon: "emotion.png" }, { title: "Story Telling", icon: "story.png" }].map(
                  (f, index) => (
                    <div
                      key={index}
                      className="relative flex flex-col p-6 rounded-lg h-[40vh] md:h-[70vh] md:max-w-[100%] mx-auto mb-10 bg-cover bg-center group bg-yellow-light/10"
                    >
                      {/* Background Overlay */}
                      <div className="absolute inset-0 bg-black opacity-10 group-hover:bg-black group-hover:opacity-30 transition duration-500"></div>

                      {/* Bottom Left Content */}
                      <div className="flex flex-col items-start gap-4 absolute left-[5%] bottom-[10%] md:left-[80px] md:bottom-[17%] md:opacity-0 md:group-hover:opacity-100 transition duration-500">
                        <img
                          src={`/images/static/${f.icon
                            .toLowerCase()
                            .replace(" ", "-")}`}
                          alt={f.title}
                          className="w-16 h-16 md:w-24 md:h-24"
                        />
                        <h1 className="text-3xl lg:text-5xl md:text-4xl font-bold text-white md:opacity-0 md:group-hover:opacity-100 transition duration-500">
                          {f.title}
                        </h1>
                        <p className="text-md font-[500] lg:text-2xl md:text-xl text-gray-400 md:opacity-0 md:group-hover:opacity-100 transition duration-500 leading-6 mr-2">
                          {index === 0 &&
                            "We help you reach your audience organically without any paid ads."}
                          {index === 1 &&
                            "We help you build an emotional connection between brand and customer."}
                          {index === 2 &&
                            "We help you find the real connection story of your brand."}
                        </p>
                      </div>

                      {/* Centered h1 */}
                      <div className="flex justify-center items-center absolute inset-0 opacity-0 md:opacity-100 md:group-hover:opacity-0 transition duration-500">
                        <h1 className="md:text-4xl lg:text-5xl font-bold text-white tracking-wide">
                          {f.title}
                        </h1>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<section className="_team-section bg-transparent py-[8rem] pt-[6rem] flex flex-col justify-center items-center">
        <div className="container mx-auto max-w-[1300px]">
          <div className="text-center">
            <p className="text-sm text-gray-400 leading-6 md:leading-7 mb-2 uppercase">
              Our Team
            </p>
            <h3 className="text-3xl lg:text-4xl font-[600] mb-4 text-white leading-10">
              Meet Our Team
            </h3>
          </div>
          <div className="_persons grid sm:grid-cols-2 md:grid-cols-3 gap-9 pt-[4rem]">
            <div className="flex flex-col items-center">
              <img
                src="/images/static/persons/saadalamin.jpg"
                className="w-full max-w-[300px] bg-blue-300 rounded-md object-cover"
                style={{ aspectRatio: "3/3" }}
              />
              <h4 className="text-xl font-[600] mt-4 text-white leading-8">
                Saad Al Amin
              </h4>
              <p className="text-sm text-gray-400 leading-6">
                CEO & Founder
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src=""
                className="w-full max-w-[300px] bg-blue-300 rounded-md object-cover"
                style={{ aspectRatio: "3/3" }}
              />
              <h4 className="text-xl font-[600] mt-4 text-white leading-8">
                Unknown
              </h4>
              <p className="text-sm text-gray-400 leading-6">
                Unknown
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/images/static/persons/nishat.jpg"
                className="w-full max-w-[300px] bg-blue-300 rounded-md object-cover"
                style={{ aspectRatio: "3/3" }}
              />
              <h4 className="text-xl font-[600] mt-4 text-white leading-8">
                Zadid Al Lisan
              </h4>
              <p className="text-sm text-gray-400 leading-6">
                CTO
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src=""
                className="w-full max-w-[300px] bg-blue-300 rounded-md object-cover"
                style={{ aspectRatio: "3/3" }}
              />
              <h4 className="text-xl font-[600] mt-4 text-white leading-8">
                Unknown
              </h4>
              <p className="text-sm text-gray-400 leading-6">
                Unknown
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/images/static/persons/mohammadsefatullah.jpg"
                className="w-full max-w-[300px] bg-blue-300 rounded-md object-cover"
                style={{ aspectRatio: "3/3" }}
              />
              <h4 className="text-xl font-[600] mt-4 text-white leading-8">
                Mohammad Sefatullah
              </h4>
              <p className="text-sm text-gray-400 leading-6">
                Web Developer
              </p>
            </div>
          </div>
        </div>
      </section>*/}
      <div className="bg-silver-light/5 py-[5rem]">
        <section className="_clients-section pb-[4rem] flex flex-col justify-center items-center">
          <Clients />
        </section>
        <div className="container mx-auto max-w-[1300px]">
          <section
            id="booking"
            className="_booking-section py-12 md:py-[6.5rem] bg-yellow-light/5 flex flex-col justify-center items-center rounded-lg"
          >
            <Booking />
          </section>
        </div>
      </div>
      <section
        className="_contact-section bg-transparent pt-[8rem] flex flex-col justify-center items-center mb-4"
        id="contact"
      >
        <div className="container mx-auto max-w-[1300px] grid md:grid-cols-2 gap-10">
          <Contact />
        </div>
      </section>
      <section
        className="_faq-section py-[8rem] pb-[4rem] md:min-h-[calc(100vh-80px)] flex flex-col justify-center items-center"
        id="faq"
      >
        <div className="container mx-auto max-w-[1300px]">
          <div className="text-center">
            <h3 className="text-3xl lg:text-4xl font-[600] text-white leading-10">
              Frequently Asked Questions
            </h3>
            <p className="text-[14px] mt-4 md:text-[17px] text-gray-400 leading-6 md:leading-7 mb-8">
              Can't find what you're looking for? Book an appointment <a href="#booking" className="text-primary">here</a>.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="max-w-[500px] md:max-w-[700px] pt-[3rem]">
              <Collapsible title="What services do you offer?">
                <p>
                  We offer a wide range of services including branding,
                  development, brand advisory, and more.{" "}
                  <Link to="/services" className="text-primary">
                    Learn more
                  </Link>
                  .
                </p>
              </Collapsible>
              <Collapsible title="How can I book an appointment?">
                <p>
                  You can book an appointment by clicking{" "}
                  <a href="#booking" className="text-primary">
                    here
                  </a>
                  .
                </p>
              </Collapsible>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
