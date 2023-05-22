import React, { forwardRef } from "react";
import Container from "./container";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const lineStyle = "text-2xl sm:text-2xl 2xl:text-3xl";

  const content = [
    <>
      <span className="text-palette-red">Chez AFM Motors</span>, nous sommes
      passionnés par les voitures et nous sommes fiers de fournir des services
      de réparation automobile professionnels et fiables à nos clients. "Nous
      sommes une entreprise familiale avec une longue histoire de service à la
      communauté locale.
    </>,

    <>
      Nous avons une équipe de{" "}
      <span className="text-palette-red">mécaniciens qualifiés</span> et
      expérimentés qui peuvent prendre en charge tous les types de réparations
      et d'entretiens automobiles, des petites réparations aux révisions
      complètes.
    </>,
    <>
      Nous nous engageons à offrir{" "}
      <span className="text-palette-red">un service de qualité</span>{" "}
      supérieure à des prix abordables pour satisfaire les besoins de nos
      clients. Contactez-nous dès maintenant pour discuter de vos besoins
      automobiles et découvrir comment nous pouvons vous aider à prendre soin de
      votre voiture.
    </>,
  ];

  const listVariants = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
    hidden: {
      opacity: 0,
    },
  };

  const listItemVariants = {
    visible: {
      opacity: 1,
      y: 0,
    },
    hidden: {
      opacity: 0,
      y: 10,
    },
  };

  return (
    <Container extraClasses="About-Container" id="apropos">
      <div className="flex flex-col md:grid md:grid-cols-2  py-16  relative md:py-24 lg:py-36 ">
        <div className="">
          <p className="text-palette-red font-montrealRegular">Our story</p>
        <motion.h4 variants={listItemVariants} className={`${lineStyle} font-montrealMedium max-w-[280px] mt-4 md:w-[400px] md:mt-4`}>
          Tell the story of how your company came about
        </motion.h4>
        </div>
        <motion.ul
          ref={ref}
          className="mt-12 grid grid-cols-1 gap-y-8 font-thin"
          variants={listVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {content.map((item, index) => (
            <motion.li
              key={index}
              variants={listItemVariants}
              className="text-base sm:text-lg md:text-xl font-montrealRegular"
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </Container>
  );
}
