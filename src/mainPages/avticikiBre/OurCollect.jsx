import React from "react";
import "./OurCollect.css";
import { useOutletContext } from "react-router-dom";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import CarCards from "./CarCards";

export default function OurCollect() {
  const [subtitle] = useOutletContext();

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"], // Scroll through the whole section
    layoutEffect: false,
  });

  const fontSizeBig = useTransform(scrollYProgress, [0, 1], ["150px", "50px"]);

  return (
    <>
      <div>
        <motion.div
          ref={sectionRef}
          className="subtitleCollect"
          style={{ fontSize: fontSizeBig, overflow: "hidden" }}
        >
          {subtitle ? "НАША КОЛЕКЦИЈА" : "OUR COLLECTION"}
        </motion.div>
      </div>

      <div className="cardsAr">
        <CarCards />
      </div>

      {/* <motion.div className="bluecar">
        <img src={blueCar} alt="car" />
      </motion.div> */}
    </>
  );
}
