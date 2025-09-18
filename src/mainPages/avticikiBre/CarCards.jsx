import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import blueCar from "../../images/avticikiBre-images/blueCar.png";
import CarButton from "../carButton/CarButton";
import { cardsData } from "./cardsData/cardsData";
import "./CarCards.css";

export default function PassingImageGrid() {
  const navigate = useNavigate();

  const ref = useRef(null);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const tunables = isMobile
    ? {
        SECTION_HEIGHT: "370vh",
        GRID_WIDTH: "95%",
        AMPLITUDE: 100,
        ROW_WINDOW: 0.45,
        ROW_STAGGER: 0.15,
        imageRange: ["0%", "915%"], // smaller travel for mobile
      }
    : {
        SECTION_HEIGHT: "340vh",
        GRID_WIDTH: "80%",
        AMPLITUDE: 182,
        ROW_WINDOW: 0.4,
        ROW_STAGGER: 0.11,
        imageRange: ["0%", "907%"], // full travel for desktop
      };

  // Scroll progress tied to this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: isMobile
      ? ["start start", "end end"] // mobile
      : ["start center", "end center"], // desktop
  });
  const imageY = useTransform(scrollYProgress, [0, 1], tunables.imageRange);

  // Mirror progress into a plain number for per-card math (no extra hooks)
  const [p, setP] = useState(0);
  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => setP(v));
    return () => unsub && unsub();
  }, [scrollYProgress]);

  // Compute per-card horizontal shift from numeric progress
  const calcShift = (progress, rowIndex, isLeft) => {
    const start = 0.1 + rowIndex * tunables.ROW_STAGGER;
    const end = start + tunables.ROW_WINDOW;
    if (progress <= start || progress >= end) return 0;

    const mid = (start + end) / 2;
    const t =
      progress < mid
        ? (progress - start) / (mid - start) // 0 → 1
        : (end - progress) / (end - mid); // 1 → 0

    const dir = isLeft ? -1 : 1;
    return dir * tunables.AMPLITUDE * t;
  };

  return (
    <>
      <section
        ref={ref}
        style={{
          height: tunables.SECTION_HEIGHT,
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          padding: "6vh 0",
        }}
        className="sectionScroll"
      >
        {/* Moving image through the center */}
        <motion.img
          src={blueCar}
          alt="Passing"
          className="bluecarimage"
          style={{
            transform: "translateX(-50%)",
            y: imageY,
            zIndex: 2,
          }}
        />

        {/* Cards grid (two columns) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
            width: tunables.GRID_WIDTH,
            maxWidth: 1100,
            zIndex: 1,
          }}
        >
          {cardsData.map((card, index) => {
            const rowIndex = Math.floor(index / 2);
            const isLeft = index % 2 === 0;
            const x = calcShift(p, rowIndex, isLeft);

            return (
              <motion.div
                key={card.id}
                style={{
                  x, // numeric px is fine
                  background: "#edebd7",
                  borderRadius: 14,
                  overflow: "hidden",
                  boxShadow: "0 18px 25px #e3b23c",
                }}
                onClick={() =>
                  window.open(`/avticikiBre/galleryCars/${card.id}`, "_blank")
                }
              >
                <img
                  src={card.img}
                  alt={card.title ?? `Card ${card.id}`}
                  style={{
                    width: "100%",
                    height: 240,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                {card.subtitle && (
                  <div
                    style={{
                      padding: "0.9rem 1rem 1.1rem",
                      fontWeight: 700,
                      fontSize: "1rem",
                      textAlign: "center",
                    }}
                  >
                    {card.subtitle}
                  </div>
                )}
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
          <CarButton
            width={200}
            text={"Види галерија"}
            onClick={() => navigate("galleryCars")}
          />
        </motion.div>

        <div className="buttonMoreMob">
          <CarButton
            width={120}
            text={"Види галерија"}
            onClick={() => navigate("galleryCars")}
          />
        </div>
      </section>

      <div className="divStop"></div>
    </>
  );
}
