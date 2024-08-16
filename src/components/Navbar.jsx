import { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  const offerEndsIn = new Date("1 January 2025");

  const ServicesList = ({ mobile }) => (
    <>
      <Link className="w-fit hover:text-gray-light" to="/services">
        <li
          className={
            !mobile
              ? "border-b-[2px] border-transparent hover:border-blue-500"
              : "border-b-[2px] border-transparent hover:border-blue-500"
          }
        >
          <p className={mobile && "hidden"}>Overview</p>
          <p className="_hover">Overview</p>
        </li>
      </Link>
      <Link className="w-fit hover:text-gray-light" to="/services/branding">
        <li
          className={
            !mobile
              ? "border-b-[2px] border-transparent hover:border-blue-500"
              : "border-b-[2px] hover:border-blue-500"
          }
          index="1"
        >
          <p className={mobile && "hidden"}>Branding</p>
          <p className="_hover">Branding</p>
        </li>
      </Link>
      <Link className="w-fit hover:text-gray-light" to="/services/development">
        <li
          className="border-b-[2px] border-transparent hover:border-blue-500"
          index="3"
        >
          <p className={mobile && "hidden"}>Development</p>
          <p className="_hover">Development</p>
        </li>
      </Link>
      <Link className="w-fit hover:text-gray-light" to="/services/brand-advisory">
        <li
          className="border-b-[2px] border-transparent hover:border-blue-500"
          index="2"
        >
          <p className={mobile && "hidden"}>Brand Advisory</p>
          <p className="_hover">Brand Advisory</p>
        </li>
      </Link>
      <Link className="w-fit hover:text-gray-light" to="/services/marketing">
        <li
          className="border-b-[2px] border-transparent hover:border-blue-500"
          index="4"
        >
          <p className={mobile && "hidden"}>Marketing</p>
          <p className="_hover">Marketing</p>
        </li>
      </Link>
      <Link className="w-fit hover:text-gray-light" to="/services/content-writing">
        <li
          className="border-b-[2px] border-transparent hover:border-blue-500"
          index="5"
        >
          <p className={mobile && "hidden"}>Content Writing</p>
          <p className="_hover">Content Writing</p>
        </li>
      </Link>
      <Link className="w-fit hover:text-gray-light" to="/services/software-testing">
        <li
          className="border-b-[2px] border-transparent hover:border-blue-500"
          index="6"
        >
          <p className={mobile && "hidden"}>Software Testing</p>
          <p className="_hover">Software Testing</p>
        </li>
      </Link>
    </>
  );
  const Menu = () => (
    <>
      <li className="select-none hover:text-silver-light lg:hover:bg-gray-400/5">
        <NavLink to="/">Home</NavLink>
      </li>
      <li
        className="relative select-none"
        onMouseLeave={hideServiceMenu}
      >
        <a
          id="navServiceMenuItem"
          className="hidden lg:block hover:text-silver-light hover:bg-gray-400/5"
          onMouseEnter={() => {
            document
              .querySelector("._services-menu")
              .classList.remove("transform");
            document
              .querySelector("._services-menu")
              .classList.remove("-translate-y-[100rem]");
            document
              .querySelector("._services-menu")
              .classList.add("opacity-100");
          }}
        >
          Services{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            className="w-4 h-4 inline-block stroke-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>
        <button
          className="lg:hidden"
          onClick={() => {
            document
              .getElementById("service-lists-in-mob")
              .classList.toggle("hidden");
          }}
        >
          Services{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            className="w-4 h-4 inline-block stroke-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div id="service-lists-in-mob" className="mt-3 mb-4 lg:hidden">
          <ol className="flex flex-col">
            <ServicesList mobile={true} />
          </ol>
        </div>
        <div
          className="_services-menu bg-slate-800 absolute -translate-y-[100rem] transition-all duration-500 ease-in-out px-6 shadow-md opacity-0 hidden md:block w-auto whitespace-nowrap"
          role="menu"
          style={{ zIndex: "10" }}
        >
          <ol
            className="custom flex flex-col gap-3 text-lg font-[500] text-white py-[1.5rem] "
            onClick={hideServiceMenu}
          >
            <ServicesList />
          </ol>
        </div>
      </li>
      <li className="select-none hover:text-silver-light lg:hover:bg-gray-400/5">
        <NavLink to="/about-us">About Us</NavLink>
      </li>
      <li className="select-none hover:text-silver-light lg:hover:bg-gray-400/5">
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li className="select-none block lg:hidden hover:text-silver-light lg:hover:bg-gray-400/5">
        <a href="/#contact">Contact Us</a>
      </li>
    </>
  );
  const hideServiceMenu = () => {
    document.querySelector("._services-menu").classList.add("transform");
    document
      .querySelector("._services-menu")
      .classList.add("-translate-y-[100rem]");
    document.querySelector("._services-menu").classList.remove("opacity-100");
  };
  const hideDrawerMenu = () => {
    document.querySelector("._drawer-menu-layer").classList.add("hidden");
    document.querySelector("._drawer-menu").classList.add("transform");
    document.querySelector("._drawer-menu").classList.add("translate-x-full");
    document
      .querySelector("._drawer-menu")
      .classList.add("-translate-y-[100rem]");
  };

  const initOffer = () => {
    const totalSeconds = Math.floor(
      (offerEndsIn.getTime() - new Date().getTime()) / 1000
    );


    if (totalSeconds <= 0) {
      document.querySelector("._offer-section > div").style.display = "none";
    }

    const d = Math.floor(totalSeconds / 3600 / 24);
    const h = Math.floor(totalSeconds / 3600) % 24;
    const m = Math.floor((totalSeconds % 3660) / 60);
    const s = Math.floor(totalSeconds % 60);

    document.getElementById("offerDays").textContent = d + "d";
    document.getElementById("offerHours").textContent = h + "h";
    document.getElementById("offerMinutes").textContent = m + "m";
    document.getElementById("offerSeconds").textContent = s + "s";
  };

  useEffect(() => {
    window.onscroll = function () {
      if (document.querySelector(".bottom-to-top")) {
        if (
          document.body.scrollTop > 20 ||
          document.documentElement.scrollTop > 20
        ) {
          document.querySelector(".bottom-to-top").style.display = "block";
        } else {
          document.querySelector(".bottom-to-top").style.display = "none";
        }
      }
    };

    const servicesMenuList = document.querySelectorAll("._services-menu ol li");
    servicesMenuList.forEach((li) => {
      li.addEventListener("mouseenter", () => {
        servicesMenuList.forEach((list) => {
          list.classList.remove("active");
        });
        li.classList.add("active");
      });
      li.addEventListener("mouseleave", () => {
        servicesMenuList.forEach((list) => {
          list.classList.remove("active");
        });
      });
    });

    const i = setInterval(() => {
      initOffer();
    }, 1000);
    initOffer();

    return () => {
      clearInterval(i);
    };
  }, []);


  return (
    <>
      <div className="_offer-section w-full bg-gradient-to-l from-dark-blue to-primary z-20 py-2">
        <div className="container mx-auto max-w-[1300px] text-white flex flex-col sm:flex-row justify-center sm:items-center gap-2 sm:gap-6 text-sm md:text-md lg:text-2md flex-wrap hidden md:flex py-1">
          <div className="flex flex-wrap gap-1 md:gap-3">
            <p className="font-[600]">Black Friday Sale!</p>
            <p>Up to 20% off in all packages!</p>
          </div>
          <div className="flex">
            <code className="text-sm md:text-xl">
              <span
                className="bg-white text-black px-2 py-1 rounded-md"
                id="offerDays"
              >
                0d
              </span>
              :
              <span
                className="bg-white text-black px-2 py-1 rounded-md"
                id="offerHours"
              >
                0h
              </span>
              :
              <span
                className="bg-white text-black px-2 py-1 rounded-md"
                id="offerMinutes"
              >
                0m
              </span>
              :
              <span
                className="bg-white text-black px-2 py-1 rounded-md"
                id="offerSeconds"
              >
                0s
              </span>
            </code>
          </div>
        </div>
      </div>
      <div className="_nav-section sticky top-0 left-0 z-50">
        <nav
          className="_navbar py-4 lg:p-0 text-white bg-gradient-to-r from-[#28292d] to-[#4f4f50] border-b border-gray-600/65 shadow-md"
          role="navigation"
        >
          <div className="container mx-auto flex justify-between gap-4">
            <div className="_logo flex items-center">
              <NavLink to="/">
                <h1 className="font-bold text-lg flex items-center">
                  <img
                    src="/logo.jpg"
                    alt="Videophics"
                    className="h-8 w-8 object-cover rounded-md mr-2"
                  />
                  <span>Videophics</span>
                </h1>
              </NavLink>
            </div>
            <ol
              className="_menu ml-7 text-sm items-center hidden lg:flex"
              onClick={hideServiceMenu}
            >
              <Menu />
            </ol>
            <div className="flex gap-5 md:gap-4 justify-end items-center">
              <NavLink
                to="/contact-us"
                className="border-2 border-primary text-white font-bold text-sm px-6 py-3 rounded-md active:scale-95 hidden md:block hover:bg-primary hover:text-black transition-all duration-300 ease-in-out"
              >
                Contact Us
              </NavLink>
              <button
                className="p-2 rounded-full active:scale-95 block lg:hidden active:bg-yellow-light/10 text-white"
                onClick={() => {
                  document
                    .querySelector("._drawer-menu-layer")
                    .classList.toggle("hidden");
                  document
                    .querySelector("._drawer-menu")
                    .classList.toggle("transform");
                  document
                    .querySelector("._drawer-menu")
                    .classList.toggle("translate-x-full");
                  document
                    .querySelector("._drawer-menu")
                    .classList.toggle("-translate-y-[100rem]");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>
        {/*<div className="w-full h-[2px] bg-gradient-to-l from-primary/10 to-primary/80 blur mt-1" />*/}
      </div>
      <div
        className="_drawer-menu max-w-[380px] w-[70%] bg-gray-700 text-white fixed top-0 right-0 h-full transform translate-x-full -translate-y-[100rem] transition-all duration-500 ease-in-out p-6 shadow text-xl rounded-lg"
        role="menu"
        style={{ zIndex: "60" }}
      >
        <div className="brand mb-10">
          <h1 className="font-bold text-lg flex items-center">
            <img
              src="/logo.jpg"
              alt="Videophics"
              className="h-8 w-8 object-cover rounded-md mr-2"
            />
            <span>Videophics</span>
          </h1>
        </div>
        <ol onClick={hideDrawerMenu}>
          <Menu />
        </ol>
      </div>
      <div
        className="_drawer-menu-layer fixed top-0 left-0 h-screen w-full hidden z-50 bg-black bg-opacity-50 transition-all duration-500 ease-in-out"
        onClick={hideDrawerMenu}
      />
      <div className="bottom-to-top fixed right-4 bottom-4 z-50 hidden animate-bounce">
        <button
          className="p-3 bg-white rounded-full active:scale-95 active:bg-gray-100 shadow-md"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
