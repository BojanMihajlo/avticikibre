import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import img1 from "../../images/poster2.jpg";
import img2 from "../../images/poster1.JPG";
// import img3 from "../../images/poster3.jpg";
import "./UnrollPosters.css";

const images = [img1, img2];

const Poster = ({ src }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [90, 0]);

  return (
    <div ref={ref} className="poster-container">
      <motion.img
        src={src}
        className="poster-image"
        style={{
          scaleY,
          rotateX,
          transformOrigin: "top center",
        }}
      />
    </div>
  );
};

export default function UnrollPosters() {
  return (
    <div className="unroll-wrapper">
      {images.map((img, index) => (
        <Poster key={index} src={img} />
      ))}
    </div>
  );
}
