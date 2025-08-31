import { useOutletContext } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import NewsCars from "./NewsCars";
import "./WorldNews.css";

export default function WorldNews() {
  const [subtitle] = useOutletContext();

  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" }); // trigger when in view

  // const { scrollYProgress } = useScroll({
  //   target: sectionRef,
  //   offset: ["start start", "end end"], // Scroll through the whole section
  //   layoutEffect: false,
  // });

  // const fontSizeBig = useTransform(scrollYProgress, [0, 1], ["120px", "50px"]);
  // const fontSizeP = useTransform(scrollYProgress, [0, 1], ["22px", "18px"]);

  return (
    <>
      <div className="world">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 2 }}
        >
          {subtitle ? "СВЕТСКИ НОВИТЕТИ" : "WORLD NEWS"}
        </motion.div>
      </div>

      <div className="textOurTwo">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 2 }}
        >
          <h3>
            {subtitle
              ? "'Ги апдејтуваме сите нови модели во светот на автичики'"
              : "'We update all the new models in the world of cars'"}
          </h3>
        </motion.div>
      </div>

      <div>
        <NewsCars />
      </div>
    </>
  );
}
