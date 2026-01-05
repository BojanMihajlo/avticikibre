import NavBar from "../homePage/Navbar";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "./avticikiBre.css";
import video from "../../images/video/video2.mp4";
import OurCollect from "./OurCollect";
import Advert from "../homePage/Advert";
import WorldNews from "./WorldNews";

export default function AvticikiBre() {
  const [showSecond, setShowSecond] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSecond(true), 500); // reveal after 3s
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
     <div style={{backgroundColor: " #6e675f"}}>
      <div className="firstLayer">
        {/* First background */}
        <motion.div
          
          className="motionBack"
        />

        {showSecond && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            style={{
              position: "relative",
              width: "100%",
              height: "112vh", // Full hero height
              overflow: "hidden",
            }}
            className="heroAvticiki"
          >
            {/* Background Video */}
            <video
              autoPlay
              muted
              loop
              playsInline
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: 0,
              }}
            >
              <source src={video} type="video/mp4" />
              <p>Your browser does not support the video tag.</p>
            </video>

            <div style={{ position: "relative", zIndex: 1 }}>
              <NavBar />
            </div>
          </motion.div>
        )}
      </div>
      <div className="fancy-div">
        <OurCollect />
      </div>
      <div>
        <WorldNews />
      </div>
      <div>
        <Advert />
      </div>
      </div>
    </>
  );
}
