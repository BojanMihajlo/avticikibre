import React from "react";
import "./OurCollect.css";
import { useOutletContext } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CarCards from "./CarCards";

export default function OurCollect() {
  const [subtitle] = useOutletContext();
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" }); // trigger when in view

  // const sectionRef = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: sectionRef,
  //   offset: ["start start", "end end"], // Scroll through the whole section
  //   layoutEffect: false,
  // });

  // const fontSizeP = useTransform(scrollYProgress, [0, 1], ["22px", "18px"]);

  return (
    <>
      <div className="subtitleCollect">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 2 }}
        >
          {subtitle ? "НАША КОЛЕКЦИЈА" : "OUR COLLECTION"}
        </motion.div>
      </div>
      <div className="textOur">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 2 }}
        >
          <h3>
            {subtitle
              ? "'Влезете во нашиот свет на автичики и изберете го најдобриот модел за вас'"
              : "'Enter our world of cars and choose the best model fosr you.'"}
          </h3>
        </motion.div>
      </div>

      <div className="cardsAr">
        <CarCards />
      </div>
    </>
  );
}
