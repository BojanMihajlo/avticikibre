import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CarButton from "../carButton/CarButton";
import yellowCar from "../../images/avticikiBre-images/yellowCar.png"; // Adjust the path
import colcar1 from "../../images/colcar1.jpg";
import colcar2 from "../../images/colcar2.jpg";
import colcar3 from "../../images/colcar3.jpg";
import colcar4 from "../../images/colcar4.jpg";
import colcar5 from "../../images/colcar5.jpg";
import colcar6 from "../../images/colcar6.jpg";
import "./NewsCars.css";

export default function NewsCars({
  cards = [
    { id: 1, img: colcar1, title: "Card 1" },
    { id: 2, img: colcar2, title: "Card 2" },
    { id: 3, img: colcar3, title: "Card 3" },
    { id: 4, img: colcar4, title: "Card 4" },
    { id: 5, img: colcar5, title: "Card 5" },
    { id: 6, img: colcar6, title: "Card 6" },
  ],
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const isMobile = window.innerWidth < 768;
  const SECTION_HEIGHT = isMobile ? "300vh" : "330vh";
  const MAX_PUSH = isMobile ? 70 : 320; // smaller push on phones
  const CARD_HEIGHT = isMobile ? 150 : 200;
  const INITIAL_OFFSET = isMobile
    ? 0.18 * window.innerWidth // ~8% of screen width
    : 0.12 * window.innerWidth;
  const IMAGE_RANGE = isMobile ? ["0%", "800%"] : ["0%", "900%"];

  const imageY = useTransform(scrollYProgress, [0, 1], IMAGE_RANGE);

  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => setProgress(v));
    return () => unsubscribe && unsubscribe();
  }, [scrollYProgress]);

  // const INITIAL_OFFSET = 0.12 * window.innerWidth; // 20% of screen width
  return (
    <>
      {/* This is the section BEFORE the scroll image appears */}
      {/* <div style={{ height: "50vh", background: "#f0f0f0" }}></div> */}

      <section
        ref={ref}
        style={{
          height: SECTION_HEIGHT,
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          backgroundColor: "#a39594",
        }}
        className="sectionTwoScroll"
      >
        {/* Image on left moving down */}
        <motion.img
          src={yellowCar}
          alt="Passing Car"
          style={{
            // position: "absolute",
            // top: 0,
            // left: "10%",
            transform: "translateX(-50%)",
            y: imageY,
            // width: 220,
            // height: "auto",
            zIndex: 1,
            filter: "drop-shadow(5px 5px 15px black)",
          }}
          className="yellowCarImage"
        />

        {/* Cards stacked over image initially, moving right as image scrolls past */}
        <div
          style={{
            position: "relative",
            width: "50%",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            marginLeft: "10%",
            zIndex: 2,
          }}
        >
          {cards.map((card, index) => {
            const start = 0.1 + index * 0.08;
            let xOffset = INITIAL_OFFSET;

            if (progress >= start) {
              const t = Math.min((progress - start) / 0.2, 1); // Smooth step
              xOffset = INITIAL_OFFSET + MAX_PUSH * t;
            }

            return (
              <motion.div
                key={card.id}
                style={{
                  x: xOffset,
                  height: CARD_HEIGHT,
                  background: "#fff",
                  borderRadius: 14,
                  overflow: "hidden",
                  filter: "drop-shadow(5px 5px 15px #e3b23c)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <img
                  src={card.img}
                  alt={card.title}
                  style={{
                    width: "100%",
                    height: "70%",
                    objectFit: "cover",
                  }}
                />
                <div
                  style={{
                    padding: "0.5rem 1rem",
                    textAlign: "center",
                    fontWeight: 600,
                  }}
                >
                  {card.title}
                </div>
              </motion.div>
            );
          })}
        </div>
        <motion.div
          className="buttonMore"
          initial={{ x: -170, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: false }}
        >
          <CarButton width={200} text={"Види галерија"} />
        </motion.div>

        <div className="buttonMoreMob">
          <CarButton width={120} text={"Види галерија"} />
        </div>
      </section>

      <div className="divStopTwo"></div>
    </>
  );
}
