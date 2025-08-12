import NavBar from "../homePage/Navbar";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import bg1 from "../../images/wallcar1.jpg";
import "./avticikiBre.css";
import video from "../../images/video/video2.mp4";

export default function AvticikiBre() {
  const [showSecond, setShowSecond] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSecond(true), 900); // reveal after 3s
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {/* First background */}
        <motion.div
          style={{
            backgroundImage: `url(${bg1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
          className="motionBack"
        />

        {/* <motion.div
            style={{
              backgroundImage: `url(${bg1})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              position: "absolute",
              width: "100%",
              height: "100%",
            }}
            className="motionBackMob"
          /> */}

        {/* Second background revealing from bottom */}
        {showSecond && (
          <motion.div
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            style={{
              position: "relative",
              width: "100%",
              height: "100vh", // Full hero height
              overflow: "hidden",
            }}
          >
            {/* Background Video */}
            <video
              autoPlay
              muted
              loop
              playsInline
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: 0, // keep it behind everything
              }}
            >
              <source src={video} type="video/mp4" />
              <p>Your browser does not support the video tag.</p>
            </video>

            {/* NavBar on top of video */}
            <div style={{ position: "relative", zIndex: 1 }}>
              <NavBar />
            </div>
          </motion.div>
        )}
      </div>
      {/* <div class="fancy-div" >
        <h1>Your Content</h1>
      </div> */}
    </>
  );
}
