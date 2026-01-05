import { useOutletContext } from "react-router-dom";
import { useRef } from "react";
import "./TextSection.css";
import { motion, useInView } from "framer-motion";

const TextSection = () => {
  const [ subtitle ] = useOutletContext(); // true = MK, false = EN
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });


  const textAvto = subtitle ? "Автомобилизмот не е само средство за движење, туку и комбинација од технологија, иновации и страст. Автомобилската индустрија постојано се развива и носи нови решенија":"Automobilism is not just a means of transportation, but a combination of technology, innovation, and passion. The automotive industry constantly evolves and brings new solutions."



  return (
    <section className="textAvto-section">

        <h2 ref={sectionRef} >
  {textAvto.split(" ").map((word, index) => (
    <motion.span
      key={index}
      initial={{
        x: (Math.random() - 0.5) * 600,
        y: (Math.random() - 0.5) * 400,
        rotate: (Math.random() - 0.5) * 60,
        opacity: 0,
      }}
      animate={
        isInView
          ? {
              x: 0,
              y: 0,
              rotate: 0,
              opacity: 1,
              transition: {
                duration: 1.6,
                delay: index * 0.12,
                type: "spring",
                stiffness: 60,
                damping: 18,
              },
            }
          : {}
      }
      style={{
        display: "inline-block",
        marginRight: "0.35em",
        whiteSpace: "nowrap",
      }}
    >
      {word}
    </motion.span>
  ))}
</h2>

    </section>
  );
};

export default TextSection;
