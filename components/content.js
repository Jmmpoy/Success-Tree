import React from "react";
import Container from "./container";
import { motion, m } from "framer-motion";
import { useInView } from "react-intersection-observer";
import heroImage from "../public/images/hero-image.webp";
import Link from "next/link";

export default function Content() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const lineStyle =
    " carousel-textLine font-montrealRegular line  sm:text-xl  md:text-2xl";
  const lines = [
    <>
      Vous cherchez un{" "}
      <span className="text-palette-red">garage automobile</span> de
      confiance ?
    </>,
    "Notre galerie d'images vous montre les raisons pour lesquelles",
    <>
      nous sommes <span className="text-palette-red">le choix idéal</span>{" "}
      pour prendre soin de votre voiture.
    </>,
  ];

  return (
    <div className="relative h-[50vh] overflow-hidden flex flex-col justify-center">
      <Container extraClasses="relative bg-palette-blue rounded-b-[2rem] h-full">
        <main className="">
        <div className=" w-12/12 relative">
              <motion.div>
                {lines.map((line, index) => {
                  return (
                    <m.div
                      className="first-title-line-container overflow-hidden"
                      key={index}
                    >
                      <motion.p
                        initial={{ y: 150 }}
                        animate={{ y: 0 }}
                        transition={{
                          duration: 0.8,
                          delay: 0.7,
                          ease: [0.08, 0.82, 0.17, 1],
                        }}
                        className="text-base sm:text-xl font-montrealMedium text-center text-white  text-opacity-100 mb-0  "
                      >
                        {line}
                      </motion.p>
                    </m.div>
                  );
                })}
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.5, delay: 1.3, ease: "easeInOut" },
              }}
              className="flex justify-center mt-8"
            >
              <motion.button
                type="button"
                whileHover={{ scale: 1.1 }} // Scale the element on hover
                className=" text-black  absolute cursor-pointer    text-opacity-100 bg-white bg-opacity-100 font-medium rounded-[30px] text-sm h-[48px] w-[150px] sm:w-40 sm:text-lg  px-5 py-2.5 mr-2 mb-2  hover:transition duration-100 ease-in-out"
              >
                <div className="flex justify-between">
                  <Link href="" to="contact" smooth={true} duration={800}>
                    Find More
                  </Link>
                  <svg
                    className="self-center ml-2"
                    width="21"
                    height="12"
                    viewBox="0 0 21 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.9424 5.5711L14.8279 0.0998802C14.704 -0.0302057 14.4925 -0.0311413 14.3733 0.084753C14.2521 0.202513 14.2432 0.418693 14.3583 0.542439L18.9634 5.47055L1.16243 5.47055C0.985884 5.47055 0.842773 5.61464 0.842773 5.79239C0.842773 5.97014 0.985884 6.11423 1.16243 6.11423L18.9634 6.11423L14.3583 11.0424C14.2432 11.1661 14.2502 11.3842 14.3733 11.5C14.4962 11.6159 14.694 11.6188 14.8279 11.4849L19.9424 6.01369C20.064 5.86307 20.032 5.67846 19.9424 5.5711Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </motion.button>
            </motion.div>
        </main>
      </Container>

      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -1,
        }}
      >
        <img
          style={{ minWidth: "100%", height: "100%" }}
          src={heroImage.src}
          alt="bg"
        />
        <div className="absolute top-0 w-screen h-screen bg-black opacity-70" />
      </motion.div>
    </div>
  );
}
