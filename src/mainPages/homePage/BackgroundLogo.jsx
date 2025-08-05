import React from "react";
import "./BackgroundLogo.css";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import logo from "../../images/logo2.png";
import { NavLink } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const texts = ["#AvticikiBre#", "#Avtomobilizam#", "#RogueBrush#", "#Local#"];

export default function BackgroundLogo() {
  const [index, setIndex] = useState(0); // which text
  const [subIndex, setSubIndex] = useState(0); // letters in text
  const [deleting, setDeleting] = useState(false);
  const [hovered, setHovered] = useState(false);

  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.3 });

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

  useEffect(() => {
    if (inView) {
      controls.start({
        scale: 1.5,
        transition: { duration: 1, ease: "easeOut" },
      });
    } else {
      controls.start({
        scale: 0,
        transition: { duration: 0.8, ease: "easeIn" },
      });
    }
  }, [inView, controls]);

  return (
    <div className="backLogoMain">
      <div className="firstdiv">
        <motion.h1
          animate={{ y: hovered ? 400 : 0 }}
          transition={{ type: "spring", stiffness: 50, damping: 12 }}
          onMouseLeave={() => setHovered(false)}
          className="motionH1"
        >
          {texts[index].substring(0, subIndex)}
          <span
            style={{ borderRight: "2px solid #423e37", marginLeft: "2px" }}
          />
        </motion.h1>

        <div className="textBre" onMouseEnter={() => setHovered(true)}>
          <p>
            @diecastclubavticikibrekumanovo#avticikibre
            <span>
              <NavLink
                style={{
                  textDecoration: "none",
                  color: "#edebd7",
                  fontWeight: "bolder",
                }}
              >
                AVTICIKIBRE
              </NavLink>
            </span>
            можеда се отвори за да се откријат деталите на моторот. Приближна
            скала 1/55. Модел базиран на Datsun 510 (RHD) од 1971 година.
            Приближна скала 1/55. Модел базиран на Datsun 510 (RHD) од 1971
            година.
            <span>
              <NavLink
                style={{
                  textDecoration: "none",
                  color: "#edebd7",
                  fontWeight: "bolder",
                }}
              >
                AVTOMOBILIZAM
              </NavLink>
            </span>
            Приближна скала 1/55. Модел базиран на Datsun 510 (RHD) од 1971
            година. @diecastclubavticikibrekumanovo#avticikibre# Хаубата можеда
            се отвори за да се откријат деталите на моторот. Приближна скала
            1/55. Модел базиран на Datsun 510 (RHD) од 1971 година.
            <span>
              <NavLink
                style={{
                  textDecoration: "none",
                  color: "#edebd7",
                  fontWeight: "bolder",
                }}
              >
                ROGUEBRUSH
              </NavLink>
            </span>{" "}
            @diecastclubavticikibrekumanovo#avticikibre# година. Приближна скала
            1/55. Модел базиран на Datsun 510 (RHD) од 1971 година.
            <span>
              <NavLink
                style={{
                  textDecoration: "none",
                  color: "#edebd7",
                  fontWeight: "bolder",
                }}
              >
                LOCAL
              </NavLink>{" "}
            </span>{" "}
            @diecastclubavticikibrekumanovo#avticikibre#
          </p>
        </div>
      </div>

      <div className="secondiv">
        <div>
          <motion.img
            ref={ref}
            src={logo}
            alt="Smooth Zoom + Hover Rotate"
            animate={controls}
            whileHover={{
              rotate: 30,
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
            className="motionImg"
          />
        </div>
      </div>
    </div>
  );
}
