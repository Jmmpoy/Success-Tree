
import Container from "../container";
import Navigation from "./navigation";
import OverlayMenu from "./menu";
import Burger from "./burger";
import Logo from "./logo";

import { useState, useEffect } from "react";
import {
  motion,
  LayoutGroup,
  AnimatePresence,
  useCycle,
} from "framer-motion";


export default function Header() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [open, setOpen] = useCycle(false, true);
  const menuItems = [
    { route: "About", url: "apropos" },
    { route: "Services", url: "services" },
    { route: "Contact", url: "contact" },
  ];

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [open]);


  return (
    <header className="overflow-hidden bg-palette-white fixed z-20  text-white w-full flex flex-col justify-center md:h-24 h-20">
      <Container extraClasses="Header-Section ">
        <div className="flex justify-between h-full ">
          <Logo style="w-10 sm:w-16 md:w-18" />
          <LayoutGroup>
            <Navigation
              items={menuItems}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          </LayoutGroup>
          <Burger open={open} setOpen={setOpen} />
        </div>
      </Container>
      <AnimatePresence>
        {open && <OverlayMenu open={open} items={menuItems} setOpen={setOpen}/>}
      </AnimatePresence>
    </header>
  );
}
