import { useOutletContext } from "react-router-dom";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import NewsCars from "./NewsCars";
import "./WorldNews.css"

export default function WorldNews() {
  const [subtitle] = useOutletContext();

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"], // Scroll through the whole section
    layoutEffect: false,
  });

  const fontSizeBig = useTransform(scrollYProgress, [0, 1], ["120px", "50px"]);

  return (
    <>
      <div className="world">
        <motion.div
          ref={sectionRef}
          className="subtitleCollect"
          style={{ fontSize: fontSizeBig, overflow: "hidden",paddingBottom:"4%" }}
        >
          {subtitle ? "СВЕТСКИ НОВИТЕТИ" : "WORLD NEWS"}
        </motion.div>
      </div>

      <div >
        <NewsCars />
      </div>

      
    </>
  );
}
