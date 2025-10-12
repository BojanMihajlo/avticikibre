import React from "react";
import "./VideoSection.css";
import video from "../../images/video/video1.mp4";
import { motion } from "framer-motion";
import { useOutletContext, Link } from "react-router-dom";
import breImage from "../../images/bre.png";

export default function VideoSection() {
  const [subtitle] = useOutletContext();
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

        <motion.div
          className="overlayContainer"
          initial={{ y: "100%", opacity: 0 }}
          whileInView={{ y: "0%", opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Link to="avticikibre/galleryCars" className="overlayLink">
            <h1 className="overlayText">{subtitle ? "ГАЛЕРИЈА" : "GALLERY"}</h1>
            <img src={breImage} alt="icon" className="overlayImg" />
          </Link>
        </motion.div>
      </div>
    </>
  );
}
