
import "./homePage.css";
import React, { useEffect, useState } from "react";
import CollectorCars from "./CollectorCars";
import { motion, useAnimation } from "framer-motion";
import Logo from "../../images/logo1.png";
import Navbar from "./Navbar";
import Events from "./Events";
import Advert from "./Advert";

import video from "../../images/video/video23.mp4";
import ImageComparison from "./ImageComparison";
import VideoSection from "./VideoSection";
import ScrollSection from "./ScrollSection";

const HomePage = () => {
 

  const videoCtrl = useAnimation();
  const logoCtrl = useAnimation();
  const [pointerOff, setPointerOff] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      // fade out video
      videoCtrl
        .start({
          opacity: 0,
          transition: { duration: 1.5, ease: "easeInOut" },
        })
        .then(() => setPointerOff(true));

      // start logo animation
      logoCtrl.start({
        y: 0,
        scale: 1,
        opacity: 1,
        rotate: 0,
        transition: {
          type: "spring",
          stiffness: 180,
          damping: 15,
          mass: 1,
          duration: 3.8,
          bounce: 0.5,
        },
      });
    }, 4500);

    return () => clearTimeout(timer);
  }, [videoCtrl, logoCtrl]);

  return (
    <>
    <div  style={{backgroundColor:"#edebd7"}}>
      <div
        style={{
          position: "relative",
          width: "100%",
          minHeight: "100vh",
          overflow: "hidden",
        }}
        className="curtain-top"
      >
        {/* Video background layer */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={videoCtrl}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            overflow: "hidden",
            zIndex: 10,
            pointerEvents: pointerOff ? "none" : "auto",
          }}
        >
          <video
            src={video}
            autoPlay
            muted
            loop
            playsInline
            disablePictureInPicture
            controlsList="nodownload nofullscreen noremoteplayback"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              opacity: 0.5,
            }}
          />
        </motion.div>

        {/* Content section */}
        <div id="sectionOne" style={{ position: "relative", zIndex: 5 }}>
          <Navbar />
          <motion.div
            className="logodiv"
            initial={{ y: -500, scale: 1.8, opacity: 0, rotate: -30 }}
            animate={logoCtrl} // controlled by useAnimation
          >
            <img src={Logo} alt="Logo" />
          </motion.div>
        </div>
      </div>
      <CollectorCars />
      <ScrollSection/>
      <Events />
      <ImageComparison />
      <VideoSection />
      <Advert />
      </div>
    </>
  );
};

export default HomePage;
