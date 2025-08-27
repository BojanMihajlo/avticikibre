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

  const fontSizeBig = useTransform(scrollYProgress, [0, 1], ["120px", "50px"]);
  const fontSizeP = useTransform(scrollYProgress, [0, 1], ["22px", "18px"])

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
      <div className="textOur">
        <motion.div
         ref={sectionRef}
         
          style={{ fontSize: fontSizeP, overflow: "hidden" }}
        >
        <h3>{subtitle ? "'Влезете во нашиот свет на автичики и изберете го најдобриот модел за вас'" : "'Enter our world of cars and choose the best model fosr you.'"}</h3>
        </motion.div>
      </div>

      <div className="cardsAr">
        <CarCards />
      </div>

    
    </>
  );
}
