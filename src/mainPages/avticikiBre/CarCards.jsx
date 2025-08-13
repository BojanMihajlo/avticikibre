import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import blueCar from "../../images/avticikiBre-images/blueCar.png";
import colcar1 from "../../images/colcar1.jpg";
import colcar2 from "../../images/colcar2.jpg";
import colcar3 from "../../images/colcar3.jpg";
import colcar4 from "../../images/colcar4.jpg";
import colcar5 from "../../images/colcar5.jpg";
import colcar6 from "../../images/colcar6.jpg";

export default function PassingImageGrid({
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

  // Scroll progress tied to this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  // Use MotionValue for the center image vertical movement (keeps it silky)
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "700%"]);

  // Mirror progress into a plain number for per-card math (no extra hooks)
  const [p, setP] = useState(0);
  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => setP(v));
    return () => unsub && unsub();
  }, [scrollYProgress]);

  // Tunables
  const SECTION_HEIGHT = "280vh"; // scroll room
  const GRID_WIDTH = "80%";
  const AMPLITUDE = 120; // px each card slides outward at peak
  const ROW_WINDOW = 0.3; // how long each row is "active"
  const ROW_STAGGER = 0.22; // delay between rows

  // Compute per-card horizontal shift from numeric progress
  const calcShift = (progress, rowIndex, isLeft) => {
    const start = 0.1 + rowIndex * ROW_STAGGER;
    const end = start + ROW_WINDOW;
    if (progress <= start || progress >= end) return 0;

    const mid = (start + end) / 2;
    const t =
      progress < mid
        ? (progress - start) / (mid - start) // 0 → 1
        : (end - progress) / (end - mid); // 1 → 0

    const dir = isLeft ? -1 : 1;
    return dir * AMPLITUDE * t;
  };

  return (
    <section
      ref={ref}
      style={{
        height: SECTION_HEIGHT,
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "#6e675f",
        padding: "6vh 0",
      }}
    >
      {/* Moving image through the center */}
      <motion.img
        src={blueCar}
        alt="Passing"
        style={{
          position: "absolute",
          top: 0,
          //   left: "50%",
          transform: "translateX(-50%)",
          y: imageY,
          zIndex: 2,
          width: 220,
          height: "auto",

          filter: "drop-shadow(5px 5px 15px #e3b23c)",
        }}
      />

      {/* Cards grid (two columns) */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1.2rem",
          width: GRID_WIDTH,
          maxWidth: 1100,
          zIndex: 1,
        }}
      >
        {cards.map((card, index) => {
          const rowIndex = Math.floor(index / 2);
          const isLeft = index % 2 === 0;
          const x = calcShift(p, rowIndex, isLeft);

          return (
            <motion.div
              key={card.id}
              style={{
                x, // numeric px is fine
                background: "#fff",
                borderRadius: 14,
                overflow: "hidden",
                boxShadow: "0 10px 28px rgba(0,0,0,0.12)",
              }}
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
              {card.title && (
                <div
                  style={{
                    padding: "0.9rem 1rem 1.1rem",
                    fontWeight: 700,
                    fontSize: "1rem",
                    textAlign: "center",
                  }}
                >
                  {card.title}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
