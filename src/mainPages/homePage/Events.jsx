import React from "react";
import "./Events.css";
import { useOutletContext } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import PosterUnroll from "./UnrollPosters";
// import image1 from "../../images/poster2.jpg";
// import image2 from "../../images/poster1.JPG";
// import image3 from "../../images/poster3.jpg";

export default function Events() {
  const [subtitle] = useOutletContext();
  const text = subtitle ? "НАСТАНИ" : "EVENTS";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div>
      <div className="eventsMain">
        <div>
          <h1 ref={ref}>
            {text.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{
                  x: (Math.random() - 0.5) * 800, 
                  y: (Math.random() - 0.5) * 600,
                  opacity: 0,
                  rotate: (Math.random() - 0.5) * 90,
                }}
                animate={
                  isInView
                    ? {
                        x: 0,
                        y: 0,
                        rotate: 0,
                        opacity: 1,
                        transition: {
                          duration: 1.8,
                          delay: index * 0.1,
                          type: "spring",
                          stiffness: 50,
                          damping: 20,
                        },
                      }
                    : {}
                }
                style={{ display: "inline-block", minWidth: "1ch" }}
              >
                {char}
              </motion.span>
            ))}
          </h1>
        </div>
        <PosterUnroll />
      </div>
    </div>
  );
}
