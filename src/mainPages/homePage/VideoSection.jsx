import React from "react";
import "./VideoSection.css";
import video from "../../images/video/video1.mp4";
import { motion } from "framer-motion";

export default function VideoSection() {
  return (
    <>
      <div className="videoSection">
        <motion.div
          className="videoDiv"
          initial={{ scale: 0.2 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <video autoPlay muted loop playsInline>
            <source src={video} type="video/mp4" />
          </video>
        </motion.div>

        <motion.h1
          className="overlayText"
          initial={{ y: "100%", opacity: 0 }}
          whileInView={{ y: "0%", opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
        >
          GALERIJA
        </motion.h1>
      </div>
    </>
  );
}
