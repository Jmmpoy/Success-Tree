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
      Turn your vision into reality with our consulting firm's outstanding qualities,
    </>,
    <>
      where innovation, strategy, and operational excellence converge to propel
    </>,
    <>your business to new heights.</>
  ];

  return (
    <div className="relative h-[50vh] overflow-hidden flex flex-col justify-center">
      <Container extraClasses="relative bg-palette-blue rounded-b-[2rem] h-full">
        <main className="">
        <div className=" w-12/12 relative">
              <h3 className="text-white text-center">Our vision</h3>
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