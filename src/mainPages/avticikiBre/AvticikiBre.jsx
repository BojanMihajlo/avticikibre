import NavBar from "../homePage/Navbar";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import bg1 from "../../images/wallcar1.jpg";

export default function AvticikiBre() {
  const [showSecond, setShowSecond] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSecond(true), 1500); // reveal after 3s
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
            initial={{ y: "100%" }} // start fully hidden at the bottom
            whileInView={{ y: 0 }} // slide up to reveal
            transition={{ duration: 2, ease: "easeInOut" }}
            style={{
              backgroundColor: "#A39594",
              position: "absolute",
              width: "100%",
              height: "100%",
            }}
          >
            <NavBar />
            <h1>video</h1>
          </motion.div>
        )}
      </div>
    </>
  );
}
