import React from "react";
import "./CollectorCars.css";
import { useOutletContext } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

import colcar1 from "../../images/colcar1.jpg";
import colcar2 from "../../images/colcar2.jpg";
import colcar3 from "../../images/colcar3.jpg";
import colcar4 from "../../images/colcar4.jpg";
import colcar5 from "../../images/colcar5.jpg";
import colcar6 from "../../images/colcar6.jpg";
import colcar7 from "../../images/colcar7.jpg";
import colcar8 from "../../images/colcar8.jpg";

export default function CollectorCars() {
  const [subtitle] = useOutletContext();
  const images = [
    colcar1,
    colcar2,
    colcar3,
    colcar4,
    colcar5,
    colcar6,
    colcar7,
    colcar8,
  ];

  const [show, setShow] = useState(false);
  const containerRef = useRef(null);

  // Detect when component is in viewport
  useEffect(() => {
    const node = containerRef.current; // copy to local variable
    const observer = new IntersectionObserver(
      ([entry]) => setShow(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (node) observer.observe(node);
    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  return (
    <div>
      <div
        className="first-info"
        ref={containerRef}
        style={{ position: "relative" }}
      >
        <div className="first-info-wrap">
          <div className="left-text">
            <h1 className="montserrat">
              {subtitle
                ? "Запознај се со нашиот колекционерски свет"
                : "Get to know our collection world"}
            </h1>
          </div>

          <div className="right-text">
            <h3 className="montserrat">
              <span>+700</span>{" "}
              {subtitle
                ? "колекционери на едно место "
                : "collectors in one place"}
            </h3>
            <div className="about-hobby">
              <p className="montserrat">
                {subtitle
                  ? "2-3 збора за нашето ХОБИ собирањето на DIE-CAST модели,е едукативна активност во која можат да уживаат и младите и старите генерации.Преку ова хоби можете да научите многу за реалните автомобили.Да си создадете еден Ваш свет на минијатури кои ќе ви биднат прибежиштево одредени моменти кои ќе придонесат до подобро расположение.Уживајте во вашето хоби."
                  : "2-3 words about our HOBBY collecting DIE-CAST models an educational activity that can be enjoyed by young people and the old generations. Through this hobby you can learn a lot about real cars. To create your own world of miniatures which will be your refuge certain moments that will contribute to a better mood. Enjoy your hobby."}
              </p>
            </div>
          </div>
        </div>

        <div>
          <AnimatePresence>
            {show &&
              images.map((src, index) => (
                <motion.img
                  key={index}
                  src={src}
                  initial={{
                    opacity: 0,
                    x: Math.random() * 400 - 200,
                    y: Math.random() * 400 - 200,
                    rotate: Math.random() * 30 - 15,
                  }}
                  animate={{
                    opacity: 1,
                    x: Math.random() * 200 - 100,
                    y: Math.random() * 200 - 100,
                    rotate: Math.random() * 45 - 22,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.3 }}
                  style={{
                    position: "absolute",
                    top: "58%",
                    left: `${10 + Math.random() * 50}%`,
                    transform: `rotate(${Math.random() * 60 - 30}deg) scale(${
                      0.8 + Math.random() * 0.5
                    })`,
                    opacity: show ? 1 : 0,
                    transition: "opacity 1s ease-out",
                    width: "250px",
                    height: "auto",
                    borderRadius: "10px",
                  }}
                />
              ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
