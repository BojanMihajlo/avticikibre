import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import bg1 from "../../images/loginback.jpg";
// import ContentPage from "./ContentPage";

const texts = ["[AvticikiBre]", "[Avtomobilizam]", "[RogueBrush]"];

export default function BackgroundReveal() {
  const [showSecond, setShowSecond] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSecond(true), 1000); // reveal after 3s
    return () => clearTimeout(timer);
  }, []);

  const [index, setIndex] = useState(0); // which text
  const [subIndex, setSubIndex] = useState(0); // letters in text
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000); // pause before deleting
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (deleting ? -1 : 1));
      },
      deleting ? 50 : 150
    ); // deleting is faster

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  return (
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
      />

      {/* Second background revealing from bottom */}
      {showSecond && (
        <motion.div
          initial={{ y: "100%" }} // start fully hidden at the bottom
          whileInView={{ y: 0 }} // slide up to reveal
          transition={{ duration: 2, ease: "easeInOut" }}
          style={{
            backgroundColor: "#A39594",
            // backgroundSize: "cover",
            // backgroundPosition: "center",
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        >
          <div>
            <motion.h1
              style={{
                fontFamily: "Montserrat",
                color: "#423e37",
                fontSize: "60px",
                textAlign: "center",
                paddingTop: "10%",
              }}
            >
              {texts[index].substring(0, subIndex)}
              <span
                style={{ borderRight: "2px solid #423e37", marginLeft: "2px" }}
              />
            </motion.h1>
          </div>
          {/* <ContentPage /> */}
        </motion.div>
      )}
    </div>
  );
}
