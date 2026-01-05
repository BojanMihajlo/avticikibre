import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CarButton from "../carButton/CarButton";
import yellowCar from "../../images/avticikiBre-images/yellowCar.png"; 
import { useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import "./NewsCars.css";
import { useCars } from "./cardsData/cardsData";
import Loader from "../homePage/Loader";

export default function NewsCars(){
   
  const cards = useCars()

  const showLoader = cards.length === 0;
   const navigate = useNavigate();
    const [subtitle] = useOutletContext();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
   
 const API = process.env.REACT_APP_API_URL;

  const isMobile = window.innerWidth < 768;
  const SECTION_HEIGHT = isMobile ? "300vh" : "410vh";
  const MAX_PUSH = isMobile ? 70 : 320; 
  const CARD_HEIGHT = isMobile ? 150 : 300;
  const INITIAL_OFFSET = isMobile
    ? 0.18 * window.innerWidth // ~8% of screen width
    : 0.15 * window.innerWidth;
  const IMAGE_RANGE = isMobile ? ["0%", "800%"] : ["0%", "990%"];

  const imageY = useTransform(scrollYProgress, [0, 1], IMAGE_RANGE);

  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => setProgress(v));
    return () => unsubscribe && unsubscribe();
  }, [scrollYProgress]);

   const getImageURL = (img) => {
  if (!img) return "/placeholder.jpg";

  if (img.startsWith("http")) return img;

  
  return img.startsWith("/")
    ? `${API}${img}`
    : `${API}/${img}`;
}

  
  return (
    <>
     
      <section
        ref={ref}
        style={{
          height: SECTION_HEIGHT,
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          
        }}
        className="sectionTwoScroll"
      >
        {/* Image on left moving down */}
        <motion.img
          src={yellowCar}
          alt="Passing Car"
          style={{
           
            transform: "translateX(-50%)",
            y: imageY,
           
            zIndex: 1,
            filter: "drop-shadow(5px 5px 15px black)",
          }}
          className="yellowCarImage"
        />

        {/* Cards stacked over image initially, moving right as image scrolls past */}
        <div
          style={{
            position: "relative",
            width: "45%",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            marginLeft: "10%",
            zIndex: 2,
          }}
        >

           {showLoader && (
    <div className="loader-wrapper">
      <Loader />
    </div>
  )}

  {!showLoader &&
          cards.slice(8, 15).map((card, index) => {
            const start = 0.1 + index * 0.08;
            let xOffset = INITIAL_OFFSET;

            if (progress >= start) {
              const t = Math.min((progress - start) / 0.2, 1); // Smooth step
              xOffset = INITIAL_OFFSET + MAX_PUSH * t;
            }

            return (
              <motion.div
                key={card._id}
                style={{
                  x: xOffset,
                  height: CARD_HEIGHT,
                  background: "#edebd7",
                  borderRadius: 14,
                  overflow: "hidden",
                  filter: "drop-shadow(5px 5px 15px #e3b23c)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  width: "100%",
                }}
                 onClick={() =>
                  window.open(`/avticikiBre/galleryCars/${card._id}`, "_blank")
                }
              >
                <img
                  src={getImageURL(card.images?.[0])}
                  alt={card.model}
                  style={{
                    width: "100%",
                    height: "89%",
                    objectFit: "cover",
                  }}
                />
                <div
                className="text-card-model"
                 
                >
                  {card.model}
                </div>
              </motion.div>
            );
          })}
        </div>
        <motion.div
          className="buttonMoreTwo"
          initial={{ x: -170, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          <CarButton width={200}  text={subtitle?"Види галерија":"See gallery"}   onClick={() => navigate("galleryCars")}/>
        </motion.div>

        <div className="buttonMoreTwoMob">
          <CarButton width={120}  text={subtitle?"Види галерија":"See gallery"}   onClick={() => navigate("galleryCars")} />
        </div>
      </section>

      <div className="divStopTwo"></div>
    </>
  );
}